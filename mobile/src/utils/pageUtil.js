/**
 * 分页数据模拟脚本
 */
import PromiseUtil from './promiseUtil';

export default {
  /**
   * 模拟分页请求
   * @param  url         请求
   * @param  params 请求参数
   */
  getPage(url, params = {}) {
    let content;
    if (params.currentPage) { // 不是第一次请求
      content = {
        totalPage: 2,
        totalElements: 100,
        currentPage: params.currentPage + 1,
        dataList: new Array(10)
      };
    } else { // 第一次请求
      content = {
        totalPage: 2,
        totalElements: 100,
        currentPage: 1,
        dataList: new Array(10)
      };
    };
    return PromiseUtil.create(content);
  }
};
