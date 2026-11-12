# SK Soluciones Legales · Flujo de Redes

Sistema de captura y semáforo para TikTok/Reels de SK Soluciones Legales.
Fuente única de verdad: Manual Operativo v3 (agosto 2026).

## Comandos

| Comando | Función |
|---------|---------|
| `/sk-add` | Pegar comentario/DM crudo. Devuelve semáforo + diagnóstico sugerido + acción siguiente, y escribe la fila en Sheets + CSV. |
| `/sk-status` | Resumen de la planilla (conteos por color, área, escenario, pendientes). |

## Almacenamiento

- Google Sheet: SK Soluciones - Planilla Redes (Sheet ID en `sk-redes/sheet.env`)
- Espejo local: `sk-redes/datos.csv`

## Áreas y palabras clave

| Área | Palabra clave |
|------|---------------|
| Fraude bancario | FRAUDE |
| Sucesiones | HERENCIA |
| Transferencia de bienes en vida | PATRIMONIAL |
| Tránsito | MATRICULA |
| Centrales de riesgo | CENTRAL |
| Divorcios | FAMILIA |

## Reglas críticas (del manual)

- No cotizar nada. Usar respuesta autorizada de sección 4.
- No pedir ni analizar documentos por redes (sección 3.1).
- Solo usar diagnósticos pre-redactados de los kits (sección 6).
- Cualquier caso con persona fallecida (fuera de sucesiones), violencia, abogado en curso, empresa (no persona natural), crisis → cola CONSULTA CARLOS.

## Semáforos por área

### FRAUDE
- **VERDE**: monto ≥ $10M Y hecho ≤ 1 año desde respuesta del banco (o desde el hecho si nunca reclamó). EXCEPCIÓN: cualquier monto si menciona PAE (solo fase administrativa).
- **AMARILLO**: monto ≥ $5M con falla en otro criterio, o monto entre $5M y $10M, o duda en fechas. EXCEPCIÓN PAE aplica igual.
- **ROJO**: < $5M sin mención de PAE, o hecho > 1 año. (En fraude el rojo NO es cierre seco: escenario D.)

### HERENCIA (sucesiones)
- **VERDE**: hay al menos un inmueble Y herederos identificados.
- **AMARILLO**: solo vehículos/dinero/muebles sin inmuebles; herederos menores o con discapacidad; heredero con paradero desconocido; > 5 años; sucesión anterior sin liquidar; proceso con otro abogado.
- **ROJO**: sin bienes a nombre del fallecido, o solo quiere info general.

### PATRIMONIAL (transferencia en vida)
- **VERDE**: bien a su nombre con escritura Y quiere organizarlo.
- **AMARILLO**: ya hizo algo y quiere deshacerlo; bien con hipoteca/embargo; copropiedad con terceros; conflicto familiar; sin escritura o en posesión sin titular.
- **ROJO**: sin bien a su nombre, o solo info general.

### MATRICULA (tránsito)
- **VERDE**: tiene documento de la venta Y vehículo sigue a su nombre.
- **AMARILLO**: sin documento pero sabe quién tiene el vehículo; vehículo embargado o con reporte de hurto; cobro coactivo; embargo de cuentas.
- **ROJO**: sin documento Y sin rastro del vehículo.

### CENTRAL (centrales de riesgo)
- **VERDE**: ya pagó y sigue reportado; no reconoce la deuda; reporte lleva más tiempo del que debería.
- **AMARILLO**: reconoce, no ha pagado, muy antigua; varios reportes de varias entidades; deuda de empresa o codeudor.
- **ROJO**: reconoce, no ha pagado, reciente.

### FAMILIA (divorcios)
- **VERDE**: hay acuerdo entre las partes, o no hay acuerdo pero hay bienes o hijos menores.
- **AMARILLO**: no sabe dónde está la otra persona; violencia intrafamiliar (SIEMPRE cola con prioridad); unión libre con declaración previa; uno vive en exterior; proceso en curso.
- **ROJO**: solo quiere info general.