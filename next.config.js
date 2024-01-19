/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['media.dev.to', 'res.cloudinary.com'],
  },
}

module.exports = nextConfig
