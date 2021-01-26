import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { renderMetaTags, useQuerySubscription } from 'react-datocms'
import Head from 'next/head'
import gql from 'graphql-tag'

import {
  createSubscription,
  getPagePaths,
  Subscription,
} from '../../gql/dato-cms'
import { pageBySlug } from '../../gql/queries'

const Page: NextPage<{ subscription: Subscription }> = ({ subscription }) => {
  const { data, error, status } = useQuerySubscription(subscription)
  const statusMessage = {
    connecting: 'Connecting to DatoCMS...',
    connected: 'Connected to DatoCMS, receiving live updates!',
    closed: 'Connection closed',
  }
  return (
    <div>
      <Head>
        {renderMetaTags([
          ...data.page._seoMetaTags,
          ...data.site.faviconMetaTags,
        ])}
      </Head>
      <p>Connection status: {statusMessage[status]}</p>
      {error && (
        <div>
          <h1>Error: {error.code}</h1>
          <div>{error.message}</div>
          {error.response && (
            <pre>{JSON.stringify(error.response, null, 2)}</pre>
          )}
        </div>
      )}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: await getPagePaths(),
  fallback: false,
})

export const getStaticProps: GetStaticProps = async (context) => ({
  props: {
    subscription: await createSubscription(context, pageBySlug, {
      slug: context?.params?.slug,
    }),
  },
})

export default Page
