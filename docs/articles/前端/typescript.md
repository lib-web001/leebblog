---
tag:
  - typescript
  - 开发体验

---

# typescript

## 基础

````
typescript是js的超集，主要学习ts里面的
1 原始类型
2 字面量类型
3 数组类型
4 函数类型
5 类类型
6 接口类型
7 类型别名
8 联合与交叉类型
9 枚举类型
0 泛型等类型元素，以及类型推断，类型断言，类型缩小，类型放大等特性，使得代码更加严谨
``

## 数据类型

#### 原始类型

```ts
/// string,number,boolean,symbol,null,undefined

let num:number=1;

let str:string="2"

let bool:boolean=true;

let sy:symbol=Symbol();

let undef:undefined=undefined;

let null:null=null;

let vd:void=undefined;

// 函数没有返回，那么就是void
function fn():void{
}

// 总结 ts的原始类型就是js的基础数据类型
````

#### 非原始类型

```ts
let o1: object = { name: 1 }
let o2: object = [1]
let o3: {} = { name: 1 }
let o4: {} = true
```

##### 数组类型

```ts
let arr1: number[] = [1, 2, 3]
let arr2: Array<number> = [1, 2, 3] // 泛型
let arr3: [boolean, number, string] = [false, 2, '3'] //元组
let arr4: (string | number | object)[] = ['12121', 121, {}]
```

##### 联合类型

```ts
let o1: number | null = null

let admin: '张三' | '小明' = '张三'
let obj: { a: 1; b: 2; c: '3' }
obj = { a: 1, b: 2, c: 3 } // 错
obj = { a: 1, b: 2 } // 错
obj = { a: 1, b: 2, c: '3', d: '4' } // 对
```

#### 交叉类型

```ts
// & 交叉类型

let o1: number & string //可以这么写但是不可能满足
let o2: { name: string } & { age: number }
o2 = { name: 'sa', age: 18 }
```

如果有些参数是可选的，那么可以使用 `?` 来标识

```ts
let obj: { name: string; age: number; url?: string }
obj = { name: 'admin', age: 12 }
```

#### any 和 unknown 区别

```ts
不推荐使用any

let a: any = '1'
a.toFixed() // 不做校验

let a: unknown = 1
a.toFixed() // 做类型校验 变量a可以调用这个方法，但是会爆红

// `unknown` 不知道是什么类型，但是其实是有类型的

let num: unknown // 一个变成设置 unknown 类型代表不确定
num = '这是一个文字' // 给变量赋值了字符串，现在知道类型了

let res: string = num as string // 给 res 赋值 num 并通过关键字 as 告诉赋值的是什么类型

console.log(res) // 这是一个文字

// `unknown` 在有些时候还是很有意思的，比如在想将一个字符串赋值给一个数字的时候，这显然是不可以的，那么可以先使用 `as` 关键字赋值为 `unknown` 类型，再使用 `as` 转换为像要的类型
```

#### interface 类型

```ts
interface MyItf {
  name: string
  age: number
}
let obj: MyItf

// 函数接口
interface FnItf {
  (p1: string, p2: number): void
}
let fn: FnItf = (p1: string, p2: number) => {}

// 接口多继承 同名 缺省
interface NameItf {
  name: string
}
interface AgeItf {
  age: number
}

interface PersonItf extends NameItf, AgeItf {
  sex: string
}

interface PersonItf{
  height:number
}
let p: PersonItf = {
  name: '张三'
  age:17,
  sex:'男',
  height:1.80
}

```

#### 联合交叉类型

```ts
// | and &

// && 优先 ||

let obj:
  | ({ name: string } & { age: number })
  | ({ name: number } & { age: string })

obj = {
  name: 'string',
  age: 18
} // 正确
obj = {
  name: 'string',
  age: '18'
} // 报错
```

#### 类型别名

```ts
type StrOrNum = string | number
let str: StrOrNum = '1'
str = 10

interface AItf {
  a: string
}
// 用类型iem报错接口上的某个属性类
type Atype = AItf['a']
let str2: Atype = '10'

type color = 'red' | 'blue' | (string & {})
```

#### ts 函数

```ts
function fn(a: number, b: number): number {
  return a + b
}

// 接口定义函数类型
interface FnItf {
  (p: string): number
}

let fn: FnItf = (p: string) => {
  return 1
}

// 类型别名定义函数类型
type fType = (p: string) => void
let fn2: FnType = (p: string) => {}
```

#### ts 中 promise

```ts
interface ResItf {
  code: number
  data: object
  message: string
}

let p: Promise<ResItf> = new Promise((resolve, reject) => {
  resolve({ code: 1, data: [], message: 'ok' })
})

