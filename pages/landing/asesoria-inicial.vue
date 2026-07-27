<script setup>
definePageMeta({
  layout: 'landingv2',
});

const heroSrc =
  'https://pub-989cb99e332c4f23a93447c9e3727d1d.r2.dev/landing-campaigns/asesoria-legal-gratis.webp';

const processSrc = '/images/asesoria-proceso.svg';

const credibility = [
  '+10 años como abogado litigante',
  'Director de SK Soluciones Legales',
  'Bogotá, Colombia',
];

const processSteps = [
  {
    title: 'Cuéntenos su caso',
    body: 'Llene el formulario con sus datos y un resumen breve de lo que le sucedió. Toda la información es confidencial.',
  },
  {
    title: 'Le contactamos por WhatsApp',
    body: 'Carlos Salamanca lo contacta directamente en menos de 24 horas hábiles. Le hace las preguntas necesarias para evaluar la viabilidad de su caso.',
  },
  {
    title: 'Le decimos si su caso tiene fondo o no',
    body: 'Si el caso no es viable, se lo decimos con honestidad. No cobramos por representación que no va a ganar. Si el caso amerita análisis profundo, le ofrecemos nuestra Asesoría de Oro.',
  },
  {
    title: 'Asesoría de Oro y representación',
    body: 'En la Asesoría de Oro revisamos todos sus documentos, definimos la estrategia jurídica y le entregamos una hoja de ruta escrita. Si contrata representación, esa asesoría se abona a los honorarios.',
  },
];

const practiceAreas = [
  {
    title: 'Fraude Bancario',
    body: 'Vishing, phishing, cambiazo de tarjeta, SIM swap, PSE fraudulento, transacciones no autorizadas. Litigio ante la SFC.',
  },
  {
    title: 'Sucesiones',
    body: 'Sucesiones notariales y judiciales. Optimización de ganancia ocasional por herencia (Art. 307 E.T.).',
  },
  {
    title: 'Planificación Patrimonial',
    body: 'Transferencia de bienes en vida: donación, compraventa familiar, SAS familiar, fideicomiso civil, testamentos.',
  },
  {
    title: 'Civil',
    body: 'Contratos, obligaciones, responsabilidad civil. Cobros ejecutivos, procesos declarativos, restitución de inmueble.',
  },
];

useHead({
  title: 'Asesoría Inicial | SK Soluciones Legales',
  meta: [
    {
      name: 'description',
      content:
        'Cuéntenos su caso. Abogado en Fraude Bancario, Sucesiones, Planificación Patrimonial y Civil. Carlos Salamanca revisa personalmente cada consulta.',
    },
  ],
});

const scrollToForm = () => {
  document.getElementById('consulta')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};
</script>

<template>
  <div class="w-full">
    <!-- Hero -->
    <section class="w-full bg-surface">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div class="order-2 md:order-1 w-full overflow-hidden rounded-lg border border-line">
            <img
              :src="heroSrc"
              alt="Asesoría inicial SK Soluciones Legales"
              class="w-full h-auto object-cover"
              width="800"
              height="1000"
            >
          </div>
          <div class="order-1 md:order-2 flex flex-col gap-5">
            <p class="text-sm font-semibold uppercase tracking-widest text-action">
              SK Soluciones Legales
            </p>
            <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink leading-tight tracking-tight">
              Cuéntenos su caso. Le contactamos directamente.
            </h1>
            <p class="text-base sm:text-lg text-ink-muted leading-relaxed">
              Abogado en Fraude Bancario, Sucesiones, Planificación Patrimonial y Civil.
              Más de 50 casos activos contra la banca colombiana. Carlos Salamanca revisa
              personalmente cada caso que llega.
            </p>
            <ul class="flex flex-col gap-2 text-sm sm:text-base text-ink">
              <li
                v-for="item in credibility"
                :key="item"
                class="flex items-start gap-2"
              >
                <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-action" aria-hidden="true" />
                <span>{{ item }}</span>
              </li>
            </ul>
            <div class="flex flex-col gap-2 items-start">
              <button
                type="button"
                class="inline-flex items-center justify-center px-8 py-4 bg-action text-white font-semibold rounded-lg hover:bg-action-hover transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action focus-visible:ring-offset-2"
                @click="scrollToForm"
              >
                Contarle mi caso a Carlos
              </button>
              <p class="text-sm text-ink-muted">
                Le respondemos por WhatsApp en menos de 24 horas hábiles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Proceso -->
    <section class="w-full bg-surface-elevated border-t border-line py-16 sm:py-20">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div>
            <h2 class="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-ink">
              ¿Cómo trabajamos su caso?
            </h2>
            <ol class="mt-8 flex flex-col gap-6">
              <li
                v-for="(step, index) in processSteps"
                :key="step.title"
                class="flex gap-4"
              >
                <span class="font-display text-2xl font-bold text-action leading-none w-8 shrink-0">
                  {{ index + 1 }}
                </span>
                <div>
                  <h3 class="text-lg font-semibold text-ink">{{ step.title }}</h3>
                  <p class="mt-1 text-ink-muted leading-relaxed">{{ step.body }}</p>
                </div>
              </li>
            </ol>
          </div>
          <div class="w-full overflow-hidden rounded-lg border border-line">
            <img
              :src="processSrc"
              alt="Proceso de acompañamiento legal SK Soluciones"
              class="w-full h-full min-h-[18rem] object-cover object-center"
              width="1200"
              height="800"
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Áreas -->
    <section class="w-full bg-surface border-t border-line py-16 sm:py-20">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-ink text-center">
          Áreas en las que ayudamos
        </h2>
        <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
          <div
            v-for="area in practiceAreas"
            :key="area.title"
            class="flex flex-col gap-2"
          >
            <h3 class="text-lg font-semibold text-ink">{{ area.title }}</h3>
            <p class="text-ink-muted leading-relaxed">{{ area.body }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Formulario -->
    <section id="consulta" class="w-full bg-surface-elevated border-t border-line py-16 sm:py-20 scroll-mt-24">
      <div class="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8">
          <h2 class="font-display text-2xl sm:text-3xl font-bold text-ink">
            Contarle mi caso a Carlos
          </h2>
          <p class="mt-2 text-sm text-ink-muted">
            Le respondemos por WhatsApp en menos de 24 horas hábiles.
          </p>
        </div>
        <LandingsAsesoriaInicialLeadForm />
      </div>
    </section>
  </div>
</template>
