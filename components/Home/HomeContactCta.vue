<script setup lang="ts">
import { ArrowRightIcon } from '@heroicons/vue/24/outline'

defineProps<{
  ctaLink?: string
}>()
</script>

<template>
  <section id="contacto" class="bg-surface-elevated py-16 sm:py-20 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="max-w-3xl mx-auto border border-line bg-surface rounded-2xl p-8 sm:p-12 text-center shadow-[0_4px_20px_rgba(11,31,51,0.03)]">
        
        <!-- Subtle Pill -->
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-line bg-surface-elevated mb-5">
          <span class="w-1.5 h-1.5 rounded-full bg-action"></span>
          <span class="text-[11px] font-semibold uppercase tracking-[0.2em] text-action">
            Evaluación de Procedencia
          </span>
        </div>

        <!-- Headline -->
        <h2 class="font-display text-2xl sm:text-3xl lg:text-4xl font-light text-ink tracking-tight">
          ¿Tiene un caso jurídico por
          <span class="italic font-normal text-ink">evaluar?</span>
        </h2>

        <!-- Rule 7 Base Statement (Sharp & Honest) -->
        <p class="mt-4 text-base sm:text-lg text-ink-muted max-w-xl mx-auto leading-relaxed">
          Cuéntenos su caso por escrito. Lo revisamos con rigor documental y le decimos con honestidad si tiene camino.
        </p>

        <!-- 3 Quick Guarantees of Conduct -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 my-7 text-xs text-ink-muted font-medium">
          <span class="flex items-center gap-1.5">
            <span class="text-action font-mono font-bold">✓</span>
            Revisión documental técnica
          </span>
          <span class="flex items-center gap-1.5">
            <span class="text-action font-mono font-bold">✓</span>
            Criterio honesto de viabilidad
          </span>
          <span class="flex items-center gap-1.5">
            <span class="text-action font-mono font-bold">✓</span>
            Sin promesas infundadas
          </span>
        </div>

        <!-- Action Button -->
        <div class="pt-2">
          <NuxtLink
            :to="ctaLink || '/landing/asesoria-inicial'"
            class="inline-flex items-center gap-2.5 px-8 py-3.5 bg-action text-white font-semibold rounded-lg hover:bg-action-hover transition-colors text-sm sm:text-base shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action"
          >
            <span>Solicitar Revisión por Escrito</span>
            <ArrowRightIcon class="w-4 h-4" />
          </NuxtLink>
          <p class="mt-2.5 text-[11px] text-ink-muted">
            Canal confidencial vía formulario seguro.
          </p>
        </div>

      </div>

    </div>
  </section>
</template>
