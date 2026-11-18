import HeroCarousel from '@/components/ui/HeroCarousel';

// Banners del inicio (WebP optimizados en /public/hero; proporción 3:1).
// `href`: los banners con el botón "Conoce nuestras soluciones" llevan a la sección de soluciones.
const slides = [
  {
    src: '/hero/renting-empresas.webp',
    srcMobile: '/hero/renting-empresas-m.webp',
    alt: 'VentRentAll: renting inteligente para empresas que avanzan. Flexibilidad, optimización de costos, mayor productividad y acompañamiento especializado',
    href: '#servicios',
  },
  {
    src: '/hero/activos-productivos.webp',
    srcMobile: '/hero/activos-productivos-m.webp',
    alt: 'Renting de vehículos y activos productivos: vehículos, maquinaria, equipos médicos y equipos de oficina para tu empresa',
    href: '#servicios',
  },
  {
    src: '/hero/marca-ventarentall.webp',
    srcMobile: '/hero/marca-ventarentall-m.webp',
    alt: 'VentaRentAll: confianza productiva, seguridad en cada camino',
  },
  {
    src: '/hero/confianza-productividad.webp',
    srcMobile: '/hero/confianza-productividad-m.webp',
    alt: 'Confianza y productividad: renta con nosotros y lleva tu negocio más lejos',
  },
];

export default function Carrusel() {
  return <HeroCarousel slides={slides} aspect="3 / 1" label="Promociones VentRentAll" />;
}
