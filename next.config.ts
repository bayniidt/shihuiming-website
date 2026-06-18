// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   output: "standalone",
//   turbopack: {
//     // Keep dev-time file watching scoped to this app when parent directories have lockfiles.
//     root: process.cwd(),
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */

// 如果是“项目主页”，需要配置 basePath；如果是“用户主页”，留空字符串即可
const repo = 'shihuiming-website' // 例如 'my-project'

const nextConfig = {
  // 1. 启用静态导出
  output: 'export',

  // 2. 禁用默认图片优化（GitHub Pages 不支持 Node.js 服务器优化图片）
  images: {
    unoptimized: true,
  },

  // 3. 配置基础路径（⚠️ 如果是“用户主页”仓库，请删除下面这两行！）
  basePath: `/${repo}`,
  assetPrefix: `/${repo}`,
}

module.exports = nextConfig
