import { GetStaticProps } from 'next'

import { createSubscription } from '../../gql/dato-cms'
import { allBlogPosts } from '../../gql/queries/blog-posts'
import { AllBlogPosts } from '../../gql/types/AllBlogPosts'
import { BlogPosts } from '../../components/pages/BlogPosts'

export const getStaticProps: GetStaticProps = async (context) => ({
  props: {
    subscription: await createSubscription<AllBlogPosts>(context, allBlogPosts),
  },
})

export default BlogPosts
