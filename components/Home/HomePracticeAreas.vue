<script setup lang="ts">
import { ArrowRightIcon, BuildingOffice2Icon, UserGroupIcon, TruckIcon, BookOpenIcon } from '@heroicons/vue/24/outline'

const areas = [
  {
    marker: 'A',
    icon: BuildingOffice2Icon,
    title: 'Comercial & Consumidor',
    tags: ['Demandas ante la SIC', 'Contratos Mercantiles', 'Litigios Comerciales'],
  },
  {
    marker: 'B',
    icon: UserGroupIcon,
    title: 'Derecho de Familia',
    tags: ['Divorcios y Liquidación', 'Custodia y Alimentos', 'Unión Marital de Hecho'],
  },
  {
    marker: 'C',
    icon: TruckIcon,
    title: 'Tránsito & Transporte',
    tags: ['Fotodetecciones y Comparendos', 'Recursos Administrativos', 'Responsabilidad en Accidentes'],
  },
  {
    marker: 'D',
    icon: BookOpenIcon,
    title: 'Civil & Obligaciones',
    tags: ['Cobros Ejecutivos', 'Restitución de Inmuebles', 'Procesos de Pertenencia'],
  },
]
</script>

<template>
  <section id="areas" class="bg-surface-elevated py-16 sm:py-20 border-b border-line">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Concise Header -->
      <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-6 border-b border-line gap-4">
        <div>
          <p class="text-[11px] font-semibold uppercase tracking-[0.2em] text-action mb-2">
            Práctica Complementaria
          </p>
          <h2 class="font-display text-2xl sm:text-3xl lg:text-4xl font-light text-ink tracking-tight">
            Cobertura en instancias
            <span class="font-semibold italic text-ink">civiles y contractuales.</span>
          </h2>
        </div>
        
        <NuxtLink
          to="/landing/asesoria-inicial"
          class="inline-flex items-center gap-1.5 text-sm font-semibold text-action hover:text-action-hover transition-colors group"
        >
          <span>Consultar otra área</span>
          <ArrowRightIcon class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </NuxtLink>
      </div>

      <!-- Clean 4-card Grid with Tasteful Icons -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div
          v-for="area in areas"
          :key="area.marker"
          class="border border-line bg-surface rounded-xl p-5 hover:border-action/50 hover:bg-surface-elevated hover:shadow-sm transition-all duration-200 group"
        >
          <div class="flex items-center justify-between pb-3 mb-3 border-b border-line/60">
            <span class="font-mono text-xs font-semibold text-action">{{ area.marker }}</span>
            <component :is="area.icon" class="w-4 h-4 text-ink-muted group-hover:text-action transition-colors" />
          </div>

          <h3 class="font-display text-base sm:text-lg font-semibold text-ink mb-3 leading-snug">
            {{ area.title }}
          </h3>

          <ul class="space-y-1.5">
            <li
              v-for="(tag, i) in area.tags"
              :key="i"
              class="flex items-center gap-2 text-xs text-ink-muted leading-relaxed"
            >
              <span class="w-1 h-1 rounded-full bg-action/60"></span>
              <span>{{ tag }}</span>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </section>
</template>
