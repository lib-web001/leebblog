---
tag:
 - 开发体验
---

# jest

## 前端工程化

- 前端自动化测试

- 高质量代码设计

- 高质量代码实现

jest.config.js

```js
const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname),
  clearMocks: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  // 別名設置
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/components/$1'
  },
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  // 測試文件
  testMatch: ['<rootDir>/tests/unit/*.spec.ts?(x)'],

  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\js$': 'babel-jest',
    '^.+\\.(t|j)sx?$': 'ts-jest'
  }
}
```

test/unit/HelloWorld.spec.ts

```js
import { mount } from '@vue/test-utils'
import HelloWorld from '@/HelloWorld.vue'

test('displays message', async () => {
  const wrapper = await mount(HelloWorld)

  // Assert the rendered text of the component
  expect(wrapper.find('p').text()).toBe('0')
  await wrapper.find('button').trigger('click')
  expect(wrapper.find('p').text()).toBe('1')
})
```

store

```js
import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

export interface State {
  count: number;
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store =
  createStore <
  State >
  {
    state() {
      return {
        count: 0
      }
    },
    mutations: {
      increment(state) {
        state.count++
      }
    }
  }
```

main.ts

```js
import { createApp } from 'vue'
import { store, key } from './store'
import App from './App'
import './index.css'

const app = createApp(App)
app.use(store, key)
app.mount('#app')
```

组件

```vue
<template>
  <h1>{{ msg }}</h1>
  <button @click="inCrement">count is:</button>
  <p>{{ count }}</p>
</template>

<script>
  import { defineComponent, computed } from 'vue'
  import { useStore } from 'vuex'
  import { key } from '../store'

  export default defineComponent({
    name: 'HelloWorld',
    props: {
      msg: {
        type: String,
        default: ''
      }
    },
    setup() {
      const store = useStore(key)

      const count = computed(() => store.state.count)

      return {
        count,
        inCrement: () => store.commit('increment')
      }
    }
  })
</script>
```

## vue/test-utils

### mount 和 shallowMount 区别

mount-> 会渲染出子组件
shallowMount-> 会用存根替换子组件

### api

- **1. condition**

```js
// const app = {
//   template: `
//     <div>
//       <button type="button">all</button>
//       <button v-if="admin" type="button" id="admin">admin</button>
//       <button v-show="dev" type="button" id="dev">dev</button>
//     </div>
//   `,
//   props: {
//     dev: Boolean
//   },
//   data() {
//     return {
//       admin: true,
//     }
//   }
// }
// v-if 使用 exists
// v-show 使用 isVisible
// get 元素一定存在
// find 可能不存在
import { shallowMount, mount } from '@vue/test-utils'

describe('测试条件渲染', () => {
  it('admin 存在', () => {
    const wrapper = shallowMount(app)
    expect(wrapper.find('#admin').exists()).toBe(true)
  })

  it('admin 不存在', () => {
    const wrapper = shallowMount(app, {
      data() {
        return {
          admin: false
        }
      }
    })
    expect(wrapper.find('#admin').exists()).toBe(false)
  })

  it('dev 不可见', () => {
    const wrapper = shallowMount(app)
    expect(wrapper.find('#dev').isVisible()).toBe(false)
  })
  it('dev 可见', () => {
    const wrapper = mount(app, {
      props: {
        dev: true
      }
    })
    // expect(wrapper.find('#dev').exists()).toBe(true)
    // expect(wrapper.find('#dev').isVisible()).toBe(true)
  })
})
```

- **2. throw**

```js
const testFn = () => {
  throw new Error('test')
}

const fetchData = async () => {
  return new Promise((resolve) => {
    resolve(new Error('test'))
  })
}

describe('函数', () => {
  test('should throw error', () => {
    expect(testFn).toThrow()
    expect(testFn).not.toThrow('a')
    expect(testFn).toThrow('test')
  })

  test('异步函数', () => {
    fetchData((n) => {
      expect(n).toThrow('test')
    })
  })
})
```

- **3. slot**

```vue
<template>
  <div>
    <div class="left">
      <slot name="left">
        <p>插槽后备内容</p>
      </slot>
    </div>
    <slot></slot>
    <p>hello {{ globName }}</p>
    <slot name="right" :msg="msg"></slot>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        msg: 'right'
      }
    }
  }
</script>
```

```js
import { shallowMount } from '@vue/test-utils'
import Slot from './Slot'

