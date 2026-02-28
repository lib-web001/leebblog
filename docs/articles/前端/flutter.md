---
tag:

- 安卓
- 移动端

---

# flutter

sdk下载：<https://storage.googleapis.com/flutter_infra_release/releases/stable/windows/flutter_windows_v3.13.0-stable.zip>

## flutter 版本管理

### 安装fvm

1. dart pub global activate fvm

2. 设置环境变量
   FVM
   C:\Users\34377\AppData\Local\Pub\Cache\bin

3. 安装特定版本的 Flutter，例如 3.4.0：

```bash
fvm install 3.4.0
```

* 报错
  error: RPC failed; curl 92 HTTP/2 stream 0 was not closed cleanly: CANCEL (err 8)
  error: 8000 bytes of body are still expected
  fetch-pack: unexpected disconnect while reading sideband packet
  fatal: early EOF
  fatal: fetch-pack: invalid index-pack output

* 执行

```bash
git config --global http.version HTTP/1.1
git config --global http.postBuffer 3091875328
git config http.postBuffer 1048576000
                     
```

切换到指定版本：

```bash
fvm use 3.4.0
```

查看已安装的 Flutter 版本：

```bash
fvm list
```

如果你在某个项目中想使用特定版本的 Flutter，可以进入该项目并运行：

```bash
fvm use 3.4.0
```

最后，使用 fvm 命令来执行 Flutter 操作。例如：

```bash
fvm flutter doctor
fvm flutter run
```

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

* flutter pub get
* flutter pub upgrade --major-versions
  这将更新你的项目中所有包到其兼容的最新版本，并解决依赖冲突。

## 基本结构

MaterialApp 是一个方便的 Widget，它封装了应用程序实现 Material Design 所需要的

一些 Widget。一般作为顶层widget 使用。

常用的属性：

1. home（主页）

2. title（标题）

3. color（颜色）

4. theme（主题）

5. routes（路由）

```
class MyApp extends StatelessWidget {
  const MyApp({super.key});
 
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.red,
      ),
      home: const MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

```

## 语法

* _ 设置为私有变量
* obj.add()..delete()..update() 链式调用
* dart 调用库 import 'package:startup_namer/pages/home_page.dart';
* dart 调用库 import 'package:flutter/material.dart';
* 获取环境变量

```
const boolkReleaseMode = bool.fromEnvironment('dart.vm.product', defaultValue: true);
```

* 网络图片

```
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

```
List list=List.generator(idx=>"item$idx")
ListView.builder(itemCount:list.length,itemBuilder:(context,idx)=>Text(list[idx]))
```

* 设置内边距
```
padding: const EdgeInsets.fromLTRB(20, 20, 20, 10); 
```

* 弹性布局

```
Flex(
  direction: Axis.vertical,
  mainAxisAlignment: MainAxisAlignment.center,
  crossAxisAlignment: CrossAxisAlignment.stretch,
  children: const [],
);
```

* 流式布局
```plaintext
List<Widget> btns =
          // TextButton(onPressed: () => print('a'), child: const Text('你好'));
          List.generate(
              10,
              (index) => ElevatedButton(
                  style: ElevatedButton.styleFrom(
                    foregroundColor: Colors.white,
                    backgroundColor: Colors.green, // 按钮文字颜色
                    // padding: const EdgeInsets.symmetric(
                    //     vertical: 20.0, horizontal: 40.0), // 内边距
                  ),
                  // themeData: ThemeData.dark(),
                  onPressed: () => print('a$index'),
                  child: Text(
                    '你好$index',
                    selectionColor: Colors.amber,
                  )));
      // RaisedButton btn = ElevatedButton(
      return SizedBox(
          width: MediaQuery.of(context).size.width,
          height: 200,
          child: Wrap(
            direction: Axis.vertical,
            runSpacing: 10,
            spacing: 10,
            crossAxisAlignment: WrapCrossAlignment.center,
            alignment: WrapAlignment.center,
            // runSpacing: 10,
            // spacing: 10,
            children: btns,
          ));
```

* 路由跳转到组件

```
Navigator.of(context).push(MaterialPageRoute(
                            builder: (context) => SearchPage()))
```

* 全局路由地址 配置 & 跳转路径

```
Map<String, dynamic> params = {
                      "id": index + 1,
                      'name': 'John Doe',
                      'age': 30,
                      'email': 'johndoe@example.com'
                    };

                    Navigator.pushNamed(context, '/routePage',
                        arguments: params); // 跳转路由并传递参数
                        
class RoutePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    Map<String, dynamic> params =
        ModalRoute.of(context)!.settings.arguments as Map<String, dynamic>;

    return Scaffold(
      appBar: AppBar(title: const Text('无状态组件2')),
      body: Text('RoutePage1${params["name"]} id = ${params["id"]}'),
    );
  }
}

```





* 创建有状态组件 重写 createState方法 返回对应的 State(Widget) 对象
```
class RoutePage extends StatefulWidget {
  @override
  _RoutePageState createState() => _RoutePageState(); // 返回对应的 State 对象
}

class _RoutePageState extends State<RoutePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('RoutePage1')),
      body: const Text('RoutePage1'),
    );
  }
}
```

* 创建无状态组件 重写build方法 返回对应的 Widget 对象
```
class RoutePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('RoutePage1')),
      body: const Text('RoutePage1'),
    );
  }
}
```

* form 表单

```
class MyForm extends State<MyListView> {
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();
  String _name = '';
  String _email = '';

  final TextEditingController _nameController = TextEditingController();
  final TextEditingController _emailController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Form(
      key: _formKey,
      child: Column(children: [
        TextFormField(
          decoration: const InputDecoration(hintText: '请输入姓名'),
          validator: (value) {
            if (value == null || value.isEmpty) {
              return '请输入姓名';
            }
            return null;
          },
          // controller: _nameController,
          onChanged: (value) {
            // _name = value;
            setState(() {
              _name = value;
            });
          },
        ),
        TextFormField(
          decoration: const InputDecoration(hintText: '请输入密码'),
          validator: (value) {
            if (value == null || value.isEmpty) {
              return '请输入密码';
            }
            return null;
          },
          // controller: _emailController,
          onChanged: (value) {
            // _name = value;
            setState(() {
              _email = value;
            });
          },
        ),
        const SizedBox(height: 16),

        // 提交按钮
        ElevatedButton(
          onPressed: () {
            if (_formKey.currentState!.validate()) {
              // 如果验证通过，打印结果
              print('姓名: $_name');
              print('邮箱: $_email');
              // 提交逻辑或其他操作
            } else {
              // 如果验证不通过，显示错误信息
              print('表单验证失败');
            }
          },
          child: const Text('提交'),
        ),
      ]),
    );
  }
}

```

* 状态管理

```
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';



class Counter with ChangeNotifier {
  int _count = 0;

  int get count => _count;

  void increment() {
    _count++;
    notifyListeners(); // 当状态改变时通知所有监听者
  }

  void decrement() {
    _count--;
    notifyListeners();
  }
}

// 注入
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider(
        create: (context) => Counter(),
        child: MaterialApp(
          routes: {
            '/routePage': (context) => RoutePage(),
          },
          home: AppPage(),
        ));
  }
}

// 接收

return Center(child: Consumer<Counter>(// 使用Consumer来监听Counter的变化
          builder: (context, counter, child) {
        return Row(
          children: [
            Column(
              children: [Text('as${counter.count}')],
            ),
            Column(
              children: [
                TextButton(
                  child: Text('点击${counter.count}'),
                  onPressed: () {
                    counter.increment();
                  },
                )
              ],
            )
          ],
        );
      }));
```

```

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
