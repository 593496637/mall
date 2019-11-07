<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" :key="item.id" class="tab-control-item" :class="{active:currentIndex===index}" @click="itemClick(index)">
      <span>{{ item }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("tabClick", index);
    }
  }
};
</script>
<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  background: #fff;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  z-index: 9;
}
.tab-control-item {
  flex: 1;
}

.active {
  color: var(--color-tint);
}
.active span {
  padding: 3px;
  border-bottom: 2px solid var(--color-tint);
}
</style>
