import Head from "next/head";
import { Contacto } from "@/components/Contacto";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Computadoras from "@/components/CatalogoPc/Computadoras";
import WhatsappButton from "@/components/WhatsappButton"; 

export default function RentingCelulares() {
  return (
    <>
      <Head>
        <title>Renting de Computadoras | VentRentAll</title>
        <meta
          name="description"
          content="Accede a celulares de alta tecnología sin afectar el presupuesto de tu empresa. Equipos nuevos y flexibilidad total."
        />
      </Head>
      <Header />
      <Computadoras /> 
      <Contacto />
      <Footer />
      <WhatsappButton />
    </>
  );
}
