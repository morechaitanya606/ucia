import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  // Only use static export settings in production
  ...(isProd && {
    output: 'export',
    basePath: '/ucia',
    assetPrefix: '/ucia/',
  }),
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Performance optimizations
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
