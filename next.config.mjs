import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

// Initialize for local development (bindings support, etc.)
initOpenNextCloudflareForDev();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;