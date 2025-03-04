/* eslint-disable @next/next/no-css-tags */
import { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="VENTRENTALL - Tu mejor opción en compra y renta de vehículos. Encuentra autos, camionetas y más con los mejores precios y financiamiento disponible." />
        <meta name="keywords" content="compra de autos, renta de vehículos, alquiler de carros, leasing de autos, venta de automóviles, financiamiento de autos" />
        <meta name="author" content="VENTRENTALL - Compra y Renta de Vehículos" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="impact-site-verification" value="82679832-f122-4fef-a00d-b805cf90e014" />
        
        {/* Favicon */}
        <link rel="shortcut icon" href="/LOGOREDONDO.png" type="image/x-icon" />
        
        {/* Google Site Verification */}
        <link rel="google-site-verification" href="google-site-verification=g6TmV7DgMs9nADiZ9VSxZWMN96YqsD2SNRivN6RDwOs" />
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16627463138"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16627463138', {
                cookie_flags: 'SameSite=None; Secure'
              });
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
