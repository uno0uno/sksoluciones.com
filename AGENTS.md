# SK Soluciones — AGENTS (SSoT Blog Jurídico)

> Fuente de verdad para blog sksoluciones.com. Ningún artículo en `content/blog/*.md` sale publicado sin cumplir estas reglas y sin revisión de Carlos Salamanca. Si una regla y una buena práctica SEO chocan, gana la regla. Verificación jurídica: 2026-10-14 contra texto oficial/sentencia.

## Grafos / SSoT

| Capa | Path | Rol |
|---|---|---|
| SSoT | `AGENTS.md` (este archivo) | 10 reglas + ficha jurídica verificada — instrucción fija del generador |
| Contenido | `content/blog/*.md` + `content/blog/*/meta.md` + `draft.md` | Fuente vía `utils/blog.ts:23` `import.meta.glob` + `MarkdownIt` |
| SEO meta | `meta.md` / frontmatter `title/description/slug/date/cover/coverAlt/tags/author` | Validado en `utils/blog.ts:49` (throw si falta) |
| Render | `pages/blog/[slug].vue:28` + `server/routes/sitemap.xml.ts:38` | Canonical, JSON-LD BlogPosting, sitemap |
| Build | `nuxt.config.ts:10` `routeRules /blog/** prerender:true` + `Dockerfile:16` `COPY content` | Prerender + crawlLinks |
| Brand | `CLAUDE.md:1` | Stack Nuxt 3 / Vue / TS / Tailwind — referencia técnica |

## Stack blog (heredado de CLAUDE.md)

Fuente `content/blog/*.md` sin DB (réplica el-diferencial). Validación `utils/blog.ts:49`. SEO técnico: canonical normalizado `pages/blog/index.vue:12` + `[slug].vue:28`, `robots.txt` `nuxt.config.ts:66`, `head` `robots index,follow` `nuxt.config.ts:52`, `[slug].vue:40` JSON-LD + `og:locale es_CO`, sitemap con `lastmod=date`.

### Frontmatter estándar

| campo | requerido | límites | ejemplo |
|---|---|---|---|
| `title` | sí | 50-60ch, incluye keyword | `Fraude bancario en Colombia: qué hacer si te vaciaron la cuenta` |
| `description` | sí | 120-160ch meta | `Guía primeras 24h, reclamación banco y SFC...` |
| `date` | sí | `YYYY-MM-DD` ISO | `2026-08-11` |
| `slug` | sí | kebab, coincide filename | `fraude-bancario-que-hacer` |
| `cover` | rec | `/images/blog/<slug>-cover-1200x630.webp` | `coverAlt` obligatorio si hay cover |
| `thumbnail` | rec | `/images/blog/<slug>-thumb-600x315.webp` | fallback cards |
| `coverAlt` | rec | 80-120ch descriptivo | `Abogado revisando extracto bancario por fraude` |
| `tags` | rec | csv 3-5 tags | `Fraude Bancario, Vishing, SFC` |
| `author` | rec | `Carlos Salamanca` | Persona fija |

---

## Parte 1 — 10 Reglas del generador (obligatorias para todo artículo)

### 1. Voz y tratamiento
- [ ] Siempre de **usted**, nunca de tú. Así habla la marca en todo el sitio.
- [ ] El autor es **Carlos Salamanca**. El texto habla en nombre de la firma, nunca de Carlos en tercera persona ("como advierte Carlos").
- [ ] Lenguaje claro, sin jerga innecesaria. Cada término técnico se explica la primera vez.

### 2. Historias y casos
- [ ] **Prohibido inventar personas.** Nada de nombres, edades, barrios ni oficios inventados como clientes reales.
- Opciones válidas:
  - **Caso ilustrativo**, marcado así antes de empezar: `"Caso ilustrativo: los datos son ficticios."` Sin nombre propio.
  - **Caso real anonimizado**, tomado del brief, solo con autorización escrita del cliente. Sin nombre, sin ciudad, sin banco.
- [ ] Nunca atribuir hechos de caso inventado a entidad con nombre ("un asesor de Bancolombia lo llamó").
- [ ] Si el caso está en cumplimiento, decir `"el juez ordenó devolver"`, nunca `"ya le devolvieron"`.

### 3. Cifras y afirmaciones sobre la firma
- [ ] Prohibido inventar estadísticas: `"4 de cada 10 consultas"`, `"la primera causa"`, `"más de la mitad"`. Toda afirmación sobre experiencia SK la confirma Carlos. Si no hay dato, se omite.

### 4. Afirmaciones jurídicas
- [ ] Toda norma se cita con **artículo exacto**, verificado en texto oficial. Nada de memoria ni blog de terceros.
- [ ] Toda regla de la **ficha jurídica** se escribe tal como está ahí. Si el artículo necesita algo no en ficha, Carlos lo aporta.
- [ ] Si hay duda, no se afirma. Nada tajante con matices: no escribir `"nunca"/"siempre"/"no puede"` si hay excepciones.
- [ ] No prometer resultados ni tiempos de bancos/jueces/notarías.

