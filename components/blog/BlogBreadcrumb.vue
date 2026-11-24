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
      class="text-ink-muted no-underline transition hover:text-action"
    >
      Inicio
    </NuxtLink>
    <span aria-hidden="true" class="text-line">/</span>
    <NuxtLink
      to="/blog"
      class="text-ink-muted no-underline transition hover:text-action"
    >
      Blog
    </NuxtLink>
    <span aria-hidden="true" class="text-line">/</span>
    <span
      class="line-clamp-1 font-medium text-ink"
      aria-current="page"
    >
      {{ title }}
    </span>
  </nav>
</template>
