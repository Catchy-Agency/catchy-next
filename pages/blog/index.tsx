import { GetStaticProps } from 'next'

import { createSubscription } from '../../gql/dato-cms'
import { allContentPosts } from '../../gql/queries/content-posts'
import { AllContentPosts } from '../../gql/types/AllContentPosts'
import { ContentPosts } from '../../components/pages/ContentPosts'

export const getStaticProps: GetStaticProps = async (context) => ({
  props: {
    subscription: await createSubscription<AllContentPosts>(
      context,
      allContentPosts,
    ),
  },
})

export default ContentPosts
