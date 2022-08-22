import { GetStaticProps } from 'next'

import {
  BlogPostListPage,
  BlogPostsPageProps,
} from '../../components/pages/BlogPostListPage'
import { allBlogPosts } from '../../gql/queries/blog-posts'
import { AllBlogPosts } from '../../gql/types/AllBlogPosts'
import { createSubscription } from '../../util/dato-cms'

export const getStaticProps: GetStaticProps<BlogPostsPageProps> = async (
  context,
) => ({
  props: {
    subscription: await createSubscription<AllBlogPosts>(context, allBlogPosts),
    path: '/blog',
  },
})

export default BlogPostListPage
