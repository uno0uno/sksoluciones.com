<script setup>


</script>

<template>
  <div class="flex min-h-screen flex-col">
    <NuxtLoadingIndicator />
    <CommonsTheHeader />
    <main class="flex-1">
      <slot />
    </main>
    <CommonsTheFooter />
  </div>
</template>
