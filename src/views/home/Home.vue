<template>
  <div id="home">
    <!-- 导航栏 -->
    <nav-bar class="home-nav">
      <template #center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <scroll class="wrapper" :data="dataChange">
      <div class="content">
        <!-- 轮播图 -->
        <home-swiper :banners="banners.list"></home-swiper>
        <!-- 导航菜单 -->
        <recommend-view :recommends="recommends.list"></recommend-view>
        <!-- 推荐菜单 -->
        <feature></feature>
        <!-- 吸顶菜单 -->
        <tab-control :titles="['流行','新款','精选']" class="tab-control" @tabClick="tabClick"></tab-control>
        <!-- 商品 -->
        <goods-list :goods="activeGoodsList"></goods-list>
      </div>
    </scroll>
  </div>
</template>
<script>
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import Feature from "./childComps/Feature";

import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";

import { getHomeMultidata, getHomeGoods } from "network/home.js";
export default {
  name: "Home",
  components: {
    HomeSwiper,
    RecommendView,
    Feature,
    NavBar,
    TabControl,
    GoodsList,
    Scroll
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
      dataChange: 0
    };
  },
  created() {
    this.initData();
    this.getHomeGoodsList("pop");
    this.getHomeGoodsList("new");
    this.getHomeGoodsList("sell");
  },
  computed: {
    // 展示被点击菜单的数据
    activeGoodsList() {
      const active = this.clickList[this.activeIndex];
      return this.goodsList[active].list;
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
      getHomeGoods(type, page).then(res => {
        this.goodsList[type].list.push(...res.data.list);
        this.goodsList[type].page++;
        this.change();
      });
    },
    // 吸顶菜单点击事件
    tabClick(index) {
      this.activeIndex = index;
    },
    change() {
      this.dataChange++;
      console.log(this.dataChange);
    }
  }
};
</script>
<style scoped>
/* 第一种方式的局部高度设置顶部距离 */
#home {
  padding: 44px 0 50px;
}
/* 第二种方式的定位布局 */
/* #home {
  position: relative;
  height: 100vh;
} */
.home-nav {
  background: var(--color-tint);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}

.tab-control {
  position: sticky;
  top: 44px;
}

.wrapper {
  /* 第一种方式的局部高度 */
  height: calc(100vh - 93px);
  overflow: hidden;
  /* 第二种方式的定位布局 */
  /* position: absolute;
  overflow: hidden;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 50px; */
}
</style>
