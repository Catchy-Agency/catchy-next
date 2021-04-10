import { GetStaticProps } from 'next'

import { createSubscription } from '../../util/dato-cms'
import { allBlogPosts } from '../../gql/queries/blog-posts'
import { AllBlogPosts } from '../../gql/types/AllBlogPosts'
import { BlogPosts, BlogPostsPageProps } from '../../components/pages/BlogPosts'

export const getStaticProps: GetStaticProps<BlogPostsPageProps> = async (
  context,
) => ({
  props: {
    subscription: await createSubscription<AllBlogPosts>(context, allBlogPosts),
  },
})

export default BlogPosts
