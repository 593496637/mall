<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :key="item.iid+Math.random()" :goods-item="item" class="goods-item"></goods-list-item>
  </div>
</template>
<script>
import GoodsListItem from "./GoodsListItem";
export default {
  components: { GoodsListItem },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style scoped>
.goods {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.goods-item {
  /* flex: 1; */
  width: 46%;
}
</style>
