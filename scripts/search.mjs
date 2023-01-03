import { writeFileSync } from 'fs'
import { allCoreContent } from 'pliny/utils/contentlayer.js'
import { allBlogs } from '../.contentlayer/generated/index.mjs'
import siteMetadata from '../data/siteMetadata.js'

const search = () => {
  const posts = allBlogs.map((blog) => {
    return { ...blog, path: blog.slug, _raw: { ...blog._raw, flattenedPath: blog.slug } }
  })

  if (siteMetadata?.search?.kbarConfig?.searchDocumentsPath) {
    writeFileSync(
      `public/${siteMetadata.search.kbarConfig.searchDocumentsPath}`,
      JSON.stringify(allCoreContent(posts))
    )
    console.log('Local search index generated...')
  }
}
export default search
