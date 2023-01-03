import { generateRSS } from 'pliny/utils/generate-rss.js'
import siteMetadata from '../data/siteMetadata.js'
import { allBlogs } from '../.contentlayer/generated/index.mjs'

const rss = () => {
  const posts = allBlogs.map((blog) => {
    return { ...blog, path: blog.slug, _raw: { ...blog._raw, flattenedPath: blog.slug } }
  })

  generateRSS(siteMetadata, posts)
  console.log('RSS feed generated...')
}
export default rss
