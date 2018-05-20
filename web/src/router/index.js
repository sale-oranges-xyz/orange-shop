import Vue from 'vue'
import Router from 'vue-router'
// .vue文件
import Login from '@/components/login'
import Home from '@/layout/layout'
// router

Vue.use(Router)

let routers = [
  {
    path: '/',
    component: Login,
    meta: {
      title: '登录'
    }
  },
  {
    path: '/home',
    component: Home,
  }
]

export default new Router({
  routes: routers
})
