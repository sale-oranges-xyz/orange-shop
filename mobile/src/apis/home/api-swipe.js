/**
 * 首页 轮播 api
 */
import image1 from '@static/common/images/common_797_R5TxqVr9.jpg';
import image2 from '@static/common/images/common_865_TS1Y6iZx.jpg';

// then写法是新特性promise  参考 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise
export default {
  getSwipes() {
    return new Promise((resolve, reject) => {
      resolve([image1, image2]);
    });
  }
};
