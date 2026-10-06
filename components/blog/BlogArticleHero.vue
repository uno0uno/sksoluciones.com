<script setup lang="ts">
import type { BlogPostMeta } from '~/utils/blog'
import { formatBlogDate } from '~/utils/blog'

const props = defineProps<{
  post: BlogPostMeta
}>()

const category = computed(() => {
  if (!props.post.tags) return ''
  return props.post.tags.split(',')[0]?.trim() || ''
})
</script>

<template>
  <header class="border-b border-line bg-surface-elevated">
    <div class="page-container py-12 sm:py-16">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start lg:gap-16">
        <div class="flex flex-col gap-4 lg:col-span-7">
          <p
            v-if="category"
            class="text-caption font-semibold uppercase tracking-[0.14em] text-brand"
          >
            {{ category }}
          </p>
          <h1 class="text-title font-extrabold tracking-tight text-ink text-balance">
            {{ post.title }}
          </h1>
          <p class="text-caption text-ink-muted">
            {{ formatBlogDate(post.date) }}
          </p>
        </div>
        <div class="lg:col-span-5 lg:pt-16">
          <p class="border-s-2 border-brand ps-5 text-body leading-relaxed text-ink-muted">
            {{ post.description }}
          </p>
        </div>
      </div>
    </div>
  </header>
</template>
