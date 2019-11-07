<template>
  <div class="tab-bar-item" @click="itemClick">
    <div class="item-icon" v-if="!isActive"><slot name="icon"/></div>
    <div class="item-active-icon" v-else><slot name="icon-active"/></div>
    <div class="item-text" :style="isActiveColorStyle"><slot name="text"/></div>
  </div>
</template>
<script>
export default {
  name: "TabBarItem",
  data() {
    return {
      // isActive: true
    };
  },
  props: {
    path: String,
    isActiveColor: {
      type: String,
      default: "red"
    }
  },
  computed: {
    // 判断哪个按钮处于活跃状态
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    isActiveColorStyle() {
      return this.isActive ? { color: this.isActiveColor } : {};
    }
  },
  methods: {
    itemClick() {
      // 解决两次点击同一个按钮报错的问题
      let route = this.$route.path;
      let index = route.indexOf(this.path);
      if (index === -1) {
        this.$router.replace(this.path);
      }
    }
  }
};
</script>
<style scoped>
.tab-bar-item {
  flex: 1;
  height: 49px;
  text-align: center;
}

.item-icon img,
.item-active-icon img {
  width: 24px;
  height: 24px;
  margin-top: 5px;
  vertical-align: middle;
}

.item-text {
  font-size: 12px;
  margin-top: 3px;
  color: #333;
}

.active {
  color: #dc5797;
}
</style>