const MyComponent = {
  template: `<span>自定义组件</span>`
}
// NOTE 测试插槽
describe('测试插槽', () => {
  it('测试插槽', () => {
    const wrapper = shallowMount(Slot, {
      slots: {
        default: [
          `<h2>默认插槽</h2>`,
          `<h2>默认插槽</h2>`,
          `<h2>默认插槽</h2>`
        ],
        left: '<div>left 插槽<MyComponent/></div>'
      },
      stubs: {
        // 用来注册自定义组件
        MyComponent
      },
      mocks: {
        // 用来向渲染上下文添加 property
        globName: 'jest'
      }
    })
    console.log(wrapper.html())
    expect(wrapper.html()).toContain('jest')
  })

  it('作用域插槽', () => {
    const wrapper = shallowMount(Slot, {
      data() {
        return { msg: '老六' }
      },
      scopedSlots: {
        right(props) {
          return <div class="right">hello {props.msg}</div>
        }
      }
    })
    expect(wrapper.find('.right').text()).toContain('老六')
  })
})
```

- **4. object api**

```js
describe('对象和数组匹配器', () => {
  test('toBe', () => {
    // NOTE 相同，即同一个引用
    const a = { name: 'jest' }
    expect(a).toBe(a)
    expect(a).not.toBe({ name: 'jest' })
    // 数组
    const arr = [1, { name: 'jest' }, 'hello']
    expect(arr).toBe(arr)
    expect(arr).not.toBe([1, { name: 'jest' }, 'hello'])
    expect(arr).toContain(1)
    const set = new Set([1, { name: 'jest' }, 'hello'])
    expect(set).toContain(1)
    expect(set).toContainEqual({ name: 'jest' })
    expect(set).not.toContain({ name: 'jest' })
  })

  test('toEqual', () => {
    // NOTE 值比较，值相同即可
    const a = { name: 'jest' }
    expect(a).toEqual({ name: 'jest' })
    expect(a).toEqual(a)
    // 数组
    const arr = [1, { name: 'jest' }, 'hello']
    expect(arr).toEqual(arr)
    expect(arr).toEqual([1, { name: 'jest' }, 'hello'])
  })

  test('toBeNull', () => {
    const a = null
    expect(a).toBeNull()
    expect(a).not.toBe(undefined)
  })

  test('toBeUndefined', () => {
    const a = undefined
    const b = ''
    expect(a).toBeUndefined()
    expect(b).toBeDefined()
    expect(b).not.toBeUndefined()
  })
  test('测试属性', () => {
    // toBeInstanceOf
    expect({ name: 'jest' }).toHaveProperty('name')
  })
})

describe('数值匹配器', () => {
  test('大于等于', () => {
    expect(100).toEqual(100)
    expect(200).toBeGreaterThan(100)
    expect(200).toBeGreaterThanOrEqual(20)
  })
  test('小于等于', () => {
    expect(200).toBeLessThan(300)
    expect(200).toBeLessThanOrEqual(300)
  })
  test('等于', () => {
    // console.log(0.1 + 0.2) // NOTE js 浮点数预算不精确，无法计算全等
    expect(0.1 + 0.2).toBeCloseTo(0.3)
    expect(0.1 + 0.2).not.toEqual(0.3)
  })
})

describe('字符串匹配器', () => {
  test('包含', () => {
    const hello = 'hello world'
    expect(hello).toEqual('hello world')
    expect(hello).toMatch('hello')
    expect(hello).toContain('world')
    expect(hello).not.toMatch('hello2')
  })
})
```

- **5. http api**

```vue
<template>
  <div>
    <button type="button" @click="onClick"></button>
    <subComponent />
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    mounted() {
      axios.get('/')
    },
    methods: {
      onClick() {
        this.$emit('my-click', 'hello', 123)
      }
    }
  }
</script>
```

```js
import { shallowMount } from '@vue/test-utils'
import HttpTest from './HttpTest.vue'

function factory() {
  return shallowMount(HttpTest, {
    global: {
      stubs: {
        subComponent: {
          template: `<span></span>`
        },
        HelloWorld: true
      }
    }
  })
}

let mockGet = '' //jest.fn()

jest.mock('axios', () => {
  return { get: () => mockGet() }
})
describe('HttpTest', () => {
  // 每个 it 都会执行
  beforeEach(() => {
    mockGet = jest.fn()
  })

  it('模拟子组件', () => {
    console.log(HttpTest)
    const wrapper = factory()
    console.log(wrapper.html())
  })

  it('测试 http 请求', () => {
    const wrapper = factory()
    expect(mockGet).toHaveBeenCalled()
    expect(mockGet).toHaveBeenCalledTimes(1)
  })

  it('测试自定义事件', () => {
    const wrapper = factory()
    const button = wrapper.find('button')
    button.trigger('click')
    button.trigger('click')
    console.log(wrapper.emitted())
    console.log(wrapper.emitted('my-click'))
    // NOTE 自定义事件
    expect(wrapper.emitted()).toHaveProperty('my-click')
    // NOTE 自定义事件抛出的数据
    // 第一次触发保存在 0 下标  第二次触发 保存在 1 下标
    expect(wrapper.emitted('my-click')[0]).toEqual(['hello', 123])
    expect(wrapper.emitted('my-click')[1]).toEqual(['hello', 123])
    // expect(wrapper.emitted()['my-click'][0][0]).toBe('hello')
  })
})
```

### 测试覆盖率

生成测试覆盖率 jest --coverage
测试覆盖率：就是执行过的代码占总代码的比例，比如执行了多少行(Line)，执行了多少个分支(Branch)，执行了多少个函数(Function)，执行了多少条语句(Statement)。

### vue3 + vite + typescript + eslint + jest 項目配置

1. 项目初始化

### 全局安裝 vite-app

npm i -g vite-app

### 建立項目

yarn create vite-app project-name

### 或者

npm init vite-app project-name

2. 引入 TypeScript

yarn add --dev typescript

3. 在 項目根目錄下建立 typescript 的配置文件 tsconfig.json

```js
{
  "compilerOptions": {
    // 容許從沒有設置默認導出的模塊中默認導入。這並不影響代碼的輸出，僅爲了類型檢查。
    "allowSyntheticDefaultImports": true,

    // 解析非相對模塊名的基準目錄
    "baseUrl": ".",

    "esModuleInterop": true,

    // 從 tslib 導入輔助工具函數（好比 __extends， __rest等）
    "importHelpers": true,

    // 指定生成哪一個模塊系統代碼
    "module": "esnext",

    // 決定如何處理模塊。
    "moduleResolution": "node",

    // 啓用全部嚴格類型檢查選項。
    // 啓用 --strict至關於啓用 --noImplicitAny, --noImplicitThis, --alwaysStrict，
    // --strictNullChecks和 --strictFunctionTypes和--strictPropertyInitialization。
    "strict": true,

    // 生成相應的 .map文件。
    "sourceMap": true,

    // 忽略全部的聲明文件（ *.d.ts）的類型檢查。
    "skipLibCheck": true,

    // 指定ECMAScript目標版本
    "target": "esnext",

    // 要包含的類型聲明文件名列表
    "types": [],

    "isolatedModules": true,

    // 模塊名到基於 baseUrl的路徑映射的列表。
    "paths": {
      "@/*": ["src/*"]
    },
    // 編譯過程當中須要引入的庫文件的列表。
    "lib": ["ESNext", "DOM", "DOM.Iterable", "ScriptHost"]
  },
  "include": [
    "src/**/*.ts",
    "src/**/*.tsx",
    "src/**/*.vue",
    "tests/**/*.ts",
    "tests/**/*.tsx"
  ],
  "exclude": ["node_modules"]
}
```

4. 在 src 目錄下新加 shim.d.ts 文件

```js
import type { DefineComponent } from 'vue'

