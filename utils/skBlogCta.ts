export type SkCtaPlacement = 'mid1' | 'mid2' | 'final'

export interface SkCtaContent {
  headline: string
  body: string
  microcopy: string
  button: string
}

const MICROCOPY = 'Respuesta en 24h. Confidencial y sin compromiso inicial.'

function copyForSlug(slug: string): Pick<SkCtaContent, 'headline' | 'body' | 'button'> {
  const s = slug.toLowerCase()
  if (s.includes('ley-2573')) {
    return {
      headline: '¿Te aplica la Ley 2573?',
      body: 'Revisamos si tu caso es suplantación y te armamos el radicado para suspender cobros y reportes.',
      button: 'Revisar mi caso',
    }
  }
  if (s.includes('fraude') || s.includes('vishing') || s.includes('phishing') || s.includes('pse') || s.includes('nequi') || s.includes('bancolombia')) {
    return {
      headline: '¿Te vaciaron la cuenta?',
      body: 'Revisamos tu caso de fraude bancario en 24h. Si no es viable, te lo decimos con honestidad.',
      button: 'Solicitar asesoría',
    }
  }
  if (s.includes('sucesion') || s.includes('herencia')) {
    return {
      headline: '¿Sucesión sin líos?',
      body: 'Te damos hoja de ruta y costo cerrado antes de radicar. Evita meses de vueltas.',
      button: 'Pedir hoja de ruta',
    }
  }
  if (s.includes('datacredito') || s.includes('datacrédito') || s.includes('reporte')) {
    return {
      headline: '¿Reporte en Datacrédito por fraude?',
      body: 'Revisamos si tu reporte se puede quitar con la marca Víctima de Falsedad Personal y cuándo no.',
      button: 'Revisar mi reporte',
    }
  }
  if (s.includes('union-marital') || s.includes('marital')) {
    return {
      headline: '¿Unión marital sin papeles?',
      body: 'Te decimos si te toca declarar sociedad patrimonial y qué bienes entran antes de que venza el año.',
      button: 'Consultar mi caso',
    }
  }
  return {
    headline: '¿Necesitas asesoría legal?',
    body: 'Carlos Salamanca revisa personalmente cada consulta en menos de 24 horas hábiles.',
    button: 'Solicitar asesoría',
  }
}

export function getSkCta(slug: string, placement: SkCtaPlacement = 'final'): SkCtaContent {
  const base = copyForSlug(slug)
  return { ...base, microcopy: MICROCOPY }
}
