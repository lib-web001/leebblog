import path from 'path'
import fs from 'fs'

export function getSidebar() {
  const dir = path.resolve(__dirname, 'articles')
  const dirents = fs.readdirSync(dir, { withFileTypes: true })
  const sidebar = dirents.reduce((pre: any, dirent) => {
    if (dirent.isDirectory()) {
      const items = fs.readdirSync(dir + '\\' + dirent.name, { withFileTypes: true }).map((o) => {
        const name = o.name.split('.').shift()
        return {
          text: name,
          link: `/articles/${dirent.name}/${name}`
        }
      })
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
    return pre
  }, [])

  return sidebar
}
