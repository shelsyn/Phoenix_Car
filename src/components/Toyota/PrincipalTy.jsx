import HeroCarousel from '@/components/ui/HeroCarousel';

const slides = [
  { src: '/catalogo/toyota-banner-corolla.webp', srcMobile: '/catalogo/toyota-banner-corolla-m.webp', alt: 'Vehículos Toyota' },
  { src: '/catalogo/toyota-banner-hilux.webp', srcMobile: '/catalogo/toyota-banner-hilux-m.webp', alt: 'Vehículos Toyota' },
];

export default function Carrusel() {
  return <HeroCarousel slides={slides} variant="cover" label="Vehículos Toyota" />;
}
