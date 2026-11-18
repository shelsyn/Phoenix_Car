import HeroCarousel from '@/components/ui/HeroCarousel';

const slides = [
  { src: '/marcas/subaru.webp', srcMobile: '/marcas/subaru-m.webp', alt: 'Vehículos Subaru' },
];

export default function Carrusel() {
  return <HeroCarousel slides={slides} aspect="3 / 1" label="Vehículos Subaru" />;
}
