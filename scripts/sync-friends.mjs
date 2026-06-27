#!/usr/bin/env node
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath, pathToFileURL } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// 加载配置
const { default: config } = await import(
  pathToFileURL(path.join(__dirname, 'friends.config.mjs')).href
)

const OUTPUT_FILE = path.resolve(config.outputFile || 'docs/friends.md')
const SYNC_MARK = '_syncSource: api'

async function fetchJson(url, options = {}) {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), config.timeout || 30000)
  try {
    const res = await fetch(url, {
      ...options,
      signal: controller.signal,
      headers: {
        ...(options.headers || {}),
        ...(config.headers || {})
      }
    })
    clearTimeout(timer)
    if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`)
    return await res.json()
  } catch (e) {
    clearTimeout(timer)
    throw e
  }
}

function buildFrontmatter(obj) {
  const lines = ['---', SYNC_MARK]
  for (const [k, v] of Object.entries(obj)) {
    if (Array.isArray(v)) {
      lines.push(`${k}:`)
      v.forEach((item) => {
        if (typeof item === 'object') {
          lines.push('  -')
          for (const [kk, vv] of Object.entries(item)) {
            lines.push(`      ${kk}: ${JSON.stringify(vv)}`)
          }
        } else {
          lines.push(`  - ${JSON.stringify(item)}`)
        }
      })
    } else {
      lines.push(`${k}: ${typeof v === 'string' ? v : JSON.stringify(v)}`)
    }
  }
  lines.push('---', '')
  return lines.join('\n')
}

async function main() {
  console.log('[sync-friends] 开始生成友链...')

  let list = []
  try {
    if (typeof config.request === 'function') {
      console.log('[sync-friends] 使用自定义 request 获取列表')
      list = await config.request()
    } else if (config.apiUrl) {
      console.log(`[sync-friends] 使用请求: ${config.apiUrl}`)
      const res = await fetchJson(config.apiUrl, { method: config.method || 'GET' })
      list = config.parseList ? config.parseList(res) : res
    } else {
      console.error('[sync-friends] 未配置 request 或 apiUrl，退出')
      process.exit(1)
    }
  } catch (e) {
    console.error('[sync-friends] 获取列表失败:', e.message)
    process.exit(1)
  }

  if (!Array.isArray(list)) {
    console.error('[sync-friends] 解析到的列表不是数组')
    process.exit(1)
  }

  console.log(`[sync-friends] 获取到 ${list.length} 条友链`)

  // 映射字段
  const items = list.map((raw) => (config.mapFields ? config.mapFields(raw) : raw))

  // 构建 frontmatter，保存原始数据到 friends 字段，方便模板或主题读取
  const front = {
    title: config.title || '友链',
    friends: items
  }

  const fm = buildFrontmatter(front)

  // 构建 body（简单的 Markdown 列表）
  const bodyLines = ['# 友链', '']
  for (const it of items) {
    const name = it.name || it.title || it.display || ''
    const url = it.url || it.link || '#'
    const desc = it.desc || it.description || ''
    bodyLines.push(`- [${name}](${url})${desc ? ' — ' + desc : ''}`)
  }
  bodyLines.push('')

  const final = fm + '\n' + bodyLines.join('\n')

  await fs.mkdir(path.dirname(OUTPUT_FILE), { recursive: true })
  await fs.writeFile(OUTPUT_FILE, final, 'utf-8')
  console.log(`[sync-friends] 写入 ${OUTPUT_FILE}`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})