import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.us-east-1.amazonaws.com",
        pathname: "/hrm.keyra.ie/**",
      },
    ],
  },
  turbopack: {
    root: process.cwd(),
  },
  webpack: (config) => {
    // Hard guarantee `@/*` resolves to `src/*` in all build environments.
    config.resolve = config.resolve ?? {};
    config.resolve.alias = {
      ...(config.resolve.alias ?? {}),
      "@": path.resolve(process.cwd(), "src"),
    };
    return config;
  },
};

export default nextConfig;
