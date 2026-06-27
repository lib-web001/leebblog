import fs from 'fs'
import path from 'path'

// 友链同步配置
// 默认从本地 docs/.vitepress/friends.json 读取，或可改为远端 apiUrl
export default {
  // 本地优先
  request() {
    try {
      const p = path.resolve(path.join(path.dirname(new URL(import.meta.url).pathname), '..', 'docs', '.vitepress', 'friends.json'))
      const str = fs.readFileSync(p, 'utf-8')
      return JSON.parse(str)
    } catch (e) {
      // 如果本地不存在，可返回 [] 或尝试请求远端
      if (this.apiUrl) {
        return fetch(this.apiUrl).then((r) => r.json()).catch(() => [])
      }
      return []
    }
  },

  // 如果需要，可设置 apiUrl, method, headers
  // apiUrl: 'https://example.com/friends.json',

  // 解析接口返回
  parseList(res) {
    return res?.data?.list || res?.data || res || []
  },

  mapFields(item) {
    return {
      name: item.name || item.title || item.site || '',
      url: item.url || item.link || item.siteUrl || item.website || '#',
      desc: item.desc || item.description || item.note || '',
      logo: item.logo || item.avatar || ''
    }
  },

  // 输出文件
  outputFile: 'docs/friends.md',
  title: '友链',
  timeout: 30000
}
