import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useQuerySubscription, renderMetaTags } from 'react-datocms'
import Head from 'next/head'

import {
  createSubscription,
  getContentPostPaths,
  Subscription,
} from '../../gql/dato-cms'
import { contentPostBySlug } from '../../gql/queries/content-posts'
import { ContentPostBySlug } from '../../gql/types/ContentPostBySlug'
import { PreviewBanner } from '../../components/cms/PreviewBanner'
import { PageError } from '../../components/cms/PageError'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { BlockSections } from '../../components/BlockSections'

const ContentPost: NextPage<{
  subscription: Subscription<ContentPostBySlug>
}> = ({ subscription }) => {
  const { data, error, status } = useQuerySubscription<ContentPostBySlug>(
    subscription,
  )

  return (
    <>
      <Head>
        {renderMetaTags([
          ...(data?.contentPost?._seoMetaTags || []),
          ...(data?.site.faviconMetaTags || []),
        ])}
      </Head>
      <PreviewBanner status={status} />
      {error && <PageError error={error} />}
      {data?.header && <Header header={data?.header} />}
      <BlockSections blocks={data?.contentPost?.blocks || []} />
      {data?.footer && <Footer footer={data?.footer} />}
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: await getContentPostPaths(),
  fallback: false,
})

export const getStaticProps: GetStaticProps = async (context) => ({
  props: {
    subscription: await createSubscription<ContentPostBySlug>(
      context,
      contentPostBySlug,
      { slug: context?.params?.slug },
    ),
  },
})

export default ContentPost
