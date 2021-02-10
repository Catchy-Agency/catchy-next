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
import { allPrimaryPageSlugs } from './queries/primary-pages'
import { allContentPageSlugs } from './queries/content-pages'
import { allContentPostSlugs } from './queries/content-posts'
import { AllPrimaryPageSlugs } from './types/AllPrimaryPageSlugs'
import { AllContentPageSlugs } from './types/AllContentPageSlugs'
import { AllContentPostSlugs } from './types/AllContentPostSlugs'

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
      introspectionQueryResultData: schema as any,
    }),
  }),
})

const previewClient = new ApolloClient({
  link: authLink.concat(httpPreviewLink),
  cache: new InMemoryCache(),
})

export type Subscription<ResultData> =
  | {
      initialData: ResultData
      enabled: true
      query: string
      token: string
      variables?: { [key: string]: any }
    }
  | {
      initialData: ResultData
      enabled: false
    }

export const createSubscription = async <ResultData>(
  context: GetStaticPropsContext,
  query: DocumentNode,
  variables: OperationVariables = {},
) => {
  const isPreview = Boolean(context.preview)
  const result = isPreview
    ? await previewClient.query<ResultData>({ query, variables })
    : await client.query<ResultData>({ query, variables })
  const initialData = result.data
  return isPreview
    ? {
        initialData,
        preview: true,
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

export const getPrimaryPagePaths = async (): Promise<string[]> => {
  const result = await client.query<AllPrimaryPageSlugs>({
    query: allPrimaryPageSlugs,
  })
  return result.data.allPrimaryPages.map((page) => '/' + page.slug)
}

export const getContentPagePaths = async (): Promise<string[]> => {
  const result = await client.query<AllContentPageSlugs>({
    query: allContentPageSlugs,
  })
  return result.data.allContentPages.map((page) => '/pages/' + page.slug)
}

export const getContentPostPaths = async (): Promise<string[]> => {
  const result = await client.query<AllContentPostSlugs>({
    query: allContentPostSlugs,
  })
  return result.data.allContentPosts.map((post) => '/posts/' + post.slug)
}
