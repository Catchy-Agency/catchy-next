import gql from 'graphql-tag'

export const allWorkCategorySlugs = gql`
  query AllWorkCategorySlugs {
    allWorkCategories(first: 100) {
      slug
    }
  }
`

export const workCategoryIdBySlug = gql`
  query WorkCategoryIdBySlug($slug: String) {
    workCategory(filter: { slug: { eq: $slug } }) {
      id
    }
  }
`
