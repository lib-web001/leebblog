---
date: "2021-06-01 16:44:43"
tag:
  - 前端
title: "Nest 基础"
description: "Nest 基础 🤗 介绍 Nest.js 是一个进步的 框架，用于在 和 。 它是一个 框架，全面使用 用起来个人感觉非常舒适简单，最近一直在学习。 个人感觉这个框架对于前端工程师来说简直不要太友好，学习成本分成低，使用起来非常方便，方便…"
---
# Nest 基础

## 🤗 介绍

[Nest.js](https://github.com/nestjs/nest) 是一个进步的 `Node.js` 框架，用于在 `TypeScript` 和 `JavaScript`。

它是一个 `MVC` 框架，全面使用 `TypeScript` 用起来个人感觉非常舒适简单，最近一直在学习。

个人感觉这个框架对于前端工程师来说简直不要太友好，学习成本分成低，使用起来非常方便，方便我们快速大家后端。

## 起步

首先全局安装 `next`:

```shell
npm i -g @nestjs/cli
```

初始化项目：

```shell
nest new project-name
```

启动项目分为不同的启动方式，详情可以见 `package.json`，下面仅介绍两个主要的启动命令：

```shell
  "scripts": {
    "start": "nest start", # 基本启动
    "start:dev": "nest start --watch" # 热更新启动
  }
```

基本上使用热更新启动就可以了，可以数据同步刷新

启动之后就可以访问默认的 `http://localhost:3000` 端口即可

## 路由

在 `controller` 控制器中，需要使用 `@Controller()` 修饰器定义一个基本的控制器。可以再里面传入一个路径作为参数

```ts
import { Controller } from '@nestjs/common'
import { AppService } from './app.service'

@Controller('/home/load')
export class AppController {
  constructor(private readonly appService: AppService) {}

  getHello = (): string => {
    return this.appService.getHello()
  }
}
```

上面写法是直接给一个类修饰了整个类，也可以使用 `Get` 修饰器来指定某个类方法的路径

```ts
import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/home/load')
  getHello = (): string => {
    return this.appService.getHello()
  }
}
```

## 状态码

状态码可以使用 `HttpCode` 修饰器进行实现

```ts
import { Controller, Get, HttpCode } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/home/load')
  @HttpCode(201)
  getHello = (): string => {
    return this.appService.getHello()
  }
}
```

:::danger
注意，成功状态码包括 200、201 等，如果你定义了 404、500、203 等非正常状态码，那么会导致请求失败，或者路由访问失败。也就是说，就算代码写的没有问题，但是错误的状态码仍会导致抛出异常！
:::

## 请求头

请求头需要使用 `Header` 修饰器进行来实现

```ts
import { Controller, Get, HttpCode, Header } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/home/load')
  @HttpCode(201)
  @Header('Access-Control-Allow-Origin', '*')
  getHello = (): string => {
    return this.appService.getHello()
  }
}
```

## 获取 Params

获取 `params` 参数需要使用 `Query` 修饰器进行实现

```ts
import { Controller, Get, HttpCode, Header,Query} from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/home/load')
  @HttpCode(201)
  @Header('Access-Control-Allow-Origin', '*')
  getHello = (@Query() query): string => {
    // console.log(quey.page) // 获取 query 中的参数
    return this.appService.getHello()
  }
}
```
