import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { GetStaticPropsContext } from 'next'
import { DocumentNode } from 'graphql'

import { allPageSlugs } from './queries'

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
  cache: new InMemoryCache(),
})

const previewClient = new ApolloClient({
  link: authLink.concat(httpPreviewLink),
  cache: new InMemoryCache(),
})

export const createSubscription = async (
  context: GetStaticPropsContext,
  query: DocumentNode,
  variables?: unknown,
) => {
  const isPreview = Boolean(context.preview)

  const result = isPreview
    ? await previewClient.query({ query })
    : await client.query({ query })

  const initialData = result.data

  return isPreview
    ? ({
        initialData,
        preview: true,
        query: query.loc?.source.body,
        variables,
        token: API_TOKEN,
      } as const)
    : ({
        initialData,
        preview: false,
        enabled: false,
      } as const)
}

// TODO: LOL
type ThenArg<T> = T extends PromiseLike<infer U> ? U : T
export type Subscription = ThenArg<ReturnType<typeof createSubscription>>

export const getPagePaths = async (): Promise<string[]> => {
  const result = await client.query({
    query: allPageSlugs,
  })
  return result.data.allPages.map((page: any) => '/pages/' + page.slug)
}
