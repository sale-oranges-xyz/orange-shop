<style lang="less" scoped>
  @import "~@static/common/style/flex.less";
  @import "~@static/common/style/common.less";

</style>

<template>
  <div class="flex-item" :class="[alignClass]">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'v-flex-item',
  desc: 'flex布局item',
  props: {
    align: {
      type: String,
      default: ''
    }
  },
  // 计算属性
  computed: {
    alignClass() {
      if (this.align) {
        return 'align-' + this.align;
      }
    }
  }
};
</script>
