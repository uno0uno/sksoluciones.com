<script setup lang="ts">
import { useBlogPosts } from '~/composables/useBlogPosts'

definePageMeta({
  layout: 'default',
})

const { public: config } = useRuntimeConfig()
const { posts } = useBlogPosts()

const featuredPost = computed(() => posts.value[0] ?? null)
const gridPosts = computed(() => posts.value.slice(1))

const canonicalUrl = computed(() => {
  const baseUrl = (config.baseUrl || 'http://localhost:3000').replace(/\/$/, '')
  return `${baseUrl}/blog`
})

useHead(() => ({
  title: `Blog Jurídico | ${config.nameSite || 'SK Soluciones'}`,
  meta: [
    {
      name: 'description',
      content: 'Guías jurídicas de SK Soluciones: fraude bancario, centrales de riesgo Datacrédito, hábeas data, sucesiones y patrimonio en Colombia.',
    },
    { property: 'og:title', content: `Blog Jurídico | ${config.nameSite || 'SK Soluciones'}` },
    {
      property: 'og:description',
      content: 'Criterio legal claro y fundamentado para proteger sus derechos y su patrimonio.',
    },
    { property: 'og:url', content: canonicalUrl.value },
    { property: 'og:site_name', content: config.nameSite || 'SK Soluciones' },
    { property: 'og:locale', content: 'es_CO' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: `Blog Jurídico | ${config.nameSite || 'SK Soluciones'}` },
    { name: 'twitter:description', content: 'Guías jurídicas claras y fundamentadas con respaldo legal verificable.' },
  ],
  link: [{ rel: 'canonical', href: canonicalUrl.value }],
}))
</script>

<template>
  <div>
    <!-- Minimalist Editorial Masthead Section -->
    <header class="relative w-full overflow-hidden border-b border-line bg-surface py-8 sm:py-10 lg:py-12 shadow-xs">
      <!-- Subtle architectural grid texture -->
      <div
        class="pointer-events-none absolute inset-0 opacity-[0.035]"
        style="background-image: linear-gradient(var(--color-ink) 1px, transparent 1px), linear-gradient(90deg, var(--color-ink) 1px, transparent 1px); background-size: 32px 32px;"
        aria-hidden="true"
      />
      <div
        class="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface"
        aria-hidden="true"
      />

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <!-- Compact Eyebrow Tag -->
        <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-elevated border border-line text-action text-[10px] sm:text-[11px] font-bold uppercase tracking-wider shadow-xs mb-3">
          <span class="h-1.5 w-1.5 rounded-full bg-action" />
          <span>Blog Jurídico</span>
        </div>

        <!-- Headline — En una sola línea sin saltos, tamaño aumentado con gran presencia editorial -->
        <h1 class="font-display text-3xl sm:text-5xl lg:text-[3.4rem] xl:text-[3.75rem] font-black text-ink tracking-tight leading-none mx-auto whitespace-normal md:whitespace-nowrap">
          Criterio jurídico claro, sin rodeos
        </h1>

        <!-- Minimalist Subtitle -->
        <p class="mt-2.5 text-xs sm:text-sm text-ink-muted leading-relaxed max-w-xl mx-auto">
          Guías legales verificadas sobre fraude bancario, hábeas data, sucesiones y patrimonio.
        </p>
      </div>
    </header>

    <!-- Main Content Section -->
    <main class="w-full bg-surface-elevated pt-6 sm:pt-8 pb-12 sm:pb-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Featured Post -->
        <BlogFeaturedCard
          v-if="featuredPost"
          :post="featuredPost"
        />

        <!-- Grid of remaining articles -->
        <BlogArticleGrid
          v-if="gridPosts.length"
          :posts="gridPosts"
          :show-header="true"
          title="Más guías jurídicas"
        />

        <!-- Empty State (fallback if no posts exist) -->
        <div
          v-else-if="!featuredPost"
          class="rounded-2xl border border-dashed border-line bg-surface p-12 text-center"
        >
          <p class="text-sm font-medium text-ink-muted">
            Pronto publicaremos nuevo contenido jurídico.
          </p>
        </div>

        <!-- Global Bottom Legal Advisory Callout -->
        <section class="mt-12 sm:mt-16 pt-10 border-t border-line">
          <div class="relative overflow-hidden rounded-2xl bg-ink p-6 sm:p-10 text-on-ink shadow-xl border border-line/20">
            <div
              class="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-action/20 blur-3xl"
              aria-hidden="true"
            />
            <div class="relative z-10 max-w-2xl">
              <span class="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-on-ink border border-white/15">
                <span class="h-2 w-2 rounded-full bg-action animate-pulse" />
                Consulta Legal Directa
              </span>
              <h2 class="mt-3.5 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-white tracking-tight">
                ¿Tiene un caso específico que desea evaluar?
              </h2>
              <p class="mt-2.5 text-sm sm:text-base leading-relaxed text-on-ink/90">
                Cuéntenos su situación por escrito. En SK Soluciones revisamos su caso con confidencialidad y le decimos con honestidad si tiene camino legal viable.
              </p>
              <div class="mt-5 flex flex-wrap items-center gap-4">
                <NuxtLink
                  to="/landing/asesoria-inicial#consulta"
                  class="inline-flex items-center justify-center rounded-xl bg-action hover:bg-action-hover px-5 py-3 text-sm font-bold text-white shadow-md transition active:scale-[0.98]"
                >
                  <span>Solicitar revisión inicial</span>
                  <span class="ms-1.5" aria-hidden="true">→</span>
                </NuxtLink>
                <span class="text-xs text-on-ink/70">
                  Primer contacto por escrito. Sin costo inicial por consulta.
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>
