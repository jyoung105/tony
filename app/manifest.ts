import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Tony Lee',
    short_name: 'Tony Lee',
    description: 'Strategist from Seoul, Korea',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      // {
      //   src: '/icon.ico',
      //   sizes: 'any',
      //   type: 'image/x-icon',
      // },
      // {
      //   src: '/icons/icon-16x16.png',
      //   sizes: '16x16',
      //   type: 'image/png',
      // },
      // {
      //   src: '/icons/icon-32x32.png',
      //   sizes: '32x32',
      //   type: 'image/png',
      // },
      // {
      //   src: '/icons/apple-touch-icon.png',
      //   sizes: '180x180',
      //   type: 'image/png',
      // },
    ],
  }
}
