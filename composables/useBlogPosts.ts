import { formatBlogDate, getBlogPostBySlug, listBlogPosts } from '~/utils/blog'

/** Composable wrapper for pages. */
export function useBlogPosts() {
  const posts = computed(() => listBlogPosts())

  function bySlug(slug: string) {
    return getBlogPostBySlug(slug)
  }

  return { posts, bySlug, listBlogPosts, getBlogPostBySlug, formatBlogDate }
}