### 5. Ruta SK en fraude bancario
- Ruta: **bloqueo inmediato → denuncia → reclamación escrita al banco → si niegan o no responden, demanda ante Superintendencia Financiera**.
- La **queja** ante SFC no es escalón ni presión: no obliga al banco. Si se menciona, se aclara.
- No afirmar `"muchos casos se resuelven en queja o conciliación"`.

### 6. Qué se le dice al banco
- Línea SK: **contar los hechos, no calificarse**. Igual en todos los artículos.
- Bien: `"Recibí una llamada que suplantó al banco y a las 9:51 dicté el código que me llegó."`
- Mal: `"Entregué la clave voluntariamente"`, `"me descuidé"`, `"me confié"` — el banco lo usa en contra.
- No aconsejar ocultar ni cambiar hechos.

### 7. Honorarios y CTA
- [ ] No publicar valores, porcentajes ni rangos de honorarios. No aconsejar cómo negociar con abogados.
- [ ] Recuadros sin promesas de tiempo: nada de `"respuesta en 24h"`, `"en la primera hora"`, `"costo cerrado"`. No ofrecer llamadas/citas/"primera cita". Primer contacto es **por escrito** (formulario/WhatsApp).
- Texto base recuadro: `"Cuéntenos su caso por escrito. Lo revisamos y le decimos con honestidad si tiene camino."`

### 8. Datos de terceros
- Dominios/teléfonos/correos de bancos solo si están en comunicado/página oficial de esa entidad, atribuidos. Nunca generalizar dato de un banco a otros. Revisar cada 3 meses.

### 9. Coherencia entre artículos
- Una misma regla dice lo mismo en todos. Si un artículo nuevo la cambia, se corrigen anteriores. Enlaces internos llevan al artículo que desarrolla el tema, no repiten contenido.

### 10. Nada interno en texto publicado
- [ ] Prohibido mencionar **Carlos, Anderson, brief, lote, Ubersuggest, SEO, volumen de búsquedas**.
- [ ] Prohibidas frases al equipo (`"para el lector es útil"`, `"esta tabla ayuda"`).
- [ ] Títulos, descripciones y `coverAlt` sin comillas sobrantes.

---

## Ficha jurídica fija (verificada 2026-10-14 — no se cambia sin aval Carlos)

### Ley 2573 de 2026 (suplantación de identidad)

| Tema | Regla correcta | Fuente |
|---|---|---|
| Vigencia | Rige **19 nov 2026**. Excepción: **Art.5 par.1 y 2 desde 19 mayo 2026** | Art.13 |
| Qué es suplantación | Defs **Art.3 num.5 y 6**; tipos en **Art.4** | Arts.3,4 |
| Crédito/producto a nombre víctima | Entidad **suspende de inmediato** cobro con intereses/gastos al ser informada. Si justicia confirma suplantación, exoneración cobro y reporte | Arts.8,9 |
| Dinero sacado con fallas banco | Si se verifica incumplimiento protocolos y titular pidió corrección como víctima, **debe devolver dinero o eliminar deuda**. No puede congelar ni esperar autorización cuenta receptora. **Ya vigente** | Art.5 par.2 |
| Denuncia | **20 días hábiles** desde que entidad comunica término, ante Fiscalía por falsedad personal y conexos. Si no se aporta, puede reanudar cobro | Art.8 y par.1 |
| Respuesta entidad | **10 días hábiles** desde radicación | Art.5 num.4 |
| Obligaciones entidad | **10 numerales**. Num.8 = reportar a **DIAN**. No existe "reportar a SIC y Superfinanciera cumplimiento protocolos" | Art.5 |
| Centrales riesgo | Fuente coteja en **10 días hábiles**. Leyenda `"Víctima de Falsedad Personal"` no es negativo ni baja puntaje. Peticiones **15 días +8 prórroga**; sin respuesta opera **silencio positivo** | Art.7 |
| Verificación entidad | Si encuentra elementos suplantación, libera de denunciar. **No puede decidir que no hubo suplantación**: lo decide juez | Art.10 |
| Texto oficial | Ley 2573 en Régimen Legal de Bogotá | — |

### Centrales de riesgo (Ley 1266/2008 mod. Ley 2157/2021)

| Tema | Regla |
|---|---|
| Deuda pagada | Reporte negativo **doble de la mora, máx 4 años desde el pago** |
| Deuda nunca pagada | Caduca a **8 años desde la mora**. Sin requisitos extra |
| Aviso previo | Fuente debe avisar **20 días calendario** antes de reportar |
| Reporte sin aviso | Pagada: retiro inmediato. No pagada: se retira pero pueden volver a reportar tras avisar bien. No "nulo" ni "salir sin pagar" |
| Borrón y cuenta nueva | Régimen transición **ya vencido**. No presentarlo como vigente |

