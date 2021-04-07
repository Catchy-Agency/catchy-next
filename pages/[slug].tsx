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

const PrimaryOrContentPage: NextPage<{
  primarySubscription?: Subscription<PrimaryPageBySlug>
  contentSubscription?: Subscription<ContentPageBySlug>
}> = (props) => {
  if (props.primarySubscription) {
    return <PrimaryPage subscription={props.primarySubscription} />
  }
  if (props.contentSubscription) {
    return <ContentPage subscription={props.contentSubscription} />
  }
  return <>Impossible State </>
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: await getPrimaryAndContentPagePaths(),
  fallback: 'blocking',
})

export const getStaticProps: GetStaticProps = async (context) => {
  // Attempt primary page first
  const primarySubscription = await createSubscription<PrimaryPageBySlug>(
    context,
    primaryPageBySlug,
    { slug: context?.params?.slug },
  )
  if (primarySubscription.initialData?.primaryPage) {
    return { props: { primarySubscription } }
  }

  // Attempt content page second
  const contentSubscription = await createSubscription<ContentPageBySlug>(
    context,
    contentPageBySlug,
    { slug: context?.params?.slug },
  )
  if (contentSubscription.initialData?.contentPage) {
    return { props: { contentSubscription } }
  }

  // 404
  return { notFound: true }
}

export default PrimaryOrContentPage
