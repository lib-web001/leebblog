#!/usr/bin/env node
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DOCS_DIR = path.resolve(__dirname, '../docs')

function generateAlt(url) {
  try {
    const pathname = new URL(url, 'http://dummy').pathname
    const basename = pathname.split('/').pop() || ''
    const name = basename.replace(/\.[^.]+$/, '')
    return decodeURIComponent(name) || 'image'
  } catch {
    const parts = url.split(/[\/]/)
    const basename = parts[parts.length - 1] || ''
    const name = basename.replace(/\.[^.]+$/, '')
    return decodeURIComponent(name) || 'image'
  }
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
  const files = await walk(DOCS_DIR)
  let totalFixed = 0

  for (const file of files) {
    let content = await fs.readFile(file, 'utf-8')
    let fixed = 0

    // 匹配 ![] 或 ![ ] 后紧跟 (url) 的图片语法
    // 支持可选的 title: ![alt](url "title")
    const regex = /!\[\s*\]\(([^)]+)\)/g
    content = content.replace(regex, (match, url) => {
      const alt = generateAlt(url)
      fixed++
      return `![${alt}](${url})`
    })

    if (fixed > 0) {
      await fs.writeFile(file, content, 'utf-8')
      totalFixed += fixed
      console.log(`[alt] ${path.relative(DOCS_DIR, file)}: 修复 ${fixed} 张图片`)
    }
  }

  console.log(`\n完成: 共修复 ${totalFixed} 张图片的空 alt`)
}

main().catch(e => {
  console.error(e)
  process.exit(1)
})
