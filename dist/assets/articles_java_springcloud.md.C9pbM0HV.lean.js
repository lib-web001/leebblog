import{_ as s,o as n,c as e,a6 as p}from"./chunks/framework.DxlwMnnj.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{"tag":["java"]},"headers":[],"relativePath":"articles/java/springcloud.md","filePath":"articles/java/springcloud.md"}'),l={name:"articles/java/springcloud.md"};function i(t,a,c,o,r,d){return n(),e("div",{"data-pagefind-body":!0},a[0]||(a[0]=[p(`<h2 id="sentinel-ali-流量卫兵" tabindex="-1">sentinel ali 流量卫兵 <a class="header-anchor" href="#sentinel-ali-流量卫兵" aria-label="Permalink to &quot;sentinel ali 流量卫兵&quot;">​</a></h2><h2 id="eureka-三步" tabindex="-1">eureka 三步 <a class="header-anchor" href="#eureka-三步" aria-label="Permalink to &quot;eureka 三步&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1.配eurekaserver eureka.client.service-url.defaultZone: eurekaserver地址相同因为要集群</span></span>
<span class="line"><span>2.用户订单微服务注册到eurekaserver中</span></span>
<span class="line"><span>3.服务发现将eureka的配置信息copy到微服务中去</span></span></code></pre></div><h2 id="负载均衡策略" tabindex="-1">负载均衡策略 <a class="header-anchor" href="#负载均衡策略" aria-label="Permalink to &quot;负载均衡策略&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>随机</span></span>
<span class="line"><span>轮询</span></span>
<span class="line"><span>restryrule （重试）</span></span>
<span class="line"><span>clientconfigurationloadbalancerule （客户端轮询）</span></span>
<span class="line"><span>默认根据时区选择 轮询</span></span>
<span class="line"><span>重写轮询算法实现irule接口</span></span></code></pre></div><h2 id="nacos" tabindex="-1">nacos <a class="header-anchor" href="#nacos" aria-label="Permalink to &quot;nacos&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>服务分级存储模型</span></span>
<span class="line"><span>1级服务</span></span>
<span class="line"><span>2级集群</span></span>
<span class="line"><span>3级地域</span></span></code></pre></div><h2 id="namespace-和-cluster-区别" tabindex="-1">namespace 和 cluster 区别 <a class="header-anchor" href="#namespace-和-cluster-区别" aria-label="Permalink to &quot;namespace 和 cluster 区别&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>namespace环境隔离,完全隔离不通namespace之间的服务不能访问,根据namespaceid划分</span></span>
<span class="line"><span>cluster 地域划分，相同地域优先访问，其次去找其他地域的集群</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ephemeral 区分临时实例和非临时实例 健康状态变了  亲生和非亲生</span></span>
<span class="line"><span></span></span>
<span class="line"><span>nacos和eureka区别</span></span>
<span class="line"><span>nacos当服务服务不可用时会主动推送消息告诉服务调用者,eureka则不会</span></span>
<span class="line"><span>server1-&gt;30秒一次pull&gt;server3 (eureka)</span></span>
<span class="line"><span>service2-&gt;pull-&gt;&lt;push&lt;(nacos)</span></span>
<span class="line"><span>cap模式 (一致性，可用性，分区容错性)</span></span>
<span class="line"><span>一致性和可用性不可能同时存在</span></span>
<span class="line"><span>eureka ap模式</span></span>
<span class="line"><span>nacos ap模式当服务提供者中有非临时实例则会变化成为cp模式</span></span>
<span class="line"><span>当订单交易的时候选择cp</span></span></code></pre></div><h2 id="feign" tabindex="-1">feign <a class="header-anchor" href="#feign" aria-label="Permalink to &quot;feign&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>加入依赖</span></span>
<span class="line"><span>@enabledfeignclients</span></span>
<span class="line"><span>写client</span></span>
<span class="line"><span>@feignclien(&quot;service&quot;)</span></span>
<span class="line"><span>@get(&quot;*&quot;)</span></span></code></pre></div><h2 id="sentinel-流控-、降级处理、监控" tabindex="-1">sentinel 流控 、降级处理、监控 <a class="header-anchor" href="#sentinel-流控-、降级处理、监控" aria-label="Permalink to &quot;sentinel 流控 、降级处理、监控&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>线程隔离两种方式</span></span>
<span class="line"><span>线程池隔离，信号量（默认）</span></span>
<span class="line"><span>超时异步</span></span></code></pre></div><h2 id="断路器的三个状态" tabindex="-1">断路器的三个状态 <a class="header-anchor" href="#断路器的三个状态" aria-label="Permalink to &quot;断路器的三个状态&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>closed open 半开</span></span></code></pre></div><h2 id="流控模式" tabindex="-1">流控模式 <a class="header-anchor" href="#流控模式" aria-label="Permalink to &quot;流控模式&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>直接,关联,链路</span></span>
<span class="line"><span>流控效果</span></span>
<span class="line"><span>快速失败, 渐变 3 默认 ，等待</span></span></code></pre></div><h2 id="seata-分布式事务" tabindex="-1">seata 分布式事务 <a class="header-anchor" href="#seata-分布式事务" aria-label="Permalink to &quot;seata 分布式事务&quot;">​</a></h2>`,18)]))}const g=s(l,[["render",i]]);export{u as __pageData,g as default};
