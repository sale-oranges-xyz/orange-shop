/**
 * 精彩话题api
 */
import PromiseUtil from '@/utils/PromiseUtil';
import timg1 from '@static/common/images/timg_1.jpg';
import timg2 from '@static/common/images/timg-2_1.jpg';

export default {
  getTopic() {
    const content = [{
      path: timg1,
      sex: 'f',
      name: 'angel',
      online: true,
      latestLogin: '1小时前',
      topic: '地狱已经离我们很远很远。'
    }, {
      path: timg2,
      sex: 'f',
      name: 'devil',
      online: false,
      latestLogin: '10小时前',
      topic: '上帝已死，撒旦化身天使，施福人间。'
    }];
    return PromiseUtil.create(content);
  }
};
