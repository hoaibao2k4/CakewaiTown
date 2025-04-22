import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['res.cloudinary.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cakewaitown.com",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
