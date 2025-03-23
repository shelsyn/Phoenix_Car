import Head from "next/head";
import { Contacto } from "@/components/Contacto";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Catalogocrt from "@/components/Citroen/Catalogocrt";
import Principal from "@/components/Citroen/Principal";
import VehiculosNuevos from "@/components/VehiculosNuevos";
import WhatsappButton from "@/components/WhatsappButton"; 

export default function Toyota() {
  return (
    <>
      <Head>
        <title>Venta de Autos Toyota | VentRentAll</title>
        <meta
          name="Citroen"
          content="Venta de Vehiculos de las mejores marcas con entrega rápida y soporte técnico especializado. Cotiza ahora."
        />
      </Head>
      <Header />

      <Principal /> 
      <Catalogocrt /> 
      <VehiculosNuevos /> 
    <br />
      <Contacto />
      <Footer />
      <WhatsappButton />
    </>
  );
}
