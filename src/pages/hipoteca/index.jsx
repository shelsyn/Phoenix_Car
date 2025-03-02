import { useState } from "react";
import Head from "next/head";
import { Contacto } from "@/components/Contacto";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Empleado from "@/components/Hipotecas/Empleado";
import Hipotecario from "@/components/Hipotecas/Hipotecario";
import Independiente from "@/components/Hipotecas/Independiente";
import Pensionado from "@/components/Hipotecas/Pensionado";
import WhatsappButton from "@/components/WhatsappButton"; 

export default function Hipoteca() {
  return (
    <>
      <Head>
        <title>VentRentAll | Hipotecas y Financiamiento</title>
        <meta name="description" content="Descubre las mejores opciones de hipotecas y financiamiento en VentRentAll. Soluciones para empleados, independientes y pensionados." />
        <meta name="keywords" content="hipotecas, financiamiento de vivienda, préstamos para casas, hipoteca para empleados, crédito para independientes, renta de activos" />
        <meta name="robots" content="index, follow" />
      </Head>

      <Header />
      <Hipotecario />
      <Empleado />
      <Independiente />
      <Pensionado />
      <Contacto />
      <Footer />
      <WhatsappButton />
    </>
  );
}
