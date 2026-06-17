import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  turbopack: {
    // Keep dev-time file watching scoped to this app when parent directories have lockfiles.
    root: process.cwd(),
  },
};

export default nextConfig;
