/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compress: true,
  optimizeFonts: true,
  poweredByHeader: true,
  generateEtags: true,
  swcMinify: true,
  images: {
    domains: ["www.decisivezone.ae"],
  },
};

module.exports = nextConfig;
