import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { renderMetaTags, useQuerySubscription } from 'react-datocms'
import Head from 'next/head'

import {
  createSubscription,
  getPrimaryPagePaths,
  Subscription,
} from '../gql/dato-cms'
import { primaryPageBySlug } from '../gql/queries'
import { PrimaryPageBySlug } from '../gql/types/PrimaryPageBySlug'
import { PreviewBanner } from '../components/cms/PreviewBanner'
import { PageError } from '../components/cms/PageError'
import { PrimaryBlocks } from '../components/PrimaryBlocks'

const Page: NextPage<{ subscription: Subscription<PrimaryPageBySlug> }> = ({
  subscription,
}) => {
  const { data, error, status } = useQuerySubscription<PrimaryPageBySlug>(
    subscription,
  )

  return (
    <>
      <Head>
        {renderMetaTags([
          ...(data?.primaryPage?._seoMetaTags || []),
          ...(data?.site.faviconMetaTags || []),
        ])}
      </Head>
      <PreviewBanner status={status} />
      <PageError error={error} />
      <PrimaryBlocks blocks={data?.primaryPage?.blocks || []} />
      <div className="container">
        <h1 className="title">~ Raw Data ~</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: await getPrimaryPagePaths(),
  fallback: false,
})

export const getStaticProps: GetStaticProps = async (context) => ({
  props: {
    subscription: await createSubscription<PrimaryPageBySlug>(
      context,
      primaryPageBySlug,
      { slug: context?.params?.slug },
    ),
  },
})

export default Page
