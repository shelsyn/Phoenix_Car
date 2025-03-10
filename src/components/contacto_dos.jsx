import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import emailjs from 'emailjs-com';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { toast } from 'react-toastify';

// SVG de WhatsApp proporcionado
const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-8 w-8 mr-3">
    <path fill="#047ab7" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
  </svg>
);

export function Contacto_dos() {
  const notify = (text, type) => {
    if (type === 'error') {
      return toast.error(text, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
    return toast(text, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const sendEmail = (e) => {
    e.preventDefault();

    // Validación de campos vacíos
    if (!form.name || !form.email || !form.phone || !form.message) {
      notify('Por favor completa todos los campos.', 'error');
      return;
    }

    // Envío del correo usando emailjs
    emailjs.send('service_k28ljj6', 'template_ujp25w7', form, 'yxMEi6_7I0oqQh6dX').then(
      () => {
        notify('Todo fue enviado correctamente', 'success');
        setForm({ name: '', email: '', phone: '', message: '' });
      },
      (error) => {
        notify('Ocurrió un error, vuelve a intentarlo más tarde', 'error');
        console.log(error.text);
      }
    );
  };

  return (
    <>
      <style>
        {`
        @media (max-width: 767px) {
          .container {
            max-width: 345px;
          }
        }
        `}
      </style>
      <section id="ContactUs" className="py-10 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-[#047ab7] mb-4">¡Contáctanos!</h2>
              <p className="text-lg text-gray-700 mb-6">Tu mensaje nos importa. ¡Nuestro equipo te contactará pronto!</p>
              <div className="flex items-center mt-5">
                <PhoneIcon className="h-8 w-8 mr-3 text-[#047ab7]" />
                <a href="tel:+573143532474" className="text-[#047ab7] text-lg">+57 (314) 3532474</a>
              </div>
              <div className="flex items-center mt-4">
                <EnvelopeIcon className="h-8 w-8 mr-3 text-[#047ab7]" />
                <a href="mailto:gerencia@ventrentall.com?Subject=Aquí%20el%20asunto%20del%20mail" className="text-[#047ab7] text-lg">Gerencia@ventrentall.com</a>
              </div>
              <div className="flex items-center mt-4">
  <WhatsAppIcon className="h-8 w-8 mr-3" />
  <a 
    href="https://api.whatsapp.com/send/?phone=573143532474&text=Hola,+quiero+información+de+Renting+gracias." 
    className="text-[#047ab7] text-lg" 
    target="_blank" 
    rel="noopener noreferrer"
  > 
    WhatsApp 
  </a>
</div>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <form onSubmit={sendEmail} className="grid grid-cols-1 gap-4">
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  autoComplete="user_name"
                  placeholder="Nombre Completo *"
                  className="block w-full px-4 py-3 rounded-md border-gray-300 placeholder-gray-500 shadow-sm focus:border-[#05a0e3] focus:ring-[#05a0e3]"

                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  autoComplete="email"
                  placeholder="Correo Electrónico *"
                  className="block w-full px-4 py-3 rounded-md border-gray-300 placeholder-gray-500 shadow-sm focus:border-[#05a0e3] focus:ring-[#05a0e3]"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
                <input
                  type="text"
                  name="user_phone"
                  id="user_phone"
                  autoComplete="tel"
                  placeholder="Número de teléfono *"
                  className="block w-full px-4 py-3 rounded-md border-gray-300 placeholder-gray-500 shadow-sm focus:border-[#05a0e3] focus:ring-[#05a0e3]"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  required
                />
                <textarea
                  id="user_message"
                  name="user_message"
                  rows={4}
                  placeholder="Mensaje *"
                  className="block w-full px-4 py-3 rounded-md border-gray-300 placeholder-gray-500 shadow-sm focus:border-[#05a0e3] focus:ring-[#05a0e3]"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                />
                <button
                  type="submit"
                  className="inline-flex justify-center items-center w-full rounded-md border border-transparent bg-[#047ab7] py-3 px-8 text-center font-normal text-white hover:bg-[#05a0e3] mr-4 focus:outline-none focus:ring-2 focus:ring-[#05a0e3] focus:ring-offset-2"

                  >
                
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
