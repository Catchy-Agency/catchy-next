import { GetStaticProps } from 'next';

import {
  BlogPostListPage,
  BlogPostListPageProps,
} from '../../components/pages/BlogPostListPage';
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

export default BlogPostListPage;
