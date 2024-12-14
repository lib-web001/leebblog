---
tag:
  - 安卓
  - 移动端
---

# flutter

sdk下载：<https://storage.googleapis.com/flutter_infra_release/releases/stable/windows/flutter_windows_v3.13.0-stable.zip>

## flutter -h

以管理员身份运行

## flutter doctor 检测flutter 开发环境

## flutter doctor --android-licenses

## flutter doctor 执行慢

```
变量名：PUB_HOSTED_URL
变量值：https://pub.flutter-io.cn
变量名：FLUTTER_STORAGE_BASE_URL
变量值：https://storage.flutter-io.cn
```

flutter config --android-studio-dir "D:\gz\soft\andstudio"
flutter config --android-sdk D:\gz\soft\android_sdk
flutter config --android-sdk D:\gz\code\android\sdk
sdkmanager "platform-tools" "platforms;android-30" "build-tools;30.0.3"

flutter config --android-studio-dir "C:\Program Files\Android\Android Studio"
flutter config --android-sdk D:\gz\soft\antroid_sdk

Android Studio 4.1还未兼容Flutter stable，须手动切换到dev。

sdkmanager --sdk_root=D:\gz\soft\Android\sdk "platform-tools" "platforms;android-28" "build-tools;28.0.3"

### 执行

```
    flutter channel dev
```

<!-- C:\Program Files\Android\Android Studio -->

## sdkmanager --version

环境变量配准

```
ANDROID_SDK_ROOT="C:\Users\34377\AppData\Local\Android\Sdk"
%ANDROID_SDK_ROOT%\platform-tools\bin
%ANDROID_SDK_ROOT%\tools\bin
```

外部教程链接：<https://wiki.ducafecat.tech/blog/translation/7-flutter-the-advanced-layout-rule-even-beginners-must-know.html>

## 启动flutter项目

main.dart文件 右键运行和调试
