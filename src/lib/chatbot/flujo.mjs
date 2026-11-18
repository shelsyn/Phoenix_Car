/**
 * FLUJO CONVERSACIONAL DE VENTERENTAL — fuente única de verdad.
 *
 * Cada nodo indica:
 *  - origen:  'original'  → texto/regla tomados del proceso comercial entregado
 *             'propuesto' → mejora o texto nuevo (requiere aprobación comercial)
 *  - en cada transición, `estado`: 'original' | 'pendiente' (conexión no definida en el material
 *    recibido; se usa una ruta conservadora y se documenta en docs/chatbot/especificacion.md con su código P-xx)
 *
 * Tipos de nodo:
 *  pregunta  → opciones cerradas (número, texto o botón)
 *  texto     → respuesta libre validada (ej. nombre)
 *  contacto  → solicita día y hora; al responder crea la solicitud de contacto y asigna especialista
 *  mensaje   → solo informa y continúa automáticamente
 *  salida    → fin de la ruta (rechazo, pendiente, sin consentimiento o cita solicitada)
 */
import { POLITICA_DATOS_URL, REGLAS } from './config.mjs';

export const MARCA = 'VenteRental'; // PENDIENTE P-02: el sitio usa "VentRentAll"; confirmar nombre comercial

const sr = (c) => `Sr. ${c.nombre}`;
const ir = (destino, estado = 'original', nota) => ({ destino, estado, ...(nota && { nota }) });

const SI_NO = [
  { valor: 'si', titulo: 'SI', sinonimos: ['si', 's', 'yes', 'claro', 'acepto', 'de acuerdo', 'correcto', 'afirmativo', 'si acepto'] },
  { valor: 'no', titulo: 'NO', sinonimos: ['no', 'n', 'no acepto', 'negativo'] },
];
const TIPO_PERSONA = [
  { valor: 'natural', titulo: 'Persona natural', sinonimos: ['natural', 'persona natural', 'pn'] },
  { valor: 'juridica', titulo: 'Persona jurídica', sinonimos: ['juridica', 'persona juridica', 'pj', 'empresa', 'sociedad'] },
];

const TXT_CONTACTO =
  'A continuación un especialista se comunicará con usted para poder procesar su solicitud.\n\n' +
  '¿En qué día y hora desea que el especialista se comunique con usted?';

const txtDataCredito = (sujeto) => (c) =>
  `${sr(c)}, para continuar con nuestro proceso por favor responda las siguientes preguntas:\n\n` +
  `¿${sujeto} reportado en Data Crédito?\n\nSI\nNO`;

const TXT_VENTAS = '¿Su promedio de ventas es mayor o igual a los 5 mil millones anual?\n\n1. SI.\n2. NO.';
const txtTipoPersona = (c) => `Señor ${c.nombre}, ¿qué tipo de persona es usted?\n\n1. PERSONA NATURAL.\n2. PERSONA JURÍDICA.`;

