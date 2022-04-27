/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    mongodburl: "Your MongoDB connection String",
}
}

module.exports = nextConfig
