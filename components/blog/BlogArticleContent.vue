<script setup lang="ts">
defineProps<{
  bodyHtml: string
  slug?: string
}>()
</script>

<template>
  <div class="page-container py-10 sm:py-14">
    <div class="mx-auto max-w-3xl">
      <div
        v-if="$slots.breadcrumb"
        class="mb-8"
      >
        <slot name="breadcrumb" />
      </div>

      <div
        class="prose prose-neutral max-w-none text-body text-ink prose-headings:font-semibold prose-headings:text-ink prose-a:text-brand prose-strong:text-ink prose-blockquote:border-none prose-blockquote:bg-surface-elevated prose-blockquote:not-italic prose-blockquote:px-5 prose-blockquote:py-4 prose-blockquote:rounded-lg prose-blockquote:text-ink prose-blockquote:shadow-none"
        v-html="bodyHtml"
      />

      <div
        v-if="$slots.cta"
        class="mt-12"
      >
        <slot name="cta" />
      </div>
    </div>
  </div>
</template>
