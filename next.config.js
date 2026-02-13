/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '/portfolio',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '/portfolio',
}

module.exports = nextConfig