declare module '*.vue' {
  const component: DefineComponent<{}, {}, any>
  export default component
}
```

5. index.html

```js
<script type="module" src="/src/main.js"></script>
// 改成
<script type="module" src="/src/main.ts"></script>
```

6. 引入 eslint 安裝 eslint prettier 依賴

yarn add --dev eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-vue @typescript-eslint/parser @typescr ipt-eslint/eslint-plugin

7. .eslintrc.js

```js
module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  rules: {
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'vue/custom-event-name-casing': 'off',
    'no-use-before-define': 'off',
    // 'no-use-before-define': [
    //   'error',
    //   {
    //     functions: false,
    //     classes: true,
    //   },
    // ],
    '@typescript-eslint/no-use-before-define': 'off',
    // '@typescript-eslint/no-use-before-define': [
    //   'error',
    //   {
    //     functions: false,
    //     classes: true,
    //   },
    // ],
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^h$',
        varsIgnorePattern: '^h$'
      }
    ],
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^h$',
        varsIgnorePattern: '^h$'
      }
    ],
    'space-before-function-paren': 'off',
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'never']
  }
}
```

8. prettier.config.js

```js
module.exports = {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: false, // 未尾逗號
  vueIndentScriptAndStyle: true,
  singleQuote: true, // 單引號
  quoteProps: 'as-needed',
  bracketSpacing: true,
  trailingComma: 'none', // 未尾分號
  jsxBracketSameLine: false,
  jsxSingleQuote: false,
  arrowParens: 'always',
  insertPragma: false,
  requirePragma: false,
  proseWrap: 'never',
  htmlWhitespaceSensitivity: 'strict',
  endOfLine: 'lf'
}
```

9. 引入 jest 測試

yarn add --dev @babel/core @babel/preset-env @testing-library/jest-dom @types/jest @vue/test-utils@next babel-jest jest ts-jst vue-jest@next

## Jest 简介和环境搭建

- 主流前端测试框架

  1. Jasmine ： JavaScript 测试框架（BDD-集成测试开发框架），这个也算是比较早的测试框架。
  2. MOCHA: 它是一个功能丰富的 JavaScript 测试框架，运行在`Node.js`和浏览器中，使异步测试变得简单有趣。
  3. Jest：目前最流行的前端测试框架，几乎国内所有的大型互联网公司都在使用。具体好处会在下面详细说清楚。

- Jest 测试框架优点
  1. 比较新：喜新厌旧是人的天性，作为一个程序员，你更要有拥抱全新知识的态度。绝不能固步自封，顽固不化。
  2. 基础很好：框架基础好就是性能好、功能多、简单易用，Jest 在这三个方面你可以完全放心。
  3. 速度快： 单独模块测试功能，比如说有两个模块 A 和 B，以前都测试过了，这时候你只改动 A 模块，再次测试，模块 B 不会再跑一次，而是直接测试 A 模块。
  4. `API`简单 ：等你基础知识学完后，你就会发现`API`非常简单，数量也少。
  5. 隔离性好：Jest 里会有很多的测试文件等待我们使用，Jest 的执行环境都是隔离，这样就避免不同的测试文件执行的时候互相影响而造成出错。
  6. `IDE`整合：Jest 直接可以和很多编辑器`（VSCode）`进行融合，让测试变的更加简单。
  7. 多项目并行：比如我们写了`Node.js`的后台项目，用 React 写了一个前台项目，Jest 是支持他们并行运行，让我们的效率更加提高了。
  8. 快出覆盖率：（测试代码覆盖率） 对于一个项目的测试都要出覆盖率的，Jest 就可以快速出这样的覆盖率统计结果，非常好用。

### Jest 环境搭建

- 生成`package.json`

  `npm init`

- 安装 Jest 框架

  `npm install jest@24.8.0 -D`

### Jest 实例

1. 编写`bao.js`文件

   ```js
   function bao1(money) {
     return money >= 200 ? '至尊享受' : '基本按摩'
   }
   function bao2(money) {
     return money >= 1000 ? '双人服务' : '单人服务'
   }
   module.exports = {
     bao1,
     bao2
   }
   ```

2. 编写`bao.test.js`文件

   ```js
   const bao = require('./bao.js')
   const { bao1, bao2 } = bao
   test('保健1 300元', () => {
     expect(bao(300)).toBe('至尊享受')
   })
   test('保健2  2000元', () => {
     expect(bao2(2000)).toBe('双人服务')
   })
   ```

3. 单元测试

   要进行测试，我们可以打开`package.json`文件，然后把里边的`scripts`标签的值修改为`jest`.

   ```js
   {
     "name": "jesttest",
     "version": "1.0.0",
     "description": "",
     "main": "index.js",
     "scripts": {
       "test": "jest"
     },
     "author": "",
     "license": "ISC",
     "devDependencies": {
       "jest": "^24.8.0"
     }
   }
   ```

   `yarn test` 或者`npm run test`

### Jest 基本配置

- 单元测试和集成测试的区别
- Jest 初始化配置
- `coverageDirectory`详解

### Jest 的匹配器

- **Jest 中的匹配器（上）**

  1. `toBe()`匹配器

     `toBe()`匹配器，是在工作中最常用的一种匹配器，简单的理解它就是相等。

     ```js
     test('测试严格相等', () => {
       const a = { number: '007' }
       expect(a).toBe({ number: '007' })
     })
     ```

  2. `toEqual()`匹配器

     `toEqual（）`匹配器，不严格匹配但要求值相等时就可以使用。

     ```js
     test('测试严格相等', () => {
       const a = { number: '007' }
       expect(a).toEqual({ number: '007' })
     })
     ```

  3. `toBeNull`匹配器

     `toBeNul()`匹配器只匹配`null`值，需要注意的是不匹配`undefined`的值。

     ```js
     test('toBeNull测试', () => {
       const a = null
       expect(a).toBeNull()
     })
     ```

  4. `toBeUndifined()`匹配器

     要匹配`undefined`时，就可以使用`toBeUndifined()`匹配器。

     ```js
     test('toBeUndefined测试', () => {
       const a = undefined
       expect(a).toBeUndefined()
     })
     ```

  5. `toBeDefined()`匹配器

     `toBeDefined()`匹配器的意思是只要定义过了，都可以匹配成功。

     ```js
     test('toBeDefined测试', () => {
       const a = 'jspang'
       expect(a).toBeDefined()
     })
     ```

  6. `toBeTruthy()`匹配器

     这个是`true`和`false`匹配器，就相当于判断真假的。

     ```js
     test('toBeTruthy 测试', () => {
       const a = 0
       expect(a).toBeTruthy()
     })
     ```

  7. `toBeFalsy()`匹配器

     这个匹配器只要是返回的`false`就可以通过测试。

     ```js
     test('toBeFalsy 测试', () => {
       const a = 0
       expect(a).toBeFalsy()
     })
     ```

- **Jest 中的匹配器（中）**

  1. `toBeGreaterThan()`匹配器

     这个是用来作数字比较的，大于什么数值，只要大于传入的数值，就可以通过测试。

     ```js
     test('toBeGreaterThan匹配器', () => {
       const count = 10
       expect(count).toBeGreaterThan(9)
     })
     ```

  2. `toBeLessThan()`匹配器

     `toBeLessThan`跟`toBeGreaterThan`相对应的，就是少于一个数字时，就可以通过测试。

     ```js
     test('toBeLessThan匹配器', () => {
       const count = 10
       expect(count).toBeLessThan(11)
     })
     ```

  3. `toBeGreaterThanOrEqual()`匹配器

     当测试结果数据大于等于期待数字时，可以通过测试。

     ```js
     test('toBeGreaterThan匹配器', () => {
       const count = 10
       expect(count).toBeGreaterThan(10)
     })
     ```

  4. `toBeGreaterThanOrEqual()`匹配器

     跟`toBeGreaterThanOrEqual()`相对应

  5. `toBeCloseTo()`匹配器

     自动消除`JavaScript`浮点精度错误的匹配器

     不通过

     ```js
     test('toEqual匹配器', () => {
       const one = 0.1
       const two = 0.2
       expect(one + two).toEqual(0.3)
     })
     ```

     通过

     ```js
     test('toBeCloseTo匹配器', () => {
       const one = 0.1
       const two = 0.2
       expect(one + two).toBeCloseTo(0.3)
     })
     ```

- **Jest 中的 son 配器（下）**

  1. `toMatch()`匹配器

     字符串包含匹配器

     ```js
     test('toMatch匹配器', () => {
       const str = '谢大脚、刘英、小红'
       expect(str).toMatch('谢大脚')
     })

     // 可以写正则表达式
     test('toMatch匹配器', () => {
       const str = '谢大脚、刘英、小红'
       expect(str).toMatch(/谢大脚/)
     })
     ```

  2. `toContain()`匹配器

     数组包含的匹配器

     ```js
     test('toContain匹配器', () => {
       const arr = ['谢大脚', '刘英', '小红']
       expect(arr).toContain('谢大脚')
     })
     // 完美的兼容set的测试
     test('toContain匹配器', () => {
       const arr = ['谢大脚', '刘英', '小红']
       const data = new Set(arr)
       expect(data).toContain('谢大脚')
     })
     ```

  3. `toThrow()`匹配器

     门对异常进行处理的匹配器，可以检测一个方法会不会抛出异常。

     ```js
     const throwNewErrorFunc = () => {
       throw new Error('this is a new error')
     }
     test('toThrow匹配器', () => {
       expect(throwNewErrorFunc).toThrow()
     })
     // 可以对这个匹配器中加一些字符串，意思就是抛出的异常必须和字符串相对应。
     test('toThrow匹配器', () => {
       expect(throwNewErrorFunc).toThrow('this is a new error')
     })
     ```

  4. `not`匹配器

     not`匹配器是`Jest`中比较特殊的匹配器，意思就是`相反`或者说`取反

     ```js
     const throwNewErrorFunc = () => {
       throw new Error('this is a new error')
     }

     test('toThrow匹配器', () => {
       expect(throwNewErrorFunc).not.toThrow()
     })
     ```

  5. 其它匹配器

     `https://jestjs.io/docs/en/expect`

