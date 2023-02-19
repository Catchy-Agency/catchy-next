import gql from 'graphql-tag'

export const allBlogCategorySlugs = gql`
  query AllBlogCategorySlugs {
    allCategories(first: 100) {
      slug
    }
  }
`

export const blogCategoryIdBySlug = gql`
  query BlogCategoryIdBySlug($slug: String) {
    category(filter: { slug: { eq: $slug } }) {
      id
    }
  }
`
