## 命令

```
    停止
    nginx -s quit
    查看进程
    ps -ef|grep nginx
    终止进程
    kill -9 [进程命令]

    查看版本：nginx -v
    启动：nginx
    重启：nginx -s reload
    暂停：nginx -s stop
```

## 基本配置

```
user nginx;

# 工作进程=>一般是 cpu 有几核就写几,可以最大限度的去发挥它的性能
worker_processes auto;

# 错误日志路径
error_log /var/log/nginx/error.log;

# 一般不动它,给守护进程用的
pid /run/nginx.pid;

# Load dynamic modules. See /usr/share/doc/nginx/README.dynamic.
include /usr/share/nginx/modules/*.conf;

# 并发连接数=>最大并发数:一个工作进程下的最大连接;默认 1024 个
events {
    worker_connections 1024;
}

# http 配置
http {
    # 日志格式
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;
    # 是否允许上传文件
    sendfile            on;
    # 能不能推送
    tcp_nopush          on;
    # gzip 压缩
    gzip                on;
    tcp_nodelay         on;
    # 长连接多长时间没有通信自动断开
    keepalive_timeout   65;
    types_hash_max_size 2048;
    include             /etc/nginx/mime.types;
    # 默认的 http 头
    default_type        application/octet-stream;

    # Load modular configuration files from the /etc/nginx/conf.d directory.
    # See http://nginx.org/en/docs/ngx_core_module.html#include
    # for more information.
    include /etc/nginx/conf.d/*.conf;
    # 定义反向代理服务器
    upstream web{
        server 127.0.0.1:8080;
        # 这里的 server 如果只写一个就是单纯的额外网发布,如果写 n 个就是负载均衡
        server 127.0.0.1:8888 weight=1; #添加权重
    }

    # 一个 server 对应一个网站
    server {
        # 端口
        listen       80 default_server;
        listen       [::]:80 default_server;
        # server域名
        server_name  _;
        root         /usr/share/nginx/html;

        # Load configuration files for the default server block.
        include /etc/nginx/default.d/*.conf;
        # 站点根目录
        location / {
            root    html;
            index   index.html  index.htm;
        }
        # 反向代理
        location /xxx/ {
            # 过来的请求代理到哪里
            proxy_pass http://web; # 前面upstream定义的
            # 如果需要客户端 ip,这个开关可能会重写为反向代理的 ip
            proxy_redirect off;
            # nginx 可能会改写头,用原来的值再把它改回来
            proxy_set_header Hose $host;
            # 代理服务器转发请求的时候用的协议版本
            proxy_http_version 1.1;

            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_cache_bypass $http_upgrade;
            # 取客户端真实 ip
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

            # 超时
            proxy_connect_timeout 600;
            proxy_read_timeout 600;
        }
        # 配置 https
        server {
            # 一定要带上 ssl 标记,默认 443 端口
            listen       443 ssl;
            server_name  work.com;
            ssl                  on;
            # 证书
            ssl_certificate      /etc/nginx/server.crt;
            # 密钥
            ssl_certificate_key  /etc/nginx/server.key;
            # 超时
            ssl_session_timeout  5m;
            location / {
                root   /usr/local/web/;
                add_header 'Cache-Control' 'no-store';
            }
            error_page 404 /404.html;
                location = /40x.html {
            }

            error_page 500 502 503 504 /50x.html;
                location = /50x.html {
            }
        }

        error_page 404 /404.html;
            location = /40x.html {
        }

        error_page 500 502 503 504 /50x.html;
            location = /50x.html {
        }
    }

}
```

### 正向代理和反向代理区别

正向代理：意思是一个位于客户端和原始服务器之间的服务器，为了从原始服务器获取内容，客户端向代理发送一个请求并指定目标，然后代理向原始服务器转交请求并将获取到的内容返回给客户端

反向代理：其实客户端对代理是无感知的，因为客户端不需要任何配置就可以访问，我们只需要将请求发送到反向代理服务器，由反向代理服务器去选择目标服务器获取数据后，再返回给客户端，此时反向代理服务器和目标服务器对外就是一个接口，暴露的是代理服务器的地址，隐藏了真实服务器 IP 地址

总结：正向代理客端端知道真实服务器和代理服务器地址，向代理服务器发生请求 代理服务器转发真实服务器
反向代理 客户端不知道真实服务器地址 请求发送到代理服务器 代理服务器去选择目标服务器

## 开启 gzip 压缩

```
gzip  on;
gzip_min_length  1k;
gzip_buffers     4 16k;
gzip_http_version 1.1;
gzip_comp_level 9;
gzip_types       text/plain application/x-javascript text/css application/xml text/javascript application/x-httpd-php application/javascript application/json;
gzip_disable "MSIE [1-6]\.";
gzip_vary on;
```

## 跨域
浏览器同源策略 同一协议，域名，端口的站点是同源，非同源的站点在数据返回会被浏览器拦截

解决方式：
1. cors 跨站资源共享 服务器响应头 设置允许跨域的站点
在进行cors请求会判断是简单请求还是复杂请求 
get post head text/plain 文件 application
简单请求：发起请求时会携带origin,服务器会进行源站点的对比，通过才行响应
复杂请求：会发起一个options预检请求, 服务端通过才会进行真正的请求

2. jsonp
script标签不受同源策略限制
客户端直接用script 标签请求服务器资源并且告知服务器回调函数名称，服务器接收请求，返回一个执行函数
缺点：只能get请求,可能被xss,无法处理404,500

3. nginx 

CORS中Cookie相关问题
默认情况下在跨域请求，浏览器是不带 cookie 的。如果想要传递Cookie，就要满足以下三个条件：

在请求中设置 withCredentials （axios.defaults.withCredentials = true）
Access-Control-Allow-Credentials ： true
Access-Control-Allow-Origin 设置为非 *

```
location ^~ /prefix {
	add_header Access-Control-Allow-Origin *;
	add_header Access-Control-Allow-Methods 'GET, POST, OPTIONS';
	add_header Access-Control-Allow-Headers 'DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization';
	rewrite ^/prefix/(.*)$/$1 break;
	proxy_pass 服务地址;
}
```
