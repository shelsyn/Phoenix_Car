import Head from "next/head";
import { Contacto } from "@/components/Contacto";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VentaH from "@/components/RenauldV/VentaH";
import Vent2 from "@/components/RenauldV/Vent2";
import Vent3 from "@/components/RenauldV/Vent3";
import ProductCard from "@/components/RenauldV/ProductCard";
import WhatsappButton from "@/components/WhatsappButton"; 

export default function AlquilerTablets() {
  return (
    <>
      <Head>
        <title>Alquiler de Tablets | VentRentAll</title>
        <meta
          name="description"
          content="Venta de Vehiculos de las mejores marcas con entrega rápida y soporte técnico especializado. Cotiza ahora."
        />
      </Head>
      <Header />

      <VentaH /> 
      <Vent2 /> 
        <ProductCard /> 
      <Vent3 /> 
    
      <Contacto />
      <Footer />
      <WhatsappButton />
    </>
  );
}
