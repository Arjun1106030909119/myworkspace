import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/myworkspace.git",
  assetPrefix: "/myworkspace.git",
};

export default nextConfig;