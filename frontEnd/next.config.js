/** @type {import('next').NextConfig} */

const { withPlugins, optional } = require("next-compose-plugins");

const withPWA = require("next-pwa")({
  dest: "public",
  disable: true,
  swSrc: "public/service-worker.js",
});

// module.exports = withPlugins(
//   [withPWA],
//   [
//     {
//       eslint: {
//         ignoreDuringBuilds: true,
//       },
//     },
//   ]
// );

module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};
