<script setup lang="ts">
import { ArrowRightIcon, BuildingOffice2Icon, BriefcaseIcon, SparklesIcon } from '@heroicons/vue/24/outline'

const corporateServices = [
  {
    index: '01',
    icon: BuildingOffice2Icon,
    title: 'Sociedades & SAS',
    summary: 'Constitución, acuerdos de accionistas y reformas estatutarias sin vacíos legales.',
  },
  {
    index: '02',
    icon: BriefcaseIcon,
    title: 'Laboral Preventivo',
    summary: 'Contratación a la medida, reglamentos internos y gestión de descargos para evitar litigios.',
  },
  {
    index: '03',
    icon: SparklesIcon,
    title: 'Marcas ante la SIC',
    summary: 'Registro, vigilancia marcaria y protección de signos distintivos y activos intangibles.',
  },
]
</script>

<template>
  <section id="corporativo" class="bg-ink text-on-ink py-16 sm:py-24 border-b border-on-ink/10 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        
        <!-- Left: Concise Corporate Statement -->
        <div class="lg:col-span-5">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-on-ink/15 bg-on-ink/5 mb-5">
            <span class="w-1.5 h-1.5 rounded-full bg-action"></span>
            <span class="text-[11px] font-semibold uppercase tracking-[0.2em] text-action">
              Empresas & Negocios
            </span>
          </div>

          <h2 class="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-on-ink tracking-tight leading-tight">
            Blindaje legal para
            <span class="italic font-normal text-on-ink">proteger el valor</span>
            de su compañía.
          </h2>

          <p class="mt-4 text-sm sm:text-base text-on-ink-muted leading-relaxed">
            Acompañamiento preventivo en contratación, gobierno corporativo y propiedad industrial para mitigar contingencias operativas.
          </p>

          <div class="mt-7">
            <NuxtLink
              to="/landing/asesoria-inicial"
              class="inline-flex items-center gap-2 px-6 py-3 bg-action text-white font-semibold rounded-lg hover:bg-action-hover transition-colors text-sm shadow-sm"
            >
              <span>Diagnóstico corporativo</span>
              <ArrowRightIcon class="w-4 h-4" />
            </NuxtLink>
          </div>
        </div>

        <!-- Right: 3 Quick Corporate Capsules with Icons -->
        <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div
            v-for="service in corporateServices"
            :key="service.index"
            class="border border-on-ink/15 bg-on-ink/[0.03] hover:bg-on-ink/[0.07] hover:border-action/40 rounded-xl p-5 transition-all duration-200 flex flex-col justify-between group"
          >
            <div>
              <div class="flex items-center justify-between mb-3">
                <span class="font-mono text-xs font-semibold text-action">
                  {{ service.index }}.
                </span>
                <component :is="service.icon" class="w-4 h-4 text-on-ink-muted group-hover:text-action transition-colors" />
              </div>
              <h3 class="font-display text-base font-semibold text-on-ink mb-2">
                {{ service.title }}
              </h3>
              <p class="text-xs text-on-ink-muted leading-relaxed">
                {{ service.summary }}
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
