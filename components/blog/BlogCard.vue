<script setup lang="ts">
import type { BlogPostMeta } from '~/utils/blog'
import { blogPostImage, formatBlogDate } from '~/utils/blog'

const props = defineProps<{
  post: BlogPostMeta
}>()

const category = computed(() => {
  if (!props.post.tags) return 'Guía'
  return props.post.tags.split(',')[0]?.trim() || 'Guía'
})

const authorName = computed(() => props.post.author || 'Carlos Salamanca')
</script>

<template>
  <article
    class="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface hover:border-action/50 transition-all duration-300 shadow-xs hover:shadow-md"
  >
    <!-- Card Image -->
    <NuxtLink
      :to="`/blog/${post.slug}`"
      class="relative block h-48 sm:h-52 w-full shrink-0 overflow-hidden bg-surface-elevated"
      aria-label="Ver artículo"
    >
      <img
        v-if="blogPostImage(post)"
        :src="blogPostImage(post)"
        :alt="post.coverAlt || post.title"
        class="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        width="640"
        height="360"
        loading="lazy"
        decoding="async"
      >
      <div
        v-else
        class="h-full w-full bg-gradient-to-br from-surface via-surface-elevated to-surface flex items-center justify-center text-ink-muted/30 font-display text-2xl"
      >
        SK
      </div>

      <!-- Category Pill Badge Overlay -->
      <span class="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-elevated/95 backdrop-blur-xs border border-line text-[10px] font-bold uppercase tracking-wider text-action shadow-xs">
        <span class="h-1 w-1 rounded-full bg-action" />
        {{ category }}
      </span>
    </NuxtLink>

    <!-- Card Content -->
    <div class="flex flex-1 flex-col justify-between p-5 sm:p-6 bg-surface">
      <div>
        <time
          :datetime="post.date"
          class="text-xs text-ink-muted"
        >
          {{ formatBlogDate(post.date) }}
        </time>

        <h3 class="mt-2 font-display text-lg sm:text-[1.3rem] font-extrabold leading-[1.25] tracking-tight text-ink group-hover:text-action transition-colors line-clamp-2">
          <NuxtLink
            :to="`/blog/${post.slug}`"
            class="text-ink no-underline group-hover:text-action transition-colors"
          >
            {{ post.title }}
          </NuxtLink>
        </h3>

        <p class="mt-2.5 line-clamp-2 text-sm text-ink-muted leading-relaxed">
          {{ post.description }}
        </p>
      </div>

      <!-- Card Footer -->
      <div class="mt-5 pt-4 border-t border-line/60 flex items-center justify-between text-xs">
        <span class="text-ink-muted font-medium truncate max-w-[140px]">
          {{ authorName }}
        </span>

        <NuxtLink
          :to="`/blog/${post.slug}`"
          class="inline-flex items-center gap-1 font-bold text-action hover:text-action-hover transition-colors shrink-0"
        >
          <span>Leer artículo</span>
          <span aria-hidden="true">→</span>
        </NuxtLink>
      </div>
    </div>
  </article>
</template>
