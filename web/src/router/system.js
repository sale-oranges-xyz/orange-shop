// .vue文件
import Home from '@/layout/layout'
import Login from '@/components/login'

import Components from './components'
// 定义登录路径
export const LOGIN_PAGE = '/login' // 登录路由
export const HOME_PAGE = '/home' // 主页路由

export const System = [
  {
    path: LOGIN_PAGE,
    component: Login,
    meta: {
      title: '登录'
    }
  },
  // 重定向到主页
  {
    path: '/',
    redirect: HOME_PAGE
  },
  {
    path: HOME_PAGE,
    component: Home,
    children: Components
  }
]
