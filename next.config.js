/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['culinar-ml.herokuapp.com'],
  },
};

module.exports = nextConfig;
