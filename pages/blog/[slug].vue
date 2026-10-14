<script setup lang="ts">
import { blogPostImage, getBlogPostBySlug } from '~/utils/blog'

definePageMeta({
  layout: 'default',
})

const route = useRoute()
const { public: config } = useRuntimeConfig()

const slug = computed(() => String(route.params.slug || ''))

const { data: post } = await useAsyncData(
  () => `blog-post-${slug.value}`,
  () => getBlogPostBySlug(slug.value),
  { watch: [slug] },
)

if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Artículo no encontrado',
  })
}

const coverSrc = computed(() => (post.value ? blogPostImage(post.value) : undefined))

const canonicalUrl = computed(() => {
  const baseUrl = (config.baseUrl || 'http://localhost:3000').replace(/\/$/, '')
  return `${baseUrl}/blog/${post.value!.slug}`
})

const ogImage = computed(() => {
  if (!coverSrc.value) return undefined
  if (coverSrc.value.startsWith('http')) return coverSrc.value
  const baseUrl = (config.baseUrl || 'http://localhost:3000').replace(/\/$/, '')
  return `${baseUrl}${coverSrc.value}`
})

const jsonLd = computed(() => {
  if (!post.value) return null
  const baseUrl = (config.baseUrl || 'http://localhost:3000').replace(/\/$/, '')
  const keywords = post.value.tags
    ? post.value.tags.split(',').map((t) => t.trim()).filter(Boolean)
    : undefined
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: post.value.title,
        description: post.value.description,
        datePublished: post.value.date,
        dateModified: post.value.date,
        mainEntityOfPage: canonicalUrl.value,
        url: canonicalUrl.value,
        image: ogImage.value || undefined,
        author: post.value.author
          ? { '@type': 'Person', name: post.value.author }
          : { '@type': 'Organization', name: config.nameSite || 'SK Soluciones' },
        publisher: {
          '@type': 'Organization',
          name: config.nameSite || 'SK Soluciones',
          logo: config.organizationLogo
            ? { '@type': 'ImageObject', url: config.organizationLogo }
            : undefined,
        },
        keywords: keywords?.join(', ') || undefined,
        inLanguage: 'es-CO',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${baseUrl}/` },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${baseUrl}/blog` },
          { '@type': 'ListItem', position: 3, name: post.value.title, item: canonicalUrl.value },
        ],
      },
    ],
  }
})

useHead(() => {
  const meta: Record<string, string>[] = [
    { name: 'description', content: post.value?.description || '' },
    { property: 'og:title', content: post.value?.title || '' },
    { property: 'og:description', content: post.value?.description || '' },
    { property: 'og:url', content: canonicalUrl.value },
    { property: 'og:type', content: 'article' },
    { property: 'og:site_name', content: config.nameSite || 'SK Soluciones' },
    { property: 'og:locale', content: 'es_CO' },
    { property: 'article:published_time', content: post.value?.date || '' },
    { property: 'article:author', content: post.value?.author || config.nameSite || 'SK Soluciones' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: post.value?.title || '' },
    { name: 'twitter:description', content: post.value?.description || '' },
  ]
  if (ogImage.value) {
    meta.push({ property: 'og:image', content: ogImage.value })
    meta.push({ name: 'twitter:image', content: ogImage.value })
  }
  const scripts: Record<string, unknown>[] = []
  if (jsonLd.value) {
    scripts.push({
      type: 'application/ld+json',
      children: JSON.stringify(jsonLd.value),
    })
  }
  return {
    title: `${post.value?.title || 'Artículo'} | ${config.nameSite || 'SK Soluciones'}`,
    meta,
    link: [{ rel: 'canonical', href: canonicalUrl.value }],
    script: scripts,
  }
})
</script>

<template>
  <article v-if="post">
    <BlogArticleHero :post="post" />
    <BlogArticleImage
      v-if="coverSrc"
      :src="coverSrc"
      :alt="post.coverAlt || post.title"
    />
    <BlogArticleContent
      :body-html="post.bodyHtml"
      :slug="post.slug"
    >
      <template #breadcrumb>
        <BlogBreadcrumb :title="post.title" />
      </template>
      <template #cta>
        <BlogArticleCTA
          :slug="post.slug"
          :title="post.title"
        />
      </template>
    </BlogArticleContent>
  </article>
</template>
