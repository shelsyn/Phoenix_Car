import HeroCarousel from '@/components/ui/HeroCarousel';

const slides = [
  { src: '/hero/marca-ventarentall.webp', srcMobile: '/hero/marca-ventarentall-m.webp', alt: 'VentaRentAll: confianza productiva, seguridad en cada camino' },
];

export default function Carrusel() {
  return <HeroCarousel slides={slides} aspect="3 / 1" label="VentRentAll" />;
}