### Sucesiones

| Tema | Regla | Fuente |
|---|---|---|
| Notaría | Herederos plenamente capaces + acuerdo todos + **abogado**. Sin abogado solo **mínima cuantía** (~15 SMLMV, notarías) | D.902/1988 art1 mod D.1729/1989 |
| Vía judicial | Sin abogado solo **mínima hasta 40 SMLMV**. Mayor: juez familia; menor/mínima: civil municipal | CGP 17,22,25 |
| Apertura | Cualquier heredero puede pedirla aunque otros no firmen | CGP 488 |
| Heredero que vive en casa | Puede intentar prescripción pero **muy difícil**: probar posesión como dueño único, pública, desconociendo otros. Esperar regala años. No "no puede" ni "mera tenencia" | Corte Suprema |
| Testamento viola legítima | **Acción reforma testamento**. No simulación/lesión | CC 1274 |
| Petición herencia | **10 años**. Contra quien ocupa como heredero; no plazo para abrir sucesión | CC 1326 |
| Ganancia ocasional herencia (ET 307 mod L.2277 art30) | Vivienda habitación causante **13.000 UVT**; otros inmuebles **6.500 UVT**; cónyuge/heredero/legatario **3.250 UVT**; no legitimarios/donaciones **20% máx 1.625 UVT**. Tarifa **15%**. Confirmar UVT año DIAN antes de pesos | ET 307 |

### Unión marital de hecho (Ley 54/1990)

| Tema | Regla | Fuente |
|---|---|---|
| Sociedad patrimonial | Se presume con **2 años** unión. Aplica parejas mismo sexo | Art2; C-075/2007 |
| Con impedimento | Basta **disuelta** sociedad conyugal anterior. No liquidarla ni año previo | C-700/2013, C-193/2016 |
| Bienes | No entran propios/heredados/donados. Sí frutos y mayor valor durante unión | Art3 |
| Plazo | **1 año** desde separación definitiva/matrimonio tercero/muerte para pedir disolución/liquidación | Art8 |

### Datos bancos verificados

| Entidad | Dato | Fuente |
|---|---|---|
| Bancolombia | Enlaces oficiales `bancol.co`. Reporte sospechosos: **WhatsApp 300 887 6817** y **correosospechoso@bancolombia.com.co** | Comunicados Noticias Caracol/RCN |
| Davivienda/Nequi/Daviplata | **Sin dato verificado** — no publicar hasta confirmar en página oficial | — |

---

## Checklist final pre-publish (gate obligatorio)

Ningún artículo pasa a `published` sin:

- [ ] `grep -i "Carlos|Anderson|brief|lote|Ubersuggest|SEO"` = 0 en body + title + description + coverAlt
- [ ] 0 personas con nombre inventado; casos marcados `"Caso ilustrativo: los datos son ficticios"` o real anonimizado con autorización
- [ ] 0 cifras sobre firma sin OK Carlos
- [ ] Cada norma con artículo exacto == ficha jurídica + link oficial
- [ ] Nada contradice otro artículo (vigencia, plazos, ruta SK idéntica)
- [ ] Sin promesas resultado/tiempo ni honorarios
- [ ] Todo de **usted**
- [ ] `title/description/coverAlt` sin comillas, description == contenido artículo
- [ ] `Carlos lo leyó y dio visto bueno` (bloqueante)

## Compatibilidad con comandos waro-seo (no romper)

Este AGENTS.md es **override local** — no toca `plugins/waro-seo`.

```bash
# draft genera content/blog/<slug>.md — lee este AGENTS.md como system prompt
pnpm waro:seo:draft   # alias local
# --fast por defecto (local metadata + AGENTS.md). --deep solo con OK Carlos para claims legales fechados
pnpm waro:seo:review  # valida longitudes + checklist de arriba
pnpm build && ls .output/public/blog  # verifica prerender utils/blog.ts:23 + nuxt.config.ts:10
```

- `/waro-seo-draft <folder> --fast` → lee `meta.md` + este AGENTS.md. No inventa nombres/cifras/leaks.
- `/waro-seo-review <folder> --check` → además del score SEO, repasa el checklist final.
- Ritmo: **capacidad de revisión de Carlos manda**. Máx **5/semana** revisados > 10 sin revisar. Un error de derecho cuesta más que 10 artículos posicionados.

## Lote 7 — referencia rápida Parte 2
Fixes ya detallados en docx. Orden urgente: 1 borrar leaks `Ubersuggest/brief/Aquí entra tu advertencia`, 2 fix vigencia Art5 p2 (mayo), 3 tuteo→usted, 4 nombres→caso ilustrativo, 5 recuadro→texto base regla7, 6 descripción/coverAlt coherente. Ver docx Parte2 para tabla Dice/Debe decir por slug.
