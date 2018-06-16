<style lang="less" scoped>
  @import "~@static/swipe.less";
  .van-swipe-item {
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>

<template>
  <van-swipe class="carousel-height" :autoplay="3000" @change="onChange">
    <van-swipe-item v-for="(image, index) in imgList" :key="index">
        <img v-lazy="image" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
// components
import { Swipe, SwipeItem } from 'vant';
// apis
import Api from '@/apis/home/api-swipe';

export default {
  name: 'v-home-swipe',
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  data() {
    return {
      imgList: []
    };
  },
  created() {
    Api.getSwipes().then((res) => {
      this.imgList = res;
    });
  },
  methods: {
    onChange(index) {
      // console.log('onChange', index);
    }
  }
};
</script>
