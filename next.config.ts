import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Use port 3001 to avoid conflicts; reduces cache writes when disk is low
  webpack: (config, { dev }) => {
    if (dev) config.cache = false;
    return config;
  },
};

export default nextConfig;
