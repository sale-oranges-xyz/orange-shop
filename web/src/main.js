// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/stores'
import Element from 'element-ui'
import '@static/common/common.less'

// global components
import components from '@/plugins/components'
Vue.use(components)

Vue.config.productionTip = false
// 使用element ui 大小
Vue.use(Element, { size: 'small' })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
