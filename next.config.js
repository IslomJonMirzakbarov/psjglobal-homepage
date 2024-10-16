/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate')

// let baseUrl = 'https://development.com'

// if (process.env.NEXT_PUBLIC_APP_ENV === 'production') {
//   baseUrl = 'https://production.com'
// }

const nextConfig = nextTranslate({
  reactStrictMode: true,
  images: {
    domains: ['admin.conun.io']
  },
  eslint: {
    ignoreDuringBuilds: true
  }
  // env: {
  //   BASE_URL: baseUrl,
  // },
})

module.exports = nextConfig
