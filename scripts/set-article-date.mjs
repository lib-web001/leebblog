#!/usr/bin/env node
import fs from 'fs/promises'
import path from 'path'
import { execFileSync } from 'child_process'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const DIRS = ['docs/articles', 'docs/sop']

// 目标年份：把 git 最后提交时间的年份替换为该年份
const TARGET_YEAR = 2021

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

function getGitDate(file) {
  try {
    const out = execFileSync('git', ['log', '-1', '--pretty=%ai', '--', path.relative(ROOT, file)], {
      cwd: ROOT,
      encoding: 'utf-8'
    }).trim()
    const m = out.match(/^(\d{4})-(\d{2}-\d{2} \d{2}:\d{2}:\d{2})/)
    if (m) return `${TARGET_YEAR}-${m[2]}`
  } catch {}
  return null
}

function injectDate(content, date) {
  const eol = content.includes('\r\n') ? '\r\n' : '\n'
  const fmMatch = content.match(/^---\r?\n[\s\S]*?\r?\n---/)
  if (fmMatch) {
    if (/^date\s*:/m.test(fmMatch[0])) return null
    // 插入到 frontmatter 开头
    return content.replace(/^---(\r?\n)/, `---$1date: "${date}"$1`)
  }
  return `---${eol}date: "${date}"${eol}---${eol}${eol}${content}`
}

async function main() {
  let updated = 0
  let skipped = 0

  for (const dir of DIRS) {
    const absDir = path.join(ROOT, dir)
    const files = await walk(absDir).catch(() => [])
    for (const file of files) {
      const content = await fs.readFile(file, 'utf-8')
      const date = getGitDate(file)
      if (!date) {
        skipped++
        console.warn(`[date] 无法获取 git 时间，跳过: ${path.relative(ROOT, file)}`)
        continue
      }
      const newContent = injectDate(content, date)
      if (newContent === null) {
        skipped++
        continue
      }
      await fs.writeFile(file, newContent, 'utf-8')
      updated++
      console.log(`[date] ${path.relative(ROOT, file)} => ${date}`)
    }
  }

  console.log(`\n完成: 更新 ${updated} 篇 | 跳过 ${skipped} 篇`)
}

main().catch(e => {
  console.error(e)
  process.exit(1)
})
