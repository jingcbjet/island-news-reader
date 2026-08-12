# 🏝️ Buffett Island — 巴菲特文章 · Animal Island UI 阅读页

一个用 **React + Vite + TypeScript** 搭建、**真实使用 [animal-island-ui](https://github.com/guokaigdg/animal-island-ui)** 森系组件库制作的可爱风格财经阅读页面。

## 📦 用到的 Animal-Island-UI 组件

| 组件 | 用途 |
| --- | --- |
| `Card` | 各个数据板块的容器（蓝/绿/黄/粉配色） |
| `Title` | 章节标题 |
| `Tag` | 投资标的标签 |
| `Button` | 展开/收起原文按钮 |
| `Collapse` | **可折叠的原文窗口** |
| `Progress` | 现金储备进度条 |
| `Divider` | 章节分隔线 |
| `Tooltip` | 进度条悬浮提示 |

## 🚀 本地运行

```bash
# 1. 进入项目目录
cd buffett-island

# 2. 安装依赖
npm install

# 3. 启动开发服务器
npm run dev
```

打开浏览器访问 `http://localhost:5173/` 即可。

## 🛠️ 构建

```bash
npm run build
npm run preview
```

## 📁 项目结构

```
buffett-island/
├── index.html                # HTML 入口
├── package.json              # 依赖配置（含 animal-island-ui）
├── vite.config.ts            # Vite 配置
├── src/
│   ├── main.tsx              # React 入口（导入 animal-island-ui/style）
│   ├── App.tsx               # 主页面
│   ├── App.css               # 页面级样式
│   └── index.css             # 全局样式（森系可爱主题）
└── public/
```

## 📝 原文

数据来源于 `E:\videos\sunriches\2026\202608\md\20260809"巴菲特"，开始动手了.md`，点击页面底部的「展开原文」按钮可查看完整原文。
