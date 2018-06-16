<style lang="less" scoped>

</style>

<template>
  <div>
    <!-- 轮播 -->
    <v-swipe />
    <!-- 分类 -->
    <v-flex-type class="padding-top-m padding-bottom-s bg-white " />
    <!-- 公告栏 -->
    <v-notice-bar class="margin-top-s" />
    <!-- 精彩话题 -->
    <v-topic class="margin-top-m" />
  </div>
</template>

<script>
import VSwipe from './components/v-swipe.vue';
import VFlexType from './components/v-flex-type.vue';
import VNoticeBar from './components/v-notice-bar.vue';
import VTopic from './components/v-topic.vue';

export default {
  desc: '首页',
  components: {
    VSwipe,
    VFlexType,
    VNoticeBar,
    VTopic
  }
};
</script>
