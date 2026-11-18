import HeroCarousel from '@/components/ui/HeroCarousel';

const slides = [
  { src: '/marcas/citroen.webp', srcMobile: '/marcas/citroen-m.webp', alt: 'Vehículos Citroën' },
];

export default function Carrusel() {
  return <HeroCarousel slides={slides} aspect="3 / 1" label="Vehículos Citroën" />;
}
