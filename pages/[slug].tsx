import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { renderMetaTags, useQuerySubscription } from 'react-datocms'
import Head from 'next/head'
import classNames from 'classnames'

import {
  createSubscription,
  getPrimaryPagePaths,
  Subscription,
} from '../gql/dato-cms'
import { primaryPageBySlug } from '../gql/queries'
import { PrimaryPageBySlug } from '../gql/types/PrimaryPageBySlug'

const Page: NextPage<{ subscription: Subscription<PrimaryPageBySlug> }> = ({
  subscription,
}) => {
  const { data, error, status } = useQuerySubscription<PrimaryPageBySlug>(
    subscription,
  )
  const statusMessage = {
    connecting: 'Connecting to DatoCMS...',
    connected: 'Connected to DatoCMS, receiving live updates!',
    closed: 'Connection closed',
  }
  return (
    <div>
      <Head>
        {renderMetaTags([
          ...(data?.primaryPage?._seoMetaTags || []),
          ...(data?.site.faviconMetaTags || []),
        ])}
      </Head>
      <div
        className={classNames(
          {
            'bg-red-500': status === 'closed',
            'bg-yellow-500': status === 'connecting',
            'bg-green-500': status === 'connected',
          },
          'text-white',
          'p-5',
        )}
      >
        Connection status: {statusMessage[status]}
      </div>
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
