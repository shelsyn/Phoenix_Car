import Head from "next/head";
import { Contacto } from "@/components/Contacto";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Celulares from "@/components/CatalogoCelulares/Celulares";
import WhatsappButton from "@/components/WhatsappButton"; 

export default function RentingCelulares() {
  return (
    <>
      <Head>
        <title>Renting de Celulares | VentRentAll</title>
        <meta
          name="description"
          content="Accede a celulares de alta tecnología sin afectar el presupuesto de tu empresa. Equipos nuevos y flexibilidad total."
        />
      </Head>
      <Header />
      <Celulares /> 
      <Contacto />
      <Footer />
      <WhatsappButton />
    </>
  );
}
