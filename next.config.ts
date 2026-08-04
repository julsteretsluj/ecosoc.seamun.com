import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for Hostinger (upload the `out/` folder)
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  webpack: (config, { dev }) => {
    if (dev) config.cache = false;
    return config;
  },
};

export default nextConfig;
