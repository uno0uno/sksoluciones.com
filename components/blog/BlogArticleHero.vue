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

const readingTime = computed(() => {
  const raw = (props.post as any).bodyHtml as string | undefined
  if (!raw) return 5
  const text = raw.replace(/<[^>]*>/g, ' ')
  const words = text.trim().split(/\s+/).length
  return Math.max(3, Math.ceil(words / 200))
})

const authorName = computed(() => props.post.author || 'SK Soluciones')
</script>

<template>
  <header class="relative w-full overflow-hidden border-b border-line bg-surface-elevated py-8 sm:py-12 lg:py-20 shadow-sm">
    <div class="page-container relative z-10">
      <div class="grid w-full grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16 items-start">
        <div class="flex flex-col gap-5 lg:col-span-7">
          <p
            v-if="category"
            class="text-[11px] font-bold uppercase tracking-widest text-action"
          >
            {{ category }}
          </p>
          <h1 class="text-3xl font-black leading-[1.1] tracking-tight text-ink sm:text-4xl md:text-5xl text-balance">
            {{ post.title }}
          </h1>
          <div class="flex flex-wrap items-center gap-3 pt-1">
            <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-action/10 ring-2 ring-line">
              <span class="text-sm font-bold text-action">{{ authorName.charAt(0) }}</span>
            </div>
            <div class="flex flex-wrap items-center gap-1.5 text-sm text-ink-muted">
              <span class="font-semibold text-ink">{{ authorName }}</span>
              <span class="text-line">·</span>
              <time :datetime="post.date">{{ formatBlogDate(post.date) }}</time>
              <span class="text-line">·</span>
              <span>{{ readingTime }} min de lectura</span>
            </div>
          </div>
        </div>
        <div class="hidden lg:col-span-5 lg:block lg:pt-14">
          <p class="border-s-2 border-action ps-5 text-base leading-relaxed text-ink-muted lg:text-lg">
            {{ post.description }}
          </p>
        </div>
      </div>
    </div>
  </header>
</template>
