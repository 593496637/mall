<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" isActiveColor="red">
        <template #icon>
          <img src="~assets/img/tabbar/home.svg" alt="">
        </template>
        <template #icon-active>
          <img src="~assets/img/tabbar/home_active.svg" alt="">
        </template>
        <template #text>
          <div>首页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/category"  isActiveColor="blue">
        <template #icon>
          <img src="~assets/img/tabbar/category.svg" alt="">
        </template>
        <template #icon-active>
          <img src="~assets/img/tabbar/category_active.svg" alt="">
        </template>
        <template #text>
          <div>分类</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/cart"  isActiveColor="pink">
        <template #icon>
          <img src="~assets/img/tabbar/cart.svg" alt="">
        </template>
        <template #icon-active>
          <img src="~assets/img/tabbar/cart_active.svg" alt="">
        </template>
        <template #text>
          <div>购物车</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/profile"  isActiveColor="green">
        <template #icon>
          <img src="~assets/img/tabbar/profile.svg" alt="">
        </template>
        <template #icon-active>
          <img src="~assets/img/tabbar/profile_active.svg" alt="">
        </template>
        <template #text>
          <div>个人中心</div>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>
<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  components: {
    TabBar,
    TabBarItem
  }
};
</script>
<style>
</style>
