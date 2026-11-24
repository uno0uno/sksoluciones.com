export type SkCtaPlacement = 'mid1' | 'mid2' | 'final' | 'rail'

export interface SkCtaContent {
  headline: string
  body: string
  microcopy: string
  button: string
}

const MICROCOPY = 'Primer contacto por escrito. Revisamos su caso y le decimos con honestidad si tiene camino.'

function copyForSlug(slug: string): Pick<SkCtaContent, 'headline' | 'body' | 'button'> {
  const s = slug.toLowerCase()
  if (s.includes('ley-2573') || s.includes('suplantacion')) {
    return {
      headline: '¿Le afecta la Ley 2573 de 2026?',
      body: 'Revisamos si su caso corresponde a suplantación para solicitar la suspensión inmediata de cobros y reportes.',
      button: 'Revisar mi caso',
    }
  }
  if (s.includes('fraude') || s.includes('vishing') || s.includes('phishing') || s.includes('pse') || s.includes('nequi') || s.includes('bancolombia')) {
    return {
      headline: '¿Fue víctima de fraude bancario?',
      body: 'Revisamos su caso por escrito frente a la entidad y evaluamos la viabilidad jurídica de su reclamación.',
      button: 'Solicitar asesoría',
    }
  }
  if (s.includes('sucesion') || s.includes('herencia')) {
    return {
      headline: '¿Tiene dudas sobre una sucesión?',
      body: 'Le brindamos una hoja de ruta clara antes de radicar ante notaría o juzgado de familia.',
      button: 'Pedir hoja de ruta',
    }
  }
  if (s.includes('datacredito') || s.includes('datacrédito') || s.includes('reporte') || s.includes('centrales')) {
    return {
      headline: '¿Reporte en Datacrédito sin aviso previo?',
      body: 'Revisamos si su reporte se puede retirar por falta de aviso de 20 días o caducidad según la Ley 1266.',
      button: 'Revisar mi reporte',
    }
  }
  if (s.includes('union-marital') || s.includes('marital')) {
    return {
      headline: '¿Dudas sobre su unión marital de hecho?',
      body: 'Evaluamos la existencia de sociedad patrimonial y qué bienes corresponden antes de que venza el término legal.',
      button: 'Consultar mi caso',
    }
  }
  return {
    headline: '¿Requiere orientación jurídica?',
    body: 'Cuéntenos su caso por escrito. En SK Soluciones lo revisamos y le decimos con honestidad si tiene camino.',
    button: 'Solicitar asesoría',
  }
}

export function getSkCta(slug: string, placement: SkCtaPlacement = 'final'): SkCtaContent {
  const base = copyForSlug(slug)
  return { ...base, microcopy: MICROCOPY }
}
