// 主题独有配置
import { getThemeConfig } from '@sugarat/theme/node'

// 开启RSS支持（RSS配置）
// import type { Theme } from '@sugarat/theme'

// const baseUrl = 'https://sugarat.top'
// const RSS: Theme.RSSOptions = {
//   title: '粥里有勺糖',
//   baseUrl,
//   copyright: 'Copyright (c) 2018-present, 粥里有勺糖',
//   description: '你的指尖,拥有改变世界的力量（大前端相关技术分享）',
//   language: 'zh-cn',
//   image: 'https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTE2NzAzMA==674995167030',
//   favicon: 'https://sugarat.top/favicon.ico'
// }

// 所有配置项，详见文档: https://theme.sugarat.top/
const blogTheme = getThemeConfig({
  // 开启RSS支持
  // RSS,

  // 搜索
  // 默认开启pagefind离线的全文搜索支持（如使用其它的可以设置为false）
  // mermaid: true,

  // 页脚
  footer: {
    version: false,
    // message 字段支持配置为HTML内容，配置多条可以配置为数组
    // message: '下面 的内容和图标都是可以修改的噢（当然本条内容也是可以隐藏的）',
    // copyright: 'MIT License | 韩飞羽'

    message: `😋用心去产出高质量的代码`
    // icpRecord: {
    //   name: '蜀ICP备19011724号',
    //   link: 'https://beian.miit.gov.cn/'
    // },
    // securityRecord: {
    //   name: '公网安备xxxxx',
    //   link: 'https://www.beian.gov.cn/portal/index.do'
    // }
  },

  // 主题色修改
  themeColor: 'el-blue',

  // 文章默认作者
  author: 'leeb',

  // 友链
  friend: [],
  oml2d: {
    // dockedPosition: 'right',
    // mobileDisplay: true,
    // models: [
    //   {
    //     position: [300, 0],
    //     mobilePosition: [0, 0],
    //     // scale: 0.05,
    //     // mobileScale: 0.02,
    //     stageStyle: {
    //       // height: 450
    //     },
    //     // mobileStageStyle: {
    //     //   height: 370,
    //     //   width: 400
    //     // },
    //     // path: 'https://model.oml2d.com/HK416-1-normal/model.json'
    //     path: 'https://model.oml2d.com/haruto/haruto.model.json'
    //     // path: 'https://oml2d-models.sugarat.top/mai/model.json'
    //   }
    // ]
  },
  // 公告
  popover: {
    duration: 3,
    mobileMinify: true,
    title: '公告',
    body: [
      { type: 'text', content: '👇👇👇扫我' },
      {
        type: 'image',
        style: 'height:60px;width:60px;object-fit:cover',
        src: 'https://jf-temp-1301446188.cos.ap-guangzhou.myqcloud.com/weChat.jpg'
      }
    ]
  }
})

export { blogTheme }
