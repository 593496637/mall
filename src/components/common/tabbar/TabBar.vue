<template>
  <div class="tab-bar">
    <slot/>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.tab-bar {
  display: flex;
  background: #f6f6f6;
  position: fixed;
  z-index: 10;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -2px 1px #efefef;
  overflow: hidden;
}
</style>
