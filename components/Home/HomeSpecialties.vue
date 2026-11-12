<script setup lang="ts">
import { ArrowRightIcon, ShieldCheckIcon, DocumentTextIcon, ArrowPathIcon } from '@heroicons/vue/24/outline'

const specialties = [
  {
    number: '01',
    tag: 'Consumidor Financiero',
    title: 'Fraudes Bancarios',
    summary: 'Recuperamos su dinero cuando el banco omitió sus protocolos de seguridad y custodia.',
    image: '/images/home/fraude-bancario.jpg',
    imageAlt: 'Extracto bancario con movimientos no reconocidos en revisión jurídica',
    icon: ShieldCheckIcon,
    tags: ['Vishing & Suplantación', 'Demanda ante SFC', 'Retiro de DataCrédito'],
    ctaText: 'Evaluar caso de fraude',
  },
  {
    number: '02',
    tag: 'Familia & Patrimonio',
    title: 'Sucesiones y Patrimonio',
    summary: 'Transmisión ordenada de bienes en vida o por vía sucesoral, optimizando el impacto fiscal.',
    image: '/images/home/sucesiones-patrimonio.jpg',
    imageAlt: 'Escritura de transferencia patrimonial y llaves sobre plano familiar',
    icon: DocumentTextIcon,
    tags: ['Notaría o Juez', 'Art. 307 E.T.', 'Testamentos Solemnes'],
    ctaText: 'Consultar trámite sucesoral',
  },
  {
    number: '03',
    tag: 'Reorganización Personal',
    title: 'Ley de Insolvencia',
    summary: 'Negociación legal de pasivos para suspender remates, embargos y recuperar su estabilidad.',
    image: '/images/home/insolvencia-economica.jpg',
    imageAlt: 'Balanza de justicia y libro sobre prescripción y tiempo procesal',
    icon: ArrowPathIcon,
    tags: ['Ley 1564 de 2012', 'Freno a Embargos', 'Acuerdo de Pago'],
    ctaText: 'Evaluar insolvencia',
  },
]
</script>

<template>
  <section id="especialidades" class="bg-surface py-16 sm:py-24 border-b border-line">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Masthead -->
      <div class="max-w-3xl mb-12 sm:mb-16">
        <div class="flex items-center gap-2.5 mb-3">
          <span class="h-px w-6 bg-action"></span>
          <p class="text-[11px] font-semibold uppercase tracking-[0.2em] text-action">
            Áreas Principales
          </p>
        </div>
        <h2 class="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-ink tracking-tight leading-tight">
          Tres frentes con nuestra
          <span class="font-semibold italic text-ink">mayor fuerza probatoria.</span>
        </h2>
        <p class="mt-3 text-base text-ink-muted leading-relaxed font-normal">
          Especialización técnica donde el rigor procesal define la recuperación de su patrimonio.
        </p>
      </div>

      <!-- Dossier Grid with Images & Tasteful Icons -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        <article
          v-for="specialty in specialties"
          :key="specialty.number"
          class="bg-surface-elevated border border-line rounded-xl overflow-hidden flex flex-col justify-between hover:border-action/60 transition-colors duration-200 shadow-[0_2px_8px_rgba(11,31,51,0.03)] hover:shadow-md group"
        >
          <div>
            <!-- Card Image Container (Clean, without dizzy zoom) -->
            <div class="relative h-44 sm:h-48 overflow-hidden bg-ink/5 border-b border-line">
              <img
                :src="specialty.image"
                :alt="specialty.imageAlt"
                class="w-full h-full object-cover"
                width="600"
                height="315"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent"></div>
              
              <!-- Floating Top Badges -->
              <div class="absolute top-3 left-3 right-3 flex items-center justify-between">
                <span class="font-mono text-[11px] font-bold tracking-wider text-white bg-ink/80 px-2.5 py-0.5 rounded border border-white/10">
                  {{ specialty.number }}
                </span>
                <span class="text-[10px] font-mono uppercase tracking-wider text-on-ink bg-action px-2 py-0.5 rounded font-medium flex items-center gap-1.5">
                  <component :is="specialty.icon" class="w-3 h-3 text-white" />
                  {{ specialty.tag }}
                </span>
              </div>
            </div>

            <!-- Card Content -->
            <div class="p-6 sm:p-7">
              <h3 class="font-display text-xl sm:text-2xl font-semibold text-ink group-hover:text-action transition-colors leading-snug">
                {{ specialty.title }}
              </h3>

              <p class="mt-2.5 text-sm text-ink-muted leading-relaxed">
                {{ specialty.summary }}
              </p>

              <!-- Quick Tag Pills -->
              <div class="mt-5 pt-4 border-t border-line/60 flex flex-wrap gap-1.5">
                <span
                  v-for="(tag, idx) in specialty.tags"
                  :key="idx"
                  class="text-[11px] font-medium text-ink bg-surface border border-line px-2.5 py-1 rounded"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>

          <!-- Bottom Action Link -->
          <div class="px-6 pb-6 pt-2">
            <NuxtLink
              to="/landing/asesoria-inicial"
              class="inline-flex items-center gap-2 text-sm font-semibold text-ink group-hover:text-action transition-colors"
            >
              <span>{{ specialty.ctaText }}</span>
              <ArrowRightIcon class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </NuxtLink>
          </div>
        </article>
      </div>

    </div>
  </section>
</template>
