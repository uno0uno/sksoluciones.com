<script setup lang="ts">
defineProps<{
  src: string
  alt: string
}>()
</script>

<template>
  <div class="w-full bg-surface">
    <div class="page-container py-6 lg:py-8">
      <div class="aspect-video max-h-[480px] w-full overflow-hidden rounded-xl shadow-sm">
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
