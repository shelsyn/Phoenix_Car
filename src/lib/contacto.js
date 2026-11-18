// Datos de contacto centralizados: si cambian, se actualizan aquí.
export const PHONE = '573143532474';
export const PHONE_DISPLAY = '+57 (314) 353 2474';
export const EMAIL = 'gerencia@ventrentall.com';
export const INSTAGRAM_URL = 'https://www.instagram.com/ventarentall_?igsh=M2FoMTQ4Y3k5YWln';

export const whatsappUrl = (text = 'Hola, quiero información, gracias.') =>
  `https://api.whatsapp.com/send/?phone=${PHONE}&text=${encodeURIComponent(text)}`;

export const WHATSAPP_URL = whatsappUrl();
