---
tag:
  - 前端
---

# nuxtjs

## 生命周期

## asyncData 和 fetch

```
1.两者都是服务端钩子

2.asyncData只能在page中用 component不支持   fetch page 和 component都可以

3. asyncData 发生在路由阶段 错误会导致界面跳转失效
4. asyncData发生在route阶段 在beforeCreate之前
5. 在服务端端执行 fetch在beforeCreate之前
5. 在客户端执行 fetch在beforeMount之后
6. asyncData 函数参数自带context
7. fetch 需要通过this.$nuxt.context获取
8. fetch可以操作组件上的data asyncData则会和data进行合并输出
```

## seo

## 解决 token 丢失并持久化方案

1.下载
yarn add cookie-universal-nuxt -S 2.配置
nuxt.config.js
modules:[
'cookie-universal-nuxt'
] 3.操作
this.$cookies.get
this.$cookies.set
this.$cookies.remove

1, 刚开始做项目得时候登录后会把 Token 存在客户端的本地存储中用来判断用户是否登录，然后会在全局请求是带上登录后返回来的 token 以及其他的信息，但是在项目中使用 localstroge 会报 window or document 对象未定义，这是因为在服务端是没有 window 或者 document 对象的。

2, 鉴于上边的问题，但是又要实现这个功能，所以就开始折腾，过程中发现 cookie-universal-nuxt 这个在服务端获取 cookie 的插件。这里把 cookie-universal-nuxt 官网链接放在这里，以供参考，官网的介绍很全面。

3,（个人见解） 在用完后才领悟到这里是利用了存到 cookie 中的内容是会被携带在请求头中的原理做的，你也可以利用这个原理在你存到 cookie 中后，然后在请求头中取出来，在分别加进去或者在 asyncData 或 fetch 获取 cookie 中的内容，做一些自己的操作
