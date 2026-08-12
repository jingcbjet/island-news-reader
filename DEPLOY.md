# 🚀 部署到 Vercel 完整指南

> 这份文档告诉你怎么把这个 React 项目一键部署到 [Vercel](https://vercel.com)，最终获得一个像 `https://island-news-reader.vercel.app` 的公开链接。
> 部署一次后，以后你改 `src/data.ts` 里的内容，`git push` 一下就会自动重新部署。

---

## 📋 前置准备（只做一次）

### 1. 注册 GitHub 账号

去 https://github.com 注册一个（如果你已有就跳过）。

### 2. 创建 GitHub Personal Access Token

这是用来从命令行 push 代码的「钥匙」。

1. 打开 https://github.com/settings/tokens/new
2. **Note**：填 `island-news-reader-deploy`
3. **Expiration**：选 `No expiration`（不过期）
4. **Scopes**：勾选 `repo` 这一项
5. 点页面底部的 **Generate token**
6. **复制生成的 token**（长得像 `ghp_xxxxxxxxxx`），先存到记事本，**关掉页面就再也看不到了**

### 3. 注册 Vercel 账号

去 https://vercel.com/signup，**选「Continue with GitHub」**（用 GitHub 账号一键登录）。

---

## 📦 上传代码到 GitHub（只做一次）

打开 PowerShell 或 Git Bash，**进入项目根目录**：

```bash
cd buffett-island

# 添加所有文件
git add .

# 提交
git commit -m "feat: 巴菲特文章 + animal-island-ui 阅读页"
```

### 在 GitHub 网页上创建空仓库

1. 打开 https://github.com/new
2. **Repository name** 填 `island-news-reader`
3. **Public**（公开） 或 **Private**（私有）随你选（Vercel 免费版都支持）
4. ⚠️ **不要勾选** 「Add a README file」「Add .gitignore」「Choose a license」
5. 点 **Create repository**

### 推送到 GitHub

回到命令行，**把下面的 `<YOUR_GITHUB_USERNAME>` 替换成你的 GitHub 用户名**：

```bash
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/island-news-reader.git
git branch -M main
git push -u origin main
```

第一次 push 会弹窗让你登录：
- **Username**：你的 GitHub 用户名
- **Password**：**粘贴刚才复制的 Personal Access Token**（不是 GitHub 密码！）

看到 `Writing objects: 100%` 就成功了。

---

## 🌐 在 Vercel 部署（只做一次）

### 1. 导入项目

1. 打开 https://vercel.com/new
2. 点 **Import Git Repository** 旁边的搜索框
3. 找到你的 `island-news-reader` 仓库，点 **Import**

### 2. 配置项目

Vercel 会自动识别这是 Vite 项目：

| 项 | 值 |
|---|---|
| **Framework Preset** | Vite（自动识别） |
| **Build Command** | `npm run build`（自动填好） |
| **Output Directory** | `dist`（自动填好） |
| **Install Command** | `npm install`（自动填好） |

直接点 **Deploy**。

### 3. 等待部署完成

约 30-90 秒。看到 🎉 **Congratulations!** 就成功了。

你会得到一个链接，形如：

```
https://island-news-reader-xxx.vercel.app
```

把这个链接分享给任何人，他们都能打开。

---

## 🔄 以后怎么更新内容

**你唯一要做的**：改 `src/data.ts` 里的数据，然后提交推送：

```bash
git add .
git commit -m "update: 换了新文章内容"
git push
```

Vercel 会**自动检测到推送，30 秒内自动重新部署**。你不用再登录 Vercel。

可以随时去 https://vercel.com/dashboard 查看部署历史。

---

## 🆘 常见问题

### Q1: 推送时提示 `Permission denied`
说明你用的是 GitHub 密码而不是 Token。重新执行 `git push`，粘贴 **Personal Access Token**。

### Q2: 部署后页面是 404 / 白屏
去 Vercel 项目页 → Settings → General → **Output Directory** 确认填的是 `dist`。

### Q3: 想改网址前缀
去 Vercel 项目 → Settings → Domains，可以改子域名或绑自己的域名（如 `island.yourdomain.com`）。

### Q4: 想看部署日志
Vercel 项目页 → Deployments → 点具体那次的部署 → 查看 **Build Logs**。

---

## 📞 需要帮助？

把 Vercel 部署日志里的红色错误信息发给我，我帮你排查。