import{_ as s,o as n,c as e,a6 as p}from"./chunks/framework.DxlwMnnj.js";const b=JSON.parse('{"title":"Docker 安装","description":"","frontmatter":{},"headers":[],"relativePath":"articles/运维相关/docker.md","filePath":"articles/运维相关/docker.md"}'),l={name:"articles/运维相关/docker.md"};function i(t,a,c,o,d,r){return n(),e("div",{"data-pagefind-body":!0},a[0]||(a[0]=[p(`<h1 id="docker-安装" tabindex="-1">Docker 安装 <a class="header-anchor" href="#docker-安装" aria-label="Permalink to &quot;Docker 安装&quot;">​</a></h1><h2 id="yum-方式安装-docker" tabindex="-1">yum 方式安装 Docker <a class="header-anchor" href="#yum-方式安装-docker" aria-label="Permalink to &quot;yum 方式安装 Docker&quot;">​</a></h2><p>1、更新 yum 源</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>yum update</span></span></code></pre></div><p>2、安装所需环境</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>yum install -y yum-utils device-mapper-persistent-data lvm2</span></span></code></pre></div><p>3、配置 yum 仓库</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo</span></span></code></pre></div><p>4、安装 Docker（社区版）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>yum install docker-ce</span></span></code></pre></div><p>5、启动 Docker 、添加自启动</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>systemctl start docker</span></span>
<span class="line"><span>systemctl enable docker</span></span></code></pre></div><h1 id="命令" tabindex="-1">命令 <a class="header-anchor" href="#命令" aria-label="Permalink to &quot;命令&quot;">​</a></h1><h2 id="启动" tabindex="-1">启动 <a class="header-anchor" href="#启动" aria-label="Permalink to &quot;启动&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docket systemctl start docker ## 启动</span></span>
<span class="line"><span>docket systemctl stop         ## 停止</span></span>
<span class="line"><span>docket systemctl restart       ## 重启</span></span>
<span class="line"><span>docket systemctl enable docker   ##跟随服务启动而自启</span></span></code></pre></div><h2 id="查看本地镜像列表" tabindex="-1">查看本地镜像列表 <a class="header-anchor" href="#查看本地镜像列表" aria-label="Permalink to &quot;查看本地镜像列表&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker images</span></span>
<span class="line"><span>搜索镜像</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker search 镜像名</span></span>
<span class="line"><span>docker search --filter=STARS=9000 mysql 搜索 STARS &gt;9000的 mysql 镜像</span></span>
<span class="line"><span>拉取镜像 不加tag(版本号) 即拉取docker仓库中 该镜像的最新版本latest 加:tag 则是拉取指定版本</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker pull 镜像名</span></span>
<span class="line"><span>docker pull 镜像名:tag</span></span></code></pre></div><h2 id="运行镜像" tabindex="-1">运行镜像 <a class="header-anchor" href="#运行镜像" aria-label="Permalink to &quot;运行镜像&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker run 镜像名</span></span>
<span class="line"><span>删除镜像 ———当前镜像没有被任何容器使用才可以删除</span></span></code></pre></div><h2 id="删除一个" tabindex="-1">删除一个 <a class="header-anchor" href="#删除一个" aria-label="Permalink to &quot;删除一个&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker rmi -f 镜像名/镜像ID</span></span></code></pre></div><h2 id="删除多个-其镜像-id-或镜像用用空格隔开即可" tabindex="-1">删除多个 其镜像 ID 或镜像用用空格隔开即可 <a class="header-anchor" href="#删除多个-其镜像-id-或镜像用用空格隔开即可" aria-label="Permalink to &quot;删除多个 其镜像 ID 或镜像用用空格隔开即可&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker rmi -f 镜像名/镜像ID 镜像名/镜像ID 镜像名/镜像ID</span></span></code></pre></div><h2 id="删除全部镜像-a-意思为显示全部-q-意思为只显示-id" tabindex="-1">删除全部镜像 -a 意思为显示全部, -q 意思为只显示 ID <a class="header-anchor" href="#删除全部镜像-a-意思为显示全部-q-意思为只显示-id" aria-label="Permalink to &quot;删除全部镜像 -a 意思为显示全部, -q 意思为只显示 ID&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker rmi -f $(docker images -aq）</span></span></code></pre></div><h2 id="强制删除镜像" tabindex="-1">强制删除镜像 <a class="header-anchor" href="#强制删除镜像" aria-label="Permalink to &quot;强制删除镜像&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker image rm 镜像名称/镜像ID</span></span>
<span class="line"><span>保存镜像</span></span>
<span class="line"><span>将我们的镜像 保存为tar 压缩文件 这样方便镜像转移和保存 ,然后 可以在任何一台安装了docker的服务器上 加载这个镜像</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker save 镜像名/镜像ID -o 镜像保存在哪个位置与名字</span></span></code></pre></div><h2 id="exmaple" tabindex="-1">exmaple: <a class="header-anchor" href="#exmaple" aria-label="Permalink to &quot;exmaple:&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker save tomcat -o /myimg.tar</span></span></code></pre></div><h2 id="保存镜像任务执行完毕-我们来看下指定位置下是否有该-tar" tabindex="-1">保存镜像任务执行完毕，我们来看下指定位置下是否有该 tar？ <a class="header-anchor" href="#保存镜像任务执行完毕-我们来看下指定位置下是否有该-tar" aria-label="Permalink to &quot;保存镜像任务执行完毕，我们来看下指定位置下是否有该 tar？&quot;">​</a></h2><h2 id="加载镜像" tabindex="-1">加载镜像 <a class="header-anchor" href="#加载镜像" aria-label="Permalink to &quot;加载镜像&quot;">​</a></h2><h1 id="任何装-docker-的地方加载镜像保存文件-使其恢复为一个镜像" tabindex="-1">任何装 docker 的地方加载镜像保存文件,使其恢复为一个镜像 <a class="header-anchor" href="#任何装-docker-的地方加载镜像保存文件-使其恢复为一个镜像" aria-label="Permalink to &quot;任何装 docker 的地方加载镜像保存文件,使其恢复为一个镜像&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker load -i 镜像保存文件位置</span></span>
<span class="line"><span>镜像标签</span></span>
<span class="line"><span>有的时候呢，我们需要对一个镜像进行分类或者版本迭代操作，比如我们一个微服务已经打为docker镜像，但是想根据环境进行区分为develop环境与alpha环境，这个时候呢，我们就可以使用Tag，来进对镜像做一个标签添加，从而行进区分；版本迭代逻辑也是一样，根据不同的tag进行区分</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app:1.0.0 基础镜像</span></span>
<span class="line"><span></span></span>
<span class="line"><span>分离为开发环境：app:develop-1.0.0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>分离为alpha环境：app:alpha-1.0.0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker tag SOURCE_IMAGE[:TAG] TARGET_IMAGE[:TAG]</span></span>
<span class="line"><span>docker tag 源镜像名:TAG 想要生成新的镜像名:新的TAG</span></span>
<span class="line"><span>如果省略TAG 则会为镜像默认打上latest TAG</span></span>
<span class="line"><span>docker tag aaa bbb</span></span>
<span class="line"><span>上方操作等于 docker tag aaa:latest bbb:test</span></span>
<span class="line"><span>示例</span></span>
<span class="line"><span></span></span>
<span class="line"><span>我们根据镜像 quay.io/minio/minio 添加一个新的镜像 名为 aaa 标签Tag设置为1.2.3</span></span>
<span class="line"><span>docker tag quay.io/minio/minio:1.2.3 aaa:1.2.3</span></span>
<span class="line"><span>我们根据镜像 app-user:1.0.0 添加一个新的镜像 名为 app-user 标签Tag设置为alpha-1.0.0</span></span>
<span class="line"><span>docker tag app-user:1.0.0 app-user:alpha-1.0.0</span></span>
<span class="line"><span>3、Docker容器命令</span></span>
<span class="line"><span>查看正在运行容器列表</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker ps</span></span>
<span class="line"><span>查看所有容器 ——-包含正在运行 和已停止的</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker ps -a</span></span>
<span class="line"><span>运行一个容器</span></span>
<span class="line"><span></span></span>
<span class="line"><span>容器怎么来呢 可以通过run 镜像 来构建 自己的容器实例</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## -it 表示 与容器进行交互式启动 -d 表示可后台运行容器 （守护式运行）  --name 给要运行的容器 起的名字  /bin/bash  交互路径</span></span>
<span class="line"><span>docker run -it -d --name 别名 镜像名:Tag  /bin/bash</span></span>
<span class="line"><span>例如我们要启动一个redis 把它的别名取为redis001 并交互式运行 需要的命令 —我这里指定版本号为5.0.5</span></span>
<span class="line"><span>#1. 拉取redis 镜像</span></span>
<span class="line"><span>docker pull redis:5.0.5</span></span>
<span class="line"><span>#2.命令启动</span></span>
<span class="line"><span>docker run -it -d --name redis001 redis:5.0.5 /bin/bash</span></span>
<span class="line"><span>#器端口与服务器端口映射： -p 宿主机端口:容器端口</span></span>
<span class="line"><span># -p 8888:6379 解析 将容器内部的 6379端口与docker 宿主机（docker装在哪台服务器 哪台服务器就是宿主机）8888 端口进行映射 那通过外部访问宿主机8888端口 即可访问到 docker 容器 6379 端口了</span></span>
<span class="line"><span>docker run -itd --name redis002 -p 8888:6379 redis:5.0.5 /bin/bash</span></span>
<span class="line"><span>删除容器</span></span></code></pre></div><h4 id="删除一个容器" tabindex="-1">删除一个容器 <a class="header-anchor" href="#删除一个容器" aria-label="Permalink to &quot;删除一个容器&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker rm -f 容器名/容器ID</span></span></code></pre></div><h4 id="删除多个容器-空格隔开要删除的容器名或容器-id" tabindex="-1">删除多个容器 空格隔开要删除的容器名或容器 ID <a class="header-anchor" href="#删除多个容器-空格隔开要删除的容器名或容器-id" aria-label="Permalink to &quot;删除多个容器 空格隔开要删除的容器名或容器 ID&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker rm -f 容器名/容器ID 容器名/容器ID 容器名/容器ID</span></span></code></pre></div><h4 id="删除全部容器" tabindex="-1">删除全部容器 <a class="header-anchor" href="#删除全部容器" aria-label="Permalink to &quot;删除全部容器&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker rm -f $(docker ps -aq)</span></span></code></pre></div><h4 id="进入、退出容器方式" tabindex="-1">进入、退出容器方式 <a class="header-anchor" href="#进入、退出容器方式" aria-label="Permalink to &quot;进入、退出容器方式&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker exec -it 容器名/容器ID /bin/bash</span></span>
<span class="line"><span>docker exec -it redis001 /bin/bash</span></span>
<span class="line"><span>直接退出 未添加 -d(持久化运行容器) 时 执行此参数 容器会被关闭</span></span>
<span class="line"><span>exit</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>优雅退出 --- 无论是否添加-d 参数 执行此命令容器都不会被关闭</span></span>
<span class="line"><span>Ctrl + p + q</span></span></code></pre></div><h4 id="停止容器" tabindex="-1">停止容器 <a class="header-anchor" href="#停止容器" aria-label="Permalink to &quot;停止容器&quot;">​</a></h4><p>docker stop 容器 ID/容器名</p><h4 id="重启容器" tabindex="-1">重启容器 <a class="header-anchor" href="#重启容器" aria-label="Permalink to &quot;重启容器&quot;">​</a></h4><p>docker restart 容器 ID/容器名</p><h4 id="启动容器" tabindex="-1">启动容器 <a class="header-anchor" href="#启动容器" aria-label="Permalink to &quot;启动容器&quot;">​</a></h4><p>docker start 容器 ID/容器名</p><h4 id="kill-容器" tabindex="-1">kill 容器 <a class="header-anchor" href="#kill-容器" aria-label="Permalink to &quot;kill 容器&quot;">​</a></h4><p>docker kill 容器 ID/容器名 容器文件拷贝 —无论容器是否开启 都可以进行拷贝</p><p>docker cp 容器 ID/名称:文件路径 要拷贝到外部的路径 | 要拷贝到外部的路径 容器 ID/名称:文件路径</p><h5 id="从容器内-拷出" tabindex="-1">从容器内 拷出 <a class="header-anchor" href="#从容器内-拷出" aria-label="Permalink to &quot;从容器内 拷出&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker cp 容器ID/名称: 容器内路径  容器外路径</span></span></code></pre></div><h5 id="从外部-拷贝文件到容器内" tabindex="-1">从外部 拷贝文件到容器内 <a class="header-anchor" href="#从外部-拷贝文件到容器内" aria-label="Permalink to &quot;从外部 拷贝文件到容器内&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker  cp 容器外路径 容器ID/名称: 容器内路径</span></span></code></pre></div><h5 id="查看容器日志" tabindex="-1">查看容器日志 <a class="header-anchor" href="#查看容器日志" aria-label="Permalink to &quot;查看容器日志&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker logs -f --tail=要查看末尾多少行 默认all 容器ID</span></span></code></pre></div><h5 id="启动容器时-使用-docker-run-命令时-添加参数-restart-always-便表示-该容器随-docker-服务启动而自动启动" tabindex="-1">启动容器时，使用 docker run 命令时 添加参数--restart=always 便表示，该容器随 docker 服务启动而自动启动 <a class="header-anchor" href="#启动容器时-使用-docker-run-命令时-添加参数-restart-always-便表示-该容器随-docker-服务启动而自动启动" aria-label="Permalink to &quot;启动容器时，使用 docker run 命令时 添加参数--restart=always 便表示，该容器随 docker 服务启动而自动启动&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>docker run -itd --name redis002 -p 8888:6379 --restart=always  redis:5.0.5 /bin/bash</span></span>
<span class="line"><span>docker 文件分层与数据卷挂载</span></span>
<span class="line"><span></span></span>
<span class="line"><span>命令:</span></span>
<span class="line"><span>-v 宿主机文件存储位置:容器内文件位置</span></span>
<span class="line"><span>如此操作，就将 容器内指定文件挂载到了宿主机对应位置，-v命令可以多次使用，即一个容器可以同时挂载多个文件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>运行一个docker redis 容器 进行 端口映射 两个数据卷挂载 设置开机自启动</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker run -d -p 6379:6379 --name redis505 --restart=always  -v /var/lib/redis/data/:/data -v /var/lib/redis/conf/:/usr/local/etc/redis/redis.conf  redis:5.0.5 --requirepass &quot;password&quot;</span></span>
<span class="line"><span>4、自己提交一个镜像</span></span>
<span class="line"><span>我们运行的容器可能在镜像的基础上做了一些修改，有时候我们希望保存起来，封装成一个更新的镜像，这时候我们就需要使用 commit 命令来构建一个新的镜像</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker commit -m=&quot;提交信息&quot; -a=&quot;作者信息&quot; 容器名/容器ID 提交后的镜像名:Tag</span></span>
<span class="line"><span>例如：</span></span>
<span class="line"><span>docker commit -m=&quot;gitlab初始化&quot; -a=&quot;Colin.huang&quot; 8e5e89512ffd gitlab_colin:15.3.3</span></span>
<span class="line"><span>我们拉取一个tomcat镜像 并持久化运行 且设置与宿主机进行端口映射</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker pull tomcat</span></span>
<span class="line"><span>docker run -itd -p8080:8080 --name tom tomcat /bin/bash</span></span>
<span class="line"><span>三、Docker部署安装gitlab</span></span>
<span class="line"><span>1、安装gitlab</span></span>
<span class="line"><span>1.1下载</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker pull gitlab/gitlab-ce:14.3.6-ce.0</span></span>
<span class="line"><span>1.2创建并启动容器</span></span>
<span class="line"><span></span></span>
<span class="line"><span>创建容器</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker run -d -p 8443:443 -p 8080:80 -p 8022:22 --restart always --name gitlab -v /data/gitlab/etc:/etc/gitlab -v /data/gitlab/log:/var/log/gitlab -v /data/gitlab/data:/var/opt/gitlab --privileged=true gitlab/gitlab-ce</span></span>
<span class="line"><span>命令解释</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker run</span></span>
<span class="line"><span>-d                #后台运行，全称：detach</span></span>
<span class="line"><span>-p 8443:443      #将容器内部端口向外映射</span></span>
<span class="line"><span>-p 8090:80       #将容器内80端口映射至宿主机8090端口，这是访问gitlab的端口</span></span>
<span class="line"><span>-p 8022:22       #将容器内22端口映射至宿主机8022端口，这是访问ssh的端口</span></span>
<span class="line"><span>--restart always #容器自启动</span></span>
<span class="line"><span>--name gitlab    #设置容器名称为gitlab</span></span>
<span class="line"><span>-v /data/gitlab/etc:/etc/gitlab    #将容器/etc/gitlab目录挂载到宿主机/usr/local/gitlab/etc目录下，若宿主机内此目录不存在将会自动创建</span></span>
<span class="line"><span>-v /data/gitlab/log:/var/log/gitlab    #与上面一样</span></span>
<span class="line"><span>-v /data/gitlab/data:/var/opt/gitlab   #与上面一样</span></span>
<span class="line"><span>--privileged=true         #让容器获取宿主机root权限</span></span>
<span class="line"><span>gitlab/gitlab-ce    #镜像的名称，这里也可以写镜像ID</span></span>
<span class="line"><span>查看容器是否启动</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker ps #查看已经启动的容器</span></span>
<span class="line"><span>docker ps -all 查看所有创建的容器</span></span>
<span class="line"><span>2、修改配置</span></span>
<span class="line"><span>2.1进入容器</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker exec -it gitlab bash</span></span>
<span class="line"><span>2.2修改gitlab.rb文件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//先进入到gitlab目录</span></span>
<span class="line"><span>cd /etc/gitlab</span></span>
<span class="line"><span>//编辑gitlab.rb文件</span></span>
<span class="line"><span>vi gitlab.rb</span></span>
<span class="line"><span>2.3修改gitlab.rb文件中的IP与端口号</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 在gitlab创建项目时候http地址的host(不用添加端口)</span></span>
<span class="line"><span>external_url &#39;http://192.168.189.129&#39;</span></span>
<span class="line"><span>//配置ssh协议所使用的访问地址和端口</span></span>
<span class="line"><span>gitlab_rails[&#39;gitlab_ssh_host&#39;] = &#39;192.168.189.129&#39; //和上一个IP输入的一样</span></span>
<span class="line"><span>gitlab_rails[&#39;gitlab_shell_ssh_port&#39;] = 8022 // 此端口是run时22端口映射的8022端口</span></span>
<span class="line"><span>:wq //保存配置文件并退出</span></span>
<span class="line"><span>2.4配置gitlab.yml文件</span></span></code></pre></div><h4 id="文件路径-opt-gitlab-embedded-service-gitlab-rails-config" tabindex="-1">文件路径 /opt/gitlab/embedded/service/gitlab-rails/config <a class="header-anchor" href="#文件路径-opt-gitlab-embedded-service-gitlab-rails-config" aria-label="Permalink to &quot;文件路径 /opt/gitlab/embedded/service/gitlab-rails/config&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>cd /opt/gitlab/embedded/service/gitlab-rails/config</span></span></code></pre></div><h5 id="打开编辑-gitlab-yml-文件" tabindex="-1">打开编辑 gitlab.yml 文件 <a class="header-anchor" href="#打开编辑-gitlab-yml-文件" aria-label="Permalink to &quot;打开编辑 gitlab.yml 文件&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>vi gitlab.yml</span></span></code></pre></div><h5 id="修改-host-与上面-rb-文件修改的一致" tabindex="-1">修改 host 与上面.rb 文件修改的一致 <a class="header-anchor" href="#修改-host-与上面-rb-文件修改的一致" aria-label="Permalink to &quot;修改 host 与上面.rb 文件修改的一致&quot;">​</a></h5><h5 id="修改-port-为-8090" tabindex="-1">修改 port 为 8090 <a class="header-anchor" href="#修改-port-为-8090" aria-label="Permalink to &quot;修改 port 为 8090&quot;">​</a></h5><h5 id="启动、访问-gitlab" tabindex="-1">启动、访问 gitlab <a class="header-anchor" href="#启动、访问-gitlab" aria-label="Permalink to &quot;启动、访问 gitlab&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//容器中应用配置，让修改后的配置生效</span></span>
<span class="line"><span>gitlab-ctl reconfigure</span></span>
<span class="line"><span>//容器中重启服务</span></span>
<span class="line"><span>gitlab-ctl restart</span></span></code></pre></div><h5 id="访问-gitlab" tabindex="-1">访问 gitlab <a class="header-anchor" href="#访问-gitlab" aria-label="Permalink to &quot;访问 gitlab&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>http://192.168.189.129:8080</span></span></code></pre></div><h5 id="查看-root-账户密码" tabindex="-1">查看 root 账户密码 <a class="header-anchor" href="#查看-root-账户密码" aria-label="Permalink to &quot;查看 root 账户密码&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker exec -it gitlab /bin/bash</span></span>
<span class="line"><span>cat /etc/gitlab/initial_root_password</span></span>
<span class="line"><span>修改root账户密码</span></span></code></pre></div><h5 id="进入容器内部" tabindex="-1">进入容器内部 <a class="header-anchor" href="#进入容器内部" aria-label="Permalink to &quot;进入容器内部&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker exec -it gitlab /bin/bash</span></span></code></pre></div><h5 id="进入控制台" tabindex="-1">进入控制台 <a class="header-anchor" href="#进入控制台" aria-label="Permalink to &quot;进入控制台&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>gitlab-rails console -e production</span></span></code></pre></div><h5 id="查询-id-为-1-的用户-id-为-1-的用户是超级管理员" tabindex="-1">查询 id 为 1 的用户，id 为 1 的用户是超级管理员 <a class="header-anchor" href="#查询-id-为-1-的用户-id-为-1-的用户是超级管理员" aria-label="Permalink to &quot;查询 id 为 1 的用户，id 为 1 的用户是超级管理员&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>user = User.where(id:1).first</span></span></code></pre></div><h5 id="修改密码为-colin123456" tabindex="-1">修改密码为 colin123456 <a class="header-anchor" href="#修改密码为-colin123456" aria-label="Permalink to &quot;修改密码为 colin123456&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>user.password=&#39;colin123456&#39;</span></span></code></pre></div><h5 id="保存" tabindex="-1">保存 <a class="header-anchor" href="#保存" aria-label="Permalink to &quot;保存&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>user.save!</span></span></code></pre></div><h5 id="退出" tabindex="-1">退出 <a class="header-anchor" href="#退出" aria-label="Permalink to &quot;退出&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>exit</span></span>
<span class="line"><span>重新输入账户密码，成功访问页面啦！</span></span></code></pre></div>`,83)]))}const u=s(l,[["render",i]]);export{b as __pageData,u as default};
