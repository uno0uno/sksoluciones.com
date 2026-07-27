<script setup>

const {
    public: {
        organizationName,
        organizationUrl,
        organizationDescription,
        organizationLogo,
        organizationEmail,
        organizationTelephone,
        organizationSocials,
        organizationAddress,
        organizationSocialLinks,
        webPageName,
        webPageDescription,
        webPageUrl,
        webPageIsPartOf
    }
} = useRuntimeConfig();

const combinedSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "name": webPageName,
      "description": webPageDescription,
      "url": webPageUrl,
      "isPartOf": webPageIsPartOf
    },
    {
      "@type": "Organization",
      "name": organizationName,
      "url": organizationUrl,
      "logo": organizationLogo,
      "description": organizationDescription,
      "email": organizationEmail,
      "telephone": organizationTelephone,
      "sameAs": organizationSocials,
      "address": organizationAddress
    }
  ]
};

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(combinedSchema)
    }
  ]
});

const footerLinks = [
  { label: 'Inicio', to: '/#inicio' },
  { label: 'Especialidades', to: '/#especialidades' },
  { label: 'Áreas de Práctica', to: '/#areas' },
  { label: 'Corporativo', to: '/#corporativo' },
  { label: 'Contacto', to: '/#contacto' },
];

const specialties = [
  'Fraudes Bancarios',
  'Derecho Sucesoral',
  'Insolvencia',
  'Derecho Comercial',
  'Derecho de Familia',
  'Derecho de Tránsito',
];
</script>

<template>
  <footer class="bg-ink text-on-ink">
    <!-- Main Footer -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

        <!-- Brand -->
        <div class="sm:col-span-2 lg:col-span-1">
          <NuxtLink
            to="/"
            class="flex items-center gap-3 mb-4 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          >
            <div class="w-10 h-10 bg-surface-elevated rounded-lg flex items-center justify-center">
              <span class="text-ink font-extrabold text-lg">SK</span>
            </div>
            <div class="flex flex-col">
              <span class="text-xl font-extrabold tracking-tight">SK SOLUCIONES</span>
              <span class="text-[10px] text-on-ink-muted font-light tracking-widest uppercase">Soluciones Legales</span>
            </div>
          </NuxtLink>
          <p class="text-on-ink-muted text-sm leading-relaxed max-w-xs">
            Protegemos su patrimonio, su legado y su futuro financiero con soluciones legales expertas.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-sm font-semibold uppercase tracking-wider text-on-ink mb-4">Navegación</h3>
          <ul class="space-y-3">
            <li v-for="link in footerLinks" :key="link.label">
              <NuxtLink
                :to="link.to"
                class="text-on-ink-muted hover:text-on-ink text-sm transition-colors duration-200 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Specialties -->
        <div>
          <h3 class="text-sm font-semibold uppercase tracking-wider text-on-ink mb-4">Especialidades</h3>
          <ul class="space-y-3">
            <li v-for="item in specialties" :key="item">
              <span class="text-on-ink-muted text-sm">{{ item }}</span>
            </li>
          </ul>
        </div>

        <!-- Social & CTA -->
        <div>
          <h3 class="text-sm font-semibold uppercase tracking-wider text-on-ink mb-4">Síguenos</h3>
          <div class="flex flex-col gap-3">
            <NuxtLink
              to="https://www.instagram.com/abogado.cs"
              external
              target="_blank"
              class="text-on-ink-muted hover:text-on-ink transition-colors text-sm rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              Instagram
            </NuxtLink>
            <NuxtLink
              to="https://www.tiktok.com/@abogado.cs"
              external
              target="_blank"
              class="text-on-ink-muted hover:text-on-ink transition-colors text-sm rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              TikTok
            </NuxtLink>
          </div>
          <NuxtLink
            to="/landing/asesoria-inicial"
            class="inline-block mt-6 px-5 py-2.5 text-sm font-semibold bg-action text-white rounded-lg hover:bg-action-hover transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          >
            Asesoría Inicial
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-on-ink/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p class="text-on-ink-muted text-xs">
            &copy; {{ new Date().getFullYear() }} SK Soluciones. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
