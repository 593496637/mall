<template>
  <div class="detail">
    <detail-nav-bar></detail-nav-bar>
    <scroll class="wrapper" ref="scroll">
      <div class="content">
        <detail-swiper :topImages="topImages"></detail-swiper>
        <detail-base-info :goods="goods"></detail-base-info>
        <detail-shop-info :shop="shop"></detail-shop-info>  
      </div>
    </scroll>    
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import Scroll from "components/common/scroll/Scroll";
import { getDetail, Goods, Shop } from "network/detail";
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll
  },
  data() {
    return { iid: "", topImages: null, goods: {}, shop: {} };
  },
  created() {
    //1 保存传入的id
    this.iid = this.$route.params.iid;
    //2 根据iid请求详情数据
    getDetail(this.iid).then(res => {
      console.log(res);

      const data = res.result;
      this.topImages = res.result.itemInfo.topImages;

      // 获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      // 店铺信息
      this.shop = new Shop(data.shopInfo);

      this.$nextTick(function() {
        this.$refs.scroll.refresh();
      });
    });
  }
};
</script>

<style scoped>
.detail {
  position: relative;
  z-index: 12;
  background: #fff;
  height: 100vh;
}
.wrapper {
  height: calc(100% - 44px);
  overflow: hidden;
}
</style>