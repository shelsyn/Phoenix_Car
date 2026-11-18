-- Esquema de base de datos del chatbot de VenteRental (PostgreSQL 14+ / Neon)
-- Ejecutar una vez en la consola SQL de Neon (Vercel → Storage → tu base → Open in Neon → SQL Editor).

CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Lead: una persona identificada por su número de WhatsApp
CREATE TABLE IF NOT EXISTS leads (
  id                    uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  telefono              text NOT NULL UNIQUE,            -- formato internacional sin "+", ej. 573001112233
  perfil_nombre         text,                            -- nombre del perfil de WhatsApp
  nombre                text,                            -- nombre que escribió en el nodo 003
  consentimiento_datos  boolean,                         -- respuesta al nodo 002 (null = no ha respondido)
  consentimiento_fecha  timestamptz,
  estado                text NOT NULL DEFAULT 'nuevo',   -- ver sección "Estados de los leads"
  creado_en             timestamptz NOT NULL DEFAULT now(),
  actualizado_en        timestamptz NOT NULL DEFAULT now()
);

-- Conversación: una sesión del lead con el bot (un lead puede tener varias en el tiempo)
CREATE TABLE IF NOT EXISTS conversaciones (
  id                uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id           uuid NOT NULL REFERENCES leads(id) ON DELETE CASCADE,
  estado            text NOT NULL DEFAULT 'activa',      -- activa | atencion_humana | finalizada | abandonada
  nodo_actual       text,                                -- nodo del flujo (ej. '304')
  servicio          int,                                 -- 1..5
  datos             jsonb NOT NULL DEFAULT '{}'::jsonb,  -- respuestas, pila de navegación, contexto
  resultado         text,                                -- código de salida (cita_solicitada, rechazo_ingresos, ...)
  iniciada_en       timestamptz NOT NULL DEFAULT now(),
  ultima_actividad  timestamptz NOT NULL DEFAULT now(),
  finalizada_en     timestamptz
);
CREATE INDEX IF NOT EXISTS conversaciones_lead_abierta ON conversaciones (lead_id, estado, iniciada_en DESC);

-- Respuesta: cada respuesta válida a una pregunta del flujo (historial completo, incluso si luego se corrige)
CREATE TABLE IF NOT EXISTS respuestas (
  id               bigserial PRIMARY KEY,
  lead_id          uuid NOT NULL REFERENCES leads(id) ON DELETE CASCADE,
  conversacion_id  uuid NOT NULL REFERENCES conversaciones(id) ON DELETE CASCADE,
  nodo             text NOT NULL,
  clave            text NOT NULL,       -- ej. tipo_persona, reportado_datacredito
  valor            text NOT NULL,       -- valor normalizado (ej. 'natural', 'si')
  texto_original   text,                -- lo que escribió el usuario
  creado_en        timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS respuestas_conversacion ON respuestas (conversacion_id);

-- Mensaje: historial de mensajes entrantes y salientes
CREATE TABLE IF NOT EXISTS mensajes (
  id               bigserial PRIMARY KEY,
  wa_id            text UNIQUE,         -- id de WhatsApp (evita procesar duplicados)
  lead_id          uuid REFERENCES leads(id) ON DELETE CASCADE,
  conversacion_id  uuid REFERENCES conversaciones(id) ON DELETE SET NULL,
  direccion        text NOT NULL,       -- entrante | saliente
  tipo             text,
  contenido        jsonb NOT NULL DEFAULT '{}'::jsonb,
  estado_entrega   text,                -- sent | delivered | read | failed (salientes)
  creado_en        timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS mensajes_lead ON mensajes (lead_id, creado_en);

-- Especialista comercial
CREATE TABLE IF NOT EXISTS especialistas (
  id                  text PRIMARY KEY,               -- ej. 'ana'
  nombre              text NOT NULL,
  telefono            text,
  email               text,
  servicios           int[] NOT NULL DEFAULT '{}',    -- vacío = atiende todos
  activo              boolean NOT NULL DEFAULT true,
  ultimo_asignado_en  timestamptz
);

-- Solicitud de contacto (resultado de una precalificación exitosa)
CREATE TABLE IF NOT EXISTS solicitudes_contacto (
  id                    uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  codigo                text NOT NULL UNIQUE,          -- ej. VR-K3F9QZ7M (aleatorio; se le muestra al cliente)
  lead_id               uuid NOT NULL REFERENCES leads(id) ON DELETE CASCADE,
  conversacion_id       uuid REFERENCES conversaciones(id) ON DELETE SET NULL,
  servicio              int NOT NULL,
  servicio_nombre       text,
  disponibilidad_texto  text NOT NULL,                 -- "martes 10 am", tal como lo escribió
  respuestas            jsonb NOT NULL DEFAULT '{}'::jsonb,
  especialista_id       text REFERENCES especialistas(id),
  estado                text NOT NULL,                 -- pendiente_asignacion | asignada | contactado | cerrada
  creado_en             timestamptz NOT NULL DEFAULT now()
);

-- Auditoría: eventos del sistema (reglas pendientes aplicadas, errores, transferencias, abandonos...)
CREATE TABLE IF NOT EXISTS eventos_auditoria (
  id               bigserial PRIMARY KEY,
  lead_id          uuid REFERENCES leads(id) ON DELETE CASCADE,
  conversacion_id  uuid REFERENCES conversaciones(id) ON DELETE SET NULL,
  tipo             text NOT NULL,
  detalle          jsonb NOT NULL DEFAULT '{}'::jsonb,
  creado_en        timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS eventos_tipo ON eventos_auditoria (tipo, creado_en);

-- Ejemplo de especialistas (ajustar):
-- INSERT INTO especialistas (id, nombre, telefono, email, servicios) VALUES
--   ('ana', 'Ana Pérez', '573001112233', 'ana@ventrentall.com', '{1,2,4}'),
--   ('luis', 'Luis Gómez', '573004445566', 'luis@ventrentall.com', '{3,5}');
