# SEO 文件目录

此目录下的所有文件/文件夹会在构建时自动复制到 `dist/` 根目录。

## 常见用途

- 搜索引擎站点验证文件（如 `googleXXXX.html`、百度验证文件等）
- 额外的 Sitemap 文件
- `ads.txt`（如果接入广告）

## 使用方法

直接把需要放到站点根目录的文件放进来即可，例如：

```
docs/seo/
  google1234567890abcdef.html
  baidu_verify_xxxx.html
  ads.txt
```

构建后会出现在：

```
dist/
  google1234567890abcdef.html
  baidu_verify_xxxx.html
  ads.txt
  ...
```
