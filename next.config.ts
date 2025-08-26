import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // acepta todos los hosts
      },
    ],
  },
};

export default nextConfig;
