// .vue文件
import Home from '@/layout/layout'
import Login from '@/components/login'

import Components from './components'

export default [
  {
    path: '/',
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
