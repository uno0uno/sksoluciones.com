<script setup lang="ts">
import { blogPostImage } from '~/utils/blog'

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

watch(post, (value) => {
  if (!value) {
    showError(createError({
      statusCode: 404,
      statusMessage: 'Artículo no encontrado',
    }))
  }
})

const coverSrc = computed(() => (post.value ? blogPostImage(post.value) : undefined))

const canonicalUrl = computed(() => {
  const baseUrl = config.baseUrl || 'http://localhost:3000'
  return `${baseUrl}/blog/${post.value!.slug}`
})

const ogImage = computed(() => {
  if (!coverSrc.value) return undefined
  if (coverSrc.value.startsWith('http')) return coverSrc.value
  const baseUrl = config.baseUrl || 'http://localhost:3000'
  return `${baseUrl}${coverSrc.value}`
})

useHead(() => {
  const meta = [
    { name: 'description', content: post.value?.description || '' },
    { property: 'og:title', content: post.value?.title || '' },
    { property: 'og:description', content: post.value?.description || '' },
    { property: 'og:url', content: canonicalUrl.value },
    { property: 'og:type', content: 'article' },
  ]
  if (ogImage.value) {
    meta.push({ property: 'og:image', content: ogImage.value })
  }
  return {
    title: `${post.value?.title || 'Artículo'} | ${config.nameSite || 'SK Soluciones'}`,
    meta,
    link: [{ rel: 'canonical', href: canonicalUrl.value }],
  }
})
</script>

<template>
  <article v-if="post">
    <BlogArticleHero :post="post" />
    <BlogArticleImage
      v-if="coverSrc"
      :src="coverSrc"
      :alt="post.title"
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
