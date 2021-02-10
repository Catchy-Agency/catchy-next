import gql from 'graphql-tag'

export const allCategorySlugs = gql`
  query AllCategorySlugs {
    allCategories {
      slug
    }
  }
`

export const categoryIdBySlug = gql`
  query CategoryIdBySlug($slug: String) {
    category(filter: { slug: { eq: $slug } }) {
      id
    }
  }
`
