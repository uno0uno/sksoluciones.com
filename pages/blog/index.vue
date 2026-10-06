<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

const { public: config } = useRuntimeConfig()
const { posts } = useBlogPosts()

const featured = computed(() => posts.value[0] ?? null)
const rest = computed(() => posts.value.slice(1))

const canonicalUrl = computed(() => {
  const baseUrl = config.baseUrl || 'http://localhost:3000'
  return `${baseUrl}/blog`
})

useHead({
  title: `Blog | ${config.nameSite || 'SK Soluciones'}`,
  meta: [
    {
      name: 'description',
      content: 'Artículos sobre fraude bancario, sucesiones, planificación patrimonial y derecho civil en Colombia.',
    },
    { property: 'og:title', content: `Blog | ${config.nameSite || 'SK Soluciones'}` },
    {
      property: 'og:description',
      content: 'Guías legales claras para proteger tu patrimonio y tus derechos.',
    },
    { property: 'og:url', content: canonicalUrl },
  ],
  link: [{ rel: 'canonical', href: canonicalUrl }],
})
</script>

<template>
  <div>
    <section class="border-b border-line bg-surface-elevated">
      <div class="page-container py-14 sm:py-16">
        <p class="text-caption font-semibold uppercase tracking-[0.14em] text-brand">
          Blog
        </p>
        <h1 class="mt-3 text-title text-ink">
          Derecho claro, sin rodeos
        </h1>
        <p class="mt-4 max-w-2xl text-body text-ink-muted">
          Guías cortas de SK Soluciones: fraude bancario, sucesiones y patrimonio para tomar decisiones con respaldo legal.
        </p>
      </div>
    </section>

    <section class="page-container py-12 sm:py-16">
      <BlogFeaturedCard
        v-if="featured"
        v-reveal
        :post="featured"
      />
      <BlogArticleGrid
        v-if="rest.length"
        :posts="rest"
        :show-header="true"
      />
      <p
        v-else-if="!featured"
        class="rounded-xl border border-dashed border-line bg-surface-elevated py-16 text-center text-body text-ink-muted"
      >
        Pronto publicaremos nuevo contenido.
      </p>
    </section>
  </div>
</template>
