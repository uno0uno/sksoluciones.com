<script setup>
definePageMeta({
  layout: 'landingv2',
});

const heroSrc =
  'https://pub-989cb99e332c4f23a93447c9e3727d1d.r2.dev/landing-campaigns/asesoria-legal-gratis.webp';

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
</script>

<template>
  <section class="w-full bg-surface">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div class="order-2 md:order-1 w-full overflow-hidden rounded-lg border border-ink/10">
          <img
            :src="heroSrc"
            alt="Asesoría inicial SK Soluciones Legales"
            class="w-full h-auto object-cover"
            width="800"
            height="1000"
          >
        </div>
        <div class="order-1 md:order-2 flex flex-col gap-4">
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
          <!-- Pipeline sections + form: batch #12 -->
        </div>
      </div>
    </div>
  </section>
</template>
