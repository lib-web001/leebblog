---
tag:
  - vscode插件
title: "leebapi"
description: "接口文档转换"
---

  # LeebApi：把 Swagger 文档一键变成 TypeScript / JavaScript 代码

> 后端接口文档更新了，前端类型却还在手写？LeebApi 让你告别重复劳动。

---

## 一句话介绍

**LeebApi** 是一款 VS Code 插件，能够基于 Swagger / OpenAPI 文档自动生成 TypeScript 或 JavaScript 的接口类型定义与请求配置代码。

---

## 下载安装

- **VS Code Marketplace**：[https://marketplace.visualstudio.com/items?itemName=leeb.leeb-api](https://marketplace.visualstudio.com/items?itemName=leeb.leeb-api)
- **一键安装**（需本地已安装 VS Code）：[vscode:extension/leeb.leeb-api](vscode:extension/leeb.leeb-api)

---

## 为什么需要它？

在前后端分离的项目里，前端开发者最熟悉这样的场景：

- 打开 Swagger UI，对照每个接口手写 `interface`；
- 手动拼接 URL、method、path 参数、query 参数、请求体；
- 后端文档一更新，前端类型就过时，导致运行时才发现字段对不上；
- 项目越大，接口越多，这种重复劳动越让人崩溃。

LeebApi 的目的很简单：**让机器接管这部分机械工作**，你只需要专注于业务逻辑。

---

## 核心功能

### 🎨 可视化生成面板

点击 VS Code 左侧活动栏的 `</>` 图标，即可打开 LeebApi 的 Webview 面板，无需离开编辑器。

### 🔗 支持两种输入方式

- **Swagger URL**：直接填入后端暴露的 Swagger JSON 地址；
- **JSON 内容**：也可以把 Swagger JSON 直接粘贴进面板。

### 📝 TypeScript / JavaScript 双输出

根据项目需要选择输出语言：

- **TypeScript**：生成完整类型定义，支持接口继承、枚举、数组、对象等复杂结构；
- **JavaScript**：生成带 JSDoc 注释的类型提示版本。

### 📁 自动生成两个文件

以你设置的前缀命名，例如 `swagger-api`：

- `swagger-api.types.ts`：实体类型定义（interface / typedef）；
- `swagger-api.api.ts`：接口请求配置，包含 method、url、pathParams、queryParams、body、headers、response 等完整信息。

### 🔧 贴心的辅助函数

自动生成 `fillPath` 和 `buildQuery` 等工具函数，处理路径参数填充和查询字符串拼接。

### 🔄 兼容 Swagger 2.0 与 OpenAPI 3.x

支持 `$ref`、`components/schemas`、`requestBody.content` 等常见结构，不用纠结后端用的是什么版本。

### 👀 预览 + 一键保存

生成结果可先预览，满意后再保存到项目目录，或分别复制类型 / 接口代码到剪贴板。

### ⚙️ 可配置默认值

支持在 VS Code 设置中配置默认 Swagger URL 和输出前缀：

- `leebApi.defaultSwaggerUrl`
- `leebApi.defaultOutputPrefix`

---

## 使用流程

1. 点击左侧活动栏的 LeebApi 图标；
2. 选择「URL 地址」或「JSON 内容」模式输入 Swagger 文档；
3. 选择输出语言：TypeScript 或 JavaScript；
4. 选择保存目录，设置文件名前缀（默认 `swagger-api`）；
5. 点击「生成预览」，查看类型定义与接口请求代码；
6. 点击「保存到文件」或分别「复制类型 / 复制接口」。

---

## 技术亮点

- **自研 Swagger / OpenAPI 解析器**，不依赖外部代码生成库，轻量可控；
- **递归 JSON Schema 转 TS 类型**，支持 `enum`、`array`、`object`、`additionalProperties`、`date-time`、`binary` 等；
- **自动提取接口要素**：路径参数、查询参数、请求体、表单、请求头、响应类型；
- **Webview 与 Extension 双向通信**，并配置了 `Content-Security-Policy`；
- **生成的 API 配置使用 `as const` 断言**，方法名与 URL 都能获得字面量类型推导。

---

## 适合谁用？

- 前端工程师、全栈开发者；
- 需要快速把 Swagger 文档落地为代码的 TS/JS 项目团队；
- 任何基于 RESTful API 的项目，例如 Vue、React、Node 后端 SDK 等。

---

## 典型场景

- 项目初始化时批量生成后端接口代码；
- Swagger 文档更新后快速同步前端类型与请求配置；
- 统一团队接口请求规范，减少手写类型错误。

---

## 写在最后

LeebApi 不是想替代你的手写代码，而是想帮你把最枯燥、最容易出错的部分自动化。让文档真正变成代码，让前后端协作更顺畅。

如果你也在为 Swagger 文档和前端类型之间的鸿沟头疼，不妨试试 LeebApi。

> 👉 [点击前往 VS Code Marketplace 下载 LeebApi](https://marketplace.visualstudio.com/items?itemName=leeb.leeb-api)
