import { useState } from 'react';
import { toast } from 'react-toastify';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { EMAIL, PHONE, PHONE_DISPLAY, WHATSAPP_URL } from '@/lib/contacto';

const EMAILJS = { service: 'service_k28ljj6', template: 'template_ujp25w7', publicKey: 'yxMEi6_7I0oqQh6dX' };
const empty = { name: '', email: '', phone: '', message: '' };

const inputClass =
  'block w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition focus:border-brand focus:bg-white focus:ring-brand';

export function Contacto() {
  const [form, setForm] = useState(empty);
  const [sending, setSending] = useState(false);
  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.message) {
      toast.error('Por favor completa todos los campos.');
      return;
    }
    setSending(true);
    try {
      // La librería se descarga solo cuando alguien envía el formulario
      const { default: emailjs } = await import('@emailjs/browser');
      await emailjs.send(EMAILJS.service, EMAILJS.template, form, { publicKey: EMAILJS.publicKey });
      toast.success('¡Mensaje enviado! Te contactaremos pronto.');
      setForm(empty);
    } catch (error) {
      toast.error('Ocurrió un error, vuelve a intentarlo más tarde.');
      console.error(error?.text || error);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="ContactUs" className="scroll-mt-24 bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-slate-900/5 lg:grid lg:grid-cols-5">
          {/* Información */}
          <div className="relative overflow-hidden bg-gradient-to-br from-brand-navy via-brand to-brand-light p-8 text-white sm:p-10 lg:col-span-2">
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-white/10" aria-hidden="true" />
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Hablemos</h2>
            <p className="mt-3 text-white/85">
              Cuéntanos qué necesitas y un asesor te responderá lo más pronto posible.
            </p>
            <ul className="relative mt-10 space-y-5 text-sm">
              <li>
                <a href={`tel:+${PHONE}`} className="flex items-center gap-4 transition hover:opacity-80">
                  <span className="rounded-full bg-white/15 p-2.5"><PhoneIcon className="h-5 w-5" aria-hidden="true" /></span>
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 transition hover:opacity-80">
                  <span className="rounded-full bg-white/15 p-2.5"><EnvelopeIcon className="h-5 w-5" aria-hidden="true" /></span>
                  {EMAIL}
                </a>
              </li>
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="flex items-center gap-4 transition hover:opacity-80">
                  <span className="rounded-full bg-white/15 p-2.5"><AiOutlineWhatsApp className="h-5 w-5" aria-hidden="true" /></span>
                  Escríbenos por WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Formulario */}
          <form onSubmit={sendEmail} className="grid gap-4 p-8 sm:grid-cols-2 sm:p-10 lg:col-span-3">
            <div className="sm:col-span-2">
              <label htmlFor="contact_name" className="mb-1.5 block text-sm font-medium text-slate-700">Nombre completo</label>
              <input id="contact_name" name="user_name" type="text" autoComplete="name" required className={inputClass} placeholder="Tu nombre" value={form.name} onChange={set('name')} />
            </div>
            <div>
              <label htmlFor="contact_email" className="mb-1.5 block text-sm font-medium text-slate-700">Correo electrónico</label>
              <input id="contact_email" name="user_email" type="email" autoComplete="email" required className={inputClass} placeholder="tucorreo@ejemplo.com" value={form.email} onChange={set('email')} />
            </div>
            <div>
              <label htmlFor="contact_phone" className="mb-1.5 block text-sm font-medium text-slate-700">Teléfono</label>
              <input id="contact_phone" name="user_phone" type="tel" autoComplete="tel" required className={inputClass} placeholder="300 000 0000" value={form.phone} onChange={set('phone')} />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="contact_message" className="mb-1.5 block text-sm font-medium text-slate-700">Mensaje</label>
              <textarea id="contact_message" name="user_message" rows={4} required className={inputClass} placeholder="¿Qué te gustaría rentar o comprar?" value={form.message} onChange={set('message')} />
            </div>
            <div className="sm:col-span-2">
              <button type="submit" disabled={sending} className="btn-primary w-full disabled:cursor-wait disabled:opacity-70 sm:w-auto">
                {sending ? 'Enviando…' : 'Enviar mensaje'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
