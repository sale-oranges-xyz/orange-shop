<style lang="less" scoped>
  @import "~@static/common/style/var.less";
  .el-row {
    .el-col {
      img {
        height: 3rem;
      }
      .text-align(center); // 这是less 函数
    }
  }
</style>

<template>
  <el-row type="flex" justify="center">
    <el-col v-for="(item, index) in typeList" :key="index" :span="8" >
      <img :src="item.path" class="img">
      <div class="margin-top-s">{{item.name}}</div>
    </el-col>
  </el-row>
</template>

<script>
// api
import TypeApi from '@/apis/home/api-type';

export default {
  name: 'v-flex-type',
  desc: '首页分类',
  data() {
    return {
      typeList: []
    };
  },
  created() {
    TypeApi.getTypes().then((res) => {
      // console.log('res', res);
      this.typeList = res;
    });
  }
};
</script>
