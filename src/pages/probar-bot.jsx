import { Fragment, useEffect, useRef, useState } from 'react';
import Head from 'next/head';

/**
 * Simulador del chatbot de WhatsApp: http://localhost:3000/probar-bot
 * Solo existe en desarrollo (npm run dev) o con CHATBOT_PRUEBA=1.
 */
export async function getServerSideProps() {
  const habilitado = process.env.NODE_ENV !== 'production' || process.env.CHATBOT_PRUEBA === '1';
  return habilitado ? { props: {} } : { notFound: true };
}

const nuevoTelefono = () => '000' + String(Math.floor(Math.random() * 1e9)).padStart(9, '0');
const hora = () => new Date().toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' });

// Formato de WhatsApp: *negrita*, _cursiva_, saltos de línea y enlaces
function FormatoWhatsApp({ texto }) {
  return texto.split('\n').map((linea, i) => (
    <Fragment key={i}>
      {i > 0 && <br />}
      {linea.split(/(\*[^*]+\*|_[^_]+_|https?:\/\/\S+)/g).map((p, j) => {
        if (/^\*[^*]+\*$/.test(p)) return <strong key={j}>{p.slice(1, -1)}</strong>;
        if (/^_[^_]+_$/.test(p)) return <em key={j}>{p.slice(1, -1)}</em>;
        if (/^https?:\/\//.test(p)) return <a key={j} href={p} target="_blank" rel="noreferrer" className="text-sky-700 underline">{p}</a>;
        return p;
      })}
    </Fragment>
  ));
}

export default function ProbarBot() {
  const [telefono, setTelefono] = useState('');
  const [mensajes, setMensajes] = useState([]);
  const [texto, setTexto] = useState('');
  const [enviando, setEnviando] = useState(false);
  const [desfase, setDesfase] = useState(0); // minutos simulados
  const [estado, setEstado] = useState(null);
  const [listaAbierta, setListaAbierta] = useState(null);
  const fin = useRef(null);

  useEffect(() => {
    setTelefono(nuevoTelefono());
  }, []);
  useEffect(() => {
    fin.current?.scrollIntoView({ behavior: 'smooth' });
  }, [mensajes]);

  async function enviar({ texto: t, opcionId, titulo, minutosExtra = 0 }) {
    const visible = titulo || t;
    if (!visible?.trim() || enviando) return;
    const nuevoDesfase = desfase + minutosExtra;
    setDesfase(nuevoDesfase);
    setMensajes((m) => [...m, { de: 'cliente', texto: visible, hora: hora() }]);
    setTexto('');
    setListaAbierta(null);
    setEnviando(true);
    try {
      const res = await fetch('/api/chatbot-prueba', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ telefono, texto: t ?? titulo, opcionId, minutosDespues: nuevoDesfase }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || res.status);
      setEstado(data);
      const respuestas = data.salidas.map((s) => ({ de: 'bot', ...s, hora: hora() }));
      if (!respuestas.length) {
        respuestas.push({ de: 'sistema', texto: data.resultado === 'atencion_humana' ? '🤫 El bot no responde: el chat está con un asesor humano (escribe MENÚ para volver).' : `(sin respuesta: ${data.resultado})` });
      }
      setMensajes((m) => [...m, ...respuestas]);
    } catch (e) {
      setMensajes((m) => [...m, { de: 'sistema', texto: `⚠️ Error: ${e.message}` }]);
    } finally {
      setEnviando(false);
    }
  }

  function reiniciar() {
    setTelefono(nuevoTelefono());
    setMensajes([]);
    setDesfase(0);
    setEstado(null);
  }

  function simularEspera(minutos, etiqueta) {
    setDesfase((d) => d + minutos);
    setMensajes((m) => [...m, { de: 'sistema', texto: `⏱️ Simulando que pasan ${etiqueta} sin responder… escribe algo para continuar.` }]);
  }

  const ultimoBot = mensajes.reduce((idx, m, i) => (m.de === 'bot' ? i : idx), -1);

  return (
    <>
      <Head>
        <title>Probar bot de WhatsApp</title>
        <meta name="robots" content="noindex" />
      </Head>
      <div className="flex min-h-screen flex-col items-center bg-slate-200 p-0 sm:p-6">
        <div className="flex w-full max-w-5xl flex-1 flex-col gap-4 lg:flex-row">
          {/* Teléfono */}
          <div className="flex h-[100dvh] w-full flex-col overflow-hidden bg-[#efeae2] shadow-2xl sm:h-[85vh] sm:rounded-3xl lg:max-w-md">
            <div className="flex items-center gap-3 bg-[#075e54] px-4 py-3 text-white">
              <img src="/LOGOREDONDO.png" alt="" className="h-10 w-10 rounded-full bg-white object-contain" />
              <div className="min-w-0 flex-1">
                <p className="font-semibold leading-tight">VenteRental (bot)</p>
                <p className="text-xs text-white/75">{enviando ? 'escribiendo…' : 'simulador · no envía mensajes reales'}</p>
              </div>
            </div>

            <div className="flex-1 space-y-2 overflow-y-auto px-3 py-4">
              {mensajes.length === 0 && (
                <div className="mx-auto mt-10 max-w-xs rounded-xl bg-[#fff8c5] p-4 text-center text-sm text-slate-700 shadow">
                  Escribe <strong>Hola</strong> como si fueras un cliente para empezar la conversación.
                </div>
              )}
              {mensajes.map((m, i) => {
                if (m.de === 'sistema')
                  return <p key={i} className="mx-auto max-w-[90%] rounded-lg bg-white/70 px-3 py-1.5 text-center text-xs text-slate-600">{m.texto}</p>;
                const mio = m.de === 'cliente';
                const activo = i === ultimoBot && !enviando;
                const ops = m.opciones || [];
                const comoBotones = ops.length > 0 && ops.length <= 3 && ops.every((o) => o.titulo.length <= 20);
                return (
                  <div key={i} className={`flex ${mio ? 'justify-end' : 'justify-start'}`}>
                    <div className="max-w-[85%]">
                      <div className={`rounded-lg px-3 py-2 text-[14.5px] leading-snug text-slate-900 shadow-sm ${mio ? 'rounded-tr-none bg-[#d9fdd3]' : 'rounded-tl-none bg-white'}`}>
                        <FormatoWhatsApp texto={m.texto} />
                        <span className="float-right ml-3 mt-1 text-[11px] text-slate-500">{m.hora}</span>
                      </div>
                      {ops.length > 0 && comoBotones && (
                        <div className="mt-1 grid gap-1">
                          {ops.map((o) => (
                            <button key={o.id} disabled={!activo} onClick={() => enviar({ opcionId: o.id, titulo: o.titulo })}
                              className="rounded-lg bg-white py-2 text-sm font-medium text-[#027eb5] shadow-sm transition hover:bg-slate-50 disabled:opacity-50">
                              {o.titulo}
                            </button>
                          ))}
                        </div>
                      )}
                      {ops.length > 0 && !comoBotones && (
                        <div className="mt-1">
                          <button disabled={!activo} onClick={() => setListaAbierta(listaAbierta === i ? null : i)}
                            className="w-full rounded-lg bg-white py-2 text-sm font-medium text-[#027eb5] shadow-sm hover:bg-slate-50 disabled:opacity-50">
                            ☰ Ver opciones
                          </button>
                          {listaAbierta === i && activo && (
                            <div className="mt-1 overflow-hidden rounded-lg bg-white shadow">
                              {ops.map((o) => (
                                <button key={o.id} onClick={() => enviar({ opcionId: o.id, titulo: o.titulo })}
                                  className="block w-full border-b border-slate-100 px-4 py-2.5 text-left last:border-0 hover:bg-slate-50">
                                  <span className="block text-sm text-slate-900">{o.titulo}</span>
                                  {o.descripcion && <span className="block text-xs text-slate-500">{o.descripcion}</span>}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
              <div ref={fin} />
            </div>

            <form className="flex items-center gap-2 bg-[#f0f2f5] px-3 py-2" onSubmit={(e) => { e.preventDefault(); enviar({ texto }); }}>
              <input value={texto} onChange={(e) => setTexto(e.target.value)} placeholder="Escribe un mensaje"
                className="min-w-0 flex-1 rounded-full border-0 bg-white px-4 py-2.5 text-sm focus:ring-2 focus:ring-[#25D366]" autoFocus />
              <button type="submit" disabled={enviando || !texto.trim()} aria-label="Enviar"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white disabled:opacity-50">➤</button>
            </form>
          </div>

          {/* Panel de pruebas */}
          <div className="w-full space-y-4 rounded-3xl bg-white p-5 text-sm shadow-xl lg:max-w-sm lg:self-start">
            <h1 className="font-display text-lg font-bold text-slate-900">Panel de pruebas</h1>
            <button onClick={reiniciar} className="w-full rounded-full bg-brand px-4 py-2.5 font-semibold text-white hover:bg-brand-light">
              🔄 Nuevo cliente (empezar de cero)
            </button>
            <div>
              <p className="mb-2 font-semibold text-slate-700">Comandos rápidos</p>
              <div className="flex flex-wrap gap-2">
                {['ASESOR', 'MENÚ', 'CORREGIR', 'REINICIAR'].map((c) => (
                  <button key={c} onClick={() => enviar({ texto: c })} className="rounded-full border border-slate-300 px-3 py-1.5 hover:border-brand hover:text-brand">{c}</button>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-2 font-semibold text-slate-700">Simular tiempo sin responder</p>
              <div className="flex flex-wrap gap-2">
                <button onClick={() => simularEspera(90, '90 minutos')} className="rounded-full border border-slate-300 px-3 py-1.5 hover:border-brand hover:text-brand">+90 min (reanudar)</button>
                <button onClick={() => simularEspera(25 * 60, '25 horas')} className="rounded-full border border-slate-300 px-3 py-1.5 hover:border-brand hover:text-brand">+25 h (abandono)</button>
              </div>
            </div>
            <dl className="grid grid-cols-[auto,1fr] gap-x-3 gap-y-1 rounded-xl bg-slate-50 p-3 font-mono text-xs">
              <dt className="text-slate-500">Cliente</dt><dd>{telefono}</dd>
              <dt className="text-slate-500">Nodo</dt><dd>{estado?.nodo || '—'}</dd>
              <dt className="text-slate-500">Resultado</dt><dd>{estado?.resultado || '—'}</dd>
              <dt className="text-slate-500">Conversación</dt><dd>{estado?.estadoConversacion || '—'}</dd>
              <dt className="text-slate-500">Almacenamiento</dt><dd>{estado?.almacenamiento || '—'}</dd>
              <dt className="text-slate-500">Tiempo simulado</dt><dd>+{desfase} min</dd>
            </dl>
            <p className="text-xs leading-relaxed text-slate-500">
              Usa el mismo motor y los mismos textos que el bot real. Los nodos (002, 004, 304…) corresponden a la especificación en
              <code className="mx-1 rounded bg-slate-100 px-1">docs/chatbot/especificacion.md</code>. Aquí no se envía nada por WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
