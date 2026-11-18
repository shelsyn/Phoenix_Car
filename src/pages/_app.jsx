import '@/styles/tailwind.css';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';
import Script from 'next/script';
import { Inter, Lexend } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import RouteLoader from '@/components/ui/RouteLoader';

// Fuentes auto-hospedadas por Next (sin peticiones a Google en el navegador)
const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });
const lexend = Lexend({ subsets: ['latin'], display: 'swap', variable: '--font-display' });

const GA_ID = 'AW-16627463138';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Valores por defecto: cada página puede sobrescribirlos con su propio <Head> */}
        <title>VentRentAll | Renta y Venta de Vehículos y Activos</title>
        <meta
          name="description"
          content="Renting y venta de vehículos, maquinaria y equipos para empresas y personas en Colombia. Sin cuota inicial, con mantenimiento, seguros e impuestos incluidos."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a1f3d" />
      </Head>

      {/* Google Ads / Analytics: se carga cuando el navegador queda libre, sin competir con la página */}
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="lazyOnload" />
      <Script id="gtag-init" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { cookie_flags: 'SameSite=None; Secure' });
        `}
      </Script>

      <div className={`${inter.variable} ${lexend.variable} font-sans`}>
        <RouteLoader />
        <Component {...pageProps} />
      </div>

      <ToastContainer position="top-right" autoClose={5000} theme="light" />
    </>
  );
}
