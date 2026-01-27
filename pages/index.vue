<script setup>
import { ShieldCheckIcon, DocumentTextIcon, ArrowPathIcon, ScaleIcon, UserGroupIcon, TruckIcon, BuildingOffice2Icon } from '@heroicons/vue/24/outline';

definePageMeta({
  layout: 'landingv2',
});

const specialties = [
  {
    icon: ShieldCheckIcon,
    title: 'Protección contra Fraudes Bancarios',
    description: 'Recuperamos su dinero y defendemos sus derechos ante abusos del sistema financiero.',
    items: [
      'Casos de suplantación de identidad.',
      'Reclamaciones por transacciones no autorizadas y fraudes electrónicos.',
      'Defensa del consumidor financiero y responsabilidad bancaria.',
    ],
  },
  {
    icon: DocumentTextIcon,
    title: 'Derecho Sucesoral y Planeación Patrimonial',
    description: 'Garantizamos la transmisión segura de bienes y la armonía familiar.',
    items: [
      'Sucesiones (Causa de muerte): Trámites notariales y judiciales para herencias.',
      'Planeación en vida: Fideicomisos civiles, repartición de bienes en vida y protección de patrimonio.',
      'Testamentos y donaciones.',
    ],
  },
  {
    icon: ArrowPathIcon,
    title: 'Ley de Insolvencia y Recuperación Financiera',
    description: 'Una segunda oportunidad legal para reorganizar sus finanzas y proteger su sustento.',
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
    <section id="inicio" class="relative bg-slate-900 text-white overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div class="absolute inset-0 opacity-5">
        <div class="background-plus"></div>
      </div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div class="max-w-3xl">
          <h1 class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight tracking-tight">
            Protegemos su patrimonio, su legado y su
            <span class="text-stone-400">futuro financiero.</span>
          </h1>
          <p class="mt-6 text-lg sm:text-xl text-stone-300 leading-relaxed max-w-2xl">
            Soluciones legales expertas en Fraudes Bancarios, Sucesiones e Insolvencia. Defendemos sus derechos con experiencia, compromiso y resultados.
          </p>
          <div class="mt-8">
            <NuxtLink
              to="/landing/asesoria-legal-gratis"
              class="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-stone-100 transition-colors duration-200 text-sm sm:text-base"
            >
              Asesoría Gratis
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Specialties Section -->
    <section id="especialidades" class="bg-white py-16 sm:py-20 lg:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 sm:mb-16">
          <p class="text-sm font-semibold uppercase tracking-widest text-stone-500 mb-3">Nuestras Especialidades</p>
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
            Tres Grandes Áreas de Experticia
          </h2>
          <p class="mt-4 text-stone-600 max-w-2xl mx-auto text-base sm:text-lg">
            El núcleo de nuestra firma, dedicado a proteger lo que más importa para usted y su familia.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div
            v-for="(specialty, index) in specialties"
            :key="index"
            class="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-100 hover:border-slate-300 hover:shadow-lg transition-all duration-300"
          >
            <div class="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mb-6">
              <component :is="specialty.icon" class="h-6 w-6 text-white" />
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-slate-900 mb-3">{{ specialty.title }}</h3>
            <p class="text-stone-600 text-sm sm:text-base mb-5 leading-relaxed">{{ specialty.description }}</p>
            <ul class="space-y-3">
              <li
                v-for="(item, i) in specialty.items"
                :key="i"
                class="flex items-start gap-3 text-sm text-stone-600"
              >
                <span class="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 shrink-0"></span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Practice Areas Section -->
    <section id="areas" class="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 sm:mb-16">
          <p class="text-sm font-semibold uppercase tracking-widest text-stone-500 mb-3">Áreas de Práctica</p>
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
            Práctica Complementaria
          </h2>
          <p class="mt-4 text-stone-600 max-w-2xl mx-auto text-base sm:text-lg">
            Soluciones adicionales para una atención legal integral.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(area, index) in practiceAreas"
            :key="index"
            class="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 hover:border-slate-300 hover:shadow-lg transition-all duration-300"
          >
            <div class="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mb-6">
              <component :is="area.icon" class="h-6 w-6 text-white" />
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-slate-900 mb-4">{{ area.title }}</h3>
            <ul class="space-y-3">
              <li
                v-for="(item, i) in area.items"
                :key="i"
                class="flex items-start gap-3 text-sm text-stone-600"
              >
                <span class="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 shrink-0"></span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Corporate Services Section -->
    <section id="corporativo" class="bg-slate-900 text-white py-16 sm:py-20 lg:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p class="text-sm font-semibold uppercase tracking-widest text-stone-400 mb-3">Para Empresas</p>
            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold">
              Servicios Corporativos
            </h2>
            <p class="mt-4 text-stone-300 text-base sm:text-lg leading-relaxed">
              Aliados estratégicos para el crecimiento de su negocio. Acompañamiento legal preventivo para empresas y emprendimientos.
            </p>
            <div class="mt-6 flex items-center gap-3">
              <BuildingOffice2Icon class="h-8 w-8 text-stone-400" />
              <span class="text-lg font-semibold text-stone-300">Blindaje Jurídico Empresarial</span>
            </div>
          </div>

          <div class="space-y-6">
            <div
              v-for="(service, index) in corporateServices"
              :key="index"
              class="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-slate-500 transition-colors duration-200"
            >
              <h3 class="text-base sm:text-lg font-semibold mb-2">{{ service.title }}</h3>
              <p class="text-stone-400 text-sm leading-relaxed">{{ service.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA / Contact Section -->
    <section id="contacto" class="bg-white py-16 sm:py-20 lg:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
            ¿Necesita asesoría legal?
          </h2>
          <p class="mt-4 text-stone-600 text-base sm:text-lg leading-relaxed">
            Cuéntenos su caso. Nuestro equipo de expertos está listo para ayudarle a encontrar la mejor solución.
          </p>
          <div class="mt-10">
            <NuxtLink
              to="/landing/asesoria-legal-gratis"
              class="inline-flex items-center gap-3 px-10 py-4 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors duration-200 text-base"
            >
              Solicitar Asesoría Gratis
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>