### Jest 支持`import`和`ES6`语法

- **开启自动化测试（`package.js`）**

  ```json
  {
    "name": "jesttest",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "test": "jest --watchAll",
      "coverage": "jest --coverage"
    },
    "author": "",
    "license": "ISC",
    "devDependencies": {
      "jest": "^24.8.0"
    }
  }
  ```

  目前我们的 Jest 是不支持`import...from....`这种形式，如果使用就会报错，因为 Jest 默认支持的是`CommonJS`规范，也就是`Node.js`中的语法，他只支持`require`这种引用。所以我们使用`import...from...`是`ES6`的语法，所以使用就会报错。

  1. Babel 转换器的安装

     `npm install @babel/core@7.4.5 @babel/preset-env@7.4.5 -D`

     `yarn add  @babel/core@7.4.5 @babel/preset-env@7.4.5  --dev`

     ```json
     // 安装完成，然后打开package.json文件，可以看到这两行代码
     "devDependencies": {
         "@babel/core": "^7.4.5",
         "@babel/preset-env": "^7.4.5",
         "jest": "^24.8.0"
      },
     ```

  2. Babel 的基本配置

     项目根目录下新建一个`.babelrc`的文件，写入 babel 的转换配置。

     ```js
     {
         "presets":[
             [
                     "@babel/preset-env",{
                     "targets":{
                         "node":"current"
                     }
                 }
             ]
         ]
     }
     ```

  3. 实现原理和流程

     通过 babel 把`import`形式转行成`require`

     在`Jest`里有一个`babel-jest`组件，我们在使用`yarn test`的时候，它先去检测开发环境中是否安装了`babel`，也就是查看有没有`babel-core`，如果有`bable-core`就会去查看`.babelrc`配置文件，根据配置文件进行转换，转换完成。

