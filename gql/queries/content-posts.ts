import gql from 'graphql-tag'

export const allContentPostSlugs = gql`
  query AllContentPostSlugs {
    allContentPosts {
      slug
    }
  }
`
