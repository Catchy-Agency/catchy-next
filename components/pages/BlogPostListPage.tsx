import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { MouseEventHandler } from 'react'
import {
  renderMetaTags,
  ResponsiveImageType,
  useQuerySubscription,
} from 'react-datocms'

import { AllBlogPosts } from '../../gql/types/AllBlogPosts'
import { Subscription } from '../../util/dato-cms'
import { PageError } from '../cms/PageError'
import { PreviewBanner } from '../cms/PreviewBanner'
import { ThumbRows } from '../content-links/ThumbRows'
import { Footer } from '../Footer'
import { Header } from '../Header'

const PAGE_SIZE = 10

export interface BlogPostListPageProps {
  subscription: Subscription<AllBlogPosts>
  path: string
}

export const BlogPostListPage: NextPage<BlogPostListPageProps> = ({
  subscription,
  path,
}) => {
  const router = useRouter()
  const { data, error, status } =
    useQuerySubscription<AllBlogPosts>(subscription)

  const links =
    data?.allBlogPosts.map((post) => ({
      id: post.id,
      url: `/blog/${post.slug || ''}`,
      title: post.title,
      description: post.description,
      image:
        (post.previewImage?.responsiveImage as ResponsiveImageType) || null,
      imageLg:
        (post.previewImageLg?.responsiveImage as ResponsiveImageType) || null,
      imageSm:
        (post.previewImageSm?.responsiveImage as ResponsiveImageType) || null,
      imageCol:
        (post.previewImageCol?.responsiveImage as ResponsiveImageType) || null,
      callToAction: 'Read More',
    })) || []

  const p = Number(router.query.p)
  const pageNum = Number.isNaN(p) ? 1 : p
  const pageCount = Math.ceil(links.length / PAGE_SIZE)
  const pageIndex = pageNum - 1
  const visibleLinks = links.slice(
    pageIndex * PAGE_SIZE,
    (pageIndex + 1) * PAGE_SIZE,
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
      <header className="section py-0 pt-5">
        <div className="container is-max-widescreen">
          <nav className="breadcrumb" aria-label="breadcrumbs">
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li className="is-active">
                <a aria-current="page">Blog</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section className="section">
        <div className="container is-max-widescreen">
          <div className="columns">
            <div className="column is-one-fifth-desktop is-flex-grow-0">
              <h5 className="title is-5">Categories</h5>
              <hr />
              {data?.allCategories.map((cat) => (
                <div key={cat.id} className="mb-2 mr-2 is-inline-block-mobile">
                  {cat.slug === router.query.slug ? (
                    <div className="tags are-medium has-addons">
                      <span className="tag is-primary">
                        {cat.name}
                        &nbsp; &nbsp;
                        <Link href="/blog">
                          <a
                            className="has-text-white"
                            style={{
                              margin: '-0.33rem -1rem',
                              padding: '0.33rem 1rem',
                            }}
                          >
                            ✕
                          </a>
                        </Link>
                      </span>
                    </div>
                  ) : (
                    <Link href={`/blog/category/${cat.slug || ''}`}>
                      <a className="tag is-medium">{cat.name}</a>
                    </Link>
                  )}
                </div>
              ))}
            </div>
            <div className="column">
              <ThumbRows links={visibleLinks} imageAlign="Left" />
              {links.length === 0 && (
                <div className="section is-size-3 is-italic has-text-centered">
                  No posts to show
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="section pt-4 pb-6">
        {pageCount > 1 && (
          <div className="container is-max-widescreen has-text-centered">
            {pageNum > 1 ? (
              <Link href={`${path}?p=${pageNum - 1}`}>
                <a>
                  <button
                    className="button is-small avoid-tf"
                    onClick={buttonClickBlur}
                  >
                    ←
                  </button>
                </a>
              </Link>
            ) : (
              <button
                className="button is-small avoid-tf"
                disabled={true}
                style={{ visibility: 'hidden' }}
              >
                ←
              </button>
            )}
            <span className="mx-5" style={{ verticalAlign: 'sub' }}>
              Page {pageNum} of {pageCount}
            </span>
            {pageNum < pageCount ? (
              <Link href={`${path}?p=${pageNum + 1}`}>
                <a>
                  <button
                    className="button is-small avoid-tf"
                    onClick={buttonClickBlur}
                  >
                    →
                  </button>
                </a>
              </Link>
            ) : (
              <button
                className="button is-small avoid-tf"
                disabled={true}
                style={{ visibility: 'hidden' }}
              >
                →
              </button>
            )}
          </div>
        )}
      </section>
      {data?.footer && <Footer footer={data?.footer} />}
    </>
  )
}

const buttonClickBlur: MouseEventHandler<HTMLButtonElement> = (e) =>
  e.currentTarget.blur()
