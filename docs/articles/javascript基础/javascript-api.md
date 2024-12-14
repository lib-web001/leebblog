---
tag:
  - 前端
  - JavaScript 
---

# JavaScript API

## Blob

Blob（Binary Large Object）表示二进制类型的大对象。在数据库管理系统中，将二进制数据存储为一个单一个体的集合。Blob
通常是影像、声音或多媒体文件。在 JavaScript 中 Blob 类型的对象表示不可变的类似文件对象的原始数据

```javascript
let myBlobParts = ['<html><h2>Hello Semlinker</h2></html>']
let myBlob = new Blob(myBlobParts, {
    type: 'text/html',
    endings: 'transparent'
}) // the blob

let Hello = new Uint8Array([72, 101, 108, 108, 111]) // 二进制格式的 "Hello"
let blob = new Blob([Hello, ' ', 'semlinker'], {type: 'text/plain'})
```

相关 api

```
slice([start[, end[, contentType]]])：返回一个新的 Blob 对象，包含了源 Blob 对象中指定范围内的数据。
stream()：返回一个能读取 blob 内容的 ReadableStream。
text()：返回一个 Promise 对象且包含 blob 所有内容的 UTF-8 格式的 USVString。
arrayBuffer()：返回一个 Promise 对象且包含 blob 所有内容的二进制格式的 ArrayBuffer
```

#### 文件分片

```
const file = new File(["a".repeat(1000000)], "test.txt");

const chunkSize = 40000;
const url = "https://httpbin.org/post";

async function chunkedUpload() {
  for (let start = 0; start < file.size; start += chunkSize) {
      const chunk = file.slice(start, start + chunkSize + 1);
      const fd = new FormData();
      fd.append("data", chunk);

      await fetch(url, { method: "post", body: fd }).then((res) =>
        res.text()
      );
  }
}
```

#### 生成 pdf

```javascript
<script src="https://unpkg.com/jspdf@latest/dist/jspdf.min.js"></script>
<script>
    (function generatePdf() {
    const doc = new jsPDF();
    doc.text("Hello semlinker!", 66, 88);
    const blob = new Blob([doc.output()], {type: "application/pdf"});
    blob.text().then((blobAsText) => {
    console.log(blobAsText);
});
})();
</script>

```

## File

当选择一个文件时，可以获得这个文件的描述对象

```html
<input type="file" id="file"/>

<script>
    const file = document.getElementById('file')
    file.addEventListener('change', (e) => {
        console.dir(e.target.files[0])
    })
    // 拖拽
    file.addEventListener('drop', (e) => {
        console.dir(e.dataTransfer.files)
    })
</script>
```

## URL.createObjectURL()

实例，通过 input 上传图片预览出上传的图片：

```html
<input type="file" accept="image/*"/>
<img src="" alt=""/>

<script>
    const inp = document.querySelector('input')
    const img = document.querySelector('img')
    inp.onchange = function () {
        const blob = URL.createObjectURL(inp.files[0])
        img.setAttribute('src', blob)
    }
</script>
```

# 浏览器观察者

1. IntersectionObserver
2. MutationObserver
3. ResizeObserver
4. PerformanceObserver

## IntersectionObserver 用于 无限滚动,图片懒加载,埋点,控制动画/视频执行

IntersectionObserver.observe(target):告诉要观察的目标元素
IntersectionObserver.takeRecords():从IntersectionObserver的通知队列中删除所有待处理的通知,并将它们返回到IntersectionObserver对象的新Array对象中
IntersectionObserver.unobserve()指定停止观察特定目标元素
IntersectionObserver.disconnect():停止IntersectionObserver对象观察任何目标

## MutationObserver  可以通过配置项,监听目标DOM下子元素的变更记录

### 描述

`MutationObserver 接口` 可以在 DOM 被修改时移步执行回调，使用 `MutationObserver` 可以观察整个文档、DOM
树的一部分或者元素。此外还可以观察元素的属性、子节点、文本，或者前三者的组合变化。

### 基本使用

`MutationObserver` 的实例要通过 `MutationObserver` 的构造函数，接收一个回调参数来创建

```js
const mut = new MutationObserver(() => console.log('123'))
console.log(mut)
```

### observe()

新创建的 `MutationObserver` 并不会关联 DOM 的任何部分，想要把 `MutationObserver` 和 DOM 关联起来，需要使用 `observe()` 方法。

这个方法必须接收两个参数，第一个是要观察其变化的 DOM 节点，以及一个 `MutationObserverInit` 对象。

```html

<div id="app"></div>
<script>
    const app = document.getElementById('app')
    const mut = new MutationObserver(() => console.log('div 改变了'))

    mut.observe(app, {attributes: true})

    app.setAttribute('class', 'box') // 改变之后执行 mut 的回调
</script>
```

### 回调函数中的参数

`MutationObserver` 回调可以接收的一个参数，是一个数组，记录了当前那些部分发生了变化

