import Vue from 'vue'
import Router from 'vue-router'
import Store from '@/stores/system'
// 进度条样式
import 'nprogress/nprogress.css'
import NProgress from 'nprogress'

// 其他路由
import { System, LOGIN_PAGE } from './system'

// 路由白名单配置
import RouterIgnore from './router-ignore'
Vue.use(Router)

// 这里处理 router
const router = new Router({
  routes: System
})

// 路由处理
// 参考 https://blog.csdn.net/qq673318522/article/details/55506650
// https://github.com/superman66/vue-axios-github/blob/master/src/router.js
router.beforeEach((to, from, next) => {
  // 获取路由 path
  if (RouterIgnore.match(to.path)) { // 不需要拦截
    // 开始导航条动画
    NProgress.start()
    next() // 这里的next设计，与node的express很类似
  } else {
    // 判断有没有token 使用 vuex 管理
    if (Store.state.token) {
      NProgress.start()
      next() // 这里的next设计，与node的express很类似
    } else {
      // 去登录页面，传入将跳转的路由path作为参数，登录成功后跳转到该路由
      next({
        path: LOGIN_PAGE,
        query: {redirect: to.fullPath}
      })
    }
  }
})

router.afterEach((to, from) => {
  // 结束导航条动画
  NProgress.done()
})

export default router
