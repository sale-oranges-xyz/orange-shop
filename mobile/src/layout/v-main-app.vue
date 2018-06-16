<style lang="less" scoped>
  @import '~@static/common/style/var.less';

  .v-main {
    min-height: calc(100vh - 4rem);
    margin-bottom: 5px;
    overflow-x: hidden;
    overflow-y: scroll;
  }

  .v-footer {
    height: 3.5rem;
    background-color: @white;
  }
</style>

<template>
  <v-app>
    <slot name="header"></slot>
    <main class="v-main">
      <slot name="main"></slot>
    </main>
    <footer class="v-footer">
      <slot name="footer"></slot>
    </footer>
  </v-app>
</template>

<script>

export default {
  name: 'v-main-app',
  desc: '底部导航栏固定的app布局'
};
</script>
