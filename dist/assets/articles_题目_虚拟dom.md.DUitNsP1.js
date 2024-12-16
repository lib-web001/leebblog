import{_ as n,o as a,c as p,a6 as e}from"./chunks/framework.DxlwMnnj.js";const r=JSON.parse('{"title":"Vue 的虚拟 DOM 和 DOM Diff 算法","description":"","frontmatter":{"tag":["八股文"]},"headers":[],"relativePath":"articles/题目/虚拟dom.md","filePath":"articles/题目/虚拟dom.md"}'),l={name:"articles/题目/虚拟dom.md"};function i(c,s,d,t,o,D){return a(),p("div",{"data-pagefind-body":!0},s[0]||(s[0]=[e(`<h1 id="vue-的虚拟-dom-和-dom-diff-算法" tabindex="-1">Vue 的虚拟 DOM 和 DOM Diff 算法 <a class="header-anchor" href="#vue-的虚拟-dom-和-dom-diff-算法" aria-label="Permalink to &quot;Vue 的虚拟 DOM 和 DOM Diff 算法&quot;">​</a></h1><h3 id="什么是虚拟-dom" tabindex="-1">什么是虚拟 DOM？ <a class="header-anchor" href="#什么是虚拟-dom" aria-label="Permalink to &quot;什么是虚拟 DOM？&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>虚拟DOM（Virtual   Dom）是用JS对象来模拟真实DOM中的节点，该对象包含了真实DOM的结构及其属性，用于对比虚拟DOM和真实DOM的差异，减少频繁操作DOM而引起回流重绘所引发的性能问题的！从而进行局部渲染来达到优化性能。</span></span>
<span class="line"><span>$2.虚拟DOM和真实DOM的区别？</span></span>
<span class="line"><span>虚拟DOM不会进行回流和重绘；</span></span>
<span class="line"><span>虚拟DOM频繁修改，然后一次性对比差异并修改真实DOM，最后进行依次回流重绘，减少了真实DOM中多次回流重绘引起的性能损耗；</span></span>
<span class="line"><span>虚拟DOM有效降低大面积的重绘与排版，因为是和真实DOM对比，更新差异部分，所以只渲染局部；</span></span>
<span class="line"><span>真实DOM总损耗 = 真实DOM增删改 + (多节点)回流/重绘</span></span>
<span class="line"><span>虚拟DOM总损耗 = 虚拟DOM增删改 + diff对比 + 真实DOM差异化增删改 + (较少节点)回流/重绘</span></span>
<span class="line"><span>3.为什么操作DOM慢？</span></span>
<span class="line"><span>线程之间通信因为 DOM 是属于渲染引擎中的东西，而 JS 又是 JS 引擎中的东西。当我们通过 JS 操作 DOM 的时候，涉及到了两个线程之间的通信，那么势必会带来一些性能上的损耗。操作 DOM 次数一多，也就等同于一直在进行线程之间的通信</span></span>
<span class="line"><span>回流重绘操作 DOM 可能还会带来重绘回流的情况，所以也就导致了性能上的问题。</span></span>
<span class="line"><span>$4.虚拟DOM做了哪些事情？</span></span>
<span class="line"><span>提供与真实DOM节点对应的虚拟节点vnode，就是用对象去描述DOM。</span></span>
<span class="line"><span>每次生成虚拟节点vnode都会缓存下来，将本次生成的虚拟节点vnode和旧虚拟节点oldVnode进行比对，判断出哪些节点发生了变化，从而只对发生了变化的节点进行更新操作。</span></span>
<span class="line"><span>image.png</span></span>
<span class="line"><span>5. 虚拟DOM的缺点</span></span>
<span class="line"><span>首屏加载时间更长因为需要先生成虚拟DOM再渲染出真实的节点，多了生成虚拟DOM这一个步骤。在页面节点多的情况下会增加耗时。</span></span>
<span class="line"><span>极端场景下不是最优解比如当前页面的节点全部替换，那么生成虚拟DOM再去对比替换，都是无效操作。</span></span>
<span class="line"><span>6.vue中虚拟DOM的处理</span></span>
<span class="line"><span>在Vue.js中存在一个VNode类，使用它可以实例化不同类型的vnode实例，而不同类型的vnode实例各自表示不同类型的DOM元素,这些实例对象的属性上保存了生成DOM节点所需要的一些属性。</span></span>
<span class="line"><span>例如：DOM元素有元素节点、文本节点和注释节点，vnode实例也会对应着有元素节点、文本节点和注释节点等。</span></span>
<span class="line"><span>7.对比策略</span></span>
<span class="line"><span>同层比对：Diff算法比较只会在同层级进行, 不会跨层级比较</span></span>
<span class="line"><span>复用节点：新旧两个虚拟节点经过对比，如果相同，就会直接复用，再去比对属性并更新</span></span>
<span class="line"><span>不同：旧节点销毁，新节点递归</span></span></code></pre></div><h3 id="关于-key-的情况" tabindex="-1">关于 key 的情况 <a class="header-anchor" href="#关于-key-的情况" aria-label="Permalink to &quot;关于 key 的情况&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>什么是key</span></span>
<span class="line"><span>vue虚拟DOM更新默认遵循就地复用原则</span></span>
<span class="line"><span>Vue是通过标签名和key来判断两个新旧节点是否相同。设置key就是为了绕开就地复用原则</span></span>
<span class="line"><span>8.2不带key和带key</span></span>
<span class="line"><span>1、没有key的情况</span></span>
<span class="line"><span>&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;, &#39;e&#39; 变成 &#39;a&#39;, &#39;b&#39;, &#39;f&#39;,&#39;c&#39;, &#39;d&#39;, &#39;e&#39; ,会经历&#39;f&#39;,&#39;c&#39;, &#39;d&#39;替换&#39;c&#39;, &#39;d&#39;, &#39;e&#39; 的操作。然后将 e 创建添加到最后面。总共经历了5次 patchNode操作，一次 addNode 操作。因为没有key， 所以在 sameNode() 方法中比较 两个节点的key时，会把不同节点认为是同一个节点(因为 key 为 undefined )。因而对不同节点进行 patch 操作。</span></span>
<span class="line"><span>2、有key的情况</span></span>
<span class="line"><span>&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;, &#39;e&#39; 变成 &#39;a&#39;, &#39;b&#39;, &#39;f&#39;,&#39;c&#39;, &#39;d&#39;, &#39;e&#39; ,也会经历5次 patch操作，但是在patch 操作中什么都没干，只会经历 f 插入到 c 之前的操作。因为key 相同，则这两个节点一定是同一个节点。</span></span>
<span class="line"><span>$8.3为什么要带key</span></span>
<span class="line"><span>结论</span></span>
<span class="line"><span>key 是 Vue 中 vnode 的唯一标记，通过这个 key，我们的 diff 操作可以更准确、更快速。</span></span>
<span class="line"><span>1、更准确：因为带 key 就不是原地复用（如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序， 而是简单复用此处每个元素(),会导致之前节点的状态被保留下来从而产生一些问题）了，在比较是否是同一个节点的 sameNode 函数 a.key === b.key 对比中可以避免就地复用的情况，所以会更加准确。同时避免频繁更新不同元素，从而使得整个 patch 过程更加高效，减少 DOM 操作量，提高性能。</span></span>
<span class="line"><span>2、更快速：利用 key 的唯一性生成 map 对象来获取对应节点，比遍历方式更快。</span></span>
<span class="line"><span>注意事项:</span></span>
<span class="line"><span>1、如果不设置 key 的话在列表更新时可能会引发一些隐藏的 bug,比如。</span></span>
<span class="line"><span>举个例子：一个新闻列表，可点击列表项来将其标记为&quot;已访问&quot;，可通过tab切换“娱乐新闻”或是“社会新闻”。</span></span>
<span class="line"><span>不带key属性的情况下，在“娱乐新闻”下选中第二项然后切换到“社会新闻”，&quot;社会新闻&quot;里的第二项也会是被选中的状态，因为这里复用了组件，保留了之前的状态。要解决这个问题，可以为列表项带上新闻id作为唯一key，那么每次渲染列表时都会完全替换所有组件，使其拥有正确状态。</span></span>
<span class="line"><span>这只是个简单的例子，实际应用会更复杂。带上唯一key虽然会增加开销，但是对于用户来说基本感受不到差距，而且能保证组件状态正确，这应该就是为什么推荐使用唯一id作为key的原因。</span></span>
<span class="line"><span>2、在渲染时不要用数组的索引去设置 key 的值，不然在对数组做删除操作时，会对索引之后的数组元素做 patch 操作。应该使用其他唯一值去设置 key。</span></span>
<span class="line"><span>9.Vue3 diff算法优化(了解)</span></span>
<span class="line"><span>事件缓存</span></span>
<span class="line"><span>在vue2 中，其实每次更新，render函数跑完之后vnode绑定的事件都是一个全新生成的function，就算它们内部的代码是一样的。</span></span>
<span class="line"><span>Vue3缓存我们的事件，事件的变化不会引起重新渲染</span></span>
<span class="line"><span>静态提升</span></span>
<span class="line"><span>在 Vue2 里每当触发更新的时候，不管元素是否参与更新，每次都会全部重新创建vnode</span></span>
<span class="line"><span>Vue3 中会把这个不参与更新的元素保存起来，只创建一次，之后在每次渲染的时候不停地复用。</span></span>
<span class="line"><span>节点变更类型细分</span></span>
<span class="line"><span>vue2 中 patchVnode 阶段如果是普通节点，会通过内置的update钩子全量进行新旧对比，然后更新</span></span>
<span class="line"><span>Vue3 增加了动态属性标记和变更属性标记，所以只需要对比动态属性和变更的属性</span></span>
<span class="line"><span>子节点对比过程优化</span></span>
<span class="line"><span>主要是针对乱序情况</span></span></code></pre></div>`,5)]))}const O=n(l,[["render",i]]);export{r as __pageData,O as default};
