import { GetStaticProps, NextPage } from 'next'
import { useQuerySubscription, renderMetaTags } from 'react-datocms'
import Head from 'next/head'

import { createSubscription, Subscription } from '../../gql/dato-cms'
import { allContentPosts } from '../../gql/queries/content-posts'
import { PrimaryPageBySlug } from '../../gql/types/PrimaryPageBySlug'
import { PreviewBanner } from '../../components/cms/PreviewBanner'
import { PageError } from '../../components/cms/PageError'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

const ContentPosts: NextPage<{
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

      <pre>{JSON.stringify(data, null, 2)}</pre>

      {data?.footer && <Footer footer={data?.footer} />}
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => ({
  props: {
    subscription: await createSubscription<PrimaryPageBySlug>(
      context,
      allContentPosts,
    ),
  },
})

export default ContentPosts
