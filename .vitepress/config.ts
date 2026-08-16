import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  outDir: "./dist",
  title: "Moe Markdown Viewer",
  description: "由 AI 生成的 Moe Markdown 查看器 · 萌系主题 · 开箱即用",
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

    sidebar: [
      {
        text: '指南',
        items: [
          { text: '快速开始', link: '/guide/quick-start' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/haoqi75/markdown-viewer-moe' }
    ]
  }
})
