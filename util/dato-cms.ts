import {
  InMemoryCache,
  IntrospectionFragmentMatcher,
} from 'apollo-cache-inmemory';
import { ApolloClient, OperationVariables } from 'apollo-client';
import { setContext } from 'apollo-link-context';
import { createHttpLink } from 'apollo-link-http';
import { DocumentNode } from 'graphql';
import { GetStaticPropsContext } from 'next';

import {
  allBlogPostSlugs,
  allPaginatedBlogPosts,
  filteredBlogPosts,
} from '../gql/queries/blog-posts';
import { allCaseStudySlugs } from '../gql/queries/case-studies';
import {
  allBlogCategorySlugs,
  blogCategoryIdBySlug,
} from '../gql/queries/categories-blog';
import {
  allWorkCategorySlugs,
  workCategoryIdBySlug,
} from '../gql/queries/categories-work';
import { allContentPageSlugs } from '../gql/queries/content-pages';
import { allDownloadPageSlugs } from '../gql/queries/download-pages';
import { allPrimaryPageSlugs } from '../gql/queries/primary-pages';
import { AllBlogCategorySlugs } from '../gql/types/AllBlogCategorySlugs';
import { AllBlogPostSlugs } from '../gql/types/AllBlogPostSlugs';
import {
  AllBlogPosts,
  AllBlogPosts_allBlogPosts,
} from '../gql/types/AllBlogPosts';
import { AllCaseStudySlugs } from '../gql/types/AllCaseStudySlugs';
import { AllContentPageSlugs } from '../gql/types/AllContentPageSlugs';
import { AllDownloadPageSlugs } from '../gql/types/AllDownloadPageSlugs';
import { AllPrimaryPageSlugs } from '../gql/types/AllPrimaryPageSlugs';
import { AllWorkCategorySlugs } from '../gql/types/AllWorkCategorySlugs';
import { BlogCategoryIdBySlug } from '../gql/types/BlogCategoryIdBySlug';
import { WorkCategoryIdBySlug } from '../gql/types/WorkCategoryIdBySlug';
import schema from '../schema.json';
import { reservedPaths } from './url';

const API_TOKEN = process.env?.DATOCMS_API_TOKEN ?? process.env.NEXT_PUBLIC_API_TOKEN;
 const API_ENVIRONMENT = process.env.NEXT_PUBLIC_DATOCMS_API_ENVIRONMENT ?? "main";

if (!API_TOKEN) throw new Error('Failed to read API_TOKEN');

const httpLink = createHttpLink({
  uri: 'https://graphql.datocms.com/',
});

const httpPreviewLink = createHttpLink({
  uri: 'https://graphql.datocms.com/preview/',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...(headers || {}),
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${API_TOKEN}`,
      'X-Environment': API_ENVIRONMENT,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    fragmentMatcher: new IntrospectionFragmentMatcher({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      introspectionQueryResultData: schema as any,
    }),
  }),
});

const previewClient = new ApolloClient({
  link: authLink.concat(httpPreviewLink),
  cache: new InMemoryCache({
    fragmentMatcher: new IntrospectionFragmentMatcher({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      introspectionQueryResultData: schema as any,
    }),
  }),
});

export type Subscription<ResultData> =
  | {
      initialData: ResultData | undefined;
      preview: true;
      enabled: true;
      query: string;
      token: string;
      variables?: { [key: string]: unknown };
    }
  | {
      initialData: ResultData | undefined;
      preview: false;
      enabled: false;
    };

export const createSubscription = async <ResultData>(
  context: GetStaticPropsContext,
  query: DocumentNode,
  variables: OperationVariables = {},
): Promise<Subscription<ResultData>> => {
  const isPreview = Boolean(context.preview);
  const result = isPreview
    ? await previewClient.query<ResultData>({ query, variables })
    : await client.query<ResultData>({ query, variables });
  const initialData = result.data || undefined;
  return isPreview
    ? {
        initialData,
        preview: true,
        enabled: true,
        query: query.loc?.source.body || '',
        variables,
        token: API_TOKEN,
      }
    : {
        initialData,
        preview: false,
        enabled: false,
      };
};

export const getPrimaryAndContentPagePaths = async (): Promise<string[]> => {
  const primaryResult = await client.query<AllPrimaryPageSlugs>({
    query: allPrimaryPageSlugs,
  });
  const contentResult = await client.query<AllContentPageSlugs>({
    query: allContentPageSlugs,
  });
  const pages = [
    ...(primaryResult.data.allPrimaryPages || []),
    ...(contentResult.data.allContentPages || []),
  ];
  return pages
    .map(({ slug }) => `/${slug || ''}`)
    .filter((slug) => !reservedPaths.has(slug));
};

export const getDownloadPagePaths = async (): Promise<string[]> => {
  const result = await client.query<AllDownloadPageSlugs>({
    query: allDownloadPageSlugs,
  });
  return result.data.allDownloadPages.map(
    ({ slug }) => `/downloads/${slug || ''}`,
  );
};

export const getBlogPostPaths = async (): Promise<string[]> => {
  const result = await client.query<AllBlogPostSlugs>({
    query: allBlogPostSlugs,
  });
  return result.data.allBlogPosts.map(({ slug }) => `/blog/${slug || ''}`);
};

export const getBlogCategoryPaths = async (): Promise<string[]> => {
  const result = await client.query<AllBlogCategorySlugs>({
    query: allBlogCategorySlugs,
  });
  return result.data.allCategories.map(
    ({ slug }) => `/blog/category/${slug || ''}`,
  );
};

export const getBlogCategoryIdBySlug = async (
  slug: string,
  isPreview?: boolean,
): Promise<string | null> => {
  const query = blogCategoryIdBySlug;
  const variables = { slug };
  const result = isPreview
    ? await previewClient.query<BlogCategoryIdBySlug>({ query, variables })
    : await client.query<BlogCategoryIdBySlug>({ query, variables });
  return (result.data.category?.id as string) || null;
};

export const getCaseStudyPaths = async (): Promise<string[]> => {
  const result = await client.query<AllCaseStudySlugs>({
    query: allCaseStudySlugs,
  });
  return result.data.allCaseStudies.map(({ slug }) => `/work/${slug || ''}`);
};

export const getWorkCategoryPaths = async (): Promise<string[]> => {
  const result = await client.query<AllWorkCategorySlugs>({
    query: allWorkCategorySlugs,
  });
  return result.data.allWorkCategories.map(
    ({ slug }) => `/work/category/${slug || ''}`,
  );
};

export const getWorkCategoryIdBySlug = async (
  slug: string,
  isPreview?: boolean,
): Promise<string | null> => {
  const query = workCategoryIdBySlug;
  const variables = { slug };
  const result = isPreview
    ? await previewClient.query<WorkCategoryIdBySlug>({ query, variables })
    : await client.query<WorkCategoryIdBySlug>({ query, variables });
  return (result.data.workCategory?.id as string) || null;
};

export const getPaginatedBlogPosts = async (
  first: number,
  skip: number,
  id: string | undefined,
): Promise<AllBlogPosts_allBlogPosts[]> => {
  const variables = id ? { first, skip, id } : { first, skip };
  const query = id ? filteredBlogPosts : allPaginatedBlogPosts;
  const result = await client.query<AllBlogPosts>({
    query,
    variables,
  });
  return result.data.allBlogPosts as AllBlogPosts_allBlogPosts[];
};
