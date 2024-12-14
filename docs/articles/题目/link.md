---
tag:
  - 八股文
---

### <link> 标签预加载

1、<link> 标签的 preload 属性的属性介绍

属性名 取值范围 介绍
as - audio 音频文件。

- video: 视频文件。
- document: 一个将要被嵌入到或内部的HTML文档。
- embed: 一个将要被嵌入到元素内部的资源。
- fetch: 那些将要通过fetch和XHR请求来获取的资源，比如一个ArrayBuffer或JSON文件。
- font: 字体文件。
- image: 图片文件。
- object: 一个将会被嵌入到元素内的文件。
- script: JavaScript文件。
- style: 样式表。
- track: WebVTT文件。
- worker: 一个JavaScript的web worker或shared worker。 该属性仅在 link 元素设置了rel=preload 是才能使用。规定了 link 元素要预加载的资源的类型，其取值范围也限制了哪些资源才可被预加载。设置了此属性使浏览器能够：
- 更精确地优化资源加载优先级。
- 匹配未来的加载需求，在适当的情况下，重复利用同一资源。
- 为资源应用正确的内容安全策略。
- 为资源设置正确的 Accept 请求头。
  href <ul/> 指定要加载资源的 URL，可以使绝对地址也可以是相对地址
  rel preload（当前功能相关） 此属性用于指明被链接的资源相对于当前页面的关系。属性值一定是被空格分开的链接类型值。这个属性最常见的取值是：
- stylesheet：表明被连接资源对当前文档来说是一个层叠样式表。
- preload：表明链接资源是一个预加载的资源。
  type MIME涵盖类型 链接资源的 MIME 类型，在浏览器进行预加载到时候，这个属性将会非常有用，浏览器将使用 type 属性来判断它是否支持这一资源类型，如果支持，将正常预加载，下载将开始，否则对其忽略。
  crossorigin  加载 字体文件 的时候需要加上 crossorigin 属性。对跨域的文件进行 preload 的时候，我们必须加上 crossorigin 属性。
  
- 若不确定资源是必定会加载的，则不要错误使用 preload，以免本末导致，给页面带来更沉重的负担。

#### 1、preload

preload 是告诉浏览器：“这份资源目前是页面必要的，我马上就要用到，请用最快的速度下载它。”（指定的）。 比如：在我们的场景中，x-report.js 初始化后一定会加载 PcCommon.js 和 TabsPc.js, 则可以预先 preload 这些资源。

preload 可以预加载几乎所有类型的资源，由 as 属性设置，在 preload 规范中可以看到 as 对应的属性值。

虽然浏览器可以先扫一遍 HTML 提早发现资源，但是有些隐藏在 CSS/JS 内的资源(CSS 中的字体图片，script 中动态加载其他 script/css)就没有办法了，这时候用 preload 就非常有帮助。preload 能够让你在 HTML 页面中元素内部书写一些声明式的资源获取请求，可以指明哪些资源是在页面加载完成后即刻需要的。对于那些重要的资源，你可能希望在页面加载的生命周期的早期阶段就开始获取，在浏览器的主渲染机制介入前就进行预加载。

```html
<head>
  <meta charset="utf-8" />
  <title>example</title>
  <link rel="preload" href="main.js" as="script" />
  <link rel="preload"   href="https://at.alicdn.com/t/font_zck90zmlh7hf47vi.woff" as="font">
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <h1>preload example</h1>
  <script src="main.js" defer></script>
</body>
```

这里的 defer 是降级方案，以兼容不支持 preload 属性的浏览器。

preload 与 defer 的区别：

defer 只作用于脚本文件，对于样式、图片等资源就无能为力了，并且 defer 加载的资源是要执行的。
preload 只下载资源并不执行，等真正使用到时才会执行文件。并且它们优先级也不会相同

#### 2、prefetch

