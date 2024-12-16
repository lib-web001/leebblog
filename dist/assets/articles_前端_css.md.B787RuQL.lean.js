import{_ as l,o as t,c as h,a6 as n,f as s,a as i}from"./chunks/framework.DxlwMnnj.js";const e="/assets/gridline.D8ajgunZ.png",y=JSON.parse('{"title":"布局","description":"","frontmatter":{"tag":["css"]},"headers":[],"relativePath":"articles/前端/css.md","filePath":"articles/前端/css.md"}'),p={name:"articles/前端/css.md"};function k(d,a,r,o,E,g){return t(),h("div",{"data-pagefind-body":!0},a[0]||(a[0]=[n(`<h1 id="布局" tabindex="-1">布局 <a class="header-anchor" href="#布局" aria-label="Permalink to &quot;布局&quot;">​</a></h1><h2 id="flex" tabindex="-1">flex <a class="header-anchor" href="#flex" aria-label="Permalink to &quot;flex&quot;">​</a></h2><p>居中</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.flex</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  display</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">flex</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  justify-content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">center</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  align-items</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">center</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>设置三列</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.flex</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  display</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">flex</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  flex</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; // </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">grow</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> shrink</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> basis</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>根据内容选择大小</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.flex</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  display</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">flex</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  flex</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">auto</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="align-items-和-align-content" tabindex="-1">align-items 和 align-content <a class="header-anchor" href="#align-items-和-align-content" aria-label="Permalink to &quot;align-items 和 align-content&quot;">​</a></h3><p>flex 容器不设置高度并且子项只有一行时，align-content 属性是不起作用的。</p><h2 id="grid" tabindex="-1">grid <a class="header-anchor" href="#grid" aria-label="Permalink to &quot;grid&quot;">​</a></h2><p>设置三列</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.grid</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  display</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">grid</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  grid-template-columns</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">fr</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">fr</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">fr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>自动填充子容器宽度 最小宽度 80px (最后一列居左)</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.grid</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  display</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">grid</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  grid-template-columns</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    auto-fit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    minmax</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">80</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">fr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* fit 铺满整行 fill 计算空轨道*/</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /* grid-template-columns: repeat(auto-fill, minmax(80px, 1fr)); */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>子容器出现在固定位置</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">#garden</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  display</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">grid</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  grid-template-columns</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 20</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 20</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 20</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 20</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* grid-template-columns: repeat(5,20%) */</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  grid-template-rows</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 20</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 20</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 20</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 20</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">#box</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  grid-column-start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  grid-row-start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  grid-column-end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  grid-row-end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>间隙</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.grid</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  grid-column-gap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">、</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">grid-row-gap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">、</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">grid-gap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">（前俩的简写）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="容器属性" tabindex="-1">容器属性 <a class="header-anchor" href="#容器属性" aria-label="Permalink to &quot;容器属性&quot;">​</a></h3><p>grid-template-areas:&#39;lt ct rt&#39; &#39;lm cm rm&#39; &#39;lb cb rb&#39; 和 grid-area</p><p>grid: 行、列、以及行列宽高、间距属性的简写</p><p>grid-auto-columns:50px 设置默认列的宽度，好像没啥用？因为我们通常用 grid-template-columns 来定义列的一些配置信息（已经指定了列的宽度，这时候用 grid-auto-columns 是不生效的）</p><p>grid-auto-rows:50px 设置默认行的高度</p><p>grid-auto-flow:[row|column|dense|row dense|column dense] 控制网格元素排列方式</p><p>row: 也是默认值，增加行的方式继续往下排列 (纵向)</p><p>column: 网格元素排列方式是列 (横向)</p><p>dense； 简单理解就是 宽度是 auto 的</p><p>grid-column-gap 列的间距（也可以写作 column-gap ） grid-row-gap 行的间距（也可以写作 row-gap ） gap (grid-gap) 列、行的间距简写（同样，个人不太提倡使用简写方式）</p><h3 id="子容器属性" tabindex="-1">子容器属性 <a class="header-anchor" href="#子容器属性" aria-label="Permalink to &quot;子容器属性&quot;">​</a></h3><p>grid-area: 合并行、列那几个属性的简写 grid-row-start、grid-column-start、grid-row-end、grid-column-end</p><p>grid-column 列合并两个属性的简写（grid-column-start、grid-column-end），中间使用 / 分割开</p><p>grid-column: 1 / 3;</p><p>grid-row 行合并两个属性的简写（grid-row-start、grid-row-end）用法同上</p><p><img src="`+e+`" alt="" loading="lazy"></p><h2 id="媒体查询" tabindex="-1">媒体查询 <a class="header-anchor" href="#媒体查询" aria-label="Permalink to &quot;媒体查询&quot;">​</a></h2><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@media</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> screen</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> and</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">min-width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">300</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  // 超出300像素屏幕</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@media</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> screen</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> and</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">max-width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">300</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  // 300像素屏幕以内</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="文字溢出隐藏" tabindex="-1">文字溢出隐藏 <a class="header-anchor" href="#文字溢出隐藏" aria-label="Permalink to &quot;文字溢出隐藏&quot;">​</a></h2><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.ellipsis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  overflow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">hidden</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  text-overflow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ellipsis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  white-space</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">nowrap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="无影响触发-bfc" tabindex="-1">无影响触发 bfc <a class="header-anchor" href="#无影响触发-bfc" aria-label="Permalink to &quot;无影响触发 bfc&quot;">​</a></h2><p>display 为 inline-block, table-cell, table-caption, flex,inline-flex overflow:overflow</p><h2 id="css3-四个自适应关键字——fill-available、max-content、min-content、fit-content" tabindex="-1">CSS3 四个自适应关键字——fill-available、max-content、min-content、fit-content <a class="header-anchor" href="#css3-四个自适应关键字——fill-available、max-content、min-content、fit-content" aria-label="Permalink to &quot;CSS3 四个自适应关键字——fill-available、max-content、min-content、fit-content&quot;">​</a></h2><h3 id="fill-available" tabindex="-1">fill-available <a class="header-anchor" href="#fill-available" aria-label="Permalink to &quot;fill-available&quot;">​</a></h3><p>width:fill-available 表示撑满可用空间</p>`,44),s("iframe",{width:"100%",height:"auto",frameborder:"0",srcdoc:`
<style>
div{
  background-color: pink;
  display:inline-block;
  width:-webkit-fill-available;
}
</style>
<div>小火柴的蓝色理想</div>
`},null,-1),n(`<div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    background-color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">pink</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    display</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">inline-block</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-webkit-fill-available</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;小火柴的蓝色理想&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="fit-content" tabindex="-1">fit-content <a class="header-anchor" href="#fit-content" aria-label="Permalink to &quot;fit-content&quot;">​</a></h3><p>width:fit-content 表示将元素宽度收缩为内容宽度</p>`,3),s("iframe",{width:"100%",height:"auto",frameborder:"0",srcdoc:`
<style>
div{
  background-color: pink;
  width:-webkit-fit-content;
  margin:auto;
}
</style>
<div>小火柴的蓝色理想</div>
`},null,-1),s("h3",{id:"min-content",tabindex:"-1"},[i("min-content "),s("a",{class:"header-anchor",href:"#min-content","aria-label":'Permalink to "min-content"'},"​")],-1),s("p",null,"width:min-content 表示采用内部元素最小宽度值最大的那个元素的宽度作为最终容器的宽度",-1),s("p",null,"首先，要明白这里的“最小宽度值”是什么意思。替换元素，例如图片的最小宽度值就是图片呈现的宽度，对于文本元素，如果全部是中文，则最小宽度值就是一个中文的宽度值；如果包含英文，因为默认英文单词不换行，所以，最小宽度可能就是里面最长的英文单词的宽度",-1),s("iframe",{width:"100%",height:"auto",frameborder:"0",srcdoc:`
<style>
.outer{
  width:-webkit-min-content;
}
</style>
<div class="outer">
  <div style="height:10px;width:100px;background:lightgreen"></div>
  <div style="background-color: pink;">小火柴的蓝色理想</div>
</div>
`},null,-1),s("h3",{id:"max-content",tabindex:"-1"},[i("max-content "),s("a",{class:"header-anchor",href:"#max-content","aria-label":'Permalink to "max-content"'},"​")],-1),s("p",null,"width:max-content 表示采用内部元素宽度值最大的那个元素的宽度作为最终容器的宽度。如果出现文本，则相当于文本不换行",-1),s("iframe",{width:"100%",height:"auto",frameborder:"0",srcdoc:`
<style>
.outer{
  width:-webkit-max-content;
  border:1px solid black;
}
</style>
<div class="outer">
  <div style="height:10px;width:100px;background:lightgreen"></div>
  <div style="background-color: pink;">小火柴的蓝色理想小火柴的蓝色理想小火柴的蓝色理想小火柴的蓝色理想小火柴的蓝色理想小火柴的蓝色理想小火柴的蓝色理想小火柴的蓝色理想小火柴的蓝色理想小火柴的蓝色理想小火柴的蓝色理想小火柴的蓝色理想小火柴的蓝色理想小火柴的蓝色理想小火柴的蓝色理想小火柴的蓝色理想小火柴的蓝色理想小火柴的蓝色理想小火柴的蓝色理想小火柴的蓝色理想小火柴的蓝色理想</div>
</div>
`},null,-1),s("h2",{id:"css-元素混合",tabindex:"-1"},[i("css 元素混合 "),s("a",{class:"header-anchor",href:"#css-元素混合","aria-label":'Permalink to "css 元素混合"'},"​")],-1),s("p",null,"元素混合 mix-blend-mode 应用于两个元素之间的混合",-1),s("p",null,"mix-blend-mode",-1),s("p",null,"初始值: normal",-1),s("p",null,"应用于: 所有元素",-1),s("p",null,"继承性: 无",-1),s("p",null,"值: normal(正常) | multiply(正片叠底) | screen(滤色) | overlay(叠加) | darken(变暗) | lighten(变亮) | color-dodge(颜色减淡) | color-burn(颜色加深) | hard-light(强光) | soft-light(柔光) | difference(差值) | exclusion(排除) | hue(色相) | saturation(饱和度) | color(颜色) | luminosity (亮度) | initial(初始) | inherit(继承) | unset(复原)",-1),s("iframe",{width:"100%",height:"auto",frameborder:"0",srcdoc:`
<html lang="en"><head>
<meta charset="UTF-8">
<title>Document</title>
<style>
.box1,.box2{
  display:inline-block;
  height: 150px;
  width: 200px;
  text-align: center;
}
.box2{
  background:#224E71;
}
h1{
  line-height: 2;
  margin: 0;
  mix-blend-mode:normal;
}
h1:first-line{
  color:white;
}
@media (max-width:700px) {
.box1,.box2{
    height: 75px;
    width: 100px;
  }
h1{line-height:1}
    }  
</style>
</head>
<body>
<div class="box1">
  <h1 style="mix-blend-mode: unset;">春分<br>白露</h1>
</div>
<div class="box2">
  <h1 style="mix-blend-mode: unset;">春分<br>白露</h1>
</div>  
<br>
<select id="test">
  <option value="normal">normal-正常</option>
  <option value="multiply">multiply-正片叠底</option>
  <option value="screen">screen-滤色</option>
  <option value="overlay">overlay-叠加</option>
  <option value="darken">darken-变暗</option>
  <option value="lighten">lighten-变亮</option>
  <option value="color-dodge">color-dodge-颜色减淡</option>
  <option value="color-burn">color-burn-颜色加深</option>
  <option value="hard-light">hard-light-强光</option>
  <option value="soft-light">soft-light-柔光</option>
  <option value="difference">difference-差值</option>
  <option value="exclusion">exclusion-排除</option>
  <option value="hue">hue-色相</option>
  <option value="saturation">saturation-饱和度</option>
  <option value="color">color-颜色</option>
  <option value="luminosity">luminosity-亮度</option>
  <option value="initial">initial-初始</option>
  <option value="inherit">inherit-继承</option>
  <option value="unset">unset-复原</option>
</select>
<script>
test.onchange = function(){
  var oH = document.getElementsByTagName("h1");
  for(var i = 0; i < oH.length; i++){
    oH[i].style.mixBlendMode = this.value;
  }
};
<\/script>
</body></html>
`},null,-1)]))}const F=l(p,[["render",k]]);export{y as __pageData,F as default};
