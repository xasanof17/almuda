/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compress: true,
  optimizeFonts: true,
  poweredByHeader: true,
  generateEtags: true,
  swcMinify: true,
  cleanDistDir: true,
  experimental: {
    optimisticClientCache: true,
    serverActions: true,
    serverMinification: true,
    serverSourceMaps: true,
    strictNextHead: true,
  },
};

module.exports = nextConfig;
