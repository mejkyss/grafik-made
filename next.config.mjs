/** @type {import('next').NextConfig} */
const repo = "grafik-made"; // <-- your repo name

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },

  // IMPORTANT for GitHub Pages project sites
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
};

export default nextConfig;
