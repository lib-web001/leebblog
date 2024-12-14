---
tag:
  - vue
  - 前端
---


# Vue2 相关

## 生命周期

```
就是vue实例从创建到销毁的过程就是生命周期

创建、初始化数据、编译模板、挂载DOM->渲染、更新->渲染、卸载等一系列过程。

在Vue中生命周期钩子会自动绑定this上下文到实例中，因此你可以访问数据，对property和方法进行运算，这意味着你不能使用箭头函数来定义一个生命周期，例如：create:() => this.fetchTodos()。

在vue 生命周期中提供的钩子函数
beforeCreate 组件实例被创建之前
created 组件实例已经完全创建
beforeMount 组件挂载之前
mounted 组件挂载到实例上之后
beforeUpdate 组件数据发生变化，更新之前
updated 组件数据更新之后
beforeDestroy 组件实例销毁之前
destroyed 组件实例销毁之后
activated keep-alive 缓存的组件激活时
deactivated keep-alive 缓存的组件停用时调用
errorCaptured 捕获一个来自子孙组件的错误时被调用


父子组件生命周期

父 beforeCreate -> 父 created -> 父 beforeMount -> 子 beforeCreate -> 子 created -> 子 beforeMount -> 子 mounted -> 父 mounted
```

## 性能优化

```
● 懒加载、
● 路由懒加载、
● 组件懒加载、
● 图片懒加载、
● 三方插件按需引入、
● 长列表性能优化，如果列表只是存粹的数据展示，不会发生改变，可以不做响应式
this.list=Object.freeze(list);
如果是大数据长列表，可采用虚拟滚动，只渲染少部分区域的内容 vue-virtual-scroller

● 事件的销毁
Vue 组件销毁时，会自动解绑它的全部指令及事件监听器，但是仅限于组件本身的事件。
定时器要销毁
总线通信注意销毁

● 无状态的组件标记为functional
函数式组件
无状态
无法实例化
内部没有任何生命周期处理函数
轻量,渲染性能高,适合只依赖于外部数据传递而变化的组件(展示组件，无逻辑和状态修改)
在template标签里标明functional
只接受props值

● key的使用
● v-show与v-if的合理使用
● keep-alive合理使用
● 用computed替代method 或 watch
● 使用is动态组件 <component :is='componentName'/>
```

## 关于样式冲突问题

> 多个组件污染（多个组件公用一套样式时影响其他组件）

在开发过程中为了避免不必要的资源浪费，多个组件在会共用一套 CSS 代码时，如果采用下面方法引入，可能会导致组件样式污染（加载组件的时候加载的不是当前组件的样式，必须要刷新一次才能当前组件的样式）

```html
<style scoped>
  @import '../assets/css/Login.css';
</style>
```

那么解决这个问题可以通过下面方法进行引入样式

```html
<style lang="" src="../assets/css/Login.css" scoped></style>
```

```
其原理是通过使用 PostCSS 来实现以下转换：
.class[data-v-f3f3eg9] { }

1. 当前组件中的元素及子组件根元素样式
2. 如果想覆盖子元素的样式 使用 深度作用选择器
  a. css   >>>
  b. scss /deep/ or ::v-deep
```

## 关于 vue.config.js

```js
module.exports = {
  // 项目部署的基础路径
  // 我们默认你的应用将会部署在域名的根部，比如 https://www.xxx.com/
  // 如果你的应用时部署在一个子路径下，那么你需要在这里指定子路径。
  // 比如，如果你的应用部署在https://www.xxx.com/public/
  // 那么将这个值改为 `/public/`
  // 部署生产环境和开发环境下的 URL：可对当前环境进行区分，baseUrl 从 Vue CLI 3.3 起已弃用，要使用 publicPath
  /* baseUrl: process.env.NODE_ENV === 'production' ? './' : '/' */
  publicPath: process.env.NODE_ENV === 'production' ? '/public/' : './',
  /* 输出文件目录：在 npm run build 时，生成文件的目录名称 */
  outputDir: 'dist',
  /* 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录 */ assetsDir:
    'assets',
  /* 是否在构建生产包时生成 sourceMap 文件，false 将提高构建速度 */ productionSourceMap: false,
  /* 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存，你可以通过将这个选项设为 false 来关闭文件名哈希。(false 的时候就是让原来的文件名不改变) */ filenameHashing: false,
  /* 代码保存时进行 eslint 检测 */ lintOnSave: true,
  /* webpack-dev-server 相关配置 */
  devServer: {
    /* 自动打开浏览器 */
    open: true,
    /* 设置为 0.0.0.0 则所有的地址均能访问 */
    host: '0.0.0.0',
    port: 8066,
    https: false,
    hotOnly: false,
    /* 使用代理 */
    proxy: {
      // string | Object
      '/api': {
        /* 目标代理服务器地址 */
        target: 'http://xxx/',
        /* 允许跨域 */
        changeOrigin: true,
        pathRewrite: {
          '^/api': '' //规定请求地址以什么作为开头
        }
      }
    }
  }
}
```