```html

<div id="app"></div>
<script>
    const app = document.getElementById('app')
    const mut = new MutationObserver((MutationRecord) =>
            console.log(MutationRecord)
    )

    mut.observe(app, {attributes: true})

    app.setAttribute('class', 'box')
    app.setAttribute('data-app', 'add')
</script>
```

`MutationObserver` 接收的第二个参数是观察变化的 `MutationObserver` 的实例

```js
const mut = new MutationObserver((MutationRecord, mutationObserver) => {
    console.log(mut === mutationObserver) // true
})
```

### disconnect()

默认情况下，只有元素不被垃圾回收，`MutationObserver` 的回调函数就会响应 DOM 变化事件，从而执行。使用 `disconnect()`
可以提前终止回调函数，也会抛弃已经加入任务队列的项目

如果想让已经加入任务队列的项目执行完再调用可以使用 `setTimeout()` 来解决

```html

<div id="app"></div>
<script>
    const app = document.getElementById('app')
    const mut = new MutationObserver(() => console.log('改变了'))

    mut.observe(app, {attributes: true})
    app.setAttribute('class', 'box') // 改变了
    setTimeout(() => {
        mut.disconnect()
        app.setAttribute('data-app', 'add') // 没有日志输出
    }, 0)
</script>
```

### 重用 MutationObserver

调用 `disconnect()` 的时候并不会结束 `MutationObserver` 的生命。还是可以重用这个观察者的，只需要将他在关联到目标节点即可。

```html

<div id="app"></div>
<script>
    const app = document.getElementById('app')
    const mut = new MutationObserver((a) => console.log(a.map((x) => x.target)))

    mut.observe(app, {attributes: true})

    setTimeout(() => {
        mut.disconnect() // 断开连接
        app.setAttribute('class', 'box') // 没有日志输出
    }, 0)

    setTimeout(() => {
        mut.observe(app, {attributes: true}) // 重新连接
        app.setAttribute('class', 'box') // [div#app.box]
    }, 0)
</script>
```

### 观察属性

`MutationObserver.observe` 可以接收两个参数，第二个参数为以及一个 `MutationObserverInit`
对象。可以观察节点属性的添加、删除、修改。需要属性变化注册回调，需要字啊 `MutationObserverInit` 对象中将 `attributes`
设置为 `true`。

但是将 `attributes` 设置为 `true` 默认是观察所有的属性，如果想要观察几个或者多个属性，可以使用 `attributeFilter`
属性设置白名单，即一个属性名的数组集合

```html

<div id="app"></div>
<script>
    const app = document.getElementById('app')
    const mut = new MutationObserver((a) => console.log(a.map((x) => x.target)))

    mut.observe(app, {attributeFilter: ['food']})

    app.setAttribute('class', 'box')
    app.setAttribute('food', 'admin')
</script>
```

如果想要在变化的记录中保存原来的值，可以将 `attributeOldValue` 设置为 `true`

```html

<div id="app"></div>
<script>
    const app = document.getElementById('app')
    const mut = new MutationObserver((a) => console.log(a.map((x) => x.oldValue)))

    mut.observe(app, {attributeOldValue: true})

    app.setAttribute('class', 'box')
    app.setAttribute('food', 'admin')
    app.setAttribute('id', 'ccc')

    // [null, null, 'app']
</script>
```

### 观察字符数据

将 `characterData` 设置为 `true` 可以为观察字符，当字符修改、删除、添加时，都可以触发回调

```html

<div id="app">app</div>
<script>
    const app = document.getElementById('app')
    const mut = new MutationObserver((a) => console.log(a))
    app.firstChild.textContent = '张三' //设置文本

    mut.observe(app.firstChild, {characterData: true})
    app.firstChild.textContent = 'abc'
    app.firstChild.textContent = 'admin'
    app.firstChild.textContent = 'ppt'

    // 三次修改都被记录下来了
    // (3) [MutationRecord, MutationRecord, MutationRecord]
</script>
```

如果想要在变化的记录中保存原来的值，可以将 `characterDataOldValue` 设置为 `true`

```html

<div id="app">app</div>
<script>
    const app = document.getElementById('app')
    const mut = new MutationObserver((a) => console.log(a.map((x) => x.oldValue)))

    app.firstChild.textContent = '张三' //设置文本

    mut.observe(app.firstChild, {characterDataOldValue: true})

    app.firstChild.textContent = 'abc'
    app.firstChild.textContent = 'admin'
    app.firstChild.textContent = 'ppt'
</script>
```

### 观察子节点

将 `childList` 设置为 `true` 可以观察子节点，当子节点修改、删除、添加时，都可以触发回调

```html

<div id="app"></div>
<script>
    const app = document.getElementById('app')
    const mut = new MutationObserver((a) => console.log(a))
    mut.observe(app, {childList: true})

    app.appendChild(document.createElement('p'))

    // [MutationRecord]
</script>
```

### 观察子树

上述 将 `childList` 设置为 `true` 可以观察子节点，但是子节点的内部就观察不到了，所以还需要将 `subtree` 设置为 `true`
，即可扩展到这个元素的子树，所有后代节点。

