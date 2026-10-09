import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow LAN IP and local network hostnames for mobile testing without HMR WebSocket drops
  allowedDevOrigins: [
    "192.168.1.4",
    "192.168.1.4:3000",
    "192.168.*",
    "192.168.*:*",
    "10.*",
    "10.*:*",
    "172.16.*",
    "localhost:3000",
    "127.0.0.1:3000",
  ],
  // Disable Next.js dev draggable badge overlay to prevent mobile pointerCapture crashes
  devIndicators: false,
  // Enable production gzip/brotli compression
  compress: true,
  // Strip X-Powered-By header for enhanced security
  poweredByHeader: false,
  // Next.js High-Performance Image Optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [360, 420, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 2592000, // 30 days
    localPatterns: [
      {
        pathname: '/**',
        search: '',
      },
      {
        pathname: '/**',
        search: '?*',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/consultation',
        destination: '/shop',
        permanent: false,
      },
      {
        source: '/ruthra-polyclinic',
        destination: '/shop',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
