<script setup>
definePageMeta({
  layout: 'landingv2',
});

useHead({
  title: 'Recibimos su consulta | SK Soluciones Legales',
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
});
</script>

<template>
  <section class="w-full bg-surface py-16 sm:py-24">
    <div class="max-w-xl mx-auto px-4 sm:px-6 text-center flex flex-col gap-6">
      <h1 class="font-display text-3xl sm:text-4xl font-extrabold text-ink leading-tight">
        Recibimos su consulta
      </h1>
      <p class="text-lg sm:text-xl text-ink font-medium">
        Gracias por su confianza. Carlos revisará personalmente su caso.
      </p>
      <p class="text-base text-ink-muted leading-relaxed">
        Le escribiremos por WhatsApp al número que registró en las próximas 24 horas hábiles.
        En esa conversación evaluaremos la viabilidad de su caso y le indicaremos los siguientes pasos.
      </p>
      <!-- Urgent WA CTA + firm number: batch #13 -->
      <NuxtLink
        to="/"
        class="inline-flex items-center justify-center self-center px-8 py-3 bg-ink text-on-ink font-semibold rounded-lg hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action focus-visible:ring-offset-2"
      >
        Volver al inicio
      </NuxtLink>
      <p class="text-xs sm:text-sm text-ink-muted pt-4 border-t border-line">
        SK Soluciones Legales — Carlos Salamanca — T.P. 297.254 C.S.J.<br>
        Bogotá, Colombia — sksoluciones.com
      </p>
    </div>
  </section>
</template>
