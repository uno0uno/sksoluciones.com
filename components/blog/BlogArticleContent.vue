<script setup lang="ts">
import { getSkCta } from '~/utils/skBlogCta'

const props = defineProps<{
  bodyHtml: string
  slug?: string
}>()

const articleRef = ref<HTMLElement | null>(null)
const insertedNodes: HTMLElement[] = []

function buildMidCta(slug: string, placement: 'mid1' | 'mid2'): HTMLElement {
  const cta = getSkCta(slug, placement)
  const wrap = document.createElement('aside')
  wrap.className = 'rounded-xl bg-[#1A6A9A] p-5 sm:p-6 text-white shadow-lg border border-[#0F4C75]/20'
  wrap.setAttribute('data-sk-mid-cta', placement)

  const inner = document.createElement('div')
  inner.className = 'flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between'

  const content = document.createElement('div')
  content.className = 'flex-1'

  const badge = document.createElement('div')
  badge.className = 'inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white/90'
  const dot = document.createElement('span')
  dot.className = 'h-2 w-2 rounded-full bg-white animate-pulse'
  badge.appendChild(dot)
  badge.appendChild(document.createTextNode('SK Soluciones'))

  const headline = document.createElement('p')
  headline.className = 'mt-3 text-[1.0625rem] font-extrabold leading-tight text-white'
  headline.textContent = cta.headline

  const body = document.createElement('p')
  body.className = 'mt-2 text-[0.9375rem] leading-relaxed text-white/90'
  body.textContent = cta.body

  const micro = document.createElement('p')
  micro.className = 'mt-2 text-xs leading-relaxed text-white/70'
  micro.textContent = cta.microcopy

  const btn = document.createElement('button')
  btn.className = 'inline-flex shrink-0 items-center justify-center rounded-xl bg-white px-6 py-3.5 text-sm font-extrabold text-[#1A6A9A] shadow-md transition hover:bg-surface active:scale-[0.98]'
  btn.type = 'button'
  btn.textContent = `${cta.button} →`
  btn.addEventListener('click', () => {
    const s = slug?.trim()
    navigateTo({
      path: '/landing/asesoria-inicial',
      query: s ? { campaignSlug: s } : {},
      hash: '#consulta',
    })
  })

  content.appendChild(badge)
  content.appendChild(headline)
  content.appendChild(body)
  content.appendChild(micro)
  inner.appendChild(content)
  inner.appendChild(btn)
  wrap.appendChild(inner)
  return wrap
}

function getMidTargets(article: HTMLElement): HTMLElement[] {
  const h2s = Array.from(article.querySelectorAll<HTMLElement>('h2'))
  if (h2s.length <= 2) return h2s.slice(1, 2)
  if (h2s.length <= 4) return [h2s[1]]
  // 1º tras 2ª sección (después de "Si es fraude no se paga"), 2º a 65% del artículo — deja aire tras TLDR e intro
  const first = h2s[2]
  const second = h2s[Math.floor(h2s.length * 0.65)]
  return Array.from(new Set([first, second])).filter(Boolean).slice(0, 2)
}

onMounted(() => {
  nextTick(() => {
    if (!articleRef.value || !props.slug) return
    articleRef.value.querySelectorAll('table').forEach((table) => {
      if (table.parentElement?.classList.contains('table-scroll-wrapper')) return
      const wrapper = document.createElement('div')
      wrapper.className = 'table-scroll-wrapper'
      wrapper.style.overflowX = 'auto'
      table.parentNode!.insertBefore(wrapper, table)
      wrapper.appendChild(table)
    })
    getMidTargets(articleRef.value!).forEach((h2, idx) => {
      const placement = idx === 0 ? 'mid1' : 'mid2'
      const banner = buildMidCta(props.slug!, placement)
      h2.parentNode!.insertBefore(banner, h2)
      insertedNodes.push(banner)
    })
  })
})

onUnmounted(() => {
  insertedNodes.splice(0).forEach((n) => n.remove())
})
</script>

<template>
  <div class="page-container py-10 sm:py-14">
    <div class="mx-auto max-w-3xl">
      <div
        v-if="$slots.breadcrumb"
        class="mb-8"
      >
        <slot name="breadcrumb" />
      </div>

      <div
        ref="articleRef"
        class="article-style max-w-none text-ink"
        v-html="bodyHtml"
      />

      <div
        v-if="$slots.cta"
        class="mt-4"
      >
        <slot name="cta" />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* TL;DR — como en front_nuxt waro, adaptado a tokens SK */
:deep(.article-style blockquote) {
  margin: 1.5rem 0 2rem;
  padding: 0;
  border: none;
  border-radius: 0.875rem;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(154, 107, 47, 0.08), rgba(247, 245, 242, 0.9) 60%), #ffffff;
  border: 1px solid #D9D3C9;
  box-shadow: 0 8px 24px rgba(11, 31, 51, 0.06);
}
:deep(.article-style blockquote p) {
  margin: 0;
  padding: 0.875rem 1rem 0 1.125rem;
  color: #3D4F5F;
  font-size: 0.9rem;
  line-height: 1.7;
}
:deep(.article-style blockquote p:first-of-type) {
  padding-top: 1rem;
  font-weight: 700;
  color: #0B1F33;
  font-size: 0.875rem;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}
