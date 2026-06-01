/**
 * 文章同步配置
 * 根据你的实际接口调整以下配置
 */
export default {
  // 文章列表接口地址
  apiUrl:
    'https://jf-temp-1301446188.cos.ap-guangzhou.myqcloud.com/leeb/eyJuYW1lIjoibWFya2Rvd24taW5kZXguanNvbiIsImlkIjoibWFya2Rvd24taW5kZXgiLCJkaXIiOiIifQ==',

  // 请求方法
  method: 'GET',

  // 请求头（用于鉴权等）
  headers: {
    // 'Authorization': 'Bearer xxx',
    // 'Content-Type': 'application/json'
  },

  // 请求体（POST 时用到）
  // body: JSON.stringify({ page: 1, size: 100 }),

  /**
   * 从接口响应中解析文章列表
   * @param res - fetch 返回的 JSON
   */
  parseList(res: any): any[] {
    // 适配常见响应格式，按你的接口调整
    // 示例1: { code: 200, data: { list: [...] } }
    // 示例2: { data: [...] }
    // 示例3: [...]
    return res?.data?.list || res?.data || res || []
  },

  /**
   * 字段映射：将接口字段映射为脚本需要的字段
   */
  mapFields(item: any) {
    return {
      id: String(item.id || item._id || item.slug),
      title: item.title || item.name || 'untitled',
      category: item.category || item.type || item.group || '其他',
      content: item.content || item.markdown || item.body,
      url: item.url || item.downloadUrl || item.fileUrl,
      frontmatter: item.frontmatter || item.meta,
      updatedAt: item.updatedAt || item.updateTime || item.modified
    }
  },

  // 文章输出根目录（相对于项目根目录）
  outputDir: 'docs/articles',

  // 是否删除本地存在但接口列表中已下架的文章
  // ⚠️ 只会删除由本脚本写入（frontmatter 中带 _syncSource 标记）的文章，不会误删手写文件
  removeDeleted: true,

  // 是否开启增量更新（只更新内容有变化的文章，需接口支持 updatedAt）
  incremental: false,

  // 请求超时（毫秒）
  timeout: 30000
}
