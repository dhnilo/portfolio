/** @type {import('next').NextConfig} */

// Determine base path based on environment
const getBasePath = () => {
  // If explicitly set (like in CI), use it
  if (process.env.NEXT_PUBLIC_BASE_PATH) {
    return process.env.NEXT_PUBLIC_BASE_PATH
  }
  
  // Default for production
  return '/portfolio'
}

const basePath = getBasePath()

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: basePath,
  assetPrefix: basePath,
}

// Debug logging
console.log('Next.js Build Config:', {
  basePath: basePath,
  env: process.env.NEXT_PUBLIC_BASE_PATH,
  nodeEnv: process.env.NODE_ENV
})

module.exports = nextConfig
