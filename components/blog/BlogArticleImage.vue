<script setup lang="ts">
defineProps<{
  src: string
  alt: string
}>()
</script>

<template>
  <div class="w-full bg-surface/50 border-b border-line/40">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
      <div class="aspect-video max-h-[480px] w-full overflow-hidden rounded-2xl border border-line shadow-sm bg-surface">
        <img
          :src="src"
          :alt="alt"
          class="h-full w-full object-cover"
          width="1200"
          height="675"
          loading="eager"
          decoding="async"
        >
      </div>
    </div>
  </div>
</template>