export const NODOS = {
  // ───────────── ENTRADA (común) ─────────────
  '002': {
    servicio: 0, tipo: 'pregunta', origen: 'original', clave: 'consentimiento_datos',
    texto: () =>
      `Hola, bienvenido a ${MARCA}. Somos distribuidores de diferentes marcas y vendemos y rentamos activos productivos (más de un año). ` +
      'Al utilizar este medio acepta términos y condiciones de WhatsApp; para continuar con nuestra asesoría debes aceptar la política de ' +
      `tratamiento de datos personales que puede ser consultada en ${POLITICA_DATOS_URL}, si la aceptas digita SI, o en caso contrario digita NO.`,
    opciones: SI_NO,
    siguiente: { si: ir('003'), no: ir('S-002') },
  },
  '003': {
    servicio: 0, tipo: 'texto', origen: 'original', clave: 'nombre', validador: 'nombre',
    texto: () => 'Hola, entiendo que estás interesado(a) en conocer nuestra figura y servicios. Dime ¿Cuál es tu nombre?',
    siguiente: ir('004'),
  },
  '004': {
    servicio: 0, tipo: 'pregunta', origen: 'original', clave: 'servicio',
    texto: (c) =>
      `${sr(c)}, seleccione el número del servicio en el que está interesado(a):\n\n` +
      '1. Compra de vehículo nuevo.\n2. Gestionar crédito vehicular.\n3. Renta de activos productivos.\n' +
      '4. Renta de vehículos a largo plazo.\n5. Crédito para tu empresa.',
    opciones: [
      { valor: '1', titulo: 'Compra vehículo nuevo', sinonimos: ['compra de vehiculo nuevo', 'compra vehiculo nuevo', 'comprar vehiculo', 'compra'] },
      { valor: '2', titulo: 'Crédito vehicular', sinonimos: ['gestionar credito vehicular', 'credito vehicular', 'credito de vehiculo'] },
      { valor: '3', titulo: 'Renta de activos', sinonimos: ['renta de activos productivos', 'renta de activos', 'activos productivos', 'activos'] },
      { valor: '4', titulo: 'Renting largo plazo', descripcion: 'Renta de vehículos a largo plazo', sinonimos: ['renta de vehiculos a largo plazo', 'renting', 'renta de vehiculos', 'renta de vehiculo'] },
      { valor: '5', titulo: 'Crédito para tu empresa', sinonimos: ['credito para tu empresa', 'credito para empresa', 'credito empresarial', 'credito empresa'] },
    ],
    siguiente: { 1: ir('101'), 2: ir('203'), 3: ir('301'), 4: ir('401'), 5: ir('501') },
  },

  // ───────────── FLUJO 1: COMPRA DE VEHÍCULO NUEVO ─────────────
  '101': {
    servicio: 1, tipo: 'pregunta', origen: 'original', clave: 'tipo_persona', texto: txtTipoPersona, opciones: TIPO_PERSONA,
    siguiente: { natural: ir('102N'), juridica: ir('102J') },
  },
  '102N': {
    servicio: 1, tipo: 'pregunta', origen: 'original', clave: 'modalidad_compra',
    texto: () => 'El vehículo que quiere comprar lo va a realizar:\n\n1. Con crédito vehicular.\n2. De contado.',
    opciones: [
      { valor: 'credito', titulo: 'Con crédito', sinonimos: ['con credito vehicular', 'con credito', 'credito', 'credito vehicular', 'financiado'] },
      { valor: 'contado', titulo: 'De contado', sinonimos: ['de contado', 'contado', 'efectivo'] },
    ],
    // Persona natural. El diagrama muestra ramificaciones adicionales no legibles → P-03
    siguiente: { credito: ir('103', 'pendiente', 'P-03'), contado: ir('103', 'original') },
  },
  '102J': {
    servicio: 1, tipo: 'pregunta', origen: 'original', clave: 'modalidad_compra',
    texto: () => 'El vehículo que quiere comprar lo va a realizar:\n\n1. Con crédito vehicular.\n2. De contado.',
    opciones: [
      { valor: 'credito', titulo: 'Con crédito', sinonimos: ['con credito vehicular', 'con credito', 'credito', 'credito vehicular', 'financiado'] },
      { valor: 'contado', titulo: 'De contado', sinonimos: ['de contado', 'contado', 'efectivo'] },
    ],
    // Persona jurídica. Ramificaciones adicionales no legibles → P-03
    siguiente: { credito: ir('103', 'pendiente', 'P-03'), contado: ir('103', 'original') },
  },
  '103': { servicio: 1, tipo: 'contacto', origen: 'original', texto: () => TXT_CONTACTO },

  // ───────────── FLUJO 2: GESTIÓN DE CRÉDITO VEHICULAR ─────────────
  // Orden tipo de persona → Data Crédito: PENDIENTE P-04 (el material lista primero Data Crédito)
  '203': {
    servicio: 2, tipo: 'pregunta', origen: 'original', clave: 'tipo_persona', texto: txtTipoPersona, opciones: TIPO_PERSONA,
    siguiente: { natural: ir('201', 'pendiente', 'P-04'), juridica: ir('201J', 'pendiente', 'P-04') },
  },
  '201': {
    servicio: 2, tipo: 'pregunta', origen: 'original', clave: 'reportado_datacredito', texto: txtDataCredito('Está usted'), opciones: SI_NO,
    // SI: no se asume rechazo ni aprobación → revisión manual (P-05). NO: situación laboral (original)
    siguiente: { si: ir('S-REV', 'pendiente', 'P-05'), no: ir('202') },
  },
  '201J': {
    servicio: 2, tipo: 'pregunta', origen: 'original', clave: 'empresa_reportada_datacredito', texto: txtDataCredito('Está su empresa'), opciones: SI_NO,
    siguiente: { si: ir('S-REV', 'pendiente', 'P-05'), no: ir('204', 'pendiente', 'P-06') },
  },
  '202': {
    servicio: 2, tipo: 'pregunta', origen: 'original', clave: 'situacion_laboral',
    texto: () => 'Actualmente su tipo de trabajo es:\n\n1. Empleado.\n2. Independiente.\n3. Rentista de capital.\n4. Militar.',
    opciones: [
      { valor: 'empleado', titulo: 'Empleado', sinonimos: ['empleado', 'empleada', 'asalariado'] },
      { valor: 'independiente', titulo: 'Independiente', sinonimos: ['independiente', 'trabajador independiente'] },
      { valor: 'rentista', titulo: 'Rentista de capital', sinonimos: ['rentista de capital', 'rentista'] },
      { valor: 'militar', titulo: 'Militar', sinonimos: ['militar', 'fuerzas militares', 'policia'] },
    ],
    // No se identificaron condiciones por tipo de trabajo → todas continúan (P-07)
    siguiente: {
      empleado: ir('204', 'pendiente', 'P-07'), independiente: ir('204', 'pendiente', 'P-07'),
      rentista: ir('204', 'pendiente', 'P-07'), militar: ir('204', 'pendiente', 'P-07'),
    },
  },
  '204': { servicio: 2, tipo: 'contacto', origen: 'original', texto: () => TXT_CONTACTO },

  // ───────────── FLUJO 3: RENTA DE ACTIVOS PRODUCTIVOS ─────────────
  '301': {
    servicio: 3, tipo: 'mensaje', origen: 'original',
    texto: () =>
      'Recuerde que la renta de activos productivos es únicamente para empresas, es básicamente un contrato que le permite a su compañía ' +
      'el uso de ACTIVOS durante un plazo determinado, sin la obligación de comprarlos, facilitando el proceso de renovación total.',
    siguiente: ir('302'),
  },
  '302': {
    servicio: 3, tipo: 'pregunta', origen: 'original', clave: 'activo',
    texto: () =>
      '¿En qué activo se encuentra interesado?\n\n1. Maquinaria industrial.\n2. Equipos médicos.\n3. Maquinaria amarilla.\n' +
      '4. Aires acondicionados y refrigeración.\n5. Tecnología y Activos a la medida.\n6. Mobiliario y estantería.',
    opciones: [
      { valor: 'maquinaria_industrial', titulo: 'Maquinaria industrial', sinonimos: ['maquinaria industrial'] },
      { valor: 'equipos_medicos', titulo: 'Equipos médicos', sinonimos: ['equipos medicos', 'equipo medico'] },
      { valor: 'maquinaria_amarilla', titulo: 'Maquinaria amarilla', sinonimos: ['maquinaria amarilla', 'maquinaria pesada'] },
      { valor: 'aires_refrigeracion', titulo: 'Aires y refrigeración', descripcion: 'Aires acondicionados y refrigeración', sinonimos: ['aires acondicionados y refrigeracion', 'aires acondicionados', 'refrigeracion', 'aire acondicionado'] },
      { valor: 'tecnologia', titulo: 'Tecnología a la medida', descripcion: 'Tecnología y activos a la medida', sinonimos: ['tecnologia y activos a la medida', 'tecnologia'] },
      { valor: 'mobiliario', titulo: 'Mobiliario y estantería', sinonimos: ['mobiliario y estanteria', 'mobiliario', 'estanteria'] },
    ],
    siguiente: {
      maquinaria_industrial: ir('304'), equipos_medicos: ir('304'), maquinaria_amarilla: ir('304'),
      aires_refrigeracion: ir('304'), mobiliario: ir('304'), tecnologia: ir('303'),
    },
  },
  '303': {
    servicio: 3, tipo: 'pregunta', origen: 'original', clave: 'activo_tecnologia',
    texto: () => '¿En cuál de las siguientes opciones estás interesado?\n\n1. Computadores para empresa.\n2. Tablets.\n3. Celulares.\n4. Otros.',
    opciones: [
      { valor: 'computadores', titulo: 'Computadores empresa', sinonimos: ['computadores para empresa', 'computadores', 'computador', 'portatiles'] },
      { valor: 'tablets', titulo: 'Tablets', sinonimos: ['tablets', 'tablet'] },
      { valor: 'celulares', titulo: 'Celulares', sinonimos: ['celulares', 'celular', 'telefonos'] },
      { valor: 'otros', titulo: 'Otros', sinonimos: ['otros', 'otro'] },
    ],
    // El material indica ir directo al especialista (sin antigüedad/ventas) → confirmar P-08
    siguiente: {
      computadores: ir('306', 'original', 'P-08'), tablets: ir('306', 'original', 'P-08'),
      celulares: ir('306', 'original', 'P-08'), otros: ir('306', 'original', 'P-08'),
    },
  },
  '304': {
    servicio: 3, tipo: 'pregunta', origen: 'original', clave: 'antiguedad_3_anios',
    texto: () => `¿Su empresa tiene ${REGLAS.activos.antiguedadMinimaAnios} años o más de antigüedad?\n\n1. SI.\n2. NO.`,
    opciones: SI_NO,
    siguiente: { si: ir('305'), no: ir('S-ANT3', 'pendiente', 'P-09') },
  },
  '305': {
    servicio: 3, tipo: 'pregunta', origen: 'original', clave: 'ventas_5mm', texto: () => TXT_VENTAS, opciones: SI_NO,
    siguiente: { si: ir('306'), no: ir('S-VEN', 'pendiente', 'P-09') },
  },
  '306': { servicio: 3, tipo: 'contacto', origen: 'original', texto: () => TXT_CONTACTO },

  // ───────────── FLUJO 4: RENTA DE VEHÍCULOS A LARGO PLAZO ─────────────
  '401': {
    servicio: 4, tipo: 'mensaje', origen: 'original',
    // P-10: plazo "más de un año" vs "más de 2 años" que aparece en otros textos del sitio
    texto: (c) => `SEÑOR ${c.nombre.toUpperCase()} ÚNICAMENTE RENTAMOS A LARGO PLAZO MÁS DE UN AÑO.`,
    siguiente: ir('401B'),
  },
  '401B': {
    servicio: 4, tipo: 'mensaje', origen: 'original',
    texto: (c) =>
      `${sr(c)}, sabía usted que manejamos renta de vehículos a largo plazo MÁS DE 1 AÑO que permite a los usuarios disponer de un vehículo ` +
      'por un periodo determinado, a cambio de un canon de arrendamiento mensual. Nosotros nos encargamos de los gastos asociados al vehículo, ' +
      'como el mantenimiento, el seguro y los impuestos, lo que le hace que el renting sea una opción más conveniente y económica que la compra ' +
      'de un vehículo propio, gracias a sus beneficios tributarios.',
    siguiente: ir('402'),
  },
  '402': {
    servicio: 4, tipo: 'pregunta', origen: 'original', clave: 'tipo_persona', texto: txtTipoPersona, opciones: TIPO_PERSONA,
    // Persona jurídica: conexiones no visibles → pasa al especialista sin preguntas adicionales (P-11)
    siguiente: { natural: ir('403'), juridica: ir('405', 'pendiente', 'P-11') },
  },
  '403': {
    servicio: 4, tipo: 'pregunta', origen: 'original', clave: 'reportado_datacredito', texto: txtDataCredito('Está usted'), opciones: SI_NO,
    siguiente: { si: ir('S-REV', 'pendiente', 'P-05'), no: ir('404') },
  },
  '404': {
    servicio: 4, tipo: 'pregunta', origen: 'original', clave: 'ingresos_4_5m',
    texto: () => `¿Sus ingresos mensuales son mayores o iguales a ${REGLAS.rentingVehiculos.ingresoMinimoTexto}?\n\nSI\nNO`,
    opciones: SI_NO,
    siguiente: { si: ir('405'), no: ir('S-ING') },
  },
  '405': { servicio: 4, tipo: 'contacto', origen: 'original', texto: () => TXT_CONTACTO },

  // ───────────── FLUJO 5: CRÉDITO PARA TU EMPRESA ─────────────
  '501': {
    servicio: 5, tipo: 'mensaje', origen: 'original',
    texto: () =>
      'Ofrecemos soluciones financieras únicamente para empresas, ya sea que busques financiamiento para expansiones, inversiones o proyectos específicos.',
    siguiente: ir('502'),
  },
  '502': {
    servicio: 5, tipo: 'pregunta', origen: 'original', clave: 'antiguedad_5_anios',
    texto: () => `¿Su empresa tiene una antigüedad mayor o igual a ${REGLAS.creditoEmpresa.antiguedadMinimaAnios} años?\n\n1. SI.\n2. NO.`,
    opciones: SI_NO,
    siguiente: { si: ir('503'), no: ir('S-ANT5', 'pendiente', 'P-09') },
  },
  '503': {
    servicio: 5, tipo: 'pregunta', origen: 'original', clave: 'ventas_5mm', texto: () => TXT_VENTAS, opciones: SI_NO,
    siguiente: { si: ir('504'), no: ir('S-VEN', 'pendiente', 'P-09') },
  },
  '504': { servicio: 5, tipo: 'contacto', origen: 'original', texto: () => TXT_CONTACTO },

  // ───────────── SALIDAS ─────────────
  'S-002': {
    tipo: 'salida', origen: 'propuesto', codigo: 'sin_consentimiento', estadoLead: 'sin_consentimiento', retomable: true,
    texto: () =>
      'Entendemos. Sin la aceptación de la política de tratamiento de datos personales no podemos continuar con la asesoría por este medio. ' +
      'Si cambia de opinión, escríbanos de nuevo y con gusto lo atenderemos.',
  },
  'S-ING': {
    tipo: 'salida', origen: 'original', codigo: 'rechazo_ingresos', estadoLead: 'no_califica_ingresos', retomable: true,
    texto: (c) =>
      `${sr(c)}, lamentamos informarle que por políticas internas de la compañía, no podemos procesar su solicitud debido al nivel de ingresos ` +
      'mínimo permitido. Tan pronto usted regule esta situación, podremos retomar el proceso de arrendamiento de vehículo.',
  },
  'S-ANT3': {
    tipo: 'salida', origen: 'propuesto', codigo: 'no_cumple_antiguedad', estadoLead: 'no_califica_antiguedad', retomable: true,
    texto: (c) =>
      `${sr(c)}, por políticas internas de la compañía este servicio requiere que la empresa tenga ${REGLAS.activos.antiguedadMinimaAnios} años o más ` +
      'de antigüedad, por lo que no podemos continuar con su solicitud en este momento. Cuando su empresa cumpla este requisito, con gusto retomamos el proceso.',
  },
  'S-ANT5': {
    tipo: 'salida', origen: 'propuesto', codigo: 'no_cumple_antiguedad', estadoLead: 'no_califica_antiguedad', retomable: true,
    texto: (c) =>
      `${sr(c)}, por políticas internas de la compañía este servicio requiere que la empresa tenga una antigüedad mayor o igual a ` +
      `${REGLAS.creditoEmpresa.antiguedadMinimaAnios} años, por lo que no podemos continuar con su solicitud en este momento. ` +
      'Cuando su empresa cumpla este requisito, con gusto retomamos el proceso.',
  },
  'S-VEN': {
    tipo: 'salida', origen: 'propuesto', codigo: 'no_cumple_ventas', estadoLead: 'no_califica_ventas', retomable: true,
    texto: (c) =>
      `${sr(c)}, por políticas internas de la compañía este servicio requiere un promedio de ventas mayor o igual a los 5 mil millones anual, ` +
      'por lo que no podemos continuar con su solicitud en este momento. Si su situación cambia, con gusto retomamos el proceso.',
  },
  'S-REV': {
    tipo: 'salida', origen: 'propuesto', codigo: 'pendiente_revision', estadoLead: 'pendiente_revision', retomable: true,
    texto: (c) =>
      `${sr(c)}, gracias por su información. Su solicitud quedó registrada y será revisada por nuestro equipo comercial; ` +
      'si es posible continuar, nos comunicaremos con usted por este medio.',
  },
  'S-CITA': {
    tipo: 'salida', origen: 'propuesto', codigo: 'cita_solicitada', estadoLead: 'cita_solicitada', retomable: true,
    texto: (c) =>
      `Perfecto, ${sr(c)}. Registramos su solicitud *${c.codigoSolicitud}* para que un especialista se comunique con usted: _${c.disponibilidad}_.\n\n` +
      'Recuerde que esta es una precalificación; la aprobación definitiva la realiza el especialista. Si desea consultar otro servicio, escriba MENÚ.',
  },
};

