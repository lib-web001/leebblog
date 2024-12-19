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

## 语法

* _ 设置为私有变量
* obj.add()..delete()..update() 链式调用
* dart 调用库 import 'package:startup_namer/pages/home_page.dart';
* dart 调用库 import 'package:flutter/material.dart';
* 获取环境变量

```javascript
const boolkReleaseMode = bool.fromEnvironment('dart.vm.product', defaultValue: true);
```

* 网络图片

```javascript
Image.network(
  "<https://jf-temp-1301446188.cos.ap-guangzhou.myqcloud.com/logo2>",
  alignment: Alignment.topCenter,
  repeat: ImageRepeat.noRepeat,
  // color: Colors.red,
  fit: BoxFit.cover,
  // colorBlendMode: BlendMode.colorDodge,
)
```

* 动态列表

```javascript
List list=List.generator(idx=>"item$idx")
ListView.builder(itemCount:list.length,itemBuilder:(context,idx)=>Text(list[idx]))
```

```flutter

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'package:provider/provider.dart';
import 'package:provider/single_child_widget.dart';
import 'package:wanandroid/common/constant.dart';
import 'package:wanandroid/common/router.dart';
import 'package:wanandroid/common/utils.dart';


import 'package:wanandroid/common/values/colors.dart';
import 'package:wanandroid/common/values/strings.dart';
import 'package:wanandroid/common/values/styles.dart';
import 'package:wanandroid/pages/home/home_page.dart';
import 'package:wanandroid/pages/login/login_page.dart';
import 'package:wanandroid/pages/splash/splash_page.dart';
import 'package:wanandroid/provider/app.dart';
import 'package:wanandroid/provider/user.dart';
import 'package:wanandroid/provider/theme.dart';
import 'package:wanandroid/provider/locale.dart';
import 'package:wanandroid/provider/system.dart';
import 'package:wanandroid/provider/http.dart';
import 'package:wanandroid/provider/sp.dart';
import 'package:wanandroid/provider/setting.dart';
import 'package:wanandroid/provider/collect.dart';
import 'package:wanandroid/provider/search.dart';
import 'package:wanandroid/provider/article.dart';
import 'package:wanandroid/provider/tree.dart'; 


import 'package:provider/provider.dart';
import 'package:flutter/material.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:flutter_easyrefresh/easy_refresh.dart';
import 'package:flutter_easyrefresh/material_footer.dart';
import 'package:flutter_easyrefresh/material_header.dart';
import 'package:flutter_easyrefresh/taurus_footer.dart';
import 'package:flutter_easyrefresh/taurus_header.dart';
import 'package:flutter_easyrefresh/phoenix_footer.dart';
import 'package:flutter_easyrefresh/phoenix_header.dart';
import 'package:flutter_easyrefresh/taurus_theme.dart';
import 'package:flutter_easyrefresh/phoenix_theme.dart';
import 'package:flutter_easyrefresh/easy_refresh.dart';
import 'package:flutter_easyrefresh/material_footer.dart';
import 'package:flutter_easyrefresh/material_header.dart';
import 'package:flutter_easyrefresh/taurus_footer.dart';
import 'package:flutter_easyrefresh/taurus_header.dart';
import 'package:flutter_easyrefresh/phoenix_footer.dart';
import 'package:flutter_easyrefresh/phoenix_header.dart';
import 'package:flutter_easyrefresh/phoenix_theme.dart';
import 'package:flutter_easyrefresh/easy_refresh.dart';
import 'package:flutter_easyrefresh/material_footer.dart';
import 'package:flutter_easyrefresh/material_header.dart';
import 'package:flutter_easyrefresh/taurus_footer.dart';
import 'package:flutter_easyrefresh/taurus_header.dart';
import 'package:flutter_easyrefresh/phoenix_footer.dart';
import 'package:flutter_easyrefresh/phoenix_header.dart';
import 'package:flutter_easyrefresh/phoenix_theme.dart';
import 'package:flutter_easyrefresh/easy_refresh.dart';
import 'package:flutter_easyrefresh/material_footer.dart';
import 'package:flutter_easyrefresh/material_header.dart';
import 'package:flutter_easyrefresh/taurus_footer.dart';
import 'package:flutter_easyrefresh/taurus_header.dart';
import 'package:flutter_easyrefresh/phoenix_footer.dart';
import 'package:flutter_easyrefresh/phoenix_header.dart';
import 'package:flutter_easyrefresh/phoenix_theme.dart';

import 'package:flutter_easyrefresh/easy_refresh.dart';
import 'package:flutter_easyrefresh/material_footer.dart';
import 'package:flutter_easyrefresh/material_header.dart';
import 'package:flutter_easyrefresh/taurus_footer.dart';
import 'package:flutter_easyrefresh/taurus_header.dart';
import 'package:flutter_easyrefresh/phoenix_footer.dart';
import 'package:flutter_easyrefresh/phoenix_header.dart';
import 'package:flutter_easyrefresh/phoenix_theme.dart';

import 'package:flutter_easyrefresh/easy_refresh.dart';
import 'package:flutter_easyrefresh/material_footer.dart';
import 'package:flutter_easyrefresh/material_header.dart';
import 'package:flutter_easyrefresh/taurus_footer.dart';
import 'package:flutter_easyrefresh/taurus_header.dart';
import 'package:flutter_easyrefresh/phoenix_footer.dart';
import 'package:flutter_easyrefresh/phoenix_header.dart';

import 'package:flutter_easyrefresh/phoenix_theme.dart';
import 'package:flutter_easyrefresh/easy_refresh.dart';
import 'package:flutter_easyrefresh/material_footer.dart';
import 'package:flutter_easyrefresh/material_header.dart';
import 'package:flutter_easyrefresh/taurus_footer.dart';
import 'package:flutter_easyrefresh/taurus_header.dart';
import 'package:flutter_easyrefresh/phoenix_footer.dart';
import 'package:flutter_easyrefresh/phoenix_header.dart';
import 'package:flutter_easyrefresh/phoenix_theme.dart';

import 'package:flutter_easyrefresh/easy_refresh.dart';
import 'package:flutter_easyrefresh/material_footer.dart';
import 'package:flutter_easyrefresh/material_header.dart';
import 'package:flutter_easyrefresh/taurus_footer.dart';
import 'package:flutter_easyrefresh/taurus_header.dart';
import 'package:flutter_easyrefresh/phoenix_footer.dart';
import 'package:flutter_easyrefresh/phoenix_header.dart';
import 'package:flutter_easyrefresh/phoenix_theme.dart';

import 'package:flutter_easyrefresh/easy_refresh.dart';
import 'package:flutter_easyrefresh/material_footer.dart';
import 'package:flutter_easyrefresh/material_header.dart';
import 'package:flutter_easyrefresh/taurus_footer.dart';
import 'package:flutter_easyrefresh/taurus_header.dart';
import 'package:flutter_easyrefresh/phoenix_footer.dart';
import 'package:flutter_easyrefresh/phoenix_header.dart';
import 'package:flutter_easyrefresh/phoenix_theme.dart';
import 'package:flutter_easyrefresh/easy_refresh.dart';
import 'package:flutter_easyrefresh/material_footer.dart';

```
