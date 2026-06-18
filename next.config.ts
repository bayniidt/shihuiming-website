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
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // 必须加，禁用默认图片优化
  },
  // 下面这两行非常重要，对应你的仓库名！
  basePath: '/shihuiming-website',
  assetPrefix: '/shihuiming-website',
}

module.exports = nextConfig
