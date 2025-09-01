export default defineNuxtConfig({
  ssr: true,
  nitro: {
    preset: 'node-server'
  },
  runtimeConfig: {
    apiKey: process.env.NUXT_API_KEY || '',
    awsAccessKeyId: process.env.NUXT_PRIVATE_AWS_ACCES_KEY_ID || '',
    awsSecretAccessKey: process.env.NUXT_PRIVATE_AWS_SECRET_ACCESS_KEY || '',
    awsRegion: process.env.NUXT_PRIVATE_AWS_REGION || '',
    emailFrom: process.env.NUXT_PRIVATE_EMAIL_FROM || '',
    jwtSecret: process.env.NUXT_PRIVATE_JWT_SECRET || '',
    privateKeyEncrypter: process.env.NUXT_PRIVATE_PRIVATE_KEY_ENCRYPTER || '',
    tokenBackend: process.env.NUXT_PRIVATE_TOKEN_BACKEND || '',
    backendBaseUrl: process.env.NUXT_PRIVATE_BACKEND_BASE_URL || '',
    public: {
      baseUrl: process.env.NUXT_PUBLIC_BASE_URL || '',
      nameSite: process.env.NUXT_PRIVATE_NAME_SITE || '',
      xNameUser: process.env.NUXT_PRIVATE_X_NAME || '',
      gtmContainerId: process.env.NUXT_PUBLIC_GTM_CONTAINER_ID || '',
      publicKeyEncrypter: process.env.NUXT_PUBLIC_PUBLIC_KEY_ENCRYPTER || '',
      organizationName: process.env.NUXT_PUBLIC_ORGANIZATION_NAME || '',
      organizationUrl: process.env.NUXT_PUBLIC_ORGANIZATION_URL || '',
      organizationDescription: process.env.NUXT_PUBLIC_ORGANIZATION_DESCRIPTION || '',
      organizationLogo: process.env.NUXT_PUBLIC_ORGANIZATION_LOGO || '',
      organizationEmail: process.env.NUXT_PUBLIC_ORGANIZATION_EMAIL || '',
      organizationTelephone: process.env.NUXT_PUBLIC_ORGANIZATION_TELEPHONE || '',
      organizationSocials: process.env.NUXT_PUBLIC_ORGANIZATION_SOCIALS ? JSON.parse(process.env.NUXT_PUBLIC_ORGANIZATION_SOCIALS) : [],
      organizationAddress: process.env.NUXT_PUBLIC_ORGANIZATION_ADDRESS ? JSON.parse(process.env.NUXT_PUBLIC_ORGANIZATION_ADDRESS) : {},
      organizationSocialLinks: process.env.NUXT_PUBLIC_ORGANIZATION_SOCIAL_LINKS ? JSON.parse(process.env.NUXT_PUBLIC_ORGANIZATION_SOCIAL_LINKS) : [],
      webPageName: process.env.NUXT_PUBLIC_WEBPAGE_NAME || '',
      webPageDescription: process.env.NUXT_PUBLIC_WEBPAGE_DESCRIPTION || '',
      webPageUrl: process.env.NUXT_PUBLIC_WEBPAGE_URL || '',
      webPageIsPartOf: process.env.NUXT_PUBLIC_WEBPAGE_IS_PART_OF ? JSON.parse(process.env.NUXT_PUBLIC_WEBPAGE_IS_PART_OF) : {}
    }
  },
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'charset', content: 'utf-8' }
      ],
      htmlAttrs: {
        lang: 'es'
      }
    }
  },
  modules: [
    '@nuxtjs/robots'
  ],
  site: {
    url: process.env.NUXT_PUBLIC_BASE_URL || ''
  },
  robots: {
    credits: false,
    groups: [
      {
        userAgents: ['GPTBot'],
        disallow: ['/api/*'],
        allow: ['/']
      }
    ]
  },
  head: {
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
})