## nextTick 的实现原理 MutationObserver

```javascript
// MutationObserver是HTML5新增的属性，用于监听DOM修改事件，能够监听到节点的属性、文本内容、子节点等的改动
// MutationObserver基本用法
var observer = new MutationObserver(function () {
  //这里是回调函数
  console.log('DOM被修改了！')
})
var article = document.querySelector('article')
observer.observer(article)

// Promise  > MutationObserver > setImmediate > setTimeout
```

## 数据请求在 created 和 mounted 的区别

created 是在组件实例一旦创建完成的时候立即调用，这时候页面 DOM 节点并未生成

mounted 是在页面 DOM 节点渲染完毕之后就立刻执行的，触发时机上 created 是比 mounte 要更早的

两者的相同点：都能拿到实例对象的属性和方法

由于触发的时机不同，放在 mounted 中的请求有可能导致页面闪动（因为此时页面 dom 结构已经生成），但如果在页面加载前完成请求，则不会出现此情况。建议对页面内容的改动放在 created 生命周期当中。

##

## vue 设计原则的理解？

```
1. 渐进式JavaScript框架
  a. 与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易 于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使 用时，Vue 也完全能够为复杂的单页应用提供驱动。
2. 易用、灵活和高效
  a. 易用性 vue提供数据响应式、声明式模板语法和基于配置的组件系统等核心特性。这些使我们只需要关注应用 的核心业务即可，只要会写js、html和css就能轻松编写vue应用。
  b. 灵活性 渐进式框架的最大优点就是灵活性，如果应用足够小，我们可能仅需要vue核心特性即可完成功能；随着应用规模不断扩大，我们才可能逐渐引入路由、状态管理、vue-cli等库和工具，不管是应用体积还是 学习难度都是一个逐渐增加的平和曲线。
  c. 高效性 超快的虚拟 DOM 和 diﬀ 算法使我们的应用拥有最佳的性能表现。追求高效的过程还在继续，vue3中引入Proxy对数据响应式改进以及编译器中对于静态内容编译的改进都会让vue更加高效。
```

## 关于冗余导航报错问题

当我们在使用下面方法进行路由跳转时：

```html
<p @click="$router.push('/setting')">设置</p>
```

效果是想点击设置跳转到设置的页面，效果是完全可以正常实现跳转

但是，如果当前已经在`/setting`路由下，那么再点击就会报错：

```shell
[Vue warn]: Error in v-on handler (Promise/async): "NavigationDuplicated: Avoided redundant navigation to current location: "/setting"."
```

大概的意思就是：当前你已经在这个导航下了，不要再重复冗余

这个其实并不是一个错误，只是说你的操作多余了

那么解决方法就是：在 `router/index.js`中加入下面一段代码即可解决报错问题

```js
const router = new VueRouter({
  routes
})

// 解决 冗余导航报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}

export default router
```

## Vue 组件 data 为什么必须是个函数而 Vue 的根实例则没有此限制？

```
● Vue组件可能存在多个实例，如果使用对象形式定义data，则会导致它们共用一个data对象，那么状态
变更将会影响所有组件实例，这是不合理的；采用函数形式定义，在initData时会将其作为工厂函数返 回全新data对象，有效规避多实例之间状态污染问题。
● 而在Vue根实例只能有一个，所以不需要担心这种情况。
```

## Vue 给 for 循环的标签添加背景图

```html
<div :style="{ 'background-image': 'url(' + item.PlaceImgUrl + ')' }"></div>
```

## watch 监听器

通过 watch 可以定义一个监视器，用于监视某一些数据，当这个被监视的数据一旦发生变化，就会执行里面的逻辑：

```vue
<template>
  <div>
    <input v-model="text" type="text" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        text: ''
      }
    },
    watch: {
      text() {
        console.log('text 值发生改变了！！')
      }
    }
  }
</script>
```

但是不免有些特殊的情况，比如：我们希望在页面刚刚初始化的时候，虽然数据没有发生变化，但也需要立刻执行一次监视器中的内容，这样的话，监视器的表现形式会变成对象，里面透过配置一个 `handler` 的函数和 `immediate` 方法来解决：

```vue
<template>
  <div>
    <input v-model="text" type="text" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        text: ''
      }
    },
    watch: {
      // 使用对象写法，监视数据 text
      text: {
        // 使用 handler 方法，处理变化后的逻辑代码
        handler() {
          console.log('text 值发生改变了！！')
        },
        // immediate 这个属性值为 true 的时候，默认页面初始化完成之后执行一次上面的代码
        immediate: true
      }
    }
  }
</script>
```

## vue2 响应式弊端

```
● 响应化过程需要递归遍历，消耗较大;
● 新加或删除属性无法监听 ;
● 数组响应化需要额外实现 ;
● Map、Set、Class等无法响应式 ;
● 修改语法有限制;
```

## Vue 组件 通信方式

