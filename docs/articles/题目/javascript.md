---
tag:
  - 八股文
---

# JavaScript 相关

## 闭包函数

> 闭包定义

闭包就是能够读取其他函数内部变量的函数

1. 封装变量
   闭包可以用来封装变量，使其不受外界的干扰，同时又可以通过返回的函数来访问和操作这些变量
2. 函数柯里化
3. 实现缓存

例如：

```js
function fun1() {
  const num = 1
  function fun2() {
    return 10 + num
  }
  return fun2()
}
console.log(fun1())
```

闭包是指有权访问另⼀个函数作⽤域中变量的函数，创建闭包的最常⻅的⽅式就是在⼀个函数内创建另⼀个函数，通过另⼀个函数访问这个函数的局部变量,利⽤闭包可以突破作用域

> 闭包的特性

- 函数内再嵌套函数
- 内部函数可以引⽤外层的参数和变量
- 参数和变量不会被垃圾回收机制回收

> 垃圾回收机制是什么？

由于字符串、对象等没有固定的大小，js 程序在每次创建字符串、对象的时候，程序都会**分配内存来存储那个实体**

- 使用分配到的内存做点什么
- 不需要时将其释放回归

在不需要字符串、对象的时候，需要释放其所占用的内存，否则将会消耗完系统中所有可用的内存，造成系统崩溃，这就是**垃圾回收机制所存在的意义**

在 C 和 C++之类的语言中，需要手动来管理内存的，这也是造成许多不必要问题的根源。幸运的是，在编写 js 的过程中，内存的分配以及内存的回收完全实现了自动管理，我们不用操心这种事情

> 说说你对闭包的理解

1 使⽤闭包主要是为了设计私有的⽅法和变量。
2 闭包的优点是可以避免全局变量的污染，
3 缺点是闭包会常驻内存，会增⼤内存使⽤量，使⽤不当很容易造成内存泄露。在 js 中，函数即闭包，只有函数才会产⽣作⽤域的概念

- 闭包 的最⼤⽤处有两个，⼀个是可以读取函数内部的变量，另⼀个就是让这些变量始终保持在内存中

- 闭包的另⼀个⽤处，是封装对象的私有属性和私有⽅法
- **好处：** 能够实现封装和缓存等
- **坏处：** 就是消耗内存、不正当使⽤会造成内存溢出的问题

> 使用闭包需要的注意点

- 由于闭包会使得函数中的变量都被保存在内存中，内存消耗很⼤，所以不能滥⽤闭包，否则会造成⽹⻚的性能问题，在 IE 中可能导致内存泄露

- 解决⽅法是，在退出函数之前，将不使⽤的局部变量全部删除

## 说说你对作用域链的理解

- 作⽤域链的作用是保证执行环境里有权访问的变量和函数是有序的，作⽤域链的变量只能向上访问，变量访问到 `window` 对象即被终止，作用域链向下访问变量是不被允许的
- 简单的说，作⽤域就是变量与函数的可访问范围，即作⽤域控制着变量与函数的可见性和⽣命周期

## var、let 和 const 的区别

**var**

- 全局作用域（变量在哪里声明都可以被访问到）
- 变量声明提升（变量可以先使用，再声明，但是值为 `undfined`）

```js
console.log(a)
var a = 1
// 值是 undefind
```

- 可以重复声明

> 以上特点都是缺点！

**let**

- 局部作用域（通过`{}`来区分作用域）常见于函数

```js
let a = 2
// 作用域外
function fun1() {
  // 作用域内
  let a = 1
}
```

- 同一个作用域下不能重复声明
- 不能变量声明提升

**const**

- 局部作用域（通过`{}`来区分作用域）常见于函数
- 同一个作用域下不能重复声明
- const 声明必须赋值

```js
// 错误写法
const b

// 正确写法
const a = 1
```

- 不能变量声明提升
- const 声明的是常量，一旦声明不能改变

> 基本类型不能改变，引用类型可以更改里面的属性值

## 解释一下什么是事件代理

