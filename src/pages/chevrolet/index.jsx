import Head from "next/head";
import { Contacto } from "@/components/Contacto";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CatalogoCh from "@/components/Chevrolet/CatalogoCh";
import PrincipalVh from "@/components/Chevrolet/PrincipalVh";

import WhatsappButton from "@/components/WhatsappButton"; 

export default function Chevrolet() {
  return (
    <>
      <Head>
        <title>Venta de Autos Chevrolet | VentRentAll</title>
        <meta
          name="Chevrolet"
          content="Venta de Vehiculos de las mejores marcas con entrega rápida y soporte técnico especializado. Cotiza ahora."
        />
      </Head>
      <Header />

      <PrincipalVh /> 
      <CatalogoCh /> 
    <br />
      <Contacto />
      <Footer />
      <WhatsappButton />
    </>
  );
}
