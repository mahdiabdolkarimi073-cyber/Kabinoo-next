import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
      ignoreBuildErrors: true
  },
  experimental: {
    workerThreads: false,
    cpus: 1
  },
  swcMinify: false
};

export default nextConfig;
