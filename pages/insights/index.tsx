import { GetStaticProps } from 'next';

import {
  BlogPostListPage,
  BlogPostListPageProps,
} from '../../components/pages/BlogPostListPage';
import { StopInfiniteScrollProvider } from '../../contexts/stopInfiniteScroll';
import { allBlogPosts } from '../../gql/queries/blog-posts';
import { AllBlogPosts } from '../../gql/types/AllBlogPosts';
import { createSubscription } from '../../util/dato-cms';

export const getStaticProps: GetStaticProps<BlogPostListPageProps> = async (
  context,
) => ({
  props: {
    subscription: await createSubscription<AllBlogPosts>(context, allBlogPosts),
    path: '/insights',
  },
});

const WrappedBlogPostListPage = (props: BlogPostListPageProps) => {
  return (
    <StopInfiniteScrollProvider>
      <BlogPostListPage {...props} />
    </StopInfiniteScrollProvider>
  );
};

export default WrappedBlogPostListPage;
