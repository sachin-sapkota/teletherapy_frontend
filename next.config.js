/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BACKEND: process.env.BACKEND,
    FRONTEND: process.env.FRONTEND,
  }
}

module.exports = nextConfig
