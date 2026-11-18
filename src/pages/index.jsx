import Head from 'next/head';
import Header from '@/components/Header';
import Carrusel from '@/components/Carrusel';
import AccesoRapido from '@/components/AccesoRapido';
import Renting from '@/components/Renting';
import TipoPersona from '@/components/TipoPersona';
import Informacion from '@/components/Informacion';
import VehiculosNuevos from '@/components/VehiculosNuevos';
import { Contacto } from '@/components/Contacto';
import Footer from '@/components/Footer';
import WhatsappButton from '@/components/WhatsappButton';

export default function Home() {
  return (
    <>
      <Head>
        <title>VentRentAll | Renta y Venta de Vehículos y Activos</title>
        <meta
          name="description"
          content="Descubre la mejor opción en renta y venta de vehículos con VentRentAll. Autos, maquinaria y más con financiamiento disponible."
        />
        <meta
          name="keywords"
          content="renta de autos, compra de vehículos, leasing de maquinaria, financiamiento de autos, alquiler de maquinaria pesada"
        />
        <link rel="preload" as="image" href="/hero/renting-empresas-m.webp" media="(max-width: 767px)" />
        <link rel="preload" as="image" href="/hero/renting-empresas.webp" media="(min-width: 768px)" />
      </Head>

      <Header />
      <main>
        <Carrusel />
        <AccesoRapido />
        <Renting />
        <TipoPersona />
        <Informacion />
        <VehiculosNuevos />
        <Contacto />
      </main>
      <Footer />
      <WhatsappButton />
    </>
  );
}
