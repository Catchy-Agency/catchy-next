import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { MouseEventHandler } from 'react';
import { renderMetaTags, useQuerySubscription } from 'react-datocms';
import { ServicePagesBySlug } from '../../gql/types/ServicePagesBySlug';
import { Subscription } from '../../util/dato-cms';
import { BlockSections } from '../BlockSections';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { PageError } from '../cms/PageError';
import { PreviewBanner } from '../cms/PreviewBanner';

const PAGE_SIZE = 9;

export interface ServicePageListProps {
  subscription: Subscription<ServicePagesBySlug>;
}

export const ServiceLPage: NextPage<ServicePageListProps> = ({
  subscription,
}) => {
  const router = useRouter();
  const { data, error, status } =
    useQuerySubscription<ServicePagesBySlug>(subscription);

  return (
    <div className="primary-page">
      <Head>
        {renderMetaTags([
          ...(data?.service?._seoMetaTags || []),
          ...(data?.site.faviconMetaTags || []),
        ])}
      </Head>
      <PreviewBanner status={status} />
      {error && <PageError error={error} />}
      {data?.header && <Header header={data?.header} />}
      <BlockSections
        blocks={data?.service?.blocks || []}
        containerMax="widescreen"
      />
      <section
        className="section"
        style={{ paddingTop: '0', marginBottom: '1.5rem' }}
      >
        <div className="container is-max-widescreen has-text-left">
          <h2 className="title is-2" style={{ maxWidth: '100%' }}>
            Check out our work
          </h2>
        </div>
      </section>
      <section
        className="ContentLinkSetRecord card--columns"
        style={{ marginTop: '0' }}
      ></section>
      {data?.footer && <Footer footer={data?.footer} />}
    </div>
  );
};

const buttonClickBlur: MouseEventHandler<HTMLButtonElement> = (e) =>
  e.currentTarget.blur();
