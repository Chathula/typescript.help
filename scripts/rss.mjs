import { generateRSS } from 'pliny/utils/generate-rss.js'
import siteMetadata from '../data/siteMetadata.js'
import { allBlogs } from '../.contentlayer/generated/index.mjs'

const rss = () => {
  generateRSS(
    siteMetadata,
    allBlogs.map((blog) => {
      return { ...blog, path: `/${blog.slug}` }
    })
  )
  console.log('RSS feed generated...')
}
export default rss
