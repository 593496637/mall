<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template #center>
        <div>
          购物街
        </div>
      </template>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar.vue";
export default {
  name: "Home",
  components: { NavBar },
  data() {
    return {};
  }
};
</script>
<style>
.home-nav {
  background: var(--color-tint);
  color: #fff;
}
</style>
