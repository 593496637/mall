<template>
  <scroll class="wrapper">
    <ul class="content">
      <li v-for="item in 100" :key="item">{{item}}</li>
    </ul>
  </scroll>
</template>
<script>
// import BScroll from "@better-scroll/core";
import Scroll from "components/common/scroll/Scroll";
export default {
  components: {
    Scroll
  },
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    // this.$nextTick(() => {
    //   this.scroll = new BScroll(this.$refs.wrapper, {
    //     probeType: 3
    //   });
    // });
  }
};
</script>
<style scoped>
.wrapper {
  height: calc(100vh - 49px);
  overflow: hidden;
}
</style>
