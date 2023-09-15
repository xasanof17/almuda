/** @type {import('next').NextConfig} */

// const NextPWA = require("next-pwa")({
//   dest: "public",
// });

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    clientRouterFilter: true,
    gzipSize: true,
    legacyBrowsers: true,
    logging: "verbose",
    optimisticClientCache: true,
    serverSourceMaps: true,
    strictNextHead: true,
    swcMinify: true,
  },
  compress: true,
  optimizeFonts: true,
  poweredByHeader: true,
  generateEtags: true,
  swcMinify: true,
};

module.exports = nextConfig;
