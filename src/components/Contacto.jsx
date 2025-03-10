import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import emailjs from 'emailjs-com';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { toast } from 'react-toastify';

export function Contacto() {
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
    <section id="ContactUs" className="pb-10 bg-gray-50">
      <div className="relative bg-white shadow-lg rounded-lg">
        <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
          <div className="bg-white px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
            <div className="mx-auto max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-[#047ab7] sm:text-4xl">Contáctanos</h2>
              <p className="mt-3 text-lg leading-6 text-gray-500">Estaremos respondiendo lo más pronto posible.</p>
              <dl className="mt-8 text-base text-gray-500">
                <div className="mt-6 flex items-center">
                  <PhoneIcon className="h-6 w-6 flex-shrink-0 text-[#047ab7] mr-3" aria-hidden="true" />
                  <a href="tel:+573143532474" className="hover:text-gray-700">+57 (314) 3532474</a>
                </div>
                <div className="mt-3 flex items-center">
                  <EnvelopeIcon className="h-6 w-6 flex-shrink-0 text-[#047ab7] mr-3" aria-hidden="true" />
                  <a href="mailto:gerencia@ventrentall.com?Subject=Aquí%20el%20asunto%20del%20mail" className="hover:text-gray-700">Gerencia@ventrentall.com</a>
                </div>
              </dl>
            </div>
          </div>
          <div className="bg-white py-10 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
            <div className="mx-auto max-w-lg lg:max-w-none">
              <form onSubmit={sendEmail} className="grid grid-cols-1 gap-y-6">
                <div>
                  <label htmlFor="user_name" className="sr-only">Nombre Completo</label>
                  <input
                    type="text"
                    name="user_name"
                    id="user_name"
                    autoComplete="user_name"
                    className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 hadow-sm focus:border-[#05a0e3] focus:ring-[#05a0e3] focus:ring-gold-goldText"
                    placeholder="Nombre Completo *"
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    value={form.name}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="user_email" className="sr-only">Correo Electrónico</label>
                  <input
                    id="user_email"
                    name="user_email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 hadow-sm focus:border-[#05a0e3] focus:ring-[#05a0e3] focus:ring-gold-goldText"
                    placeholder="Correo Electrónico *"
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    value={form.email}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="user_phone" className="sr-only">Número de teléfono</label>
                  <input
                    type="text"
                    name="user_phone"
                    id="user_phone"
                    autoComplete="tel"
                    className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 hadow-sm focus:border-[#05a0e3] focus:ring-[#05a0e3] focus:ring-gold-goldText"
                    placeholder="Número de teléfono *"
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    value={form.phone}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="user_message" className="sr-only">Mensaje</label>
                  <textarea
                    id="user_message"
                    name="user_message"
                    rows={4}
                    className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 hadow-sm focus:border-[#05a0e3] focus:ring-[#05a0e3] focus:ring-gold-goldText"
                    placeholder="Mensaje *"
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    value={form.message}
                    required
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex justify-center items-center w-full rounded-md border border-transparent bg-[#047ab7] py-3 px-8 text-center font-normal text-white hover:bg-[#05a0e3] mr-4 focus:outline-none focus:ring-2 focus:ring-[#05a0e3] focus:ring-offset-2"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
