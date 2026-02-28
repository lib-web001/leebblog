import{_ as s,o as n,c as p,ac as e}from"./chunks/framework.CrIZQWiq.js";const u=JSON.parse('{"title":"flutter","description":"","frontmatter":{"tag":["安卓","移动端"]},"headers":[],"relativePath":"articles/前端/flutter.md","filePath":"articles/前端/flutter.md"}'),t={name:"articles/前端/flutter.md"};function l(i,a,r,o,c,d){return n(),p("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1772251022000"},a[0]||(a[0]=[e(`<h1 id="flutter" tabindex="-1">flutter <a class="header-anchor" href="#flutter" aria-label="Permalink to &quot;flutter&quot;">​</a></h1><p>sdk下载：<a href="https://storage.googleapis.com/flutter_infra_release/releases/stable/windows/flutter_windows_v3.13.0-stable.zip" target="_blank" rel="noreferrer">https://storage.googleapis.com/flutter_infra_release/releases/stable/windows/flutter_windows_v3.13.0-stable.zip</a></p><h2 id="flutter-版本管理" tabindex="-1">flutter 版本管理 <a class="header-anchor" href="#flutter-版本管理" aria-label="Permalink to &quot;flutter 版本管理&quot;">​</a></h2><h3 id="安装fvm" tabindex="-1">安装fvm <a class="header-anchor" href="#安装fvm" aria-label="Permalink to &quot;安装fvm&quot;">​</a></h3><ol><li><p>dart pub global activate fvm</p></li><li><p>设置环境变量 FVM C:\\Users\\34377\\AppData\\Local\\Pub\\Cache\\bin</p></li><li><p>安装特定版本的 Flutter，例如 3.4.0：</p></li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fvm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3.4.0</span></span></code></pre></div><ul><li><p>报错 error: RPC failed; curl 92 HTTP/2 stream 0 was not closed cleanly: CANCEL (err 8) error: 8000 bytes of body are still expected fetch-pack: unexpected disconnect while reading sideband packet fatal: early EOF fatal: fetch-pack: invalid index-pack output</p></li><li><p>执行</p></li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http.version</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> HTTP/1.1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http.postBuffer</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3091875328</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http.postBuffer</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1048576000</span></span></code></pre></div><p>切换到指定版本：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fvm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> use</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3.4.0</span></span></code></pre></div><p>查看已安装的 Flutter 版本：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fvm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span></span></code></pre></div><p>如果你在某个项目中想使用特定版本的 Flutter，可以进入该项目并运行：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fvm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> use</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3.4.0</span></span></code></pre></div><p>最后，使用 fvm 命令来执行 Flutter 操作。例如：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fvm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> flutter</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> doctor</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fvm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> flutter</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span></span></code></pre></div><h2 id="flutter-h" tabindex="-1">flutter -h <a class="header-anchor" href="#flutter-h" aria-label="Permalink to &quot;flutter -h&quot;">​</a></h2><p>以管理员身份运行</p><h2 id="flutter-doctor-检测flutter-开发环境" tabindex="-1">flutter doctor 检测flutter 开发环境 <a class="header-anchor" href="#flutter-doctor-检测flutter-开发环境" aria-label="Permalink to &quot;flutter doctor 检测flutter 开发环境&quot;">​</a></h2><h2 id="flutter-doctor-android-licenses" tabindex="-1">flutter doctor --android-licenses <a class="header-anchor" href="#flutter-doctor-android-licenses" aria-label="Permalink to &quot;flutter doctor --android-licenses&quot;">​</a></h2><h2 id="flutter-doctor-执行慢" tabindex="-1">flutter doctor 执行慢 <a class="header-anchor" href="#flutter-doctor-执行慢" aria-label="Permalink to &quot;flutter doctor 执行慢&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>变量名：PUB_HOSTED_URL</span></span>
<span class="line"><span>变量值：https://pub.flutter-io.cn</span></span>
<span class="line"><span>变量名：FLUTTER_STORAGE_BASE_URL</span></span>
<span class="line"><span>变量值：https://storage.flutter-io.cn</span></span></code></pre></div><p>flutter config --android-studio-dir &quot;D:\\gz\\soft\\andstudio&quot; flutter config --android-sdk D:\\gz\\soft\\android_sdk flutter config --android-sdk D:\\gz\\code\\android\\sdk sdkmanager &quot;platform-tools&quot; &quot;platforms;android-30&quot; &quot;build-tools;30.0.3&quot;</p><p>flutter config --android-studio-dir &quot;C:\\Program Files\\Android\\Android Studio&quot; flutter config --android-sdk D:\\gz\\soft\\antroid_sdk</p><p>Android Studio 4.1还未兼容Flutter stable，须手动切换到dev。</p><p>sdkmanager --sdk_root=D:\\gz\\soft\\Android\\sdk &quot;platform-tools&quot; &quot;platforms;android-28&quot; &quot;build-tools;28.0.3&quot;</p><h3 id="执行" tabindex="-1">执行 <a class="header-anchor" href="#执行" aria-label="Permalink to &quot;执行&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    flutter channel dev</span></span></code></pre></div><h2 id="sdkmanager-version" tabindex="-1">sdkmanager --version <a class="header-anchor" href="#sdkmanager-version" aria-label="Permalink to &quot;sdkmanager --version&quot;">​</a></h2><p>环境变量配准</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ANDROID_SDK_ROOT=&quot;C:\\Users\\34377\\AppData\\Local\\Android\\Sdk&quot;</span></span>
<span class="line"><span>%ANDROID_SDK_ROOT%\\platform-tools\\bin</span></span>
<span class="line"><span>%ANDROID_SDK_ROOT%\\tools\\bin</span></span></code></pre></div><p>外部教程链接：<a href="https://wiki.ducafecat.tech/blog/translation/7-flutter-the-advanced-layout-rule-even-beginners-must-know.html" target="_blank" rel="noreferrer">https://wiki.ducafecat.tech/blog/translation/7-flutter-the-advanced-layout-rule-even-beginners-must-know.html</a></p><h2 id="启动flutter项目" tabindex="-1">启动flutter项目 <a class="header-anchor" href="#启动flutter项目" aria-label="Permalink to &quot;启动flutter项目&quot;">​</a></h2><p>main.dart文件 右键运行和调试</p><ul><li>flutter pub get</li><li>flutter pub upgrade --major-versions 这将更新你的项目中所有包到其兼容的最新版本，并解决依赖冲突。</li></ul><h2 id="基本结构" tabindex="-1">基本结构 <a class="header-anchor" href="#基本结构" aria-label="Permalink to &quot;基本结构&quot;">​</a></h2><p>MaterialApp 是一个方便的 Widget，它封装了应用程序实现 Material Design 所需要的</p><p>一些 Widget。一般作为顶层widget 使用。</p><p>常用的属性：</p><ol><li><p>home（主页）</p></li><li><p>title（标题）</p></li><li><p>color（颜色）</p></li><li><p>theme（主题）</p></li><li><p>routes（路由）</p></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class MyApp extends StatelessWidget {</span></span>
<span class="line"><span>  const MyApp({super.key});</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>  // This widget is the root of your application.</span></span>
<span class="line"><span>  @override</span></span>
<span class="line"><span>  Widget build(BuildContext context) {</span></span>
<span class="line"><span>    return MaterialApp(</span></span>
<span class="line"><span>      title: &#39;Flutter Demo&#39;,</span></span>
<span class="line"><span>      theme: ThemeData(</span></span>
<span class="line"><span>        primarySwatch: Colors.red,</span></span>
<span class="line"><span>      ),</span></span>
<span class="line"><span>      home: const MyHomePage(title: &#39;Flutter Demo Home Page&#39;),</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to &quot;语法&quot;">​</a></h2><ul><li>_ 设置为私有变量</li><li>obj.add()..delete()..update() 链式调用</li><li>dart 调用库 import &#39;package:startup_namer/pages/home_page.dart&#39;;</li><li>dart 调用库 import &#39;package:flutter/material.dart&#39;;</li><li>获取环境变量</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const boolkReleaseMode = bool.fromEnvironment(&#39;dart.vm.product&#39;, defaultValue: true);</span></span></code></pre></div><ul><li>网络图片</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Image.network(</span></span>
<span class="line"><span>  &quot;&lt;https://jf-temp-1301446188.cos.ap-guangzhou.myqcloud.com/logo2&gt;&quot;,</span></span>
<span class="line"><span>  alignment: Alignment.topCenter,</span></span>
<span class="line"><span>  repeat: ImageRepeat.noRepeat,</span></span>
<span class="line"><span>  // color: Colors.red,</span></span>
<span class="line"><span>  fit: BoxFit.cover,</span></span>
<span class="line"><span>  // colorBlendMode: BlendMode.colorDodge,</span></span>
<span class="line"><span>)</span></span></code></pre></div><ul><li>动态列表</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>List list=List.generator(idx=&gt;&quot;item$idx&quot;)</span></span>
<span class="line"><span>ListView.builder(itemCount:list.length,itemBuilder:(context,idx)=&gt;Text(list[idx]))</span></span></code></pre></div><ul><li>设置内边距</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>padding: const EdgeInsets.fromLTRB(20, 20, 20, 10);</span></span></code></pre></div><ul><li>弹性布局</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Flex(</span></span>
<span class="line"><span>  direction: Axis.vertical,</span></span>
<span class="line"><span>  mainAxisAlignment: MainAxisAlignment.center,</span></span>
<span class="line"><span>  crossAxisAlignment: CrossAxisAlignment.stretch,</span></span>
<span class="line"><span>  children: const [],</span></span>
<span class="line"><span>);</span></span></code></pre></div><ul><li>流式布局</li></ul><div class="language-plaintext vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plaintext</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>List&lt;Widget&gt; btns =</span></span>
<span class="line"><span>          // TextButton(onPressed: () =&gt; print(&#39;a&#39;), child: const Text(&#39;你好&#39;));</span></span>
<span class="line"><span>          List.generate(</span></span>
<span class="line"><span>              10,</span></span>
<span class="line"><span>              (index) =&gt; ElevatedButton(</span></span>
<span class="line"><span>                  style: ElevatedButton.styleFrom(</span></span>
<span class="line"><span>                    foregroundColor: Colors.white,</span></span>
<span class="line"><span>                    backgroundColor: Colors.green, // 按钮文字颜色</span></span>
<span class="line"><span>                    // padding: const EdgeInsets.symmetric(</span></span>
<span class="line"><span>                    //     vertical: 20.0, horizontal: 40.0), // 内边距</span></span>
<span class="line"><span>                  ),</span></span>
<span class="line"><span>                  // themeData: ThemeData.dark(),</span></span>
<span class="line"><span>                  onPressed: () =&gt; print(&#39;a$index&#39;),</span></span>
<span class="line"><span>                  child: Text(</span></span>
<span class="line"><span>                    &#39;你好$index&#39;,</span></span>
<span class="line"><span>                    selectionColor: Colors.amber,</span></span>
<span class="line"><span>                  )));</span></span>
<span class="line"><span>      // RaisedButton btn = ElevatedButton(</span></span>
<span class="line"><span>      return SizedBox(</span></span>
<span class="line"><span>          width: MediaQuery.of(context).size.width,</span></span>
<span class="line"><span>          height: 200,</span></span>
<span class="line"><span>          child: Wrap(</span></span>
<span class="line"><span>            direction: Axis.vertical,</span></span>
<span class="line"><span>            runSpacing: 10,</span></span>
<span class="line"><span>            spacing: 10,</span></span>
<span class="line"><span>            crossAxisAlignment: WrapCrossAlignment.center,</span></span>
<span class="line"><span>            alignment: WrapAlignment.center,</span></span>
<span class="line"><span>            // runSpacing: 10,</span></span>
<span class="line"><span>            // spacing: 10,</span></span>
<span class="line"><span>            children: btns,</span></span>
<span class="line"><span>          ));</span></span></code></pre></div><ul><li>路由跳转到组件</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Navigator.of(context).push(MaterialPageRoute(</span></span>
<span class="line"><span>                            builder: (context) =&gt; SearchPage()))</span></span></code></pre></div><ul><li>全局路由地址 配置 &amp; 跳转路径</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Map&lt;String, dynamic&gt; params = {</span></span>
<span class="line"><span>                      &quot;id&quot;: index + 1,</span></span>
<span class="line"><span>                      &#39;name&#39;: &#39;John Doe&#39;,</span></span>
<span class="line"><span>                      &#39;age&#39;: 30,</span></span>
<span class="line"><span>                      &#39;email&#39;: &#39;johndoe@example.com&#39;</span></span>
<span class="line"><span>                    };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    Navigator.pushNamed(context, &#39;/routePage&#39;,</span></span>
<span class="line"><span>                        arguments: params); // 跳转路由并传递参数</span></span>
<span class="line"><span>                        </span></span>
<span class="line"><span>class RoutePage extends StatelessWidget {</span></span>
<span class="line"><span>  @override</span></span>
<span class="line"><span>  Widget build(BuildContext context) {</span></span>
<span class="line"><span>    Map&lt;String, dynamic&gt; params =</span></span>
<span class="line"><span>        ModalRoute.of(context)!.settings.arguments as Map&lt;String, dynamic&gt;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return Scaffold(</span></span>
<span class="line"><span>      appBar: AppBar(title: const Text(&#39;无状态组件2&#39;)),</span></span>
<span class="line"><span>      body: Text(&#39;RoutePage1\${params[&quot;name&quot;]} id = \${params[&quot;id&quot;]}&#39;),</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>创建有状态组件 重写 createState方法 返回对应的 State(Widget) 对象</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class RoutePage extends StatefulWidget {</span></span>
<span class="line"><span>  @override</span></span>
<span class="line"><span>  _RoutePageState createState() =&gt; _RoutePageState(); // 返回对应的 State 对象</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class _RoutePageState extends State&lt;RoutePage&gt; {</span></span>
<span class="line"><span>  @override</span></span>
<span class="line"><span>  Widget build(BuildContext context) {</span></span>
<span class="line"><span>    return Scaffold(</span></span>
<span class="line"><span>      appBar: AppBar(title: const Text(&#39;RoutePage1&#39;)),</span></span>
<span class="line"><span>      body: const Text(&#39;RoutePage1&#39;),</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>创建无状态组件 重写build方法 返回对应的 Widget 对象</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class RoutePage extends StatelessWidget {</span></span>
<span class="line"><span>  @override</span></span>
<span class="line"><span>  Widget build(BuildContext context) {</span></span>
<span class="line"><span>    return Scaffold(</span></span>
<span class="line"><span>      appBar: AppBar(title: const Text(&#39;RoutePage1&#39;)),</span></span>
<span class="line"><span>      body: const Text(&#39;RoutePage1&#39;),</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>form 表单</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class MyForm extends State&lt;MyListView&gt; {</span></span>
<span class="line"><span>  final GlobalKey&lt;FormState&gt; _formKey = GlobalKey&lt;FormState&gt;();</span></span>
<span class="line"><span>  String _name = &#39;&#39;;</span></span>
<span class="line"><span>  String _email = &#39;&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  final TextEditingController _nameController = TextEditingController();</span></span>
<span class="line"><span>  final TextEditingController _emailController = TextEditingController();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  @override</span></span>
<span class="line"><span>  Widget build(BuildContext context) {</span></span>
<span class="line"><span>    return Form(</span></span>
<span class="line"><span>      key: _formKey,</span></span>
<span class="line"><span>      child: Column(children: [</span></span>
<span class="line"><span>        TextFormField(</span></span>
<span class="line"><span>          decoration: const InputDecoration(hintText: &#39;请输入姓名&#39;),</span></span>
<span class="line"><span>          validator: (value) {</span></span>
<span class="line"><span>            if (value == null || value.isEmpty) {</span></span>
<span class="line"><span>              return &#39;请输入姓名&#39;;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            return null;</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          // controller: _nameController,</span></span>
<span class="line"><span>          onChanged: (value) {</span></span>
<span class="line"><span>            // _name = value;</span></span>
<span class="line"><span>            setState(() {</span></span>
<span class="line"><span>              _name = value;</span></span>
<span class="line"><span>            });</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>        ),</span></span>
<span class="line"><span>        TextFormField(</span></span>
<span class="line"><span>          decoration: const InputDecoration(hintText: &#39;请输入密码&#39;),</span></span>
<span class="line"><span>          validator: (value) {</span></span>
<span class="line"><span>            if (value == null || value.isEmpty) {</span></span>
<span class="line"><span>              return &#39;请输入密码&#39;;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            return null;</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          // controller: _emailController,</span></span>
<span class="line"><span>          onChanged: (value) {</span></span>
<span class="line"><span>            // _name = value;</span></span>
<span class="line"><span>            setState(() {</span></span>
<span class="line"><span>              _email = value;</span></span>
<span class="line"><span>            });</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>        ),</span></span>
<span class="line"><span>        const SizedBox(height: 16),</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 提交按钮</span></span>
<span class="line"><span>        ElevatedButton(</span></span>
<span class="line"><span>          onPressed: () {</span></span>
<span class="line"><span>            if (_formKey.currentState!.validate()) {</span></span>
<span class="line"><span>              // 如果验证通过，打印结果</span></span>
<span class="line"><span>              print(&#39;姓名: $_name&#39;);</span></span>
<span class="line"><span>              print(&#39;邮箱: $_email&#39;);</span></span>
<span class="line"><span>              // 提交逻辑或其他操作</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>              // 如果验证不通过，显示错误信息</span></span>
<span class="line"><span>              print(&#39;表单验证失败&#39;);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          child: const Text(&#39;提交&#39;),</span></span>
<span class="line"><span>        ),</span></span>
<span class="line"><span>      ]),</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>状态管理</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import &#39;package:flutter/material.dart&#39;;</span></span>
<span class="line"><span>import &#39;package:provider/provider.dart&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Counter with ChangeNotifier {</span></span>
<span class="line"><span>  int _count = 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  int get count =&gt; _count;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  void increment() {</span></span>
<span class="line"><span>    _count++;</span></span>
<span class="line"><span>    notifyListeners(); // 当状态改变时通知所有监听者</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  void decrement() {</span></span>
<span class="line"><span>    _count--;</span></span>
<span class="line"><span>    notifyListeners();</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 注入</span></span>
<span class="line"><span>class MyApp extends StatelessWidget {</span></span>
<span class="line"><span>  @override</span></span>
<span class="line"><span>  Widget build(BuildContext context) {</span></span>
<span class="line"><span>    return ChangeNotifierProvider(</span></span>
<span class="line"><span>        create: (context) =&gt; Counter(),</span></span>
<span class="line"><span>        child: MaterialApp(</span></span>
<span class="line"><span>          routes: {</span></span>
<span class="line"><span>            &#39;/routePage&#39;: (context) =&gt; RoutePage(),</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          home: AppPage(),</span></span>
<span class="line"><span>        ));</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 接收</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return Center(child: Consumer&lt;Counter&gt;(// 使用Consumer来监听Counter的变化</span></span>
<span class="line"><span>          builder: (context, counter, child) {</span></span>
<span class="line"><span>        return Row(</span></span>
<span class="line"><span>          children: [</span></span>
<span class="line"><span>            Column(</span></span>
<span class="line"><span>              children: [Text(&#39;as\${counter.count}&#39;)],</span></span>
<span class="line"><span>            ),</span></span>
<span class="line"><span>            Column(</span></span>
<span class="line"><span>              children: [</span></span>
<span class="line"><span>                TextButton(</span></span>
<span class="line"><span>                  child: Text(&#39;点击\${counter.count}&#39;),</span></span>
<span class="line"><span>                  onPressed: () {</span></span>
<span class="line"><span>                    counter.increment();</span></span>
<span class="line"><span>                  },</span></span>
<span class="line"><span>                )</span></span>
<span class="line"><span>              ],</span></span>
<span class="line"><span>            )</span></span>
<span class="line"><span>          ],</span></span>
<span class="line"><span>        );</span></span>
<span class="line"><span>      }));</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
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
<span class="line"><span>import &#39;package:flutter_easyrefresh/material_footer.dart&#39;;</span></span></code></pre></div>`,67)]))}const g=s(t,[["render",l]]);export{u as __pageData,g as default};
