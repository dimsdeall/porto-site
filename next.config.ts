import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow optimized local images in /public
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
