<script setup lang="ts">
defineProps<{
  slug: string
  title: string
}>()
</script>

<template>
  <aside class="rounded-xl border border-line bg-brand p-6 text-on-brand sm:p-8">
    <p class="text-lead text-on-brand">
      ¿Necesitas asesoría legal? Cuéntanos tu caso
    </p>
    <p class="mt-2 text-body text-on-brand">
      Carlos Salamanca revisa personalmente cada consulta en menos de 24 horas hábiles. Confidencial y sin compromiso inicial.
    </p>
    <NuxtLink
      to="/landing/asesoria-inicial#consulta"
      class="mt-5 inline-flex rounded-xl bg-surface-elevated px-5 py-2.5 text-caption font-semibold text-brand transition hover:bg-brand-muted"
    >
      Solicitar asesoría
    </NuxtLink>
  </aside>
</template>
