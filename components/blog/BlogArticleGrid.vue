<script setup lang="ts">
import type { BlogPostMeta } from '~/utils/blog'

withDefaults(
  defineProps<{
    posts: BlogPostMeta[]
    showHeader?: boolean
  }>(),
  {
    showHeader: true,
  },
)
</script>

<template>
  <section>
    <div
      v-if="showHeader && posts.length"
      class="mb-6 flex items-center gap-3 sm:mb-8"
    >
      <div class="h-5 w-1 rounded-none bg-line" />
      <h2 class="text-caption font-semibold uppercase tracking-[0.14em] text-ink-muted">
        Más artículos
      </h2>
    </div>

    <div
      v-if="posts.length"
      class="grid auto-rows-fr grid-cols-1 items-stretch gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
    >
      <div
        v-for="post in posts"
        :key="post.slug"
      >
        <BlogCard :post="post" />
      </div>
    </div>

    <p
      v-else
      class="rounded-xl border border-dashed border-line bg-surface-elevated py-16 text-center text-body text-ink-muted"
    >
      Pronto publicaremos nuevo contenido.
    </p>
  </section>
</template>
