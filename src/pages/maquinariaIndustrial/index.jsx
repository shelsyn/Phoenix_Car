import Head from "next/head";
import { Contacto } from "@/components/Contacto";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Maquinaria from "@/components/CatalogoMaquinaria/Maquinaria";
import WhatsappButton from "@/components/WhatsappButton"; 

export default function RentingMaquinaria() {
  return (
    <>
      <Head>
        <title>Renting de Maquinaria Industrial | Rentek</title>
        <meta
          name="description"
          content="Alquila maquinaria industrial moderna sin costos ocultos. Contamos con equipos en óptimas condiciones, mantenimiento y flexibilidad total."
        />
      </Head>
      <Header />
      <Maquinaria /> 
      <br />
      <Contacto />
      <Footer />
      <WhatsappButton />
    </>
  );
}
