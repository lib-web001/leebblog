---
date: "2021-06-16 16:10:43"
tag:
  - vscode插件
title: "lmulator"
description: "模拟器插件"
---

# LMulator：在 VS Code 里管理移动模拟器、看画面、跑项目

> 移动开发不必再周旋于 Android Studio、Xcode 和命令行之间。

---

## 一句话介绍

**LMulator** 是一款在 VS Code 中管理 Android / iOS 模拟器、嵌入模拟器画面并一键运行移动端项目的插件。

---

## 下载安装

- **VS Code Marketplace**：[https://marketplace.visualstudio.com/items?itemName=leeb.lmulator](https://marketplace.visualstudio.com/items?itemName=leeb.lmulator)
- **一键安装**（需本地已安装 VS Code）：[vscode:extension/leeb.lmulator](vscode:extension/leeb.lmulator)

---

## 为什么需要它？

做移动开发的同学，往往要面对一套复杂的工具链：

- 启动模拟器要开 Android Studio 或 Xcode；
- 运行项目要记不同框架的命令；
- 想看一下模拟器画面，得把窗口切来切去；
- Flutter、React Native、Ionic、Capacitor、uni-app……每个项目启动方式都不一样；
- 日志窗口、终端、IDE、模拟器挤满屏幕，手忙脚乱。

LMulator 的目标是：**把模拟器管理、项目运行、日志查看都集中在 VS Code 里完成**，让你少切几次窗口，多写几行代码。

---

## 核心功能

### 📱 左侧活动栏面板

点击 VS Code 左侧活动栏的手机图标，打开 LMulator 面板。面板分为三个标签页：

- **Android**：管理 Android AVD 和已连接设备；
- **iOS**：管理 iOS Simulator（macOS）；
- **环境**：查看和配置 SDK 路径等环境信息。

### 📋 设备列表

自动列出可用的 Android AVD、已连接的 Android 设备，以及 iOS Simulator，方便你快速选择目标设备。

### 🖥️ 嵌入模拟器画面

无需离开 VS Code，就能在面板内实时查看模拟器屏幕：

- **Android**：通过 `adb exec-out screencap -p` 定时截图刷新；
- **iOS**：通过 `xcrun simctl io <udid> screenshot` 定时截图刷新。

### 👆 点击画面控制 Android 模拟器

在预览画面上点击，插件会自动计算缩放比例，把坐标映射为真实屏幕坐标，并通过 `adb shell input tap` 发送触摸事件，真正做到「看着画面就能操作」。

### ▶️ 一键启动 / 停止

- 启动 Android AVD 或 iOS Simulator；
- 关闭正在运行的设备。

### 🚀 启动并运行

一键完成「启动模拟器 → 等待设备就绪 → 运行当前项目」的完整流程。

### 🧠 自动识别项目类型

LMulator 会根据项目文件特征判断你正在开发哪类应用：

- **Flutter**：`pubspec.yaml`；
- **React Native**：`react-native.config.js`、`metro.config.js`、`package.json` 依赖；
- **Ionic / Cordova**：`ionic.config.json`；
- **Capacitor**：`capacitor.config.json`；
- **uni-app**：`manifest.json` + `pages.json`。

### 🛠️ 自动生成运行命令

根据项目类型和目标设备，自动生成对应命令：

- Flutter：`flutter run -d <device>`
- React Native：`npx react-native run-android --deviceId <id>`
- Capacitor：`npx cap run android --target <id>`
- Ionic：`ionic cordova run android --target=<id>`

### ⚙️ 自定义命令模板

如果默认命令不满足需求，可以在设置中自定义：

- `lmulator.runCommand.android`
- `lmulator.runCommand.ios`

### 📜 实时日志面板

运行命令的 `stdout` 和 `stderr` 会流式显示在下方面板中，方便你实时查看应用输出。

### 🔧 SDK 配置

支持手动指定 Android SDK 根目录，解决环境变量未配置或路径特殊的情况。

---

## 使用流程

1. 安装插件后点击左侧活动栏的 LMulator 图标；
2. 如需要，点击「设置 SDK」指定 Android SDK 路径；
3. 在 Android / iOS 标签页查看可用设备列表；
4. 点击「启动」启动模拟器，或「启动并运行」启动后直接运行项目；
5. 设备运行后点击「画面」，在面板内嵌入实时屏幕；
6. 点击「📋 命令」查看自动生成的运行命令，可复制或点击「运行」直接执行；
7. 在下方面板查看实时运行日志。

---

## 技术亮点

- **直接调用系统 CLI**：`emulator`、`adb`、`xcrun simctl`，无需额外守护进程；
- **定时截图流实现画面嵌入**，Android 700ms、iOS 1000ms 刷新；
- **Android 点击回传**通过计算预览图与实际屏幕的缩放比例，映射为真实坐标后发送 `adb shell input tap`；
- **项目类型自动检测**，通过多种文件特征组合判断框架类型；
- **子进程 `spawn` 管理**，支持运行命令的流式日志输出与进程清理；
- **跨平台适配**，Windows 下自动为命令追加 `.exe` 后缀。

---

## 适合谁用？

- Flutter、React Native、Ionic / Cordova、Capacitor、uni-app 开发者；
- 需要在编码时持续查看模拟器画面的调试场景；
- 频繁切换 Android 与 iOS 模拟器的多端开发者；
- 希望把模拟器管理、项目运行、日志查看集中在 VS Code 内的团队。

---

## 典型场景

- 在 VS Code 内启动 Android 模拟器并预览 Flutter 应用；
- 在 macOS 上启动 iOS Simulator 调试 React Native 项目；
- 边看模拟器画面边查看实时日志，快速定位问题；
- 多个移动项目之间切换，无需记忆不同的启动命令。

---

## 写在最后

LMulator 想做的事情很简单：**让移动开发的日常操作更集中在编辑器里完成**。模拟器、命令、日志、画面，本该都在你写代码的地方。

如果你也厌倦了在不同工具之间反复横跳，LMulator 可能会让你的移动开发流程顺畅许多。

> 👉 [点击前往 VS Code Marketplace 下载 LMulator](https://marketplace.visualstudio.com/items?itemName=leeb.lmulator)
