#!/usr/bin/env node
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ARTICLES_DIR = path.resolve(__dirname, '../docs/articles')

function extractFrontmatter(content) {
  const match = content.match(/^---\s*\n([\s\S]*?)\n---/)
  if (!match) return { raw: null, body: content, data: {} }
  const raw = match[1]
  const body = content.slice(match[0].length).trimStart()
  const data = {}
  const lines = raw.split('\n')
  let currentKey = null
  for (const line of lines) {
    const listMatch = line.match(/^(\s+)-\s+(.*)$/)
    if (listMatch && currentKey) {
      if (!Array.isArray(data[currentKey])) data[currentKey] = []
      data[currentKey].push(listMatch[2].trim())
      continue
    }
    const kvMatch = line.match(/^([^:]+)\s*:\s*(.*)$/)
    if (kvMatch) {
      currentKey = kvMatch[1].trim()
      let val = kvMatch[2].trim()
      if (val === '') {
        data[currentKey] = []
      } else {
        data[currentKey] = val
      }
    }
  }
  return { raw, body, data }
}

function hasKey(rawFm, key) {
  const re = new RegExp(`^${key}\\s*:`, 'm')
  return re.test(rawFm || '')
}

function yamlSafeValue(v) {
  // 使用 JSON.stringify 确保特殊字符（如 : # " 等）都被正确转义
  return JSON.stringify(v)
}

function injectFrontmatter(content, fields) {
  const match = content.match(/^(---\s*\n)([\s\S]*?)(\n---\s*(?:\n|$))/)
  if (match) {
    let fm = match[2]
    for (const [k, v] of Object.entries(fields)) {
      if (!hasKey(fm, k)) {
        fm += `\n${k}: ${yamlSafeValue(v)}`
      }
    }
    return content.replace(/^(---\s*\n)([\s\S]*?)(\n---\s*(?:\n|$))/, `---\n${fm}\n---\n`)
  }
  // 没有 frontmatter，新建一个
  const lines = ['---']
  for (const [k, v] of Object.entries(fields)) {
    lines.push(`${k}: ${yamlSafeValue(v)}`)
  }
  lines.push('---', '', content)
  return lines.join('\n')
}

function stripMarkdown(text) {
  return text
    .replace(/!\[.*?\]\(.*?\)/g, '')      // 图片
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // 链接
    .replace(/`{1,3}[^`]*`/g, '')         // 行内代码
    .replace(/```[\s\S]*?```/g, '')       // 代码块
    .replace(/^#{1,6}\s+/gm, '')          // 标题
    .replace(/[*_]{1,2}([^*_]+)[*_]{1,2}/g, '$1') // 粗体斜体
    .replace(/[-*+]\s+/g, '')             // 列表
    .replace(/\|/g, ' ')                  // 表格
    .replace(/>\s+/g, '')                 // 引用
    .replace(/\s+/g, ' ')                 // 空白归一
    .trim()
}

function extractTitle(body, filename) {
  const m = body.match(/^#{1,6}\s+(.+)$/m)
  if (m) return m[1].trim()
  return filename.replace(/\.md$/, '')
}

function extractDescription(body, maxLen = 120) {
  const plain = stripMarkdown(body)
  if (!plain) return ''
  return plain.length > maxLen ? plain.slice(0, maxLen).trim() + '…' : plain
}

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...await walk(full))
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      files.push(full)
    }
  }
  return files
}

async function main() {
  const files = await walk(ARTICLES_DIR)
  let updated = 0
  let skipped = 0

  for (const file of files) {
    const content = await fs.readFile(file, 'utf-8')
    const { raw, body, data } = extractFrontmatter(content)
    const basename = path.basename(file)
    const fields = {}

    if (!data.title && !hasKey(raw, 'title')) {
      fields.title = extractTitle(body, basename)
    }

    if (!data.description && !hasKey(raw, 'description')) {
      const desc = extractDescription(body)
      if (desc) fields.description = desc
    }

    if (Object.keys(fields).length === 0) {
      skipped++
      continue
    }

    const newContent = injectFrontmatter(content, fields)
    await fs.writeFile(file, newContent, 'utf-8')
    updated++
    console.log(`[enhance] ${path.relative(ARTICLES_DIR, file)} => ${Object.keys(fields).join(', ')}`)
  }

  console.log(`\n完成: 更新 ${updated} 篇 | 跳过 ${skipped} 篇`)
}

main().catch(e => {
  console.error(e)
  process.exit(1)
})
