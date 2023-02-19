import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { renderMetaTags, useQuerySubscription } from 'react-datocms'
import { BlockSections } from '../../components/BlockSections'
import { PageError } from '../../components/cms/PageError'
import { PreviewBanner } from '../../components/cms/PreviewBanner'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { caseStudyBySlug } from '../../gql/queries/case-studies'
import { BlogPostBySlug } from '../../gql/types/BlogPostBySlug'
import {
  createSubscription,
  getCaseStudyPaths,
  Subscription,
} from '../../util/dato-cms'

interface PageProps {
  subscription: Subscription<BlogPostBySlug>
}

const CaseStudyPage: NextPage<PageProps> = ({ subscription }) => {
  const { data, error, status } =
    useQuerySubscription<BlogPostBySlug>(subscription)

  return (
    <>
      <div className="content-post">
        <Head>
          {renderMetaTags([
            ...(data?.blogPost?._seoMetaTags || []),
            ...(data?.site.faviconMetaTags || []),
          ])}
        </Head>
        <PreviewBanner status={status} />
        {error && <PageError error={error} />}
        {data?.header && <Header header={data?.header} />}
        <header className="section">
          <div className="container is-max-desktop">
            <nav className="breadcrumb" aria-label="breadcrumbs">
              <ul>
                <li>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/work">
                    <a>Work</a>
                  </Link>
                </li>
                <li className="is-active">
                  <a aria-current="page">{data?.blogPost?.title}</a>
                </li>
              </ul>
            </nav>
            <h1 className="title is-1">{data?.blogPost?.title}</h1>
            <div className="tags are-medium">
              {data?.blogPost?.categories.map((cat) => (
                <Link key={cat.id} href={`/blog/category/${cat.slug || ''}`}>
                  <a className="tag">{cat.name}</a>
                </Link>
              ))}
            </div>
          </div>
        </header>
        <BlockSections
          blocks={data?.blogPost?.blocks || []}
          containerMax="desktop"
        />
      </div>
      {data?.footer && <Footer footer={data?.footer} />}
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: await getCaseStudyPaths(),
  fallback: 'blocking',
})

export const getStaticProps: GetStaticProps<PageProps> = async (context) => {
  const subscription = await createSubscription<BlogPostBySlug>(
    context,
    caseStudyBySlug,
    { slug: context?.params?.slug },
  )
  return subscription.initialData?.blogPost
    ? { props: { subscription } }
    : { notFound: true }
}

export default CaseStudyPage
