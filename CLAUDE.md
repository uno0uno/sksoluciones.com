# SK Soluciones - Web Project

## Project Information
- **Project Name**: SK Soluciones
- **Domain**: sksoluciones.com
- **Technology Stack**: Nuxt.js, Vue.js, TypeScript, Tailwind CSS
- **Type**: Business solutions website

## Blog (content collection - sin DB, replica el-diferencial)

Fuente: `content/blog/*.md` vía `utils/blog.ts:23` `import.meta.glob(..., '?raw')` + `MarkdownIt(html:false)`. Prerender `nuxt.config.ts:10` `routeRules /blog/** prerender:true` + `nitro.prerender.crawlLinks`.

### Frontmatter estándar (waro-seo draft)

| campo | requerido | límites | ejemplo |
|---|---|---|---|
| `title` | sí | 50-60ch, incluye keyword | `Fraude bancario en Colombia: qué hacer si te vaciaron la cuenta` |
| `description` | sí | 120-160ch meta | `Guía primeras 24h, reclamación banco y SFC...` |
| `date` | sí | `YYYY-MM-DD` ISO | `2026-08-11` |
| `slug` | sí | kebab, coincide filename | `fraude-bancario-que-hacer` |
| `cover` | rec | `/images/blog/<slug>-cover-1200x630.webp` | `coverAlt` obligatorio si hay cover |
| `thumbnail` | rec | `/images/blog/<slug>-thumb-600x315.webp` | fallback para cards |
| `coverAlt` | rec | 80-120ch descriptivo | `Abogado revisando extracto bancario por fraude` |
| `tags` | rec | csv 3-5 tags | `Fraude Bancario, Vishing, SFC` |
| `author` | rec | Persona | `Carlos Salamanca` |

Validación: `title/description/slug/date` throw si falta (`utils/blog.ts:49`). `tags` se split por `,` para `BlogPosting.keywords`. `coverAlt` alimenta `BlogArticleImage alt`.

### SEO técnico blog

- Canonical normalizado `baseUrl.replace(/\/$/, '')` en `pages/blog/index.vue:12` y `[slug].vue:28` + `server/routes/sitemap.xml.ts:38`.
- `robots.txt` con `sitemap: ${siteUrl}/sitemap.xml` (`nuxt.config.ts:66`).
- `head` global `robots index,follow` + `google-site-verification` (`nuxt.config.ts:52`).
- `[slug].vue:40` inyecta JSON-LD `BlogPosting` + `BreadcrumbList` + `article:published_time`, `og:locale es_CO`, `twitter:card`.
- `sitemap.xml` incluye `/blog` + cada `/blog/${slug}` con `lastmod=date`.
- `Dockerfile:16` `COPY --from=build /app/content ./content` requerido para sitemap en prod.

### Comandos waro-seo (cuando crear contenido)

```bash
# draft genera content/blog/<slug>.md con frontmatter válido
pnpm waro:seo:draft  # alias local a generar md

# review valida longitudes, slug, og image existe, JSON-LD
pnpm waro:seo:review

# build verifica prerender
pnpm build && ls .output/public/blog
```

## Development Commands
```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Type check
npm run typecheck
```

## Project Structure
```
sksoluciones.com/
├── .nuxt/                 # Nuxt build directory
├── assets/                # Static assets
├── components/            # Vue components
├── composables/           # Vue composables
├── layouts/               # Layout components
├── pages/                 # Page components (auto-routing)
├── plugins/               # Nuxt plugins
├── public/                # Public static files
├── server/                # Server-side code
├── store/                 # State management
├── test/                  # Test files
├── app.vue               # Main app component
├── nuxt.config.ts        # Nuxt configuration
├── package.json          # Dependencies
├── tailwind.config.js    # Tailwind CSS config
└── tsconfig.json         # TypeScript config
```

## Environment Setup
- Node.js environment
- TypeScript enabled
- Tailwind CSS for styling
- Docker support available

## Key Features
- Responsive design
- TypeScript support
- Server-side rendering
- Auto-generated routing
- Component-based architecture

## Deployment
- Docker containerization available
- AWS Amplify hosting configured
- Production build optimization

## Notes
- Uses Nuxt.js 3 framework
- Fully dockerized development environment
- Modern Vue.js with Composition API