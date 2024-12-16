import{_ as a,o as n,c as i,a6 as p}from"./chunks/framework.DxlwMnnj.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{"tag":["vue","前端"]},"headers":[],"relativePath":"articles/vue/vue3配置.md","filePath":"articles/vue/vue3配置.md"}'),e={name:"articles/vue/vue3配置.md"};function t(l,s,h,r,o,c){return n(),i("div",{"data-pagefind-body":!0},s[0]||(s[0]=[p(`<h4 id="安装-volar-插件" tabindex="-1">安装 Volar 插件 <a class="header-anchor" href="#安装-volar-插件" aria-label="Permalink to &quot;安装 Volar 插件&quot;">​</a></h4><p>vue language feature</p><h4 id="禁用-builtin-typescript" tabindex="-1">禁用 @builtin typescript <a class="header-anchor" href="#禁用-builtin-typescript" aria-label="Permalink to &quot;禁用 @builtin typescript&quot;">​</a></h4><h4 id="cnpm" tabindex="-1">cnpm <a class="header-anchor" href="#cnpm" aria-label="Permalink to &quot;cnpm&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm install -g cnpm --registry=https://registry.npm.taobao.org 设置 npm config set registry https://registry.npm.taobao.org</span></span></code></pre></div><h4 id="安装-vue-脚手架" tabindex="-1">安装 vue 脚手架 <a class="header-anchor" href="#安装-vue-脚手架" aria-label="Permalink to &quot;安装 vue 脚手架&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>cnpm install @vue/cli -g</span></span></code></pre></div><h4 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.editorconfig</span></span>
<span class="line"><span># http://editorconfig.org</span></span>
<span class="line"><span></span></span>
<span class="line"><span>root = true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[*] # 表示所有文件适用</span></span>
<span class="line"><span>charset = utf-8 # 设置文件字符集为 utf-8</span></span>
<span class="line"><span>indent_style = space # 缩进风格（tab | space）</span></span>
<span class="line"><span>indent_size = 2 # 缩进大小</span></span>
<span class="line"><span>end_of_line = lf # 控制换行类型(lf | cr | crlf)</span></span>
<span class="line"><span>trim_trailing_whitespace = true # 去除行首的任意空白字符</span></span>
<span class="line"><span>insert_final_newline = true # 始终在文件末尾插入一个新行</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[*.md] # 表示仅 md 文件适用以下规则</span></span>
<span class="line"><span>max_line_length = off</span></span>
<span class="line"><span>trim_trailing_whitespace = false</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>安装插件 EditorConfig for VS Code</span></span></code></pre></div><h4 id="使用-prettier" tabindex="-1">使用 prettier <a class="header-anchor" href="#使用-prettier" aria-label="Permalink to &quot;使用 prettier&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm install prettier -D</span></span>
<span class="line"><span>.prettierrc文件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;useTabs&quot;: false,</span></span>
<span class="line"><span>  &quot;tabWidth&quot;: 2,</span></span>
<span class="line"><span>  &quot;printWidth&quot;: 80,</span></span>
<span class="line"><span>  &quot;singleQuote&quot;: true,</span></span>
<span class="line"><span>  &quot;trailingComma&quot;: &quot;none&quot;,</span></span>
<span class="line"><span>  &quot;semi&quot;: false</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.prettierignore文件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/dist/*</span></span>
<span class="line"><span>.local</span></span>
<span class="line"><span>.output.js</span></span>
<span class="line"><span>/node_modules/**</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**/*.svg</span></span>
<span class="line"><span>**/*.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/public/*</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>安装prettier插件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>package.json -&gt;     &quot;prettier&quot;: &quot;prettier --write .&quot;</span></span></code></pre></div><h2 id="setup-语法让我们不用再一个一个的把变量和方法都-return-出去就能在模板上使用-大大的解放了我们的双手。然而对于一些常用的-vueapi-比如-ref、computed、watch-等-还是每次都需要我们在页面上手动进行-import" tabindex="-1">setup 语法让我们不用再一个一个的把变量和方法都 return 出去就能在模板上使用，大大的解放了我们的双手。然而对于一些常用的 VueAPI，比如 ref、computed、watch 等，还是每次都需要我们在页面上手动进行 import <a class="header-anchor" href="#setup-语法让我们不用再一个一个的把变量和方法都-return-出去就能在模板上使用-大大的解放了我们的双手。然而对于一些常用的-vueapi-比如-ref、computed、watch-等-还是每次都需要我们在页面上手动进行-import" aria-label="Permalink to &quot;setup 语法让我们不用再一个一个的把变量和方法都 return 出去就能在模板上使用，大大的解放了我们的双手。然而对于一些常用的 VueAPI，比如 ref、computed、watch 等，还是每次都需要我们在页面上手动进行 import&quot;">​</a></h2><p>我们可以通过 unplugin-auto-import 实现自动导入，无需 import 即可在文件里使用 Vue 的 API。</p><h3 id="npm-i-unplugin-auto-import-d" tabindex="-1">npm i unplugin-auto-import -D <a class="header-anchor" href="#npm-i-unplugin-auto-import-d" aria-label="Permalink to &quot;npm i unplugin-auto-import -D&quot;">​</a></h3><h3 id="npm-i-vite-plugin-vue-setup-extend-d" tabindex="-1">npm i vite-plugin-vue-setup-extend -D <a class="header-anchor" href="#npm-i-vite-plugin-vue-setup-extend-d" aria-label="Permalink to &quot;npm i vite-plugin-vue-setup-extend -D&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// vite.config.ts</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { defineConfig } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vite&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> AutoImport </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;unplugin-auto-import/vite&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> vue </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@vitejs/plugin-vue&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> VueSetupExtend </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vite-plugin-vue-setup-extend&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  plugins: [</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    VueSetupExtend</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 可以直接在 script 标签上定义 name</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    vue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      refTransform: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 开启 ref 转换 $ref &quot;@vue/compiler-sfc&quot;: &quot;^3.2.5&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }),</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    AutoImport</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // dts: &#39;src/auto-imports.d.ts&#39;, // 可以自定义文件生成的位置，默认是根目录下</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      imports: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;vue&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  resolve: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    extensions: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;.js&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;.ts&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;.jsx&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;.tsx&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;.json&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;.vue&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 导入时省略后缀</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><h2 id="解决-eslint-报错问题" tabindex="-1">解决 eslint 报错问题 <a class="header-anchor" href="#解决-eslint-报错问题" aria-label="Permalink to &quot;解决 eslint 报错问题&quot;">​</a></h2><p>在没有 import 的情况下使用会导致 eslint 提示报错，可以通过在 eslintrc.js 安装插件<strong>vue-global-api</strong>解决。 // 安装依赖</p><h2 id="npm-i-vue-global-api-d" tabindex="-1">npm i vue-global-api -D <a class="header-anchor" href="#npm-i-vue-global-api-d" aria-label="Permalink to &quot;npm i vue-global-api -D&quot;">​</a></h2><p>// eslintrc.js</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  extends: [</span></span>
<span class="line"><span>    &#39;vue-global-api&#39;</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,21)]))}const u=a(e,[["render",t]]);export{d as __pageData,u as default};
