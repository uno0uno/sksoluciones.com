<script setup lang="ts">
defineProps<{
  src: string
  alt: string
}>()
</script>

<template>
  <div class="page-container pt-10 sm:pt-12">
    <div class="overflow-hidden rounded-xl border border-line bg-surface-elevated">
      <img
        :src="src"
        :alt="alt"
        class="aspect-[16/9] w-full object-cover"
        width="1200"
        height="675"
        loading="eager"
        decoding="async"
      >
    </div>
  </div>
</template>
