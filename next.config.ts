import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/apex-singularity',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
