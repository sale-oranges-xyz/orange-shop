// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@static/common/common.less'

import 'nprogress/nprogress.css'
import NProgress from 'nprogress'

// 字体图标end
import FontAwesome from '@/components/font-awesome'
// 注册全局组件
Vue.component('font-awesome', FontAwesome)

Vue.config.productionTip = false
// 使用element ui
Vue.use(Element, { size: 'small' })

router.beforeEach((to, from, next) => {
  // 开始导航条动画
  NProgress.start()
  next() // 这里的next设计，与node的express很类似
})

router.afterEach((to, from) => {
  // 结束导航条动画
  NProgress.done()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
