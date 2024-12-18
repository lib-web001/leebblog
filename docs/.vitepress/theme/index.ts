import BlogTheme from '@sugarat/theme'
import { h } from 'vue'
// 自定义样式重载
import './style.scss'

// 自定义主题色
// import './user-theme.css'

// export default {
//   extends: BlogTheme,
//   Layout() {
//     return h(BlogTheme.Layout, null, {
//       'aside-outline-before': () => h('div', { class: 'custom-class' }, '自定义内容')
//     })
//   }
// }

// import DefaultTheme from 'vitepress/theme'

// export default {
//   extends: DefaultTheme,
//   Layout() {
//     return h(DefaultTheme.Layout, null, {
//       'aside-outline-before': () => h(MyComponent)
//     })
//   }
// }

import DefaultTheme from 'vitepress/theme'
import MyLayout from './MyLayout.vue'
import { useRoute } from 'vitepress' // 引入 vue-router

export default {
  extends: BlogTheme,
  // 使用注入插槽的包装组件覆盖 Layout
  Layout: MyLayout
}
