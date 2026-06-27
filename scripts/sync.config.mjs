export default {
  request() {
    try {
      return fetch(
        'https://jf-temp-1301446188.cos.ap-guangzhou.myqcloud.com/leeb/markdown/eyJuYW1lIjoibWFya2Rvd24taW5kZXguanNvbiIsImlkIjoibWFya2Rvd24taW5kZXgiLCJkaXIiOiIifQ=='
      ).then((r) => r.json())
    } catch (e) {
      return {}
    }
  },

  mapFields(item) {
    const title = item.title || item.name || 'untitled'
    return {
      id: String(item.id || item._id || item.slug),
      title,
      category: item.category || item.type || item.group || '其他',
      content: item.content || item.markdown || item.body,
      url: item.url || item.downloadUrl || item.fileUrl,
      frontmatter: {
        ...(item.frontmatter || item.meta || {}),
        tag: ['动态文章'],
        title
      },
      updatedAt: item.updatedAt || item.updateTime || item.modified
    }
  },

  outputDir: 'docs/articles',
  removeDeleted: true,
  incremental: false
}
