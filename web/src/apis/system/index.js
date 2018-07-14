/**
 * 系统配置的方面的api
 */
import Http from '@/plugins/http'
// 网关前缀
const prefix = '/user'

export default {
  /**
   * 用户登陆
   */
  login (form = {}) {
    return Http.postJson(`${prefix}/user/validate`, form)
  }
}
