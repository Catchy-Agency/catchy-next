import { GetStaticPaths, GetStaticProps } from 'next'

import {
  createSubscription,
  getCategoryIdBySlug,
  getCategoryPaths,
} from '../../../gql/dato-cms'
import { blogPostsByCategoryId } from '../../../gql/queries/blog-posts'
import { BlogPostsByCategoryId } from '../../../gql/types/BlogPostsByCategoryId'
import { BlogPosts } from '../../../components/pages/BlogPosts'

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: await getCategoryPaths(),
  fallback: 'blocking',
})

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context?.params?.slug
  if (typeof slug !== 'string')
    throw new Error(`Bad slug ${JSON.stringify(slug, null, 2)}`)
  return {
    props: {
      subscription: await createSubscription<BlogPostsByCategoryId>(
        context,
        blogPostsByCategoryId,
        { id: await getCategoryIdBySlug(slug, context.preview) },
      ),
    },
  }
}

export default BlogPosts
