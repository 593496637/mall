<template>
  <div id="home">
    <!-- 导航栏 -->
    <nav-bar class="home-nav">
      <template #center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <!-- 吸顶菜单 -->
    <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl1" class="tab-control" v-show="isFixed"></tab-control>
    <scroll class="wrapper" 
      :data="dataChange" 
      :probeType="probeType" 
      :listenScroll="listenScroll" 
      :pullup="pullup"
      ref="scroll" 
      @scroll="scroll"
      @scrollToEnd="scrollToEnd"
      >
      <div class="content">
        <!-- 轮播图 -->
        <home-swiper :banners="banners.list" @swiperImageLoad.once="imageLoad"></home-swiper>
        <!-- 导航菜单 -->
        <recommend-view :recommends="recommends.list"></recommend-view>
        <!-- 推荐菜单 -->
        <feature></feature>
        <!-- 吸顶菜单 -->
        <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl2"></tab-control>
        <!-- 商品 -->
        <goods-list :goods="activeGoodsList"></goods-list>
      </div>
    </scroll>
    <back-top @click.native="backTop" v-show="isShowBackTop"/>
  </div>
</template>
<script>
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import Feature from "./childComps/Feature";

import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/common/backTop/BackTop";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";

import { getHomeMultidata, getHomeGoods } from "network/home.js";
import { debounce } from "common/utils.js";
export default {
  name: "Home",
  components: {
    HomeSwiper,
    RecommendView,
    Feature,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goodsList: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      clickList: ["pop", "new", "sell"],
      activeIndex: 0,
      dataChange: 0,
      listenScroll: true,
      probeType: 3,
      isShowBackTop: false,
      pullup: true,
      isFixed: false,
      taboffsetTop: 0
    };
  },
  created() {
    this.initData();
    this.getHomeGoodsList("pop");
    this.getHomeGoodsList("new");
    this.getHomeGoodsList("sell");
  },
  mounted() {
    // 调用防抖动函数
    let debounceFn = debounce(content => {
      console.log(content);
      this.$refs.scroll.refresh();
    }, 500);
    // 监听图片加载完成 --事件总线
    this.$bus.$on("imageLoadEnd", () => {
      debounceFn("防抖了哦");
    });
  },
  computed: {
    // 展示被点击菜单的数据
    activeGoodsList() {
      this.change();
      this.activeType = this.clickList[this.activeIndex];
      return this.goodsList[this.activeType].list;
    }
  },
  methods: {
    // 初始化
    initData() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner;
        this.recommends = res.data.recommend;
        this.change();
      });
    },
    // 获取商品列表
    getHomeGoodsList(type) {
      const page = this.goodsList[type].page + 1;
      getHomeGoods(type, page)
        .then(res => {
          this.goodsList[type].list.push(...res.data.list);
          this.goodsList[type].page++;
          this.change();
          this.pullup = true;
        })
        .catch(err => {
          this.pullup = true;
        });
    },
    // 吸顶菜单点击事件
    tabClick(index) {
      this.activeIndex = index;
      // 使吸顶菜单保持点击状态一致
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    // 刷新监听页面高度
    change() {
      this.dataChange++;
    },
    // 返回顶部
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 300);
    },
    // 监听滚动
    scroll(pos) {
      // 返回顶部是否显示
      this.isShowBackTop = pos.y < -1000 ? true : false;

      // 决定controlTop是否吸顶
      this.isFixed = -pos.y > this.taboffsetTop;
    },
    // 滚动到底部
    scrollToEnd() {
      this.pullup = false;
      this.getHomeGoodsList(this.activeType);
    },
    // 监听轮播图图片是否加载完毕
    imageLoad() {
      this.taboffsetTop = this.$refs.tabControl2.$el.offsetTop;
    }
  },
  beforeDestroy() {
    this.$bus.$off("imageLoadEnd");
  }
};
</script>
<style scoped>
/* 第一种方式的局部高度设置顶部距离 */
/* #home {
  padding: 44px 0 50px;
} */
/* 第二种方式的定位布局 */
#home {
  position: relative;
  height: 100vh;
}

.home-nav {
  background: var(--color-tint);
  color: #fff;
  /* 原生导航的时候，使顶部不随页面一起滚动时需要fixed，但是下面内容用了better-scroll ，
    则顶部导航就不需要进行定位了
   */
  /* position: fixed;
  top: 0;
  left: 0;
  z-index: 1; */
}

.wrapper {
  /* 第一种方式的局部高度 */
  /* height: calc(100vh - 93px);
  overflow: hidden; */
  /* 第二种方式的定位布局 */
  position: absolute;
  overflow: hidden;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 50px;
}
.tab-control {
  position: relative;
  z-index: 11;
}
</style>
