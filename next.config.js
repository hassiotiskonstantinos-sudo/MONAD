/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
  },
  basePath: process.env.NODE_ENV === 'production' ? '/MONAD' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/MONAD/' : '',
}

module.exports = nextConfig
