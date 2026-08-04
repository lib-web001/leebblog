---
date: "2021-06-01 16:44:43"
tag:
  - react
  - 前端
  - 安卓
  - 移动端
title: "环境搭建"
description: "环境搭建 ${basePath}/${file}{ \"name\": \"${routeName}\", \"component\": () =import('${basePath}/${file.slice(0, -4)}') }export de…"
---
# 环境搭建

```
npm config set registry https://registry.npm.taobao.org --global
npm config set disturl https://npm.taobao.org/dist --global
```

## 安装脚手架

```
npm uninstall -g react-native-cli
npm install -g react-native-cli
npm install -g react-native@0.72.17
```

## 创建项目

* 注意node版本 > 18
* java版本 11

```
npx react-native@0.72 init MyApp --version 0.72
```

* 修改 android/gradle/wrapper/gradle-wrapper.properties
  文件镜像源设置 https\://mirrors.aliyun.com/macports/distfiles/gradle

```
distributionBase=GRADLE_USER_HOME
distributionPath=wrapper/dists
distributionUrl=https\://mirrors.aliyun.com/macports/distfiles/gradle/gradle-8.0.1-all.zip
networkTimeout=10000
zipStoreBase=GRADLE_USER_HOME
zipStorePath=wrapper/dists
```

* build.gradle文件配置ali镜像

```
// Top-level build file where you can add configuration options common to all sub-projects/modules.
 
buildscript {
    ext {
        buildToolsVersion = "33.0.0"
        minSdkVersion = 21
        compileSdkVersion = 33
        targetSdkVersion = 33
 
        // We use NDK 23 which has both M1 support and is the side-by-side NDK version from AGP.
        ndkVersion = "23.1.7779620"
    }
    repositories {
        // google()
        // mavenCentral()
        maven{ url 'https://maven.aliyun.com/repository/google'}
        google()
        mavenCentral()
 
    }
    dependencies {
        classpath("com.android.tools.build:gradle")
        classpath("com.facebook.react:react-native-gradle-plugin")
    }
}
```

### npm i react-native-gradle-plugin

* 修改 build.gradle.kts

```
repositories {
  //google()
  //mavenCentral()

  maven { url = uri("https://maven.aliyun.com/repository/google/") }
  maven { url = uri("https://maven.aliyun.com/repository/jcenter/") }
  maven { url = uri("https://maven.aliyun.com/repository/gradle-plugin") }
  maven { url = uri("https://maven.aliyun.com/repository/public") }
}
```

* 修改 settings.gradle.kts

```
pluginManagement {
  repositories {
    //mavenCentral()
    //google()
    //gradlePluginPortal()

    maven { url = uri("https://maven.aliyun.com/repository/google/") }
    maven { url = uri("https://maven.aliyun.com/repository/jcenter/") }
    maven { url = uri("https://maven.aliyun.com/repository/gradle-plugin") }
    maven { url = uri("https://maven.aliyun.com/repository/public") }
  }
}
```

### 最后

```
yarn android
```

### 装完依赖 跑起来有问题

```
删除 build/output/app.apk
npm start --reset-cache
npm run android
```

### 连接 mumu 模拟器

```
adb connect 127.0.0.1:7555
// connected to 127.0.0.1:7555
// 查看所有devices
// adb devices
// adb kill-server
```

### mumu 模拟器开启root权限 和开发者usb调试

### 夜神 模拟器

connect 127.0.0.1:62001

### 低于 0.67 版本的 React Native 需要 JDK 1.8 版本（官方也称 8 版本）

# stylesheet

* 没有继承性
* 小驼峰
* 尺寸没有单位
* 特殊样式名 marginVertical[垂直外边距] marginHorizontal[水平外边距]
* StyleSheet.create({})
* flex 主轴垂直方向 交叉轴水平方向

## 响应式布局 dimensions 获取设备宽高

```javascript
import {Dimensions} from 'react-native'
const windowWidth=Dimensions.get('window').width;
const heightWidth=Dimensions.get('window').height;
```

## 获取设备平台

