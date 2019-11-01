<template>
  <div>
    <div class="tab-bar">
      <slot/>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.tab-bar {
  display: flex;
  background: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -2px 1px #efefef;
}
</style>
