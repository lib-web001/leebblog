---
tag:
  - 前端
---

# 前端 seo 及 nuxt 实践分享

## seo 背景介绍

google 搜索中心
百度搜索资源平台
百度搜索引擎优化指南 2.0
搜索引擎优化
搜索引擎只是网站上一个普通的访客，对网站的抓取方式、对网站/网页的价值判断，也都是从用户的角度出发的，任何对用户体验的改进，都是对搜索引擎改进。对搜索引擎的优化，同时也会让用户受益。
收录、排序、展现
总体如上述所说，但搜索引擎也有很多限制，它通常只能来网站文本来分析，而没法动态抓取。目前 google 有动态抓取的机制，不过要配合。实现动态呈现
百度关键词工具
长尾关键词

sem 百度指数
SEO 自学教程一
SEO 怎么做？
企业网站 seo 优化到底该怎么做?
快速检查网站 SEO 的六种工具
技术选型
mvp
ajax 未出现之前基本是传统 mvp，php、jsp 和 asp,就整个页面跳转，通过页面进行交互。
前后端分离
ajax 出来后慢慢分离，之后有 react，angular、vue 等 spa 框架。大量工作转到前端，后端只操作数据。
ssr/同构
第一次渲染是服务端生成，后面的操作由客户端处理，有个 hydrate（水和）过程，也可以说激活。激活之后和普通 vue 程序没区别。
hydrate 这个词很形象，三体里面有脱水的人，注水后又能活。
服务端生成静态页面的过程接管了第一次请求，这个步骤可以改变响应头，重定向。
服务端也可以写接口，改一些服务端的数据，或者转发别的接口。
Vue SSR 指南
自定义渲染
nuxt 渲染
预渲染
两种形式的预渲染
技术栈为 vue2，所以上了 nuxtjs 2，
一部分现成组件由 element 编写，就引入了 element。
如果没有技术负担，推荐用 bootstrap-vue 来写响应式，一套代码支持两端。
但用了 element 之后如果再想一套代码解决除非加上 vant，但这种方式复杂度会比较高，pc+移动，客户端+服务端，维度太多了，也不好分工。
这里有个 pc+移动的例子，<https://m.jizhibao.com.cn/home/index>
所以最后 pc 是 nuxt+element，移动端 nuxt+vant，结果还行。
nextjs
也看了 nextjs，如果抛去技术栈不谈，这个用来写 ssr 更好些，
文档更好
社区大
更新快，nuxt2 很久没更新了，bug 也不修复
功能更强大，next 可以针对单个页面选择不同的渲染模式，处理起来更灵活，nuxt2 不支持，nuxt3 正在出混合渲染。
nuxt
文档
nuxt 在配置好之后和 vue 写法差别很小，前提是理解其基本概念和一些基本 api。
运行环境
Context and helpers
一部分代码两端都会运行，包括 create 钩子，中间件。有个 process 对象可以区分。
服务端
获取到请求，解析路径，定义到页面，执行各种钩子。这个过程中可以用 nodejs 的各种能力，写接口，操作数据库，执行脚本，改系统文件等等，但这是个单独的 nodejs 服务，要注意不能污染全局变量，最好不要保留状态，每个请求都应该是独立的。另外 window 等对象肯定不存在。
客户端
浏览器里的普通 vue。
生命周期
其中 fetch 最重要，值得关注，asyncData 可以弃用。
另外 create 相关钩子在客户端和服务端都有，mounte 系列只在客户端，因为是为了 dom 挂载。
数据获取
在 Nuxt 2.12+之前，数据一般通过 asyncData 这个钩子来获取。这个钩子的实现原理是通过 vue-router 实现的，在页面进入前获取到这个数据，所以无法取到实例的 this，而且只能用在页面组件上。为了性能考虑，应对客户端和服务端可能要写两套代码，冗余且不好维护。
后面 vue 加了一个 serverPrefetch 钩子，所有组件都能用，并且能取到 this，nuxt 则根据这个钩子实现了 fetch 钩子，上面问题都解决了。
具体可看文档。
head
seo 中比较重要的 tdk 都在 head 中配置
服务中间件 serverMiddleware
依赖 nodejs 的 connect 库
可操作请求头和响应头，用来实现 http 缓存、服务缓存、重定向、sitemap 服务转发。
layouts
写布局的一种方式，会更清晰一点，也可以不用
plugins
在 nuxt.config.js 中引入，可代替之前的 main.js。
环境变量
分客户端和服务端，需要两种配置才行
项目实践
.vscode
vscode 配置文件放项目里面去，对齐开发体验。
yarn.lock
nuxt 有些依赖版本更新不及时，如果任由项目自己升级很可能出现些问题，不同电脑上效果不致，所以这里就直接锁定。
stylelint
nuxt 生成的模板里面 stylelint 配置已经失效了，就重新处理了下。对于写出高质量且好看的 css 有帮助。
安装 stylelint 的 vscode 插件后，在配置中加上 vue 文件的检测
同时修改配置
这样 vscode 可以实时报错，保存实时修复。
unlighthouse
依赖 lighthouse，就是浏览器后面的面板，但这个可以批量处理，看各个页面的 seo 情况。一般用一次就行了。
文件夹
assets
放些本地图片和 css，图片优先放到 cdn 去，偷懒放本地
css 可以写 less，在 nuxt.config 的 css 属性里面引入，就是全局 css。这里是变动频繁的 css。
一些框架和库文件直接在 head 里面配置。
components
放组件。
模板中默认会对 components 自动导入，这里把它关了，自动导入不好维护。
nuxt.config 的 components 不要设置为 true 就行。
layouts
有用上，看起来更好维护。
middleware
这个文件夹是 router 的中间件，对应 nuxt.config 中的
主要应用在跨页面取消请求，后面讲
middleware-server
文档是 servermiddleware。
实现 HTTP 缓存，服务端页面缓存，移动端重定向，sitemap 转发，后面讲。
network
封装了请求，因为需要运行在服务端，所以 jzb-post 用不了。
请求优化
pages
原本的 pages 是放页面的，但有特定约束方式，用来自动导入页面，这里也不用。一方面是麻烦，一方面是不想改 vue-home 的页面结构。
但文件夹不能删，不然报警告。
router
放弃 pages 就需要自定义 router 了，
extendroutes
这种方式更好点，一个 vue-home 原本就有，二是理解成本小点，三是后续维护更好找，全局的解析后如果改参数可能还要改文件命名和位置，不利于 git 跟踪。
这个 pages 解析感觉就是抄 next，别人有自己也要有。
旧路由转发
路由配置时尽量兼容旧路由，这样百度之前收录的页面还能用，其他项目的跳转也正常。
重定向和别名
项目中主要用了别名，因为重定向也需要时间，但如果以前的路径和现有配置有冲突，则只能重定向。
比如之前的帮助页面是 help/index，现有配置是
用现有配置解析后 index 会被当成 id。
plugins
主要的写 js 的地方
环境变量
The env property
nuxt 配置环境变量有多种方式，因为是复制之前的 vue-home 项目，所以尽量用之前的 dotenv 方式。使用了 dotenv-module。
上面的 process.env.ENV*FILE 来源于 script 配置，用了 cross-env 库，
上面的 script 中可以发现 nuxt --port 3001 --dotenv .env.production 后面还是用--dotenv 这种形式，这个写法是为了服务端的环境变量支持，如果缺了这个写法，则服务端无法正确取到对应文件，而是默认会取`.env`这个文件。
通过以上写法，客户端和服务端都能正确读取到。
改变 nuxt 标识
nuxt 项目的默认标识都是 nuxt，应用在文件路径，html 类名，以及初始化变量上
不是不行，但改一下会比较好看点
通过 globals 配置  
现代模式
打包时生成两种文件，一种兼容性好，一种性能好，服务端读取浏览器信息的时候会自动生成对应版本，优化性能。
head
头部相关
包括 head，link，script，meta 标签等等。
全局的 head 用来放全局 css，局部 head 改变 tdk 的。
请求优化
跨页面取消请求
axios 取消请求
当前公司的 vue 项目在切换页面时如果发现是同个项目，默认会用 vue-router 切换，不是重新加载整个项目，所以这种方式也起作用。
应该在 router 的 beforeeach 里面加一下，跳转页面时之前的请求都取消。
本项目写法有点不一样。
路由中间件写
注意是客户端才需要
请求缓存
字段过滤
axios.js 中
请求定义中
HTTP 缓存
服务端页面缓存
可参考文档 页面级别缓存
lru-cache
缓存页面，且缓存头部。
这里只是缓存到内存里面，缓存数量不多且时间断，影响不大。
这里全部缓存 2 秒，如果要优化可以根据不同页面设定不同时间，比如首页和开放平台这种静态的可以时间长。
重定向
移动端重定向，和去掉 www 的重定向。移动端那边没做重定向，据 seo 同事说这样有好处。
sitemap 转发
sitemap 由后端生成，但运维那边不好处理，所以前端转发
前端生成的话用 sitemap
promise.allSettiled 的垫片
为了优化性能，有些请求同时发出，全部完成后处理。
xss 过滤
xss
添加了一些白名单
图片插入 alt
为了 seo，没有 alt 的图片动图添加 alt，用在新闻详情里面。
tdk 处理
后台可配置 tdk，后端返回类似 title: "{产品名称}-计支宝"，这是产品详情页面。
前端根据预置变量替换业务数据。
整体逻辑在 plugins\utils\tdk.js
mutations 里面
之前在每个页面直接处理，发现页面跳转时的 title 会跳动，效果不行，所以直接放 vuex 里面处理。
每个页面调用方式如下
每个页面 head
分页处理
为了 seo，页面的实现应该尽量还原 mvp 的形式，不同分页应该视为不同页面，并且在 url 地址上体现出来。
相应地也要改变写法思路，所有页面应该根据 url 地址来获取信息，改变页面也应该改地址。
首先是改变 jzb-pager，在组件里面写上 router-link，渲染出 a 标签，并且可以点击，相应约定好分页的展现方式。
为了 seo，页面链接尽量短，比如说/standard 代表标准页面-所有分类-第一页，同样的/standard/all 和/standard/page-1 是同一个意思。
query 是要尽量避免使用的，从 seo 语义上来说，query 不代表单独的页面。
在 router 定义时如下
这里问题就在于，router 是根据值的顺序来解析 params，/standard/all 和/standard/page-1 这两个路径可能都是 id，而不是 page 参数，所以要约定方式来代表它是不是 page。
本项目的 flag 是 page-n，在获取参数的时候默认也写两个函数。
整体稍微麻烦了点，如果 id 是必选的就没这个事，只是路径不够短。
修复 ExtractCss 插件问题
插件有问题会导致 css 重复渲染，稍微影响一点渲染性能
nuxt.config.js
图片压缩
cdn 的图片可以通过在文件路径加参数的方式来压缩裁剪，具体可看文档。
封装了小组件。
使用如下
用户信息保存
如果需要的话可以通过 cookie 记录在页面上，到服务端可以获取到用户信息，到服务端后先去请求用户信息，最后返回到页面上。
但在我们项目不需要保存到服务端，毕竟 seo 用不着这个，所以整体还好。
在客户端渲染的时候获取下 localstorage 里的用户信息。
百度统计
直接在 app.html 加上代码
登录百度后让百度生成就行，注意这个需要 referr 头部，就手动改了下。默认的全局 referrerPolicy 被 helmet 改成 no-referrer 了。no-referrerno-referrerno-referrerno-referrer
在线咨询模块
layouts\default.vue
其他页面调用\_\_egeelTalk 方法就行。
这个免费，客户端自己下，不需要额外配置。
安全配置
nuxt-helmet
helmet 是添加安全方面的响应头的，在 nuxt 里面不管 csp 配置，nuxt 自己有 csp 配置
项目 csp 配置如下
本地图片压缩
nuxt-optimized-images
其实最好还是放 cdn 去。
组件级别缓存
在这项目用处不大。
微信外链图片显示
referrer 改成 no-referrer 后不会带 referrer，微信就不会封这种外链
关闭 router 的 prefetchLinks
提高首屏速度
<https://nuxtjs.org/docs/features/nuxt-components#prefetchlinks>
关闭 prefetch 和 preload
提高首屏速度
<https://nuxtjs.org/docs/configuration-glossary/configuration-render#resourcehints>
element 组件不符合 seo
table
el-table，这个完全渲染不了，所以弃用了。直接
把 html 复制下来，然后修改了些样式，同时实现下 width 和 minwidth 的逻辑
mounted 之后调用下这方法。
如果用的多了需要封装组件，这里没封装，懒。
tree
也无法正常渲染，复制原来的组件改了下
404 页面处理
在迁移的时候没有采用 nuxt 推荐的方式去写，所以不方便在 network\axios.js 去写通用逻辑，没实现。
就在页面实现了
文件位置
文件拆细一点，内容好招，减少心智负担，另外同步协作发生冲突的几率小一点。
组件文件的位置尽量贴近父组件，如果只有一个父组件就放一起。
单元测试

### jest

整体使用起来比较简单，适合测纯函数，对于后续维护会有帮助。
对于一些工具函数建议使用加上单元测试，确实能测出问题。
比较意思的是 jest 的 fake-timers，模拟定时器。
移动端项目
整体区别不大，postcss 的配置在 nuxt.config 里面。
查找没有 alt 标签的图片
<img((?![^>]*\balt=('|")[^"']+('|"))|(?=.*alt=('|")\s+('|").*))[^>]\_?> 这正则可以查没有 alt 的 img 标签, 放到 vscode 搜索就行，
有兴趣的可以写个 eslint 规则来实现
