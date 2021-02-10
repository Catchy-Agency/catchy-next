import { GetStaticPaths, GetStaticProps } from 'next'

import { createSubscription, getCategoryPaths } from '../../../gql/dato-cms'
import { allContentPosts } from '../../../gql/queries/content-posts'
import { AllContentPosts } from '../../../gql/types/AllContentPosts'
import { ContentPosts } from '../../../components/pages/ContentPosts'

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: await getCategoryPaths(),
  fallback: false,
})

export const getStaticProps: GetStaticProps = async (context) => {
  // todo fetch category id by slug
  // todo fetch content posts by linked category id
  return {
    props: {
      subscription: await createSubscription<AllContentPosts>(
        context,
        allContentPosts,
      ),
    },
  }
}

export default ContentPosts
