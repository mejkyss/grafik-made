/** @type {import('next').NextConfig} */
const repo = "grafik-made"; // <-- your repo name

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },

  // IMPORTANT for GitHub Pages project sites
  // Only set basePath/assetPrefix in production so local dev works normally
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? `/${repo}` : '',
  },
};

export default nextConfig;
