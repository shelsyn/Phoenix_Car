import HeroCarousel from '@/components/ui/HeroCarousel';

const slides = [
  { src: '/marcas/suzuki.webp', srcMobile: '/marcas/suzuki-m.webp', alt: 'Vehículos Suzuki' },
];

export default function Carrusel() {
  return <HeroCarousel slides={slides} aspect="3 / 1" label="Vehículos Suzuki" />;
}
