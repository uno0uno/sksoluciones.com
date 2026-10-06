<script setup lang="ts">
const props = defineProps<{
  slug: string
  title: string
}>()

const ctaCopy = computed(() => {
  if (props.slug.includes('fraude')) {
    return {
      headline: '¿Te vaciaron la cuenta?',
      body: 'Revisamos tu caso de fraude bancario en 24h. Si no es viable, te lo decimos.',
    }
  }
  if (props.slug.includes('sucesion')) {
    return {
      headline: '¿Sucesión sin líos?',
      body: 'Te damos hoja de ruta y costo cerrado antes de radicar.',
    }
  }
  return {
    headline: '¿Necesitas asesoría legal? Cuéntanos tu caso',
    body: 'Carlos Salamanca revisa personalmente cada consulta en menos de 24 horas hábiles.',
  }
})
</script>

<template>
  <aside class="rounded-xl border border-line bg-brand p-6 text-on-brand sm:p-8">
    <p class="text-lead text-on-brand">
      {{ ctaCopy.headline }}
    </p>
    <p class="mt-2 text-body text-on-brand">
      {{ ctaCopy.body }} Confidencial y sin compromiso inicial.
    </p>
    <NuxtLink
      to="/landing/asesoria-inicial#consulta"
      class="mt-5 inline-flex rounded-xl bg-surface-elevated px-5 py-2.5 text-caption font-semibold text-brand transition hover:bg-brand-muted"
    >
      Solicitar asesoría
    </NuxtLink>
  </aside>
</template>
