import { useState } from "react";
import Head from "next/head";
import { Contacto } from "@/components/Contacto";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import RentingActivos from "@/components/CatalogoActivos/RentingActivos";
import MaquinariaPesada from "@/components/CatalogoActivos/MaquinariaPesada";
import WhatsappButton from "@/components/WhatsappButton"; // Nuevo componente

export default function CatalogoActivo() {
  return (
    <>
      <Head>
        <title>Catálogo de Activos | VENTRENTALL</title>
        <meta name="description" content="Descubre nuestro catálogo de vehículos y maquinaria pesada en VENTRENTALL. Renta y compra con las mejores condiciones del mercado." />
        <meta name="keywords" content="renting de vehículos, alquiler de maquinaria, compra de autos, activos productivos" />
        <meta name="robots" content="index, follow" />
      </Head>

      <Header />
      <RentingActivos />
      <MaquinariaPesada />
      <Contacto />
      <Footer />

      {/* Botón de WhatsApp */}
      <WhatsappButton />
    </>
  );
}
