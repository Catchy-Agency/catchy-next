import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import {
  useQuerySubscription,
  renderMetaTags,
  ResponsiveImageType,
} from 'react-datocms'

import { Subscription } from '../../gql/dato-cms'
import { AllBlogPosts } from '../../gql/types/AllBlogPosts'
import { PreviewBanner } from '../cms/PreviewBanner'
import { PageError } from '../cms/PageError'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { MediumLinks } from '../content-links/MediumLinks'
import Link from 'next/link'

export const BlogPosts: NextPage<{
  subscription: Subscription<AllBlogPosts>
}> = ({ subscription }) => {
  const router = useRouter()
  const { data, error, status } = useQuerySubscription<AllBlogPosts>(
    subscription,
  )

  const links =
    data?.allBlogPosts.map((post) => ({
      id: post.id,
      url: `/blog/${post.slug || ''}`,
      title: post.title,
      description: post.description,
      image:
        (post.previewImage?.responsiveImage as ResponsiveImageType) || null,
      callToAction: 'Read More',
    })) || []

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
      <section className="section">
        <div className="container is-max-widescreen">
          <div className="columns">
            <div className="column is-2">
              <h5 className="title is-5">Categories</h5>
              <hr />
              {data?.allCategories.map((cat) => (
                <div key={cat.id} className="mb-2 mr-2 is-inline-block-mobile">
                  {cat.slug === router.query.slug ? (
                    <div className="tags are-medium has-addons">
                      <span className="tag is-primary">{cat.name}</span>
                      <Link href="/blog">
                        <a className="tag is-primary is-delete" />
                      </Link>
                    </div>
                  ) : (
                    <Link href={`/blog/category/${cat.slug || ''}`}>
                      <a className="tag is-medium">{cat.name}</a>
                    </Link>
                  )}
                </div>
              ))}
            </div>
            <div className="column is-10">
              <MediumLinks links={links} />
              {links.length === 0 && (
                <div className="section is-size-3 is-italic has-text-centered">
                  No posts to show
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {data?.footer && <Footer footer={data?.footer} />}
    </>
  )
}
