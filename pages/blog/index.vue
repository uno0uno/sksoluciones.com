<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

const { public: config } = useRuntimeConfig()
const { posts } = useBlogPosts()

const featured = computed(() => posts.value[0] ?? null)
const rest = computed(() => posts.value.slice(1))

const canonicalUrl = computed(() => {
  const baseUrl = (config.baseUrl || 'http://localhost:3000').replace(/\/$/, '')
  return `${baseUrl}/blog`
})

useHead(() => ({
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
    { property: 'og:url', content: canonicalUrl.value },
    { property: 'og:site_name', content: config.nameSite || 'SK Soluciones' },
    { property: 'og:locale', content: 'es_CO' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: `Blog | ${config.nameSite || 'SK Soluciones'}` },
    { name: 'twitter:description', content: 'Guías legales claras para proteger tu patrimonio y tus derechos.' },
  ],
  link: [{ rel: 'canonical', href: canonicalUrl.value }],
}))
</script>

<template>
  <div>
    <section class="relative bg-surface-elevated overflow-hidden border-b border-line">
      <div class="absolute inset-0 dot-grid opacity-20" aria-hidden="true" />
      <div class="relative page-container pt-16 pb-12 lg:pt-20 lg:pb-16 text-center">
        <div class="inline-flex items-center gap-2 mb-5">
          <span class="w-5 h-px bg-action/40" />
          <span class="text-xs font-bold uppercase tracking-[0.25em] text-ink-muted">Blog</span>
          <span class="w-5 h-px bg-action/40" />
        </div>
        <h1 class="font-display text-[1.85rem] sm:text-4xl lg:text-[3.5rem] font-black text-ink tracking-tight leading-tight uppercase">
          Derecho claro, sin rodeos
        </h1>
        <p class="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-ink-muted leading-relaxed">
          Guías cortas de SK Soluciones: fraude bancario, sucesiones y patrimonio para tomar decisiones con respaldo legal.
        </p>
      </div>
    </section>

    <section class="page-container py-12 sm:py-16">
      <BlogFeaturedCard
        v-if="featured"
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
