import path from 'path'
import fs from 'fs'

interface SidebarItem {
  text: string
  link: string
}

interface SidebarGroup {
  text: string
  items: SidebarItem[]
}

export function getSidebar(): SidebarGroup[] {
  const dir = path.resolve(__dirname, 'articles')
  const dirents = fs.readdirSync(dir, { withFileTypes: true })
  const sidebar = dirents.reduce((pre: SidebarGroup[], dirent) => {
    if (dirent.isDirectory()) {
      const itemsPath = path.join(dir, dirent.name)
      const items = fs
        .readdirSync(itemsPath, { withFileTypes: true })
        .filter((o) => o.isFile() && o.name.endsWith('.md'))
        .map((o) => {
          const name = o.name.replace(/\.md$/, '')
          return {
            text: name,
            link: `/articles/${dirent.name}/${name}`
          }
        })

      if (items.length > 0) {
        if (dirent.name === '开篇') {
          pre.unshift({
            text: dirent.name,
            items
          })
        } else {
          pre.push({
            text: dirent.name,
            items
          })
        }
      }
    }
    return pre
  }, [])

  return sidebar
}
