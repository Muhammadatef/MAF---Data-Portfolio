/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove output: 'export' for Vercel - it handles this automatically
  images: {
    unoptimized: true, // Keep this for better performance on Vercel
  },
  // Remove assetPrefix and basePath - not needed for Vercel
  env: {
    GITHUB_USERNAME: 'Muhammadatef',
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  },
  // Add experimental features for better Vercel compatibility
  experimental: {
    serverComponentsExternalPackages: ['nodemailer'],
  },
  // Disable CSS minification to fix build errors
  swcMinify: false,
  // Disable CSS optimization
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.minimizer = config.optimization.minimizer.filter(
        (plugin) => plugin.constructor.name !== 'CssMinimizerPlugin'
      );
    }
    return config;
  },
}

module.exports = nextConfig