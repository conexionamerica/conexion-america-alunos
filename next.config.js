/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración mínima para que Next.js se inicie correctamente
  reactStrictMode: true,
  swcMinify: true,
  // Deshabilitar la optimización de imágenes para evitar errores de compilación innecesarios
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
