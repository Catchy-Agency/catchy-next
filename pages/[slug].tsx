import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { ContentPage } from '../components/pages/ContentPage';
import { PrimaryPage } from '../components/pages/PrimaryPage';
import { ServiceLPage } from '../components/pages/ServiceListPage';
import { contentPageBySlug } from '../gql/queries/content-pages';
import { primaryPageBySlug } from '../gql/queries/primary-pages';
import { servicePagesBySlug } from '../gql/queries/service-pages';
import { ContentPageBySlug } from '../gql/types/ContentPageBySlug';
import { PrimaryPageBySlug } from '../gql/types/PrimaryPageBySlug';
import { ServicePagesBySlug } from '../gql/types/ServicePagesBySlug';
import {
  createSubscription,
  getPrimaryAndContentPagePaths,
  Subscription,
} from '../util/dato-cms';

type PageProps =
  | { type: 'primary'; subscription: Subscription<PrimaryPageBySlug> }
  | { type: 'content'; subscription: Subscription<ContentPageBySlug> }
  | { type: 'service'; subscription: Subscription<ServicePagesBySlug> };

const PrimaryOrContentPage: NextPage<PageProps> = (props) => {
  switch (props.type) {
    case 'primary':
      return <PrimaryPage subscription={props.subscription} />;
    case 'content':
      return <ContentPage subscription={props.subscription} />;
    case 'service':
      return <ServiceLPage subscription={props.subscription} />;
    default:
      return <>Impossible State</>;
  }
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: await getPrimaryAndContentPagePaths(),
  fallback: 'blocking',
});

export const getStaticProps: GetStaticProps<PageProps> = async (context) => {
  // Attempt primary page first
  const primarySubscription = await createSubscription<PrimaryPageBySlug>(
    context,
    primaryPageBySlug,
    { slug: context?.params?.slug },
  );
  if (primarySubscription.initialData?.primaryPage) {
    return { props: { type: 'primary', subscription: primarySubscription } };
  }

  // Attempt content page second
  const contentSubscription = await createSubscription<ContentPageBySlug>(
    context,
    contentPageBySlug,
    { slug: context?.params?.slug },
  );
  if (contentSubscription.initialData?.contentPage) {
    return { props: { type: 'content', subscription: contentSubscription } };
  }

  // Attempt service pages second
  const servicesSubscription = await createSubscription<ServicePagesBySlug>(
    context,
    servicePagesBySlug,
    { slug: context?.params?.slug },
  );
  if (servicesSubscription.initialData?.service) {
    return { props: { type: 'service', subscription: servicesSubscription } };
  }

  // 404
  return { notFound: true };
};

export default PrimaryOrContentPage;
