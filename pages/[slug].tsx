import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { renderMetaTags, useQuerySubscription } from 'react-datocms'
import Head from 'next/head'

import {
  createSubscription,
  getPrimaryPagePaths,
  Subscription,
} from '../gql/dato-cms'
import { primaryPageBySlug } from '../gql/queries/primary-pages'
import { PrimaryPageBySlug } from '../gql/types/PrimaryPageBySlug'
import { PreviewBanner } from '../components/cms/PreviewBanner'
import { PageError } from '../components/cms/PageError'
import { PrimaryBlocks } from '../components/PrimaryBlocks'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

const PrimaryPage: NextPage<{
  subscription: Subscription<PrimaryPageBySlug>
}> = ({ subscription }) => {
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
      {error && <PageError error={error} />}
      {data?.header && <Header header={data?.header} />}
      <PrimaryBlocks blocks={data?.primaryPage?.blocks || []} />
      {data?.footer && <Footer footer={data?.footer} />}
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

export default PrimaryPage
