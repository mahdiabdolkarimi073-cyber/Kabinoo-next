import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: process.cwd(),
  typescript: {
      ignoreBuildErrors: true
  },
  experimental: {
    workerThreads: false,
    cpus: 1
  },
};

export default nextConfig;
