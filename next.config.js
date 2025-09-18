/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'localhost', 
      'images.unsplash.com',
      'upload.wikimedia.org',
      'iub.ac.bd',
      'play-lh.googleusercontent.com',
      'opshori.wordpress.com'
    ],
  },
}

module.exports = nextConfig
