import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";
import Terminos from "@/components/TerminosRall/Terminos"; 
import Archivos from "@/components/TerminosRall/Archivos";

export default function TerminosPage() {
  return (
    <>
      <Head>
        <title>Términos y Condiciones | Vententall</title>
        <meta
          name="description"
          content="Términos y condiciones de uso de la plataforma Vententall."
        />
      </Head>
      <Header />
      <Archivos />
      <Terminos />
      <Footer />
      <WhatsappButton />
    </>
  );
}
