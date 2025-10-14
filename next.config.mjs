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
  // Force dynamic rendering for API routes to prevent build-time execution
  output: 'standalone',
}

export default nextConfig
