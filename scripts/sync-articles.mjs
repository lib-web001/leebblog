#!/usr/bin/env node
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath, pathToFileURL } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// 加载配置
const { default: config } = await import(
  pathToFileURL(path.join(__dirname, 'sync.config.mjs')).href
)

const OUTPUT_DIR = path.resolve(config.outputDir || 'docs/articles')
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

async function fetchText(url) {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), config.timeout || 30000)
  try {
    const res = await fetch(url, {
      method: 'GET',
      signal: controller.signal,
      headers: config.headers || {}
    })
    clearTimeout(timer)
    if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`)
    return await res.text()
  } catch (e) {
    clearTimeout(timer)
    throw e
  }
}

function sanitizeFilename(name) {
  return (
    name
      .replace(/[\\/:*?"<>|]/g, '_')
      .trim()
      .slice(0, 100) || 'untitled'
  )
}

function hasSyncMark(content) {
  const match = content.match(/^---\s*\n([\s\S]*?)\n---/)
  return match ? match[1].includes('_syncSource:') : false
}

function injectSyncMark(content, extraFm = {}) {
  const match = content.match(/^(---\s*\n)([\s\S]*?)(\n---\s*(?:\n|$))/)
  if (match) {
    let fm = match[2]
    if (!fm.includes('_syncSource:')) {
      fm = `_${SYNC_MARK.slice(1)}\n` + fm
    }
    for (const [k, v] of Object.entries(extraFm)) {
      const keyRe = new RegExp(`^${k}\\s*:`, 'm')
      if (!keyRe.test(fm)) {
        if (Array.isArray(v)) {
          fm += `\n${k}:\n` + v.map((item) => `  - ${item}`).join('\n')
        } else {
          const val = typeof v === 'string' && !/[\n\r]/.test(v) ? v : JSON.stringify(v)
          fm += `\n${k}: ${val}`
        }
      }
    }
    return content.replace(/^(---\s*\n)([\s\S]*?)(\n---\s*(?:\n|$))/, `---\n${fm}\n---\n\n`)
  }

  const lines = ['---', SYNC_MARK]
  for (const [k, v] of Object.entries(extraFm)) {
    if (Array.isArray(v)) {
      lines.push(`${k}:`)
      v.forEach((item) => lines.push(`  - ${item}`))
    } else {
      const val = typeof v === 'string' && !/[\n\r]/.test(v) ? v : JSON.stringify(v)
      lines.push(`${k}: ${val}`)
    }
  }
  lines.push('---', '')
  return lines.join('\n') + '\n' + content
}

async function main() {
  console.log(`[sync] 开始同步文章...`)

  // 1. 获取文章列表
  let list = []
  try {
    if (typeof config.request === 'function') {
      console.log(`[sync] 使用自定义 request 获取列表`)
      list = await config.request()
    } else {
      console.log(`[sync] 使用内置 fetch 请求: ${config.apiUrl}`)
      const res = await fetchJson(config.apiUrl, {
        method: config.method || 'GET',
        body: config.body
      })
      list = config.parseList(res)
    }
  } catch (e) {
    console.error(`[sync] 获取列表失败: ${e.message}`)
    // process.exit(1)
  }

  if (!Array.isArray(list)) {
    console.error('[sync] 解析到的列表不是数组，请检查 request() 或 parseList 配置')
    // process.exit(1)
  }

  console.log(`[sync] 接口返回 ${list.length} 篇文章`)

  // 2. 准备本地目录
  await fs.mkdir(OUTPUT_DIR, { recursive: true })

  const validPaths = new Set()
  let created = 0
  let updated = 0
  let skipped = 0
  let failed = 0

  // 3. 遍历写入
  for (const raw of list) {
    const item = config.mapFields(raw)
    const { id, title, category, content, url, frontmatter, updatedAt } = item

    if (!id) {
      console.warn(`[sync] 跳过无 id 的文章: ${title || JSON.stringify(raw).slice(0, 60)}`)
      continue
    }

    const safeTitle = sanitizeFilename(title)
    const dir = path.join(OUTPUT_DIR, sanitizeFilename(category))
    const filePath = path.join(dir, `${safeTitle}.md`)
    validPaths.add(filePath)

    // 增量更新判断
    if (config.incremental && updatedAt) {
      try {
        const stat = await fs.stat(filePath)
        if (new Date(updatedAt) <= stat.mtime) {
          skipped++
          continue
        }
      } catch {
        // 文件不存在，继续创建
      }
    }

    // 获取 markdown 内容
    let mdContent = ''
    try {
      if (content) {
        mdContent = content
      } else if (url) {
        if (typeof config.fetchContent === 'function') {
          mdContent = await config.fetchContent(url)
        } else {
          mdContent = await fetchText(url)
        }
      } else {
        console.warn(`[sync] 文章无内容且无可下载链接: ${title}`)
        failed++
        continue
      }
    } catch (e) {
      console.error(`[sync] 下载失败 [${title}]: ${e.message}`)
      failed++
      continue
    }

    // 注入同步标记和接口 frontmatter
    const finalContent = injectSyncMark(mdContent, frontmatter || {})

    // 写入
    await fs.mkdir(dir, { recursive: true })
    let isNew = false
    try {
      await fs.access(filePath)
    } catch {
      isNew = true
    }
    await fs.writeFile(filePath, finalContent, 'utf-8')

    if (isNew) {
      created++
      console.log(`[sync] 创建: ${path.relative(OUTPUT_DIR, filePath)}`)
    } else {
      updated++
      console.log(`[sync] 更新: ${path.relative(OUTPUT_DIR, filePath)}`)
    }
  }

  // 4. 清理已删除的同步文章（只删带 _syncSource 标记的，不会误删手写文件）
  if (config.removeDeleted) {
    let removed = 0
    const walk = async (dir) => {
      const entries = await fs.readdir(dir, { withFileTypes: true })
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name)
        if (entry.isDirectory()) {
          await walk(fullPath)
          const remain = await fs.readdir(fullPath).catch(() => [1])
          if (remain.length === 0) {
            await fs.rmdir(fullPath).catch(() => {})
          }
        } else if (entry.isFile() && entry.name.endsWith('.md')) {
          if (!validPaths.has(fullPath)) {
            const content = await fs.readFile(fullPath, 'utf-8').catch(() => '')
            if (hasSyncMark(content)) {
              await fs.unlink(fullPath)
              removed++
              console.log(`[sync] 删除: ${path.relative(OUTPUT_DIR, fullPath)}`)
            }
          }
        }
      }
    }
    await walk(OUTPUT_DIR)
    if (removed) console.log(`[sync] 共清理 ${removed} 篇下架文章`)
  }

  console.log(`[sync] 完成: 新建 ${created} | 更新 ${updated} | 跳过 ${skipped} | 失败 ${failed}`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
