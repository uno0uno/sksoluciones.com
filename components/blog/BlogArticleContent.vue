<script setup lang="ts">
import { getSkCta } from '~/utils/skBlogCta'

const props = defineProps<{
  bodyHtml: string
  slug?: string
}>()

const articleRef = ref<HTMLElement | null>(null)
const readingProgress = ref(0)
const insertedNodes: HTMLElement[] = []

function updateReadingProgress() {
  if (!articleRef.value) return
  const rect = articleRef.value.getBoundingClientRect()
  const windowHeight = window.innerHeight
  const elementTop = rect.top
  const elementHeight = rect.height
  const scrolledPastTop = Math.max(0, -elementTop)
  const totalScrollable = Math.max(1, elementHeight - windowHeight * 0.5)
  const pct = Math.min(100, Math.max(0, (scrolledPastTop / totalScrollable) * 100))
  readingProgress.value = Math.round(pct)
}

function buildMidCta(slug: string, placement: 'mid1' | 'mid2'): HTMLElement {
  const cta = getSkCta(slug, placement)
  const wrap = document.createElement('aside')
  wrap.className = 'my-10 rounded-2xl bg-ink p-6 sm:p-7 text-on-ink shadow-lg border border-line/20 relative overflow-hidden'
  wrap.setAttribute('data-sk-mid-cta', placement)

  const inner = document.createElement('div')
  inner.className = 'flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between relative z-10'

  const content = document.createElement('div')
  content.className = 'flex-1'

  const badge = document.createElement('div')
  badge.setAttribute('data-mid-cta-badge', '')
  badge.className = 'inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-widest'
  const dot = document.createElement('span')
  dot.className = 'h-2 w-2 rounded-full bg-action animate-pulse'
  badge.appendChild(dot)
  badge.appendChild(document.createTextNode('SK Soluciones · Asesoría'))

  const headline = document.createElement('h3')
  headline.setAttribute('data-mid-cta-headline', '')
  headline.className = 'font-display text-[1.1875rem] sm:text-[1.35rem] font-bold leading-tight'
  headline.textContent = cta.headline

  const body = document.createElement('p')
  body.setAttribute('data-mid-cta-body', '')
  body.className = 'text-[0.9375rem] leading-relaxed'
  body.textContent = cta.body

  const micro = document.createElement('p')
  micro.setAttribute('data-mid-cta-microcopy', '')
  micro.className = 'text-xs leading-relaxed'
  micro.textContent = cta.microcopy

  const btn = document.createElement('button')
  btn.className = 'inline-flex shrink-0 items-center justify-center rounded-xl px-5 py-3 text-sm font-bold shadow-md transition active:scale-[0.98]'
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
  const first = h2s[2]
  const second = h2s[Math.floor(h2s.length * 0.65)]
  return Array.from(new Set([first, second])).filter(Boolean).slice(0, 2)
}