```javascript
import {PlatForm} from 'react-native'
Platform.OS==='android' // android
Platform.OS==='ios' // ios
```

# 组件篇

## 原生组件 android or ios 组件

## 核心组件 react-native 内置常用组件

#### 基础组件 交互控件 列表视图

* View div
* Text span
* Button button

```
<Button title={'btn'} color={'#f00'} onPress={fn}/>
```

* StatusBar 状态栏

```
  <StatusBar
        hidden={false}
        backgroundColor={'#f00'}
        barStyle={'light-content'}
      />
```

* Switch checkbox

```
<Switch
  value={check}
  onValueChange={v => setCheck(v)}
  trackColor={{false: '#f00', true: '#0f0'}}
  thumbColor={'#00f'}
/>
```

ActivityIndicator loading 加载指示器组件

```
<ActivityIndicator size={'small'} color={'#f0f'} />
```

* Image img

```
<Image
  style={{width: 100, height: 100}}
  source={{
    uri: 'https://cdn.jsdelivr.net/gh/gzlibiao/cdn-delivr@0.0.1/img/wechat.bmp',
  }}
/>
<Image
  style={{width: 100, height: 100}}
  source={require('./wechat.png')}
/>
```

* TextInput input

```
<TextInput
  value={username}
  onChangeText={setUsername}
  placeholder={'请输入用户名'}
  style={styles.input}
/>

<TextInput
  value={password}
  placeholder={'请输入密码'}
  onChangeText={v => setPassword(v)}
  style={styles.input}
  secureTextEntry
/>
<TextInput
  autoFocus={true}
  textAlignVertical={'bottom'}
  textAlign={'right'}
  style={styles.textarea}
  numberOfLines={5}
  multiline={true}
/>
```

* Touchable 触碰组件

```
<TouchableHighlight>
  <Text style={styles.item}>点击了{text}</Text>
</TouchableHighlight>
<TouchableOpacity>
  <Text style={styles.item}>点击了{text}</Text>
</TouchableOpacity>
<TouchableWithoutFeedback>
  <Text style={styles.item}>点击了{text}</Text>
</TouchableWithoutFeedback>
```

* ScrollView 滚动视图组件
* SafeAreaView 适配刘海屏滚动 其他效果同 ScrollView

```javascript
<ScrollView
        horizontal
        contentContainerStyle={{margin: 4}}
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}>
  {[
    '诚信',
    '程序',
    '道德',
    '哲學',
    '体育',
    '科学',
    '财经',
    '经济',
    '政治',
    '社会',
    '法制',
    '军事',
  ].map(o => (
          <Text key={o + 'tab'}>{o}</Text>
  ))}
</ScrollView>
```

* SectionList 分组列表组件

```javascript
<SectionList
        onEndReached={() => {
          console.log('到底了');
        }}
        onEndReachedThreshold={0.1}
        refreshing={false}
        onRefresh={() => Alert.alert('下拉刷新')}
        keyExtractor={(item, i) => i + 'sec'}
        renderItem={item => <Text style={{}}>{item.item}</Text>}
        renderSectionHeader={item => (
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                  {item.section.title}
                </Text>
        )}
        sections={[
          {
            title: '魏国',
            data: ['曹操', '张辽', '邹氏', '甄宓'],
          },
          {
            title: '蜀国',
            data: [
              '刘备',
              '诸葛亮',
              '黄月英',
              '孙尚香',
              '糜夫人',
              '甘夫人',
            ],
          },
          {
            title: '吴国',
            data: ['孙权', '甘宁', '周瑜', '大乔', '小乔'],
          },
        ]}
/>
```

* FlatList 高性能列表组件
* Animated 动画组件