p.then((res) => {
  if (res.code === 0) {
  }
})
```

#### ts 中 定义全局接口

```ts
function Person(pms: string) {}

window.Person = Person
window.Person('')
// window 无法识别


global.d.ts文件->{
  export {}

  interface Window{
    function Person()=>void
  }
}
```

#### 枚举类型

```ts
// 列举数据
enum StatusCode {
  success = 200,
  paramsError = 400,
  serverError = 500
}
```

#### 泛型

```ts
function fn<T>(n: T): T {
  return n
}

fn<number>(123)
fn<string>('123')

// 泛型默认值
type ObjType<N, G = string> = { name: N; getName: () => G }

let obj: ObjType<number> = {
  name: 1,
  getName() {
    return '1'
  }
}
```

#### 类

```ts
class Person{
  myName:string,
  static title:string='title'
  protected readonly age:number
  constructor(myName:string,age:number){
    this.myName = myName;
    this.age=age;
  }
}

console.log(Person.title);

class Male extends Person{
  height:number
  constructor(myName:number,age:number,height:number){
    super(myName,age);
    this.height=height;
  }
}
let p=new Person('abc');
```

#### in & keyof & typeof

```ts
// 让p1 可以接收其他类型的值
interface PItf {
  [idx: number]: number
  [idx: string]: string
}
// keyof 遍历 后面一般会跟接口 遍历接口的属性名定义到另一个类型别名上
type Ptype = keyof PItf // 'name' | 'age' | 'height'

let p1: Ptype
p1 = 'name'
p1 = 'age'

// in 遍历 后面一般跟type, 在已有类型别名上去拷贝属性定义另一个类型别名
type StrOrNum = string | number
type PItf = {
  [k in StrOrNum]: string
}

let obj: PItf = {
  a: '',
  10: ''
}

// typeof 一般用作 在已使用变量上去拷贝结构类型，声明另一个变量结构
let str = 'abcd'

type StrType = typeof str

let str1: StrType

let obj = {
  name: '',
  age: 18,
  height: 1.8
}
type OType = typeof obj

let obj1: OType = {
  name: 'abc',
  age: 18,
  height: 2.0
}
```

#### 泛型约束

```ts
// 一般是在 类型别名定义的类型 extends 约束到泛型上
type StrOrNum = string | number
interface PersonItf<N extends StrOrNum, G> {
  name: N
  getName: () => G
}

let obj: Person<number, number> = {
  name: 1,
  getName() {
    return 1
  }
}
```

#### Function

`Function` 类型的 `F` 必须要大写

函数参数也是可以限制类型的

如果某个参数的可选的，可以添加 `?` 标识符

```ts
function fun(a: number, b: number, c?: number) {
  return a + b
}
```

#### as 断言

普通断言，规定类型

```ts
let res = 123 as number
res = 999
console.log(res)
```

`const` 断言

使用了 `const` 断言情况如下

```ts
let a = 'Hello' as const
```

这样使用 const 断言之后，`a` 就不能随意赋值了，就只能赋值为 `Hello`

也就相当于下面写法，`a` 只能是两个值其中的一个

```ts
const a: 'Hello' | 'world' = 'Hello'
```

断言数组

断言数组之后就会被转换为元组

```ts
const arr = ['123', 89, true] as const
```

定义的方式也可以像下面这样

```ts
const arr = <const>['123', 89, true]
```

> as const 就是根据具体的值转换类型

如果明确某个变量是存在的，可以使用 `!` 来表示非空断言，下面两种写法相等

```ts
const el1: HTMLDivElement = document.querySelector('.app') as const

const el: HTMLDivElement = document.querySelector('.app')!
```

#### generics 泛型

泛型代表的是不确定的类型，宽泛的类型，比如下面例子中：

```ts
function msg(num) {
  return num
}

console.log(msg('Hello'))
console.log(msg(true))
```

上面代码中，无论函数传入什么类型，都会直接返回指定的类型，但是这些类型都是 `any`，大多数时候我们并不希望是 `any` 所以这里就需要使用到了泛型。

所以就需要传递不同的参数的时候，动态的传递指定的类型。类型也是可以类型函数接收参数一样：

```ts
function msg<type>(num: type): type {
  return num
}

console.log(msg<string>('Hello'))
console.log(msg<boolean>(true))
```

#### interface

如果类中没有定义接口中约束的数据的话，就会报错

- 在对象中使用

```ts
interface UserInterface {
  name: string
  age: number
  sayName(): string
  [key: string]: any
}

const user: UserInterface = {
  name: 'admin',
  age: 12,
  sayName(): string {
    return this.name
  },
  sex: '男'
}
```

- 定义数组

下面使用枚举和接口同时限定

```ts
enum SexType {
  GIRL,
  BOY
}

