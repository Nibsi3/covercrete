import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  experimental: { turbopackUseSystemTlsCerts: true },
  /* config options here */
  reactCompiler: true,
  images: { unoptimized: true },
};

export default nextConfig;
