import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cấu hình cho phép load ảnh từ các domain bên ngoài
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",   // Cho phép mọi đường dẫn ảnh trên Unsplash
      },
    ],
  },
};

export default nextConfig;
