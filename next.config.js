/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  
  // Pro optimální AI crawling
  generateEtags: true,
  
  // Headers pro AI boty
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-AI-Accessible',
            value: 'true',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, OPTIONS',
          },
        ],
      },
    ]
  },

  // Redirecty pro AI endpointy
  async rewrites() {
    return [
      {
        source: '/ai',
        destination: '/ai-endpoint',
      },
    ]
  },
}

module.exports = nextConfig