### 异步代码的测试方法

1. **回调函数式**

   1. 编写异步代码

      安装

      `npm install axios@0.19.0 --save`

      `yarn add axioss@0.19.0`

      `fetchData.js文件`

      ```js
      import axios from 'axios'

      export const fetchData = (fn) => {
        axios.get('http://a.jspang.com/jestTest.json').then((response) => {
          fn(response.data)
        })
      }
      ```

   2. 编写测试方法

      `fetchData.test.js`文件

      ```js
      // 错误写法
      // 方法还没有等到回调，我们的结果已经完成了
      import { fetchData } from './fetchData.js'
      test('fetchData 测试', () => {
        fetchData((data) => {
          expect(data).toEqual({
            success: true
          })
        })
      })
      // 正确写法
      import { fetchData } from './fetchData.js'
      test('fetchData 测试', (done) => {
        fetchData((data) => {
          expect(data).toEqual({
            success: true
          })
          done()
        })
      })
      ```

2. **直接返回 promise**

   1. 编写异步代码

      `fetchData.js`文件

      ```js
      export const fetchTwoData = () => {
        return axios.get('http://a.jspang.com/jestTest.json')
      }
      ```

   2. 编写测试方法

      `fetchData.test.js`文件

      ```js
      import { fetchData, fetchTwoData } from './fetchData.js'
      test('FetchTwoData 测试', () => {
        return fetchTwoData().then((response) => {
          expect(response.data).toEqual({
            success: true
          })
        })
      })
      ```

3. **不存在接口的测试**

   1. 编写异步代码

      `fetchData.js`文件

      ```js
      export const fetchThreeData = () => {
        return axios.get('http://a.jspang.com/jestTest_error.json')
      }
      ```

   2. 编写测试方法

      `fetchData.test.js`文件

      ```js
      // 错误写法
      test('FetchThreeData 测试', () => {
        return fetchThreeData().catch((e) => {
          //console.log(e.toString())
          expect(e.toString().indexOf('404') > -1).toBe(true)
        })
      })
      // 正确写法
      test('FetchThreeData 测试', () => {
        expect.assertions(1) // 断言，必须执行一次expect
        return fetchThreeData().catch((e) => {
          expect(e.toString().indexOf('404') > -1).toBe(true)
        })
      })
      ```

