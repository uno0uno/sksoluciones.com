<script setup lang="ts">
import { getSkCta } from '~/utils/skBlogCta'

const props = defineProps<{
  slug: string
  title?: string
}>()

const ctaContent = computed(() => getSkCta(props.slug, 'rail'))

function goToAsesoria() {
  const s = props.slug?.trim()
  return navigateTo({
    path: '/landing/asesoria-inicial',
    query: s ? { campaignSlug: s } : {},
    hash: '#consulta',
  })
}
</script>

<template>
  <aside
    class="block"
    aria-label="Orientación legal SK Soluciones"
  >
    <div class="rounded-2xl border border-line bg-surface p-5 sm:p-6 shadow-sm">
      <!-- Badge -->
      <div class="inline-flex items-center gap-1.5 px-2.5 py-1 mb-3.5 rounded-full bg-surface-elevated border border-line text-action text-[11px] font-bold uppercase tracking-wider">
        <span class="h-1.5 w-1.5 rounded-full bg-action animate-pulse" />
        <span>SK Soluciones · Asesoría</span>
      </div>

      <!-- Headline -->
      <h3 class="font-display text-[1.25rem] sm:text-[1.35rem] font-extrabold leading-[1.2] tracking-tight text-ink">
        {{ ctaContent.headline }}
      </h3>

      <!-- Body -->
      <p class="mt-2.5 text-sm leading-relaxed text-ink-muted">
        {{ ctaContent.body }}
      </p>

      <!-- Checklist -->
      <ul class="mt-4 space-y-2 border-t border-line/70 pt-3.5 text-xs text-ink-muted">
        <li class="flex items-start gap-2">
          <svg
            class="h-4 w-4 shrink-0 text-action mt-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.5"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span>Verificación jurídica de aviso y prueba de envío</span>
        </li>
        <li class="flex items-start gap-2">
          <svg
            class="h-4 w-4 shrink-0 text-action mt-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.5"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span>Revisión de caducidad (8 años) y término de mora</span>
        </li>
        <li class="flex items-start gap-2">
          <svg
            class="h-4 w-4 shrink-0 text-action mt-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.5"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span>Petición formal y silencio positivo (15+8 días)</span>
        </li>
      </ul>

      <!-- Microcopy -->
      <p class="mt-3.5 text-xs text-ink-muted/90 leading-relaxed">
        {{ ctaContent.microcopy }}
      </p>

      <!-- Action Button -->
      <button
        type="button"
        class="mt-4 w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-action hover:bg-action-hover text-white text-sm font-bold shadow-sm active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action"
        @click="goToAsesoria"
      >
        <span>{{ ctaContent.button }}</span>
        <span aria-hidden="true">→</span>
      </button>

      <!-- Footer indicator -->
      <div class="mt-4 pt-3 border-t border-line/60 flex items-center justify-between text-[11px] text-ink-muted">
        <span class="font-medium text-ink">Revisión personalizada</span>
        <span>Bogotá, Colombia</span>
      </div>
    </div>
  </aside>
</template>
