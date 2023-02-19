import { GetStaticPaths, GetStaticProps } from 'next'

import {
  BlogPostListPage,
  BlogPostListPageProps,
} from '../../../components/pages/BlogPostListPage'
import { blogPostsByCategoryId } from '../../../gql/queries/blog-posts'
import { BlogPostsByCategoryId } from '../../../gql/types/BlogPostsByCategoryId'
import {
  createSubscription,
  getCategoryIdBySlug,
  getCategoryPaths,
} from '../../../util/dato-cms'

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: await getCategoryPaths(),
  fallback: 'blocking',
})

export const getStaticProps: GetStaticProps<BlogPostListPageProps> = async (
  context,
) => {
  const slug = context?.params?.slug
  if (typeof slug !== 'string') return { notFound: true }
  const categoryId = await getCategoryIdBySlug(slug, context.preview)
  if (!categoryId) return { notFound: true }
  const subscription = await createSubscription<BlogPostsByCategoryId>(
    context,
    blogPostsByCategoryId,
    { id: categoryId },
  )
  return { props: { subscription, path: `/blog/category/${slug}` } }
}

export default BlogPostListPage
