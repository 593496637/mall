<template>
<div>
    <swiper class="swiper-container">
      <swiper-item v-for="(item, index) in topImages" :key="index">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>    
</div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  components: {
    Swiper,
    SwiperItem
  },
  data() {
    return {};
  },
  props: {
    topImages: {
      type: Array,
      default: {}
    }
  },
  watch: {
    topImages(old){
      console.log(old);
    }
  },
};
</script>

<style scoped>
.swiper-container{
  height: 300px;
  overflow: hidden;
}
</style>