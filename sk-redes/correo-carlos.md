**Para:** Carlos Salamanca <carlos@sksoluciones.com>
**Asunto:** Sistema de planilla de redes listo para empezar — SK Soluciones Legales
**De:** [tu nombre]
**Fecha:** 15 de agosto de 2026

---

Hola Carlos,

Te escribo para confirmar que el sistema de planilla de redes quedó aprovisionado y listo para arrancar el lunes 17 de agosto según el Manual Operativo v3.

## Qué se construyó

1. **Google Sheet compartido** — `SK Soluciones - Planilla Redes`
   - Contiene las 12 columnas que define el manual (FECHA, USUARIO, RED, VIDEO, ÁREA, DATO1-3, COLOR, ESCENARIO, ESTADO, NOTAS).
   - Lo vas a encontrar en tu Drive, ya compartido con tu correo corporativo.
   - Permisos: el sheet queda compartido con un service account técnico para que el agente que atiende las redes pueda escribir automáticamente sin pedirte credenciales tuyas. Nadie más tiene acceso.

2. **Comandos internos `/sk-add` y `/sk-status`** — para que el operador de redes pueda:
   - Pegar un comentario o DM del cliente y obtener: semáforo (verde/amarillo/rojo), escenario (A-F según área), diagnóstico pre-redactado listo para copiar y pegar, y la fila escrita automáticamente en el Sheet.
   - Consultar el estado de la planilla en cualquier momento: cuántos verdes llegaron al WhatsApp, qué casos están en cola pendientes de tu decisión, qué casos llevan más de 24h sin respuesta.

3. **Espejo local CSV** — copia de seguridad automática del Sheet, solo accesible desde el equipo de trabajo. Se actualiza con cada fila que se escribe.

## Cómo lo usas tú día a día

- **Revisión de la cola CONSULTA CARLOS** (mañana y tarde): abres la pestaña `CONSULTA CARLOS` del Sheet. Cada fila tiene usuario, video de origen, y las respuestas a las 5 preguntas tal cual las dio la persona. Escribes en la columna DECISIÓN: VERDE, ROJO, o una instrucción corta. El operador ejecuta y le responde a la persona.

- **Revisión semanal (viernes, 20 min)**: con `/sk-status` ves el resumen de la semana — contactos totales, conversión por color, escenarios más usados, casos urgentes en cola. Si algo no encaja en los kits existentes, queda anotado para que escribas el diagnóstico que falta.

- **Si falta un kit de un área nueva** (HERENCIA, PATRIMONIAL, MATRÍCULA, CENTRAL, FAMILIA): me lo pasas cuando llegue con el primer libreto y lo cargamos en el sistema. Por ahora solo FRAUDE tiene kit completo en el manual.

## Lo que NO cambia

- Tú sigues siendo el único que decide si un caso tiene salida jurídica.
- Los diagnósticos los escribes tú. El operador solo los identifica y los pega tal cual.
- Tú publicas los videos. El operador solo edita y devuelve en la subcarpeta LISTO.
- Las cifras de honorarios no salen por ningún canal de redes. Respuesta autorizada del manual sección 4.

## Pendientes que necesito de tu parte

1. **Confirmar que tienes acceso al Sheet** (te llegó invitación por correo).
2. **Decidir cómo quieres recibir los resúmenes semanales** (correo automático los viernes, o solo cuando entres a `/sk-status`).
3. **Coordinar la entrega del primer kit de área nueva** cuando Carlos publique el segundo libreto (sucesiones, patrimoniales, tránsito, etc.).

Quedo atento. Cualquier ajuste al sistema lo hacemos en caliente sobre el Manual Operativo v3.

Saludos,

[Tu nombre]

---

## Mini-tutorial: cómo vincular tu agente (Claude / Codex) con el Sheet

Si más adelante tú o cualquier persona del equipo quiere conectar su propio agente de IA (Claude Code, Codex, GPT con function calling, etc.) al Sheet para leerlo o proponer respuestas, los pasos son:

