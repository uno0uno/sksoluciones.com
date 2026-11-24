<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    authorName?: string
  }>(),
  {
    authorName: 'Carlos Salamanca',
  },
)

const authorTitle = 'Socio Director & Abogado Especialista'
const authorDescription =
  'Abogado y socio director en SK Soluciones. Práctica concentrada en derecho financiero, defensa de usuarios ante centrales de riesgo, régimen de hábeas data (Ley 1266 y Ley 2157) y controversias bancarias en Colombia.'
const location = 'Bogotá D.C., Colombia'
</script>

<template>
  <section
    class="w-full rounded-2xl border border-line bg-surface p-6 sm:p-8 shadow-sm"
    itemscope
    itemtype="https://schema.org/Person"
    aria-label="Información del autor"
  >
    <div class="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6">
      <!-- Avatar / Monogram -->
      <div class="flex-shrink-0">
        <div class="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl bg-surface-elevated ring-1 ring-line text-action font-display text-2xl sm:text-3xl font-bold shadow-xs">
          <span itemprop="name">{{ props.authorName.charAt(0) }}</span>
        </div>
      </div>

      <!-- Info -->
      <div class="flex-1">
        <div class="flex flex-wrap items-baseline gap-2">
          <h3
            class="font-display text-xl sm:text-2xl font-bold text-ink"
            itemprop="name"
          >
            {{ props.authorName }}
          </h3>
          <span class="text-xs font-semibold text-action uppercase tracking-wider">
            {{ authorTitle }}
          </span>
        </div>

        <p
          class="mt-2 text-sm sm:text-base leading-relaxed text-ink-muted"
          itemprop="description"
        >
          {{ authorDescription }}
        </p>

        <!-- Location -->
        <div class="mt-3 flex items-center gap-2 text-xs sm:text-sm text-ink-muted/90">
          <svg
            class="h-4 w-4 text-action shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span itemprop="addressLocality">{{ location }}</span>
          <span class="text-line">·</span>
          <span>Firma Jurídica SK Soluciones</span>
        </div>
      </div>
    </div>
  </section>
</template>
