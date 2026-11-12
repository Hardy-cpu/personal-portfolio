/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Retired template pages: send old links to the live site.
  async redirects() {
    return [
      { source: '/projects/project3', destination: '/', permanent: true },
      { source: '/tools', destination: '/', permanent: true },
      { source: '/projects', destination: '/#work', permanent: true },
    ]
  },
}

export default nextConfig
