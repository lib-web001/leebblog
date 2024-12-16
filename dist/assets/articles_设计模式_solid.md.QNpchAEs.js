import{_ as s,o as n,c as e,a6 as p}from"./chunks/framework.DxlwMnnj.js";const m=JSON.parse('{"title":"solid 5 大设计原则","description":"","frontmatter":{"tag":["设计模式"]},"headers":[],"relativePath":"articles/设计模式/solid.md","filePath":"articles/设计模式/solid.md"}'),l={name:"articles/设计模式/solid.md"};function i(t,a,o,c,r,d){return n(),e("div",{"data-pagefind-body":!0},a[0]||(a[0]=[p(`<h1 id="solid-5-大设计原则" tabindex="-1">solid 5 大设计原则 <a class="header-anchor" href="#solid-5-大设计原则" aria-label="Permalink to &quot;solid 5 大设计原则&quot;">​</a></h1><p>低耦合高内聚 灵活 健壮 稳定</p><h2 id="single-单一职责" tabindex="-1">single 单一职责 <a class="header-anchor" href="#single-单一职责" aria-label="Permalink to &quot;single 单一职责&quot;">​</a></h2><p>一个类只做单一功能</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>interface IAmount{</span></span>
<span class="line"><span>  amount(){} // 订单额</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>class order implements IAmount{</span></span>
<span class="line"><span>  amount(){}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>clsas Subscription implements IAmount{</span></span>
<span class="line"><span>  amount(){}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Membership implements IAmount{</span></span>
<span class="line"><span>  amount(){}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>class Payment{</span></span>
<span class="line"><span>  pay(IAmount a){</span></span>
<span class="line"><span>    a.amount();</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="open-close-开闭原则" tabindex="-1">open close 开闭原则 <a class="header-anchor" href="#open-close-开闭原则" aria-label="Permalink to &quot;open close 开闭原则&quot;">​</a></h2><p>扩展开放,修改关闭 继承或者注入</p><h2 id="li-李四替换" tabindex="-1">Li 李四替换 <a class="header-anchor" href="#li-李四替换" aria-label="Permalink to &quot;Li 李四替换&quot;">​</a></h2><p>年轻人固然有自己的想法，但是祖宗的规矩不能忘记 子类继承父类不要重写而是另启一个方法实现</p><ol><li>尽量不重写父类方法</li><li>重写的得保证没有副作用</li></ol><h1 id="iterface-接口分离" tabindex="-1">iterface 接口分离 <a class="header-anchor" href="#iterface-接口分离" aria-label="Permalink to &quot;iterface 接口分离&quot;">​</a></h1><p>interface 拆分更细粒度</p><h1 id="dependency-依赖倒置" tabindex="-1">dependency 依赖倒置 <a class="header-anchor" href="#dependency-依赖倒置" aria-label="Permalink to &quot;dependency 依赖倒置&quot;">​</a></h1><p>1.不要在一个类里面 new 另一个类, 而是应该注入使用 2.注入时应该用接口约束，而不是类约束</p>`,14)]))}const u=s(l,[["render",i]]);export{m as __pageData,u as default};
