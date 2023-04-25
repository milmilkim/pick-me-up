/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['acnhapi.com', '*'],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
