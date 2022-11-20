/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  disable: true,
  swSrc: "public/service-worker.js",
});

module.exports = withPWA({
  // next.js config
});
