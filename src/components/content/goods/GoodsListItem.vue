<template>
  <div class="goods-item">
    <div class="img-box">
      <img :src="goodsItem.show.img" alt="" @load="imageLoad">
    </div>
    <p class="title">{{goodsItem.title}}</p>
    <span class="price">￥{{goodsItem.price}}</span>
    <span class="collect">★{{goodsItem.cfav}}</span>
  </div>
</template>
<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  created() {},
  methods: {
    imageLoad() {
      this.$bus.$emit("imageLoadEnd");
    }
  }
};
</script>
<style scoped>
.goods-item {
  /* border: 1px solid red; */
  padding-bottom: 15px;
}
.goods-item .img-box {
  padding-bottom: 150%;
  position: relative;
}
.goods-item .img-box img {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.goods-item p {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.title {
  padding: 5px 0;
}
.price {
  color: red;
  margin-right: 20px;
  vertical-align: middle;
}
.collect {
  vertical-align: middle;
}
</style>
