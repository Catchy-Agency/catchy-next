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
              responsiveImage(
                imgixParams: { fit: clip, maxW: 300, auto: format }
              ) {
                aspectRatio
                height
                width
                sizes
                src
                srcSet
                alt
                title
                base64
              }
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
                  responsiveImage(
                    imgixParams: { fit: crop, ar: "16:9", w: 750, auto: format }
                  ) {
                    aspectRatio
                    height
                    width
                    sizes
                    src
                    srcSet
                    alt
                    title
                    base64
                  }
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
                  responsiveImage(
                    imgixParams: { fit: crop, ar: "16:9", w: 750, auto: format }
                  ) {
                    aspectRatio
                    height
                    width
                    sizes
                    src
                    srcSet
                    alt
                    title
                    base64
                  }
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
                  responsiveImage(
                    imgixParams: { fit: crop, ar: "16:9", w: 750, auto: format }
                  ) {
                    aspectRatio
                    height
                    width
                    sizes
                    src
                    srcSet
                    alt
                    title
                    base64
                  }
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
          members {
            id
            name
            title
            image {
              responsiveImage(
                imgixParams: { fit: crop, ar: "1:1", w: 300, auto: format }
              ) {
                aspectRatio
                height
                width
                sizes
                src
                srcSet
                alt
                title
                base64
              }
            }
          }
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
