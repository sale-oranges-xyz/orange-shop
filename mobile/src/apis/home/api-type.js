/**
 * 首页 分类api
 */

 import navS13Nan from '@static/common/images/nav_s13_nan.png';
 import navS13Nv from '@static/common/images/nav_s13_nv.png';
 import navS13Gc from '@static/common/images/nav_s13_gc.png';

 import PromiseUtil from '@/utils/PromiseUtil';

 export default {
   getTypes() {
     const content = [{
       path: navS13Nan,
       name: '找男友'
     }, {
       path: navS13Nv,
       name: '找女友'
     }, {
       path: navS13Gc,
       name: '交友圈'
     }];
     return PromiseUtil.create(content);
   }
 };