```html

<div id="app"></div>
<script>
    const app = document.getElementById('app')
    const mut = new MutationObserver((a) => console.log(a))
    mut.observe(app, {attributes: true, subtree: true})

    app.appendChild(document.createElement('p'))
    app.querySelector('p').setAttribute('class', 'text')
</script>
```

但是有意思的是：观察子树的节点被移出子树之后，仍然可以触发变化事件

```html

<div id="app"></div>
<script>
    const app = document.getElementById('app')
    const mut = new MutationObserver((a) => console.log(a))

    const div1 = document.createElement('div')
    mut.observe(app, {attributes: true, subtree: true}) // 观察子树
    app.appendChild(div1) // 将新建的 div 放进 app 容器
    document.body.insertBefore(div1, app) // 修改新建 div 的位置
    div1.setAttribute('class', 'box1') // 改变属性
</script>
```

这在希望断开与观目标的联系，但又希望处理由于调用 `disconnect()` 而被抛弃的记录队列中的 `MutationObserver` 实例还是比较有用的。

## XMLHttpRequest

### 创建

创建方式

```js
const xhr = new XMLHttpRequest()
```

### open()

XHR 对象首先调用 `open` 方法，接受三个参数，请求类型，请求 URL，是否为异步

```js
const url =
    'https://infinitymcn.com/web/0705_renova_list/back_end/Renova_List/public/index.php/backstage/color/color'
xhr.open('get', url, false)
```

### send()

要发送定义好的请求需要使用 `send` 方法

```js
const url =
    'https://infinitymcn.com/web/0705_renova_list/back_end/Renova_List/public/index.php/backstage/color/color'
xhr.open('get', url, false)
xhr.send(null)
```

`send` 可以作为请求体发送数据，**如果不需要传入请求体，则必须传入 null**

### status

响应的 HTTP 状态

```js
const url =
    'https://infinitymcn.com/web/0705_renova_list/back_end/Renova_List/public/index.php/backstage/color/color'
xhr.open('get', url, false)
xhr.send(null)
console.log(xhr.status)
```

### statusText

响应的 HTTP 状态描述

```js
const url =
    'https://infinitymcn.com/web/0705_renova_list/back_end/Renova_List/public/index.php/backstage/color/color'
xhr.open('get', url, false)
xhr.send(null)
console.log(xhr.status)
console.log(xhr.statusText)
```

### 跨浏览器窗口通信的 7 种方式

#### 1. WebSocket

#### 2. 定时器 + 客户端存储

```
定时器：setTimeout/setInterval/requestAnimationFrame
客户端存储：cookie/localStorage/sessionStorage/indexDB/chrome的FileSystem
```

#### 3. postMessage window.opener window.open iframe

#### 4. storage事件

```js
localStorage.setItem('message',JSON.stringify({
    message: '消息',
    from: 'Page 1',
    date: Date.now()
}))
window.addEventListener("storage", function(e) {
    console.log(e.key, e.newValue, e.oldValue)
});
```

#### 5. Broadcast Channel

```js
var channel = new BroadcastChannel("channel-BroadcastChannel");
channel.postMessage('Hello, BroadcastChannel!')

var channel = new BroadcastChannel("channel-BroadcastChannel");
channel.addEventListener("message", function (ev) {
    console.log(ev.data)
});
```

#### 6. SharedWorker

```js
var portList = [];

onconnect = function (e) {
    var port = e.ports[0];
    ensurePorts(port);
    port.onmessage = function (e) {
        var data = e.data;
        disptach(port, data);
    };
    port.start();
};

function ensurePorts(port) {
    if (portList.indexOf(port) < 0) {
        portList.push(port);
    }
}

function disptach(selfPort, data) {
    portList
        .filter(port => selfPort !== port)
        .forEach(port => port.postMessage(data));
}
```

#### 7. MessageChannel

```
var channel = new MessageChannel();
var para = document.querySelector('p');

var ifr = document.querySelector('iframe');
var otherWindow = ifr.contentWindow;

ifr.addEventListener("load", iframeLoaded, false);

function iframeLoaded() {
  otherWindow.postMessage('Hello from the main page!', '*', [channel.port2]);
}

channel.port1.onmessage = handleMessage;
function handleMessage(e) {
  para.innerHTML = e.data;
}
```

### fetch 和 ajax

```markdown
fetch() 收到代表错误的 HTTP 状态码（譬如404 或500），会设置 Promise 的 resolve 值为false，但不会reject，只有 网络故障 或
请求被阻止 才会 reject。
fetch() 可以接受跨域 cookies 和 建立跨域会话。
fetch() 只有使用了credentials 选项，才会发送 cookies，但要符合同源( same-origin)规则。

Axios 是可以发出 http 请求的 JavaScript 库，在 浏览器 和 node.js 环境中都可以运行。

1、相同点：
都是可以发出 http 请求的 JavaScript 库。

2、不同点
fetch 是 JavaScript 原生库，浏览器都支持，无需安装直接使用；axios 不是原生库，需要安装才能使用；
fetch 只能在浏览器环境中运行；axios 既可以在浏览器、也可以在node.js 环境中运行。

```
