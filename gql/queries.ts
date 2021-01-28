import gql from 'graphql-tag'

export const pageBySlug = gql`
  query PageBySlug($slug: String) {
    page: page(filter: { slug: { eq: $slug } }) {
      title
      content {
        ... on HeroRecord {
          headline
          text
          imageSet {
            responsiveImage {
              alt
              src
              srcSet
              title
            }
          }
          textColor {
            hex
          }
          backgroundColor {
            hex
          }
        }
        ... on ImageSetRecord {
          imageSet {
            responsiveImage {
              alt
              src
              srcSet
              title
            }
          }
        }
        ... on TextRecord {
          text
        }
        ... on VideoRecord {
          video {
            title
            url
          }
        }
      }
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
