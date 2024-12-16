import { defineConfig } from 'vitepress'
import { SponsorPlugin } from 'vitepress-plugin-sponsor'

// 导入主题的配置
import { blogTheme } from './blog-theme'
import { getSidebar } from '../utils'
import { walinePlugin, musicPlugin } from '../plugins'
// import './static/jquery.min.js'
// import './static/font-awesome.min.css'
// 如果使用 GitHub/Gitee Pages 等公共平台部署
// 通常需要修改 base 路径，通常为“/仓库名/”
// 如果项目名已经为 name.github.io 域名，则不需要修改！
// const base = process.env.GITHUB_ACTIONS === 'true'
//   ? '/vitepress-blog-sugar-template/'
//   : '/'

// Vitepress 默认配置
// 详见文档：https://vitepress.dev/reference/site-config
export default defineConfig(() => {
  const sidebar = getSidebar()

  return {
    outDir: '../dist',
    sitemap: {
      hostname: 'https://hfyf.netlify.app'
    },
    metaChunk: true,
    srcExclude: ['CHANGELOG.md'],
    markdown: {
      image: {
        lazyLoading: true
      }
    },
    ignoreDeadLinks: true,
    vite: {
      plugins: [
        musicPlugin(),
        walinePlugin(),
        // 打赏插件
        SponsorPlugin({
          /**
           * 打赏模块样式
           */
          type: 'simple',
          aliPayQR: 'https://jf-temp-1301446188.cos.ap-guangzhou.myqcloud.com/aliQR.jpg',
          weChatQR: 'https://jf-temp-1301446188.cos.ap-guangzhou.myqcloud.com/wxPayQR.jpg'
        })
      ]
    },
    // hmr: true,
    // 继承博客主题(@sugarat/theme)
    extends: blogTheme,
    // base,
    lang: 'zh-cn',
    title: '飞语',
    description: '韩飞羽的个人博客',
    kwywords: '全能高手,个人网站',
    lastUpdted: true,
    // 详见：https://vitepress.dev/zh/reference/site-config#head
    head: [
      ['meta', { 'http-equiv': 'x-dns-prefetch-control', content: 'on' }],
      [
        'link',
        { rel: 'dns-prefetch', href: 'https://jf-temp-1301446188.cos.ap-guangzhou.myqcloud.com/' }
      ],
      [
        'link',
        { rel: 'icon', href: 'https://jf-temp-1301446188.cos.ap-guangzhou.myqcloud.com/logo2' }
      ],

      [
        'div',
        {
          id: 'music',
          key: '646868c966e23',
          api: 'https://player.qsdurl.cn'
        }
      ],
      [
        'link',
        {
          rel: 'preload',
          href: 'http://jf-temp-1301446188.cos.ap-guangzhou.myqcloud.com/bg1.webp',
          as: 'image/css'
        }
      ]
      // [
      //   'link',
      //   {
      //     rel: 'preload',
      //     href: 'http://jf-temp-1301446188.cos.ap-guangzhou.myqcloud.com/bg2.webp',
      //     as: 'image/css'
      //   }
      // ],
      // [
      //   'link',
      //   {
      //     rel: 'preload',
      //     href: 'http://jf-temp-1301446188.cos.ap-guangzhou.myqcloud.com/bg3.webp',
      //     as: 'image/css'
      //   }
      // ],
      // [
      //   'link',
      //   {
      //     rel: 'preload',
      //     href: 'http://jf-temp-1301446188.cos.ap-guangzhou.myqcloud.com/bg4.webp',
      //     as: 'image/css'
      //   }
      // ],
      // [
      //   'link',
      //   {
      //     rel: 'preload',
      //     href: 'http://jf-temp-1301446188.cos.ap-guangzhou.myqcloud.com/bg5.webp',
      //     as: 'image/css'
      //   }
      // ],
      // [
      //   'link',
      //   {
      //     rel: 'prefetch',
      //     href: 'https://unpkg.com/@waline/client@v3/dist/waline.css',
      //     as: 'text/css'
      //   }
      // ],
      // [
      //   'link',
      //   {
      //     rel: 'stylesheet',
      //     href: 'https://unpkg.com/@waline/client@v3/dist/waline.css',
      //     type: 'text/css',
      //     media: 'all'
      //   }
      // ],
      // [
      //   'link',
      //   {
      //     rel: 'stylesheet',
      //     id: 'font-awesome-css',
      //     href: 'https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.min.css',
      //     type: 'text/css',
      //     media: 'all'
      //   }
      // ],
      // [
      //   'script',
      //   {
      //     src: 'https://cdn.staticfile.org/jquery/3.5.1/jquery.min.js'
      //   }
      // ]
      // [
      //   'script',
      //   {
      //     defer: 'true',
      //     id: 'xplayer',
      //     src: 'https://player-cdn.qsdurl.cn/Static/player9/js/player.js'
      //   }
      // ]
    ],
    themeConfig: {
      // 展示 2,3 级标题在目录中
      outline: {
        level: [2, 3],
        label: '目录'
      },
      // 默认文案修改
      returnToTopLabel: '回到顶部',
      sidebarMenuLabel: '相关文章',
      lastUpdatedText: '上次更新于',

      // 设置logo
      logo: 'https://jf-temp-1301446188.cos.ap-guangzhou.myqcloud.com/logo2',
      // editLink: {
      //   pattern:
      //     'https://github.com/ATQQ/sugar-blog/tree/master/packages/blogpress/:path',
      //   text: '去 GitHub 上编辑内容'
      // },
      sidebar,
      nav: [
        { text: '首页', link: '/' },
        { text: '文章', link: '/articles/开篇/hello' },
        { text: '个性', link: '/sop/individuality#individuality' },
        {
          text: '简介',
          link: 'https://hfyf.netlify.app/'
        },
        {
          text: '记录',
          link: 'https://gtols.netlify.app/#/markdown'
        },
        {
          text: '看书',
          items: [
            {
              text: 'git进阶',
              link: 'https://jf-temp-1301446188.cos.ap-guangzhou.myqcloud.com/R09TUw==/eyJpZCI6IjY4ZTk2YzhiLTQzOGEtNGU5OS05NjE2LWEyZTlkOGJjYmEwYyIsIm5hbWUiOiJwcm9naXQyLnBkZiIsImRpciI6IuS5piJ9'
            },
            {
              text: '你所不知道的javascript上',
              link: 'https://jf-temp-1301446188.cos.ap-guangzhou.myqcloud.com/R09TUw==/eyJpZCI6IjZlNmY5NzhlLTcyYmQtNGEzYi1iMzA4LWRkMmE0ZjkzNDJlNiIsIm5hbWUiOiLkvaDkuI3nn6XpgZPnmoRKYXZhU2NyaXB077yI5LiK5Y2377yJLnBkZiIsImRpciI6IuS5piJ9'
            },
            {
              text: '你所不知道的javascript中',
              link: 'https://jf-temp-1301446188.cos.ap-guangzhou.myqcloud.com/R09TUw==/eyJpZCI6Ijk2YjI5Mzc2LWIzNmEtNDQ4OS1iOWM2LWU4NDk1MzI3MzkyMSIsIm5hbWUiOiLkvaDkuI3nn6XpgZPnmoRKYXZhU2NyaXB077yI5Lit5Y2377yJLnBkZiIsImRpciI6IuS5piJ9'
            },
            {
              text: '你所不知道的javascript下',
              link: 'https://jf-temp-1301446188.cos.ap-guangzhou.myqcloud.com/R09TUw==/eyJpZCI6IjI2NjE2MjUzLWNiYzktNDUzMC1iNzVjLWQ3YTBjODBlZGNhMyIsIm5hbWUiOiLkvaDkuI3nn6XpgZPnmoRKYXZhU2NyaXB077yI5LiL5Y2377yJLnBkZiIsImRpciI6IuS5piJ9'
            }
          ]
        }
        // {
        //   text: '里程',
        //   link: 'https://gmilepost.netlify.app'
        // }
        // { text: '关于作者', link: 'https://sugarat.top/aboutme.html' }
      ],
      socialLinks: [{ icon: 'github', link: 'https://github.com/gzlibiao' }]
    }
  }
})
