// .vue文件
import Home from '@/layout/layout'
import Login from '@/components/login'

import Components from './components'
// 定义登录路径
const loginPage = '/login'

export const LOGIN_PAGE = loginPage

export const System = [
  {
    path: loginPage,
    component: Login,
    meta: {
      title: '登录'
    }
  },
  {
    path: '/home',
    component: Home,
    children: Components
  }
]
