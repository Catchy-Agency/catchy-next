import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useRef, useState } from 'react';
import {
  ResponsiveImageType,
  renderMetaTags,
  useQuerySubscription,
} from 'react-datocms';

import { useStopInfiniteScroll } from '../../contexts/stopInfiniteScroll';
import {
  AllBlogPosts,
  AllBlogPosts_allBlogPosts,
} from '../../gql/types/AllBlogPosts';
import { BlogPostBySlug_blogPost_blocks } from '../../gql/types/BlogPostBySlug';
import { Subscription, getPaginatedBlogPosts } from '../../util/dato-cms';
import { BlockSections } from '../BlockSections';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { PageError } from '../cms/PageError';
import { PreviewBanner } from '../cms/PreviewBanner';
import { LinkData } from '../content-links/LinkData';
import { ThumbRows } from '../content-links/ThumbRows';
import useBackgroundPattern from '../hooks/useBackgroundPattern';

export interface BlogPostListPageProps {
  subscription: Subscription<AllBlogPosts>;
  path: string;
}

export const BlogPostListPage: NextPage<BlogPostListPageProps> = ({
  subscription,
}) => {
  const router = useRouter();
  const { data, error, status } =
    useQuerySubscription<AllBlogPosts>(subscription);
  const [currentOffset, setCurrentOffset] = useState<number>(0);
  const [blogPosts, setBlogPosts] = useState<LinkData[]>([]);
  const currentDisplayOffset = useRef<number>(0);
  const [currentDisplay, setCurrentDisplay] = useState<number>(0);
  const AMOUNT_OF_ITEMS = 10;
  const observer = useRef<IntersectionObserver>();
  const { stopInfiniteScroll, setStopInfiniteScroll } = useStopInfiniteScroll();

  useEffect(() => {
    getPosts(0).catch((err: Error) => {
      throw new Error(err?.message);
    });
    setCurrentOffset(0);
    setCurrentDisplay(0);
    currentDisplayOffset.current = 0;
    setNewDisplayBreakpoint(currentDisplayOffset.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query]);

  useEffect(() => {
    const triggerItem = document.querySelector('[data-is-breakpoint=true]');
    if (!triggerItem || stopInfiniteScroll) return;
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            observer.current?.unobserve(entry.target);
            triggerItem.setAttribute('data-is-breakpoint', 'false');
            if (currentDisplay % AMOUNT_OF_ITEMS === 0) {
              const newOffset = currentOffset + 1;
              setCurrentOffset(newOffset);
              getPosts(newOffset).catch((err: Error) => {
                throw new Error(err?.message);
              });
            }

            currentDisplayOffset.current += 1;
            setNewDisplayBreakpoint(currentDisplayOffset.current);
          }
        });
      },
      {
        threshold: 0,
      },
    );

    observer.current.observe(triggerItem);

    return () => observer.current && observer.current.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentDisplay, blogPosts, stopInfiniteScroll]);

  useEffect(() => {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            setStopInfiniteScroll(false);
          }
        });
      },
      {
        threshold: 0.1,
      },
    );

    observer.observe(contactForm);

    return () => {
      observer.disconnect();
    };
  }, [setStopInfiniteScroll]);

  const sortedCategories = useMemo(() => {
    if (!data?.allCategories) return undefined;
    return [...data.allCategories].sort(
      (a, b) => a.name?.localeCompare(b.name ?? '') ?? 0,
    );
  }, [data?.allCategories]);

  async function getPosts(offset: number) {
    const categoryId = data?.allCategories.find(
      (cat) => cat.slug === router.query.category,
    );
    const res = await getPaginatedBlogPosts(
      AMOUNT_OF_ITEMS,
      AMOUNT_OF_ITEMS * (offset ?? currentOffset),
      (categoryId?.id ?? '') as string,
    );
    const posts = mapPosts(res);
    const newBlogPosts = offset === 0 ? posts : [...blogPosts, ...posts];
    setBlogPosts(newBlogPosts);
  }
  function mapPosts(posts: AllBlogPosts_allBlogPosts[]) {
    return (
      posts.map((post: AllBlogPosts_allBlogPosts) => ({
        id: post.id,
        url: `/insights/${post.slug || ''}`,
        title: post.title,
        subtitle: post.subtitle,
        description: post.description,
        image:
          (post.previewImage?.responsiveImage as ResponsiveImageType) || null,
        imageLg:
          (post.previewImageLg?.responsiveImage as ResponsiveImageType) || null,
        imageSm:
          (post.previewImageSm?.responsiveImage as ResponsiveImageType) || null,
        imageCol:
          (post.previewImageCol?.responsiveImage as ResponsiveImageType) ||
          null,
        callToAction: 'Read More',
      })) || []
    );
  }
  function setNewDisplayBreakpoint(offset: number) {
    if (offset === 0) {
      setCurrentDisplay(2);
    } else if (offset === 1) {
      setCurrentDisplay(5);
    } else {
      setCurrentDisplay(currentDisplay + 5);
    }
  }

  function isBreakpoint(index: number) {
    if (currentDisplayOffset.current === 0 && index === 0) return true;
    if (currentDisplayOffset.current === 1 && index === 2) return true;
    if (currentDisplayOffset.current >= 2 && index % 5 === 0 && index !== 0) {
      return true;
    }
    return false;
  }
  function changeQueryParam(url: string | null) {
    if (url === null || url === router.query.category) {
      void router.push({ pathname: '/insights' }, undefined, {
        scroll: false,
      });
      return;
    }
    void router.push(
      { pathname: '/insights', query: { category: url } },
      undefined,
      { scroll: false },
    );
  }
  useBackgroundPattern();
  return (
    <div className={`primary-page`}>
      <Head>
        {renderMetaTags([
          ...(data?.primaryPage?._seoMetaTags || []),
          ...(data?.site.faviconMetaTags || []),
        ])}
      </Head>
      <PreviewBanner status={status} />
      {error && <PageError error={error} />}
      {data?.header && <Header header={data?.header} />}

      <BlockSections
        blocks={
          (data?.primaryPage?.blocks || []) as BlogPostBySlug_blogPost_blocks[]
        }
        containerMax="widescreen"
      />
      <section className="section CaseStudyPage ignoreBg">
        <div className="container is-max-widescreen">
          <div className="blog-posts-container">
            <div className="blog-categories">
              <h5 className="title is-5">Categories</h5>
              <div className="blog-category-list-container">
                <div className="mb-2 mr-2 is-inline-block-mobile">
                  <button
                    className={`category-button tag is-medium ${
                      router.query.category ? '' : 'active'
                    }`}
                    onClick={() => changeQueryParam(null)}
                  >
                    All
                  </button>
                </div>
                {sortedCategories?.map((cat) => (
                  <div
                    key={cat.id}
                    className="mb-2 mr-2 is-inline-block-mobile"
                  >
                    <button
                      className={`category-button tag is-medium 4 ${
                        cat.slug === router.query.category ? 'active' : ''
                      }`}
                      title={`${
                        cat.slug === router.query.category ? 'Remove' : 'Add'
                      } Category filter`}
                      onClick={() => changeQueryParam(cat.slug)}
                    >
                      {cat.name}
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <ThumbRows
                links={blogPosts.slice(0, currentDisplay)}
                imageAlign="Left"
                isBreakpoint={isBreakpoint}
              />
              {blogPosts.length === 0 && (
                <div className="section is-size-3 has-text-centered">
                  No posts to show
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {data?.footer && <Footer footer={data?.footer} />}
    </div>
  );
};
