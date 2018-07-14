/**
 * router 拦截白名单,多个英文分号; 隔开
 */
import { LOGIN_PAGE } from './system'

const ignoreUrl = [LOGIN_PAGE, '/home', '/home/sys-page']

export default {
  /**
   * 判断路径是否白名单
   * @param path
   */
  match (path) {
    // 参考 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of
    for (let url of ignoreUrl) {
      // console.log('url', url)
      if (url === path) {
        return true
      }
    }
    return false
  }
}
