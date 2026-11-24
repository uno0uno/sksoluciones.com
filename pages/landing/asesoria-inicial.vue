<script setup>
import { ref } from 'vue';

definePageMeta({
  layout: 'landingv2',
});

const leadFormRef = ref(null);

useHead({
  title: 'Asesoría Jurídica Inicial | SK Soluciones Legales',
  meta: [
    {
      name: 'description',
      content:
        'Cuéntenos su caso por escrito. Revisamos con criterio jurídico y honestidad la viabilidad de su situación en fraude bancario, centrales de riesgo, sucesiones y derecho patrimonial.',
    },
    { property: 'og:title', content: 'Asesoría Jurídica Inicial | SK Soluciones Legales' },
    {
      property: 'og:description',
      content:
        'Cuéntenos su caso por escrito. Revisamos la viabilidad legal de su situación con criterio técnico y honestidad.',
    },
  ],
});

const credibilityPillars = [
  {
    title: 'Secreto profesional',
    description: 'Su información está protegida por reserva legal (Art. 74 C.P.).',
    icon: 'lock',
  },
  {
    title: 'Criterio honesto',
    description: 'Si no hay viabilidad, se lo decimos. No impulsamos casos sin sustento.',
    icon: 'scale',
  },
  {
    title: 'Sin costo inicial',
    description: 'La radicación por escrito no genera costo ni compromiso.',
    icon: 'document',
  },
];

const methodologySteps = [
  {
    number: '01',
    title: 'Radicación por escrito',
    description: 'Usted envía los hechos por escrito con fechas y entidades involucradas.',
  },
  {
    number: '02',
    title: 'Análisis técnico',
    description: 'Contrastamos su caso con la norma aplicable y jurisprudencia vigente.',
  },
  {
    number: '03',
    title: 'Concepto de viabilidad',
    description: 'Le indicamos con claridad si hay mérito jurídico suficiente.',
  },
  {
    number: '04',
    title: 'Hoja de ruta',
    description: 'Si es viable, definimos pasos y términos de representación por escrito.',
  },
];

const practiceCards = [
  {
    id: 'Fraude Bancario',
    title: 'Fraude Bancario',
    badge: 'Ley 2573 · SFC',
    description: 'Suplantación, fallas de seguridad del banco y transferencias no autorizadas.',
    buttonText: 'Ver viabilidad',
  },
  {
    id: 'Civil',
    title: 'Centrales de Riesgo',
    badge: 'Ley 1266 / 2157',
    description: 'Reporte sin aviso de 20 días, caducidad a 8 años y hábeas data.',
    buttonText: 'Ver viabilidad',
  },
  {
    id: 'Sucesiones',
    title: 'Sucesiones y Herencias',
    badge: 'Notarial y Judicial',
    description: 'Acuerdo notarial o proceso judicial. Partición y liquidación herencial.',
    buttonText: 'Ver viabilidad',
  },
  {
    id: 'Planificación Patrimonial',
    title: 'Patrimonio y Civil',
    badge: 'Protección de Activos',
    description: 'Fideicomiso, compraventa, donación y controversias patrimoniales.',
    buttonText: 'Ver viabilidad',
  },
];

const faqs = [
  {
    q: '¿La valoración inicial tiene costo?',
    a: 'No. La radicación y valoración preliminar por escrito no tiene costo. Si requiere estudio documental a profundidad, se lo informamos antes.',
  },
  {
    q: '¿Por qué el contacto inicial es por escrito?',
    a: 'Porque nos permite revisar fechas, antecedentes y normas con precisión. Así le damos una respuesta meditada y sin malentendidos.',
  },
  {
    q: '¿Qué pasa si mi caso no es viable?',
    a: 'Se lo decimos con franqueza. No iniciamos acciones sin sustento ni cobramos trámites sin probabilidad razonable de prosperar.',
  },
  {
    q: '¿Qué información debo tener a la mano?',
    a: 'Solo el resumen de los hechos. Si avanzamos, le pedimos extractos, peticiones radicadas o respuestas de la entidad.',
  },
  {
    q: '¿Cómo le respondemos?',
    a: 'Revisamos los hechos y le respondemos por WhatsApp o correo con el concepto inicial o solicitud de precisiones.',
  },
];

