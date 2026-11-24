<script setup lang="ts">
import type { BlogPostMeta } from '~/utils/blog'
import { blogPostImage, formatBlogDate } from '~/utils/blog'

const props = defineProps<{
  post: BlogPostMeta
}>()

const category = computed(() => {
  if (!props.post.tags) return 'Guía Jurídica'
  return props.post.tags.split(',')[0]?.trim() || 'Guía Jurídica'
})

const authorName = computed(() => props.post.author || 'Carlos Salamanca')
</script>

<template>
  <section class="mb-8 sm:mb-10">
    <div class="mb-5 flex items-center justify-between">
      <div class="inline-flex items-center gap-2">
        <span class="h-2 w-2 rounded-full bg-action animate-pulse" />
        <span class="text-xs font-bold uppercase tracking-[0.16em] text-action">
          Artículo Destacado
        </span>
      </div>
      <span class="text-xs text-ink-muted hidden sm:inline-block">
        Firma Jurídica SK Soluciones
      </span>
    </div>

    <article
      class="group relative overflow-hidden rounded-2xl border border-line bg-surface hover:border-action/40 transition-all duration-300 shadow-sm hover:shadow-md"
    >
      <div class="grid lg:grid-cols-12 items-stretch">
        <!-- Image Column -->
        <NuxtLink
          :to="`/blog/${post.slug}`"
          class="relative block h-64 sm:h-80 lg:h-full min-h-[18rem] w-full overflow-hidden bg-surface-elevated lg:col-span-7"
          aria-label="Leer artículo destacado"
        >
          <img
            v-if="blogPostImage(post)"
            :src="blogPostImage(post)"
            :alt="post.coverAlt || post.title"
            class="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            width="800"
            height="500"
            loading="eager"
            decoding="async"
          >
          <div
            v-else
            class="h-full w-full bg-gradient-to-br from-surface via-surface-elevated to-surface flex items-center justify-center text-ink-muted/40 font-display text-4xl"
          >
            SK
          </div>
          <!-- Subtle vignette gradient -->
          <div
            class="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-ink/10"
            aria-hidden="true"
          />
        </NuxtLink>

        <!-- Content Column -->
        <div class="flex flex-col justify-between p-6 sm:p-8 lg:p-10 lg:col-span-5 bg-surface">
          <div>
            <!-- Category and Date -->
            <div class="flex flex-wrap items-center gap-2 text-xs text-ink-muted mb-3">
              <span class="font-bold uppercase tracking-wider text-action">
                {{ category }}
              </span>
              <span class="text-line" aria-hidden="true">·</span>
              <time :datetime="post.date">{{ formatBlogDate(post.date) }}</time>
            </div>

            <!-- Headline — Peso editorial dominante -->
            <h2 class="font-display text-2xl sm:text-3xl lg:text-[2.25rem] xl:text-[2.5rem] font-black leading-[1.12] tracking-tight text-ink group-hover:text-action transition-colors">
              <NuxtLink
                :to="`/blog/${post.slug}`"
                class="text-ink no-underline group-hover:text-action transition-colors"
              >
                {{ post.title }}
              </NuxtLink>
            </h2>

            <!-- Excerpt -->
            <p class="mt-3.5 text-sm sm:text-base leading-relaxed text-ink-muted line-clamp-3">
              {{ post.description }}
            </p>
          </div>

          <!-- Footer Metadata -->
          <div class="mt-6 pt-5 border-t border-line/60 flex items-center justify-between">
            <div class="flex items-center gap-2.5">
              <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface-elevated ring-1 ring-line text-action font-display text-xs font-bold">
                {{ authorName.charAt(0) }}
              </div>
              <span class="text-xs font-medium text-ink">{{ authorName }}</span>
            </div>

            <NuxtLink
              :to="`/blog/${post.slug}`"
              class="inline-flex items-center gap-1.5 text-xs font-bold text-action hover:text-action-hover transition-colors"
            >
              <span>Leer guía</span>
              <span aria-hidden="true">→</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>
