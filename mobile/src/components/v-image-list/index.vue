<style lang="less" scoped>
  .img-header {
    width: 100%;
    object-fit: cover;
  }
</style>

<template>
  <el-row :style="paddingStyle">
    <el-col :span="5">
      <img class="img-header" :src="path" :style="imgStyle">
    </el-col>

    <el-col :span="18" class="margin-left-s">
      <slot />
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'v-image-list',
  desc: '左图片右内容组件',
  props: {
    path: String, // 图片路径
    radius: { // 图片圆角
      type: String,
      default: '4px'
    },
    padding: {
      type: String,
      default: '5px'
    }
  },
  computed: {
    imgStyle() {
      if (this.radius) {
        return { borderRadius: this.radius };
      }
      return '';
    },
    paddingStyle() {
      if (this.padding) {
        return { padding: this.padding };
      }
      return '';
    }
  }
};
</script>
