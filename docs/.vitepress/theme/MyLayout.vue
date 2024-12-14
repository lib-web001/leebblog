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

    <!-- <template #page-bottom>pageBottom</template> -->

    <template #doc-bottom>
      <!-- 当前页阅读量为:
      <span class="waline-pageview-count" data-path="/guide/client/count.html" /> -->
      <div id="article-info">
        <!-- ... -->
        阅读量: <span class="waline-pageview-count" data-path="<Your/Path/Name>" />
        <!-- ... -->
      </div>
      <div id="waline"></div>
      <img
        @load="onWalineLoad"
        src="https://jf-temp-1301446188.cos.ap-guangzhou.myqcloud.com/logo2"
        style="display: none"
      />
    </template>
    <!-- <template #doc-after>content</template>
    <template #layout-after>content</template>
    <template #layout-bottom>content</template> -->

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

const { Layout } = BlogTheme

function onWalineLoad() {
  console.log('onWalineLoad')

  import('https://unpkg.com/@waline/client@v3/dist/waline.js').then(({ init, pageviewCount }) => {
    init({
      el: '#waline',
      serverURL: 'https://hfymark.netlify.app/.netlify/functions/comment'
    })
  })
}
</script>
