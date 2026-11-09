/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com', 'waseet.net', 'zeidex.com', 'media.licdn.com'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1638, 1920, 2048],
    imageSizes: [256, 384, 512, 640, 720, 828, 1080],
  },
}

module.exports = nextConfig
