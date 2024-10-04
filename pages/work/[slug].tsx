import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { renderMetaTags, useQuerySubscription } from 'react-datocms';
import { BlockSections } from '../../components/BlockSections';
import { PageError } from '../../components/cms/PageError';
import { PreviewBanner } from '../../components/cms/PreviewBanner';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { caseStudyBySlug } from '../../gql/queries/case-studies';
import { CaseStudyBySlug } from '../../gql/types/CaseStudyBySlug';
import {
  createSubscription,
  getCaseStudyPaths,
  Subscription,
} from '../../util/dato-cms';

interface PageProps {
  subscription: Subscription<CaseStudyBySlug>;
}

const CaseStudyPage: NextPage<PageProps> = ({ subscription }) => {
  const { data, error, status } =
    useQuerySubscription<CaseStudyBySlug>(subscription);

  return (
    <>
      <div className="content-post">
        <Head>
          {renderMetaTags([
            ...(data?.caseStudy?._seoMetaTags || []),
            ...(data?.site.faviconMetaTags || []),
          ])}
        </Head>
        <PreviewBanner status={status} />
        {error && <PageError error={error} />}
        {data?.header && <Header header={data?.header} />}
        <header className="section Work">
          <div className="container is-max-widescreen">
            <nav className="breadcrumb" aria-label="breadcrumbs">
              <ul>
                <li>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/work">
                    <a>Work</a>
                  </Link>
                </li>
                <li className="is-active">
                  <a aria-current="page">{data?.caseStudy?.title}</a>
                </li>
              </ul>
            </nav>
            <span className="pretitle-work">{data?.caseStudy?.pretitle}</span>
            <h1 className="title is-1 title-work">{data?.caseStudy?.title}</h1>
            <p className="description-work">{data?.caseStudy?.description}</p>
            <div className="tags are-medium">
              {data?.caseStudy?.categories.map((cat) => (
                <Link key={cat.id} href={`/work/category/${cat.slug || ''}`}>
                  <a className="tag">{cat.name}</a>
                </Link>
              ))}
            </div>
          </div>
        </header>
        <div className="block-sections">
          <BlockSections
            blocks={data?.caseStudy?.blocks || []}
            containerMax="widescreen"
          />
        </div>
      </div>
      {data?.footer && <Footer footer={data?.footer} />}
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: await getCaseStudyPaths(),
  fallback: 'blocking',
});

export const getStaticProps: GetStaticProps<PageProps> = async (context) => {
  const subscription = await createSubscription<CaseStudyBySlug>(
    context,
    caseStudyBySlug,
    { slug: context?.params?.slug },
  );
  return subscription.initialData?.caseStudy
    ? { props: { subscription } }
    : { notFound: true };
};

export default CaseStudyPage;
