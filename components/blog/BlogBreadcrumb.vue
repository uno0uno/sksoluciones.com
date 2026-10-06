<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <nav
    aria-label="Breadcrumb"
    class="flex flex-wrap items-center gap-2 text-caption text-ink-muted"
  >
    <NuxtLink
      to="/"
      class="text-ink-muted no-underline transition hover:text-brand"
    >
      Inicio
    </NuxtLink>
    <span aria-hidden="true">/</span>
    <NuxtLink
      to="/blog"
      class="text-ink-muted no-underline transition hover:text-brand"
    >
      Blog
    </NuxtLink>
    <span aria-hidden="true">/</span>
    <span
      class="line-clamp-1 font-medium text-ink"
      aria-current="page"
    >
      {{ title }}
    </span>
  </nav>
</template>
