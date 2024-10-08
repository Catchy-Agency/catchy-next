import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { FC } from 'react';
import { renderMetaTags, useQuerySubscription } from 'react-datocms';

import { BlockSections } from '../../components/BlockSections';
import { PageError } from '../../components/cms/PageError';
import { PreviewBanner } from '../../components/cms/PreviewBanner';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { blogPostBySlug } from '../../gql/queries/blog-posts';
import {
  BlogPostBySlug,
  BlogPostBySlug_blogPost_author,
} from '../../gql/types/BlogPostBySlug';
import {
  createSubscription,
  getBlogPostPaths,
  Subscription,
} from '../../util/dato-cms';

interface PageProps {
  subscription: Subscription<BlogPostBySlug>;
}

const BlogPostPage: NextPage<PageProps> = ({ subscription }) => {
  const { data, error, status } =
    useQuerySubscription<BlogPostBySlug>(subscription);

  return (
    <>
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
        <header className="section Blog">
          <div className="container is-max-widescreen">
            <nav className="breadcrumb" aria-label="breadcrumbs">
              <ul>
                <li>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/insights">
                    <a>Insights</a>
                  </Link>
                </li>
                <li className="is-active">
                  <a aria-current="page">{data?.blogPost?.title}</a>
                </li>
              </ul>
            </nav>
            <h1 className="title is-1 title-blog">{data?.blogPost?.title}</h1>
            <h2 className="subtitle-blog">{data?.blogPost?.subtitle}</h2>
            <p className="description-blog">{data?.blogPost?.description}</p>
            {data?.blogPost?.author && <ByLine author={data.blogPost.author} />}
            <div className="tags are-medium">
              {data?.blogPost?.categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/insights?category=${cat.slug || ''}`}
                >
                  <a className="tag tag--lagoon">{cat.name}</a>
                </Link>
              ))}
            </div>
          </div>
        </header>
        <div className="block-sections">
          <BlockSections
            blocks={data?.blogPost?.blocks || []}
            containerMax="widescreen"
          />
        </div>
      </div>
      {data?.footer && <Footer footer={data?.footer} />}
    </>
  );
};

const ByLine: FC<{ author: BlogPostBySlug_blogPost_author }> = ({ author }) => (
  <div className="media is-align-items-center mb-5 author-blog">
    {author.image?.responsiveImage?.src && (
      <div className="media-left">
        <figure className="image is-64x64">
          <img
            className="author-image"
            src={author.image.responsiveImage.src}
          />
        </figure>
      </div>
    )}
    <div className="media-content">
      <p className="title is-6 author-name">{author.name}</p>
      <p className="subtitle is-6">{author.title}</p>
    </div>
  </div>
);

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: await getBlogPostPaths(),
  fallback: 'blocking',
});

export const getStaticProps: GetStaticProps<PageProps> = async (context) => {
  const subscription = await createSubscription<BlogPostBySlug>(
    context,
    blogPostBySlug,
    { slug: context?.params?.slug },
  );
  return subscription.initialData?.blogPost
    ? { props: { subscription } }
    : { notFound: true };
};

export default BlogPostPage;
