/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: { styledComponents: true },
  images: { domains: ["www.4agiledev.com"] },
};

module.exports = nextConfig;
