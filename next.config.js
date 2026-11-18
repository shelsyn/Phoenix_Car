/**
 * Dominios externos permitidos para el optimizador de imágenes (/_next/image).
 * Hoy todas las imágenes del sitio están en /public, así que la lista está vacía.
 * Si en el futuro se usa una imagen de otro sitio, agrega su dominio aquí
 * (ej. 'images.unsplash.com'); mientras no esté, se mostrará sin optimizar.
 */
const IMAGE_HOSTS = []

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Permite compilar en otra carpeta (útil para probar producción sin chocar con `npm run dev`)
  distDir: process.env.NEXT_DIST_DIR || '.next',
  reactStrictMode: true,
  poweredByHeader: false,
  // Solo desarrollo (npm run dev): conservar las páginas ya compiladas durante 1 hora
  // (por defecto Next las descarta al minuto y las vuelve a compilar en la siguiente visita)
  onDemandEntries: {
    maxInactiveAge: 60 * 60 * 1000,
    pagesBufferLength: 30,
  },
  experimental: {
    scrollRestoration: true,
  },
  images: {
    remotePatterns: IMAGE_HOSTS.map((hostname) => ({ protocol: 'https', hostname })),
    formats: ['image/webp'],
    // Las imágenes optimizadas se guardan 30 días en caché
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async headers() {
    return [
      {
        // Imágenes y archivos estáticos de /public: caché en el navegador
        source: '/:file([^/]+\\.(?:webp|avif|png|PNG|jpg|jpeg|gif|svg|ico))',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=604800, stale-while-revalidate=2592000' }],
      },
      {
        source: '/:dir(hero|catalogo|marcas)/:file*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=604800, stale-while-revalidate=2592000' }],
      },
    ]
  },
}

module.exports = nextConfig