```
● 父传子，子组件通过 props 接收
● 子传父，子组件使用 $emit 对父组件进行传值
● 父子之间通过 $parent 和 $chidren 获取实例进而通信
● 通过 Vuex 进行状态管理
● 通过 eventBus 进行跨组件值传递（当前路由）
● provide 和 inject，官方不建议使用
● $ref 获取实例，进而传值
● 路由传值
● localStorage、sessionStorage
● vuex
```

## Vue 脚手架搭建

1. 处理资源路径(相对路径资源将被 webpack 处理，文件名包含了内容哈希)

```
  a. 如果 URL 是一个绝对路径 (例如 /images/foo.png )，它将会被保留不变。
  b. 如果 URL 以 . 开头会作为一个相对模块请求被解释并基于文件系统相对路径。
    ⅰ. <img alt="Vue logo" src="./assets/logo.png">
  c. 如果 URL 以 ~ 开头会作为一个模块请求被解析。这意味着你甚至可以引用 Node 模块中的资源：
    ⅰ. <img src="~some-npm-package/foo.png">
  d. 如果 URL 以 @ 开头会作为一个模块请求被解析。Vue CLI 默认会设置一个指向 src 的别名
  e. 如果你不需要内容哈希，把资源放到public文件夹
```

2. 网站放在二级目录下面

```
   a. 修改 vue.config.js publicPath
   b. 在 public/index.html 等通过 html-webpack-plugin 用作模板的 HTML 文件中，
   通过 <%= BASE_URL %> 设置链接前缀：<link rel="icon" href="<%= BASE_URL %>favicon.ico">
   c. 在模板中，先向组件传入 BASE_URL 然后<img :src="`${publicPath}my-image.png`">
```

3. Css 使用预处理器

```
# Sass

npm install -D sass-loader node-sass

# Less

npm install -D less-loader less

# Stylus

npm install -D stylus-loader stylus
```

## Vue 组件化的理解

```

● 组件是独立和可复用的代码组织单元。组件系统是 Vue 核心特性之一。
● 组件化开发能大幅提高应用开发效率、测试性、复用性等；
● 组件使用按分类有：页面组件、业务组件、通用组件；合理的划分组件，有助于提升应用性能；
● vue 的组件是基于配置的，我们通常编写的组件是组件配置而非组件，框架后续会生成其构造函数，它们基于 VueComponent，扩展于 Vue；
● vue 中常见组件化技术有：属性 prop，自定义事件，插槽，mixins 等，它们主要用于组件通信、扩展等；
● 组件应该是高内聚、低耦合的；
● 遵循单向数据流的原则。
● 组件创建顺序自上而下 ，组件挂载顺序自下而上

```

## 说说 虚拟 dom 和 diff 算法 吧？

```
虚拟 dom
● 是什么
○ 虚拟 dom 是一个对象，一个描述真实 DOM 的对象，每次数据更新时，新旧虚拟 DOM 都会互相进行同层对比，而 diff 算法优化就是在此时做优化的。
● 目的
○ 为了解决频繁操作 DOM 导致性能开销大的问题
● 方案
○ JS 运算效率 远高于 操作 DOM 效率，所以把真实 DOM 树抽象成 JS 对象树，运用 patch 算法 来用 JS 计算出真正需要更新的节点，最大限度地减少 DOM 操作，从而显著提高性能



diff 算法
● 第一步：调用 patch 方法，传入新旧虚拟 DOM，开始同层对比
● 第二步：调用 isSameNode 方法，对比新旧节点是否同类型节点（判断依据：标签相同，key 相同）
● 第三步：如果不同，新节点直接代替旧节点
● 第四步：如果相同，调用 patchNode 进行深层对比节点
○ 如果旧节点和新节点都是文本节点，则新文本代替旧文本（都是文本，新替旧）
○ 如果旧节点有子节点，新节点没，则删除旧节点的子节点（旧有新无，删旧子节点）
○ 如果旧节点没有子节点，新节点有，则把子节点新增上去（旧无新有，新增子节点）
○ 如果都有子节点，则调用 updateChildren 方法进行新旧子节点的对比（都有，diff 算法）
○ 子节点对比为首尾对比法

1. 旧前 vs 新前
2. 旧后 vs 新后
3. 旧前 vs 新后
4. 旧后 vs 新前
5. 以上都不满足，遍历查找
6. 创建 or 删除

当数据改变时，会触发 setter，并且通过 Dep.notify 去通知所有订阅者 Watcher，订阅者们就会调用 patch 方法，给真实 DOM 打补丁，更新相应的视图

```

## Vue 的 hook 的使用

```vue
<!-- 组件销毁时清除定时器 -->
export default{ methods:{ fn(){ let timer = setInterval(()=>{ //具体执行代码
console.log('1'); },1000); this.$once('hook:beforeDestroy',()=>{
clearInterval(timer); timer = null; }) } } }

<!-- 子组件销毁触发父组件事件 -->
//父组件
<rl-child @hook:mounted="childMountedHandle" />
method () { childMountedHandle() { // do something... } },
```
