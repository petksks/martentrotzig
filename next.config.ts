import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/martentrotzig',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
