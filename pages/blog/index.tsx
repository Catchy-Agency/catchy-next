import { GetStaticProps, NextPage } from 'next'
import { useQuerySubscription, renderMetaTags } from 'react-datocms'
import Head from 'next/head'

import { createSubscription, Subscription } from '../../gql/dato-cms'
import { allContentPosts } from '../../gql/queries/content-posts'
import { AllContentPosts } from '../../gql/types/AllContentPosts'
import { PreviewBanner } from '../../components/cms/PreviewBanner'
import { PageError } from '../../components/cms/PageError'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { MediumLinks } from '../../components/content-links/MediumLinks'

const ContentPosts: NextPage<{
  subscription: Subscription<AllContentPosts>
}> = ({ subscription }) => {
  const { data, error, status } = useQuerySubscription<AllContentPosts>(
    subscription,
  )

  const links =
    data?.allContentPosts.map((post) => ({
      id: post.id,
      url: `/blog/${post.slug}`,
      title: post.seo?.title || null,
      description: post.seo?.description || null,
      image: (post.seo?.image?.responsiveImage as any) || null,
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
        <div className="container">
          <div className="columns">
            <div className="column is-2">
              <h5 className="title is-5">Categories</h5>
              <hr />
              {data?.allCategories.map((cat) => (
                <div key={cat.id} className="mb-2">
                  <a href={`/blog/category/${cat.slug}`}>
                    <span className="tag is-medium">{cat.name}</span>
                  </a>
                </div>
              ))}
            </div>
            <div className="column is-10">
              <MediumLinks links={links} />
            </div>
          </div>
        </div>
      </section>
      {data?.footer && <Footer footer={data?.footer} />}
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => ({
  props: {
    subscription: await createSubscription<AllContentPosts>(
      context,
      allContentPosts,
    ),
  },
})

export default ContentPosts
