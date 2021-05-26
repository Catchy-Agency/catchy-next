import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useQuerySubscription, renderMetaTags } from 'react-datocms'
import Head from 'next/head'
import { useCallback } from 'react'

import {
  createSubscription,
  getDownloadPagePaths,
  Subscription,
} from '../../util/dato-cms'
import { PreviewBanner } from '../../components/cms/PreviewBanner'
import { PageError } from '../../components/cms/PageError'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { DownloadPageBySlug } from '../../gql/types/DownloadPageBySlug'
import { downloadPageBySlug } from '../../gql/queries/download-pages'

interface PageProps {
  subscription: Subscription<DownloadPageBySlug>
}

const DownloadPage: NextPage<PageProps> = ({ subscription }) => {
  const { data, error, status } = useQuerySubscription<DownloadPageBySlug>(
    subscription,
  )

  const clickLink = useCallback<(link: HTMLAnchorElement | null) => void>(
    (link) => link && link.click(),
    [],
  )

  return (
    <div className="download-page">
      <Head>
        {renderMetaTags([
          ...(data?.downloadPage?._seoMetaTags || []),
          ...(data?.site.faviconMetaTags || []),
        ])}
      </Head>
      <PreviewBanner status={status} />
      {error && <PageError error={error} />}
      {data?.header && <Header header={data?.header} />}
      <section className="section">
        <div className="container is-max-desktop has-text-centered py-6">
          <div className="box py-6 my-6">
            <h1 className="title is-1">{data?.downloadPage?.messageText}</h1>
            <a
              download={data?.downloadPage?.fileName || ''}
              href={data?.downloadPage?.fileUrl || ''}
              ref={clickLink}
            >
              {data?.downloadPage?.linkText}
            </a>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container" />
      </section>
      {data?.footer && <Footer footer={data?.footer} />}
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: await getDownloadPagePaths(),
  fallback: 'blocking',
})

export const getStaticProps: GetStaticProps<PageProps> = async (context) => {
  const subscription = await createSubscription<DownloadPageBySlug>(
    context,
    downloadPageBySlug,
    { slug: context?.params?.slug },
  )
  return subscription.initialData?.downloadPage
    ? { props: { subscription } }
    : { notFound: true }
}

export default DownloadPage
