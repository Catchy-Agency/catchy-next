import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import {
  renderMetaTags,
  ResponsiveImageType,
  useQuerySubscription,
} from 'react-datocms';

import {
  ContentPageBySlug,
  ContentPageBySlug_contentPage_parent,
} from '../../gql/types/ContentPageBySlug';
import { Subscription } from '../../util/dato-cms';
import { notEmpty } from '../../util/notEmpty';
import { BlockSections } from '../BlockSections';
import { PageError } from '../cms/PageError';
import { PreviewBanner } from '../cms/PreviewBanner';
import { CardRows } from '../content-links/CardRows';
import { Footer } from '../Footer';
import { Header } from '../Header';

export const ContentPage: NextPage<{
  subscription: Subscription<ContentPageBySlug>;
}> = ({ subscription }) => {
  const { data, error, status } =
    useQuerySubscription<ContentPageBySlug>(subscription);

  const ancestors = extractAncestors(data?.contentPage?.parent || null, []);

  const links =
    data?.contentPage?.children
      ?.map(
        (child) =>
          child && {
            id: child.id,
            url: `/${child.slug || ''}`,
            title: child.title,
            description: child.description,
            image:
              (child.previewImage?.responsiveImage as ResponsiveImageType) ||
              null,
            imageLg:
              (child.previewImageLg?.responsiveImage as ResponsiveImageType) ||
              null,
            imageSm:
              (child.previewImageSm?.responsiveImage as ResponsiveImageType) ||
              null,
            imageCol:
              (child.previewImageCol?.responsiveImage as ResponsiveImageType) ||
              null,
            callToAction: 'Read More',
          },
      )
      .filter(notEmpty) || [];
  const hideBreadcrumb =
    data?.contentPage &&
    data.contentPage.blocks.length > 0 &&
    data.contentPage.blocks[0]?.__typename === 'BannerRecord';
  return (
    <>
      <div
        className={`${
          data?.contentPage?.lightTheme ? 'content-page' : 'primary-page'
        }`}
      >
        <Head>
          {renderMetaTags([
            ...(data?.contentPage?._seoMetaTags || []),
            ...(data?.site.faviconMetaTags || []),
          ])}
        </Head>
        <PreviewBanner status={status} />
        {error && <PageError error={error} />}
        {data?.header && <Header header={data?.header} />}
        {!hideBreadcrumb && (
          <header className="section Blog">
            <div className="container is-max-widescreen">
              <nav className="breadcrumb" aria-label="breadcrumbs">
                <ul>
                  <li>
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  {ancestors.map((ancestor) => (
                    <li key={ancestor.id}>
                      <Link href={`/${ancestor.slug || ''}`}>
                        <a>{ancestor.title}</a>
                      </Link>
                    </li>
                  ))}
                  <li className="is-active">
                    <a aria-current="page">{data?.contentPage?.title}</a>
                  </li>
                </ul>
              </nav>
              <h1 className="title is-1 title-blog">
                {data?.contentPage?.title}
              </h1>
            </div>
          </header>
        )}
        <div className="block-sections">
          <BlockSections
            blocks={data?.contentPage?.blocks || []}
            containerMax="desktop"
          />
        </div>
        {links.length > 0 && (
          <section className="section">
            <div className="container is-max-desktop">
              <CardRows links={links} />
            </div>
          </section>
        )}
      </div>
      {data?.footer && <Footer footer={data?.footer} />}
    </>
  );
};

type Parent = ContentPageBySlug_contentPage_parent;
const extractAncestors = (parent: Parent | null, list: Parent[]): Parent[] => {
  if (parent === null) return list;
  else return extractAncestors(parent.parent as Parent, [...list, parent]);
};