prefetch 是告诉浏览器：“这个资源我等会儿会用到，有空的话帮我先下载下来。”（预测的）。 比如：如在我们的场景中，我们在页面加载后会初始化首屏组件，当用户滚动页面时，会拉取第二屏的组件，若能预测用户行为，则可以 prefetch 下一屏的组件。

prefetch(链接预取）是一种浏览器机制，其利用浏览器空闲时间来下载或预取用户在不久的将来可能访问的文档。网页向浏览器提供一组预取提示，并在浏览器完成当前页面的加载后以 Lowest 优先级拉取指定的文档并将其存储在缓存中。当用户访问其中一个预取文档时，便可以快速的从浏览器缓存中得到。

静态渲染(VuePress, bootstrap)类型的网站非常适合将其他链接目录页面用 prefetch 来优化加载效果。

```html
<head>
  <meta charset="utf-8">
  <title>Example</title>
  <link rel="preload" href="//assets/js/app.js" as="script">
  <link rel="prefetch" href="//assets/js/one.js">
  <link rel="stylesheet" href="//assets/css/style.css">
</head>
<body>
  <div>hello world<div>
  <script src="//assets/js/app.js" defer></script>
</body>
```

##### [注意]

preload 和 prefetch 混用的话，并不会复用资源，而是会重复加载。
使用 preload 和 prefetch 的逻辑可能不是写到一起，但一旦发生对同一资源 preload 或 prefetch 的话，会带来双倍的网络请求。
要预加载字体你还必须设置 crossorigin 属性，这是因为 W3C 规定字体资源必须以匿名模式 CORS 获取 。

##### [拓展]介绍一个插件

preload-webpack-plugin 是一款脚本预加载的插件，它可以在项目编译打包的时候，自动的将资源类型添加 preload/prefetch 标识。下面的示例是将所有通过路由拆分的异步 chunk 资源加上 <link rel="prefetch">。

```javascript
new PreloadWebpackPlugin({
    rel: 'prefetch',
    as: 'script',
    include: 'asyncChunks',
    fileBlacklist: [/\index.css|index.js|vendors.js/, /\.something/],
});
```

由 vue-cli3 创建的 Vue 应用会为所有的初始化渲染所需要的文件自动生成 preload 标识，会对所有的 async chunk 生成的 js 文件自动生成 prefetch 提示，这些标识是通过 @vue/preload-webpack-plugin 注入的，可以通过 Vue.config.js 进行修改和删除。

// vue.config.js

```javascript
module.exports = {
    chainWebpack: (config) => {
        // 移除 prefetch 插件
        config.plugins.delete('prefetch');
        // 或者
        // 修改它的选项：
        config.plugin('prefetch').tap((options) => {
        options[0].fileBlacklist = options[0].fileBlacklist || [];
        options[0].fileBlacklist.push(/myasyncRoute(.)+?\.js$/);
        return options;
        });
    },
};
```

#### 4、避免错用 preload 加载跨域资源

若 css 中有应用于已渲染到 DOM 树的元素的选择器，且设置了 @font-face 规则时，会触发字体文件的加载。 而字体文件加载中时，DOM 中的这些元素，是处于不可见的状态。对已知必加载的 font 文件进行预加载，除了有性能提升外，更有体验优化的效果。
对跨域的文件进行 preload 的时候，我们必须加上 crossorigin 属性。

#### 5、defer 与 async

在 script 标签上设置 defer 和 async 属性可以让同步脚本变成异步脚本，这两个属性告诉浏览器，它可以在加载脚本的同时继续解析 HTML，并在脚本加载完成之后在执行。这两个属性之间的不同是他们开始执行脚本的时机不同。

defer 脚本会在 html 解析完成之后才开始执行，不会中断 DOM 的构建，DOMContentLoaded 事件在 defer 脚本执行完成后发生，脚本会按照它在 HTML 中出现的顺序执行。defer 脚本拥有 low 加载优先级和 lowest 执行优先级。
