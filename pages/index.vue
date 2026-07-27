<script setup>
import { ShieldCheckIcon, DocumentTextIcon, ArrowPathIcon, ScaleIcon, UserGroupIcon, TruckIcon, BuildingOffice2Icon, BookOpenIcon } from '@heroicons/vue/24/outline';

definePageMeta({
  layout: 'landingv2',
});

useSeoMeta({
  title: 'SK Soluciones Legales | Abogado en Fraude Bancario, Sucesiones y Patrimonial | Bogotá, Colombia',
});

const authorityStats = [
  { value: '+50', label: 'casos activos contra la banca colombiana' },
  { value: '10+', label: 'años de experiencia como abogado litigante' },
  { value: 'SFC', label: 'litigio contra las principales entidades del sistema financiero' },
];

const specialties = [
  {
    icon: ShieldCheckIcon,
    title: 'Protección contra Fraudes Bancarios',
    description: 'Recuperamos su dinero cuando el banco no lo protegió. Litigio ante la Superintendencia Financiera de Colombia contra los principales bancos del país.',
    items: [
      'Vishing, phishing, pharming y SIM swapping.',
      'Cambiazo de tarjeta, PSE fraudulento y transferencias no autorizadas.',
      'Defensa del consumidor financiero ante la SFC.',
      'Retiro de reportes negativos en DataCrédito y TransUnión.',
    ],
  },
  {
    icon: DocumentTextIcon,
    title: 'Derecho Sucesoral y Planeación Patrimonial',
    description: 'Protegemos su patrimonio hoy para asegurar el futuro de su familia. Sucesiones, planificación patrimonial y optimización tributaria de herencias.',
    items: [
      'Sucesiones notariales y judiciales.',
      'Transferencia de bienes en vida: donación, compraventa familiar, SAS familiar, fideicomiso civil.',
      'Testamentos, testamentos vitales y planificación patrimonial.',
      'Optimización de ganancia ocasional por herencia (Art. 307 E.T.).',
    ],
  },
  {
    icon: ArrowPathIcon,
    title: 'Ley de Insolvencia y Recuperación Financiera',
    description: 'Reorganización de deudas y protección legal frente a acreedores. Insolvencia de persona natural (Ley 1564) y reorganización empresarial.',
    items: [
      'Insolvencia de Persona Natural No Comerciante: Negociación de deudas y acuerdos de pago.',
      'Insolvencia Empresarial: Procesos de reorganización y liquidación para comerciantes y empresas en crisis.',
    ],
  },
];

const practiceAreas = [
  {
    icon: ScaleIcon,
    title: 'Derecho Comercial y Protección al Consumidor',
    items: [
      'Demandas ante la SIC: Representación por efectividad de garantías y publicidad engañosa.',
      'Asesoría y revisión de contratos mercantiles.',
      'Litigios comerciales.',
    ],
  },
  {
    icon: UserGroupIcon,
    title: 'Derecho de Familia',
    items: [
      'Divorcios, cesación de efectos civiles y liquidación de sociedad conyugal.',
      'Cuotas alimentarias, custodia y regulación de visitas.',
      'Declaración de uniones maritales de hecho.',
    ],
  },
  {
    icon: TruckIcon,
    title: 'Derecho de Tránsito y Transporte',
    items: [
      'Defensa técnica en comparendos y fotodetecciones.',
      'Procesos administrativos ante organismos de tránsito.',
      'Responsabilidad civil en accidentes de tránsito.',
    ],
  },
  {
    icon: BookOpenIcon,
    title: 'Derecho Civil',
    items: [
      'Contratos, obligaciones y responsabilidad civil.',
      'Cobros ejecutivos y procesos de mínima, menor y mayor cuantía.',
      'Restitución de inmueble arrendado y procesos declarativos.',
    ],
  },
];

const corporateServices = [
  {
    title: 'Constitución y Estructuración',
    description: 'Creación de SAS, reformas estatutarias y gobierno corporativo.',
  },
  {
    title: 'Derecho Laboral Interno',
    description: 'Contratación, reglamentos de trabajo, descargos y gestión de nómina legal.',
  },
  {
    title: 'Propiedad Intelectual',
    description: 'Registro de marcas y protección de activos intangibles.',
  },
];
</script>

