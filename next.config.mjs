/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.PORTFOLIO_BUILD_CHECK === "1" ? ".next-check" : ".next",
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false,
  },
  experimental: {
    optimizePackageImports: ["react-icons", "lucide-react"],
  },
};

export default nextConfig;

