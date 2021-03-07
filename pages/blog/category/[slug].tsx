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
  if (typeof slug !== 'string') return { notFound: true }
  const categoryId = await getCategoryIdBySlug(slug, context.preview)
  if (!categoryId) return { notFound: true }
  const subscription = await createSubscription<BlogPostsByCategoryId>(
    context,
    blogPostsByCategoryId,
    { id: categoryId },
  )
  return { props: { subscription } }
}

export default BlogPosts
