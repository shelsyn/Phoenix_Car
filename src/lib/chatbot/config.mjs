/**
 * Configuración del chatbot (valores ajustables sin tocar la lógica).
 * Los que dependen del entorno se leen de variables de entorno (ver .env.example).
 */

export const SITE_URL = (process.env.SITE_URL || 'https://ventrentall.com').replace(/\/$/, '');

// PENDIENTE P-01: el mensaje original dice "www.politicatratamientodatos"; falta confirmar la URL oficial.
export const POLITICA_DATOS_URL = process.env.POLITICA_DATOS_URL || `${SITE_URL}/terminos`;

// Tiempos de sesión (mejora propuesta, ajustable)
export const MINUTOS_PARA_OFRECER_REANUDAR = Number(process.env.CHATBOT_MIN_REANUDAR || 60); // inactividad tras la cual se pregunta si continuar
export const HORAS_ABANDONO = Number(process.env.CHATBOT_HORAS_ABANDONO || 24); // tras esto la conversación se da por abandonada
export const HORAS_ATENCION_HUMANA = Number(process.env.CHATBOT_HORAS_HUMANO || 12); // el bot no interviene mientras atiende un asesor
export const MAX_INTENTOS_INVALIDOS = 3; // respuestas inválidas seguidas antes de ofrecer un asesor

// Valores de negocio tomados del diagrama original (NO cambiar sin confirmación comercial)
export const REGLAS = {
  activos: { antiguedadMinimaAnios: 3, ventasMinimasTexto: '5 mil millones anual' },
  creditoEmpresa: { antiguedadMinimaAnios: 5, ventasMinimasTexto: '5 mil millones anual' },
  rentingVehiculos: { ingresoMinimoTexto: '4.500.000' },
};

export const SERVICIOS = {
  1: 'Compra de vehículo nuevo',
  2: 'Gestión de crédito vehicular',
  3: 'Renta de activos productivos',
  4: 'Renta de vehículos a largo plazo',
  5: 'Crédito para empresas',
};