const scrollToForm = () => {
  const target = document.getElementById('formulario-consulta');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    const nameInput = document.getElementById('ai-name');
    if (nameInput) {
      setTimeout(() => nameInput.focus(), 400);
    }
  }
};

const handleSelectArea = (areaName) => {
  if (leadFormRef.value?.setArea) {
    leadFormRef.value.setArea(areaName);
  }
  scrollToForm();
};
</script>

<template>
  <div class="w-full bg-surface">
    <!-- ========================================== -->
    <!-- 1. HERO SECTION CON FORMULARIO INTEGRADO   -->
    <!-- ========================================== -->
    <section class="w-full bg-surface border-b border-line py-10 sm:py-14 lg:py-16 relative overflow-hidden bg-[radial-gradient(#D9D3C9_1px,transparent_1px)] [background-size:24px_24px]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          
          <!-- Columna Izquierda: Propuesta de valor & Autoridad (50%) -->
          <div class="flex flex-col gap-6">
            <!-- Eyebrow Badge -->
            <div class="inline-flex items-center gap-2 self-start rounded-full bg-surface-elevated px-3.5 py-1.5 border border-line text-xs font-semibold uppercase tracking-wider text-action shadow-2xs">
              <span class="h-2 w-2 rounded-full bg-action" aria-hidden="true" />
              <span>SK Soluciones · Asesoría Jurídica Inicial</span>
            </div>

            <!-- H1 Principal -->
            <h1 class="font-display text-3xl sm:text-4xl lg:text-[2.85rem] font-black text-ink leading-[1.12] tracking-tight">
              Asesoría jurídica inicial — cuéntenos su caso por escrito.
            </h1>

            <!-- Lead paragraph -->
            <p class="text-base sm:text-lg text-ink-muted leading-relaxed max-w-2xl">
              Revisamos sus hechos con criterio jurídico antes de iniciar trámites. Le decimos con honestidad si hay viabilidad legal en fraude bancario, centrales de riesgo o sucesiones.
            </p>

            <!-- 3 Credibility Pillars Cards -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
              <div
                v-for="pillar in credibilityPillars"
                :key="pillar.title"
                class="rounded-xl border border-line bg-surface-elevated/80 p-4 shadow-2xs flex flex-col gap-2 transition-all hover:bg-surface-elevated hover:shadow-xs"
              >
                <div class="flex items-center gap-2 text-action font-semibold text-xs sm:text-sm">
                  <!-- Lock Icon -->
                  <svg v-if="pillar.icon === 'lock'" class="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <!-- Scale Icon -->
                  <svg v-else-if="pillar.icon === 'scale'" class="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                  <!-- Document Icon -->
                  <svg v-else class="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span class="font-bold text-ink leading-tight">{{ pillar.title }}</span>
                </div>
                <p class="text-xs text-ink-muted leading-relaxed">
                  {{ pillar.description }}
                </p>
              </div>
            </div>

            <!-- Author & Firm Micro-card -->
            <div class="mt-2 pt-4 border-t border-line/80 flex items-center gap-4">
              <div class="h-12 w-12 rounded-xl bg-ink text-on-ink flex items-center justify-center font-display font-bold text-lg shrink-0 shadow-xs">
                CS
              </div>
              <div class="flex flex-col text-xs sm:text-sm">
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="font-bold text-ink">Carlos Salamanca</span>
                  <span class="text-xs font-semibold text-action uppercase tracking-wide">Director Jurídico</span>
                </div>
                <p class="text-ink-muted text-xs">
                  Abogado Litigante · T.P. 297.254 C.S.J. · Sede en Bogotá D.C. con atención nacional.
                </p>
              </div>
            </div>

          </div>

          <!-- Columna Derecha: Formulario de Radicación de Consulta (50%) -->
          <div id="formulario-consulta" class="scroll-mt-24">
            <div class="rounded-2xl border border-line bg-surface-elevated p-6 sm:p-8 shadow-xl relative">
              
              <!-- Form Header -->
              <div class="mb-5 pb-4 border-b border-line flex flex-col gap-1.5">
                <div class="flex items-center justify-between">
                  <span class="text-[11px] font-bold uppercase tracking-wider text-action">
                    Radicación de consulta
                  </span>
                  <span class="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    <span class="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Recepción activa
                  </span>
                </div>
                <h2 class="font-display text-xl sm:text-2xl font-bold text-ink">
                  Valoración de viabilidad legal
                </h2>
                <p class="text-xs sm:text-sm text-ink-muted leading-normal">
                  Diligencie los datos para que revisemos los hechos y le respondamos por escrito con criterio profesional.
                </p>
              </div>

              <!-- Form Component -->
              <LandingsAsesoriaInicialLeadForm ref="leadFormRef" />

            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ========================================== -->
    <!-- 2. METODOLOGÍA: CÓMO TRABAJAMOS SU CASO    -->
    <!-- ========================================== -->
    <section class="w-full bg-surface-elevated py-16 sm:py-20 border-b border-line">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p class="text-xs font-bold uppercase tracking-widest text-action mb-2">
            Metodología
          </p>
          <h2 class="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-ink tracking-tight">
            ¿Cómo evaluamos su caso?
          </h2>
          <p class="mt-3 text-base text-ink-muted leading-relaxed">
            Proceso transparente, sin cobros ocultos ni pasos en falso.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="step in methodologySteps"
            :key="step.number"
            class="relative rounded-2xl border border-line bg-surface p-6 flex flex-col justify-between transition-all hover:border-action/50 hover:shadow-sm"
          >
            <div>
              <div class="font-display text-3xl font-extrabold text-action mb-4 leading-none">
                {{ step.number }}
              </div>
              <h3 class="font-display text-lg font-bold text-ink mb-2">
                {{ step.title }}
              </h3>
              <p class="text-sm text-ink-muted leading-relaxed">
                {{ step.description }}
              </p>
            </div>
            <div class="mt-4 pt-3 border-t border-line/60 flex items-center gap-1.5 text-[11px] font-semibold text-action uppercase tracking-wider">
              <span>Etapa {{ step.number }}</span>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ========================================== -->
    <!-- 3. ÁREAS DE PRÁCTICA Y ENFOQUE TÉCNICO     -->
    <!-- ========================================== -->
    <section class="w-full bg-surface py-16 sm:py-20 border-b border-line">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p class="text-xs font-bold uppercase tracking-widest text-action mb-2">
            Especialidades
          </p>
          <h2 class="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-ink tracking-tight">
            Áreas de práctica
          </h2>
          <p class="mt-3 text-base text-ink-muted leading-relaxed">
            Enfoque en materias de alta exigencia probatoria.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <div
            v-for="card in practiceCards"
            :key="card.title"
            class="rounded-2xl border border-line bg-surface-elevated p-6 sm:p-8 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all duration-200"
          >
            <div>
              <div class="inline-flex items-center gap-2 rounded-md bg-surface px-3 py-1 text-xs font-semibold text-action border border-line mb-4">
                {{ card.badge }}
              </div>
              <h3 class="font-display text-xl sm:text-2xl font-bold text-ink mb-3">
                {{ card.title }}
              </h3>
              <p class="text-sm sm:text-base text-ink-muted leading-relaxed mb-6">
                {{ card.description }}
              </p>
            </div>

            <div class="pt-4 border-t border-line flex items-center justify-between">
              <button
                type="button"
                class="inline-flex items-center gap-2 text-sm font-bold text-action hover:text-action-hover transition-colors focus-visible:outline-none"
                @click="handleSelectArea(card.id)"
              >
                <span>{{ card.buttonText }}</span>
                <span aria-hidden="true">→</span>
              </button>
              <span class="text-xs text-ink-muted">Revisión preliminar</span>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ========================================== -->
    <!-- 4. COMPROMISOS ÉTICOS Y DEONTOLÓGICOS      -->
    <!-- ========================================== -->
    <section class="w-full bg-surface-elevated py-14 sm:py-18 border-b border-line">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div class="rounded-xl border border-line bg-surface p-6 flex flex-col gap-3">
            <div class="w-10 h-10 rounded-lg bg-surface-elevated border border-line flex items-center justify-center text-action">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/></svg>
            </div>
            <h3 class="font-display text-lg font-bold text-ink">
              Sin promesas de resultado
            </h3>
            <p class="text-sm text-ink-muted leading-relaxed">
              No garantizamos tiempos de entidades ni fallos. Actuamos con rigor técnico y probidad procesal.
            </p>
          </div>

          <div class="rounded-xl border border-line bg-surface p-6 flex flex-col gap-3">
            <div class="w-10 h-10 rounded-lg bg-surface-elevated border border-line flex items-center justify-center text-action">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
            </div>
            <h3 class="font-display text-lg font-bold text-ink">
              Honorarios claros
            </h3>
            <p class="text-sm text-ink-muted leading-relaxed">
              Alcance y costos pactados por escrito antes de representar. Sin cobros ocultos.
            </p>
          </div>

          <div class="rounded-xl border border-line bg-surface p-6 flex flex-col gap-3">
            <div class="w-10 h-10 rounded-lg bg-surface-elevated border border-line flex items-center justify-center text-action">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
            </div>
            <h3 class="font-display text-lg font-bold text-ink">
              Trato directo con abogado
            </h3>
            <p class="text-sm text-ink-muted leading-relaxed">
              Su caso lo evalúa directamente el equipo jurídico en Bogotá, sin intermediarios.
            </p>
          </div>

        </div>

      </div>
    </section>

    <!-- ========================================== -->
    <!-- 5. PREGUNTAS FRECUENTES (FAQ)              -->
    <!-- ========================================== -->
    <section class="w-full bg-surface py-16 sm:py-20 border-b border-line">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p class="text-xs font-bold uppercase tracking-widest text-action mb-2">
            Resolución de dudas
          </p>
          <h2 class="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-ink tracking-tight">
            Preguntas frecuentes sobre la asesoría inicial
          </h2>
        </div>

        <div class="flex flex-col gap-4">
          <div
            v-for="faq in faqs"
            :key="faq.q"
            class="rounded-xl border border-line bg-surface-elevated p-6 shadow-2xs"
          >
            <h3 class="font-display text-base sm:text-lg font-bold text-ink mb-2">
              {{ faq.q }}
            </h3>
            <p class="text-sm sm:text-base text-ink-muted leading-relaxed">
              {{ faq.a }}
            </p>
          </div>
        </div>

      </div>
    </section>

    <!-- ========================================== -->
    <!-- 6. BANNER FINAL DE ACCIÓN                  -->
    <!-- ========================================== -->
    <section class="w-full bg-ink text-on-ink py-16 sm:py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
        <p class="text-xs font-bold uppercase tracking-widest text-action">
          SK Soluciones Legales · Bogotá, Colombia
        </p>
        <h2 class="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-on-ink tracking-tight">
          Cuéntenos su caso por escrito.
        </h2>
        <p class="text-base sm:text-lg text-on-ink-muted max-w-2xl leading-relaxed">
          Evite pasos en falso. Revisamos los hechos y le decimos si hay mérito legal.
        </p>
        <div class="pt-2">
          <button
            type="button"
            class="inline-flex items-center justify-center px-8 py-4 bg-action text-white font-bold text-base rounded-xl hover:bg-action-hover transition-colors shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            @click="scrollToForm"
          >
            Radicar mi consulta ahora
          </button>
        </div>
        <p class="text-xs text-on-ink-muted/80 pt-2">
          Primer contacto por escrito amparado bajo reserva y secreto profesional (Art. 74 C.P.).
        </p>
      </div>
    </section>
  </div>
</template>
