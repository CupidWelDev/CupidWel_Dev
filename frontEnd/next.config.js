/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
};

const withPWA = require("next-pwa")({
  dest: "public",
});

module.exports = [
  nextConfig,
  withPWA({
    // next.js config
  }),
];
