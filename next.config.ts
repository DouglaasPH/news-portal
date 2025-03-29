import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Domínio para geração de imagens aleatórias
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos'
      },
      {
        protocol: 'https',
        hostname: 'loremflickr.com'
      },      
    ],
  },  
};

export default nextConfig;
