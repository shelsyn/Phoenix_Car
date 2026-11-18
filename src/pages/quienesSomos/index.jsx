import Head from 'next/head';
import Footer from '@/components/Footer';
import Politicas from '@/components/QuienesSomos/Politicas';
import QuienesSomos from '@/components/QuienesSomos/QuienesSomos';
import Beneficios from '@/components/QuienesSomos/Beneficios';
import { Contacto } from '@/components/Contacto';
import Creditos from '@/components/QuienesSomos/Creditos';
import Header from '@/components/Header';
import WhatsappButton from '@/components/WhatsappButton';

export default function SobreNosotros() {
  return (
    <>
      <Head>
        <title>Crédito de Vehículo | VentRentAll</title>
      </Head>
      <Header />
      <QuienesSomos />
      <Beneficios />
      <Politicas />
      <Creditos />
      <Contacto />
      <Footer />
      <WhatsappButton />
    </>
  );
}
