import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useQuerySubscription, renderMetaTags } from 'react-datocms'
import Head from 'next/head'
import Link from 'next/link'

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
      <header className="section">
        <div className="container">
          <nav className="breadcrumb" aria-label="breadcrumbs">
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a>Blog</a>
                </Link>
              </li>
              <li className="is-active">
                <a aria-current="page">{data?.contentPost?.title}</a>
              </li>
            </ul>
          </nav>
          <h1 className="title is-1">{data?.contentPost?.title}</h1>
          <div className="tags are-medium">
            {data?.contentPost?.categories.map((cat) => (
              <Link key={cat.id} href={`/blog/category/${cat.slug}`}>
                <a className="tag">{cat.name}</a>
              </Link>
            ))}
          </div>
        </div>
      </header>
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
