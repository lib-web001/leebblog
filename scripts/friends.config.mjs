import fs from 'fs'
import path from 'path'

// 友链同步配置
// 优先从本地 docs/.vitepress/friends.json 读取，若不存在则请求远端 apiUrl
export default {
  apiUrl:
    'http://jf-temp-1301446188.cos.ap-guangzhou.myqcloud.com/leeb/text/eyJuYW1lIjoiZnJpZW5kcy50eHQiLCJpZCI6ImxlZWIvdGV4dC9leUp1WVcxbElqb2labkpwWlc1a2N5NTBlSFFpTENKcFpDSTZJbXhsWldJdmRHVjRkQzlsZVVwMVdWY3hiRWxxYjJsYWJrcHdXbGMxYTJONU5UQmxTRkZwVEVOS2NGcERTVFpKYlUwMFlUSnJNR0V5UmpGUFIyYzBTV2wzYVZwSGJIbEphbTlwU1dsM2FXSXpaSFZhV0VscFQybEtNVmg2UlROT2VtTTFUbFJqTkU1cVozaE5ha0ZwWmxFOVBTSXNJbVJwY2lJNklpSXNJbTkzYm1WeUlqb2lkVjh4TnpjM09UVTNPRFk0TVRJd0luMD0iLCJkaXIiOiIiLCJvd25lciI6InVfMTc3Nzk1Nzg2ODEyMCJ9',

  // 优先读取本地文件，否则通过 fetch 获取并尝试解析（支持非标准引号）
  async request() {
    try {
      const p = path.resolve(
        path.join(
          path.dirname(new URL(import.meta.url).pathname),
          '..',
          'docs',
          '.vitepress',
          'friends.json'
        )
      )
      const str = fs.readFileSync(p, 'utf-8')
      return JSON.parse(str)
    } catch (e) {
      // 本地不存在，尝试远端
      if (!this.apiUrl) return []
      try {
        const res = await fetch(this.apiUrl, { method: 'GET' })
        const txt = await res.text()
        // 处理常见非标准 JSON（如中文/花括号单引号 ‘ ’）
        let norm = txt.trim()
        // replace fancy single quotes and straight single quotes with double quotes
        norm = norm.replace(/[‘’']/g, '"')
        // ensure keys are quoted: {name: => {"name":
        norm = norm.replace(/([\{,\s])(\w+)\s*:/g, '$1"$2":')
        // try parse
        return JSON.parse(norm)
      } catch (e2) {
        console.warn('[friends.config] parse remote friends failed:', e2.message)
        return []
      }
    }
  },

  // 解析接口返回（一般返回数组）
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
