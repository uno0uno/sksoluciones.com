<script setup>


</script>

<template>
  <div class="min-w-screen min-h-screen h-fit w-full flex flex-col justify-between">

    <NuxtLoadingIndicator />

    <CommonsTheHeader />

    <main class="w-full h-full flex-1">
      <slot />
    </main>

    <CommonsTheFooter />

  </div>
</template>
