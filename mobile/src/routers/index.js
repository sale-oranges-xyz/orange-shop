import Vue from 'vue';
import Router from 'vue-router';

// 其他路由
import TabberRouters from './tabbar';

Vue.use(Router);

const routers = TabberRouters;

export default new Router({
  routes: routers
});
