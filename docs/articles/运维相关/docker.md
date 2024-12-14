# Docker 安装

## yum 方式安装 Docker

1、更新 yum 源

```
yum update
```

2、安装所需环境

```
yum install -y yum-utils device-mapper-persistent-data lvm2
```

3、配置 yum 仓库

```
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
```

4、安装 Docker（社区版）

```
yum install docker-ce
```

5、启动 Docker 、添加自启动

```
systemctl start docker
systemctl enable docker
```

# 命令

## 启动

```
docket systemctl start docker ## 启动
docket systemctl stop         ## 停止
docket systemctl restart       ## 重启
docket systemctl enable docker   ##跟随服务启动而自启
```

## 查看本地镜像列表

```
docker images
搜索镜像

docker search 镜像名
docker search --filter=STARS=9000 mysql 搜索 STARS >9000的 mysql 镜像
拉取镜像 不加tag(版本号) 即拉取docker仓库中 该镜像的最新版本latest 加:tag 则是拉取指定版本

docker pull 镜像名
docker pull 镜像名:tag

```

## 运行镜像

```
docker run 镜像名
删除镜像 ———当前镜像没有被任何容器使用才可以删除
```

## 删除一个

```
docker rmi -f 镜像名/镜像ID
```

## 删除多个 其镜像 ID 或镜像用用空格隔开即可

```
docker rmi -f 镜像名/镜像ID 镜像名/镜像ID 镜像名/镜像ID
```

## 删除全部镜像 -a 意思为显示全部, -q 意思为只显示 ID

```
docker rmi -f $(docker images -aq）
```

## 强制删除镜像

```
docker image rm 镜像名称/镜像ID
保存镜像
将我们的镜像 保存为tar 压缩文件 这样方便镜像转移和保存 ,然后 可以在任何一台安装了docker的服务器上 加载这个镜像

docker save 镜像名/镜像ID -o 镜像保存在哪个位置与名字
```

## exmaple:

```
docker save tomcat -o /myimg.tar
```

## 保存镜像任务执行完毕，我们来看下指定位置下是否有该 tar？

## 加载镜像

# 任何装 docker 的地方加载镜像保存文件,使其恢复为一个镜像

```
docker load -i 镜像保存文件位置
镜像标签
有的时候呢，我们需要对一个镜像进行分类或者版本迭代操作，比如我们一个微服务已经打为docker镜像，但是想根据环境进行区分为develop环境与alpha环境，这个时候呢，我们就可以使用Tag，来进对镜像做一个标签添加，从而行进区分；版本迭代逻辑也是一样，根据不同的tag进行区分

app:1.0.0 基础镜像

分离为开发环境：app:develop-1.0.0

分离为alpha环境：app:alpha-1.0.0

docker tag SOURCE_IMAGE[:TAG] TARGET_IMAGE[:TAG]
docker tag 源镜像名:TAG 想要生成新的镜像名:新的TAG
如果省略TAG 则会为镜像默认打上latest TAG
docker tag aaa bbb
上方操作等于 docker tag aaa:latest bbb:test
示例

我们根据镜像 quay.io/minio/minio 添加一个新的镜像 名为 aaa 标签Tag设置为1.2.3
docker tag quay.io/minio/minio:1.2.3 aaa:1.2.3
我们根据镜像 app-user:1.0.0 添加一个新的镜像 名为 app-user 标签Tag设置为alpha-1.0.0
docker tag app-user:1.0.0 app-user:alpha-1.0.0
3、Docker容器命令
查看正在运行容器列表

docker ps
查看所有容器 ——-包含正在运行 和已停止的

docker ps -a
运行一个容器

容器怎么来呢 可以通过run 镜像 来构建 自己的容器实例

## -it 表示 与容器进行交互式启动 -d 表示可后台运行容器 （守护式运行）  --name 给要运行的容器 起的名字  /bin/bash  交互路径
docker run -it -d --name 别名 镜像名:Tag  /bin/bash
例如我们要启动一个redis 把它的别名取为redis001 并交互式运行 需要的命令 —我这里指定版本号为5.0.5
#1. 拉取redis 镜像
docker pull redis:5.0.5
#2.命令启动
docker run -it -d --name redis001 redis:5.0.5 /bin/bash
#器端口与服务器端口映射： -p 宿主机端口:容器端口
# -p 8888:6379 解析 将容器内部的 6379端口与docker 宿主机（docker装在哪台服务器 哪台服务器就是宿主机）8888 端口进行映射 那通过外部访问宿主机8888端口 即可访问到 docker 容器 6379 端口了
docker run -itd --name redis002 -p 8888:6379 redis:5.0.5 /bin/bash
删除容器

```

#### 删除一个容器

```
docker rm -f 容器名/容器ID
```

#### 删除多个容器 空格隔开要删除的容器名或容器 ID

```
docker rm -f 容器名/容器ID 容器名/容器ID 容器名/容器ID
```

#### 删除全部容器

```
docker rm -f $(docker ps -aq)
```

#### 进入、退出容器方式

```
docker exec -it 容器名/容器ID /bin/bash
docker exec -it redis001 /bin/bash
直接退出 未添加 -d(持久化运行容器) 时 执行此参数 容器会被关闭
exit

```

```
优雅退出 --- 无论是否添加-d 参数 执行此命令容器都不会被关闭
Ctrl + p + q
```

#### 停止容器

docker stop 容器 ID/容器名

#### 重启容器

docker restart 容器 ID/容器名

#### 启动容器

