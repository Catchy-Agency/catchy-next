import { ApolloClient } from "apollo-client"
import { createHttpLink } from "apollo-link-http"
import { setContext } from "apollo-link-context"
import { InMemoryCache } from "apollo-cache-inmemory"
import gql from "graphql-tag"

const apiToken = "***REMOVED***"

const httpLink = createHttpLink({
  uri: "https://graphql.datocms.com/",
})

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...(headers || {}),
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${apiToken}`,
    },
  }
})

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

export const getPagePaths = async (): Promise<string[]> => {
  const result = await client.query({
    query: gql`
      {
        allPages {
          slug
        }
      }
    `,
  })
  return result.data.allPages.map((page: any) => "/pages/" + page.slug)
}

export const getPage = async (slug: string): Promise<{ title: string }> => {
  const result = await client.query({
    query: gql`
      {
        page(filter: { slug: { eq: "${slug}" } }) {
          title
        }
      }
    `,
  })
  return result.data.page
}
