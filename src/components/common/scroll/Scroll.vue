<template>
  <div class="wrapper" ref="wrapper">
      <slot></slot>
  </div>
</template>
<script>
import BScroll from "@better-scroll/core";
export default {
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: 3
      });
    });
  }
};
</script>
<style scoped>
.wrapper {
  border: 1px solid red;
}
</style>