:deep(.article-style blockquote p:last-child) { padding-bottom: 1rem; }
:deep(.article-style blockquote ul) {
  list-style: none;
  padding: 0.25rem 1rem 0 1.125rem;
  margin: 0;
}
:deep(.article-style blockquote ul li) {
  position: relative;
  padding-left: 1.125rem;
  margin-bottom: 0.3rem;
  color: #3D4F5F;
  font-size: 0.875rem;
  line-height: 1.6;
}
:deep(.article-style blockquote ul li::before) {
  content: '·';
  position: absolute;
  left: 0;
  top: -1px;
  color: #9A6B2F;
  font-weight: 900;
  font-size: 1.1rem;
}
:deep(.article-style blockquote strong) { color: #0B1F33; font-weight: 700; }
@media (min-width: 640px) {
  :deep(.article-style blockquote) { border-radius: 1rem; }
  :deep(.article-style blockquote p) { padding-left: 1.375rem; padding-right: 1.25rem; }
  :deep(.article-style blockquote ul) { padding-left: 1.375rem; }
}

/* article typography — replica waro front_nuxt/design-system.css */
:deep(.article-style) { font-size: 1rem; line-height: 1.75; color: #0B1F33; }
@media (min-width: 640px) { :deep(.article-style) { font-size: 1.125rem; line-height: 1.85; } }
:deep(.article-style p) { margin-bottom: 1.25rem; line-height: 1.75; }
@media (min-width: 640px) { :deep(.article-style p) { margin-bottom: 1.5rem; line-height: 1.85; } }
:deep(.article-style h2) {
  font-weight: 800;
  color: #0B1F33;
  margin-top: 1.75rem;
  margin-bottom: 0.75rem;
  line-height: 1.2;
  font-size: clamp(1.2rem, 4vw, 1.75rem);
  scroll-margin-top: 80px;
}
:deep(.article-style h3) {
  font-weight: 700;
  color: #0B1F33;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  line-height: 1.3;
  font-size: 1.125rem;
  scroll-margin-top: 80px;
}
@media (min-width: 640px) { :deep(.article-style h3) { font-size: 1.25rem; } }
@media (min-width: 768px) { :deep(.article-style h3) { font-size: 1.5rem; } }
:deep(.article-style h3)::before { content: '→'; color: #9A6B2F; margin-right: 0.4rem; font-weight: 900; }
:deep(.article-style a) { color: #9A6B2F; text-decoration: underline; text-underline-offset: 3px; }
:deep(.article-style a:hover) { color: #7E5624; }
:deep(.article-style hr) { border: none; height: 1px; background: linear-gradient(90deg, transparent, #D9D3C9, transparent); margin: 2.5rem 0; }

/* Listas — replica waro front_nuxt/design-system.css:268 con tokens SK */
:deep(.article-style ul) { list-style: none; padding-left: 0; margin-bottom: 1.5rem; }
:deep(.article-style ul li) {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.5rem;
  color: #3D4F5F;
  line-height: 1.6;
}
:deep(.article-style ul li::before) {
  content: '•';
  position: absolute;
  left: 0;
  top: 0;
  color: #9A6B2F;
  font-weight: 700;
}
:deep(.article-style ol) { list-style: decimal; padding-left: 1.5rem; margin-bottom: 1.5rem; }
:deep(.article-style ol li) { margin-bottom: 0.5rem; color: #3D4F5F; line-height: 1.6; }
:deep(.article-style ol li::marker) { color: #9A6B2F; font-weight: 700; }
:deep(.article-style li strong) { color: #0B1F33; font-weight: 700; }

/* Tablas — replica waro front_nuxt/design-system.css:312 con tokens SK */
:deep(.article-style table) {
  width: 100%;
  border-collapse: collapse;
  overflow: hidden;
  min-width: 480px;
  font-size: 0.875rem;
  margin: 1.5rem 0;
  border: 1px solid #D9D3C9;
  border-radius: 0.625rem;
}
:deep(.article-style thead) { background: rgba(217, 211, 201, 0.35); border-bottom: 2px solid #D9D3C9; }
:deep(.article-style thead th) {
  padding: 0.875rem 1rem;
  text-align: left;
  font-weight: 700;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #0B1F33;
}
:deep(.article-style tbody tr) { border-bottom: 1px solid rgba(217, 211, 201, 0.6); transition: background-color 100ms; }
:deep(.article-style tbody tr:nth-child(even)) { background: #F7F5F2; }
:deep(.article-style tbody tr:hover) { background: rgba(154, 107, 47, 0.06); }
:deep(.article-style tbody td) { padding: 0.75rem 1rem; color: #3D4F5F; vertical-align: top; }
:deep(.article-style tbody td:first-child) { font-weight: 600; color: #0B1F33; }

/* Banner mid-CTA — compacto, mismo que final */
:deep([data-sk-mid-cta]) { margin: 1rem 0 0.75rem; }
/* Evita que article-style p/h le meta margins a los p del banner */
:deep([data-sk-mid-cta] p) { margin-bottom: 0; }
:deep([data-sk-mid-cta] p + p) { margin-top: 0.5rem; }
.table-scroll-wrapper {
  margin: 1.5rem 0;
  overflow-x: auto;
  border: 1px solid #D9D3C9;
  border-radius: 0.625rem;
  box-shadow: 0 2px 8px rgba(11, 31, 51, 0.07);
}
.table-scroll-wrapper :deep(table) { margin: 0; border: none; }
</style>
