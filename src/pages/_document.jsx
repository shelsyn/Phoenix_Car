/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript } from 'next/document'
import React from "react"

export default function Document() {
  return (

    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="PhoenixCar - ¿Necesitas alquilar un carro en Colombia? En Phoenixcar ofrecemos una amplia selección de vehículos a precios asequibles. ¡Reserva hoy mismo y disfruta de la comodidad y libertad de explorar la ciudad a tu propio ritmo!." />
        <meta name="keywords" content="alquiler de carros, renta de autos, alquiler de camiones, alquiler de automóviles, alquiler de vehículos" />
        <meta name="author" content="PhoenixCar" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name='impact-site-verification' value='82679832-f122-4fef-a00d-b805cf90e014' />
        <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
        <title>PhoenixCar - renta de carros Colombia</title>
        <link rel="google-site-verification" href="google-site-verification=g6TmV7DgMs9nADiZ9VSxZWMN96YqsD2SNRivN6RDwOs" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16627463138"></script>
      <script dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16627463138');
        `,
      }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}


