import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useQuerySubscription, renderMetaTags } from 'react-datocms'
import Head from 'next/head'
import Link from 'next/link'

import {
  createSubscription,
  getContentPagePaths,
  Subscription,
} from '../../gql/dato-cms'
import { contentPageBySlug } from '../../gql/queries/content-pages'
import { ContentPageBySlug } from '../../gql/types/ContentPageBySlug'
import { PreviewBanner } from '../../components/cms/PreviewBanner'
import { PageError } from '../../components/cms/PageError'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { BlockSections } from '../../components/BlockSections'

// const extractAncestors = (page: Conte)

const ContentPage: NextPage<{
  subscription: Subscription<ContentPageBySlug>
}> = ({ subscription }) => {
  const { data, error, status } = useQuerySubscription<ContentPageBySlug>(
    subscription,
  )

  // const ancestors = extractAncestors(data?.contentPage, []);

  return (
    <>
      <Head>
        {renderMetaTags([
          ...(data?.contentPage?._seoMetaTags || []),
          ...(data?.site.faviconMetaTags || []),
        ])}
      </Head>
      <PreviewBanner status={status} />
      {error && <PageError error={error} />}
      {data?.header && <Header header={data?.header} />}
      <header className="section">
        <div className="container">
          <nav className="breadcrumb" aria-label="breadcrumbs">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li className="is-active">
                <a href="#" aria-current="page">
                  {data?.contentPage?.title}
                </a>
              </li>
            </ul>
          </nav>
          <h1 className="title is-1">{data?.contentPage?.title}</h1>
        </div>
      </header>
      <BlockSections blocks={data?.contentPage?.blocks || []} />
      {data?.footer && <Footer footer={data?.footer} />}
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: await getContentPagePaths(),
  fallback: false,
})

export const getStaticProps: GetStaticProps = async (context) => ({
  props: {
    subscription: await createSubscription<ContentPageBySlug>(
      context,
      contentPageBySlug,
      { slug: context?.params?.slug },
    ),
  },
})

export default ContentPage
