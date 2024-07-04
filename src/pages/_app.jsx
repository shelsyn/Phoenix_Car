import 'focus-visible';
import '@/styles/tailwind.css';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    
    if (document.getElementById('gtm-script')) return;

    const script = document.createElement('script');
    script.id = 'gtm-script';
    script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-16627463138';
    script.async = true;
    document.head.appendChild(script);

   
    const scriptConfig = document.createElement('script');
    scriptConfig.id = 'gtm-config';
    scriptConfig.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-16627463138');
    `;
    document.head.appendChild(scriptConfig);

    return () => {
     
      document.head.removeChild(script);
      document.head.removeChild(scriptConfig);
    };
  }, []);

  return <Component {...pageProps} />;
}
