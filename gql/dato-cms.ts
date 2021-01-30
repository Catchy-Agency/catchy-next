import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import {
  InMemoryCache,
  IntrospectionFragmentMatcher,
} from 'apollo-cache-inmemory'
import { GetStaticPropsContext } from 'next'
import { DocumentNode } from 'graphql'

import schema from '../schema.json'
import { allPageSlugs } from './queries'
import { AllPageSlugs } from './types/AllPageSlugs'

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
  variables?: unknown,
) => {
  const isPreview = Boolean(context.preview)

  const result = isPreview
    ? await previewClient.query<ResultData>({ query })
    : await client.query<ResultData>({ query })

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

export const getPagePaths = async (): Promise<string[]> => {
  const result = await client.query<AllPageSlugs>({
    query: allPageSlugs,
  })
  return result.data.allPages.map((page) => '/pages/' + page.slug)
}