import { GetStaticPaths, GetStaticProps } from 'next'

import {
  createSubscription,
  getCategoryIdBySlug,
  getCategoryPaths,
} from '../../../gql/dato-cms'
import { contentPostsByCategoryId } from '../../../gql/queries/content-posts'
import { ContentPostsByCategoryId } from '../../../gql/types/ContentPostsByCategoryId'
import { ContentPosts } from '../../../components/pages/ContentPosts'

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: await getCategoryPaths(),
  fallback: false,
})

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context?.params?.slug
  if (typeof slug !== 'string')
    throw new Error(`Bad slug ${JSON.stringify(slug, null, 2)}`)
  return {
    props: {
      subscription: await createSubscription<ContentPostsByCategoryId>(
        context,
        contentPostsByCategoryId,
        { id: await getCategoryIdBySlug(slug, context.preview) },
      ),
    },
  }
}

export default ContentPosts
