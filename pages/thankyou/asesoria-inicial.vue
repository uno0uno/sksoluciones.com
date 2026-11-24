<script setup>
import { computed } from 'vue';

definePageMeta({
  layout: 'landingv2',
});

const config = useRuntimeConfig();
const firmDigits = computed(() => {
  const raw = String(config.public.skWhatsapp || '').replace(/\D/g, '');
  if (!/^\d{10}$/.test(raw)) return '';
  if (raw === '3001234567') return '';
  return raw;
});

const firmWaHref = computed(() =>
  firmDigits.value ? `https://wa.me/57${firmDigits.value}` : ''
);

useHead({
  title: 'Recibimos su consulta | SK Soluciones Legales',
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
});
</script>

<template>
  <section class="w-full bg-surface min-h-[75vh] py-16 sm:py-24 flex items-center justify-center bg-[radial-gradient(#D9D3C9_1px,transparent_1px)] [background-size:24px_24px]">
    <div class="max-w-xl mx-auto px-4 sm:px-6 w-full">
      <div class="rounded-2xl border border-line bg-surface-elevated p-8 sm:p-10 shadow-lg text-center flex flex-col items-center gap-6">
        
        <!-- Success Icon -->
        <div class="h-16 w-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shadow-2xs">
          <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <div class="flex flex-col gap-2">
          <p class="text-xs font-bold uppercase tracking-widest text-action">
            Consulta radicada con éxito
          </p>
          <h1 class="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-ink leading-tight">
            Recibimos su consulta
          </h1>
        </div>

        <p class="text-base sm:text-lg text-ink font-medium">
          Gracias por su confianza. En SK Soluciones revisaremos los hechos y antecedentes con criterio profesional y reserva deontológica.
        </p>

        <p class="text-sm sm:text-base text-ink-muted leading-relaxed">
          Le escribiremos por escrito al WhatsApp o correo electrónico registrado para comunicarle el concepto preliminar de viabilidad legal y los siguientes pasos.
        </p>

        <div v-if="firmWaHref" class="rounded-xl border border-line bg-surface p-4 text-xs sm:text-sm text-ink-muted leading-relaxed text-left w-full">
          <strong class="text-ink font-semibold">¿Tiene soportes inmediatos para adjuntar?</strong>
          <p class="mt-1">
            Si dispone de respuestas bancarias o radicados, puede escribirnos directamente por WhatsApp indicando su nombre.
          </p>
        </div>

        <div class="flex flex-col sm:flex-row gap-3 justify-center items-center w-full pt-2">
          <a
            v-if="firmWaHref"
            :href="firmWaHref"
            target="_blank"
            rel="noopener noreferrer"
            class="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 bg-action text-white font-bold text-sm rounded-xl hover:bg-action-hover transition-colors shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action focus-visible:ring-offset-2"
          >
            Escribir por WhatsApp
          </a>
          <NuxtLink
            to="/"
            class="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 bg-surface border border-line text-ink font-semibold text-sm rounded-xl hover:bg-surface-elevated transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action focus-visible:ring-offset-2"
          >
            Volver al inicio
          </NuxtLink>
        </div>

        <div class="text-xs text-ink-muted pt-6 border-t border-line w-full text-center">
          SK Soluciones Legales · Abg. Carlos Salamanca · T.P. 297.254 C.S.J.<br>
          Bogotá D.C., Colombia · Información amparada bajo reserva profesional (Art. 74 C.P.).
        </div>

      </div>
    </div>
  </section>
</template>
