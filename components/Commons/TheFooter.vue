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
</script>

<template>
    <div class="flex flex-col gap-2 items-left justify-start md:items-center md:justify-center p-4 bg-black text-white">
        <div class="flex flex-col items-left justify-start md:items-center md:justify-center ">
            <p class="text-sm font-light leading-relaxed text-stone-400">© 2025 Waro Labs. Todos los derechos reservados.</p>
            <p class="text-sm font-light leading-relaxed text-stone-400">Política de privacidad | Términos de servicio</p>
        </div>
        <div class="flex gap-4">
            <a v-for="link in organizationSocialLinks" :key="link.name" :href="link.url" class="text-white hover:text-gray-400" target="_blank" rel="noopener noreferrer">{{ link.name }}</a>
        </div>
    </div>
</template>