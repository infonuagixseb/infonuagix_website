const withNextIntl = require('next-intl/plugin')(
  // Point to the file that exports `getRequestConfig`
  './src/i18n.ts'
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.firebaseapp.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.cloudfunctions.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'static.wixstatic.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
  experimental: {
    allowedDevOrigins: ['https://9000-firebase-studio-1747779028137.cluster-ux5mmlia3zhhask7riihruxydo.cloudworkstations.dev'],
  }
};

module.exports = withNextIntl(nextConfig);
