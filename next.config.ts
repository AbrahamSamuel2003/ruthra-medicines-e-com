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
