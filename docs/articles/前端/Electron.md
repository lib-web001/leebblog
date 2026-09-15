---
title: Electron 
date: 2026-09-15
tags:
  - electron
  - 桌面应用
  - JavaScript
  - 打包
---

# 引言

本文面向有前端基础的开发者，带你从 Electron 的工作原理、进程模型与通信、常见安全与性能问题，到打包发布与自动更新实战，全方位掌握将 Web 技术用于跨平台桌面应用的要点。

# 目录

- Electron 简介与适用场景
- 架构与进程模型（Main / Renderer / Preload）
- 主进程与渲染进程通信（IPC）实战
- 原生功能与 Node 集成（文件、原生模块）
- 安全防护要点（Context Isolation、CSP、禁用远程代码执行）
- 性能优化与资源管理
- 打包、签名与自动更新（electron-builder / electron-updater）
- CI/CD 集成示例
- 实战示例：一个简单笔记应用的实现要点
- 常见问题与排查技巧
- 参考资料

# Electron 简介与适用场景

简述 Electron 的定位：Chromium + Node.js 的运行时，把 Web 技术带到桌面；适合需要快速将现有前端产品移植为桌面客户端或需要与本地资源交互的应用。

# 架构与进程模型（Main / Renderer / Preload）

- Main 进程：负责生命周期、原生窗口（BrowserWindow）、菜单、原生 API 调用。
- Renderer 进程：每个窗口对应一个渲染进程，运行网页前端代码。
- Preload 脚本：在渲染器与 Node 环境之间做受控桥接，建议只暴露必要的最小 API。

示例：在 `main.js` 创建窗口并加载页面

```js
const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
  const win = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(createWindow)
```

# 主进程与渲染进程通信（IPC）实战

推荐使用 `contextBridge` + `ipcRenderer.invoke/handle` 模式，避免直接暴露 `ipcRenderer`。

`preload.js`:

```js
const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  readFile: (filePath) => ipcRenderer.invoke('read-file', filePath),
})
```

`main.js` 中注册 handler：

```js
const { ipcMain } = require('electron')
const fs = require('fs').promises

ipcMain.handle('read-file', async (_, filePath) => {
  return await fs.readFile(filePath, 'utf8')
})
```

渲染端使用：

```js
const content = await window.electronAPI.readFile('C:\\path\\to\\file.txt')
```

# 原生功能与 Node 集成

- 使用原生模块时注意打包（`electron-rebuild`）
- 文件系统、通知、剪贴板等原生特性示例

# 安全防护要点

- 永远开启 `contextIsolation`，关闭 `nodeIntegration`。
- 使用 CSP（Content-Security-Policy）限制外部资源加载。
- 避免从不可信源加载远端内容。

# 性能优化与资源管理

- 减少主进程阻塞操作，使用异步 IO。
- 对大型文件或计算任务使用子进程或 Worker（`child_process` / `worker_threads`）。

# 打包、签名与自动更新

推荐工具：`electron-builder` + `electron-updater`。示例 `package.json` 配置片段：

```json
"build": {
  "appId": "com.example.myapp",
  "productName": "MyApp",
  "win": {
    "target": "nsis"
  },
  "mac": {
    "target": "dmg"
  }
}
```

自动更新：在主进程中初始化 `autoUpdater` 并监听事件，构建服务器或使用 GitHub Releases 托管更新文件。

# CI/CD 集成示例

使用 GitHub Actions 进行构建与发布的基本思路（安装依赖、构建前端、electron-builder 打包、上传 Release 资产）。

# 实战示例：简单笔记应用要点

- 数据存储：优先使用 sqlite 或者文件 + 索引（避免直接把大量数据存入本地 JSON）。
- 自动保存、回滚与同步（如选配云同步）。
- 本地搜索和全文索引建议使用 `lunr` 或 `better-sqlite3`。

# 常见问题与排查技巧

- 打包后缺少原生模块 → 运行 `electron-rebuild`，确认 electron 和模块二进制兼容。
- 应用启动黑屏 → 检查 `preload` 抛错、CSP 或资源路径。

# 参考资料

- 官方文档: https://www.electronjs.org/
- electron-builder: https://www.electron.build/
- electron-updater: https://www.electron.build/auto-update

---