4. **`async...await`**

   1. 编写异步代码

      `fetchData.js`文件

      ```js
      export const fetchFourData = () => {
        return axios.get('http://a.jspang.com/jestTest.json')
      }
      ```

   2. 编写测试方法

      `fetchData.test.js`文件

      ```js
      // 复杂的
      test('FetchFourData 测试', async () => {
        //resolves把现有对象转换成Promise对象，
        //toMatchObject 匹配对象中的属性
        await expect(fetchFourData()).resolves.toMatchObject({
          data: {
            success: true
          }
        })
      })
      // 简单的
      test('FetchFourData 测试', async () => {
        const response = await fetchFourData()
        expect(response.data).toEqual({
          success: true
        })
      })
      ```

### Jest 中的四个钩子函数

- **`beforeAll()`钩子函数**

  `beforeAll()`钩子函数的意思是在所有测试用例之前进行执行。

  ```js
  beforeAll(() => {
    console.log('吃完饭后，走进了红浪漫洗浴')
  })
  ```

- **`afterAll()`钩子函数**

  `afterAll()`钩子函数是在完成所有测试用例之后才执行的函数。

  ```js
  afterAll(() => {
    console.log('有钱人的生活就是这么的枯燥且寂寞')
  })
  ```

- **`beforeEach()`钩子函数**

  `beforeEach()`钩子函数，是在每个测试用例前都会执行一次的钩子函数。

  ```js
  beforeEach(() => {
    console.log('给了300元钱后......')
  })
  ```

- **`afterEach()`钩子函数**

  `afterEach()`钩子函数，是在每次测试用例完成测试之后执行一次的钩子函数。

  ```js
  afterEach(() => {
    console.log('完成后，我心满意足的坐在沙发上！！！')
  })
  ```

- **钩子函数实例**

  ```js
  import NewBaoJian from './newBaoJian'
  const baojian = new NewBaoJian()

  beforeAll(() => {
    console.log('吃完饭后，走进了红浪漫洗浴')
  })

  beforeEach(() => {
    console.log('给了300元钱后......')
  })

  test('测试 大脚足浴  方法', () => {
    baojian.gongzhu(1)
    baojian.anjiao()
    console.log(baojian.fuwu)
    expect(baojian.fuwu).toEqual('大脚走进房间为你_足疗')
  })

  test('测试 刘英按摩  方法', () => {
    baojian.gongzhu(2)
    baojian.anmo()
    console.log(baojian.fuwu)
    expect(baojian.fuwu).toEqual('刘英走进房间为你_按摩')
  })

  afterEach(() => {
    console.log('完成后，我心满意足的坐在沙发上！！！')
  })

  afterAll(() => {
    console.log('有钱人的生活就是这么的枯燥且寂寞')
  })
  ```

### Jest 中对测试用例进行分组

- **全部测试用例**

  ```js
  import NewBaoJian from './newBaoJian'
  const baojian = new NewBaoJian()

  beforeAll(() => {
    console.log('吃完饭后，走进了红浪漫洗浴')
  })

  beforeEach(() => {
    console.log('给了300元钱后......')
  })

  test('测试 大脚足浴  方法', () => {
    baojian.gongzhu(1)
    baojian.anjiao()
    console.log(baojian.fuwu)
    expect(baojian.fuwu).toEqual('大脚走进房间为你_足疗')
  })

  test('测试 刘英按摩  方法', () => {
    baojian.gongzhu(2)
    baojian.anmo()
    console.log(baojian.fuwu)
    expect(baojian.fuwu).toEqual('刘英走进房间为你_按摩')
  })

  test('测试 大脚泰式保健  方法', () => {
    baojian.gongzhu(1)
    baojian.taishi()
    console.log(baojian.fuwu)
    expect(baojian.fuwu).toEqual('大脚走进房间为你_泰式保健')
  })

  test('测试 刘英宫廷御疗  方法', () => {
    baojian.gongzhu(2)
    baojian.gongting()
    console.log(baojian.fuwu)
    expect(baojian.fuwu).toEqual('刘英走进房间为你_宫廷御疗')
  })

  afterEach(() => {
    console.log('完成后，我心满意足的坐在沙发上！！！')
  })

  afterAll(() => {
    console.log('有钱人的生活就是这么的枯燥且寂寞')
  })
  ```

- **测试分组方法**

  `Jest`为我们提供了一个分组的语法`describe()`,这个方法接受两个参数.

  ```js
  import NewBaoJian from './newBaoJian'
  const baojian = new NewBaoJian()

  beforeAll(() => {
    console.log('吃完饭后，走进了红浪漫洗浴')
  })

  beforeEach(() => {
    console.log('给了300元钱后......')
  })

  describe('大脚相关服务', () => {
    test('测试 大脚足浴  方法', () => {
      baojian.gongzhu(1)
      baojian.anjiao()
      console.log(baojian.fuwu)
      expect(baojian.fuwu).toEqual('大脚走进房间为你_足疗')
    })
    test('测试 大脚泰式保健  方法', () => {
      baojian.gongzhu(1)
      baojian.taishi()
      console.log(baojian.fuwu)
      expect(baojian.fuwu).toEqual('大脚走进房间为你_泰式保健')
    })
  })

  describe('刘英相关服务', () => {
    test('测试 刘英按摩  方法', () => {
      baojian.gongzhu(2)
      baojian.anmo()
      console.log(baojian.fuwu)
      expect(baojian.fuwu).toEqual('刘英走进房间为你_按摩')
    })
    test('测试 刘英宫廷御疗  方法', () => {
      baojian.gongzhu(2)
      baojian.gongting()
      console.log(baojian.fuwu)
      expect(baojian.fuwu).toEqual('刘英走进房间为你_宫廷御疗')
    })
  })

  afterEach(() => {
    console.log('完成后，我心满意足的坐在沙发上！！！')
  })

  afterAll(() => {
    console.log('有钱人的生活就是这么的枯燥且寂寞')
  })
  ```

