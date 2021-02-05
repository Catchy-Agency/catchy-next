import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { renderMetaTags, useQuerySubscription } from 'react-datocms'
import Head from 'next/head'
import classNames from 'classnames'

import {
  createSubscription,
  getOldPagePaths,
  Subscription,
} from '../../gql/dato-cms'
import { pageBySlug } from '../../gql/queries'
import { PageBySlug } from '../../gql/types/PageBySlug'
import { PageContent } from '../../components-old/PageContent'
import { Container } from '../../components-old/basics/Container'

const Page: NextPage<{ subscription: Subscription<PageBySlug> }> = ({
  subscription,
}) => {
  const { data, error, status } = useQuerySubscription<PageBySlug>(subscription)
  const statusMessage = {
    connecting: 'Connecting to DatoCMS...',
    connected: 'Connected to DatoCMS, receiving live updates!',
    closed: 'Connection closed',
  }
  return (
    <div>
      <Head>
        {renderMetaTags([
          ...(data?.page?._seoMetaTags || []),
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
      <Container>
        <h1 className="mt-12">{data?.page?.title}</h1>
      </Container>
      {data?.page?.content && <PageContent content={data.page.content} />}
      <Container>
        <h1 className="mt-24">~ Raw Data ~</h1>
        <pre className="my-6 p-6 text-xs bg-gray-800 text-gray-300 rounded-lg">
          {JSON.stringify(data, null, 2)}
        </pre>
      </Container>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: await getOldPagePaths(),
  fallback: false,
})

export const getStaticProps: GetStaticProps = async (context) => ({
  props: {
    subscription: await createSubscription<PageBySlug>(context, pageBySlug, {
      slug: context?.params?.slug,
    }),
  },
})

export default Page
