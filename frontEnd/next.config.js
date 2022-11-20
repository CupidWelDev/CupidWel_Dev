/** @type {import('next').NextConfig} */

const { withPlugins } = require("next-compose-plugins");

const withPWA = require("next-pwa")({
  dest: "public",
  disable: true,
  swSrc: "public/service-worker.js",
});

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};

// module.exports = {
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
// };

module.exports = withPlugins([withPWA], nextConfig);
