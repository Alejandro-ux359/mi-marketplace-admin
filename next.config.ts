import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/landing/home',
        permanent: true, // Puedes poner 'false' si no deseas que sea permanente
      },
    ];
  },
};

export default nextConfig;

