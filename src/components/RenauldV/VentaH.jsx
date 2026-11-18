import HeroCarousel from '@/components/ui/HeroCarousel';

const slides = [
  { src: '/marcas/renault.webp', srcMobile: '/marcas/renault-m.webp', alt: 'Vehículos Renault' },
];

export default function Carrusel() {
  return <HeroCarousel slides={slides} aspect="3 / 1" label="Vehículos Renault" />;
}
