---
tag:
  - 前端工程化
---

# vite

## vite 原理

### 识别 script type=module

```
浏览器就会像服务器发起一个 GEThttp://localhost:3000/src/main.js 请求 main.js 文件：
// /src/main.js:
import { createApp } from 'vue'
import App from './App.vue'
createApp(App).mount('#app')
浏览器请求到了 main.js 文件，检测到内部含有 import 引入的包，又会对其内部的 import 引用发起 HTTP 请求获取模块的内容文件如：
GET http://localhost:3000/@modules/vue.js
如：GET http://localhost:3000/src/App.vue

```

Vite 的主要功能就是通过劫持浏览器的这些请求，并在后端进行相应的处理将项目中使用的文件通过简单的分解与整合，然后再返回给浏览器,Vite 整个过程中没有对文件进行打包编译，所以其运行速度比原始的 webpack 开发编译速度快出许多！

### vite 底层

Vite 将会使用 esbuild 预构建依赖。Esbuild 使用 Go 编写，并且比以 Node.js 编写的打包器预构建依赖快 10-100 倍。

### vite 热更新改进

在 Vite 中，HMR 是在原生 ESM 上执行的。当编辑一个文件时，Vite 只需要精确地使已编辑的模块与其最近的 HMR 边界之间的链失效（大多数时候只需要模块本身），使 HMR 更新始终快速，无论应用的大小。Vite 同时利用 HTTP 头来加速整个页面的重新加载（再次让浏览器为我们做更多事情）：源码模块的请求会根据 304 Not Modified 进行协商缓存，而依赖模块请求则会通过 Cache-Control: max-age=31536000,immutable 进行强缓存，因此一旦被缓存它们将不需要再次请求。

## 环境变量

1.Vite 在一个特殊的 import.meta.env 对象上暴露环境变量。这里有一些在所有情况下都可以使用的内建变量：

2.import.meta.env.MODE: {string} 应用运行的模式。

3.import.meta.env.BASE_URL: {string} 部署应用时的基本 URL。他由 base 配置项决定。

4.import.meta.env.PROD: {boolean} 应用是否运行在生产环境。

5.import.meta.env.DEV: {boolean} 应用是否运行在开发环境 (永远与 import.meta.env.PROD 相反)。

## 总结

### vite 缺点

1. 生态不如 webpack (时间问题)
2. 生成环境构建用的 rollup 对于 css 代码分割不友好

### vite webpack 对比

webpack:webpack由于会把文件先打包成bundle机制的原因，会把改动的文件模块打包编译完成之后通知客户端去获取文件，并且用jsonp的格式推送给客户端一个可执行文件。
vite：而vite则是会去进行模块的依赖分析，收集依赖当前模块的其他模块，清除掉依赖信息，最终告诉客户端的是修改文件的路径，最终文件的获取是依靠浏览器原生的ESM模块用过import动态导入文件。
