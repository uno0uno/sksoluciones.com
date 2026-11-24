<script setup lang="ts">
import type { BlogPostMeta } from '~/utils/blog'
import { formatBlogDate } from '~/utils/blog'

const props = defineProps<{
  post: BlogPostMeta
}>()

const category = computed(() => {
  if (!props.post.tags) return 'Guía Jurídica'
  return props.post.tags.split(',')[0]?.trim() || 'Guía Jurídica'
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
  <header class="relative w-full overflow-hidden border-b border-line bg-surface py-10 sm:py-14 lg:py-20 shadow-xs">
    <!-- Subtle architectural grid texture -->
    <div
      class="pointer-events-none absolute inset-0 opacity-[0.035]"
      style="background-image: linear-gradient(var(--color-ink) 1px, transparent 1px), linear-gradient(90deg, var(--color-ink) 1px, transparent 1px); background-size: 32px 32px;"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface"
      aria-hidden="true"
    />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
        <!-- Eyebrow Category -->
        <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-elevated border border-line text-action text-[11px] sm:text-xs font-bold uppercase tracking-widest shadow-xs">
          <span class="h-1.5 w-1.5 rounded-full bg-action" />
          {{ category }}
        </span>

        <!-- Editorial Title — Máximo peso y presencia -->
        <h1
          class="font-display text-[2.35rem] sm:text-5xl md:text-6xl font-black leading-[1.05] tracking-tight text-ink text-center text-balance"
          itemprop="headline"
        >
          {{ post.title }}
        </h1>

        <!-- Author, Date, Reading time -->
        <div class="flex items-center justify-center gap-3 pt-1">
          <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface-elevated ring-2 ring-line text-action font-display text-sm font-bold shadow-xs">
            {{ authorName.charAt(0) }}
          </div>
          <div class="flex flex-wrap items-center justify-center gap-1.5 text-xs sm:text-sm text-ink-muted">
            <span class="relative inline-block font-semibold text-ink" itemprop="author">
              {{ authorName }}
              <span class="pointer-events-none absolute -bottom-1 left-0 w-full h-[2.5px] bg-action/50 rounded-full" style="transform: rotate(-0.5deg);" aria-hidden="true" />
            </span>
            <span class="text-line">·</span>
            <time :datetime="post.date" itemprop="datePublished">
              {{ formatBlogDate(post.date) }}
            </time>
            <span class="text-line">·</span>
            <span>{{ readingTime }} min de lectura</span>
          </div>
        </div>

        <!-- Description (Dek) -->
        <p
          v-if="post.description"
          class="max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-ink-muted text-center pt-1"
          itemprop="description"
        >
          {{ post.description }}
        </p>
      </div>
    </div>
  </header>
</template>
