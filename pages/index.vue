<script setup lang="ts">
import { computed } from 'vue'
import { listBlogPosts } from '~/utils/blog'

definePageMeta({
  layout: 'landingv2',
})

useSeoMeta({
  title: 'SK Soluciones Legales | Abogado en Fraude Bancario, Sucesiones y Patrimonial | Bogotá, Colombia',
  description: 'Firma jurídica especializada en litigio por fraudes bancarios, sucesiones notariales y judiciales, planeación patrimonial e insolvencia económica en Colombia.',
  ogTitle: 'SK Soluciones Legales | Especialistas en Fraude Bancario y Sucesiones',
  ogDescription: 'Defensa jurídica estratégica en litigio financiero, transmisión patrimonial y reorganización de deudas en Colombia.',
  ogType: 'website',
})

const blogPosts = computed(() => listBlogPosts().slice(0, 3))
</script>

<template>
  <div class="w-full">
    <!-- Hero Masthead Section -->
    <HomeHero />

    <!-- Authority Stats & Track Record Band -->
    <HomeAuthorityStats />

    <!-- Core Specialties (Fraudes Bancarios, Sucesiones, Insolvencia) -->
    <HomeSpecialties />

    <!-- Complementary Practice Areas Matrix -->
    <HomePracticeAreas />

    <!-- Corporate & Business Legal Shielding -->
    <HomeCorporate />

    <!-- Recent Legal Publications & Analysis -->
    <HomeBlogSection :posts="blogPosts" />

    <!-- Diagnostic Consultation & Procedural Evaluation CTA -->
    <HomeContactCta />
  </div>
</template>