事件代理（Event Delegation ）有称之为事件委托，是 JavaScript 中绑定事件的常用技巧。

顾名思义，事件代理，即是把原本需要处理的事件委托给父级，让父元素担当事件监听的职务。事件代理的原理是 DOM 元素的事件冒泡。

使用事件代理的好处是提高性能。

## 事件模型

W3C 中定义事件的发生经历三个阶段：

- 捕获阶段(capturing)
- ⽬标阶段(targetin)
- 冒泡阶段(bubbling)

> W3C 标准：标签闭合、标签⼩写、不乱嵌套、使⽤外链 css 和 js 、结构行为表现的分离

- 冒泡型事件：当你使⽤事件冒泡时，子级元素先触发，父级元素后触发

- 捕获型事件：当你使⽤事件捕获时，父级元素先触发，子级元素后触发

- DOM 事件流：同时⽀持两种事件模型：捕获型事件和冒泡型事件

- 阻⽌冒泡：在 W3c 中，使⽤ stopPropagation() ⽅法；在 IE 下设置 cancelBubble = true

- 阻⽌捕获：阻⽌事件的默认⾏为，例如 click - `<a>` 后的跳转。在 W3c 中，使⽤ `preventDefault()` ⽅法，在 IE 下设置 window.event.returnValue = false

## 如何解决跨域问题

> 跨域是什么？

跨域，是指浏览器不能执行其他网站的脚本。它是由**浏览器的同源策略**造成的，是浏览器对 JavaScript 实施的安全限制。

> 同源策略是什么？

同源策略是浏览器的一个安全功能，不同源的客户端脚本在没有明确授权的情况下，不能读写对方资源。所以 xyz.com 下的 js 脚本采用 ajax 读取 abc.com 里面的文件数据是会被拒绝的。
相同 ip（域名），同端口，则为同源，否则为不同源。
在默认情况下，在不同源的情况下，是不能使用 ajax 来请求数据的。

> 使用 jsonP 跨域

ajax 默认是不能跨域的，但是 script 标签可以通过 src 属性获得跨域的 js 文件。
需要注意的是 **jsonP 并不属于 ajax，但是 jQuery 把 jsonP 封装在了 ajax 方法中**
jsonP 是在引入 jQuery 之后，在前端发送一个 `jsonP` 的请求，在后台也要做相应的 jsonP 的配置，前后端相互配合才能正常的交互数据，那么 jsonP 只能处理 GET 请求，那么对于其它的请求，参考下方**设置响应头**

jQuery 发送 jsonp 请求实例：

```js
$.ajax({
  url: 'http://abc.com/',
  dataType: 'jsonp'
})
  .done()
  .fail()
```

axios 发送 jsonp 请求实例

```js
axios.jsonp('http://abc.com/').then()
```

> CORS（设置响应头）

通过设置 http 协议的响应头部属性`Access-Control-Allow-Origin`可以允许其他服务器对本服务进行

```js
router.get('/getdata', async (ctx) => {
  ctx.set('Access-Control-Allow-Origin', 'http://127.0.0.1:8080')
  // ctx.set('Access-Control-Allow-Origin', '服务器地址')
  ctx.body = 'data'
})
```

如果是 Access-Control-Allow-Origin: \*，就代表任何网站都可以来请求
该方式只是服务端做处理即可，客户端不需要任何处理

> 服务代理

如果我们接口服务器和客户端是不同源的，可以在新建一个同源的服务器，作为代理服务器，因为服务器也可以发送请求，而且不受跨域限制，那么就可以使用代理服务器向接口服务器发送请求，那么接口服务器收到请求之后，把数据交给代理服务器，再有代理服务器返回给客户端，实现跨域请求。

那么服务代理在 Vue 中怎么配置呢？

可以通过 Vue cli 的 `devServer.proxy` 配置可以解决这个问题，详情参见文档：<https://cli.vuejs.org/zh/config/#devserver-proxy>

