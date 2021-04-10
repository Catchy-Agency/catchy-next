import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import {
  createSubscription,
  getPrimaryAndContentPagePaths,
  Subscription,
} from '../util/dato-cms'
import { primaryPageBySlug } from '../gql/queries/primary-pages'
import { PrimaryPageBySlug } from '../gql/types/PrimaryPageBySlug'
import { contentPageBySlug } from '../gql/queries/content-pages'
import { ContentPageBySlug } from '../gql/types/ContentPageBySlug'
import { PrimaryPage } from '../components/pages/PrimaryPage'
import { ContentPage } from '../components/pages/ContentPage'

type PageProps =
  | { type: 'primary'; subscription: Subscription<PrimaryPageBySlug> }
  | { type: 'content'; subscription: Subscription<ContentPageBySlug> }

const PrimaryOrContentPage: NextPage<PageProps> = (props) => {
  switch (props.type) {
    case 'primary':
      return <PrimaryPage subscription={props.subscription} />
    case 'content':
      return <ContentPage subscription={props.subscription} />
    default:
      return <>Impossible State </>
  }
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: await getPrimaryAndContentPagePaths(),
  fallback: 'blocking',
})

export const getStaticProps: GetStaticProps<PageProps> = async (context) => {
  // Attempt primary page first
  const primarySubscription = await createSubscription<PrimaryPageBySlug>(
    context,
    primaryPageBySlug,
    { slug: context?.params?.slug },
  )
  if (primarySubscription.initialData?.primaryPage) {
    return { props: { type: 'primary', subscription: primarySubscription } }
  }

  // Attempt content page second
  const contentSubscription = await createSubscription<ContentPageBySlug>(
    context,
    contentPageBySlug,
    { slug: context?.params?.slug },
  )
  if (contentSubscription.initialData?.contentPage) {
    return { props: { type: 'content', subscription: contentSubscription } }
  }

  // 404
  return { notFound: true }
}

export default PrimaryOrContentPage
