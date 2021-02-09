import gql from 'graphql-tag'

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
            fontAwesomeIcon
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
    header {
      logo {
        url
        title
        alt
      }
      links {
        id
        title
        slug
      }
      contactLinkLabel
    }
    footer {
      title
      nameLabel
      emailAddressLabel
      messageLabel
      contactText
      socialLinks {
        id
        fontAwesomeIcon
        url
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
