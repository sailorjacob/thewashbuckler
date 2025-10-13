/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'twejikjgxkzmphocbvpt.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },
  serverExternalPackages: ['@radix-ui/react-accordion', '@radix-ui/react-slot'],
  // Disable static optimization for pages that use client components
  output: 'standalone',
}

export default nextConfig
