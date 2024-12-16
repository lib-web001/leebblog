import{_ as n,o as i,c as p,a6 as e}from"./chunks/framework.DxlwMnnj.js";const a="/assets/git.BWlNaqv5.png",k=JSON.parse('{"title":"git 初始化 配置","description":"","frontmatter":{},"headers":[],"relativePath":"articles/其他/git.md","filePath":"articles/其他/git.md"}'),l={name:"articles/其他/git.md"};function t(h,s,c,o,g,r){return i(),p("div",{"data-pagefind-body":!0},s[0]||(s[0]=[e(`<h1 id="git-初始化-配置" tabindex="-1">git 初始化 配置 <a class="header-anchor" href="#git-初始化-配置" aria-label="Permalink to &quot;git 初始化 配置&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1、在要推送的内容里面右键选择 git bash here</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2、输入 git init 初始化仓库, 本地会生成一个 .git 文件夹</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3、然后输入 git remote add origin https://gitee.com/仓库</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4、使用 git pull origin master 命令将码云的仓库 pull 到本地</span></span>
<span class="line"><span></span></span>
<span class="line"><span>5、git add . (别忘记.)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>6、git commit -m &#39;描述新添加的文件内容&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>7、git push origin master 将本地仓库推送到远程仓库</span></span>
<span class="line"><span></span></span>
<span class="line"><span>8、git 忽略 husky校验 git commit -m &quot;feat: 接口对接&quot; --no-verify</span></span></code></pre></div><h2 id="git-sh脚本" tabindex="-1">git sh脚本 <a class="header-anchor" href="#git-sh脚本" aria-label="Permalink to &quot;git sh脚本&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 远程 Git 仓库地址</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">REMOTE_REPO_URL</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;git@github.com:SlovinG/sloving.github.io.git&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 远程 Git 仓库分支</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">REMOTE_BRANCH</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;master&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 初始化 Git 仓库（如果尚未初始化）</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;.git&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ]; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">then</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 检查远程仓库是否已经存在</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> !</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remote</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> grep</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -q</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;origin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">then</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 添加远程仓库</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remote</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $REMOTE_REPO_URL</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 拉取远程仓库的最新更改</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pull</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $REMOTE_BRANCH</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 添加所有更改到暂存区</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 提交更改</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Deploy updates from local project folder&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 推送更改到远程仓库</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $REMOTE_BRANCH</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Deployment completed successfully!&quot;</span></span></code></pre></div><h3 id="分支篇" tabindex="-1">分支篇 <a class="header-anchor" href="#分支篇" aria-label="Permalink to &quot;分支篇&quot;">​</a></h3><ul><li>master（主分支，永远是可用的稳定版本，不能直接在该分支上开发）</li><li>develop（开发主分支，所有新功能以这个分支来创建自己的开发分支，该分支只做合并操作，不能直接在该分支上进行开发）</li><li>feature-xxx（功能开发分支，在develop上创建分支，以自己开发功能模块命名，功能测试正常后合并到develop分支）</li><li>feature-xxx-fix（功能bug修复分支，feature分支合并之后发现bug，在develop上创建分支进行修复，之后合并回develop分支）</li></ul><h5 id="ps-feature分支在申请合并之后-未合并之前还是可以提交代码的-所以feature在合并之前还可以在原分支上继续修复bug" tabindex="-1">(PS：feature分支在申请合并之后，未合并之前还是可以提交代码的，所以feature在合并之前还可以在原分支上继续修复bug) <a class="header-anchor" href="#ps-feature分支在申请合并之后-未合并之前还是可以提交代码的-所以feature在合并之前还可以在原分支上继续修复bug" aria-label="Permalink to &quot;(PS：feature分支在申请合并之后，未合并之前还是可以提交代码的，所以feature在合并之前还可以在原分支上继续修复bug)&quot;">​</a></h5><ul><li>hotfix-xxx（紧急bug修改分支，在master分支上创建，修复完成后合并到master）</li><li>bugfix/*分支 （短期从develop创建）</li><li>release/*分支（短期从develop创建）</li><li></li></ul><h4 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h4><p>一个分支尽量开发一个功能模块。不要多个功能模块在一个分支上开发 feature分支在申请合并之前，最好是先pull一下主分支develop，看一下有没有冲突，如果有，先解决冲突后再申请合并</p><h4 id="分支命名" tabindex="-1">分支命名 <a class="header-anchor" href="#分支命名" aria-label="Permalink to &quot;分支命名&quot;">​</a></h4><p>feature/20231030/功能名</p><h3 id="推送出错" tabindex="-1">推送出错 <a class="header-anchor" href="#推送出错" aria-label="Permalink to &quot;推送出错&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>1 使用如下命令</span></span>
<span class="line"><span>git pull —rebase origin master</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2 然后再进行上传:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>git push -u origin master</span></span></code></pre></div><h2 id="已有代码-删-git" tabindex="-1">已有代码 删.git <a class="header-anchor" href="#已有代码-删-git" aria-label="Permalink to &quot;已有代码 删.git&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>修改仓库地址:git remote set-url origin https://gitee.com/gz_lib/git</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2 然后再进行上传:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>git push -u origin master</span></span></code></pre></div><h3 id="设置-git-全局信息设置" tabindex="-1">设置 git 全局信息设置 <a class="header-anchor" href="#设置-git-全局信息设置" aria-label="Permalink to &quot;设置 git 全局信息设置&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>git config --global --list</span></span>
<span class="line"><span>git config --global user.name xxx</span></span>
<span class="line"><span>git config --global user.email xxx</span></span></code></pre></div><h3 id="重置提交仓库地址" tabindex="-1">重置提交仓库地址 <a class="header-anchor" href="#重置提交仓库地址" aria-label="Permalink to &quot;重置提交仓库地址&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>git remote set-url origin &lt;newurl&gt;</span></span></code></pre></div><h3 id="推送" tabindex="-1">推送 <a class="header-anchor" href="#推送" aria-label="Permalink to &quot;推送&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>git add .</span></span>
<span class="line"><span>git commit -m&quot;x&quot;</span></span>
<span class="line"><span>git push</span></span>
<span class="line"><span>git pull //保持本地仓库和远程仓库的同步</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>git relog // 查看 历史 commit 版本  代码丢失</span></span>
<span class="line"><span></span></span>
<span class="line"><span>git reset --hard 47acc35</span></span></code></pre></div><h3 id="分支管理" tabindex="-1">分支管理 <a class="header-anchor" href="#分支管理" aria-label="Permalink to &quot;分支管理&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>git checkout -b 01nav //新建分支并切换分支</span></span>
<span class="line"><span>git branch //查看分支</span></span>
<span class="line"><span>git push origin 01nav //推送分支到远程</span></span>
<span class="line"><span>git checkout master //切换分支</span></span>
<span class="line"><span>git merge 01nav //合并分支</span></span></code></pre></div><h3 id="版本回退" tabindex="-1">版本回退 <a class="header-anchor" href="#版本回退" aria-label="Permalink to &quot;版本回退&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>git log //打印日志信息</span></span>
<span class="line"><span>git reflog //打印日志</span></span>
<span class="line"><span>git reset --hard xxxx //版本回退</span></span>
<span class="line"><span></span></span>
<span class="line"><span>git branch 分支名称 创建新分支</span></span>
<span class="line"><span>git branch -d 分支名称 删除分支</span></span>
<span class="line"><span></span></span>
<span class="line"><span>git checkout 分支名称 切换分支</span></span>
<span class="line"><span></span></span>
<span class="line"><span>git merge 分支名称 合并代码</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>git chekcout feature</span></span>
<span class="line"><span>git rebase master</span></span>
<span class="line"><span>等同于</span></span>
<span class="line"><span>git rebase master feture</span></span>
<span class="line"><span></span></span>
<span class="line"><span>不推荐使用 rebase</span></span>
<span class="line"><span>推荐 checkout + merge</span></span>
<span class="line"><span></span></span>
<span class="line"><span>git pull origin dev</span></span>
<span class="line"><span>等同于</span></span>
<span class="line"><span>git fetch origin dev</span></span>
<span class="line"><span>git merge origin dev</span></span>
<span class="line"><span></span></span>
<span class="line"><span>git tag -a v1(标签号) -m &quot;提交信息&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>git checkout -b dev // 创建并且跳转分支</span></span></code></pre></div><h4 id="免密操作" tabindex="-1">免密操作 <a class="header-anchor" href="#免密操作" aria-label="Permalink to &quot;免密操作&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>1.修改url</span></span>
<span class="line"><span>源地址：https://gitub.com/gzlib/dbhot.git</span></span>
<span class="line"><span>修改地址: https://用户名:密码@github.com/gzlib/dbhot.git</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2.SSH实现</span></span>
<span class="line"><span>生成公私钥，将公钥保存到gitee</span></span>
<span class="line"><span>id_rsa.pub公钥，id_rsa私钥</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ssh-keygen</span></span></code></pre></div><p><img src="`+a+`" alt="" loading="lazy"></p><h4 id="gitignore-文件" tabindex="-1">.gitignore 文件 <a class="header-anchor" href="#gitignore-文件" aria-label="Permalink to &quot;.gitignore 文件&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>*.py // 忽略py文件</span></span>
<span class="line"><span>!a.py // 忽略除了a.py之外的文件</span></span></code></pre></div><h3 id="git-快速解决冲突" tabindex="-1">git 快速解决冲突 <a class="header-anchor" href="#git-快速解决冲突" aria-label="Permalink to &quot;git 快速解决冲突&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1 安装 beyond compare</span></span>
<span class="line"><span>2 git 配置</span></span>
<span class="line"><span>git config --local merge.tool bc3</span></span>
<span class="line"><span>git config --local mergetool.path &#39;/usr/local/bin/bcomp&#39;</span></span>
<span class="line"><span>git config --local mergetool.keepBackup false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3 应用 beyond compare 解决冲突</span></span>
<span class="line"><span>git mergetool</span></span></code></pre></div><h3 id="清缓存" tabindex="-1">清缓存 <a class="header-anchor" href="#清缓存" aria-label="Permalink to &quot;清缓存&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>git rm -r --cached .</span></span></code></pre></div><h3 id="设置-git-commit-时不忽略大小写" tabindex="-1">设置 git commit 时不忽略大小写 <a class="header-anchor" href="#设置-git-commit-时不忽略大小写" aria-label="Permalink to &quot;设置 git commit 时不忽略大小写&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>git config core.ignorecase false</span></span></code></pre></div><h3 id="设置-ssh-key" tabindex="-1">设置 ssh key <a class="header-anchor" href="#设置-ssh-key" aria-label="Permalink to &quot;设置 ssh key&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  ssh-keygen</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rsa</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -C</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;3437705679@qq.com&quot;</span></span></code></pre></div><p><img src="`+a+`" alt="" loading="lazy"></p><h3 id="关闭-git-证书校验" tabindex="-1">关闭 git 证书校验 <a class="header-anchor" href="#关闭-git-证书校验" aria-label="Permalink to &quot;关闭 git 证书校验&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git config --global http.sslVerify &quot;false&quot;</span></span></code></pre></div><h3 id="开启-git-证书校验" tabindex="-1">开启 git 证书校验 <a class="header-anchor" href="#开启-git-证书校验" aria-label="Permalink to &quot;开启 git 证书校验&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git config --global http.sslVerify &quot;true&quot;</span></span></code></pre></div><h3 id="github-提速" tabindex="-1">github 提速 <a class="header-anchor" href="#github-提速" aria-label="Permalink to &quot;github 提速&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>目录 windows/system32/devices/etc/hosts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>192.30.253.112 github.com</span></span>
<span class="line"><span>192.30.253.119 gist.github.com</span></span>
<span class="line"><span>151.101.100.133 assets-cdn.github.com</span></span>
<span class="line"><span>151.101.100.133 raw.githubusercontent.com</span></span>
<span class="line"><span>151.101.100.133 gist.githubusercontent.com</span></span>
<span class="line"><span>151.101.100.133 cloud.githubusercontent.com</span></span>
<span class="line"><span>151.101.100.133 camo.githubusercontent.com</span></span>
<span class="line"><span>151.101.100.133 avatars0.githubusercontent.com</span></span>
<span class="line"><span>151.101.100.133 avatars1.githubusercontent.com</span></span>
<span class="line"><span>151.101.100.133 avatars2.githubusercontent.com</span></span>
<span class="line"><span>151.101.100.133 avatars3.githubusercontent.com</span></span>
<span class="line"><span>151.101.100.133 avatars4.githubusercontent.com</span></span>
<span class="line"><span>151.101.100.133 avatars5.githubusercontent.com</span></span>
<span class="line"><span>151.101.100.133 avatars6.githubusercontent.com</span></span>
<span class="line"><span>151.101.100.133 avatars7.githubusercontent.com</span></span>
<span class="line"><span>151.101.100.133 avatars8.githubusercontent.com</span></span></code></pre></div>`,46)]))}const u=n(l,[["render",t]]);export{k as __pageData,u as default};
