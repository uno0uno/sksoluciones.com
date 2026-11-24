<script setup lang="ts">
import { getSkCta } from '~/utils/skBlogCta'

const props = defineProps<{
  slug: string
  title: string
}>()

const ctaCopy = computed(() => getSkCta(props.slug, 'final'))

function goToAsesoria() {
  const slug = props.slug?.trim()
  return navigateTo({
    path: '/landing/asesoria-inicial',
    query: slug ? { campaignSlug: slug } : {},
    hash: '#consulta',
  })
}
</script>

<template>
  <aside class="cta-card relative overflow-hidden rounded-2xl bg-ink p-6 sm:p-8 shadow-xl border border-line/25">
    <!-- Ambient gold glow -->
    <div
      class="pointer-events-none absolute -right-16 -top-16 h-60 w-60 rounded-full bg-action/20 blur-3xl"
      aria-hidden="true"
    />

    <div class="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
      <div class="flex-1">
        <div class="cta-badge inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-widest">
          <span class="h-2 w-2 rounded-full bg-action animate-pulse" />
          <span>SK Soluciones · Asesoría Jurídica</span>
        </div>
        <h3 class="cta-headline mt-3 font-display text-2xl sm:text-3xl font-extrabold leading-tight tracking-tight">
          {{ ctaCopy.headline }}
        </h3>
        <p class="cta-body mt-2 text-sm sm:text-base leading-relaxed">
          {{ ctaCopy.body }}
        </p>
        <p class="cta-microcopy mt-2.5 text-xs">
          {{ ctaCopy.microcopy }}
        </p>
      </div>

      <button
        class="cta-button inline-flex shrink-0 items-center justify-center rounded-xl bg-action hover:bg-action-hover px-6 py-3.5 text-sm font-bold text-white shadow-lg transition active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action"
        type="button"
        @click="goToAsesoria"
      >
        <span>{{ ctaCopy.button }}</span>
        <span class="ms-1.5" aria-hidden="true">→</span>
      </button>
    </div>
  </aside>
</template>

<style scoped>
.cta-card {
  background-color: var(--color-ink) !important;
}

.cta-badge {
  background-color: rgba(255, 255, 255, 0.12) !important;
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
  color: #F4F1EC !important;
}

.cta-headline {
  color: #FFFFFF !important;
  font-weight: 800 !important;
}

.cta-body {
  color: #F4F1EC !important;
  opacity: 0.95 !important;
}

.cta-microcopy {
  color: #D9D3C9 !important;
  opacity: 0.85 !important;
}

.cta-button {
  background-color: var(--color-action) !important;
  color: #FFFFFF !important;
  box-shadow: 0 4px 14px rgba(154, 107, 47, 0.35) !important;
}

.cta-button:hover {
  background-color: var(--color-action-hover) !important;
}
</style>
