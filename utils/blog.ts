import MarkdownIt from 'markdown-it'

export type BlogPostMeta = {
  title: string
  date: string
  description: string
  slug: string
  cover?: string
  thumbnail?: string
  tags?: string
}

export type BlogPost = BlogPostMeta & {
  bodyHtml: string
}

const md = new MarkdownIt({
  html: false,
  linkify: true,
  typographer: true,
})

const rawModules = import.meta.glob('../content/blog/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>

function parseFrontmatter(raw: string): { meta: BlogPostMeta; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/)
  if (!match) {
    throw new Error('Blog post missing frontmatter')
  }

  const meta: Record<string, string> = {}
  for (const line of match[1].split(/\r?\n/)) {
    const idx = line.indexOf(':')
    if (idx === -1) continue
    const key = line.slice(0, idx).trim()
    const value = line.slice(idx + 1).trim()
    meta[key] = value
  }

  const title = meta.title || ''
  const date = meta.date || ''
  const description = meta.description || ''
  const slug = meta.slug || ''

  if (!title || !date || !description || !slug) {
    throw new Error(`Blog post incomplete frontmatter: ${slug || 'unknown'}`)
  }

  return {
    meta: {
      title,
      date,
      description,
      slug,
      ...(meta.cover ? { cover: meta.cover } : {}),
      ...(meta.thumbnail ? { thumbnail: meta.thumbnail } : {}),
      ...(meta.tags ? { tags: meta.tags } : {}),
    },
    body: match[2].trim(),
  }
}

function loadPosts(): BlogPost[] {
  return Object.values(rawModules)
    .map((raw) => {
      const { meta, body } = parseFrontmatter(raw)
      return {
        ...meta,
        bodyHtml: md.render(body),
      }
    })
    .sort((a, b) => b.date.localeCompare(a.date))
}

const postsCache = loadPosts()

export function listBlogPosts(): BlogPost[] {
  return postsCache
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  return postsCache.find((post) => post.slug === slug) || null
}

export function formatBlogDate(iso: string) {
  const [y, m, d] = iso.split('-').map(Number)
  if (!y || !m || !d) return iso
  return new Intl.DateTimeFormat('es-CO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(y, m - 1, d))
}

/** Prefer cover, then thumbnail — for cards/heroes. */
export function blogPostImage(post: BlogPostMeta): string | undefined {
  return post.cover || post.thumbnail || undefined
}
