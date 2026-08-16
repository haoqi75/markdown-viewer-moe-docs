import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  outDir: "./.vitepress/dist",
  lang: 'zh-CN',
  lastUpdated: true,
  title: 'Moe Markdown Viewer',
  description: '由 AI 生成的 Moe Markdown 查看器 · 萌系主题 · 开箱即用',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/icon.png',
    nav: [
      { text: '主页', link: '/' },
      { text: '快速开始', link: '/guide/quick-start' }
    ],
    editLink: {
      pattern: 'https://github.com/haoqi75/markdown-viewer-moe-docs/edit/main/docs/:path',
      text: '在 GitHub 编辑此页面'
    },
    sidebar: [
      {
        text: '指南',
        items: [
          { text: '快速开始', link: '/guide/quick-start' },
          { text: '下载编辑好的', link: '/guide/release' },
          { text: '本地部署', link: '/guide/local' }
        ]
      },
      {
        text: '关于',
        link: '/about'
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/haoqi75/markdown-viewer-moe' }
    ],
    footer: {
      message: '本作品采用 MIT 许可证发布',
      copyright: 'Moe Markdown Viewer © 2026'
    },
    darkModeSwitchLabel: '切换主题',
    lightModeSwitchTitle: '切换到浅色主题',
    darkModeSwitchTitle: '切换到深色主题',
    sidebarMenuLabel: '目录',
    returnToTopLabel: '点我跑到上面',
    langMenuLabel: '切换语言',
    lastUpdated: {
      text: '最后更新时间'
    },
    outline: {
      label: '此页内容'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    }
  }
})
