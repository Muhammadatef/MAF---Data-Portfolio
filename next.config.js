/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  env: {
    GITHUB_USERNAME: 'Muhammadatef',
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  },
}

module.exports = nextConfig