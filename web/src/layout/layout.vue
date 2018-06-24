<style scoped lang="less">
  @import '~@static/common/common.less';

  @header-height: 60px;
  .el-menu{border-right: none;}

  .padding-btm{ .padding-btm; }
  .power-off{padding-left: 20px;border-left: 1px solid #ddd;}
  .square{width:50px; height:50px; border-radius: 5px;margin-top: 3px;}

  .el-header{
    background-color: var(--white);
    color: #606266;
    line-height: @header-height;
    border-bottom: 1px solid #ddd;
  }

  .el-aside {
    background-color: rgb(84, 92, 100);
    color: var(--white);
    line-height: 100vh;
    height: 100vh;
    border-right: 1px solid #606266;
  }
  .el-aside > .header{
    min-height: @header-height;
  }

  .el-main {
    background-color: #f2f2f2;
    color: #333;
  }
</style>

<template>
  <el-container>
    <el-aside width="66px">
      <div class="header"></div>
      <el-menu :collapse="isCollapse" :default-active="activeIndex" @select="select" background-color="#545c64" :router="true">
          <el-menu-item index="/home" :route="{path: '/home'}">
            <i class="el-icon-document"></i>
           <span slot="title">首页</span>
          </el-menu-item>

          <el-submenu index="/sys-components">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>系统组件</span>
            </template>

            <el-menu-item index="/sys-components" :route="{path: '/home/sys-page'}">
              <i class="el-icon-document"></i>
             <span slot="title">分页</span>
            </el-menu-item>

          </el-submenu>

      </el-menu>
    </el-aside> <!--侧边栏-->

    <el-container>
      <el-header>
        <div class="el-pagination__rightwrapper power-off">
          <el-button type="text" style="font-size: 16px;"><v-font-awesome icon="power-off"></v-font-awesome></el-button>
        </div><!--退出 -->
        <div class="el-pagination__rightwrapper">
          <el-button type="text" style="font-size: 16px; color:var(--black);">
            <el-badge :value="3" style="line-height: 30px; margin-right: 20px;">
              <v-font-awesome icon="envelope"></v-font-awesome>
            </el-badge>
          </el-button>
        </div><!--消息-->
        <img class="square" src="https://cn.vuejs.org/images/logo.png">
      </el-header>
      <el-main>
        <el-breadcrumb separator="/" class="padding-btm">
            <el-breadcrumb-item>{{title}}</el-breadcrumb-item>
        </el-breadcrumb>
        <!--用户主界面 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
/**
 * 设置参数
 * @param that 当前vue实例对象
 */
function setMsg (that) {
  let fullPath = ''
  let title = ''
  const history = that.$router.history
  if (history) {
    // console.log(history)
    fullPath = history.current.fullPath
    title = history.current.meta.title
    return {fullPath: fullPath, title: title}
  }
  return null
}

export default {
  data () {
    return {
      isCollapse: true,
      activeIndex: '/home',
      title: '首页'
    }
  },
  created () {
    const msg = setMsg(this)
    if (msg) {
      this.title = msg.title
      this.activeIndex = msg.fullPath
    }
    // console.log(msg)
  },
  methods: {
    select (val) {
      const msg = setMsg(this)
      if (msg) {
        this.title = msg.title
        this.activeIndex = msg.fullPath
      }
      // console.log('菜单激活', val)
    }
  }
}
</script>
