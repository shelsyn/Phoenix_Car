import '@/styles/tailwind.css';
import Head from 'next/head'; // Importa el componente Head de next/head

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Metadatos generales */}
        <title>VentRentAll | Renta y Venta de Vehículos y Activos</title>
        <meta name="description" content="Descubre la mejor opción en renta y venta de vehículos con VentRentAll. Autos, maquinaria y más con financiamiento disponible." />
        <meta name="keywords" content="renta de autos, compra de vehículos, leasing de maquinaria, financiamiento de autos, alquiler de maquinaria pesada" />
        <meta name="robots" content="index, follow" />

        {/* Favicon y otros iconos */}
        <link rel="icon" href="/favicon.ico" /> {/* Favicon principal */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" /> {/* Icono para Apple */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" /> {/* Icono de 32x32 */}
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" /> {/* Icono de 16x16 */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}
