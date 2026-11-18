import HeroCarousel from '@/components/ui/HeroCarousel';

const slides = [
  { src: '/marcas/seres.webp', srcMobile: '/marcas/seres-m.webp', alt: 'Vehículos Seres' },
];

export default function Carrusel() {
  return <HeroCarousel slides={slides} aspect="3 / 1" label="Vehículos Seres" />;
}
