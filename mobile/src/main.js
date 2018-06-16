import Vue from 'vue';
import App from './App.vue';
// routers
import router from '@/routers';
// global components
import components from '@/plugins/component';
Vue.use(components);

// global directives
import directives from '@/plugins/directives';
Vue.use(directives);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
