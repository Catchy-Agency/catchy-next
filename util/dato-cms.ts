import { ApolloClient, OperationVariables } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import {
  InMemoryCache,
  IntrospectionFragmentMatcher,
} from 'apollo-cache-inmemory'
import { GetStaticPropsContext } from 'next'
import { DocumentNode } from 'graphql'

import schema from '../schema.json'
import { allPrimaryPageSlugs } from '../gql/queries/primary-pages'
import { allContentPageSlugs } from '../gql/queries/content-pages'
import { allBlogPostSlugs } from '../gql/queries/blog-posts'
import { allCategorySlugs, categoryIdBySlug } from '../gql/queries/categories'
import { AllPrimaryPageSlugs } from '../gql/types/AllPrimaryPageSlugs'
import { AllContentPageSlugs } from '../gql/types/AllContentPageSlugs'
import { AllBlogPostSlugs } from '../gql/types/AllBlogPostSlugs'
import { AllCategorySlugs } from '../gql/types/AllCategorySlugs'
import { CategoryIdBySlug } from '../gql/types/CategoryIdBySlug'

const API_TOKEN = process.env.DATOCMS_API_TOKEN

if (!API_TOKEN) throw new Error('Failed to read API_TOKEN')

const httpLink = createHttpLink({
  uri: 'https://graphql.datocms.com/',
})

const httpPreviewLink = createHttpLink({
  uri: 'https://graphql.datocms.com/preview/',
})

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...(headers || {}),
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${API_TOKEN}`,
    },
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    fragmentMatcher: new IntrospectionFragmentMatcher({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      introspectionQueryResultData: schema as any,
    }),
  }),
})

const previewClient = new ApolloClient({
  link: authLink.concat(httpPreviewLink),
  cache: new InMemoryCache({
    fragmentMatcher: new IntrospectionFragmentMatcher({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      introspectionQueryResultData: schema as any,
    }),
  }),
})

export type Subscription<ResultData> =
  | {
      initialData: ResultData | undefined
      preview: true
      enabled: true
      query: string
      token: string
      variables?: { [key: string]: unknown }
    }
  | {
      initialData: ResultData | undefined
      preview: false
      enabled: false
    }

export const createSubscription = async <ResultData>(
  context: GetStaticPropsContext,
  query: DocumentNode,
  variables: OperationVariables = {},
): Promise<Subscription<ResultData>> => {
  const isPreview = Boolean(context.preview)
  const result = isPreview
    ? await previewClient.query<ResultData>({ query, variables })
    : await client.query<ResultData>({ query, variables })
  const initialData = result.data || undefined
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
      }
}

export const getPrimaryAndContentPagePaths = async (): Promise<string[]> => {
  const primaryResult = await client.query<AllPrimaryPageSlugs>({
    query: allPrimaryPageSlugs,
  })
  const contentResult = await client.query<AllContentPageSlugs>({
    query: allContentPageSlugs,
  })
  const pages = [
    ...(primaryResult.data.allPrimaryPages || []),
    ...(contentResult.data.allContentPages || []),
  ]
  return pages
    .map(({ slug }) => `/${slug || ''}`)
    .filter((slug) => slug !== '/blog') // Note: Reserved
}

export const getBlogPostPaths = async (): Promise<string[]> => {
  const result = await client.query<AllBlogPostSlugs>({
    query: allBlogPostSlugs,
  })
  return result.data.allBlogPosts.map(({ slug }) => `/blog/${slug || ''}`)
}

export const getCategoryPaths = async (): Promise<string[]> => {
  const result = await client.query<AllCategorySlugs>({
    query: allCategorySlugs,
  })
  return result.data.allCategories.map(
    ({ slug }) => `/blog/category/${slug || ''}`,
  )
}

export const getCategoryIdBySlug = async (
  slug: string,
  isPreview?: boolean,
): Promise<string | null> => {
  const query = categoryIdBySlug
  const variables = { slug }
  const result = isPreview
    ? await previewClient.query<CategoryIdBySlug>({ query, variables })
    : await client.query<CategoryIdBySlug>({ query, variables })
  return (result.data.category?.id as string) || null
}
