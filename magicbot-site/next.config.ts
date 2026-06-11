import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // 🚨 Disable Turbopack font pipeline issues
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;