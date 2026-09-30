/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable trailing slash for WordPress URL parity
  trailingSlash: true,
  // Optimize images from local public directory and remote Unsplash CDN
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 80, 85, 90],
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
