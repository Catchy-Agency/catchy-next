import gql from 'graphql-tag'

export const pageBySlug = gql`
  query PageBySlug($slug: String) {
    page: page(filter: { slug: { eq: $slug } }) {
      title
      slug
      _seoMetaTags {
        attributes
        content
        tag
      }
    }
    site: _site {
      faviconMetaTags {
        attributes
        content
        tag
      }
    }
  }
`

export const allPageSlugs = gql`
  query AllPageSlugs {
    allPages {
      slug
    }
  }
`