### 1. Crear tu propio Service Account (recomendado para aislar accesos)

1. Ve a https://console.cloud.google.com → proyecto `waro-colombia-auth` (o crea uno nuevo llamado `sk-soluciones-agente`).
2. Menú lateral → **APIs y servicios** → **Biblioteca** → habilita **Google Sheets API**.
3. **APIs y servicios** → **Cuentas de servicio** → **Crear cuenta de servicio**:
   - Nombre: `sk-agente-carlos` (o el nombre que prefieras)
   - Descripción: "Acceso de Carlos al Sheet de SK Soluciones"
4. En la cuenta creada → pestaña **Claves** → **Agregar clave** → **Crear nueva clave** → **JSON**. Se descarga un archivo.
5. Guarda ese JSON **fuera de cualquier repo** (ej. `~/.config/sk-soluciones/gcp.json` con permisos `chmod 600`).

### 2. Compartir el Sheet con ese service account

1. Abre el Sheet `SK Soluciones - Planilla Redes`.
2. **Compartir** → pega el email del service account (formato `sk-agente-carlos@xxx.iam.gserviceaccount.com`).
3. Permiso: **Editor** (si quieres que también escriba) o **Lector** (si solo quieres que lea y proponga).

### 3. Conectar desde tu agente

**Opción A — Claude Code / Codex con CLI:**
```bash
export GOOGLE_APPLICATION_CREDENTIALS="$HOME/.config/sk-soluciones/gcp.json"
export SK_SHEET_ID="1I3JrMCthvkaFtgmE3qLSHVriYft7vmXHmp1BuhD91-Y"
```
Después en el chat del agente:
```
Lee el Sheet $SK_SHEET_ID con googleapis. Muéstrame los 10 últimos casos en cola CONSULTA CARLOS.
```

**Opción B — Python directo (si prefieres no usar el CLI):**
```python
from google.oauth2 import service_account
from googleapiclient.discovery import build

creds = service_account.Credentials.from_service_account_file(
    "/ruta/a/gcp.json",
    scopes=["https://www.googleapis.com/auth/spreadsheets"]
)
svc = build("sheets", "v4", credentials=creds)
rows = svc.spreadsheets().values().get(
    spreadsheetId="1I3JrMCthvkaFtgmE3qLSHVriYft7vmXHmp1BuhD91-Y",
    range="A2:L"
).execute()
print(rows.get("values", []))
```

**Opción C — Apps Script dentro del Sheet (sin service account):**
1. En el Sheet → **Extensiones** → **Apps Script**.
2. Pega código que use `SpreadsheetApp.getActiveSpreadsheet().getDataRange().getValues()`.
3. Crea un trigger que se ejecute cuando quieras (al abrir, al editar, cada hora).

### 4. Buenas prácticas

- **Una sola cuenta de servicio por persona/agente.** No compartir credenciales entre humanos.
- **Permiso mínimo.** Si solo necesitas leer, da permiso de Lector.
- **Rotar claves** cada 90 días (volver a generar el JSON).
- **Revisar el Sheet periódicamente** — los agentes no deben ser la única fuente de verdad.
- **Confidencialidad.** Todo lo que entre al Sheet es información de personas reales. No pegar el Sheet en chats públicos, no pasarle la URL a terceros.

### 5. Si algo falla

| Error | Causa probable | Solución |
|-------|----------------|----------|
| `403 The caller does not have permission` | El service account no está compartido con el Sheet | Compartir el Sheet con el email del service account |
| `404 Spreadsheet not found` | Sheet ID mal escrito o en otro proyecto | Verificar la URL completa del Sheet |
| `400 Unable to parse range` | Rango mal escrito | Usar formato `A2:L` o `A1:L100` |
| `401 Invalid Credentials` | JSON mal descargado o expirado | Regenerar clave JSON |

Cualquier duda técnica me escribes y lo resolvemos en el momento.

—