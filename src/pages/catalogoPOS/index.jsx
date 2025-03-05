import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import POS from "@/components/CatalogoPOS/POS";
import { Contacto } from "@/components/Contacto";
import WhatsappButton from "@/components/WhatsappButton";

export default function CatalogoPOS() {
  return (
    <>
      <Head>
        <title>Alquiler de POS | VentRentAll</title>
        <meta
          name="description"
          content="Renta de sistemas de punto de venta (POS) con tecnología avanzada. Cotiza ahora y mejora tu negocio."
        />
      </Head>
      <Header />
      <POS />
      <Contacto />
      <Footer />
      <WhatsappButton />
    </>
  );
}
