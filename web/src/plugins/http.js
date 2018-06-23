/**
 * 封装axios 的http请求
 * 参考 https://github.com/zaofeng/just_for_base/blob/master/vue/main.js
 * https://www.npmjs.com/package/axios
 * https://www.cnblogs.com/wisewrong/p/6402183.html
 */
import axios from 'axios'
import store from '@/stores/system'
import authTypes from '@/stores/system/auth-types'
import router from '@/router'
// 登录路径
import { LOGIN_PAGE } from '@/router/system'
// 客户自定义异常
const responseStatus = {
  /** token 禁止访问 */
  FORBIDDEN_TOKEN: 500403,
  /** token 无效 */
  INVALID_TOKEN: 50001
}

// 添加请求拦截器
axios.interceptors.request.use((config) => {
  // 在发送请求之前做些什么
  // 获取用户token
  const token = window.localStorage.getItem('token')
  if (token) {
    config.headers['Authorization'] = token
  }
  // 如果没有token 重定向到登录页面
}, (error) => {
  // 对请求错误做些什么
  console.log('错误的传参')
  return Promise.reject(error)
})

// 响应拦截器
axios.interceptors.response.use((res) => {
  // 对响应状态处理
  const body = res.body
  if (res.status !== '200') {
    return Promise.reject(body)
  }
  return body
}, (error) => {
  if (error.response) {
    switch (error.response.status) {
      // 如果token 过期，提醒用户重新登陆
      case responseStatus.INVALID_TOKEN:
        // 401 清除token信息并跳转到登录页面
        store.commit(authTypes.LOGOUT)
        // 只有在当前路由不是登录页面才跳转
        if (router.currentRoute.path !== LOGIN_PAGE) {
          // 跳转到登陆页面
          router.replace({
            path: LOGIN_PAGE,
            query: { redirect: router.currentRoute.path }
          })
        }
    }
  }
  return Promise.reject(error)
})

axios.defaults.baseURL = '/api'
// 设置默认请求头
axios.defaults.headers = {
  'X-Requested-With': 'XMLHttpRequest'
}
// 设置请求过时时间
axios.defaults.timeout = 5000

let createAxios = (config = {}) => {
  // config 拼接具体url
  config.url = process.env.PROXY_API + config.url
  console.log('PROXY_API', process.env.PROXY_API)
  console.log('config.url', config.url)
  return axios(config)
}

export default {
  // get请求
  get (url, param) {
    return createAxios({
      method: 'get',
      url: url,
      params: param
    })
  },
  // post请求
  post (url, param) {
    return createAxios({
      method: 'post',
      url: url,
      data: param
    })
  },
  // post 请求, 发送对象
  postJson (url, param) {
    return createAxios({
      method: 'post',
      url: url,
      data: param,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}
