---
tag:
  - 八股文
---

# es6 新特性

## let 和 const

```
let // 定义变量，只能在块作用域里访问，不能声明同名变量。不存在变量提升的问题
const // 定义常量，不能声明同名变量，只能在块作用域里访问，而且不能修改，但是在定义的对象时对象属性值可以改变，不存在变量提升的问题
```

## 定义异步函数的六种方式

1. 回调函数
2. 事件监听
3. 发布订阅模式
4. Promise
5. Generator (ES6)
6. async (ES7)

## Symbol

```js
//这样创建一个 Symbol 值
const newValue = Symbol() //或者使用 let 创建
let newValue = Symbol()
console.log(newValue) //Symbol()

//因为 Symbol 是基本数据类型，而不是对象所以不能用 new 创建，
//会出现 Symbol is not a constructor 的报错
const newValue = new Symbol()
```

## 模板字符串

```js
1.includes
let str = `apple,orange,banana`;
str.includes('apple');//true

2.startsWith/endsWith
startsWith() / endsWith()：判断字符串是否以参数字符串开头或结尾。返回 boolean 值。这两个方法可以有第二个参数，一个数字，表示开始查找的位置。

let str = 'apple,orange,banana';
str.startsWith('apple');//true
str.endsWith('peach');//false

3.repeat
let a='hi'
console.log('Hello'.repeat(2)); //'hihi'

4.padStart/padENd
padStart()/padEnd()：用参数字符串按给定长度从前面或后面补全字符串，返回新字符串
```

## 解构表达式

##### 数组解构

##### 对象解构

## Set()、map()数据结构 weakMap/weakSet/weakRef

```js
map()是什么及写法？
map 属于 es6 新增加的数据结构,map()是键值对，里面的键和值可以任意，Map 对象有一个 size 属性，存储了键值对的个数，而 object 对象没有类似属性。

let newMap = new Map([['name','zhangsan'],['age',10]]);
console.log(newMap ); //{'name'=>'zhangsan','age'=>10}

let newMap = new Map([
  ["name", "zhangsan"],
  ["age", 10],
]);
newMap.set("sex", "man");
console.log(newMap); //{'name' => 'zhangsan', 'age' => 10, 'sex' => 'man'}
newMap.set("name", "lisi");
console.log(newMap); // {'name' => 'lisi', 'age' => 10, 'sex' => 'man'}
newMap.set("sex", "man").set("aaa", "hahah");
console.log(newMap); // {'name' => 'lisi', 'age' => 10, 'sex' => 'man', 'aaa' => 'hahah'}

map函数
map.entries()：返回键值对的遍历器
map.clear()：清除所有数据，没有返回值
map.has(value)：判断该值是否存在返回boolean
map.get(value)：get 方法读取 key 对应的键值，如果找不到就返回 underfined
map.set(key，value)：设置键名 key 对应的键值 value，返回整个 map 解构，如果 key 已经有值，则进行覆盖，可以链式操作


Set()是值的集合，是类数组，里面的值的唯一的，可以实现数组去重
//注意：必须传数组进去，否则会报错
let newSet = new Set([1,2,3]);
console.log(newSet ); //{1,2,3}

set函数
Set.add(value)：添加一个数据，返回 Set 解构本身，可以进行链式操作
Set.delete(value)：删除指定数据，返回一个布尔值，表示是否删除成功
Set.has(value)：判断该值是否为 Set 成员，返回一个布尔值
Set.clear()：清除所有数据，没有返回值
size：表示 Set 解构的长度
```

### 弱引用对象的一大用处，就是作为缓存，未被清除时可以从缓存取值，一旦清除缓存就自动失效

## bigint

```
new BigInt() // TypeError
BigInt(undefined) //TypeError
BigInt(null) // TypeError
BigInt('123n') // SyntaxError
BigInt('abc') // SyntaxError
1n + 1.3 // 报错
```

### BigInt 是一种新的数据类型，用于当整数值大于 Number 数据类型支持的范围时( number 只能存 2^53 -1 )。这种数据类型允许我们安全地对大整数执行算术操作，表示高分辨率的时间戳，使用大整数 ID 等等，而不需要使用库

9.1+0.2 => 0.30000000000000004 // 计算机对于浮点数无法精确表示二进制数

## ES6 新加的数组方法及使用（Array）

```
map
forEach
filter
some 或者 |
every 并且 &
includes
find

Array.from({1:'a',2:'b'})：用于将对象转换为数组，类数组转数组
Array.of([1,2,3])
```

