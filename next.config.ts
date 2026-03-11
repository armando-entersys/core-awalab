import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',

  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 768, 1024, 1280, 1536],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://www.google.com https://www.gstatic.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https: blob:",
              "font-src 'self'",
              "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://www.google.com",
              "frame-src https://www.google.com https://maps.google.com",
            ].join('; '),
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/nosotros.html', destination: '/nosotros', permanent: true },
      { source: '/servicios.html', destination: '/servicios', permanent: true },
      { source: '/contacto.html', destination: '/contacto', permanent: true },
      { source: '/material-lab', destination: '/laboratorio', permanent: true },
      { source: '/material-lab/:path*', destination: '/laboratorio/:path*', permanent: true },
      { source: '/seguridad-ind', destination: '/seguridad-industrial', permanent: true },
      { source: '/seguridad-ind/:path*', destination: '/seguridad-industrial/:path*', permanent: true },
      { source: '/trat-agua', destination: '/tratamiento-de-agua', permanent: true },
      { source: '/trat-agua/:path*', destination: '/tratamiento-de-agua/:path*', permanent: true },
      { source: '/laboratiorio', destination: '/laboratorio', permanent: true },
    ];
  },

  experimental: {
    optimizePackageImports: ['@mui/material', '@mui/icons-material'],
  },
};

export default nextConfig;
