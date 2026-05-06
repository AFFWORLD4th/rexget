/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: false, // Enable image optimization for better SEO
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'meja.blob.core.windows.net',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'meja.blob.core.windows.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.propertyfinder.ae',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.bayut.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.propfusion.io',
        pathname: '/**',
      },
      // Add other external image domains here if needed
    ],
  },
  experimental: {
    optimizePackageImports: ['lucide-react', '@iconify/react'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  poweredByHeader: false,
  compress: true,
  generateEtags: true,
  // SEO optimizations
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ],
      },
    ]
  },
}

export default nextConfig
