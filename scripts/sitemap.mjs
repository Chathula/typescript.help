import { generateSitemap } from 'pliny/utils/generate-sitemap.js'
import siteMetadata from '../data/siteMetadata.js'
import { allBlogs } from '../.contentlayer/generated/index.mjs'

const sitemap = () => {
  generateSitemap(
    siteMetadata.siteUrl,
    allBlogs.map((blog) => {
      return { ...blog, path: `/${blog.slug}` }
    })
  )
  console.log('Sitemap generated...')
}
export default sitemap
