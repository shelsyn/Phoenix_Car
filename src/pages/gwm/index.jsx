import Head from "next/head";
import { Contacto } from "@/components/Contacto";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CatalogoGw from "@/components/Gwm/CatalogoGw";
import PrincipalGw from "@/components/Gwm/PrincipalGw";

import WhatsappButton from "@/components/WhatsappButton"; 

export default function Suzuki() {
  return (
    <>
      <Head>
        <title>Venta de Autos GWM | VentRentAll</title>
        <meta
          name="GWM"
          content="Venta de Vehiculos de las mejores marcas con entrega rápida y soporte técnico especializado. Cotiza ahora."
        />
      </Head>
      <Header />

      <PrincipalGw /> 
      <CatalogoGw /> 
    <br />
      <Contacto />
      <Footer />
      <WhatsappButton />
    </>
  );
}
