import Head from "next/head";
import { Contacto } from "@/components/Contacto";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CatalogoSb from "@/components/Subaru/CatalogoSb";
import PrincipalSb from "@/components/Subaru/PrincipalSb";

import WhatsappButton from "@/components/WhatsappButton"; 

export default function Suzuki() {
  return (
    <>
      <Head>
        <title>Venta de Autos Subaru | VentRentAll</title>
        <meta
          name="Subaru"
          content="Venta de Vehiculos de las mejores marcas con entrega rápida y soporte técnico especializado. Cotiza ahora."
        />
      </Head>
      <Header />

      <PrincipalSb /> 
      <CatalogoSb /> 
    <br />
      <Contacto />
      <Footer />
      <WhatsappButton />
    </>
  );
}
