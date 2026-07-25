<script setup>
import { ref } from 'vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';

const mobileMenuOpen = ref(false);

const menuItems = [
  { label: 'Inicio', to: '/#inicio' },
  { label: 'Especialidades', to: '/#especialidades' },
  { label: 'Áreas de Práctica', to: '/#areas' },
  { label: 'Corporativo', to: '/#corporativo' },
  { label: 'Contacto', to: '/#contacto' },
];

const ctaLink = '/landing/asesoria-legal-gratis';

const toggleMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};
</script>

<template>
  <header class="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 sm:h-20">
        <!-- Logo / Brand -->
        <NuxtLink to="/" class="flex items-center gap-3 shrink-0">
          <div class="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-lg flex items-center justify-center">
            <span class="text-slate-900 font-extrabold text-lg sm:text-xl">SK</span>
          </div>
          <div class="flex flex-col">
            <span class="text-xl sm:text-2xl font-extrabold tracking-tight">SK SOLUCIONES</span>
            <span class="text-[10px] sm:text-xs text-stone-400 font-light tracking-widest uppercase">Soluciones Legales</span>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-1">
          <NuxtLink
            v-for="item in menuItems"
            :key="item.label"
            :to="item.to"
            class="px-4 py-2 text-sm font-medium text-stone-300 hover:text-white hover:bg-slate-800 rounded-lg transition-all duration-200"
          >
            {{ item.label }}
          </NuxtLink>
          <NuxtLink
            :to="ctaLink"
            class="ml-3 px-5 py-2 text-sm font-semibold bg-white text-slate-900 rounded-lg hover:bg-stone-100 transition-colors duration-200"
          >
            Asesoría Inicial
          </NuxtLink>
        </nav>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMenu"
          class="lg:hidden p-2 rounded-lg text-stone-300 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Toggle menu"
        >
          <Bars3Icon v-if="!mobileMenuOpen" class="h-6 w-6" />
          <XMarkIcon v-else class="h-6 w-6" />
        </button>
      </div>

      <!-- Mobile Navigation -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <nav v-if="mobileMenuOpen" class="lg:hidden pb-4 border-t border-slate-700 mt-2 pt-4">
          <div class="flex flex-col gap-1">
            <NuxtLink
              v-for="item in menuItems"
              :key="item.label"
              :to="item.to"
              @click="mobileMenuOpen = false"
              class="px-4 py-3 text-sm font-medium text-stone-300 hover:text-white hover:bg-slate-800 rounded-lg transition-all duration-200"
            >
              {{ item.label }}
            </NuxtLink>
            <NuxtLink
              :to="ctaLink"
              @click="mobileMenuOpen = false"
              class="mx-4 mt-3 px-5 py-3 text-sm font-semibold bg-white text-slate-900 rounded-lg hover:bg-stone-100 transition-colors duration-200 text-center"
            >
              Asesoría Inicial
            </NuxtLink>
          </div>
        </nav>
      </Transition>
    </div>
  </header>
</template>
