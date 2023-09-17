/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "avatars0.githubusercontent.com",
      "avatars.githubusercontent.com",
    ],
  },
//   experimental: { appDir: true },
//   webpack(config) {
//     config.experiments = { ...config.experiments, topLevelAwait: true };
//     return config;
//   },
};

module.exports = nextConfig;
