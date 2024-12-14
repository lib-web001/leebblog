# git 初始化 配置

```
1、在要推送的内容里面右键选择 git bash here

2、输入 git init 初始化仓库, 本地会生成一个 .git 文件夹

3、然后输入 git remote add origin https://gitee.com/仓库

4、使用 git pull origin master 命令将码云的仓库 pull 到本地

5、git add . (别忘记.)

6、git commit -m '描述新添加的文件内容'

7、git push origin master 将本地仓库推送到远程仓库

8、git 忽略 husky校验 git commit -m "feat: 接口对接" --no-verify


```

## git sh脚本

```sh
#!/bin/bash

# 远程 Git 仓库地址
REMOTE_REPO_URL="git@github.com:SlovinG/sloving.github.io.git"

# 远程 Git 仓库分支
REMOTE_BRANCH="master"

# 初始化 Git 仓库（如果尚未初始化）
if [ ! -d ".git" ]; then
  git init
fi

# 检查远程仓库是否已经存在
if ! git remote | grep -q "origin"; then
  # 添加远程仓库
  git remote add origin $REMOTE_REPO_URL
fi

# 拉取远程仓库的最新更改
git pull origin $REMOTE_BRANCH

# 添加所有更改到暂存区
git add .

# 提交更改
git commit -m "Deploy updates from local project folder"

# 推送更改到远程仓库
git push origin $REMOTE_BRANCH

echo "Deployment completed successfully!"
```

### 分支篇

* master（主分支，永远是可用的稳定版本，不能直接在该分支上开发）
* develop（开发主分支，所有新功能以这个分支来创建自己的开发分支，该分支只做合并操作，不能直接在该分支上进行开发）
* feature-xxx（功能开发分支，在develop上创建分支，以自己开发功能模块命名，功能测试正常后合并到develop分支）
* feature-xxx-fix（功能bug修复分支，feature分支合并之后发现bug，在develop上创建分支进行修复，之后合并回develop分支）

##### (PS：feature分支在申请合并之后，未合并之前还是可以提交代码的，所以feature在合并之前还可以在原分支上继续修复bug)

* hotfix-xxx（紧急bug修改分支，在master分支上创建，修复完成后合并到master）
* bugfix/*分支 （短期从develop创建）
* release/*分支（短期从develop创建）
*

#### 注意事项

一个分支尽量开发一个功能模块。不要多个功能模块在一个分支上开发
feature分支在申请合并之前，最好是先pull一下主分支develop，看一下有没有冲突，如果有，先解决冲突后再申请合并

#### 分支命名

feature/20231030/功能名

### 推送出错

```

1 使用如下命令
git pull —rebase origin master

2 然后再进行上传:

git push -u origin master

```

## 已有代码 删.git

```

修改仓库地址:git remote set-url origin https://gitee.com/gz_lib/git

2 然后再进行上传:

git push -u origin master

```

### 设置 git 全局信息设置

```

git config --global --list
git config --global user.name xxx
git config --global user.email xxx

```

### 重置提交仓库地址

```

git remote set-url origin <newurl>

```

### 推送

```

git add .
git commit -m"x"
git push
git pull //保持本地仓库和远程仓库的同步


git relog // 查看 历史 commit 版本  代码丢失

git reset --hard 47acc35
```

### 分支管理

```

git checkout -b 01nav //新建分支并切换分支
git branch //查看分支
git push origin 01nav //推送分支到远程
git checkout master //切换分支
git merge 01nav //合并分支

```

### 版本回退

```

git log //打印日志信息
git reflog //打印日志
git reset --hard xxxx //版本回退

git branch 分支名称 创建新分支
git branch -d 分支名称 删除分支

git checkout 分支名称 切换分支

git merge 分支名称 合并代码


git chekcout feature
git rebase master
等同于
git rebase master feture

不推荐使用 rebase
推荐 checkout + merge

git pull origin dev
等同于
git fetch origin dev
git merge origin dev

git tag -a v1(标签号) -m "提交信息"

git checkout -b dev // 创建并且跳转分支
```

#### 免密操作

```

1.修改url
源地址：https://gitub.com/gzlib/dbhot.git
修改地址: https://用户名:密码@github.com/gzlib/dbhot.git

2.SSH实现
生成公私钥，将公钥保存到gitee
id_rsa.pub公钥，id_rsa私钥

ssh-keygen
```

![](/img/git.png)

#### .gitignore 文件

```
*.py // 忽略py文件
!a.py // 忽略除了a.py之外的文件
```

### git 快速解决冲突

```
1 安装 beyond compare
2 git 配置
git config --local merge.tool bc3
git config --local mergetool.path '/usr/local/bin/bcomp'
git config --local mergetool.keepBackup false

3 应用 beyond compare 解决冲突
git mergetool
```

### 清缓存

```

git rm -r --cached .

```

### 设置 git commit 时不忽略大小写

```

git config core.ignorecase false

```

### 设置 ssh key

```shell
  ssh-keygen -t rsa -C "3437705679@qq.com"
```

![](/img/git.png)

### 关闭 git 证书校验

```
git config --global http.sslVerify "false"
```

### 开启 git 证书校验

```
git config --global http.sslVerify "true"
```

### github 提速

```
目录 windows/system32/devices/etc/hosts

192.30.253.112 github.com
192.30.253.119 gist.github.com
151.101.100.133 assets-cdn.github.com
151.101.100.133 raw.githubusercontent.com
151.101.100.133 gist.githubusercontent.com
151.101.100.133 cloud.githubusercontent.com
151.101.100.133 camo.githubusercontent.com
151.101.100.133 avatars0.githubusercontent.com
151.101.100.133 avatars1.githubusercontent.com
151.101.100.133 avatars2.githubusercontent.com
151.101.100.133 avatars3.githubusercontent.com
151.101.100.133 avatars4.githubusercontent.com
151.101.100.133 avatars5.githubusercontent.com
151.101.100.133 avatars6.githubusercontent.com
151.101.100.133 avatars7.githubusercontent.com
151.101.100.133 avatars8.githubusercontent.com
```
