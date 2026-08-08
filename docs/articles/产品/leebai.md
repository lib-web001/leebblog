---
date: "2026-08-08 22:50:00"
tag:
  - 产品
title: "leebai"
description: "leebai 我的 AI 平台 基于 Agnes AI 全模态 API 的个人 AI 站点，Next.js 全栈实现，支持 AI 对话、文生图、文生视频、AI 编剧一键出片，已部署到 Netlify"
---

# leebai：我的个人 AI 平台，对话 / 绘画 / 视频一站式体验

> 一句创意，AI 自动写剧本、逐镜生成视频、末帧续拍、合成出片。

---

## 一句话介绍

**leebai** 是基于 Agnes AI 全模态 API 打造的个人 AI 平台，集 **AI 对话、文生图、文生视频、AI 编剧一键出片** 于一体，Next.js 全栈实现，API Key 仅保存在服务端，不会暴露到前端。

---

## 体验地址

👉 [https://leebai.netlify.app/](https://leebai.netlify.app/)

---

## 核心功能

### 💬 AI 对话

![leebai-chat](/img/leebai-chat.png)

- **流式输出**：SSE 逐字返回，体验丝滑；
- **多模型切换**：agnes-2.0-flash / agnes-2.5-flash / agnes-2.5-pro-alpha；
- **全类型附件上传**：图片多模态识别，PDF / Word / Excel / PPT 解析后注入上下文，任意文本文件直接投喂；
- **对话记录本地缓存**：刷新不丢失，自动保存在浏览器本地。

### 🎨 文生图

![leebai-image](/img/leebai-image.png)

- 支持比例（1:1、16:9、9:16 等）、清晰度（最高 2K）、反向提示词；
- 模型：agnes-image-2.0-flash / agnes-image-2.1-flash。

### 🎬 文生视频 & AI 编剧一键出片

![leebai-video](/img/leebai-video.png)

这是最好玩的部分——**AI 编剧 · 一键出片**：

1. 输入一句创意，比如「一只橘猫在小院里追蝴蝶，最后治愈地睡着」；
2. AI 自动创作剧本：片名、剧情梗概、分镜（每个镜头含景别、动作、场景、画风、镜头运动、光线、台词音效）；
3. 自动逐镜提交视频生成任务，异步任务 + 进度轮询；
4. **末帧续拍**：自动抽取上一段的最后一帧作为下一段的首帧，保证画面连贯；
5. 全部镜头生成后，**在浏览器端用 FFmpeg.wasm 自动转场合成**完整长视频。

另外还有：

- **AI 提示词助手**：一句话创意帮你扩写成专业提示词（单段 / 分镜两种模式）；
- **文生视频**：agnes-video-v2.0，音画同步，单段最长 20 秒；
- **多片段合成**：多段视频在浏览器端合成长视频，不经过服务器。

---

## 技术栈

- **框架**：Next.js 15 + React 19 + TypeScript
- **模型服务**：Agnes AI 全模态 API（对话 / 图像 / 视频）
- **文档解析**：pdfjs-dist（PDF）、mammoth（Word）、xlsx（Excel）
- **视频合成**：FFmpeg.wasm（纯浏览器端，无需服务器转码）
- **部署**：Netlify（Next.js Runtime + Functions）

---

## 技术亮点

- **API Key 服务端代理**：所有模型请求经过 Next.js API Routes 转发，Key 只存在于服务端环境变量，前端零暴露；
- **SSE 流式转发**：后端把模型流式响应原样转发给前端，逐字渲染；
- **异步任务轮询**：视频生成是分钟级任务，提交后每 5 秒轮询一次进度，429 限流自动重试；
- **末帧续拍保持连贯**：抽取上一段视频最后一帧作为下一段首帧输入，角色和画风不跳变；
- **FFmpeg.wasm 浏览器端合成**：多段视频的转场拼接完全在用户浏览器里完成，服务器零成本；
- **AI 输出 JSON 容错解析**：模型输出的 JSON 偶尔不规范（字符串里带未转义换行、markdown 包裹、截断），做了括号平衡截取 + 控制字符修复 + 失败自动重试的三重容错。

---

## 部署踩坑记录

部署到 Netlify 时踩了几个坑，记录一下：

1. **monorepo 子目录**：项目在 monorepo 的 `agnes-ai-web` 子目录里，Netlify 的 Base directory 必须设置为该目录；
2. **本地 build 假死**：`next dev` 和 `next build` 同时跑会互相锁住 `.next` 目录（Windows 下尤其明显），build 直接卡死，关掉 dev 服务器即可；
3. **部署成功但页面 404**：Netlify 没有应用 Next.js Runtime，把 `.next` 当静态目录原样发布了，在 `netlify.toml` 里显式声明插件解决：

```toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "20"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

---

## 写在最后

做这个项目最大的感受是：**全模态 API 把很多以前需要拼凑多个服务的事情变成了一次调用**。对话、画图、视频生成、剧本创作串成一条流水线后，「一句创意出一部短片」这件事真的跑通了。

如果你也想搭一个自己的 AI 站点，不妨从一个 API Key 和一次 `fetch` 开始。

> 👉 [点击体验 leebai](https://leebai.netlify.app/)
