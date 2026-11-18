# Bot de WhatsApp — guía de activación (100 % gratis)

El código del bot ya está en el proyecto y probado (`npm run test:chatbot`). Para que funcione con tu número hay que conectar 3 servicios gratuitos. Hazlo en este orden.

| Servicio | Para qué | Costo |
|---|---|---|
| Upstash Redis (desde Vercel) | Guardar leads y conversaciones | Gratis (≈ 500.000 operaciones/mes; alcanza para unos 30.000 mensajes) |
| Google Sheets + Apps Script | Ver los leads y recibir avisos | Gratis |
| WhatsApp Cloud API (Meta) | Recibir y responder mensajes | Gratis para responder a clientes que escriben primero (ventana de 24 h) |

**Especificación completa** (flujo, diagramas, reglas y preguntas pendientes): `docs/chatbot/especificacion.md`.

---

## Paso 1. Base de datos gratis: Upstash Redis (5 min)

1. Entra a Vercel → tu proyecto → pestaña **Storage** → **Create Database** → elige **Upstash for Redis** (Marketplace) → plan **Free**.
2. Conéctala al proyecto. Vercel crea solas las variables `KV_REST_API_URL` y `KV_REST_API_TOKEN`.
3. Listo: el bot detecta esas variables y empieza a guardar todo ahí. No hay que instalar nada ni crear tablas.

> Sin este paso, el bot "olvida" la conversación entre un mensaje y otro en Vercel.

**Especialistas (opcional):** para repartir las solicitudes entre tu equipo, agrega en Vercel la variable

```
ESPECIALISTAS_JSON=[{"id":"ana","nombre":"Ana Pérez","telefono":"573001112233","email":"ana@ventrentall.com","servicios":[1,2,4]},{"id":"luis","nombre":"Luis Gómez","telefono":"573004445566","servicios":[3,5]}]
```

`servicios`: 1 Compra · 2 Crédito vehicular · 3 Activos · 4 Renting · 5 Crédito empresa (si lo dejas vacío, atiende todos).

## Paso 2. Avisos y lista de leads gratis: Google Sheets (5 min)

1. Crea una hoja de cálculo nueva en Google Sheets.
2. **Extensiones → Apps Script**, pega el contenido de `docs/chatbot/google-sheets-apps-script.gs`, cambia `SECRETO` (y opcionalmente `EMAIL_EQUIPO`) y guarda.
3. **Implementar → Nueva implementación → Aplicación web**: "Ejecutar como: Yo", "Acceso: Cualquier usuario". Autoriza y copia la URL `/exec`.
4. En Vercel crea `NOTIFICACIONES_WEBHOOK_URL` con el valor `https://script.google.com/.../exec?secreto=TU-SECRETO`.

Cada solicitud de contacto, pedido de asesor o caso pendiente aparece como una fila nueva, con código, servicio, nombre, teléfono, día y hora, especialista y respuestas. Si pusiste `EMAIL_EQUIPO`, también llega un correo.

## Paso 3. WhatsApp Cloud API de Meta (30–60 min)

### 3.1 El número

| Opción | Ventaja | A tener en cuenta |
|---|---|---|
| **A. Tu número actual en modo "coexistencia"** | Los clientes siguen escribiendo al mismo número y los asesores contestan desde la app **WhatsApp Business** del celular. | El número debe estar en *WhatsApp Business* (no en WhatsApp normal). Verifica en el registro de Meta que la opción esté disponible para tu cuenta. |
| **B. Un número nuevo solo para el bot** | Simple y sin riesgo. | Necesitas una línea (puede ser fija o una SIM prepago) que reciba SMS o llamada para el código de verificación. Hay que poner el número nuevo en la web. |

Si conectas un número a la API **sin** coexistencia, ese número deja de funcionar en la app de WhatsApp del celular.

### 3.2 La app en Meta

1. <https://business.facebook.com>: crea (o usa) la **cuenta comercial** de la empresa.
2. <https://developers.facebook.com> → **Mis apps → Crear app** → tipo **Empresa** → vincúlala a la cuenta comercial → agrega el producto **WhatsApp** → registra el número.
3. Anota estos valores:
   - *WhatsApp → Configuración de la API* → **Identificador del número de teléfono** → `WHATSAPP_PHONE_NUMBER_ID`
   - *Configuración de la app → Básica* → **Clave secreta de la app** → `WHATSAPP_APP_SECRET`
4. Token permanente: Configuración del negocio → **Usuarios del sistema** → crear (Administrador) → asignarle la app y la cuenta de WhatsApp → **Generar token** con permisos `whatsapp_business_messaging` y `whatsapp_business_management` → `WHATSAPP_TOKEN`. (El token temporal de la página de inicio vence en 24 h.)

### 3.3 Variables en Vercel

```
WHATSAPP_TOKEN=...
WHATSAPP_PHONE_NUMBER_ID=...
WHATSAPP_APP_SECRET=...
WHATSAPP_VERIFY_TOKEN=una-frase-secreta-que-tu-inventes
SITE_URL=https://ventrentall.com
POLITICA_DATOS_URL=https://ventrentall.com/terminos
```

Vuelve a publicar el sitio (Deployments → Redeploy).

### 3.4 Conectar el webhook

1. En la app de Meta: **WhatsApp → Configuración → Webhook → Editar**.
2. URL de devolución de llamada: `https://TU-DOMINIO/api/whatsapp`. Token de verificación: el mismo de `WHATSAPP_VERIFY_TOKEN`.
3. **Verificar y guardar**, y en *Campos del webhook* suscríbete a **messages**.

## Paso 4. Probar

Escribe "Hola" al número desde otro celular: debe llegar la bienvenida con la política de datos. Si no llega, revisa en Vercel *Deployments → Functions → Logs* las líneas `[chatbot]`.

### Probar en tu PC sin Meta (recomendado antes de todo)

1. `npm run dev`
2. Abre **http://localhost:3000/probar-bot**: es un chat con aspecto de WhatsApp que usa el mismo motor y los mismos textos que el bot real.
   - Escribe "Hola" y responde como un cliente, escribiendo o tocando los botones y listas.
   - **Nuevo cliente** empieza de cero. **+90 min** y **+25 h** simulan que el cliente dejó de responder.
   - El panel muestra en qué nodo del flujo va la conversación (coinciden con `docs/chatbot/especificacion.md`).
3. Pruebas automáticas de todas las rutas: `npm run test:chatbot`.

El simulador **no existe en el sitio publicado** (devuelve 404), salvo que se active a propósito con la variable `CHATBOT_PRUEBA=1`.

### Probar en WhatsApp real sin tocar tu número

En la app de Meta (paso 3.2), en *WhatsApp → Configuración de la API*, Meta da gratis un **número de prueba**. Agrega hasta 5 celulares tuyos como destinatarios, usa ese "Identificador de número de teléfono" y el token en Vercel, y escribe desde tu celular a ese número de prueba. Cuando todo funcione, cambia al número definitivo.

## ¿Qué sí cuesta? (para no llevarse sorpresas)

- **Mensajes que inicia la empresa** (plantillas de marketing, recordatorios después de 24 h): Meta los cobra. El bot no los usa.
- **Vercel:** el plan gratuito *Hobby* es, según sus condiciones, para uso **personal y no comercial**. Un sitio de empresa debería estar en el plan *Pro* (de pago) o en un hosting cuyo plan gratuito permita uso comercial (por ejemplo, Netlify o Cloudflare). El bot funciona igual en cualquiera de ellos.
- **Límites gratuitos:** si un mes superaras unos 30.000 mensajes, Upstash pide pasar a pago por uso (centavos de dólar).
