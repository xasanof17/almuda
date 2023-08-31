/** @type {import('next').NextConfig} */

// const NextPWA = require("next-pwa")({
//   dest: "public",
// });

const nextConfig = {
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
