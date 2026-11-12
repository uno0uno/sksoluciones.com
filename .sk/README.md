# /sk — Sistema de conversación con clientes

Mini-CRM en CSV para registrar mensajes del cliente (texto pegado), semáforo y respuesta sugerida.

## Estructura

- `.sk/log.csv` — bitácora de mensajes.
- `.sk/drafts/` — borradores generados para TikTok / Instagram.
- `.sk/summary.md` — resumen ejecutivo (regenerable con `/sk-resumen`).

## Encabezado del CSV

```
id,fecha,canal,cliente,autor,mensaje,tema,prioridad,respuesta_propuesta,estado,notas
```

- **id**: `YYYYMMDD-HHMMSS-nn` auto.
- **canal**: `tiktok` | `instagram` | `dm` | `comentario` | `email` | `otro`.
- **prioridad** (semáforo): `verde` 🟢 | `amarillo` 🟡 | `rojo` 🔴.
- **estado**: `nuevo` | `analizado` | `borrador` | `publicado` | `descartado`.

## Semáforos

- 🟢 **Verde**: info que alinea, no requiere acción.
- 🟡 **Amarillo**: requiere respuesta / decisión.
- 🔴 **Rojo**: urgente, bloqueante, sensible (crisis, queja pública, plata).

## Comandos

- `/sk-add "canal" "texto del cliente"` — registra fila cruda (estado `nuevo`).
- `/sk-analizar` — revisa filas `nuevo`, clasifica semáforo y propone respuesta (`analizado`).
- `/sk-redactar <tema> <plataforma>` — copia para TikTok / Instagram / Reel.
- `/sk-resumen` — vista ejecutiva con distribución de colores y pendientes.
