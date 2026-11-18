import { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { WHATSAPP_URL } from '@/lib/contacto';

const WhatsAppGlyph = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
  </svg>
);

export default function WhatsappButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-[100] flex flex-col items-end gap-3">
      <div
        className={`w-72 origin-bottom-right overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-slate-900/5 transition-all duration-300 ease-out ${
          isOpen ? 'pointer-events-auto scale-100 opacity-100' : 'pointer-events-none translate-y-2 scale-95 opacity-0'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="bg-[#25D366] px-4 py-3 text-white">
          <p className="font-display text-base font-semibold">Renta a largo plazo</p>
          <p className="text-xs text-white/90">Normalmente respondemos en minutos</p>
        </div>
        <div className="p-4">
          <p className="text-sm leading-6 text-slate-600">
            La renta de <span className="font-semibold text-slate-900">vehículos y activos productivos</span> está
            diseñada para el largo plazo, con contratos mayores a{' '}
            <span className="font-semibold text-emerald-600">2 años</span>.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            tabIndex={isOpen ? 0 : -1}
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition hover:brightness-95"
          >
            <WhatsAppGlyph className="h-4 w-4" />
            Iniciar chat
          </a>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Cerrar chat de WhatsApp' : 'Abrir chat de WhatsApp'}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-emerald-900/20 transition hover:scale-105"
      >
        {!isOpen && <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" aria-hidden="true" />}
        {isOpen ? <XMarkIcon className="h-6 w-6" /> : <WhatsAppGlyph className="h-7 w-7" />}
      </button>
    </div>
  );
}
