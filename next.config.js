/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable trailing slash for WordPress URL parity
  trailingSlash: true,
  // Optimize images from local public directory and remote Unsplash CDN
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Experimental: enable React strict mode
  reactStrictMode: true,
  // Fix Turbopack workspace root detection for nested project
  turbopack: {
    root: __dirname,
  },
};

module.exports = nextConfig;
