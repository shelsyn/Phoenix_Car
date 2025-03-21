import Head from "next/head";
import { Contacto } from "@/components/Contacto";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Catalogoty from "@/components/Toyota/Catalogoty";
import PrincipalTy from "@/components/Toyota/PrincipalTy";

import WhatsappButton from "@/components/WhatsappButton"; 

export default function Toyota() {
  return (
    <>
      <Head>
        <title>Venta de Autos Toyota | VentRentAll</title>
        <meta
          name="Toyota"
          content="Venta de Vehiculos de las mejores marcas con entrega rápida y soporte técnico especializado. Cotiza ahora."
        />
      </Head>
      <Header />

      <PrincipalTy /> 
      <Catalogoty /> 
    <br />
      <Contacto />
      <Footer />
      <WhatsappButton />
    </>
  );
}
