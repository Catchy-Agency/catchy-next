import { NextPage } from 'next';
import Head from 'next/head';
import { renderMetaTags, useQuerySubscription } from 'react-datocms';
import { ServicePagesBySlug } from '../../gql/types/ServicePagesBySlug';
import { Subscription } from '../../util/dato-cms';
import { BlockSections } from '../BlockSections';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { PageError } from '../cms/PageError';
import { PreviewBanner } from '../cms/PreviewBanner';

export interface ServicePageListProps {
  subscription: Subscription<ServicePagesBySlug>;
}

export const ServiceLPage: NextPage<ServicePageListProps> = ({
  subscription,
}) => {
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
        pageTheme={data?.service?.themeColor ?? undefined}
      />
      {data?.footer && <Footer footer={data?.footer} />}
    </div>
  );
};