```javascript
import {Alert, Animated, Button, Text, View} from 'react-native';

export default () => {
  let fadeAnim = new Animated.Value(0);
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start(() => {
      Alert.alert('fadeIN');
    });
  };

  function fadeOut() {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 5000,
      useNativeDriver: true,
    }).start(() => {
      Alert.alert('fadeOUT');
    });
  }

  return (
    <View style={{backgroundColor: '#f0f'}}>
      <Animated.View style={{height: 100, width: 100, opacity: fadeAnim}}>
        <Text>fadein view</Text>
      </Animated.View>

      <View style={{display: 'flex', alignItems: 'center'}}>
        <Button title={'fade in'} onPress={fadeIn} />
        <Button title={'fade out'} onPress={fadeOut} />
      </View>
    </View>
  );
};

```

## 第三方组件

* webview iframe

```javascript
<WebView
        domStorageEnabled={true}
        javaScriptEnabled={true}
        source={{uri: 'https://leebblog.netlify.app'}}
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }}
/>
```

* picker 下拉框 value为0 貌似有问题

```javascript
<Picker
        style={{marginTop: 30}}
        onValueChange={setFoot}
        selectedValue={foot}
        mode={'dropdown'}>
  <Picker.Item label={'橘子'} value={1} />
  <Picker.Item label={'苹果'} value={2} />
  <Picker.Item label={'香蕉'} value={3} />
</Picker>
```

* swiper 展示轮播效果

```javascript
<ScrollView>
  <Swiper style={{height: 300}} autoplay showsButtons>
    <Image
            style={{height: 300, width: Dimensions.get('window').width}}
            source={require('./wechat.png')}
    />
    <Image
            style={{height: 300, width: Dimensions.get('window').width}}
            source={{
              uri: 'https://t12.baidu.com/it/app=106&amp;f=JPEG&amp;fm=30&amp;fmt=auto&amp;q=85&amp;size=f218_146&amp;u=2916590090%2C245984963?w=312&amp;h=208&amp;s=F9078B50E47284291B27775A0300A0EE',
            }}
    />
    <Image
            style={{height: 300, width: Dimensions.get('window').width}}
            source={{
              uri: 'https://t10.baidu.com/it/app=106&f=JPEG&fm=30&fmt=…63?w=312&h=208&s=15706536FBC0565D83BA4FEE0300F026',
            }}
    />
  </Swiper>
</ScrollView>
```

* asyncStorage 持久化存储系统 localStorage

```javascript

```

* geolocation 获取定位信息

```javascript

```

* camera 摄像头

```

```

## 路由导航

* 依赖

```
"@react-navigation/native": "^6.1.18",
"@react-navigation/native-stack": "^6.11.0",
"react-native-safe-area-context": "^4.11.0",
"react-native-screens": "^3.34.0",
```

* code

```javascript
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {SCREENS} from './view/constants';

const Stack = createNativeStackNavigator();

export default ({navigation}) => {
  function go(name){
    navigation.navigate(name)
  }
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerHideShadow: false,
          headerBackTitleVisible: false,
        }}>
        {SCREENS.filter(o => o.single).map(o => {
          return (
            <Stack.Screen
              key={o.name}
              name={o.name}
              options={{
                title: o.title,
              }}
              component={o.screen}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
```

## 底部导航

* 依赖

```
"@react-navigation/bottom-tabs": "^6.6.1",
```

* code

```javascript
import {SCREENS} from './constants';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default ({navigation}) => {
  return (
    <Tab.Navigator>
      {SCREENS.filter(o => !o.single).map(o => (
        <Tab.Screen
          key={o.name}
          options={{title: o.title, header: () => <></>}}
          name={o.name}
          component={o.screen}
        />
      ))}
    </Tab.Navigator>
  );
};

```

## icon

```
npm i react-native-vector-icons
```

## 打包

```
"scripts": {
  "android": "react-native run-android",
  "ios": "react-native run-ios",
  "lint": "eslint .",
  "start": "react-native start",
  "test": "jest",
  "bundle-android": "node node_modules/react-native/local-cli/cli.js bundle --entry-file index.js --platform android --dev false --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res",
  "build:android": "npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res",
  "build:ios": "npx react-native bundle --entry-file index.js --platform ios --dev false --bundle-output ./ios/main.jsbundle --assets-dest ./ios",
  "generator": "keytool -genkeypair -v -keystore my-release-key.keystore -alias my-alias -keyalg RSA -keysize 2048 -validity 10000",
  "clean": "./gradlew clean",// 清除缓存apk
  "build:release": "cd android && ./gradlew assembleRelease"
},
```

