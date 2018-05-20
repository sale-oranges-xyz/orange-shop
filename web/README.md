# web

> a blog project used vue

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 目录结构说明
```
  | - src
    | - api 请求后台资源
    | - assets 图片等资源文件
    | - components  存放公用组件
    | - layout 布局文件
    | - module 业务vue模块
    | - router vue router 配置
```

## 疑问整理
``` bash
js 箭头函数没有上下文，使用时需要注意

vue router-view 作用：<router-view> 组件是一个 functional 组件，渲染路径匹配到的视图组件。
  <router-view> 渲染的组件还可以内嵌自己的 <router-view>，根据嵌套路径，渲染嵌套组件


```
