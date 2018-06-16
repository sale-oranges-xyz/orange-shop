/**
 * 创建promise工具类
 */

export default {
  /**
   * 创建 promise 对象
   */
  create(content = Object) {
    return new Promise((resolve, reject) => {
      resolve(content);
    });
  }
};
