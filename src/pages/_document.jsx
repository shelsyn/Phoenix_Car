import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <meta name="author" content="VENTRENTALL" />
        <meta name="robots" content="index, follow" />
        <meta name="impact-site-verification" content="82679832-f122-4fef-a00d-b805cf90e014" />
        <meta name="google-site-verification" content="g6TmV7DgMs9nADiZ9VSxZWMN96YqsD2SNRivN6RDwOs" />

        {/* Iconos */}
        <link rel="icon" href="/LOGOREDONDO.png" type="image/png" />
        <link rel="apple-touch-icon" href="/LOGOREDONDO.png" />

        {/* Conexiones anticipadas a dominios que usa la página */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
