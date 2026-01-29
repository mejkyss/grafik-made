/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use static export only for production builds (CI/GitHub Pages)
  // For local development, Next.js will run in server mode
  output: process.env.NODE_ENV === "production" ? "export" : undefined,
  trailingSlash: process.env.NODE_ENV === "production",
  images: { unoptimized: process.env.NODE_ENV === "production" },
  // Allow local development on any host
  allowedDevOrigins: ["localhost", "127.0.0.1"],
};

export default nextConfig;
