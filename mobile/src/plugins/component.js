// 注册全局组件
// 参考 https://blog.csdn.net/runonway/article/details/78998631
import ElRow from '@/components/row';
import ElCol from '@/components/col';
import MainApp from '@/layout/v-main-app';
import VApp from '@/layout/v-app';
import VFlex from '@/components/v-flex';
import VFlexItem from '@/components/v-flex-item';
import ImageList from '@/components/v-image-list';
import VVanList from '@/components/v-van-list';

export default (Vue) => {
  Vue.component('el-row', ElRow);
  Vue.component('el-col', ElCol);
  Vue.component('v-main-app', MainApp);
  Vue.component('v-app', VApp);
  Vue.component('v-flex', VFlex);
  Vue.component('v-flex-item', VFlexItem);
  Vue.component('v-image-list', ImageList);
  Vue.component('v-van-list', VVanList);
};
