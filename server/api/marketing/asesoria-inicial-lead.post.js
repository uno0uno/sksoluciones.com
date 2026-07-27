const AREA_OPTIONS = [
  'Fraude Bancario',
  'Sucesiones',
  'Planificación Patrimonial',
  'Civil',
  'Otro tema legal',
];

const emailOk = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export default defineEventHandler(async (event) => {
  const { discordSkLeadsWebhookUrl } = useRuntimeConfig();

  if (!discordSkLeadsWebhookUrl) {
    throw createError({
      statusCode: 503,
      statusMessage: 'Service Unavailable',
      message: 'El servicio de consultas no está disponible en este momento. Intente más tarde.',
    });
  }

  const body = await readBody(event);
  const name = typeof body?.name === 'string' ? body.name.trim() : '';
  const email = typeof body?.email === 'string' ? body.email.trim() : '';
  const phoneRaw = typeof body?.phone === 'string' ? body.phone : '';
  const phoneDigits = phoneRaw.replace(/\D/g, '');
  const area = typeof body?.area === 'string' ? body.area.trim() : '';
  const caseDescription =
    typeof body?.caseDescription === 'string' ? body.caseDescription.trim() : '';

  if (!name || name.length < 2) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request',
      message: 'Nombre incompleto.',
    });
  }

  if (!email || !emailOk(email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request',
      message: 'Correo inválido.',
    });
  }

  if (!/^\d{10}$/.test(phoneDigits)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request',
      message: 'Teléfono inválido.',
    });
  }

  if (!AREA_OPTIONS.includes(area)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request',
      message: 'Área de consulta inválida.',
    });
  }

  const waMeLead = `https://wa.me/57${phoneDigits}`;
  const caseText = caseDescription || '—';

  const discordPayload = {
    content: 'Nuevo lead — Asesoría Inicial (sksoluciones.com)',
    embeds: [
      {
        title: 'Consulta recibida',
        color: 0x9a6b2f,
        fields: [
          { name: 'Nombre', value: name, inline: true },
          { name: 'Área', value: area, inline: true },
          { name: 'Email', value: email, inline: false },
          { name: 'WhatsApp', value: `+57 ${phoneDigits}`, inline: true },
          { name: 'Contactar', value: waMeLead, inline: true },
          { name: 'Caso', value: caseText.slice(0, 1000), inline: false },
        ],
        timestamp: new Date().toISOString(),
      },
    ],
  };

  try {
    await $fetch(discordSkLeadsWebhookUrl, {
      method: 'POST',
      body: discordPayload,
    });
  } catch {
    throw createError({
      statusCode: 502,
      statusMessage: 'Bad Gateway',
      message: 'No pudimos registrar su consulta. Intente de nuevo en unos minutos.',
    });
  }

  return { ok: true };
});
