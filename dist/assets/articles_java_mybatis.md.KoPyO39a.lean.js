import{_ as a,o as n,c as i,a6 as p}from"./chunks/framework.DxlwMnnj.js";const o=JSON.parse('{"title":"","description":"","frontmatter":{"tag":["java"]},"headers":[],"relativePath":"articles/java/mybatis.md","filePath":"articles/java/mybatis.md"}'),e={name:"articles/java/mybatis.md"};function l(t,s,h,d,k,r){return n(),i("div",{"data-pagefind-body":!0},s[0]||(s[0]=[p(`<h2 id="优点" tabindex="-1">优点 <a class="header-anchor" href="#优点" aria-label="Permalink to &quot;优点&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>● 无侵入：只做增强不做改变，引入它不会对现有工程产生影响，如丝般顺滑</span></span>
<span class="line"><span></span></span>
<span class="line"><span>● 损耗小：启动即会自动注入基本 CURD，性能基本无损耗，直接面向对象操作</span></span>
<span class="line"><span></span></span>
<span class="line"><span>● 强大的 CRUD 操作：内置通用 Mapper、通用 Service，仅仅通过少量配置即可实现单表大部分 CRUD 操作，更有强大的条件构造器，满足各类使用需求</span></span>
<span class="line"><span></span></span>
<span class="line"><span>● 支持 Lambda 形式调用：通过 Lambda 表达式，方便地编写各类查询条件，无需再担心字段写错</span></span>
<span class="line"><span></span></span>
<span class="line"><span>● 支持主键自动生成：支持多达 4 种主键策略（内含分布式唯一 ID 生成器 - Sequence），可自由配置，完美解决主键问题</span></span>
<span class="line"><span></span></span>
<span class="line"><span>● 支持 ActiveRecord 模式：支持 ActiveRecord 形式调用，实体类只需继承 Model 类即可进行强大的 CRUD 操作</span></span>
<span class="line"><span></span></span>
<span class="line"><span>● 支持自定义全局通用操作：支持全局通用方法注入（ Write once, use anywhere ）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>● 内置代码生成器：采用代码或者 Maven 插件可快速生成 Mapper 、 Model 、 Service 、 Controller 层代码，支持模板引擎，更有超多自定义配置等您来使用</span></span>
<span class="line"><span></span></span>
<span class="line"><span>● 内置分页插件：基于 MyBatis 物理分页，开发者无需关心具体操作，配置好插件之后，写分页等同于普通 List 查询</span></span>
<span class="line"><span></span></span>
<span class="line"><span>● 分页插件支持多种数据库：支持 MySQL、MariaDB、Oracle、DB2、H2、HSQL、SQLite、Postgre、SQLServer 等多种数据库</span></span>
<span class="line"><span></span></span>
<span class="line"><span>● 内置性能分析插件：可输出 SQL 语句以及其执行时间，建议开发测试时启用该功能，能快速揪出慢查询</span></span>
<span class="line"><span></span></span>
<span class="line"><span>● 内置全局拦截插件：提供全表 delete 、 update 操作智能分析阻断，也可自定义拦截规则，预防误操作</span></span></code></pre></div><h2 id="mybatis-标签" tabindex="-1">mybatis 标签 <a class="header-anchor" href="#mybatis-标签" aria-label="Permalink to &quot;mybatis 标签&quot;">​</a></h2><h3 id="_1-if-标签" tabindex="-1">1.if 标签 <a class="header-anchor" href="#_1-if-标签" aria-label="Permalink to &quot;1.if 标签&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>查询的时候因为后面的if判断后拼接的判断条件都要带and连接，所以必须在where后首先接上1=1，防止出错，或者使用where标签</span></span></code></pre></div><h3 id="_2-where-标签" tabindex="-1">2.where 标签 <a class="header-anchor" href="#_2-where-标签" aria-label="Permalink to &quot;2.where 标签&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>MyBatis会将where标签中拼装的SQL语句中多余出来的and和or去掉，但是where只会去掉第一个多出来的and或者or，所以要把and或者or写在前面</span></span></code></pre></div><h3 id="_3-trim-标签" tabindex="-1">3.trim 标签 <a class="header-anchor" href="#_3-trim-标签" aria-label="Permalink to &quot;3.trim 标签&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>prefix：前缀，给拼串后的整个字符串加一个前缀</span></span>
<span class="line"><span>prefixOverrides：前缀覆盖，去掉整个字符串前面多余的字符</span></span>
<span class="line"><span>suffix：后缀，给拼串后的整个字符串加一个后缀</span></span>
<span class="line"><span>suffixOverrides：后缀覆盖，去掉整个字符串后面多余的字符</span></span></code></pre></div><h3 id="_4-choose-标签" tabindex="-1">4.choose 标签 <a class="header-anchor" href="#_4-choose-标签" aria-label="Permalink to &quot;4.choose 标签&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>分支选择：相当于switch-case，含子标签when, otherwise</span></span></code></pre></div><h3 id="_5-set-标签-update-子标签" tabindex="-1">5.set 标签-UPDATE 子标签 <a class="header-anchor" href="#_5-set-标签-update-子标签" aria-label="Permalink to &quot;5.set 标签-UPDATE 子标签&quot;">​</a></h3><h4 id="更新指定项" tabindex="-1">更新指定项 <a class="header-anchor" href="#更新指定项" aria-label="Permalink to &quot;更新指定项&quot;">​</a></h4><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- public void updateEmp(Employee employee); --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">update</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;updateEmp&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   update tbl_employee</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">if</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;lastName!=null&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     last_name=#{lastName},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">if</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;email!=null&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     email=#{email},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">if</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;gender!=null&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      gender=#{gender}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> where id=#{id}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">update</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">注意：set中的if中写的设置语句后的逗号&quot;,&quot;不能省略，不然就无法一次更新多个信息了</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">想达到此效果也可用trim标签完成，只需要将原来的set处的标签改为</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">trim</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> prefix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;set&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> suffixOverrides</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;,&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">trim</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="_6-foreach-标签" tabindex="-1">6.foreach 标签 <a class="header-anchor" href="#_6-foreach-标签" aria-label="Permalink to &quot;6.foreach 标签&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1. collection：指定要遍历的集合</span></span>
<span class="line"><span>2. list 类型的参数会特殊处理封装在 map 中，map 的 key 就叫 list</span></span>
<span class="line"><span>3. item：将当前遍历出的元素赋值给指定的变量</span></span>
<span class="line"><span>4. separator：表示每个元素与每个元素之间的分隔符</span></span>
<span class="line"><span>5. open：为遍历出的结果拼接一个开始的字符</span></span>
<span class="line"><span>6. close：为遍历出的结果拼接一个结束的字符</span></span>
<span class="line"><span>7. index：索引。遍历 list 的时候 index 表示的就是索引，item 就是 map 的值；遍历 map 的时候 index 表示的就是 map 的 key，item 就是 map 的值</span></span>
<span class="line"><span>   作用：可以将 OGNL 表达式绑定到一个变量中，方便后来引用这个变量的值</span></span></code></pre></div><h3 id="_7-bind-标签" tabindex="-1">7.bind 标签 <a class="header-anchor" href="#_7-bind-标签" aria-label="Permalink to &quot;7.bind 标签&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>增删改查标签内还有一个 bind 子标签，是绑定的意思</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;bind name=&quot;_lastName&quot; value=&quot;&#39;%&#39;+lastName+&#39;%&#39;&quot;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>这样就相当于在原先的 lastName 的值的两端加上了%，方便使用 like 查询，这样在接下来写就可以写 like #{*lastName}了，在 Java 的方法中也不用再每次都手动加%了</span></span>
<span class="line"><span>不推荐使用这种方式，要是模糊查询还是每次在 Java 方法中自己加%、*等符号比较好，这样查询的操作自由度要更高，规则有变的情况下不需要更改的配置值</span></span>
<span class="line"><span>8.sql 标签与 include 标签</span></span>
<span class="line"><span>与增删改查标签同级，可以将使用频率比较高的 sql 语句部分写入 sql 标签中</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;sql id=&quot;insertColumn&quot;&gt;</span></span>
<span class="line"><span>  employee_id,last_name,email</span></span>
<span class="line"><span>&lt;/sql&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>insert into employees(</span></span>
<span class="line"><span>  &lt;include refid=&quot;insertColumn&quot;&gt;&lt;/include&gt;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span>当数据库类型不同，导致需要保存的东西不同时，可以在 sql 标签内写&lt;if&gt;子标签判断\\_databaseId 即可</span></span>
<span class="line"><span>在&lt;include&gt;标签内还可以用&lt;property name=&quot;xxx&quot; value=&quot;aaa&quot;&gt;标签自定义一些属性，在&lt;sql&gt;标签中可以用\${xxx(name属性值)}来调用，注意是$不是#</span></span></code></pre></div>`,18)]))}const E=a(e,[["render",l]]);export{o as __pageData,E as default};