* build:release 报错 -> 检测版本语法兼容性

```
gradlew --warning-mode all
```

* 平台区分：不同平台（iOS/Android）的设计规范不同。可以利用 Platform 模块来编写平台特定的代码。

```javascript
import { Platform, Text } from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    ...Platform.select({
      ios: { fontWeight: '500', fontFamily: 'San Francisco' },
      android: { fontWeight: '400', fontFamily: 'Roboto' },
    }),
  },
});
```


* React Native 适配的核心公式可以概括为：
Flexbox 布局 + 等比缩放工具 + 安全区处理 + 平台区分

实际开发中，建议先靠 Flexbox 弹性布局解决 80% 的通用场景，再针对特殊组件（如字体、边框）使用缩放函数，最后别忘了用安全区组件处理异形屏。

* react-native-safe-area-context

```
import { useSafeAreaInsets } from 'react-native-safe-area-context';

function HomeScreen() {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      {/* 内容区域 */}
    </View>
  );
}
```

* 安全区域（刘海屏、挖孔屏）
```javascript
简单场景：直接用 RN 官方提供的 SafeAreaView 组件包裹内容，它会自动将内容限定在屏幕的安全区域内。

复杂场景：如果需要对安全区域进行更精细的控制（比如实现沉浸式背景，但文字避开刘海），可以使用 react-native-safe-area-context 库。
它提供了 useSafeAreaInsets 这个 Hook，能精确获取顶部、底部等边距值。
```

* gradlew clean 之后重启变慢
```
优化方向	核心操作 (在项目 android/ 目录下的 gradle.properties 文件中设置)	预期收益	注意事项
1. 启用 Gradle 缓存	添加：org.gradle.caching=true 	即使是 clean 构建，也能从全局缓存中恢复任务结果，大幅加速。	强烈推荐。这是提升 clean 构建速度的核武器。
2. 开启并行执行	添加：org.gradle.parallel=true 	充分利用多核 CPU，让独立的任务（如多个模块的编译）同时运行。	项目模块越多，效果越明显。
3. 启用配置缓存	添加：org.gradle.configuration-cache=true 	跳过重复的配置阶段。首次构建后，后续构建（甚至包含代码修改的构建）会快非常多。	部分老旧插件可能不兼容，如有问题可暂时关闭。
4. 确保守护进程常驻	添加：org.gradle.daemon=true 	让 Gradle 进程在后台保持运行，下次构建直接复用，避免 JVM 启动开销。	通常默认开启，检查一下确保是 true 即可。
5. 调整 JVM 内存	添加：org.gradle.jvmargs=-Xmx4096m -XX:+UseG1GC 	给 Gradle 分配更多内存（如 4GB），减少垃圾回收暂停，让编译更顺畅。	根据你的电脑内存大小调整 -Xmx 后面的数值
```
```

org.gradle.configuration-cache=true
org.gradle.caching=true
org.gradle.parallel=true
org.gradle.configuration-cache=true
org.gradle.daemon=true
org.gradle.jvmargs=-Xmx4096m -XX:+UseG1GC
```

# react-native-cli 约定式路由系统

```javascript
const fs = require('fs');
const path = require('path');

function generateRoutes(dir, basePath = './screens') {
  const routes = [];
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      routes.push(...generateRoutes(fullPath, `${basePath}/${file}`));
    } else if (file.endsWith('.tsx')) {
      const routeName = path.basename(file, '.tsx');
      routes.push(`{
        "name": "${routeName}",
        "component": () => import('${basePath}/${file.slice(0, -4)}')
      }`);
    }
  });

  return `export default [${routes.join(',\n')}]`;
}

const routes = generateRoutes(path.join(__dirname, 'screens'));
fs.writeFileSync(
        path.join(__dirname, 'routes.tsx'),
        routes
);
console.log('Routes generated:', routes);

```
