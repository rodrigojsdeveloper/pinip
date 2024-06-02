/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ipdata.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  env: {
    NEXT_APP_API_KEY: process.env.NEXT_APP_API_KEY,
  },
}

export default nextConfig
