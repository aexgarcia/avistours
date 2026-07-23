import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/operador-turistico",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
