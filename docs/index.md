---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Moe Markdown Viewer"
  text: "Moe美化、强大功能的Markdown预览器"
  tagline: "由 AI 生成的 Moe Markdown 查看器 · 萌系主题 · 开箱即用"
  image:
    src: /icon.png
    alt: "Moe Markdown Viewer 图标"
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/quick-start
    - theme: alt
      text: 预览
      link: https://moe520.cc.cd/
    - theme: alt
      text: GitHub
      link: https://github.com/haoqi75/markdown-viewer-moe

features:
  - icon: 🎀
    title: 萌系主题
    details: 粉紫渐变、毛玻璃效果、浮动装饰、标题小图标
  - icon: 📑
    title: 智能目录
    details: 自动提取 h1~h6，点击平滑滚动并自动关闭，滚动时 URL 自动更新
  - icon: 🔗
    title: 标题锚点
    details: h1~h6 左侧显示 🌸🌿🍀💮🌺🌻 可点击跳转图标，桌面 hover 显示
  - icon: 🦘
    title: 锚点导航
    details: 支持 Markdown [text](#heading) 锚点，点击平滑滚动不重载
  - icon: 🛣️
    title: 别名路由
    details: 支持 ?p=test 形式的参数别名，无需修改服务器配置
  - icon: 💕
    title: 萌系错误页
    details: 加载失败时显示吉祥物 + 大号状态码 + 中文提示
  - icon: 🐾
    title: 加载动画
    details: 加载中显示 loading.png 弹跳吉祥物 + spinner
  - icon: 🖼️
    title: 图片容错
    details: 加载失败的图片自动替换为吉祥物占位提示
  - icon: 🔍
    title: 图片预览
    details: 点击图片毛玻璃遮罩放大预览，Esc 关闭
  - icon: 🎨
    title: TOC 装饰
    details: 侧栏顶部 sit-down 吉祥物 + 可配置对话气泡
  - icon: 🐱
    title: GitHub 图标
    details: 右上角猫咪图标直达仓库，吉祥物 hover 对话泡泡
  - icon: ⚙️
    title: 灵活配置
    details: config.json 轻松设置默认文档和别名映射
  - icon: 🔧
    title: 开发友好
    details: 使用 Gulp 构建，支持 `pnpm dev` 实时预览 + 热重载
  - icon: 📦
    title: 单文件交付
    details: 构建后生成 dist/index.html，所有资源内联，部署简单
  - icon: 🏷️
    title: 版本号页脚
    details: 页脚自动显示版本号和 Git 提交 hash，方便追踪部署版本
  - icon: 📱
    title: 移动端主题色
    details: 自动适配浏览器顶部主题色为萌粉色
  - icon: 🎨
    title: 颜色主题切换
    details: 6 种颜色主题（粉/蓝/绿/紫/白/黄），支持配置和 Release 编辑
  - icon: 🔗
    title: 专属链接生成
    details: Tools 内置 Base64 链接生成器，支持多线路网关一键合成
  - icon: 🧩
    title: 自定义注入
    details: 通过 config.json 的 headInject/bodyInject 自由注入 HTML
  - icon: 💻
    title: 代码高亮
    details: 集成 Prism.js，代码块美观易读
  - icon: 🦊
    title: 萌系吉祥物
    details: 可配置透明背景的右下角角色，为页面增添活力
  - icon: 📝
    title: 自定义页脚
    details: 支持 Markdown 的页脚内容，轻松添加版权或链接
---

