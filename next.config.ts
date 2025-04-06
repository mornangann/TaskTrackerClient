import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "localhost",
      "res.cloudinary.com",
      "res-console.cloudinary.com",
      "plus.unsplash.com",
      "img.freepik.com",
    ],
  },
};

export default nextConfig;
