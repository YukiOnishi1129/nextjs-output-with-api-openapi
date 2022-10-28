/** @type {import('next').NextConfig} */
// .env.openapiを呼び出す
require('dotenv').config({ path: `./.env.${process.env.ENVIRONMENT}` });

const nextConfig = {
  env: {
    BASE_API_URL: process?.env?.BASE_OPEN_API_URL ? process.env.BASE_OPEN_API_URL : process.env.BASE_API_URL,
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
