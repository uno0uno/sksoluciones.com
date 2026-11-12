<script setup lang="ts">
import type { BlogPostMeta } from '~/utils/blog'
import { formatBlogDate } from '~/utils/blog'
import { ArrowRightIcon } from '@heroicons/vue/24/outline'

defineProps<{
  posts: BlogPostMeta[]
  sectionImage?: string
}>()
</script>

<template>
  <section id="blog" class="bg-surface py-16 sm:py-24 border-b border-line">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Bloque Superior Split (Exacto a El Diferencial) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        
        <!-- Columna Izquierda: Encabezado y Contexto -->
        <div class="lg:col-span-7">
          <p class="text-[11px] font-semibold uppercase tracking-[0.2em] text-action mb-3">
            Criterio Jurídico & Análisis
          </p>
          
          <h2 class="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-ink tracking-tight leading-[1.15]">
            Criterio técnico y
            <span class="block font-semibold text-ink">análisis legal antes de actuar.</span>
          </h2>

          <p class="mt-5 text-base sm:text-lg text-ink-muted leading-relaxed max-w-xl font-normal">
            Notas y guías prácticas en <span class="text-ink font-semibold">fraudes bancarios</span>, 
            <span class="text-ink font-semibold">sucesiones</span> y <span class="text-ink font-semibold">protección patrimonial</span>: 
            análisis de jurisprudencia, términos procesales y cómo defender sus derechos con respaldo normativo.
          </p>

          <div class="mt-6">
            <NuxtLink
              to="/blog"
              class="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-ink hover:text-action transition-colors group"
            >
              <span>Ver todas las guías y artículos</span>
              <ArrowRightIcon class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </NuxtLink>
          </div>
        </div>

        <!-- Columna Derecha: Fotografía Editorial de la Sección -->
        <div class="lg:col-span-5">
          <div class="relative rounded-2xl overflow-hidden border border-line bg-surface-elevated aspect-[4/3] shadow-md group">
            <img
              :src="sectionImage || '/images/home/blog-criterio.jpg'"
              alt="Biblioteca jurídica y jurisprudencia colombiana - Criterio SK"
              class="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
        </div>

      </div>

      <!-- Línea Divisoria Fina (Exacta a El Diferencial) -->
      <div class="border-t border-line my-12 sm:my-16"></div>

      <!-- Lista Editorial de Artículos (Limpia, tipográfica, sin tarjetas cuadradas) -->
      <div class="divide-y divide-line max-w-4xl">
        <article
          v-for="post in posts.slice(0, 3)"
          :key="post.slug"
          class="py-7 first:pt-0 last:pb-0 group"
        >
          <!-- Fecha -->
          <p class="text-xs sm:text-sm text-ink-muted/80 font-normal mb-2">
            {{ formatBlogDate(post.date) }}
          </p>

          <!-- Titular del Artículo -->
          <h3 class="font-display text-xl sm:text-2xl lg:text-[1.65rem] font-semibold text-ink group-hover:text-action transition-colors leading-snug">
            <NuxtLink :to="`/blog/${post.slug}`" class="block">
              {{ post.title }}
            </NuxtLink>
          </h3>

          <!-- Bajada / Resumen -->
          <p class="mt-2 text-sm sm:text-base text-ink-muted leading-relaxed line-clamp-2">
            {{ post.description }}
          </p>
        </article>
      </div>

    </div>
  </section>
</template>
