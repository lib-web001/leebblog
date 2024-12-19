import{_ as s,o as e,c as n,a6 as p}from"./chunks/framework.DxlwMnnj.js";const u=JSON.parse('{"title":"flutter","description":"","frontmatter":{"tag":["安卓","移动端"]},"headers":[],"relativePath":"articles/前端/flutter.md","filePath":"articles/前端/flutter.md"}'),t={name:"articles/前端/flutter.md"};function r(i,a,l,o,d,c){return e(),n("div",{"data-pagefind-body":!0},a[0]||(a[0]=[p(`<h1 id="flutter" tabindex="-1">flutter <a class="header-anchor" href="#flutter" aria-label="Permalink to &quot;flutter&quot;">​</a></h1><p>sdk下载：<a href="https://storage.googleapis.com/flutter_infra_release/releases/stable/windows/flutter_windows_v3.13.0-stable.zip" target="_blank" rel="noreferrer">https://storage.googleapis.com/flutter_infra_release/releases/stable/windows/flutter_windows_v3.13.0-stable.zip</a></p><h2 id="flutter-h" tabindex="-1">flutter -h <a class="header-anchor" href="#flutter-h" aria-label="Permalink to &quot;flutter -h&quot;">​</a></h2><p>以管理员身份运行</p><h2 id="flutter-doctor-检测flutter-开发环境" tabindex="-1">flutter doctor 检测flutter 开发环境 <a class="header-anchor" href="#flutter-doctor-检测flutter-开发环境" aria-label="Permalink to &quot;flutter doctor 检测flutter 开发环境&quot;">​</a></h2><h2 id="flutter-doctor-android-licenses" tabindex="-1">flutter doctor --android-licenses <a class="header-anchor" href="#flutter-doctor-android-licenses" aria-label="Permalink to &quot;flutter doctor --android-licenses&quot;">​</a></h2><h2 id="flutter-doctor-执行慢" tabindex="-1">flutter doctor 执行慢 <a class="header-anchor" href="#flutter-doctor-执行慢" aria-label="Permalink to &quot;flutter doctor 执行慢&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>变量名：PUB_HOSTED_URL</span></span>
<span class="line"><span>变量值：https://pub.flutter-io.cn</span></span>
<span class="line"><span>变量名：FLUTTER_STORAGE_BASE_URL</span></span>
<span class="line"><span>变量值：https://storage.flutter-io.cn</span></span></code></pre></div><p>flutter config --android-studio-dir &quot;D:\\gz\\soft\\andstudio&quot; flutter config --android-sdk D:\\gz\\soft\\android_sdk flutter config --android-sdk D:\\gz\\code\\android\\sdk sdkmanager &quot;platform-tools&quot; &quot;platforms;android-30&quot; &quot;build-tools;30.0.3&quot;</p><p>flutter config --android-studio-dir &quot;C:\\Program Files\\Android\\Android Studio&quot; flutter config --android-sdk D:\\gz\\soft\\antroid_sdk</p><p>Android Studio 4.1还未兼容Flutter stable，须手动切换到dev。</p><p>sdkmanager --sdk_root=D:\\gz\\soft\\Android\\sdk &quot;platform-tools&quot; &quot;platforms;android-28&quot; &quot;build-tools;28.0.3&quot;</p><h3 id="执行" tabindex="-1">执行 <a class="header-anchor" href="#执行" aria-label="Permalink to &quot;执行&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    flutter channel dev</span></span></code></pre></div><h2 id="sdkmanager-version" tabindex="-1">sdkmanager --version <a class="header-anchor" href="#sdkmanager-version" aria-label="Permalink to &quot;sdkmanager --version&quot;">​</a></h2><p>环境变量配准</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ANDROID_SDK_ROOT=&quot;C:\\Users\\34377\\AppData\\Local\\Android\\Sdk&quot;</span></span>
<span class="line"><span>%ANDROID_SDK_ROOT%\\platform-tools\\bin</span></span>
<span class="line"><span>%ANDROID_SDK_ROOT%\\tools\\bin</span></span></code></pre></div><p>外部教程链接：<a href="https://wiki.ducafecat.tech/blog/translation/7-flutter-the-advanced-layout-rule-even-beginners-must-know.html" target="_blank" rel="noreferrer">https://wiki.ducafecat.tech/blog/translation/7-flutter-the-advanced-layout-rule-even-beginners-must-know.html</a></p><h2 id="启动flutter项目" tabindex="-1">启动flutter项目 <a class="header-anchor" href="#启动flutter项目" aria-label="Permalink to &quot;启动flutter项目&quot;">​</a></h2><p>main.dart文件 右键运行和调试</p><h2 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to &quot;语法&quot;">​</a></h2><ul><li>_ 设置为私有变量</li><li>obj.add()..delete()..update() 链式调用</li><li>dart 调用库 import &#39;package:startup_namer/pages/home_page.dart&#39;;</li><li>dart 调用库 import &#39;package:flutter/material.dart&#39;;</li><li>获取环境变量</li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolkReleaseMode</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bool.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fromEnvironment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;dart.vm.product&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, defaultValue: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><ul><li>网络图片</li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Image.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">network</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;&lt;https://jf-temp-1301446188.cos.ap-guangzhou.myqcloud.com/logo2&gt;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  alignment: Alignment.topCenter,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  repeat: ImageRepeat.noRepeat,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // color: Colors.red,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  fit: BoxFit.cover,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // colorBlendMode: BlendMode.colorDodge,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><ul><li>动态列表</li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">List list</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">List.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">generator</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">idx</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;item$idx&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ListView.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">builder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(itemCount:list.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,itemBuilder:(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">context</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">idx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(list[idx]))</span></span></code></pre></div><div class="language-flutter vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">flutter</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>import &#39;package:flutter/material.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter/services.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_localizations/flutter_localizations.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:provider/provider.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:provider/single_child_widget.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:wanandroid/common/constant.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:wanandroid/common/router.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:wanandroid/common/utils.dart&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>import &#39;package:wanandroid/common/values/colors.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:wanandroid/common/values/strings.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:wanandroid/common/values/styles.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:wanandroid/pages/home/home_page.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:wanandroid/pages/login/login_page.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:wanandroid/pages/splash/splash_page.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:wanandroid/provider/app.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:wanandroid/provider/user.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:wanandroid/provider/theme.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:wanandroid/provider/locale.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:wanandroid/provider/system.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:wanandroid/provider/http.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:wanandroid/provider/sp.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:wanandroid/provider/setting.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:wanandroid/provider/collect.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:wanandroid/provider/search.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:wanandroid/provider/article.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:wanandroid/provider/tree.dart&#39;; </span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>import &#39;package:provider/provider.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter/material.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_localizations/flutter_localizations.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_screenutil/flutter_screenutil.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/easy_refresh.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/material_footer.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/material_header.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/taurus_footer.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/taurus_header.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/phoenix_footer.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/phoenix_header.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/taurus_theme.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/phoenix_theme.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/easy_refresh.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/material_footer.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/material_header.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/taurus_footer.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/taurus_header.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/phoenix_footer.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/phoenix_header.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/phoenix_theme.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/easy_refresh.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/material_footer.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/material_header.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/taurus_footer.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/taurus_header.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/phoenix_footer.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/phoenix_header.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/phoenix_theme.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/easy_refresh.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/material_footer.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/material_header.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/taurus_footer.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/taurus_header.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/phoenix_footer.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/phoenix_header.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/phoenix_theme.dart&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/easy_refresh.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/material_footer.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/material_header.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/taurus_footer.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/taurus_header.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/phoenix_footer.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/phoenix_header.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/phoenix_theme.dart&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/easy_refresh.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/material_footer.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/material_header.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/taurus_footer.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/taurus_header.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/phoenix_footer.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/phoenix_header.dart&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/phoenix_theme.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/easy_refresh.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/material_footer.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/material_header.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/taurus_footer.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/taurus_header.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/phoenix_footer.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/phoenix_header.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/phoenix_theme.dart&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/easy_refresh.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/material_footer.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/material_header.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/taurus_footer.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/taurus_header.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/phoenix_footer.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/phoenix_header.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/phoenix_theme.dart&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/easy_refresh.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/material_footer.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/material_header.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/taurus_footer.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/taurus_header.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/phoenix_footer.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/phoenix_header.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/phoenix_theme.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/easy_refresh.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:flutter_easyrefresh/material_footer.dart&#39;;</span></span></code></pre></div>`,28)]))}const f=s(t,[["render",r]]);export{u as __pageData,f as default};