onMounted(() => {
  window.addEventListener('scroll', updateReadingProgress, { passive: true })
  nextTick(() => {
    updateReadingProgress()
    if (!articleRef.value || !props.slug) return
    articleRef.value.querySelectorAll('table').forEach((table) => {
      if (table.parentElement?.classList.contains('table-scroll-wrapper')) return
      const wrapper = document.createElement('div')
      wrapper.className = 'table-scroll-wrapper'
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
  window.removeEventListener('scroll', updateReadingProgress)
  insertedNodes.splice(0).forEach((n) => n.remove())
})
</script>

<template>
  <div>
    <!-- Fixed top reading progress bar -->
    <div
      class="reading-progress-bar"
      :style="{ width: `${readingProgress}%` }"
      aria-hidden="true"
    />

    <div class="w-full bg-surface-elevated py-8 sm:py-12 lg:py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Breadcrumb row -->
        <div
          v-if="$slots.breadcrumb"
          class="mb-6 sm:mb-8"
        >
          <slot name="breadcrumb" />
        </div>

        <!-- 2-column Grid: Prose (left) + Sticky Rail (right) -->
        <div class="w-full lg:grid lg:grid-cols-[minmax(0,1fr)_340px] xl:grid-cols-[minmax(0,780px)_340px] lg:gap-12 lg:items-start lg:justify-between">
          <!-- Prose Column -->
          <div class="w-full min-w-0">
            <div
              ref="articleRef"
              class="article-style max-w-none text-ink"
              v-html="bodyHtml"
            />

            <!-- In-article final CTA slot -->
            <div
              v-if="$slots.cta"
              class="mt-10"
            >
              <slot name="cta" />
            </div>

            <!-- Separator -->
            <hr class="my-12 border-0 h-px bg-line" />

            <!-- Author Card slot -->
            <div
              v-if="$slots.author"
              class="mt-2"
            >
              <slot name="author" />
            </div>
          </div>

          <!-- Sticky Right Rail banner -->
          <aside
            v-if="$slots.rail"
            class="hidden lg:block lg:sticky lg:top-24 self-start"
          >
            <slot name="rail" />
          </aside>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Reading Progress Bar */
.reading-progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background-color: var(--color-action);
  z-index: 9999;
  transition: width 90ms ease-out;
  pointer-events: none;
}

/* TL;DR / Callout blockquote — SIN borde grueso a la izquierda */
:deep(.article-style blockquote) {
  margin: 2rem 0 2.5rem;
  padding: 1.25rem 1.5rem;
  border-radius: 1rem;
  background: linear-gradient(135deg, rgba(154, 107, 47, 0.05), rgba(247, 245, 242, 0.95) 60%), #ffffff;
  border: 1px solid var(--color-line);
  box-shadow: 0 4px 20px rgba(11, 31, 51, 0.04);
}
:deep(.article-style blockquote p) {
  margin: 0;
  padding: 0.5rem 0 0;
  color: var(--color-ink-muted);
  font-size: 0.9375rem;
  line-height: 1.7;
}
:deep(.article-style blockquote p:first-of-type) {
  padding-top: 0;
  font-weight: 700;
  color: var(--color-ink);
  font-size: 0.9rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
:deep(.article-style blockquote ul) {
  list-style: none;
  padding: 0.5rem 0 0;
  margin: 0;
}
:deep(.article-style blockquote ul li) {
  position: relative;
  padding-left: 1.25rem;
  margin-bottom: 0.4rem;
  color: var(--color-ink-muted);
  font-size: 0.9375rem;
  line-height: 1.65;
}
:deep(.article-style blockquote ul li::before) {
  content: '·';
  position: absolute;
  left: 0;
  top: -2px;
  color: var(--color-action);
  font-weight: 900;
  font-size: 1.25rem;
}
:deep(.article-style blockquote strong) {
  color: var(--color-ink);
  font-weight: 700;
}

/* Article Typography — Editorial Prose */
:deep(.article-style) {
  font-size: 1.0625rem;
  line-height: 1.8;
  color: var(--color-ink);
  overflow-wrap: anywhere;
  word-break: break-word;
}
@media (min-width: 640px) {
  :deep(.article-style) {
    font-size: 1.1875rem;
    line-height: 1.85;
  }
}

/* Paragraphs */
:deep(.article-style p) {
  margin-bottom: 1.35rem;
  line-height: 1.8;
  color: var(--color-ink-muted);
}
@media (min-width: 640px) {
  :deep(.article-style p) {
    margin-bottom: 1.5rem;
    line-height: 1.85;
  }
}

/* Lead Paragraph — Opening impact */
:deep(.article-style > p:first-of-type) {
  font-size: 1.15rem;
  line-height: 1.8;
  color: var(--color-ink);
  font-weight: 450;
  margin-bottom: 1.5rem;
}
@media (min-width: 640px) {
  :deep(.article-style > p:first-of-type) {
    font-size: 1.25rem;
    line-height: 1.85;
  }
}

/* Headings — Pesos editoriales robustos */
:deep(.article-style h2) {
  font-family: 'Fraunces Variable', Georgia, serif;
  font-weight: 800;
  color: var(--color-ink);
  margin-top: 2.75rem;
  margin-bottom: 1rem;
  line-height: 1.15;
  letter-spacing: -0.015em;
  font-size: clamp(1.5rem, 3.5vw, 2.25rem);
  scroll-margin-top: 90px;
}
:deep(.article-style h3:not([data-mid-cta-headline])) {
  font-weight: 800;
  color: var(--color-ink);
  margin-top: 2rem;
  margin-bottom: 0.75rem;
  line-height: 1.25;
  letter-spacing: -0.01em;
  font-size: 1.3rem;
  scroll-margin-top: 90px;
}
@media (min-width: 640px) {
  :deep(.article-style h3:not([data-mid-cta-headline])) {
    font-size: 1.4rem;
  }
}
:deep(.article-style h3:not([data-mid-cta-headline]))::before {
  content: '→';
  color: var(--color-action);
  margin-right: 0.45rem;
  font-weight: 900;
}

/* Links */
:deep(.article-style a) {
  color: var(--color-action);
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: color 150ms ease;
}
:deep(.article-style a:hover) {
  color: var(--color-action-hover);
}

/* Separator */
:deep(.article-style hr) {
  border: none;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--color-line), transparent);
  margin: 2.5rem 0;
}

/* Lists */
:deep(.article-style ul) {
  list-style: none;
  padding-left: 0;
  margin-bottom: 1.5rem;
}
:deep(.article-style ul li) {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.6rem;
  color: var(--color-ink-muted);
  line-height: 1.7;
}
:deep(.article-style ul li::before) {
  content: '•';
  position: absolute;
  left: 0;
  top: 0;
  color: var(--color-action);
  font-weight: 700;
}
:deep(.article-style ol) {
  list-style: decimal;
  padding-left: 1.5rem;
  margin-bottom: 1.5rem;
}
:deep(.article-style ol li) {
  margin-bottom: 0.6rem;
  color: var(--color-ink-muted);
  line-height: 1.7;
}
:deep(.article-style ol li::marker) {
  color: var(--color-action);
  font-weight: 700;
}
:deep(.article-style li strong) {
  color: var(--color-ink);
  font-weight: 700;
}

/* Tablas */
.table-scroll-wrapper {
  margin: 2rem 0;
  overflow-x: auto;
  border: 1px solid var(--color-line);
  border-radius: 0.75rem;
  box-shadow: 0 2px 10px rgba(11, 31, 51, 0.04);
}
.table-scroll-wrapper :deep(table) {
  margin: 0;
  border: none;
}
:deep(.article-style table) {
  width: 100%;
  border-collapse: collapse;
  overflow: hidden;
  min-width: 480px;
  font-size: 0.875rem;
  border: 1px solid var(--color-line);
}
:deep(.article-style thead) {
  background: rgba(217, 211, 201, 0.35);
  border-bottom: 2px solid var(--color-line);
}
:deep(.article-style thead th) {
  padding: 0.875rem 1rem;
  text-align: left;
  font-weight: 700;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--color-ink);
}
:deep(.article-style tbody tr) {
  border-bottom: 1px solid rgba(217, 211, 201, 0.6);
  transition: background-color 120ms ease;
}
:deep(.article-style tbody tr:nth-child(even)) {
  background: var(--color-surface);
}
:deep(.article-style tbody tr:hover) {
  background: rgba(154, 107, 47, 0.05);
}
:deep(.article-style tbody td) {
  padding: 0.875rem 1rem;
  color: var(--color-ink-muted);
  vertical-align: top;
}
:deep(.article-style tbody td:first-child) {
  font-weight: 600;
  color: var(--color-ink);
}

/* Mid-CTA banners inserted in content — ALTO CONTRASTE AISLADO */
:deep([data-sk-mid-cta]) {
  background-color: var(--color-ink) !important;
  border: 1px solid rgba(217, 211, 201, 0.25) !important;
  border-radius: 1rem !important;
  margin: 2.5rem 0 !important;
}
:deep([data-sk-mid-cta] [data-mid-cta-badge]) {
  background-color: rgba(255, 255, 255, 0.12) !important;
  border: 1px solid rgba(255, 255, 255, 0.18) !important;
  color: #F4F1EC !important;
}
:deep([data-sk-mid-cta] [data-mid-cta-headline]) {
  color: #FFFFFF !important;
  font-family: 'Fraunces Variable', Georgia, serif !important;
  font-size: 1.35rem !important;
  font-weight: 800 !important;
  line-height: 1.2 !important;
  letter-spacing: -0.01em !important;
  margin-top: 0.75rem !important;
  margin-bottom: 0.35rem !important;
}
@media (min-width: 640px) {
  :deep([data-sk-mid-cta] [data-mid-cta-headline]) {
    font-size: 1.5rem !important;
  }
}
:deep([data-sk-mid-cta] [data-mid-cta-body]) {
  color: #F4F1EC !important;
  font-size: 0.9375rem !important;
  line-height: 1.6 !important;
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  opacity: 0.95 !important;
}
:deep([data-sk-mid-cta] [data-mid-cta-microcopy]) {
  color: #D9D3C9 !important;
  font-size: 0.75rem !important;
  line-height: 1.5 !important;
  margin-top: 0.5rem !important;
  margin-bottom: 0 !important;
  opacity: 0.85 !important;
}
:deep([data-sk-mid-cta] button) {
  background-color: var(--color-action) !important;
  color: #FFFFFF !important;
  font-weight: 700 !important;
  box-shadow: 0 4px 14px rgba(154, 107, 47, 0.35) !important;
}
:deep([data-sk-mid-cta] button:hover) {
  background-color: var(--color-action-hover) !important;
}
</style>
