<script setup lang="ts">
import type { BlogPostMeta } from '~/utils/blog'

withDefaults(
  defineProps<{
    posts: BlogPostMeta[]
    showHeader?: boolean
    title?: string
  }>(),
  {
    showHeader: true,
    title: 'Más artículos',
  },
)
</script>

<template>
  <section>
    <div
      v-if="showHeader && posts.length"
      class="mb-6 sm:mb-8 flex items-center justify-between"
    >
      <div class="inline-flex items-center gap-2">
        <span class="h-1.5 w-1.5 rounded-full bg-action" />
        <h2 class="text-xs font-bold uppercase tracking-[0.16em] text-ink-muted">
          {{ title || 'Más artículos' }}
        </h2>
      </div>
      <span class="text-xs text-ink-muted font-medium">
        {{ posts.length }} {{ posts.length === 1 ? 'guía disponible' : 'guías disponibles' }}
      </span>
    </div>

    <div
      v-if="posts.length"
      class="grid auto-rows-fr grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      <div
        v-for="post in posts"
        :key="post.slug"
      >
        <BlogCard :post="post" />
      </div>
    </div>

    <div
      v-else
      class="rounded-2xl border border-dashed border-line bg-surface p-12 text-center"
    >
      <p class="text-sm font-medium text-ink-muted">
        No se encontraron artículos para esta categoría.
      </p>
    </div>
  </section>
</template>
