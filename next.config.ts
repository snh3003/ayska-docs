import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/ayska-docs' : '',
  compress: true, // Enable gzip compression
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
  },
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
      fileName: true,
      minify: true,
      transpileTemplateLiterals: true,
    },
  },
  experimental: {
    optimizePackageImports: ['@primer/react'],
  },
  transpilePackages: ['@primer/react', 'styled-components'],
};

export default nextConfig;
