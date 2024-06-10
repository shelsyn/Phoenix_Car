/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  images: {
    domains: ['images.unsplash.com', 'images.pexels.com', 'ui-avatars.com'],
  },
}

module.exports = nextConfig
