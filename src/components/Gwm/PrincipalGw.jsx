import HeroCarousel from '@/components/ui/HeroCarousel';

const slides = [
  { src: '/marcas/gwm.webp', srcMobile: '/marcas/gwm-m.webp', alt: 'Vehículos GWM' },
];

export default function Carrusel() {
  return <HeroCarousel slides={slides} aspect="3 / 1" label="Vehículos GWM" />;
}
