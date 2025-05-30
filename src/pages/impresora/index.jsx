import Head from "next/head";
import { Contacto } from "@/components/Contacto";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Impresora from "@/components/CatalogoImpresoras/Impresora";
import WhatsappButton from "@/components/WhatsappButton"; 

export default function AlquilerTablets() {
  return (
    <>
      <Head>
        <title>Alquiler de Tablets | VentRentAll</title>
        <meta
          name="description"
          content="Renta de tablets de las mejores marcas con entrega rápida y soporte técnico especializado. Cotiza ahora."
        />
      </Head>
      <Header />
      <Impresora /> 
      <Contacto />
      <Footer />
      <WhatsappButton />
    </>
  );
}