### 钩子函数的作用域

1. **Jest 钩子函数作用域特点**

   - 钩子函数在父级分组可作用域子集，类似继承
   - 钩子函数同级分组作用域互不干扰，各起作用
   - 先执行外部的钩子函数，再执行内部的钩子函数

2. **钩子函数在父级分组可作用域子集**

   为了更好的说明钩子函数的作用域，现在我们把程序的最外层加入一个`describe`，其实不加这个，系统默认也是有这个的，只是不那么直观。

   在`newBaoJian.test.js`文件中加入`describe`,代码如下：

   ```js
   import NewBaoJian from './newBaoJian'
   const baojian = new NewBaoJian()

   describe('最外层分组', () => {
     beforeAll(() => {
       console.log('吃完饭后，走进了红浪漫洗浴')
     })

     beforeEach(() => {
       console.log('给了300元钱后......')
     })

     describe('大脚相关服务', () => {
       test('测试 大脚足浴  方法', () => {
         baojian.gongzhu(1)
         baojian.anjiao()
         console.log(baojian.fuwu)
         expect(baojian.fuwu).toEqual('大脚走进房间为你_足疗')
       })
       test('测试 大脚泰式保健  方法', () => {
         baojian.gongzhu(1)
         baojian.taishi()
         console.log(baojian.fuwu)
         expect(baojian.fuwu).toEqual('大脚走进房间为你_泰式保健')
       })
     })

     describe('刘英相关服务', () => {
       test('测试 刘英按摩  方法', () => {
         baojian.gongzhu(2)
         baojian.anmo()
         console.log(baojian.fuwu)
         expect(baojian.fuwu).toEqual('刘英走进房间为你_按摩')
       })

       test('测试 刘英宫廷御疗  方法', () => {
         baojian.gongzhu(2)
         baojian.gongting()
         console.log(baojian.fuwu)
         expect(baojian.fuwu).toEqual('刘英走进房间为你_宫廷御疗')
       })
     })

     afterEach(() => {
       console.log('完成后，我心满意足的坐在沙发上！！！')
     })

     afterAll(() => {
       console.log('有钱人的生活就是这么的枯燥且寂寞')
     })
   })
   ```

   写完后你在控制台运行`yarn test`，可以看到`console.log`的顺序和结果并没有改变。并且每一个`beforeEach`和`afterEach`也都在每一个测试用例的前后执行了。这就是我们说的第一条**钩子函数在父级分组可作用域子集，类似继承**

3. **钩子函数同级分组作用域互不干扰**

   现在“大脚”和“刘英”都希望在服务客人后有小费，但是价格不同。这时候就可以在两个同级的`describe`中分别加入不同的`afterEach`，比如大脚要 30 元小费，刘英要 50 元小费。

   ```js
   afterEach(() => {
     console.log('------大脚，你服务的很好，给你30元小费')
   })
   afterEach(() => {
     console.log('------刘英，你服务的很好，给你50元小费')
   })
   ```

   为了看的清楚，你可以暂时注释掉外层的四个钩子函数。这时候输出的结果就变成了。

   ```js
   console.log newBaoJian.test.js:27
       大脚走进房间为你_足疗

     console.log newBaoJian.test.js:41
       ------大脚，你服务的很好，给你30元小费

     console.log newBaoJian.test.js:35
       大脚走进房间为你_泰式保健

     console.log newBaoJian.test.js:41
       ------大脚，你服务的很好，给你30元小费

     console.log newBaoJian.test.js:52
       刘英走进房间为你_按摩

     console.log newBaoJian.test.js:64
       ------刘英，你服务的很好，给你50元小费

     console.log newBaoJian.test.js:59
       刘英走进房间为你_宫廷御疗

     console.log newBaoJian.test.js:64
       ------刘英，你服务的很好，给你50元小费
   ```

   这个案例也说明了钩子函数在同级的`describe`分组里是互不干扰的。

4. **先执行外部的钩子函数**

   钩子函数要有个先后执行的关系。这个关系就是外部先执行，内部后执行。

   现在把已经注释的外层的`beforeAll`钩子函数注释去掉，然后在`describe`中加入`beforeAll`钩子函数。

   ```js
   beforeAll(() => {
     console.log('------然后走进了666号包房')
   })
   ```

   这时候你再看“控制台”的结果，就变成了下面的样子。

   ```js
    console.log newBaoJian.test.js:15
      吃完饭后，走进了红浪漫洗浴

     console.log newBaoJian.test.js:25
       ------然后走进了666号包房

     console.log newBaoJian.test.js:31
       大脚走进房间为你_足疗

     console.log newBaoJian.test.js:45
       ------大脚，你服务的很好，给你30元小费
   ```

   这时候为你让你看的清楚，我再第一个 test 测试用例这里加入一个`only`，加入后，其它的用例都会`skipped`掉，只执行这一个。

   ```js
   test.only('测试 大脚足浴  方法', () => {
     baojian.gongzhu(1)
     baojian.anjiao()
     console.log(baojian.fuwu)
     expect(baojian.fuwu).toEqual('大脚走进房间为你_足疗')
   })
   ```

   这个例子正好说明了，外部的钩子函数先执行，下级的分组后执行，也就是执行顺序是“由外到内”的.`only`的使用在工作中也是经常使用的，因为有时候测试用例很多，不好调试，就可以使用`only`的形式单独调试。

