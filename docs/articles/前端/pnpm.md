# pnpm 
* 在开发过程中，前端项目太多每个项目都包含了相同的依赖，太占用内存空间
* 但是vue2的老项目使用pnpm还是得额外配置


* 第一步：在项目根目录创建 .npmrc 文件
在你的 Vue2 项目根目录下（和 package.json 同级），创建一个名为 .npmrc 的文本文件。

* 第二步：添加关键配置
在 .npmrc 文件中，添加以下内容：
```
text
node-linker=hoisted
shamefully-hoist=true
node-linker=hoisted：这是最关键的一步。它告诉 pnpm 在安装依赖时，使用和 npm/yarn 一样的“扁平化”方式来组织 node_modules 文件夹。这样就保证了所有“幽灵依赖”都能被项目找到，从而解决大部分构建报错。

shamefully-hoist=true：这个配置可以进一步提升兼容性，允许 pnpm 将某些包的依赖也提升到顶层，进一步模拟 npm 的行为。
```

* 第三步：删除旧文件并重新安装
```
删除项目里旧的 node_modules 文件夹和 package-lock.json（或 yarn.lock）文件，确保一个全新的开始。

在项目根目录下，重新运行安装命令：

bash
pnpm install
安装完成后，尝试启动项目：

bash
pnpm run serve
经过这三步，绝大多数 Vue2 项目的报错都能被解决。这是因为 .npmrc 中的配置让 pnpm “收敛”了自己的严格性，以兼容模式运行，同时仍然享受着全局存储带来的磁盘空间节省。

💡 如果还有问题，可以试试这两个“进阶”操作
如果配置后仍然报错，通常是下面两种情况：

明确缺失某个依赖：如果错误信息明确指出了 These dependencies were not found: xxx，比如 @babel/parser 或 min-dash 等。这说明你的项目或某个依赖确实需要这个包，但没在 package.json 中声明。解决方法是直接安装它：

bash
pnpm add -D 缺失的包名
例如：pnpm add -D @babel/parser。

网络或缓存问题：有时候问题出在pnpm本身，可以尝试更换国内镜像源或清理pnpm缓存：

设置淘宝镜像源：

bash
pnpm config set registry https://registry.npmmirror.com
清理pnpm缓存：

bash
pnpm store prune
```
