import Head from "next/head";
import EquiposMedicos from "@/components/CatalogoMedicina/EquiposMedicos";
import { Contacto } from "@/components/Contacto";
import Header from "@/components/Header";
export default function EquiposMedicosPage() {
  return (
    <>
      <Head>
        <title>Alquiler de Equipos Médicos | VentRentAll</title>
        <meta
          name="description"
          content="Renta de equipos médicos con las mejores condiciones. Descubre las ventajas de nuestro servicio y cotiza ahora."
        />
      </Head>
      <Header />
      <EquiposMedicos />
      <br />
      <Contacto />
      
    </>
  );
}
