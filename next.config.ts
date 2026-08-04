import type { NextConfig } from "next";

// Hostinger needs a static `out/` folder (OUTPUT_EXPORT=1).
// Vercel runs a normal Next.js build (no static export).
const isStaticExport = process.env.OUTPUT_EXPORT === "1";

const nextConfig: NextConfig = {
  ...(isStaticExport
    ? {
        output: "export" as const,
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {
        images: { unoptimized: true },
      }),
  webpack: (config, { dev }) => {
    if (dev) config.cache = false;
    return config;
  },
};

export default nextConfig;
