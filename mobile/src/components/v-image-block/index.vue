<style lang="less" scoped>
  .img {
    width: 100%;
    display: block;
  }
</style>

<template>
  <el-col :xs="xs" :sm="sm" :md="md" :lg="lg" :xl="xl" :style="paddingStyle">
    <img :src="path" class="img">
    <div>
      <slot />
    </div>
  </el-col>
</template>

<script>
export default {
  name: 'v-image-block',
  desc: '上图片下内容组件',
  props: {
    path: String,
    // 响应式布局 start
    xs: {
      type: Number,
      default: 12
    },
    sm: {
      type: Number,
      default: 12
    },
    md: {
      type: Number,
      default: 12
    },
    lg: {
      type: Number,
      default: 12
    },
    xl: {
      type: Number,
      default: 12
    },
    // 响应式布局 end
    // 间隔
    gutter: {
      type: [Number, String],
      default: 0
    }
  },
  computed: {
    paddingStyle() {
      if (typeof this.gutter === 'number' && this.gutter > 0) {
        return {
          padding: this.gutter + 'px'
        };
      } else if (typeof this.gutter === 'string') {
        return {
          padding: this.gutter
        };
      }
    }
  }
};
</script>
