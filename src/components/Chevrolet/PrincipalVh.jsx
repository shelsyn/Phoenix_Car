import HeroCarousel from '@/components/ui/HeroCarousel';

const slides = [
  { src: '/marcas/chevrolet.webp', srcMobile: '/marcas/chevrolet-m.webp', alt: 'Vehículos Chevrolet' },
];

export default function Carrusel() {
  return <HeroCarousel slides={slides} aspect="3 / 1" label="Vehículos Chevrolet" />;
}