interface User {
  name: string
  age: Number
  sex: SexType
}

const user1: User = { name: '1', age: 12, sex: SexType.BOY }
const user2: User = { name: '211', age: 122, sex: SexType.GIRL }

const arr: User[] = [user1, user2]
```

#### readonly

`readonly` 修饰的熟悉是不能更改的，但是 在构造函数中可以改

#### get 和 set

```ts
class Article {
  private _article: any[] = []

  public get article(): any[] {
    return this._article
  }

  public set article(list: any[]) {
    this._article = list
  }
}

const art = new Article()
console.log(art.article)

art.article = [{ title: 'Hello', name: 'http权威指南' }]
console.log(art.article)
```

## 考点

#### interface 和 type

```
两者不同点：

● interface（接口） 是 TS 设计出来用于定义对象类型的，可以对对象的形状进行描述。
● type 是类型别名，用于给各种类型定义别名，让 TS 写起来更简洁、清晰。
● type 可以声明基本类型、联合类型、交叉类型、元组，interface 不行
● interface 可以合并重复声明，type 不行


相同点

● 都可以定义函数类型
● 都可以定义类型

开发过程中尽量使用interface

```

#### never 和 void 的区别

```
● void 表示没有任何类型（可以被赋值为 null 和 undefined）。
● never 表示一个不包含值的类型，即表示永远不存在的值。
● 拥有 void 返回值类型的函数能正常运行。拥有 never 返回值类型的函数无法正常返回，无法终止，或会抛出异常
```

#### 元组越界

```ts
let aaa: [string, number] = ['aaa', 5]
// 添加时不会报错
aaa.push(6)
// 打印整个元祖不会报错
console.log(aaa) // ['aaa',5,6];
// 打印添加的元素时会报错
console.log(aaa[2]) // error
```

#### 枚举成员的特点

```ts
● 是只读属性，无法修改
● 枚举成员值默认从 0 开始递增，可以自定义设置初始值

enum Gender {
  BOY = 1,
  GRIL
}
console.log(Gender.BOY);// 1
console.log(Gender);// { '1': 'BOY', '2': 'GRIL', BOY: 1, GRIL: 2 }

```

#### declare

```
declare 声明全局变量
declare var a:number=1;

declare module "*.css"{
  const css:string;
  export default csss;
}

declare module "*.src"{
  const src:string;
  export default src;
}

declare module '@vue/runtime-core'{
  interface ComponentCustomProperties{
    $axios:AxiosInstance;
  }
}

app.config.globalProperties.$axios=axios;
```

#### type extends keyof

```
type Pick<T,K extends keyof T>={
  [p in k]:t[p];
}

type PickedUser = Pick<User,"id"|"name">;
type User={
  id:number,
  name:string,
  address:string
}

type PickedUser={
  id:number,
  name:string
}
```

##### 考点

interface 和 type

```
相同点
1.都可以用来描述对象或者函数
type Point={
  x:number;
  y:number
}
type setPoint=(x:number,y:number)=>:void;

interface Point{
  x:number;
  y:number
}
interface SetPoint{
  (x:number,y:number):void
}
2.都可以扩展 & 和 extends
type Type2 = number & Itf1;
interface Itf extends Type2{
  name:string
}

不同点
1.类型别名支持联合和交叉类型定义
2.类型别名不支持重复定义，接口可以

使用场景
类型别名
定义基本类型别名
定义元组类型
定义函数类型
定义联合类型
定义映射类型

接口使用场景
需要利用接口自动合并特征
定义对象类型并且无需使用type
```

## 进阶

#### 工具类型

##### Partial 设置为可缺省类型

```ts
interface 接口1 {
  name: string
}
type 接口2 = Partial<IUser1>

type Partial<G> = { [T in keyof G]?: G[T] | undefined }
```

##### Require 设置为不可缺省类型

```ts
interface 接口1 {
  name?: string
}
type 接口2 = Partial<IUser1>

type Require<G> = { [T in keyof G]-?: G[T] }
```

##### Record<K extends keyof any, T> 的作用是将 K 中所有的属性的值转化为 T 类型

```ts
type Ktype = 'about' | 'home'
interface TItf {
  title: string
}

let value: Record<Ktype, Itf> = {
  home: {
    title: 'abc'
  },
  about: {
    title: 'efg'
  }
}
```

#### Pick 从某个类型中挑出一些属性出来

```ts
interface 接口1 {
  name: string
  age: number
}

type 接口2 = Pick<IUser1, 'age' | 'name'>
```

##### Omit 从某个类型中排除出一些属性出来

```ts
interface 接口1 {
  name: string
  age:number
}

type 接口2 = Pick<IUser1, 'name'> => {age:number}

