/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "avatars0.githubusercontent.com",
      "avatars.githubusercontent.com","dev-portfolio-mayankagarwal09.vercel.app","s3.amazonaws.com"
    ],
  },
//   experimental: { appDir: true },
//   webpack(config) {
//     config.experiments = { ...config.experiments, topLevelAwait: true };
//     return config;
//   },
};

module.exports = nextConfig;
