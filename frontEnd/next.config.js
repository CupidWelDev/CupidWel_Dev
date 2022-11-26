/** @type {import('next').NextConfig} */

const { withPlugins } = require("next-compose-plugins");

const withPWA = require("next-pwa")({
  dest: "public",
});

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = withPlugins([withPWA], nextConfig);
