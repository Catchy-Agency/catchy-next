import gql from 'graphql-tag'

export const allContentPageSlugs = gql`
  query AllContentPageSlugs {
    allContentPages {
      slug
    }
  }
`
