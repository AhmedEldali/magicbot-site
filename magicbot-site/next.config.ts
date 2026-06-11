import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",          // 🔥 CRITICAL FIX
  trailingSlash: true,       // required for GitHub Pages routing
  images: {
    unoptimized: true,       // required for static export
  },
};

export default nextConfig;