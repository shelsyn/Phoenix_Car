import Head from "next/head";
import { Contacto } from "@/components/Contacto";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VentaH from "@/components/RenauldV/VentaH";
import Vent2 from "@/components/RenauldV/Vent2";
import Vent3 from "@/components/RenauldV/Vent3";
import ProductCard from "@/components/RenauldV/ProductCard";
import WhatsappButton from "@/components/WhatsappButton"; 

export default function RenauldV() {
  return (
    <>
      <Head>
        <title>Venta de Automoviles Renauld | VentRentAll</title>
        <meta
          name="Renauld"
          content="Venta de Vehiculos de las mejores marcas con entrega rápida y soporte técnico especializado. Cotiza ahora."
        />
      </Head>
      <Header />

      <VentaH /> 
      <Vent2 /> 
    <br />
      <Contacto />
      <Footer />
      <WhatsappButton />
    </>
  );
}
