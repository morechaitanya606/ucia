import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/ucia',
  assetPrefix: '/ucia/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
