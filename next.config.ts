
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
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
  // async redirects() {  // Removed this section
  //   return [
  //     {
  //       source: '/',
  //       destination: '/en', // Default locale
  //       permanent: false, 
  //       locale: false, 
  //     },
  //   ];
  // },
};

export default nextConfig;
