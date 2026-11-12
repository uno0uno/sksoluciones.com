---
name: sk
description: Mini-CRM en CSV para registrar mensajes de clientes (TikTok / Instagram / DM), clasificar por semáforo (🟢🟡🔴) y proponer respuestas + borradores de copy.
---

# /sk — Cliente Conversation Loop

Diseñado para sksoluciones.com y proyectos similares. Una fila por mensaje del cliente en `.sk/log.csv`. Comandos mínimos, sin sobre-analizar.

## Cuándo usar este skill

- El usuario pega un mensaje del cliente y quiere registrarlo → `/sk-add`.
- Quiere que clasifiques prioridad (semáforo) y propongas respuesta → `/sk-analizar`.
- Quiere un borrador de copy para TikTok / Instagram / Reel → `/sk-redactar`.
- Quiere ver el estado del cliente → `/sk-resumen`.

## Comandos

### `/sk-add "canal" "mensaje"`

Registra una fila cruda con estado `nuevo`.

- `canal` ∈ {`tiktok`, `instagram`, `dm`, `comentario`, `email`, `otro`}.
- `mensaje` es el texto literal pegado por el usuario.
- `id` se genera como `YYYYMMDD-HHMMSS-nn`.
- `cliente` se detecta del contexto (por defecto `carlos-sksoluciones`).
- `autor` por defecto `cliente`.

Añade la fila al final de `.sk/log.csv`. Una sola línea, sin saltos de línea dentro del mensaje (sustituir `\n` por ` | ` y comillas internas por `''`).

Salida: confirma ID, canal, primeros 80 chars del mensaje.

### `/sk-analizar`

Revisa filas con `estado=nuevo`:

1. Lee `.sk/log.csv`.
2. Para cada fila nueva, determina `tema`, `prioridad` y `respuesta_propuesta`.
3. Actualiza en sitio (preservando columnas anteriores) y marca `estado=analizado`.
4. Clasificación de prioridad:
   - 🔴 **rojo**: crisis, queja pública, plata, plazo hoy.
   - 🟡 **amarillo**: pregunta concreta, decisión, alineación, idea a conversar.
   - 🟢 **verde**: info, contexto, observación sin pregunta.
5. `tema`: etiqueta corta (3-4 palabras) p. ej. `idea_reel`, `precio_servicio`, `tono_marca`.

Salida: tabla Markdown con `id | prioridad | tema | respuesta_propuesta (1 línea)`.

### `/sk-redactar <tema> <plataforma>`

Genera borrador de copy y lo guarda en `.sk/drafts/<id>-<plataforma>.md`.

- `plataforma` ∈ {`tiktok`, `instagram-caption`, `instagram-reel`, `instagram-story`, `instagram-carousel`}.
- Usa como base la(s) fila(s) con ese `tema` y la `respuesta_propuesta` ya analizada.
- Si no hay fila analizada, pregunta primero o usa el último mensaje pegado en el contexto.

Estructura del archivo de borrador:

```
# <Tema> — <Plataforma>

**Semáforo**: 🟢/🟡/🔴
**Gancho (1ra línea)**: …
**Copy**: …
**CTA**: …
**Hashtags**: … (3-7)
**Notas de formato**: duración, cortes, B-roll sugerido…
```

### `/sk-resumen`

Genera `.sk/summary.md` con:

- Total de filas.
- Distribución de semáforos (`🟢 n | 🟡 n | 🔴 n`).
- Top 3 temas por frecuencia.
- Pendientes (`estado ∈ {nuevo, analizado}` con 🟡/🔴).
- Próxima acción sugerida.

## Estilo de respuesta

- Frases cortas, en español.
- Sin emojis decorativos fuera de los semáforos oficiales.
- No inventar datos del cliente. Si falta contexto, preguntar.

## Archivos que este skill toca

- `.sk/log.csv` (CRUD de filas).
- `.sk/drafts/*.md` (creación).
- `.sk/summary.md` (sobreescritura).

Nunca modifica otros archivos del repo.
