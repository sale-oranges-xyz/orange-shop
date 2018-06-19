<style lang="less">
  @import "~@static/common/style/common.less";
  @import "~@static/common/style/var.less";  
  body {
    background-color: #f5f7fa;
    font-size: @font-size-l;
  }

  .van-tabbar-item--active{
    color: @pink;
  }
</style>

<template>
  <v-main-app id="app">
    <router-view slot="main" />
    <div slot="footer">
      <van-tabbar v-model="active" @change="tabbarChange">
        <van-tabbar-item icon="home">主页</van-tabbar-item>
        <van-tabbar-item icon="location" dot>附近</van-tabbar-item>
        <van-tabbar-item icon="chat" info="5">消息</van-tabbar-item>
        <van-tabbar-item icon="contact" >我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </v-main-app>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant';

export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  data() {
    return {
      active: 0
    };
  },
  methods: {
    tabbarChange(index) {
      if (index === 0) {
        this.$router.replace('/');
      } else if (index === 1) { }
    }
  }
};
</script>
