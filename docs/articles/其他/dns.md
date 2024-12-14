## host 文件配置 加速 github 访问

### https://ip.tool.chinaz.com/140.82.121.4

```
修改本地hosts文件
13.114.40.48	  github.com
151.101.1.194	  github.global.ssl.fastly.net
185.199.110.154   github.githubassets.com
185.199.108.153   assets-cdn.github.com
13.230.158.120	  api.github.com
52.192.72.89	  www.github.com
151.101.2.132 echarts.apache.org

在cmd中输入以下命令生效
ipconfig/flushdns
```

## cdn

什么是 cdn
公司的一些静态文件 css sdk 图标这些放到 腾讯 阿里云
客户端下次请求资源的时候 cdn 服务商就近提供网络节点资源 从而提高资源加载速度

这两个概念都非常好理解。对标到上面描述的过程，“缓存”就是说我们把资源 copy 一份到 CDN 服务器上这个过程，“回源”就是说 CDN 发现自己没有这个资源（一般是缓存的数据过期了），转头向根服务器（或者它的上层服务器）去要这个资源的过程。

### cdn 优化细节

如何让 CDN 的效用最大化？这又是需要前后端程序员一起思考的庞大命题。它涉及到 CDN 服务器本身的性能优化、CDN 节点的地址选取等。但我们今天不写高深的论文，只谈离前端最近的这部分细节：CDN 的域名选取。

Cookie 是紧跟域名的。同一个域名下的所有请求，都会携带 Cookie。大家试想，如果我们此刻仅仅是请求一张图片或者一个 CSS 文件，我们也要携带一个 Cookie 跑来跑去（关键是 Cookie 里存储的信息我现在并不需要），这是一件多么劳民伤财的事情。Cookie 虽然小，请求却可以有很多，随着请求的叠加，这样的不必要的 Cookie 带来的开销将是无法想象的……

### js delvr

先在 github 上创建一个公开仓库，存放好静态资源。仓库弄好后，点击 Releases，选择 Create/Draft a new release,填写好版本号比如 0.0.2 版，保存。然后就可以用 jsDeliver 访问了，官方提供的访问路径格式为: https://cdn.jsdelivr.net/gh/用户名称/仓库名称@版本号/目录
