---
tag:
  - vue
  - 前端
---

#### 安装 Volar 插件

vue language feature

#### 禁用 @builtin typescript

#### cnpm

```
npm install -g cnpm --registry=https://registry.npm.taobao.org 设置 npm config set registry https://registry.npm.taobao.org
```

#### 安装 vue 脚手架

```
cnpm install @vue/cli -g

```

#### 配置

```
.editorconfig
# http://editorconfig.org

root = true

[*] # 表示所有文件适用
charset = utf-8 # 设置文件字符集为 utf-8
indent_style = space # 缩进风格（tab | space）
indent_size = 2 # 缩进大小
end_of_line = lf # 控制换行类型(lf | cr | crlf)
trim_trailing_whitespace = true # 去除行首的任意空白字符
insert_final_newline = true # 始终在文件末尾插入一个新行

[*.md] # 表示仅 md 文件适用以下规则
max_line_length = off
trim_trailing_whitespace = false


安装插件 EditorConfig for VS Code
```

#### 使用 prettier

```
npm install prettier -D
.prettierrc文件

{
  "useTabs": false,
  "tabWidth": 2,
  "printWidth": 80,
  "singleQuote": true,
  "trailingComma": "none",
  "semi": false
}

.prettierignore文件

/dist/*
.local
.output.js
/node_modules/**

**/*.svg
**/*.sh

/public/*


安装prettier插件

package.json ->     "prettier": "prettier --write ."

```

## setup 语法让我们不用再一个一个的把变量和方法都 return 出去就能在模板上使用，大大的解放了我们的双手。然而对于一些常用的 VueAPI，比如 ref、computed、watch 等，还是每次都需要我们在页面上手动进行 import

我们可以通过 unplugin-auto-import 实现自动导入，无需 import 即可在文件里使用 Vue 的 API。

### npm i unplugin-auto-import -D

### npm i vite-plugin-vue-setup-extend -D

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import vue from '@vitejs/plugin-vue'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'

export default defineConfig({
  plugins: [
    VueSetupExtend(), // 可以直接在 script 标签上定义 name
    vue({
      refTransform: true // 开启 ref 转换 $ref "@vue/compiler-sfc": "^3.2.5"
    }),
    AutoImport({
      // dts: 'src/auto-imports.d.ts', // 可以自定义文件生成的位置，默认是根目录下
      imports: ['vue']
    })
  ],
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue'] // 导入时省略后缀
  }
})
```

## 解决 eslint 报错问题

在没有 import 的情况下使用会导致 eslint 提示报错，可以通过在 eslintrc.js 安装插件**vue-global-api**解决。
// 安装依赖

## npm i vue-global-api -D

// eslintrc.js

```
module.exports = {
  extends: [
    'vue-global-api'
  ]
}
```
