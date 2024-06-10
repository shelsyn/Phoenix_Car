import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import emailjs from '@emailjs/browser';
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
    emailjs.send('service_p87l617', 'template_ka7ig5m', form, 'gpsaDZJ5IEe1uw7-M').then(
      () => {
        notify('Todo fue enviado corectamente', 'success');
        setForm({ name: '', email: '', phone: '', message: '' });
      },
      (error) => {
        notify('Ocurrio un error, vuelve a intentarlo mas tarde', 'error');
        console.log(error.text);
      }
    );
    emailjs.send('service_p87l617', 'template_ka7ig5m', form, 'gpsaDZJ5IEe1uw7-M');
  };
    return (
      <section id="ContactUs" className="pb-20">
        <div className="relative bg-white">
          <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
            <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
              <div className="mx-auto max-w-lg">
                <h2 className="text-2xl font-bold tracking-tight text-gold-goldTitle phoenix_car@outlook.com sm:text-3xl">Contáctanos</h2>
                <p className="mt-3 text-lg leading-6 text-gray-500">Estaremos respondiendo lo mas pronto posible.</p>
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
                      <a href="mailto:phoenix_car@outlook.com?Subject=Aquí%20el%20asunto%20del%20mail">phoenix_car@outlook.com</a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
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
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      value={form.name}
                    />
                  </div>
                  <div>
                    <label htmlFor="user_email" className="user_email">
                      Correo Electrónico
                    </label>
                    <input
                      id="user_email"
                      name="user_email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-gold-goldText focus:ring-gold-goldText"
                      placeholder="Correo Electrónico *"
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      value={form.email}
                    />
                  </div>
                  <div>
                    <label htmlFor="user_phone" className="user_phone">
                      Número de teléfono
                    </label>
                    <input
                      type="text"
                      name="user_phone"
                      id="user_phone"
                      autoComplete="tel"
                      className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-gold-goldText focus:ring-gold-goldText"
                      placeholder="Número de teléfono *"
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      value={form.phone}
                    />
                  </div>
                  <div>
                    <label htmlFor="user_message" className="user_message">
                      Mensaje
                    </label>
                    <textarea
                      id="user_message"
                      name="user_message"
                      rows={4}
                      className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-gold-goldText focus:ring-gold-goldText"
                      placeholder="Mensaje *"
                      onChange={(e) => setForm({ ...form, message: e.target.value })} 
                      value={form.message}
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