// ───────────── Mensajes del sistema (propuestos) ─────────────
export const SISTEMA = {
  regreso: (c) => `Hola de nuevo, ${sr(c)}. 👋`,
  reanudar: (c) =>
    `Hola de nuevo, ${sr(c)}. Teníamos una solicitud en curso. ¿Desea continuar donde quedamos?\n\n1. Continuar.\n2. Empezar de nuevo.`,
  opcionesReanudar: [
    { valor: 'continuar', titulo: 'Continuar', sinonimos: ['continuar', 'seguir', 'si'] },
    { valor: 'reiniciar', titulo: 'Empezar de nuevo', sinonimos: ['empezar de nuevo', 'reiniciar', 'nuevo', 'no'] },
  ],
  invalido: {
    pregunta: 'No logré entender su respuesta. Por favor elija una de las opciones (puede escribir el número).',
    nombre: 'Por favor escríbanos su nombre (solo letras), por ejemplo: Ana María.',
    contacto: 'Por favor indíquenos el día y la hora en que prefiere la llamada, por ejemplo: martes 10 a. m.',
  },
  ofrecerAsesor: 'Si lo prefiere, escriba *ASESOR* y una persona de nuestro equipo lo atenderá.',
  asesor: (c) =>
    `Listo${c.nombre ? `, ${c.nombre}` : ''}. Un asesor de ${MARCA} continuará la conversación por este chat en breve. ` +
    'Si desea volver al menú automático, escriba MENÚ.',
  sinAnterior: 'No hay una respuesta anterior para corregir.',
  corrigiendo: 'Claro, corrijamos la respuesta anterior:',
  menuSinDatos: 'Primero necesitamos completar el paso actual:',
};

export const TIPOS_CON_RESPUESTA = ['pregunta', 'texto', 'contacto'];
