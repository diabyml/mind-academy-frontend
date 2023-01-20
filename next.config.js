/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com','i.ibb.co'],
},
}

module.exports = nextConfig
