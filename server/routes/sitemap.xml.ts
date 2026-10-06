import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

/**
 * Disk read for Nitro/sitemap. Docker production must COPY content/blog
 * (see Dockerfile) because .output alone does not include markdown sources.
 */
function blogEntriesFromDisk() {
  const dir = join(process.cwd(), 'content/blog')
  try {
    const entries = readdirSync(dir)
      .filter((name) => name.endsWith('.md'))
      .map((name) => {
        const raw = readFileSync(join(dir, name), 'utf8')
        const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)
        const meta: Record<string, string> = {}
        if (match) {
          for (const line of match[1].split(/\r?\n/)) {
            const idx = line.indexOf(':')
            if (idx === -1) continue
            meta[line.slice(0, idx).trim()] = line.slice(idx + 1).trim()
          }
        }
        const slug = meta.slug || name.replace(/\.md$/, '')
        if (!slug) {
          throw new Error(`Blog sitemap entry missing slug: ${name}`)
        }
        return { slug, date: meta.date || '' }
      })
    return entries
  } catch {
    return []
  }
}

export default defineEventHandler((event) => {
  const config = useRuntimeConfig()
  const siteUrl = config.public.baseUrl || 'http://localhost:3000'
  const today = new Date().toISOString().split('T')[0]

  const staticUrls = [
    { loc: '/', lastmod: today, changefreq: 'weekly', priority: '1.0' },
    { loc: '/blog', lastmod: today, changefreq: 'weekly', priority: '0.8' },
    { loc: '/landing/asesoria-inicial', lastmod: today, changefreq: 'weekly', priority: '0.9' },
    { loc: '/politicas-privacidad', lastmod: today, changefreq: 'yearly', priority: '0.4' },
    ...blogEntriesFromDisk().map((post) => ({
      loc: `/blog/${post.slug}`,
      lastmod: post.date || today,
      changefreq: 'monthly',
      priority: '0.7',
    })),
  ]

  const urls = staticUrls
    .map((entry) => {
      return `  <url>
    <loc>${siteUrl}${entry.loc}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`

  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8')
  return xml
})
