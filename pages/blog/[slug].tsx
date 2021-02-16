import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useQuerySubscription, renderMetaTags } from 'react-datocms'
import Head from 'next/head'
import Link from 'next/link'

import {
  createSubscription,
  getBlogPostPaths,
  Subscription,
} from '../../gql/dato-cms'
import { blogPostBySlug } from '../../gql/queries/blog-posts'
import { BlogPostBySlug } from '../../gql/types/BlogPostBySlug'
import { PreviewBanner } from '../../components/cms/PreviewBanner'
import { PageError } from '../../components/cms/PageError'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { BlockSections } from '../../components/BlockSections'

const BlogPost: NextPage<{
  subscription: Subscription<BlogPostBySlug>
}> = ({ subscription }) => {
  const { data, error, status } = useQuerySubscription<BlogPostBySlug>(
    subscription,
  )

  return (
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
                <Link href="/blog">
                  <a>Blog</a>
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
      {data?.footer && <Footer footer={data?.footer} />}
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: await getBlogPostPaths(),
  fallback: false,
})

export const getStaticProps: GetStaticProps = async (context) => ({
  props: {
    subscription: await createSubscription<BlogPostBySlug>(
      context,
      blogPostBySlug,
      { slug: context?.params?.slug },
    ),
  },
})

export default BlogPost
