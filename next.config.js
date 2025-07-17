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
  // Disable ALL optimizations to fix build errors
  swcMinify: false,
  compiler: {
    // Disable CSS optimization completely
    removeConsole: false,
  },
  // Disable CSS optimization completely
  webpack: (config, { isServer, dev }) => {
    // Remove all CSS optimization plugins
    config.optimization.minimizer = config.optimization.minimizer.filter(
      (plugin) => 
        plugin.constructor.name !== 'CssMinimizerPlugin' &&
        plugin.constructor.name !== 'OptimizeCSSAssetsPlugin'
    );
    
    // Disable CSS optimization in production
    if (!dev) {
      config.optimization.minimize = false;
    }
    
    return config;
  },
  // Disable source maps and other optimizations
  productionBrowserSourceMaps: false,
  poweredByHeader: false,
  compress: false,
}

module.exports = nextConfig