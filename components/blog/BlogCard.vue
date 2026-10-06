<script setup lang="ts">
import type { BlogPostMeta } from '~/utils/blog'
import { blogPostImage, formatBlogDate } from '~/utils/blog'

defineProps<{
  post: BlogPostMeta
}>()
</script>

<template>
  <article
    class="group flex h-full min-h-0 flex-col overflow-hidden rounded-xl border border-line bg-surface-elevated transition-colors hover:border-brand"
  >
    <NuxtLink
      :to="`/blog/${post.slug}`"
      class="relative block h-40 shrink-0 overflow-hidden sm:h-44"
    >
      <img
        v-if="blogPostImage(post)"
        :src="blogPostImage(post)"
        :alt="post.title"
        class="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
        width="640"
        height="360"
        loading="lazy"
        decoding="async"
      >
      <div
        v-else
        class="absolute inset-0 bg-gradient-to-br from-brand-muted via-surface to-surface"
        aria-hidden="true"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-ink/20 to-transparent"
        aria-hidden="true"
      />
    </NuxtLink>

    <div class="flex flex-1 flex-col p-5 sm:p-6">
      <p class="text-caption text-ink-muted">
        {{ formatBlogDate(post.date) }}
      </p>
      <h3 class="mt-2 text-lead text-ink">
        <NuxtLink
          :to="`/blog/${post.slug}`"
          class="text-ink no-underline transition hover:text-brand"
        >
          {{ post.title }}
        </NuxtLink>
      </h3>
      <p class="mt-2 line-clamp-2 flex-1 text-caption text-ink-muted">
        {{ post.description }}
      </p>
      <NuxtLink
        :to="`/blog/${post.slug}`"
        class="mt-4 inline-flex text-caption font-semibold text-brand no-underline hover:text-brand-hover"
      >
        Leer artículo
      </NuxtLink>
    </div>
  </article>
</template>
