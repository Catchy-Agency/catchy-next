import { NextPage } from 'next'
import { renderMetaTags, useQuerySubscription } from 'react-datocms'
import Head from 'next/head'
import Link from 'next/link'

import { Subscription } from '../../util/dato-cms'
import { PrimaryPageBySlug } from '../../gql/types/PrimaryPageBySlug'
import { PreviewBanner } from '../cms/PreviewBanner'
import { PageError } from '../cms/PageError'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { BlockSections } from '../BlockSections'

export const PrimaryPage: NextPage<{
  subscription: Subscription<PrimaryPageBySlug>
}> = ({ subscription }) => {
  const { data, error, status } =
    useQuerySubscription<PrimaryPageBySlug>(subscription)

  return (
    <div className="primary-page">
      <Head>
        {renderMetaTags([
          ...(data?.primaryPage?._seoMetaTags || []),
          ...(data?.site.faviconMetaTags || []),
        ])}
      </Head>
      <PreviewBanner status={status} />
      {error && <PageError error={error} />}
      {data?.header && <Header header={data?.header} />}
      {data?.primaryPage?.showBreadcrumbs && (
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
                  <a aria-current="page">{data?.primaryPage?.title}</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      )}
      <BlockSections
        blocks={data?.primaryPage?.blocks || []}
        textAlign={data?.primaryPage?.textAlign}
        containerMax="widescreen"
      />
      {data?.footer && <Footer footer={data?.footer} />}
    </div>
  )
}
