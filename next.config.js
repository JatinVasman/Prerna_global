/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable trailing slash for WordPress URL parity
  trailingSlash: true,
  // Optimize images from the local public directory
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 80, 85, 90],
  },
  // Experimental: enable React strict mode
  reactStrictMode: true,
  // Fix Turbopack workspace root detection for nested project
  turbopack: {
    root: __dirname,
  },
};

module.exports = nextConfig;
