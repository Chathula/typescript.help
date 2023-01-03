import { generateSitemap } from 'pliny/utils/generate-sitemap.js'
import siteMetadata from '../data/siteMetadata.js'
import { allBlogs } from '../.contentlayer/generated/index.mjs'

const sitemap = () => {
  const posts = allBlogs.map((blog) => {
    return { ...blog, path: blog.slug, _raw: { ...blog._raw, flattenedPath: blog.slug } }
  })

  generateSitemap(siteMetadata.siteUrl, posts)
  console.log('Sitemap generated...')
}
export default sitemap
