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
    user_name: '',
    user_email: '',
    user_phone: '',
    user_message: '',
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send('service_7u9bsv9', 'template_ujp25w7', form, 'user_youruserid')
      .then(() => {
        notify('¡Correo enviado correctamente!', 'success');
        setForm({
          user_name: '',
          user_email: '',
          user_phone: '',
          user_message: '',
        });
      })
      .catch((error) => {
        notify('Ocurrió un error al enviar el correo. Por favor, inténtelo de nuevo más tarde.', 'error');
        console.error('Error al enviar el correo:', error);
      });
  };

  return (
    <section id="ContactUs" className="pb-20">
      <div className="relative bg-white">
        <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
          <div className="bg-white px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
            <div className="mx-auto max-w-lg">
              <h2 className="text-2xl font-bold tracking-tight text-gold-goldTitle sm:text-3xl">Contáctanos</h2>
              <p className="mt-3 text-lg leading-6 text-gray-500">Estaremos respondiendo lo más pronto posible.</p>
              <dl className="mt-8 text-base text-gray-500">
                <div className="mt-6">
                  <dt className="sr-only">Número de teléfono</dt>
                  <dd className="flex">
                    <PhoneIcon className="h-6 w-6 flex-shrink-0 text-gray-400 mr-3" aria-hidden="true" />
                    <a href="tel:+573143532474">+57 (314) 3532474</a>
                  </dd>
                </div>
                <div className="mt-3">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex">
                    <EnvelopeIcon className="h-6 w-6 flex-shrink-0 text-gray-400 mr-3" aria-hidden="true" />
                    <a href="mailto:Comercial@phoenixcar.com.co?Subject=Aquí%20el%20asunto%20del%20mail">Comercial@phoenixcar.com.co</a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="bg-white py-5 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
            <div className="mx-auto max-w-lg lg:max-w-none">
              <form onSubmit={sendEmail} className="grid grid-cols-1 gap-y-6">
                <div>
                  <label htmlFor="user_name" className="sr-only">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    id="user_name"
                    autoComplete="user_name"
                    className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-gold-goldText focus:ring-gold-goldText"
                    placeholder="Nombre Completo *"
                    onChange={(e) => setForm({ ...form, user_name: e.target.value })}
                    value={form.user_name}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="user_email" className="sr-only">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    id="user_email"
                    autoComplete="user_email"
                    className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-gold-goldText focus:ring-gold-goldText"
                    placeholder="Correo Electrónico *"
                    onChange={(e) => setForm({ ...form, user_email: e.target.value })}
                    value={form.user_email}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="user_phone" className="sr-only">
                    Número de teléfono
                  </label>
                  <input
                    type="tel"
                    name="user_phone"
                    id="user_phone"
                    autoComplete="user_phone"
                    className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-gold-goldText focus:ring-gold-goldText"
                    placeholder="Número de teléfono *"
                    onChange={(e) => setForm({ ...form, user_phone: e.target.value })}
                    value={form.user_phone}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="user_message" className="sr-only">
                    Mensaje
                  </label>
                  <textarea
                    id="user_message"
                    name="user_message"
                    rows={4}
                    className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-gold-goldText focus:ring-gold-goldText"
                    placeholder="Mensaje *"
                    onChange={(e) => setForm({ ...form, user_message: e.target.value })}
                    value={form.user_message}
                    required
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex justify-center items-center rounded-md border border-transparent bg-gold-goldText py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-gold-goldTitle focus:outline-none focus:ring-2 focus:ring-gold-goldText focus:ring-offset-2"
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
