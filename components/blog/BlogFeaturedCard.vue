<script setup lang="ts">
import type { BlogPostMeta } from '~/utils/blog'
import { blogPostImage, formatBlogDate } from '~/utils/blog'

defineProps<{
  post: BlogPostMeta
}>()
</script>

<template>
  <section class="mb-10 sm:mb-14">
    <div class="mb-5 flex items-center gap-3 sm:mb-6">
      <div class="h-5 w-1 rounded-none bg-brand" />
      <h2 class="text-caption font-semibold uppercase tracking-[0.14em] text-ink">
        Lo más reciente
      </h2>
    </div>

    <article
      class="group overflow-hidden rounded-xl border border-line bg-surface-elevated transition-colors hover:border-brand"
    >
      <div class="grid lg:grid-cols-[1.1fr_1fr]">
        <NuxtLink
          :to="`/blog/${post.slug}`"
          class="relative block min-h-[13rem] overflow-hidden sm:min-h-[16rem] lg:min-h-[18rem]"
        >
          <img
            v-if="blogPostImage(post)"
            :src="blogPostImage(post)"
            :alt="post.title"
            class="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
            width="800"
            height="500"
            loading="eager"
            decoding="async"
          >
          <div
            v-else
            class="absolute inset-0 bg-gradient-to-br from-brand-muted via-surface to-surface"
            aria-hidden="true"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-ink/10"
            aria-hidden="true"
          />
        </NuxtLink>

        <div class="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
          <p class="text-caption text-ink-muted">
            {{ formatBlogDate(post.date) }}
            <template v-if="post.tags">
              <span class="mx-2 text-line" aria-hidden="true">·</span>
              <span>{{ post.tags.split(',')[0]?.trim() }}</span>
            </template>
          </p>

          <h3 class="mt-3 text-title text-ink">
            <NuxtLink
              :to="`/blog/${post.slug}`"
              class="text-ink no-underline transition hover:text-brand"
            >
              {{ post.title }}
            </NuxtLink>
          </h3>

          <p class="mt-3 line-clamp-3 text-body text-ink-muted">
            {{ post.description }}
          </p>

          <NuxtLink
            :to="`/blog/${post.slug}`"
            class="mt-6 inline-flex text-caption font-semibold text-brand no-underline hover:text-brand-hover"
          >
            Leer artículo
          </NuxtLink>
        </div>
      </div>
    </article>
  </section>
</template>