## ES6 新加的对象方法及使用（Object）

```
Object.assign()：用于对象的合并，将原对象的所有可枚举属性，复制到目标对象
Object.keys
Object.values
Object.entries 返回二维数组

```

## 箭头函数

```js
1、箭头函数有更简洁的写法，不用写 function
2、箭头函数是匿名函数
3、箭头函数没有 prototype 属性，不可以把箭头函数当作构造函数，所以不能用 new 关键字调用箭头函数，否则抛出一个错误、也没有 arguments 属性
4、箭头函数和普通函数最大的区别在于其内部 this 永远指向其父级的 this
5、箭头函数适用于无复杂逻辑（回调函数）的函数里面，例如可以用在 map()、reduce()、filter()、forEach()的回调函数中。
6、不要在最外层使用箭头函数，this 会指向 window，而且无法改变，最好在外层包裹一层普通函数，把 this 控制在可见范围内。

特点
（1）箭头函数没有自己的 this 对象（详见下文）。
（2）不可以当作构造函数，也就是说，不可以对箭头函数使用 new 命令，否则会抛出一个错误。
（3）不可以使用 arguments 对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。
（4）不可以使用 yield 命令，因此箭头函数不能用作 Generator 函数。

```

## proxy | reflect

```js
Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”（meta programming），即对编程语言进行编程。

Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”。


Proxy 支持的拦截操作一览，一共 13 种。

get(target, propKey, receiver)：拦截对象属性的读取，比如 proxy.foo 和 proxy['foo']。

set(target, propKey, value, receiver)：拦截对象属性的设置，比如 proxy.foo = v 或 proxy['foo'] = v，返回一个布尔值。

has(target, propKey)：拦截 propKey in proxy 的操作，返回一个布尔值。

deleteProperty(target, propKey)：拦截 delete proxy[propKey]的操作，返回一个布尔值。

ownKeys(target)：拦截 Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)、for...in 循环，返回一个数组。该方法返回目标对象所有自身的属性的属性名，而 Object.keys()的返回结果仅包括目标对象自身的可遍历属性。

getOwnPropertyDescriptor(target, propKey)：拦截 Object.getOwnPropertyDescriptor(proxy, propKey)，返回属性的描述对象。

defineProperty(target, propKey, propDesc)：拦截 Object.defineProperty(proxy, propKey, propDesc）、Object.defineProperties(proxy, propDescs)，返回一个布尔值。

preventExtensions(target)：拦截 Object.preventExtensions(proxy)，返回一个布尔值。

getPrototypeOf(target)：拦截 Object.getPrototypeOf(proxy)，返回一个对象。

isExtensible(target)：拦截 Object.isExtensible(proxy)，返回一个布尔值。

setPrototypeOf(target, proto)：拦截 Object.setPrototypeOf(proxy, proto)，返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截。

apply(target, object, args)：拦截 Proxy 实例作为函数调用的操作，比如 proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)。

construct(target, args)：拦截 Proxy 实例作为构造函数调用的操作，比如 new proxy(...args)。

```

## Promise

```js
Promise 的特点
1、Promise 有三种状态，分别是 peding(进行中)、resolve(成功)、rejected(失败)，并且状态一旦设定就不会改变
2、Promise 是用于解决传统回调函数的回调地狱的问题
3、Promise 是函数做参数

9.3 Promise 下的方法
1、 then()方法：接收 Promise 中 resolve(成功)传进来的方法和参数，then()方法也返回一个 Promise 对象，并且 then()方法可以链式调用
2、 catch()方法：接收 Promise 中 rejected(失败)传进来的方法和参数
3、 finally()方法：无论是成功状态还是失败状态，都执行 finally()中的方法
```

## class(面向对象编程)

```js
//class 的固定写法
class Person {
  constyuctor(name, age) {
    this.name = name
    this.age = age
  }

  init() {
    return this.name + this.age
  }
}
```

## 模块化开发

```js
导入 import
import '模块名称' from '路径'；
import '路径'；

导出 export
let name = 'ren',age = 10;
export {name,age};//变量需要用大括号

模块化优点
1、灵活架构，焦点分离
2、方便模块间组合、分解
3、方便单个模块功能调试、升级
4、多人协作互不干扰

模块化缺点
性能损耗
1、系统分层，调用链会很长
2、模块间发送消息会很耗性能
```
