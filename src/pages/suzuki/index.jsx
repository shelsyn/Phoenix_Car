import Head from "next/head";
import { Contacto } from "@/components/Contacto";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Catalogosuz from "@/components/Suzuki/Catalogosuz";
import PrincipalSuz from "@/components/Suzuki/PrincipalSuz";
import VehiculosNuevos from "@/components/VehiculosNuevos";
import WhatsappButton from "@/components/WhatsappButton"; 

export default function Suzuki() {
  return (
    <>
      <Head>
        <title>Venta de Autos Suzuki | VentRentAll</title>
        <meta
          name="Suzuki"
          content="Venta de Vehiculos de las mejores marcas con entrega rápida y soporte técnico especializado. Cotiza ahora."
        />
      </Head>
      <Header />

      <PrincipalSuz /> 
      <Catalogosuz /> 
      <VehiculosNuevos /> 
    <br />
      <Contacto />
      <Footer />
      <WhatsappButton />
    </>
  );
}