<template>
  <div class="w-full">

    <!-- Hero Section -->
    <section id="inicio" class="relative bg-ink text-on-ink overflow-hidden">
      <div class="absolute inset-0 bg-ink"></div>
      <div class="absolute inset-0 opacity-5">
        <div class="background-plus"></div>
      </div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div class="max-w-3xl">
          <p class="font-display text-xl sm:text-2xl text-on-ink mb-4">
            SK Soluciones Legales
          </p>
          <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight tracking-tight">
            Protegemos su patrimonio, su legado y su
            <span class="text-action">futuro financiero.</span>
          </h1>
          <p class="mt-6 text-lg sm:text-xl text-on-ink-muted leading-relaxed max-w-2xl">
            Soluciones legales expertas en Fraudes Bancarios, Sucesiones, Planificación Patrimonial e Insolvencia. Más de 50 casos activos contra la banca colombiana. Defendemos sus derechos con experiencia, compromiso y resultados.
          </p>
          <div class="mt-8">
            <NuxtLink
              to="/landing/asesoria-inicial"
              class="inline-flex items-center justify-center px-8 py-4 bg-action text-white font-semibold rounded-lg hover:bg-action-hover transition-colors duration-200 text-sm sm:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              Asesoría Inicial
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Authority Stats Band -->
    <section class="bg-ink text-on-ink border-t border-on-ink/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <p class="text-xs font-semibold uppercase tracking-widest text-on-ink-muted mb-6 text-center">
          SK Soluciones Legales en cifras
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          <div
            v-for="(stat, index) in authorityStats"
            :key="index"
            class="text-center sm:text-left"
          >
            <p class="font-display text-3xl sm:text-4xl font-bold text-action leading-none">{{ stat.value }}</p>
            <p class="mt-2 text-sm text-on-ink-muted leading-relaxed">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Specialties Section -->
    <section id="especialidades" class="bg-surface-elevated py-16 sm:py-20 lg:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 sm:mb-16">
          <p class="text-sm font-semibold uppercase tracking-widest text-ink-muted mb-3">Nuestras Especialidades</p>
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-ink">
            Tres Grandes Áreas de Experticia
          </h2>
          <p class="mt-4 text-ink-muted max-w-2xl mx-auto text-base sm:text-lg">
            El núcleo de nuestra firma, dedicado a proteger lo que más importa para usted y su familia.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div
            v-for="(specialty, index) in specialties"
            :key="index"
            class="bg-surface rounded-2xl p-6 sm:p-8 border border-line hover:border-ink/30 hover:shadow-lg transition-all duration-300"
          >
            <div class="w-12 h-12 bg-ink rounded-xl flex items-center justify-center mb-6">
              <component :is="specialty.icon" class="h-6 w-6 text-on-ink" />
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-ink mb-3">{{ specialty.title }}</h3>
            <p class="text-ink-muted text-sm sm:text-base mb-5 leading-relaxed">{{ specialty.description }}</p>
            <ul class="space-y-3">
              <li
                v-for="(item, i) in specialty.items"
                :key="i"
                class="flex items-start gap-3 text-sm text-ink-muted"
              >
                <span class="w-1.5 h-1.5 bg-action rounded-full mt-2 shrink-0"></span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Practice Areas Section -->
    <section id="areas" class="bg-surface py-16 sm:py-20 lg:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 sm:mb-16">
          <p class="text-sm font-semibold uppercase tracking-widest text-ink-muted mb-3">Áreas de Práctica</p>
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-ink">
            Práctica Complementaria
          </h2>
          <p class="mt-4 text-ink-muted max-w-2xl mx-auto text-base sm:text-lg">
            Soluciones adicionales para una atención legal integral.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="(area, index) in practiceAreas"
            :key="index"
            class="bg-surface-elevated rounded-2xl p-6 sm:p-8 border border-line hover:border-ink/30 hover:shadow-lg transition-all duration-300"
          >
            <div class="w-12 h-12 bg-ink rounded-xl flex items-center justify-center mb-6">
              <component :is="area.icon" class="h-6 w-6 text-on-ink" />
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-ink mb-4">{{ area.title }}</h3>
            <ul class="space-y-3">
              <li
                v-for="(item, i) in area.items"
                :key="i"
                class="flex items-start gap-3 text-sm text-ink-muted"
              >
                <span class="w-1.5 h-1.5 bg-action rounded-full mt-2 shrink-0"></span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Corporate Services Section -->
    <section id="corporativo" class="bg-ink text-on-ink py-16 sm:py-20 lg:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p class="text-sm font-semibold uppercase tracking-widest text-on-ink-muted mb-3">Para Empresas</p>
            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold">
              Servicios Corporativos
            </h2>
            <p class="mt-4 text-on-ink-muted text-base sm:text-lg leading-relaxed">
              Aliados estratégicos para el crecimiento de su negocio. Acompañamiento legal preventivo para empresas y emprendimientos.
            </p>
            <div class="mt-6 flex items-center gap-3">
              <BuildingOffice2Icon class="h-8 w-8 text-action" />
              <span class="text-lg font-semibold text-on-ink">Blindaje Jurídico Empresarial</span>
            </div>
          </div>

          <div class="space-y-6">
            <div
              v-for="(service, index) in corporateServices"
              :key="index"
              class="bg-ink rounded-xl p-6 border border-on-ink/20 hover:border-on-ink/40 transition-colors duration-200"
            >
              <h3 class="text-base sm:text-lg font-semibold mb-2">{{ service.title }}</h3>
              <p class="text-on-ink-muted text-sm leading-relaxed">{{ service.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA / Contact Section -->
    <section id="contacto" class="bg-surface-elevated py-16 sm:py-20 lg:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-ink">
            ¿Necesita representación jurídica?
          </h2>
          <p class="mt-4 text-ink-muted text-base sm:text-lg leading-relaxed">
            Agende su asesoría inicial. Analizamos su caso, determinamos viabilidad real y le entregamos un diagnóstico claro con hoja de ruta.
          </p>
          <div class="mt-10">
            <NuxtLink
              to="/landing/asesoria-inicial"
              class="inline-flex items-center gap-3 px-10 py-4 bg-action text-white font-semibold rounded-lg hover:bg-action-hover transition-colors duration-200 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action focus-visible:ring-offset-2"
            >
              Solicitar Asesoría Inicial
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>
