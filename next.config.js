/** @type {import('next').NextConfig} */

const NextPWA = require("next-pwa")({
  dest: "public",
});

const nextConfig = {
  serverDependenciesToBundle: ["@uiball/loaders"],
};

module.exports = nextConfig;
