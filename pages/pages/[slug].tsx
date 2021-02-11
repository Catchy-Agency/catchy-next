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
import {
  ContentPageBySlug,
  ContentPageBySlug_contentPage_parent,
} from '../../gql/types/ContentPageBySlug'
import { PreviewBanner } from '../../components/cms/PreviewBanner'
import { PageError } from '../../components/cms/PageError'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { BlockSections } from '../../components/BlockSections'
import { MediumLinks } from '../../components/content-links/MediumLinks'

type Parent = ContentPageBySlug_contentPage_parent
const extractAncestors = (parent: Parent | null, list: Parent[]): Parent[] => {
  if (parent === null) return list
  else return extractAncestors(parent.parent as Parent, [...list, parent])
}

function notEmpty<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined
}

const ContentPage: NextPage<{
  subscription: Subscription<ContentPageBySlug>
}> = ({ subscription }) => {
  const { data, error, status } = useQuerySubscription<ContentPageBySlug>(
    subscription,
  )

  const ancestors = extractAncestors(data?.contentPage?.parent || null, [])

  const links =
    data?.contentPage?.children
      ?.map(
        (child) =>
          child && {
            id: child.id,
            url: `/blog/${child.slug}`,
            title: child.seo?.title || null,
            description: child.seo?.description || null,
            image: (child.seo?.image?.responsiveImage as any) || null,
            callToAction: 'Read More',
          },
      )
      .filter(notEmpty) || []

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
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              {ancestors.map((ancestor) => (
                <li>
                  <Link href={`/pages/${ancestor.slug}`}>
                    <a>{ancestor.title}</a>
                  </Link>
                </li>
              ))}
              <li className="is-active">
                <a aria-current="page">{data?.contentPage?.title}</a>
              </li>
            </ul>
          </nav>
          <h1 className="title is-1">{data?.contentPage?.title}</h1>
        </div>
      </header>
      <BlockSections blocks={data?.contentPage?.blocks || []} />
      {links.length && (
        <section className="section">
          <div className="container">
            <MediumLinks links={links} />{' '}
          </div>
        </section>
      )}
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
