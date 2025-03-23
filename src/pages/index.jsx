import Carrusel from "@/components/Carrusel";
import { Contacto } from "@/components/Contacto";
import { Contacto_dos } from "@/components/contacto_dos"; // Verifica si este nombre es correcto
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Productos from "@/components/Productos";
import Renting from "@/components/Renting";
import TipoPersona from "@/components/TipoPersona";
import Head from "next/head";
import Informacion from "@/components/Informacion";
import WhatsappButton from "@/components/WhatsappButton"; 
import VehiculosNuevos from "@/components/VehiculosNuevos";
export default function Home() {
  return (
    <>
      <Head>
        <title>VentRentAll | Renta y Venta de Vehículos y Activos</title>
        <meta name="description" content="Descubre la mejor opción en renta y venta de vehículos con VentRentAll. Autos, maquinaria y más con financiamiento disponible." />
        <meta name="keywords" content="renta de autos, compra de vehículos, leasing de maquinaria, financiamiento de autos, alquiler de maquinaria pesada" />
        <meta name="robots" content="index, follow" />
      </Head>

      <main>
        <Header />
        <Carrusel />
        <Contacto_dos />
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
