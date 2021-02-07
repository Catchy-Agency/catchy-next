import gql from 'graphql-tag'

export const pageBySlug = gql`
  query PageBySlug($slug: String) {
    page: page(filter: { slug: { eq: $slug } }) {
      title
      content {
        __typename
        ... on HeroRecord {
          id
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
          id
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
          id
          text
        }
        ... on VideoRecord {
          id
          video {
            title
            url
            provider
            providerUid
            thumbnailUrl
            width
            height
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

export const primaryPageBySlug = gql`
  query PrimaryPageBySlug($slug: String) {
    primaryPage: primaryPage(filter: { slug: { eq: $slug } }) {
      title
      blocks {
        __typename
        ... on BannerRecord {
          id
          title
          text
          backgroundImage {
            url
          }
          backgroundColor {
            hex
          }
          textColor {
            hex
          }
        }
        ... on ClientSetRecord {
          id
          clientSet {
            id
            name
            logo {
              url
            }
          }
        }
        ... on ContentLinkSetRecord {
          id
          displaySize
          callToActionLabel
          alternatingAlignments
          backgroundColor {
            hex
          }
          textColor {
            hex
          }
          links {
            __typename
            ... on PrimaryPageRecord {
              id
              slug
              seo {
                title
                description
                image {
                  url
                }
              }
            }
            ... on ContentPostRecord {
              id
              slug
              seo {
                title
                description
                image {
                  url
                }
              }
            }
            ... on ContentPageRecord {
              id
              slug
              seo {
                title
                description
                image {
                  url
                }
              }
            }
          }
        }
        ... on FormulaRecord {
          id
        }
        ... on ServiceSetRecord {
          id
          services {
            id
            title
            text
            iconName
            iconColor {
              hex
            }
            iconBackgroundColor {
              hex
            }
          }
        }
        ... on TeamRecord {
          id
        }
        ... on TitleTextRecord {
          id
          title
          text
        }
        ... on ViewMoreLinkRecord {
          id
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

export const allPrimaryPageSlugs = gql`
  query AllPrimaryPageSlugs {
    allPrimaryPages {
      slug
    }
  }
`

export const allContentPageSlugs = gql`
  query AllContentPageSlugs {
    allContentPages {
      slug
    }
  }
`

export const allContentPostSlugs = gql`
  query AllContentPostSlugs {
    allContentPosts {
      slug
    }
  }
`
