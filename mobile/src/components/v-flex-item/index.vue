<style lang="less" scoped>

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
    // left(偏左)/center(居中)/right(偏右)
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
