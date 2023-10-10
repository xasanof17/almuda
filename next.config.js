/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compress: true,
  optimizeFonts: true,
  poweredByHeader: true,
  staticPageGenerationTimeout: 10,
  generateEtags: true,
  swcMinify: true,
  cleanDistDir: true,
  experimental: {
    gzipSize: true,
    optimisticClientCache: true,
    serverActions: true,
    serverMinification: true,
    serverSourceMaps: true,
    strictNextHead: true,
  },
  images: {
    domains: ["www.decisivezone.ae"],
  },
};

module.exports = nextConfig;