```
那么目前比较主流的 就是 CORS 和 服务器代理，jsonp 很少用，因为 jsonp 只支持 get 请求
```

## 事件循环 event loop

### 就是js代码的解析和执行的规则

（1）首先判断JS代码是同步还是异步，同步进入主线程，异步进入事件表(Event Table)并注册函数

（2）满足触发条件后，会将这个函数推入异步队列 (SyncQueue)

（3）主线程内的任务执行完毕为空（此时JS引擎空闲），会去异步队列(SyncQueue)读取对应的函数，进入主线程执行

---上述过程会不断重复 这就是事件循环

微任务：Promise.then、nextTick、Object.Observe、async await之下
宏任务：setTimeout、setInterval

为什么会有事件循环：javascript 是单线程的语言，如果设计成多线程语言将会导致 DOM 操作冲突

事件循环优点： 提供单线程 非阻塞 特点

就是js代码的解析和执行的规则 先主任务 异步任务 微任务 宏任务

### 浏览器相关的几个线程

1. gui 渲染线程 -> 负责渲染浏览器界面，解析 HTML，CSS，构建 DOM 树和 RenderObject 树，布局和绘制等

2. 计时器触发器线程 -> 浏览器定时计数器并不是由 JavaScript 引擎计数的

3. 异步请求线程 -> XMLHttpRequest Fetch

4. js 引擎线程 -> 就是 JS 内核，负责处理 Javascript 脚本程序(例如 V8 引擎)

5. 事件触发器线程 -> 当 js 执行碰到事件绑定和一些异步操作，会走事件触发线程将对应的事件添加到对应的线程中

### js 实现继承的几种方式

1. 构造函数 -> 改 this 指向

```js
function Cat() {
  Animal.call(this)
  this.name = 'Tom'
}
var cat = new Cat()
console.log(cat instanceof Animal) // false
console.log(cat instanceof Cat) // true
```

2. 原型链

```js
Animal.prototype.body = ['head', 'arm']

function Cat() {
  this.name = 'Tom'
}
Animal.prototype.eat = function () {
  console.log('i can eat')
}
Cat.prototype = new Animal()
var cat = new Cat()
console.log(cat, new Animal())
console.log(cat instanceof Animal) //true
console.log(cat instanceof Cat) //true
```

3. 组合继承

```js
function Cat() {
  Animal.call(this)
  instance.name = 'Tom'
}
Animal.prototype.eat = function () {
  console.log('i can eat')
}
Cat.prototype = Object.create(Animal.prototype) //组合继承也是需要修复构造函数指向的
Cat.prototype.constructor = Cat
var cat1 = new Cat()
var cat2 = new Cat()
cat1.body.push('foot')
```

4. 类继承

```js
class Animal {
  constructor() {
    this.name = 'Tom'
  }
  play() {
    console.log('animal')
  }
}

class Cat extends Animal {
  constructor(type) {
    super(type)
    this.type = 'cat'
  }
}
var cat = new Cat()
```

5. 实例继承

```js
function Cat() {
  var instance = new Animal()
  instance.name = 'Tom'
  return instance
}
var cat = new Cat()
console.log(cat)
console.log(cat instanceof Animal) // true
console.log(cat instanceof Cat) // false
```

6. 拷贝

```js
function Cat() {
  var animal = new Animal()
  for (var p in animal) {
    Cat.prototype[p] = animal[p]
  }
  Cat.prototype.name = 'Tom'
}
var cat = new Cat()
console.log(cat)
console.log(cat instanceof Animal) // false
console.log(cat instanceof Cat) // true
```

7. 寄生

```js
function Cat(name) {
  Animal.call(this)
  this.name = name || 'Tom'
}

;(function () {
  // 创建一个没有实例方法的类
  var Super = function () {}
  Super.prototype = Animal.prototype
  Cat.prototype = new Super()
  Cat.prototype.constructor = Cat
})()

var cat = new Cat()
console.log(cat)
console.log(cat instanceof Animal) // true
console.log(cat instanceof Cat) //true
```
