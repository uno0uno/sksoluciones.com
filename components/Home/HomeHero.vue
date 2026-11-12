<script setup lang="ts">
import { ArrowRightIcon, ShieldCheckIcon } from '@heroicons/vue/24/outline'

defineProps<{
  ctaLink?: string
  heroImage?: string
}>()
</script>

<template>
  <section id="inicio" class="relative bg-ink text-on-ink overflow-hidden border-b border-on-ink/10">
    <!-- Base solid ink background -->
    <div class="absolute inset-0 bg-ink"></div>
    <div class="absolute inset-0 opacity-[0.03] pointer-events-none">
      <div class="background-plus"></div>
    </div>

    <!-- Full-bleed background image with seamless mask and multi-stop gradient (ZERO lines, ZERO cuts) -->
    <div class="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden">
      <!-- Image with progressive CSS mask fade -->
      <img
        :src="heroImage || '/images/home/hero-carlos.jpg'"
        alt="Carlos Salamanca - SK Soluciones Legales"
        class="w-full h-full object-cover object-right filter contrast-[105%]"
        style="
          -webkit-mask-image: linear-gradient(to right, transparent 0%, transparent 22%, rgba(0,0,0,0.15) 35%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.85) 70%, black 90%);
          mask-image: linear-gradient(to right, transparent 0%, transparent 22%, rgba(0,0,0,0.15) 35%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.85) 70%, black 90%);
        "
        width="1400"
        height="750"
        loading="eager"
      />

      <!-- Multi-stop horizontal gradient overlay: completely seamless transition from solid ink to transparent -->
      <div
        class="absolute inset-0"
        style="
          background: linear-gradient(
            to right,
            #0B1F33 0%,
            #0B1F33 28%,
            rgba(11, 31, 51, 0.98) 38%,
            rgba(11, 31, 51, 0.90) 48%,
            rgba(11, 31, 51, 0.70) 60%,
            rgba(11, 31, 51, 0.40) 74%,
            rgba(11, 31, 51, 0.15) 88%,
            transparent 100%
          );
        "
      ></div>

      <!-- Additional soft tint on mobile for 100% readability -->
      <div class="absolute inset-0 bg-ink/75 sm:bg-transparent"></div>

      <!-- Vertical soft fades to blend with header and stats bar -->
      <div class="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-ink to-transparent"></div>
      <div class="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink to-transparent"></div>
    </div>

    <!-- Content Container (Left-aligned, crisp, high contrast) -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
      <div class="max-w-2xl lg:max-w-3xl">
        
        <!-- Editorial Masthead Badge -->
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-on-ink/15 bg-ink/70 backdrop-blur-md mb-6">
          <span class="w-1.5 h-1.5 rounded-full bg-[#C9944D]"></span>
          <span class="text-[11px] font-semibold uppercase tracking-[0.2em] text-on-ink-muted">
            Firma Jurídica · Bogotá, Colombia
          </span>
        </div>

        <!-- Headline with Typographic Rhythm and Calibrated AAA Contrast -->
        <h1 class="font-display text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.14] text-on-ink drop-shadow-sm">
          <span class="block">Protegemos su patrimonio</span>
          <span class="block">
            <span class="italic font-normal text-on-ink/90">y su legado</span>
            <span class="text-on-ink"> frente a la</span>
          </span>
          <span class="block font-semibold text-[#C9944D]">banca y el tiempo.</span>
        </h1>

        <!-- Concise Subtitle with Crisp Contrast -->
        <p class="mt-6 text-base sm:text-lg text-on-ink-muted leading-relaxed max-w-xl font-normal drop-shadow-sm">
          Litigio especializado en <span class="text-on-ink font-medium">Fraudes Bancarios</span>, 
          <span class="text-on-ink font-medium">Sucesiones</span> y <span class="text-on-ink font-medium">Ley de Insolvencia</span>. 
          Rigor probatorio y evaluación honesta de la viabilidad de su caso desde el primer contacto.
        </p>

        <!-- Single CTA Button -->
        <div class="mt-8 sm:mt-10">
          <NuxtLink
            :to="ctaLink || '/landing/asesoria-inicial'"
            class="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-action text-white font-semibold rounded-lg hover:bg-action-hover transition-colors text-sm sm:text-base shadow-lg shadow-black/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action"
          >
            <span>Solicitar Asesoría Inicial</span>
            <ArrowRightIcon class="w-4 h-4" />
          </NuxtLink>
        </div>

        <!-- Micro trust indicator -->
        <div class="mt-4 flex items-center gap-2 text-xs text-on-ink-muted">
          <ShieldCheckIcon class="w-4 h-4 text-[#C9944D] shrink-0" />
          <span>Evaluación documental inicial por escrito</span>
        </div>

      </div>
    </div>
  </section>
</template>
