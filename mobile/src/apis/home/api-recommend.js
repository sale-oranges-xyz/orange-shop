/**
 * 推荐会员部分api
 */
// import PromiseUtils from '@/utils/promiseUtil';

export default {
  // 请求类型
  type: {
    member: 'm', // 推荐会员
    newest: 'n', // 最新会员
    bestPopular: 'b' // 鲜花榜
  },
  url: '/github/recommed'
};
