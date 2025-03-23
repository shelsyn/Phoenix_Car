import Head from "next/head";
import { Contacto } from "@/components/Contacto";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CatalogoSeres from "@/components/Seres/CatalogoSeres";
import PrincipalSers from "@/components/Seres/PrincipalSers";
import VehiculosNuevos from "@/components/VehiculosNuevos";
import WhatsappButton from "@/components/WhatsappButton"; 

export default function Seres() {
  return (
    <>
      <Head>
        <title>Venta de Autos Seres | VentRentAll</title>
        <meta
          name="Seres"
          content="Venta de Vehiculos de las mejores marcas con entrega rápida y soporte técnico especializado. Cotiza ahora."
        />
      </Head>
      <Header />

      <PrincipalSers /> 
      <CatalogoSeres /> 
      <VehiculosNuevos /> 
    <br />
      <Contacto />
      <Footer />
      <WhatsappButton />
    </>
  );
}
