import{_ as s,o as n,c as p,a6 as e}from"./chunks/framework.DxlwMnnj.js";const h=JSON.parse('{"title":"支付宝小程序","description":"","frontmatter":{"tag":["小程序"]},"headers":[],"relativePath":"articles/前端/小程序_支付宝.md","filePath":"articles/前端/小程序_支付宝.md"}'),t={name:"articles/前端/小程序_支付宝.md"};function l(i,a,o,c,u,d){return n(),p("div",{"data-pagefind-body":!0},a[0]||(a[0]=[e(`<h1 id="支付宝小程序" tabindex="-1">支付宝小程序 <a class="header-anchor" href="#支付宝小程序" aria-label="Permalink to &quot;支付宝小程序&quot;">​</a></h1><h4 id="多维数组循环时指定for-item的名称" tabindex="-1">多维数组循环时指定for-item的名称 <a class="header-anchor" href="#多维数组循环时指定for-item的名称" aria-label="Permalink to &quot;多维数组循环时指定for-item的名称&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const data: [ {name: &#39;a&#39;, datas: [1,2,3]}, {name: &#39;b&#39;, datas: [4,5,6]}]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;view a:for=&quot;{{data}}&quot; a:for-index=&quot;xi&quot; a:for-item=&quot;xitem&quot;&gt;</span></span>
<span class="line"><span>  {{xi}}:{{xitem.name}}</span></span>
<span class="line"><span> &lt;view a:for=&quot;{{xitem.datas}}&quot; a:for-index=&quot;yi&quot; a:for-item=&quot;yitem&quot;&gt;--{{yi}}:{{yitem}}&lt;/view&gt;</span></span>
<span class="line"><span>&lt;/view&gt;</span></span></code></pre></div><h4 id="空标签" tabindex="-1">空标签 <a class="header-anchor" href="#空标签" aria-label="Permalink to &quot;空标签&quot;">​</a></h4><p>不会在页面中显示这个标签，常配合if,for使用</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;block&gt;xxxxx&lt;/block&gt;</span></span></code></pre></div><h4 id="图片引入" tabindex="-1">图片引入 <a class="header-anchor" href="#图片引入" aria-label="Permalink to &quot;图片引入&quot;">​</a></h4><p>css背景图 ACSS 文件里的本地资源引用请使用绝对路径的方式，不支持相对路径引用，例如下方示例</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/* 支持 */</span></span>
<span class="line"><span>background-image: url(&#39;/images/ant.png&#39;);</span></span>
<span class="line"><span>/* 不支持 */</span></span>
<span class="line"><span>background-image: url(&#39;./images/ant.png&#39;);</span></span></code></pre></div><h4 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h4><p>设置数据，点击事件，事件传参，修改数据</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 1.点击事件-传参，修改参数</span></span>
<span class="line"><span>&lt;button onTap=&quot;clickfn&quot; data-msg=&#39;222222&#39;&gt;点击事件&lt;/button&gt;</span></span>
<span class="line"><span>&lt;view&gt;我是首页--{{msg}}&lt;/view&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Page({</span></span>
<span class="line"><span>    data: {</span></span>
<span class="line"><span>        // 数据</span></span>
<span class="line"><span>        msg: &#39;1111&#39;,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    clickfn(e){</span></span>
<span class="line"><span>        // 测试点击事件和传参</span></span>
<span class="line"><span>        console.log(&#39;clickfn: &#39;, e, e.target.dataset);</span></span>
<span class="line"><span>        this.setData({msg: e.target.dataset.msg})</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>});</span></span></code></pre></div><h4 id="底部导航" tabindex="-1">底部导航 <a class="header-anchor" href="#底部导航" aria-label="Permalink to &quot;底部导航&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;pages&quot;: [</span></span>
<span class="line"><span>        &quot;pages/index/index&quot;,</span></span>
<span class="line"><span>        &quot;pages/goods/goods&quot;,</span></span>
<span class="line"><span>        &quot;pages/user/user&quot;</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    &quot;window&quot;: {</span></span>
<span class="line"><span>        &quot;defaultTitle&quot;: &quot;玄空小程序&quot;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    &quot;tabBar&quot;: {</span></span>
<span class="line"><span>        &quot;textColor&quot;: &quot;#dddddd&quot;,</span></span>
<span class="line"><span>        &quot;selectedColor&quot;: &quot;#49a9ee&quot;,</span></span>
<span class="line"><span>        &quot;backgroundColor&quot;: &quot;#ffffff&quot;,</span></span>
<span class="line"><span>    &quot;items&quot;: [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;pagePath&quot;: &quot;pages/index/index&quot;,</span></span>
<span class="line"><span>            &quot;name&quot;: &quot;首页&quot;,</span></span>
<span class="line"><span>            &quot;icon&quot;:&quot;assets/imgs/tabnav/icon1.png&quot;,</span></span>
<span class="line"><span>            &quot;activeIcon&quot;:&quot;assets/imgs/tabnav/icon1-act.png&quot;</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;pagePath&quot;: &quot;pages/goods/goods&quot;,</span></span>
<span class="line"><span>            &quot;name&quot;: &quot;商品&quot;,</span></span>
<span class="line"><span>            &quot;icon&quot;:&quot;assets/imgs/tabnav/icon2.png&quot;,</span></span>
<span class="line"><span>            &quot;activeIcon&quot;:&quot;assets/imgs/tabnav/icon2-act.png&quot;</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;pagePath&quot;: &quot;pages/user/user&quot;,</span></span>
<span class="line"><span>            &quot;name&quot;: &quot;我的&quot;,</span></span>
<span class="line"><span>            &quot;icon&quot;:&quot;assets/imgs/tabnav/icon3.png&quot;,</span></span>
<span class="line"><span>            &quot;activeIcon&quot;:&quot;assets/imgs/tabnav/icon3-act.png&quot;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="小程序组件的生命周期" tabindex="-1">小程序组件的生命周期 <a class="header-anchor" href="#小程序组件的生命周期" aria-label="Permalink to &quot;小程序组件的生命周期&quot;">​</a></h3><ul><li>小程序的应用生命周期指的是从小程序启动到退出的整个过程，主要包含以下几个阶段：</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>onLaunch：小程序初始化时触发，一般用于进行全局数据的初始化和获取，例如获取用户信息、检查登录状态等。</span></span>
<span class="line"><span>onShow：小程序启动或切换到前台时触发，可以执行一些需要实时更新的操作，比如获取用户位置、更新数据等。</span></span>
<span class="line"><span>onHide：小程序切换到后台时触发，可以进行一些清理操作，比如保存用户数据、停止定时器等。</span></span>
<span class="line"><span>onError：小程序发生错误时触发，一般用于捕捉并处理小程序运行时的异常情况，例如网络请求失败、数据解析错误等。</span></span>
<span class="line"><span>onPageNotFount：冷启动（如扫码）打开小程序的页面不存在时</span></span></code></pre></div><ul><li><p>此外，小程序的生命周期还会受到系统资源占用过高、使用重定向方法等因素的影响。当系统资源占用过高或使用重定向方法时，小程序可能会被销毁或触发onHide等生命周期函数。因此，开发者需要注意这些因素对小程序生命周期的影响，并合理利用生命周期函数来实现小程序的最佳性能和用户体验。</p></li><li><p>小程序的页面生命周期主要包含以下几个阶段：</p></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>onLoad：页面加载时触发，一般在onLoad中发送异步请求来初始化页面数据。</span></span>
<span class="line"><span>onShow：页面显示时触发。</span></span>
<span class="line"><span>onReady：页面初次渲染完成时触发。</span></span>
<span class="line"><span>onHide：页面隐藏时触发，注意不是应用隐藏，切后台时，页面就会隐藏。即整个小程序隐藏时，页面也就隐藏了。另外，在当前页面跳转的时候也相当于当前页面隐藏。</span></span>
<span class="line"><span>onUnload：页面卸载（关闭）时触发，当open-type为redirect、reLaunch、navigateBack时都是关闭当前页面，也即卸载当前页面。</span></span>
<span class="line"><span>onPullDownRefresh：监听用户的下拉动作，当在app.json中配置了允许下拉刷新，在页面中往下拉动就会有下拉刷新的效果。还可以设置下拉刷新时的背景颜色。</span></span>
<span class="line"><span>onReachBottom：页面上拉触底时才会触发。</span></span></code></pre></div><ul><li>小程序的组件生命周期主要包含以下几个阶段：</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>created：组件实例刚被创建好时执行。此时还不能调用setData，一般情况下，这个生命周期只应该用于给组件 this 添加一些自定义属性字段。</span></span>
<span class="line"><span>attached：组件完全初始化完毕、进入页面节点树后执行。this.data 已被初始化，绝大多数初始化工作可以在这个时机进行。</span></span>
<span class="line"><span>detached：组件离开页面节点树后执行。退出一个页面时，如果组件还在页面节点树中，则 detached 会被触发。</span></span></code></pre></div>`,21)]))}const g=s(t,[["render",l]]);export{h as __pageData,g as default};