# 前端应用测试简介

测试可保证程序按照预期运行。

测试按照是否需要人工检查，可分为人工测试和自动化测试。

自动化测试就是使用另一个程序去检查你的软件是否按照预期执行。

对前端应用来说，自动化测试有`单元测试（unit test）`、`端到端测试（E2E test）`和`快照测试`。

当谈到程序测试时，往往是指自动化测试。

## 前端应用常用自动化测试有哪些？

### 单元测试

单元测试对程序里的**部分单元（功能）**进行测试，可以是一个函数，一个组件等。

> 优点

1. 运行快。

2. 提供了文档。

理解代码可从单元测试入手。

3. 出现 flaky 测试的几率小。

> 缺点

1. 代码重构困难。

> 书上说这是缺点，我认为是优点，因为单元测试在重构够可检查你是否破坏了其他功能。但是从工作量看，单元测试使得重构的工作量增加，一些开发人员认为是缺点。

2. 只检查程序的一部分，单元测试通过，程序集成后，可能不能按照预期运行。

#### 做单元测试的工具有哪些？

测试框架：mocha、jest、vitest 等。

前端框架测试套件：vue--- vue-test-util 、react --- testing-libaray

testing-libaray 也支持 vue。

### 快照测试

验证代码修改前后，渲染结果是否不同，快照测试可视为人工的视觉测试。

传统快照测试是在浏览器中启动应用程序并获取渲染页面的屏幕截图。

Jest 快照测试可以对 JavaScript 中任何可序列化值进行对比。

#### 常用的快照测试工具有哪些？

jest、vitest

### 端到端测试

`E2E test`就是从**用户视角**在浏览器上执行用户和程序交互的过程。

端到端测试存在一些问题：

1. 运行慢。

2. 调试困难。

降低调试难度的方式，在 docker 中运行端到端测试，保证不会因为外部环境导致问题难以复现。

3. 可能是 flaky 测试。

即程序运行正常，测试还是失败，可能是因为运行时间太长或者 API 失效等。

端到端测试可看作自动执行的手动测试。

#### 常用的端到端测试工具有哪些？

cypress、playwright

### 前端没有集成测试？

不建议前端写集成测试，因为难以界定什么是集成，测试用例难以编写和调试。

有人认为在浏览器上执行的测试是集成测试，有人认为对具有依赖关系的模块进行测试都是集成测试。

### 如何平衡各种测试的比重

前端应用测试，不能一股脑的都上以上测试，需要按照重要程度，投入收益比来取舍，以得得到简化工作，但是能保证质量的目的。

单元测试最重要，占比通过在`60%`，甚至只需要单元测试。

快照测试占比`30%`，端到端占比`10%`。

单元测试运行快，可及时给开发者反馈，最重要。

快照测试较快，但是不需要太多快照测试。

### 需要使用测试驱动开发的方式吗？

`TDD`要求开发人员在写代码之前，先写测试，知道所有测试用例通过。

但是实际工作并不按照这样的流程来，还可能不写测试。

### 何时不需要自动化测试？

对需要长期运行，且开发时间充裕的项目而言，充分的自动化测试能带来巨大的收益，能**节省很多时间**。

但是开发时间紧张，或者编写测试的时间比开发时间长，就不该写自动化测试。

> 自动化测试会拖慢项目进度。

### 应该追求 100% 的测试覆盖率吗？

不需要，能保证 70% 已经非常好了。

> 追求 100% 的测试覆盖率，可能会浪费很多时间。

##### vue2.6.14 jest package.json 文件

```json
{
  "name": "my-vue-jest-test2",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "test": "vue-cli-service test:unit"
  },
  "dependencies": {
    "core-js": "^3.8.3",
    "vue": "^2.6.14",
    "vue-router": "^3.6.5",
    "vuex": "^3.6.2"
  },
  "devDependencies": {
    "@vue/cli-plugin-babel": "~5.0.0",
    "@vue/cli-plugin-unit-jest": "~5.0.0",
    "@vue/cli-service": "~5.0.0",
    "@vue/test-utils": "^1.1.3",
    "@vue/vue2-jest": "^27.0.0-alpha.2",
    "babel-jest": "^27.0.6",
    "jest": "^27.0.5",
    "vue-template-compiler": "^2.6.14"
  },
  "browserslist": ["> 1%", "last 2 versions", "not dead"],
  "jest": {
    "preset": "@vue/cli-plugin-unit-jest"
  }
}
```

## 总结

前端应用常用的测试，按照占比或者重要程度排序：单元测试、快照测试和端到端测试。

工作中可能不写测试，或者只写单元测试，不必追求 100% 的测试覆盖率。