docker start 容器 ID/容器名

#### kill 容器

docker kill 容器 ID/容器名
容器文件拷贝 —无论容器是否开启 都可以进行拷贝

docker cp 容器 ID/名称:文件路径 要拷贝到外部的路径 | 要拷贝到外部的路径 容器 ID/名称:文件路径

##### 从容器内 拷出

```
docker cp 容器ID/名称: 容器内路径  容器外路径
```

##### 从外部 拷贝文件到容器内

```
docker  cp 容器外路径 容器ID/名称: 容器内路径
```

##### 查看容器日志

```
docker logs -f --tail=要查看末尾多少行 默认all 容器ID
```

##### 启动容器时，使用 docker run 命令时 添加参数--restart=always 便表示，该容器随 docker 服务启动而自动启动

```

docker run -itd --name redis002 -p 8888:6379 --restart=always  redis:5.0.5 /bin/bash
docker 文件分层与数据卷挂载

命令:
-v 宿主机文件存储位置:容器内文件位置
如此操作，就将 容器内指定文件挂载到了宿主机对应位置，-v命令可以多次使用，即一个容器可以同时挂载多个文件

运行一个docker redis 容器 进行 端口映射 两个数据卷挂载 设置开机自启动

docker run -d -p 6379:6379 --name redis505 --restart=always  -v /var/lib/redis/data/:/data -v /var/lib/redis/conf/:/usr/local/etc/redis/redis.conf  redis:5.0.5 --requirepass "password"
4、自己提交一个镜像
我们运行的容器可能在镜像的基础上做了一些修改，有时候我们希望保存起来，封装成一个更新的镜像，这时候我们就需要使用 commit 命令来构建一个新的镜像

docker commit -m="提交信息" -a="作者信息" 容器名/容器ID 提交后的镜像名:Tag
例如：
docker commit -m="gitlab初始化" -a="Colin.huang" 8e5e89512ffd gitlab_colin:15.3.3
我们拉取一个tomcat镜像 并持久化运行 且设置与宿主机进行端口映射

docker pull tomcat
docker run -itd -p8080:8080 --name tom tomcat /bin/bash
三、Docker部署安装gitlab
1、安装gitlab
1.1下载

docker pull gitlab/gitlab-ce:14.3.6-ce.0
1.2创建并启动容器

创建容器

docker run -d -p 8443:443 -p 8080:80 -p 8022:22 --restart always --name gitlab -v /data/gitlab/etc:/etc/gitlab -v /data/gitlab/log:/var/log/gitlab -v /data/gitlab/data:/var/opt/gitlab --privileged=true gitlab/gitlab-ce
命令解释

docker run
-d                #后台运行，全称：detach
-p 8443:443      #将容器内部端口向外映射
-p 8090:80       #将容器内80端口映射至宿主机8090端口，这是访问gitlab的端口
-p 8022:22       #将容器内22端口映射至宿主机8022端口，这是访问ssh的端口
--restart always #容器自启动
--name gitlab    #设置容器名称为gitlab
-v /data/gitlab/etc:/etc/gitlab    #将容器/etc/gitlab目录挂载到宿主机/usr/local/gitlab/etc目录下，若宿主机内此目录不存在将会自动创建
-v /data/gitlab/log:/var/log/gitlab    #与上面一样
-v /data/gitlab/data:/var/opt/gitlab   #与上面一样
--privileged=true         #让容器获取宿主机root权限
gitlab/gitlab-ce    #镜像的名称，这里也可以写镜像ID
查看容器是否启动

docker ps #查看已经启动的容器
docker ps -all 查看所有创建的容器
2、修改配置
2.1进入容器

docker exec -it gitlab bash
2.2修改gitlab.rb文件

//先进入到gitlab目录
cd /etc/gitlab
//编辑gitlab.rb文件
vi gitlab.rb
2.3修改gitlab.rb文件中的IP与端口号

// 在gitlab创建项目时候http地址的host(不用添加端口)
external_url 'http://192.168.189.129'
//配置ssh协议所使用的访问地址和端口
gitlab_rails['gitlab_ssh_host'] = '192.168.189.129' //和上一个IP输入的一样
gitlab_rails['gitlab_shell_ssh_port'] = 8022 // 此端口是run时22端口映射的8022端口
:wq //保存配置文件并退出
2.4配置gitlab.yml文件
```

#### 文件路径 /opt/gitlab/embedded/service/gitlab-rails/config

```
cd /opt/gitlab/embedded/service/gitlab-rails/config
```

##### 打开编辑 gitlab.yml 文件

```
vi gitlab.yml
```

##### 修改 host 与上面.rb 文件修改的一致

##### 修改 port 为 8090

##### 启动、访问 gitlab

```
//容器中应用配置，让修改后的配置生效
gitlab-ctl reconfigure
//容器中重启服务
gitlab-ctl restart
```

##### 访问 gitlab

```
http://192.168.189.129:8080
```

##### 查看 root 账户密码

```
docker exec -it gitlab /bin/bash
cat /etc/gitlab/initial_root_password
修改root账户密码
```

##### 进入容器内部

```
docker exec -it gitlab /bin/bash
```

##### 进入控制台

```
gitlab-rails console -e production
```

##### 查询 id 为 1 的用户，id 为 1 的用户是超级管理员

```
user = User.where(id:1).first
```

##### 修改密码为 colin123456

```
user.password='colin123456'
```

##### 保存

```
user.save!
```

##### 退出

```
exit
重新输入账户密码，成功访问页面啦！
```
