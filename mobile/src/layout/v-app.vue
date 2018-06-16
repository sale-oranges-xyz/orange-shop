<style lang="less" scoped>

</style>

<template>
  <el-row>
    <el-col class="el-col-xl-offset-6 el-col-lg-offset-5" :xs="24" :sm="24" :md="20" :lg="14" :xl="12" > <!-- 响应式布局处理 -->
      <slot></slot>
    </el-col>
  </el-row>
</template>

<script>

export default {
  name: 'v-app',
  desc: '响应式布局页面'
};
</script>
