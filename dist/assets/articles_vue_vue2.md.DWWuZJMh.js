import{_ as a,o as i,c as n,a6 as p}from"./chunks/framework.DxlwMnnj.js";const c=JSON.parse('{"title":"Vue2 相关","description":"","frontmatter":{"tag":["vue","前端"]},"headers":[],"relativePath":"articles/vue/vue2.md","filePath":"articles/vue/vue2.md"}'),l={name:"articles/vue/vue2.md"};function e(t,s,h,k,d,E){return i(),n("div",{"data-pagefind-body":!0},s[0]||(s[0]=[p(`<h1 id="vue2-相关" tabindex="-1">Vue2 相关 <a class="header-anchor" href="#vue2-相关" aria-label="Permalink to &quot;Vue2 相关&quot;">​</a></h1><h2 id="生命周期" tabindex="-1">生命周期 <a class="header-anchor" href="#生命周期" aria-label="Permalink to &quot;生命周期&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>就是vue实例从创建到销毁的过程就是生命周期</span></span>
<span class="line"><span></span></span>
<span class="line"><span>创建、初始化数据、编译模板、挂载DOM-&gt;渲染、更新-&gt;渲染、卸载等一系列过程。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在Vue中生命周期钩子会自动绑定this上下文到实例中，因此你可以访问数据，对property和方法进行运算，这意味着你不能使用箭头函数来定义一个生命周期，例如：create:() =&gt; this.fetchTodos()。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在vue 生命周期中提供的钩子函数</span></span>
<span class="line"><span>beforeCreate 组件实例被创建之前</span></span>
<span class="line"><span>created 组件实例已经完全创建</span></span>
<span class="line"><span>beforeMount 组件挂载之前</span></span>
<span class="line"><span>mounted 组件挂载到实例上之后</span></span>
<span class="line"><span>beforeUpdate 组件数据发生变化，更新之前</span></span>
<span class="line"><span>updated 组件数据更新之后</span></span>
<span class="line"><span>beforeDestroy 组件实例销毁之前</span></span>
<span class="line"><span>destroyed 组件实例销毁之后</span></span>
<span class="line"><span>activated keep-alive 缓存的组件激活时</span></span>
<span class="line"><span>deactivated keep-alive 缓存的组件停用时调用</span></span>
<span class="line"><span>errorCaptured 捕获一个来自子孙组件的错误时被调用</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>父子组件生命周期</span></span>
<span class="line"><span></span></span>
<span class="line"><span>父 beforeCreate -&gt; 父 created -&gt; 父 beforeMount -&gt; 子 beforeCreate -&gt; 子 created -&gt; 子 beforeMount -&gt; 子 mounted -&gt; 父 mounted</span></span></code></pre></div><h2 id="性能优化" tabindex="-1">性能优化 <a class="header-anchor" href="#性能优化" aria-label="Permalink to &quot;性能优化&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>● 懒加载、</span></span>
<span class="line"><span>● 路由懒加载、</span></span>
<span class="line"><span>● 组件懒加载、</span></span>
<span class="line"><span>● 图片懒加载、</span></span>
<span class="line"><span>● 三方插件按需引入、</span></span>
<span class="line"><span>● 长列表性能优化，如果列表只是存粹的数据展示，不会发生改变，可以不做响应式</span></span>
<span class="line"><span>this.list=Object.freeze(list);</span></span>
<span class="line"><span>如果是大数据长列表，可采用虚拟滚动，只渲染少部分区域的内容 vue-virtual-scroller</span></span>
<span class="line"><span></span></span>
<span class="line"><span>● 事件的销毁</span></span>
<span class="line"><span>Vue 组件销毁时，会自动解绑它的全部指令及事件监听器，但是仅限于组件本身的事件。</span></span>
<span class="line"><span>定时器要销毁</span></span>
<span class="line"><span>总线通信注意销毁</span></span>
<span class="line"><span></span></span>
<span class="line"><span>● 无状态的组件标记为functional</span></span>
<span class="line"><span>函数式组件</span></span>
<span class="line"><span>无状态</span></span>
<span class="line"><span>无法实例化</span></span>
<span class="line"><span>内部没有任何生命周期处理函数</span></span>
<span class="line"><span>轻量,渲染性能高,适合只依赖于外部数据传递而变化的组件(展示组件，无逻辑和状态修改)</span></span>
<span class="line"><span>在template标签里标明functional</span></span>
<span class="line"><span>只接受props值</span></span>
<span class="line"><span></span></span>
<span class="line"><span>● key的使用</span></span>
<span class="line"><span>● v-show与v-if的合理使用</span></span>
<span class="line"><span>● keep-alive合理使用</span></span>
<span class="line"><span>● 用computed替代method 或 watch</span></span>
<span class="line"><span>● 使用is动态组件 &lt;component :is=&#39;componentName&#39;/&gt;</span></span></code></pre></div><h2 id="关于样式冲突问题" tabindex="-1">关于样式冲突问题 <a class="header-anchor" href="#关于样式冲突问题" aria-label="Permalink to &quot;关于样式冲突问题&quot;">​</a></h2><blockquote><p>多个组件污染（多个组件公用一套样式时影响其他组件）</p></blockquote><p>在开发过程中为了避免不必要的资源浪费，多个组件在会共用一套 CSS 代码时，如果采用下面方法引入，可能会导致组件样式污染（加载组件的时候加载的不是当前组件的样式，必须要刷新一次才能当前组件的样式）</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> scoped</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  @import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;../assets/css/Login.css&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>那么解决这个问题可以通过下面方法进行引入样式</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> lang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;../assets/css/Login.css&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> scoped</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>其原理是通过使用 PostCSS 来实现以下转换：</span></span>
<span class="line"><span>.class[data-v-f3f3eg9] { }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. 当前组件中的元素及子组件根元素样式</span></span>
<span class="line"><span>2. 如果想覆盖子元素的样式 使用 深度作用选择器</span></span>
<span class="line"><span>  a. css   &gt;&gt;&gt;</span></span>
<span class="line"><span>  b. scss /deep/ or ::v-deep</span></span></code></pre></div><h2 id="关于-vue-config-js" tabindex="-1">关于 vue.config.js <a class="header-anchor" href="#关于-vue-config-js" aria-label="Permalink to &quot;关于 vue.config.js&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 项目部署的基础路径</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 我们默认你的应用将会部署在域名的根部，比如 https://www.xxx.com/</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 如果你的应用时部署在一个子路径下，那么你需要在这里指定子路径。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 比如，如果你的应用部署在https://www.xxx.com/public/</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 那么将这个值改为 \`/public/\`</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 部署生产环境和开发环境下的 URL：可对当前环境进行区分，baseUrl 从 Vue CLI 3.3 起已弃用，要使用 publicPath</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /* baseUrl: process.env.NODE_ENV === &#39;production&#39; ? &#39;./&#39; : &#39;/&#39; */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  publicPath: process.env.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">NODE_ENV</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;production&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;/public/&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /* 输出文件目录：在 npm run build 时，生成文件的目录名称 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  outputDir: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;dist&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /* 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录 */</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> assetsDir:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;assets&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /* 是否在构建生产包时生成 sourceMap 文件，false 将提高构建速度 */</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> productionSourceMap: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /* 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存，你可以通过将这个选项设为 false 来关闭文件名哈希。(false 的时候就是让原来的文件名不改变) */</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> filenameHashing: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /* 代码保存时进行 eslint 检测 */</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> lintOnSave: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /* webpack-dev-server 相关配置 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  devServer: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /* 自动打开浏览器 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    open: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /* 设置为 0.0.0.0 则所有的地址均能访问 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    host: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;0.0.0.0&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    port: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8066</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    https: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    hotOnly: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /* 使用代理 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    proxy: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // string | Object</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &#39;/api&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        /* 目标代理服务器地址 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        target: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;http://xxx/&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        /* 允许跨域 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        changeOrigin: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        pathRewrite: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          &#39;^/api&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> //规定请求地址以什么作为开头</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="nexttick-的实现原理-mutationobserver" tabindex="-1">nextTick 的实现原理 MutationObserver <a class="header-anchor" href="#nexttick-的实现原理-mutationobserver" aria-label="Permalink to &quot;nextTick 的实现原理 MutationObserver&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// MutationObserver是HTML5新增的属性，用于监听DOM修改事件，能够监听到节点的属性、文本内容、子节点等的改动</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// MutationObserver基本用法</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> observer </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MutationObserver</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //这里是回调函数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;DOM被修改了！&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> article </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">querySelector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;article&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">observer.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">observer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(article)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Promise  &gt; MutationObserver &gt; setImmediate &gt; setTimeout</span></span></code></pre></div><h2 id="数据请求在-created-和-mounted-的区别" tabindex="-1">数据请求在 created 和 mounted 的区别 <a class="header-anchor" href="#数据请求在-created-和-mounted-的区别" aria-label="Permalink to &quot;数据请求在 created 和 mounted 的区别&quot;">​</a></h2><p>created 是在组件实例一旦创建完成的时候立即调用，这时候页面 DOM 节点并未生成</p><p>mounted 是在页面 DOM 节点渲染完毕之后就立刻执行的，触发时机上 created 是比 mounte 要更早的</p><p>两者的相同点：都能拿到实例对象的属性和方法</p><p>由于触发的时机不同，放在 mounted 中的请求有可能导致页面闪动（因为此时页面 dom 结构已经生成），但如果在页面加载前完成请求，则不会出现此情况。建议对页面内容的改动放在 created 生命周期当中。</p><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h2><h2 id="vue-设计原则的理解" tabindex="-1">vue 设计原则的理解？ <a class="header-anchor" href="#vue-设计原则的理解" aria-label="Permalink to &quot;vue 设计原则的理解？&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1. 渐进式JavaScript框架</span></span>
<span class="line"><span>  a. 与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易 于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使 用时，Vue 也完全能够为复杂的单页应用提供驱动。</span></span>
<span class="line"><span>2. 易用、灵活和高效</span></span>
<span class="line"><span>  a. 易用性 vue提供数据响应式、声明式模板语法和基于配置的组件系统等核心特性。这些使我们只需要关注应用 的核心业务即可，只要会写js、html和css就能轻松编写vue应用。</span></span>
<span class="line"><span>  b. 灵活性 渐进式框架的最大优点就是灵活性，如果应用足够小，我们可能仅需要vue核心特性即可完成功能；随着应用规模不断扩大，我们才可能逐渐引入路由、状态管理、vue-cli等库和工具，不管是应用体积还是 学习难度都是一个逐渐增加的平和曲线。</span></span>
<span class="line"><span>  c. 高效性 超快的虚拟 DOM 和 diﬀ 算法使我们的应用拥有最佳的性能表现。追求高效的过程还在继续，vue3中引入Proxy对数据响应式改进以及编译器中对于静态内容编译的改进都会让vue更加高效。</span></span></code></pre></div><h2 id="关于冗余导航报错问题" tabindex="-1">关于冗余导航报错问题 <a class="header-anchor" href="#关于冗余导航报错问题" aria-label="Permalink to &quot;关于冗余导航报错问题&quot;">​</a></h2><p>当我们在使用下面方法进行路由跳转时：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @click</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;$router.push(&#39;/setting&#39;)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;设置&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>效果是想点击设置跳转到设置的页面，效果是完全可以正常实现跳转</p><p>但是，如果当前已经在<code>/setting</code>路由下，那么再点击就会报错：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[Vue warn]: Error in v-on handler (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Promise/async</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">): </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;NavigationDuplicated: Avoided redundant navigation to current location: &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/setting</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;.&quot;</span></span></code></pre></div><p>大概的意思就是：当前你已经在这个导航下了，不要再重复冗余</p><p>这个其实并不是一个错误，只是说你的操作多余了</p><p>那么解决方法就是：在 <code>router/index.js</code>中加入下面一段代码即可解决报错问题</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> router</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> VueRouter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  routes</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 解决 冗余导航报错问题</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> originalPush</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> VueRouter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">prototype</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.push</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">VueRouter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">prototype</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">push</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">location</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> originalPush.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">call</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, location).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">err</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> err)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> router</span></span></code></pre></div><h2 id="vue-组件-data-为什么必须是个函数而-vue-的根实例则没有此限制" tabindex="-1">Vue 组件 data 为什么必须是个函数而 Vue 的根实例则没有此限制？ <a class="header-anchor" href="#vue-组件-data-为什么必须是个函数而-vue-的根实例则没有此限制" aria-label="Permalink to &quot;Vue 组件 data 为什么必须是个函数而 Vue 的根实例则没有此限制？&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>● Vue组件可能存在多个实例，如果使用对象形式定义data，则会导致它们共用一个data对象，那么状态</span></span>
<span class="line"><span>变更将会影响所有组件实例，这是不合理的；采用函数形式定义，在initData时会将其作为工厂函数返 回全新data对象，有效规避多实例之间状态污染问题。</span></span>
<span class="line"><span>● 而在Vue根实例只能有一个，所以不需要担心这种情况。</span></span></code></pre></div><h2 id="vue-给-for-循环的标签添加背景图" tabindex="-1">Vue 给 for 循环的标签添加背景图 <a class="header-anchor" href="#vue-给-for-循环的标签添加背景图" aria-label="Permalink to &quot;Vue 给 for 循环的标签添加背景图&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{ &#39;background-image&#39;: &#39;url(&#39; + item.PlaceImgUrl + &#39;)&#39; }&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="watch-监听器" tabindex="-1">watch 监听器 <a class="header-anchor" href="#watch-监听器" aria-label="Permalink to &quot;watch 监听器&quot;">​</a></h2><p>通过 watch 可以定义一个监视器，用于监视某一些数据，当这个被监视的数据一旦发生变化，就会执行里面的逻辑：</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">text</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    watch: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;text 值发生改变了！！&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>但是不免有些特殊的情况，比如：我们希望在页面刚刚初始化的时候，虽然数据没有发生变化，但也需要立刻执行一次监视器中的内容，这样的话，监视器的表现形式会变成对象，里面透过配置一个 <code>handler</code> 的函数和 <code>immediate</code> 方法来解决：</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">text</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    watch: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 使用对象写法，监视数据 text</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      text: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 使用 handler 方法，处理变化后的逻辑代码</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        handler</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;text 值发生改变了！！&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // immediate 这个属性值为 true 的时候，默认页面初始化完成之后执行一次上面的代码</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        immediate: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="vue2-响应式弊端" tabindex="-1">vue2 响应式弊端 <a class="header-anchor" href="#vue2-响应式弊端" aria-label="Permalink to &quot;vue2 响应式弊端&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>● 响应化过程需要递归遍历，消耗较大;</span></span>
<span class="line"><span>● 新加或删除属性无法监听 ;</span></span>
<span class="line"><span>● 数组响应化需要额外实现 ;</span></span>
<span class="line"><span>● Map、Set、Class等无法响应式 ;</span></span>
<span class="line"><span>● 修改语法有限制;</span></span></code></pre></div><h2 id="vue-组件-通信方式" tabindex="-1">Vue 组件 通信方式 <a class="header-anchor" href="#vue-组件-通信方式" aria-label="Permalink to &quot;Vue 组件 通信方式&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>● 父传子，子组件通过 props 接收</span></span>
<span class="line"><span>● 子传父，子组件使用 $emit 对父组件进行传值</span></span>
<span class="line"><span>● 父子之间通过 $parent 和 $chidren 获取实例进而通信</span></span>
<span class="line"><span>● 通过 Vuex 进行状态管理</span></span>
<span class="line"><span>● 通过 eventBus 进行跨组件值传递（当前路由）</span></span>
<span class="line"><span>● provide 和 inject，官方不建议使用</span></span>
<span class="line"><span>● $ref 获取实例，进而传值</span></span>
<span class="line"><span>● 路由传值</span></span>
<span class="line"><span>● localStorage、sessionStorage</span></span>
<span class="line"><span>● vuex</span></span></code></pre></div><h2 id="vue-脚手架搭建" tabindex="-1">Vue 脚手架搭建 <a class="header-anchor" href="#vue-脚手架搭建" aria-label="Permalink to &quot;Vue 脚手架搭建&quot;">​</a></h2><ol><li>处理资源路径(相对路径资源将被 webpack 处理，文件名包含了内容哈希)</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  a. 如果 URL 是一个绝对路径 (例如 /images/foo.png )，它将会被保留不变。</span></span>
<span class="line"><span>  b. 如果 URL 以 . 开头会作为一个相对模块请求被解释并基于文件系统相对路径。</span></span>
<span class="line"><span>    ⅰ. &lt;img alt=&quot;Vue logo&quot; src=&quot;./assets/logo.png&quot;&gt;</span></span>
<span class="line"><span>  c. 如果 URL 以 ~ 开头会作为一个模块请求被解析。这意味着你甚至可以引用 Node 模块中的资源：</span></span>
<span class="line"><span>    ⅰ. &lt;img src=&quot;~some-npm-package/foo.png&quot;&gt;</span></span>
<span class="line"><span>  d. 如果 URL 以 @ 开头会作为一个模块请求被解析。Vue CLI 默认会设置一个指向 src 的别名</span></span>
<span class="line"><span>  e. 如果你不需要内容哈希，把资源放到public文件夹</span></span></code></pre></div><ol start="2"><li>网站放在二级目录下面</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>   a. 修改 vue.config.js publicPath</span></span>
<span class="line"><span>   b. 在 public/index.html 等通过 html-webpack-plugin 用作模板的 HTML 文件中，</span></span>
<span class="line"><span>   通过 &lt;%= BASE_URL %&gt; 设置链接前缀：&lt;link rel=&quot;icon&quot; href=&quot;&lt;%= BASE_URL %&gt;favicon.ico&quot;&gt;</span></span>
<span class="line"><span>   c. 在模板中，先向组件传入 BASE_URL 然后&lt;img :src=&quot;\`\${publicPath}my-image.png\`&quot;&gt;</span></span></code></pre></div><ol start="3"><li>Css 使用预处理器</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># Sass</span></span>
<span class="line"><span></span></span>
<span class="line"><span>npm install -D sass-loader node-sass</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Less</span></span>
<span class="line"><span></span></span>
<span class="line"><span>npm install -D less-loader less</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Stylus</span></span>
<span class="line"><span></span></span>
<span class="line"><span>npm install -D stylus-loader stylus</span></span></code></pre></div><h2 id="vue-组件化的理解" tabindex="-1">Vue 组件化的理解 <a class="header-anchor" href="#vue-组件化的理解" aria-label="Permalink to &quot;Vue 组件化的理解&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>● 组件是独立和可复用的代码组织单元。组件系统是 Vue 核心特性之一。</span></span>
<span class="line"><span>● 组件化开发能大幅提高应用开发效率、测试性、复用性等；</span></span>
<span class="line"><span>● 组件使用按分类有：页面组件、业务组件、通用组件；合理的划分组件，有助于提升应用性能；</span></span>
<span class="line"><span>● vue 的组件是基于配置的，我们通常编写的组件是组件配置而非组件，框架后续会生成其构造函数，它们基于 VueComponent，扩展于 Vue；</span></span>
<span class="line"><span>● vue 中常见组件化技术有：属性 prop，自定义事件，插槽，mixins 等，它们主要用于组件通信、扩展等；</span></span>
<span class="line"><span>● 组件应该是高内聚、低耦合的；</span></span>
<span class="line"><span>● 遵循单向数据流的原则。</span></span>
<span class="line"><span>● 组件创建顺序自上而下 ，组件挂载顺序自下而上</span></span></code></pre></div><h2 id="说说-虚拟-dom-和-diff-算法-吧" tabindex="-1">说说 虚拟 dom 和 diff 算法 吧？ <a class="header-anchor" href="#说说-虚拟-dom-和-diff-算法-吧" aria-label="Permalink to &quot;说说 虚拟 dom 和 diff 算法 吧？&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>虚拟 dom</span></span>
<span class="line"><span>● 是什么</span></span>
<span class="line"><span>○ 虚拟 dom 是一个对象，一个描述真实 DOM 的对象，每次数据更新时，新旧虚拟 DOM 都会互相进行同层对比，而 diff 算法优化就是在此时做优化的。</span></span>
<span class="line"><span>● 目的</span></span>
<span class="line"><span>○ 为了解决频繁操作 DOM 导致性能开销大的问题</span></span>
<span class="line"><span>● 方案</span></span>
<span class="line"><span>○ JS 运算效率 远高于 操作 DOM 效率，所以把真实 DOM 树抽象成 JS 对象树，运用 patch 算法 来用 JS 计算出真正需要更新的节点，最大限度地减少 DOM 操作，从而显著提高性能</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>diff 算法</span></span>
<span class="line"><span>● 第一步：调用 patch 方法，传入新旧虚拟 DOM，开始同层对比</span></span>
<span class="line"><span>● 第二步：调用 isSameNode 方法，对比新旧节点是否同类型节点（判断依据：标签相同，key 相同）</span></span>
<span class="line"><span>● 第三步：如果不同，新节点直接代替旧节点</span></span>
<span class="line"><span>● 第四步：如果相同，调用 patchNode 进行深层对比节点</span></span>
<span class="line"><span>○ 如果旧节点和新节点都是文本节点，则新文本代替旧文本（都是文本，新替旧）</span></span>
<span class="line"><span>○ 如果旧节点有子节点，新节点没，则删除旧节点的子节点（旧有新无，删旧子节点）</span></span>
<span class="line"><span>○ 如果旧节点没有子节点，新节点有，则把子节点新增上去（旧无新有，新增子节点）</span></span>
<span class="line"><span>○ 如果都有子节点，则调用 updateChildren 方法进行新旧子节点的对比（都有，diff 算法）</span></span>
<span class="line"><span>○ 子节点对比为首尾对比法</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. 旧前 vs 新前</span></span>
<span class="line"><span>2. 旧后 vs 新后</span></span>
<span class="line"><span>3. 旧前 vs 新后</span></span>
<span class="line"><span>4. 旧后 vs 新前</span></span>
<span class="line"><span>5. 以上都不满足，遍历查找</span></span>
<span class="line"><span>6. 创建 or 删除</span></span>
<span class="line"><span></span></span>
<span class="line"><span>当数据改变时，会触发 setter，并且通过 Dep.notify 去通知所有订阅者 Watcher，订阅者们就会调用 patch 方法，给真实 DOM 打补丁，更新相应的视图</span></span></code></pre></div><h2 id="vue-的-hook-的使用" tabindex="-1">Vue 的 hook 的使用 <a class="header-anchor" href="#vue-的-hook-的使用" aria-label="Permalink to &quot;Vue 的 hook 的使用&quot;">​</a></h2><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- 组件销毁时清除定时器 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">export default{ methods:{ fn(){ let timer = setInterval(()=&gt;{ //具体执行代码</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.log(&#39;1&#39;); },1000); this.$once(&#39;hook:beforeDestroy&#39;,()=&gt;{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">clearInterval(timer); timer = null; }) } } }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- 子组件销毁触发父组件事件 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">//父组件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">rl-child</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> @</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hook</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mounted</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">childMountedHandle</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">method () { childMountedHandle() { // do something... } },</span></span></code></pre></div>`,60)]))}const g=a(l,[["render",e]]);export{c as __pageData,g as default};
