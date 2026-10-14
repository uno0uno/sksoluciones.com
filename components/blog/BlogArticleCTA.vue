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
  <aside class="rounded-xl bg-[#1A6A9A] p-5 sm:p-6 text-white shadow-lg border border-[#0F4C75]/20">
    <div class="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
      <div class="flex-1">
        <div class="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white/90">
          <span class="h-2 w-2 rounded-full bg-white animate-pulse" /> SK Soluciones
        </div>
        <p class="mt-3 text-[1.0625rem] font-extrabold leading-tight text-white">
          {{ ctaCopy.headline }}
        </p>
        <p class="mt-2 text-[0.9375rem] leading-relaxed text-white/90">
          {{ ctaCopy.body }}
        </p>
        <p class="mt-2 text-xs leading-relaxed text-white/70">
          {{ ctaCopy.microcopy }}
        </p>
      </div>
      <button
        class="inline-flex shrink-0 items-center justify-center rounded-xl bg-white px-6 py-3.5 text-sm font-extrabold text-[#1A6A9A] shadow-md transition hover:bg-surface active:scale-[0.98]"
        type="button"
        @click="goToAsesoria"
      >
        {{ ctaCopy.button }} →
      </button>
    </div>
  </aside>
</template>
