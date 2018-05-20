// 定义路由与跳转页面
import List from '@/module/blog/list'

const routers = [
  {
    path: '/blog/list',
    component: List,
    meta: {
      title: '我的博客/列表'
    }
  }
]

export default routers