```

##### NonNullable 的作用是用来过滤类型中的 null 及 undefined 类型

```ts
// string | number
type T0 = NonNullable<string | number | undefined>
// string[]
type T1 = NonNullable<string[] | null | undefined>

type NonNullable<T> = T extends null | undefined ? never : T
```

##### ReturnType 用来得到一个函数的返回值类型

```ts
type Func = (value: number) => string
let str: ReturnType<Func>

const fun: Func = (value: number) => String(value)

str = fun(1)
```

##### Exclude<T, U> 的作用是将某个类型中属于另一个的类型移除掉

```ts
type T1 = Exclude<'a' | 'b' | 'c', 'a'> // b c
```

##### Extract<T, U> - 用于从类型 T 中取出可分配给 U 类型的成员

```ts
type T0 = Extract<'a' | 'b' | 'c', 'a' | 'f'>
// type T0 = "a"
type T1 = Extract<string | number | (() => void), Function>
// type T1 = () => void
```

##### Readonly 的作用是将某个类型所有属性变为只读属性，也就意味着这些属性不能被重新赋值

```ts
interface Todo {
  title: string
}

const todo: Readonly<Todo> = {
  title: 'Delete inactive users'
}
```

##### Parameters 提取函数的参数返回元组 类型别名

```ts
const fn(a:number,b:string):void

type tuple=Parameters<fn> => [a:number,b:string]
```

##### DeepReadonly 深度设置只读属性

```ts
type DeepReadonly<T> = {
  readonly [P in keyof T]: DeepReadonly<T[P]>
}
const a = { foo: { bar: 22 } }
const b = a as DeepReadonly<typeof a>
b.foo.bar = 33 // Cannot assign to 'bar' because it is a read-only property.ts(2540)
```

#### 操作符

##### 非空断言

```ts
function sayHello(Hello: string | undefined) {
  const hi1 = Hello!.toLowerCase() // OK
  const hi2 = Hello.toLowerCase() // Error: Object is possibly 'undefined'
}
```

#### 类型守卫

```ts
function sayHello(Hello: string | undefined) {
  if (typeof Hello === 'string') {
    const hi = Hello.toLowerCase()
  }
}
```

## 安装

```
yarn add typescript -g or npm install


// 初始化
tsc -init


// ts文件转译js
tsc 文件名

```

#### 声明文件的定义

通俗地来讲，在 TypeScript 中以 .d.ts 为后缀的文件，称之为 TypeScript 声明文件。它的主要作用是描述 JavaScript 模块内所有导出接口的类型信息

#### 如何编写 TS 声明文件

##### 全局变量

全局变量的声明文件主要有以下几种语法：

```ts
declare let/const  // 声明全局变量
declare function   // 声明全局方法
declare class      // 声明全局类
declare enum       // 声明全局枚举类型
declare namespace  // 声明（含有子属性的）全局对象
interface/type     // 声明全局类型


// 类
declare class Course {
  cid: number;
  constructor(cid){};
  getCoursePrice(): number;
}

// 枚举
declare enum Status {
  Loading,
  Success,
  Failed,
}

// 接口 interface declare 可以不需要
interface CourseInfo {
  cid: number;
  name: string;
}

interface CGIData<T> {
  data: T;
  retcode: 0;
}

// 命名空间
declare namespace User {
  // 局部 Test.User
  interface User {
    name: string;
    age: number;
  }

  function getUserInfo(name: string): User {
    return "";
  }
  namespace fn {
    function extend(obj: any): any;
  }
}

```

#### 对于没有提供声明文件的 npm 包，可以创建一个 types 目录，来管理自己写的声明文件，同时需要在配置文件 tsconfig.json 中的 paths 和 basrUrl 中配置

```json
{
  "strict": true, /_ Enable all strict type-checking options. _/
  "noImplicitAny": true, /_ Raise error on expressions and declarations with an implied 'any' type. _/
  // 对 null 类型检查，设置为 false 就不会报错了
  "strictNullChecks": true, /_ Enable strict null checks. _/
  "strictFunctionTypes": true, /_ Enable strict checking of function types. _/
  "strictBindCallApply": true, /_ Enable strict 'bind', 'call', and 'apply' methods on functions. _/
  "strictPropertyInitialization": true, /_ Enable strict checking of property initialization in classes. _/
  "noImplicitThis": true, /_ Raise error on 'this' expressions with an implied 'any' type. _/
  "alwaysStrict": true, /_ Parse in strict mode and emit "use strict" for each source file. _/
  "compilerOptions": {
    "declaration": true,
    "module": "commonjs",
    "baseUrl": "./", // types 文件夹的相对路径
    "paths": { "_": ["types/_"] }
  },
  "rules": {
    "typedef": [
        true,
        "call-signature"
    ]
  }
}
```
