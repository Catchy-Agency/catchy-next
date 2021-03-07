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
  try {
    const slug = context?.params?.slug
    if (typeof slug !== 'string') throw new Error('Bad slug')
    return {
      props: {
        subscription: await createSubscription<BlogPostsByCategoryId>(
          context,
          blogPostsByCategoryId,
          { id: await getCategoryIdBySlug(slug, context.preview) },
        ),
      },
    }
  } catch (_) {
    return { notFound: true }
  }
}

export default BlogPosts
