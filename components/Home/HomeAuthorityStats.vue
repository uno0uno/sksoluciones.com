<script setup lang="ts">
import { ShieldCheckIcon, ScaleIcon, BuildingLibraryIcon } from '@heroicons/vue/24/outline'

const stats = [
  {
    value: '+50',
    title: 'Casos activos contra la banca',
    detail: 'Reclamaciones y demandas por fraudes y suplantación.',
    icon: ShieldCheckIcon,
  },
  {
    value: '10+',
    title: 'Años de práctica procesal',
    detail: 'Experiencia litigante en instancias judiciales y administrativas.',
    icon: ScaleIcon,
  },
  {
    value: 'SFC',
    title: 'Litigio ante Superfinanciera',
    detail: 'Representación técnica en protección al consumidor financiero.',
    icon: BuildingLibraryIcon,
  },
]
</script>

<template>
  <section class="bg-ink text-on-ink border-b border-on-ink/10 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      
      <!-- Stats Grid with Hairline Editorial Dividers -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 md:divide-x divide-on-ink/10">
        <div
          v-for="(stat, index) in stats"
          :key="index"
          class="flex flex-col justify-between md:px-8 first:md:pl-0 last:md:pr-0"
        >
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="font-display text-4xl sm:text-5xl font-light text-action tracking-tight">
                {{ stat.value }}
              </span>
              <div class="w-8 h-8 rounded-lg bg-on-ink/5 border border-on-ink/10 flex items-center justify-center">
                <component :is="stat.icon" class="w-4 h-4 text-action" />
              </div>
            </div>
            <h3 class="text-sm font-semibold text-on-ink">
              {{ stat.title }}
            </h3>
            <p class="mt-1 text-xs text-on-ink-muted leading-relaxed">
              {{ stat.detail }}
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
