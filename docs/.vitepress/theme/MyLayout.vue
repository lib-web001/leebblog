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
      <div id="article-info">
        <!-- ... -->
        阅读量: <span class="waline-pageview-count" :data-path="window?.location?.pathname" />
        <!-- ... -->
      </div>
      <div id="article-info">
        评论量:
        <span id="commentCount"></span>
      </div>
      <div id="waline"></div>
      <img
        hidden
        @load="onWalineLoad"
        src="https://jf-temp-1301446188.cos.ap-guangzhou.myqcloud.com/logo2"
      />
    </template>

    <template #doc-after> </template>
    <template #layout-after>layout-after</template>
    <template #layout-bottom>layout-bottom</template>
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

<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import BlogTheme from '@sugarat/theme'
import { onMounted } from 'vue'

const { Layout } = BlogTheme

function onWalineLoad() {
  console.log('onWalineLoad')

  import('https://unpkg.com/@waline/client@v3/dist/waline.js').then(
    ({ init, commentCount, pageviewCount, update }) => {
      init({
        el: '#waline',
        // pageview: true, // 浏览量统计
        serverURL: 'https://hfymark.netlify.app/.netlify/functions/comment',
        path: window.location.pathname
      })
      commentCount({
        selector: '#commentCount',
        pageview: true, // 浏览量统计
        serverURL: 'https://hfymark.netlify.app/.netlify/functions/comment',
        path: window.location.pathname
      })

      pageviewCount({
        serverURL: 'https://hfymark.netlify.app/.netlify/functions/comment',
        path: window.location.pathname
      })

      update?.({
        lang: 'cn',
        login: 'disable'
      })
    }
  )
  // import('https://unpkg.com/@waline/client@v3/dist/pageview.js').then(({ pageviewCount }) => {
  //   pageviewCount({
  //     serverURL: 'https://hfymark.netlify.app/.netlify/functions/comment',
  //     path: window.location.pathname
  //   })
  // })
}

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
  Object.assign(script, props)
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

  loadCSS('https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.min.css')

  loadJS('https://cdn.staticfile.org/jquery/3.5.1/jquery.min.js', () => {
    console.log('jquery loaded')
    createDIV({
      id: 'music',
      key: '646868c966e23',
      api: 'https://player.qsdurl.cn'
    })
    loadJS(
      'https://player-cdn.qsdurl.cn/Static/player9/js/player.js',
      () => {
        console.log('player loaded')
      },
      {
        id: 'xplayer'
      }
    )
  })
})
</script>
