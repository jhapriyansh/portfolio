import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://www.0xpkj.tech/:path*",
        permanent: true, // 301 redirect
      },
    ];
  },
};

export default nextConfig;
