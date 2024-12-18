<template>
  <Layout>
    <!-- <template #aside-outline-before> My custom sidebar top content </template>

    <template #home-hero-before>content</template>

    <template #home-hero-info-before>content</template>

    <template #home-hero-info>content</template>

    <template #home-hero-info-after>content</template>

    <template #home-hero-actions-after>content</template>

    <template #home-hero-image>content</template>

    <template #home-hero-after>content</template>

    <template #home-features-before>content</template>

    <template #home-features-after>content</template>
    <template #page-top>content</template> -->

    <template #page-bottom> </template>

    <template #doc-bottom>
      <!-- 当前页阅读量为:
       
      <span class="waline-pageview-count" data-path="/guide/client/count.html" /> -->
      <div>
        <!-- ... -->
        阅读量: <span id="pageviewCount" :data-path="window?.location?.pathname">0</span>
        <!-- ... -->
      </div>
      <div>
        评论量:
        <span id="commentCount">0</span>
      </div>
      <div ref="walineRef"></div>
    </template>

    <template #doc-after></template>
    <template #layout-after></template>
    <template #layout-bottom>
      <!-- <div
        id="music"
        key="646868c966e23"
        data-key="646868c966e23"
        api="https://player.qsdurl.cn"
      ></div> -->
      <!-- 
      <link rel="stylesheet" id="font-awesome-css" href="https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.min.css" type="text/css" media="all">
      <script src="https://cdn.staticfile.org/jquery/3.5.1/jquery.min.js"></script>
      <script
        defer="true"
        id="xplayer"
        src="https://player.qsdurl.cn/Static/player9/js/player.js"
      ></script> -->
    </template>
    <!--  -->

    <!-- <template #doc-top>content</template>

    <template #doc-footer-before>content</template>

    <template #doc-before>content</template> -->

    <!-- <template #sidebar-nav-before>content</template>

    <template #sidebar-nav-after>content</template>

    <template #aside-top>content</template>

    <template #aside-bottom>content</template>

    <template #aside-outline-after>content</template>

    <template #aside-ads-before>content</template>

    <template #aside-ads-after>content</template> -->
    <!-- <template #not-found>content</template> -->
  </Layout>
</template>

<script setup>
import BlogTheme from '@sugarat/theme'
import { onMounted, ref, onUpdated, watch } from 'vue'
import { useRoute } from 'vitepress' // 引入 vue-router

const { Layout } = BlogTheme

const route = useRoute()
const walineRef = ref()
watch(
  route,
  (newRoute, oldRoute) => {
    setTimeout(async () => {
      // console.log('walineRef', walineRef)
      // console.log('文章切换了', oldRoute, '->', newRoute, a)
      if (!!walineRef.value) {
        // console.log('进来了')
        // const {
        //   default: Waline,
        //   init,
        //   commentCount,
        //   pageviewCount,
        //   update
        // }
        const waline = await import('https://unpkg.com/@waline/client@v3/dist/waline.js')
        console.log(waline, 'init')

        // 初始化 Waline 评论系统

        const res = waline?.init({
          el: walineRef.value,
          // pageview: true, // 浏览量统计
          serverURL: 'https://hfymark.netlify.app/.netlify/functions/comment',
          path: window.location.pathname,
          lang: 'zh', // 设置为中文
          reaction: true,
          comment: '#commentCount',
          pageview: '#pageviewCount'
        })
        // console.log('res', res)
        // res.on('submit', () => {
        //   console.log('submit')
        // })

        // waline?.commentCount({
        //   selector: '#commentCount',
        //   pageview: true,
        //   serverURL: 'https://hfymark.netlify.app/.netlify/functions/comment',
        //   path: window.location.pathname
        // })

        // waline?.pageviewCount({
        //   serverURL: 'https://hfymark.netlify.app/.netlify/functions/comment',
        //   path: window.location.pathname
        // })
      }
    }, 3000)
  },
  {
    immediate: true
  }
)

// 动态加载 CSS 函数
function loadCSS(href) {
  var link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = href
  document.head.appendChild(link)
}

function createDIV(props = {}) {
  var newDiv = document.createElement('div')
  Object.entries(props).forEach((item) => newDiv.setAttribute(item[0], item[1]))
  // newDiv.setAttribute("api",)
  // Object.assign(newDiv, props)

  // 将新创建的 <div> 元素添加到页面中的 <body> 或其他元素中
  document.body.appendChild(newDiv)
}

// 动态加载 JS 函数
function loadJS(src, callback, props = {}) {
  var script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = src
  Object.entries(props).forEach((item) => script.setAttribute(item[0], item[1]))
  // Object.assign(script, props)
  script.onload = function () {
    if (callback) {
      callback()
    }
  }

  script.onerror = function () {
    console.error('Error loading script: ' + src)
  }

  document.head.appendChild(script)
}

onMounted(() => {
  loadCSS('https://unpkg.com/@waline/client@v3/dist/waline.css', () => {})
  loadCSS('https://unpkg.com/@waline/client@v3/dist/waline-meta.css', () => {})

  // createDIV({
  //   id: 'music',
  //   key: '646868c966e23',
  //   api: 'https://player.qsdurl.cn'
  // })
  // loadCSS('https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.min.css')

  // loadJS('https://cdn.staticfile.org/jquery/3.5.1/jquery.min.js', () => {
  //   console.log('jquery loaded')
  //   loadJS(
  //     'https://player-cdn.qsdurl.cn/Static/player9/js/player.js',
  //     () => {
  //       console.log('player loaded')
  //     },
  //     {
  //       defer: true,
  //       id: 'xplayer'
  //     }
  //   )
  // })
})
</script>
