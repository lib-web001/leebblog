---
tag:
  - vue
  - 前端
---

# Vue2.7 支持你的项目在不升级 Vue3 的情况下使用 Vue3 的特性，例如 Composition Api、setup、Css v-bind 等

## vue2.6 升级到 vue2.7

### 一、删除 node_modules 和 package-lock.json

为了确保我们后面升级的依赖版本是正确的，在一开始时我们直接先将项目的 node_modules 和 package-lock.josn 删除，避免出现各种缓存问题。

### 二、升级过程

1. vue-cli 脚手架升级
   现在我们先按照要求升级脚手架的版本，Vue2.7 对于要求 vue-cli 版本要求如下：

如果你的 vue-cli 是 v4 版本的，那么你需要将其升级到~4.5.18
如果你的 vue-cli 是 v5 版本的，那么你需要将其升级到~5.0.6

```json
{
  "devDependencies": {
    // "@vue/cli-plugin-babel": "^4.0.0",
    // "@vue/cli-plugin-eslint": "^4.0.0",
    // "@vue/cli-service": "^4.0.0",
    // 修改为
    "@vue/cli-plugin-babel": "^4.5.18",
    "@vue/cli-plugin-eslint": "^4.5.18",
    "@vue/cli-service": "^4.5.18"
  }
}
```

2. vue 版本升级

```json
{
  "dependencies": {
    // "vue": "2.6.14",
    "vue": "2.7.0"
    // vue2.7 不再需要 vue-template-compoler，所以可以将其删除
    // "vue-template-compiler": "2.6.14",
  }
}
```

3. @vue/composition-api
   有些人可能已经在 Vue2 的项目使用上了@vue/composition-api，这时你需要将项目中所用到的导入更新为 vue:

```js
// import { ref } from '@vue/composition-api'
import { ref } from 'vue'
```

但@vue/composition-api 里的一些 API，如 createApp，并未完全在 Vue2.7 里移植，所以如果你用到了这些 API，那还是使用继续使用@vue/composition-api，若你用到的 API 都是 Vue2.7 里有的，则可以将@vue/composition-api 从依赖中删去了。

### 三、使用

经过上面的改动后，现在可以重新安装依赖并运行起来了，接着就可以品尝 Vue3 的新写法了。

```vue
<template>
  <div>
    <el-button @click="decrease">-</el-button>
    <el-button>{{ count }}</el-button>
    <el-button @click="increase">+</el-button>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  let count = ref(1)

  const decrease = () => {
    count.value--
  }

  const increase = () => {
    count.value++
  }
</script>
```

另外，Vue2.7 支持在模板表达式中使用 ESNext 语法，这意味着可以在 template 里使用可选链了，以往在 Vue2 中，template 里并不支持可选链写法，现在在 Vue2.7 里的 template 中则可以愉快的使用可选链了。

```vue
<template>
  <div>
    {{ userInfo?.name }}
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  let userInfo = ref(null)
</script>
```

### 四、eslint 问题

在上面的代码中，会出现 Eslint 未使用变量的错误提示。

解决这个问题我们需要将 eslint-plugin-vue 版本升级到 9+。

```
npm i eslint-plugin-vue@9.0.0 -D
```
