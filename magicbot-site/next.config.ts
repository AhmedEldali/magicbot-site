import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",          // 👈 THIS enables static site generation
  trailingSlash: true,       // 👈 important for GitHub Pages compatibility
  images: {
    unoptimized: true        // 👈 required for static export
  }
};

export default nextConfig;