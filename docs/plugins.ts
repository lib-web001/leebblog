export function musicPlugin(options = {}) {
  return {
    name: 'music-plugin',
    enforce: 'post',
    async writeBundle() {
      // 确保在body加载完成后执行
      const script = document.createElement('script')
      script.innerHTML = `
        document.addEventListener('DOMContentLoaded', (event) => {
          // 你的插件逻辑
          console.log('DOM fully loaded and parsed');
        });
      `
      document.body.appendChild(script)
    }
  }
}

export function walinePlugin(options = {}) {
  return {
    name: 'waline-plugin',
    enforce: 'post',
    async writeBundle() {
      // 确保在body加载完成后执行
      const script = document.createElement('script')
      script.innerHTML = `
        document.addEventListener('DOMContentLoaded', (event) => {
          // 你的插件逻辑
          console.log('DOM fully loaded and parsed');
        });
      `
      document.body.appendChild(script)
    }
  }
}
