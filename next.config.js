/** @type {import('next').NextConfig} */

// const NextPWA = require("next-pwa")({
//   dest: "public",
// });

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
