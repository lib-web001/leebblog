---
tag:
  - react
  - 前端
---

# redux概述

是一个js容器，用于全局状态管理

### 三个核心

* 1 单一数据源
整个应用的state被存储在一颗objectTree中，并且这个object tree只存在于唯一一个store中
* 2 state只读的
 唯一改变state的方法是触发action
* 3 使用纯函数来执行修改
 为了描述action如何改变state tree 需要编写reducers

### state 状态

DomianData : 理解为服务端的数据，比如获取用户的信息，商品的列表
UiState : 决定当前ui显示的状态
AppState : App级别的状态，比如：当前是否请求loading,当前路由信息等可能被多个和组件去使用到的状态

### action

action 是把数据从应用传递到store的载体，他是store数据的唯一来源，我们可以通过store.dispatch将action传递给store

* 本质就是一个js对象
* action 对象内部必须要有一个type数据表示要执行的操作
* 多数情况下，这个type 会被定义为字符串常量
* 除了type字段外，action 的结果随意进行定义
* 而我们在项目中，更多喜欢用action 创建函数
* 只是描述了有事情要发生，比没有描述如何更新state

### reducer

是一个函数，用来响应发送过来的actions, 然后经过处理，把state发送给store
在reducer函数中，需要return 返回值，这样store才能接收到数据
函数会接收两个参数，第一个参数是初始化state,第二个参数是action

```javascript

```

### store

store就是把action 与reducer联系到一起的对象
主要职责:

* 维持应用的state
* 提供getState()方法获取state
* 提供dispatch() 方法发送action
* 通过subscribe() 注册监听
* 通过subscribe() 返回值注销监听

```javascript
import {createStore} from 'redux';
const store=createStore('传递reducer')
```

1. 构建 action,创建函数返回一个带有type属性的变量

2. 构建reducer,用来响应action,通过return 把数据给store

3. 利用createStore创建store,构建时传递给我们写好的reducer

4. 利用 store.subscribe注册监听

5. 当我们利用 store.dispatch()发送一个action 就能触发监听，store.getState() 取值
