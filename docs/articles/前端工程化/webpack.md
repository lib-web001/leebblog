---
tag:
  - 前端工程化
---

# webpack

## webpack 是什么

webpack 是一个打包工具
将 es6 转 es5 代码用 babel
将非 js 资源通过 loader 转成 js

loader 和 plugin 的区别：

loader 专门将 css,less，js，vue 等文件进行打包加载的。
plugin 是插件，它是对 webpack 本身的扩展，是一个扩展器。

## webpack 打包过程

1. 识别入口文件
2. 通过逐层识别模块依赖
3. webpack 做的就是分析，转换代码，编译代码，输出代码
4. 最终形成打包后的代码

## webpack 打包原理

1. 构建依赖关系
2. 将代码转为 ast 抽象语法树
3. ast 阶段处理代码
4. 将 ast 代码转为浏览器识别的代码

## 总结

### webpack 缺点

1. 服务器启动慢
2. 使用 node.js 的方式实现
3. 热更新效率低

## webpack 优化方案

1. 构建过程提速策略
   1.1 不要让 loader 做太多事情
   最常见的优化方式是，用 include 或 exclude 来帮我们避免不必要的转译，比如 webpack 官方在介绍 babel-loader 时给出的示例：

```
module:{
  rules:[
    {
      test:/\.js$/,
      exclude:/(node_modules|brower_components)/,
      use:{
        loader:'babel-loader',
        options:{
          presets:['@babel/preset-env']
        }
      }
    }
  ]
}
```

## gzip 压缩

request-header 中加入
accept-encoding: gzip

### webpack 的 Gzip 和服务端的 Gzip

● 一般来说，Gzip 压缩是服务器的活儿：服务器了解到我们这边有一个 Gzip 压缩的需求，它会启动自己的 CPU 去为我们完成这个任务。而压缩文件这个过程本身是需要耗费时间的，大家可以理解为我们以服务器压缩的时间开销和 CPU 开销（以及浏览器解析压缩文件的开销）为代价，省下了一些传输过程中的时间开销。

● 既然存在着这样的交换，那么就要求我们学会权衡。服务器的 CPU 性能不是无限的，如果存在大量的压缩需求，服务器也扛不住的。服务器一旦因此慢下来了，用户还是要等。Webpack 中 Gzip 压缩操作的存在，事实上就是为了在构建过程中去做一部分服务器的工作，为服务器分压。

● 压缩，谁也不能替代谁。它们必须和平共处，好好合作。作为开发者，我们也应该结合业务压力的实际强度情况，去做好这其中的权衡。

## 手写一个 webpack 插件

```js
// 命名函数。
function HelloPlugin(options) {
  // 使用 options 设置插件实例……
  console.log(options)
}

//插件函数的 prototype 上定义一个 apply 方法
HelloPlugin.prototype.apply = (compiler) => {
  // 在将资产释放到输出目录后调用。
  compiler.hooks.emit.tapAsync('HelloPlugin', (compilation, callback) => {
    let fileList = `## in this build:\n\n`

    console.log(compilation.assets)
    const assets = compilation.assets
    for (let key in assets) {
      console.log(key)
      fileList += `${key}\n`
    }
    compilation.assets['fileList.md'] = {
      source: () => {
        return fileList
      },
      size: () => {
        return fileList.length
      }
    }
    callback()
  })
}
module.exports = HelloPlugin
```
