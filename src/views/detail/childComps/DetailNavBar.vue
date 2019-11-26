<template>
  <div>
    <nav-bar>
      <template #left>
        <div class="back" @click="back">
          <img src="~assets/img/common/back.svg" alt="">
        </div>
      </template>
      <template #center>
        <div class="title-box">
          <div class="title" v-for="(item, index) in titles" :key="index" :class="{active:index===currentIndex}" @click="activeItem(index)">
            {{item}}
          </div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  components: {
    NavBar
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  methods: {
    activeItem(index) {
      this.currentIndex = index;
    },
    back() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
.back {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.back img {
  width: 14px;
}
.title-box {
  display: flex;
}
.title-box .title {
  flex: 1;
  font-size: 14px;
}
.active {
  color: red;
}
</style>