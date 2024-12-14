---
tag:
  - react
  - 前端
---

# umi

### 环境搭建

```
yarn create @umijs/umi-app
```

### 目录说明

mock
src
.umirc.js 配置文件 同 config.js
.env 环境变量
dist 输出目录
public 无需打包的资源
  wrappers 权限管理
  models 数据流
  layouts 全局布局
  app.js 运行时配置文件
  pages 页面目录
  global.css 全局样式
  global.js 全局 pollyjs

### 使用图片资源的方式

1 assets 目录下

```js
import user from '../assets/imgs/userBj.png';
<img src={user} />
<img src={require('../assets/imgs/userBj.png')} />
```

2 public 目录下

```js
<img src='/img/bg.jpg' />
```

3 服务器资源

镜像管理 yrm
yrm ls
yrm test
yrm use taobao
