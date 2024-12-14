---
tag:
  - 安卓
  - 移动端
---

# 生命周期

## 应用生命周期

```
onLaunch: 当 uni-app 初始化完成时触发(全局只触发一次)
onShow: 当 uni-app 启动，或从后台进入前台显示
onHide: 当 uni-app 从前台进入后台
onError: 当 uni-app 报错时触发
onUniNViewMessage: 对 nvue 页面发送的数据进行监听
onUnhandledRejection: 对未处理的 Promise 拒绝事件监听函数
onPageNotFound: 页面不存在监听函数
onThemeChange: 监听系统主题变化
```

## 页面生命周期函数

```
onLoad: 监听页面加载，其参数为上个页面传递的数据，参数类型为 Object(用于页面传参)。
onShow: 监听页面显示。页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面
onReady: 监听页面初次渲染完成。注意如果渲染速度快，会在页面进入动画完成前触发
onHide: 监听页面隐藏
onUnload: 监听页面卸载
onResize: 监听窗口尺寸变化
onPullDownRefresh: 监听用户下拉动作，一般用于下拉刷新
onReachBottom: 页面滚动到底部的事件（不是 scroll-view 滚到底），常用于下拉下一页数据。
onTabItemTap: 点击 tab 时触发，参数为 Object
onShareAppMessage: 用户点击右上角分享
onPageScroll: 监听页面滚动，参数为 Object
onNavigationBarButtonTap: 监听原生标题栏按钮点击事件，参数为 Object
onBackPress: 监听页面返回，返回 event = {from:backbutton、 navigateBack} ，backbutton 表示来源是左上角返回按钮或 android 返回键；navigateBack 表示来源是 uni.navigateBack
onNavigationBarSearchInputChanged: 监听原生标题栏搜索输入框输入内容变化事件
onNavigationBarSearchInputConfirmed: 监听原生标题栏搜索输入框搜索事件，用户点击软键盘上的“搜索”按钮时触发。
onNavigationBarSearchInputClicked: 监听原生标题栏搜索输入框点击事件
onShareTimeline: 监听用户点击右上角转发到朋友圈
onAddToFavorites: 监听用户点击右上角收藏
```

## 组件生命周期

```
uni-app 组件支持的生命周期，与 vue 标准组件的生命周期相同。

beforeCreate： 在实例初始化之后被调用
created: 在实例创建完成后被立即调用
beforeMount: 在挂载开始之前被调用
mounted: 挂载到实例上去之后调用
beforeUpdate: 数据更新时调用，发生在虚拟 DOM 打补丁之前。
updated: 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
beforeDestroy: 实例销毁之前调用。在这一步，实例仍然完全可用。
destroyed: Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。
```

# 组件/标签的变化

```
以前是html标签，现在是小程序标签
div 改成 view
span、font 改成 text
a 改成 navigator
img 改成 image
input 还在，但type属性改成了confirmtype
form、button、checkbox、radio、label、textarea、canvas、video 这些还在。
select 改成 picker
iframe 改成 web-view
ul、li没有了，都用view替代
audio 不再推荐使用，改成api方式，背景音频api文档
其实老的HTML标签也可以在uni-app里使用，uni-app编译器会在编译时把老标签转为新标签。但不推荐这种用法，调试H5端时容易混乱，基于元素的选择器也会出问题。

除了改动外，新增了一批手机端常用的新组件
scroll-view 可区域滚动视图容器
swiper 可滑动区域视图容器
icon 图标
rich-text 富文本（不可执行js，但可渲染各种文字格式和图片）
progress 进度条
slider 滑块指示器
switch 开关选择器
camera 相机
live-player 直播
map 地图
cover-view 可覆盖原生组件的视图容器
cover-view需要多强调几句，uni-app的非h5端的video、map、canvas、textarea是原生组件，层级高于其他组件。如需覆盖原生组件，比如在map上加个遮罩，则需要使用cover-view组件

除了内置组件，还有很多开源的扩展组件，把常用操作都进行封装，
```

# rpx

```
rpx 是相对于基准宽度的单位，可以根据屏幕宽度进行自适应。uni-app 规定屏幕基准宽度 750rpx。

开发者可以通过设计稿基准宽度计算页面元素 rpx 值，设计稿 1px 与框架样式 1rpx 转换公式如下：

设计稿 1px / 设计稿基准宽度 = 框架样式 1rpx / 750rpx

换言之，页面元素宽度在 uni-app 中的宽度计算公式：

750 * 元素在设计稿中的宽度 / 设计稿基准宽度
```

# js 的变化

```
运行环境从浏览器变成v8引擎
```

# nvue

```
1. nvue 开发与 vue 开发的常见区别

2. nvue 页面控制显隐只可以使用 v-if 不可以使用 v-show。

3. nvue 页面只能使用 flex 布局，不支持其他布局方式。页面开发前，首先想清楚这个页面的纵向内容有什么，哪些是要滚动的，然后每个纵向内容的横轴排布有什么，按 flex 布局设计好界面。

4. nvue 页面编译为 H5、小程序时，会做一件 css 默认值对齐的工作。因为 weex 渲染引擎只支持 flex，并且默认 flex 方向是垂直。而 H5 和小程序端，使用 web 渲染，默认不是 flex，并且设置 display:flex 后，它的 flex 方向默认是水平而不是垂直的。所以 nvue 编译为 H5、小程序时，会自动把页面默认布局设为 flex、方向为垂直。当然开发者手动设置后会覆盖默认设置。

5. 文字内容，必须、只能在 组件下。不能在 <div>、<view> 的 text 区域里直接写文字。否则即使渲染了，也无法绑定 js 里的变量。

6. 只有 text 标签可以设置字体大小，字体颜色。

7. 布局不能使用百分比、没有媒体查询。


```

# 条件编译

```
/* #ifdef H5 */
/* #endif */

/* #ifdef MP-WEIXIN */
/* #endif */

/* #ifdef APP-PLUS */
/* #endif */

```

# 路由

uni.navigateTo(Object) ==> 保留当前界面跳转
uni.redirectTo(object) ==> 关闭当前界面跳转
uni.reLaunch({object}) ==> 关闭所有界面跳转
uni.switchTab(object) ==> 跳转 tabBar 界面，并且关闭所有非 tabBar 界面
uni.navigateBack(object) ==> 关闭当前界面，并返回之前界面 通过 getCurrentPages()获取当前界面栈觉得返回第几层

# pages.json 文件配置

```
{
  pages:[
    {
      path:"文件路径",
      style:{
        "navigationBarTitleText":"界面标题栏名称",
        "navigationBarBackgroundColor":"#000",
        "navigationBarTextStyle":"white|black",
        "navigationBarShadow":{
          colorType:"red"
        },
        enablePullDownRefresh:true, // uni.stopPullDownRefresh=>关闭
        titlePenetrate:"NO", // 导航栏点击穿透
      }
    }
  ],
  globalStyle:{
    navigationBarTextStyle:'black',
    navigationBarTitleText:'全局顶栏标题',
    navigationBarBackgroundColor:'#fff',
    backgroundColor:"#fff"
  },
  tabbar:{
    list:[
      {
        pagePath:'',
        text:'',
        iconPath:'默认图标',
        selectedIconPath:''
      }
    ],
    midButton:{ // ==> 监听 uni.onTabBarMidButtonTap
      width:'',
      height:'',
      text:'',
      iconPath:'',
      iconWidth:'24px',
      backgroundImage:'',
      iconFont:'字体图标'
    }
  },
  easycom:{
    custom:"u-view"
  }
}
```
