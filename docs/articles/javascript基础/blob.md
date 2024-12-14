---
tag:
  - 前端
  - JavaScript 
---


# Blob

## 什么是 Blob

Blob，Binary Large Object，二进制大对象，是 JavaScript 中的一个对象，表示不可变的、原始数据的类文件对象。

## Blob 的用途

Blob 通常用于表示二进制数据，可以用来表示文件内容。它可以用来创建文件对象，也可以用来创建 URL，以便在网页上显示或下载文件。

## Blob 的属性和方法

Blob 对象有以下属性：

- size：表示 Blob 对象的大小，以字节为单位。
- type：表示 Blob 对象的 MIME 类型。

Blob 对象有以下方法：

- slice(start, end, contentType)：返回一个新的 Blob 对象，表示 Blob 对象的一部分数据。start 和 end 是可选的，表示要截取的数据的起始和结束位置。contentType 是可选的，表示新的 Blob 对象的 MIME 类型。
- stream()：返回一个 ReadableStream 对象，可以用来读取 Blob 对象的数据。
- text()：返回一个 Promise 对象，表示 Blob 对象的文本内容。
- arrayBuffer()：返回一个 Promise 对象，表示 Blob 对象的 ArrayBuffer 数据。

## Blob 的使用示例

下面是一个使用 Blob 对象的示例：

```javascript
// 创建一个 Blob 对象
const blob = new Blob(['Hello, world!'], { type: 'text/plain' });

// 创建一个 URL，以便在网页上显示或下载文件
const url = URL.createObjectURL(blob);  
const link = document.createElement('a');
link.href = url;
link.download = 'hello.txt';
document.body.appendChild(link);
link.click();
document.body.removeChild(link);

// 读取 Blob 对象的文本内容
blob.text().then(text => {
  console.log(text); // 输出：Hello, world!
});
```

在上面的示例中，我们首先创建了一个 Blob 对象，表示一个文本文件。然后，我们使用 URL.createObjectURL() 方法创建了一个 URL，以便在网页上显示或下载文件。最后，我们使用 blob.text() 方法读取了 Blob 对象的文本内容，并将其输出到控制台。
  