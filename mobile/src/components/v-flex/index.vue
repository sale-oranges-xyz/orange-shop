<style lang="less" scoped>
  @import "~@static/common/style/flex.less";
</style>

<template>
    <div class="flex">
      <slot/>
    </div>
</template>

<script>
export default {
  name: 'v-flex',
  desc: 'flex 布局root DOM'
};
</script>
