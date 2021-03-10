import gql from 'graphql-tag'

export const allPrimaryPageSlugs = gql`
  query AllPrimaryPageSlugs {
    allPrimaryPages {
      slug
    }
  }
`

export const primaryPageBySlug = gql`
  query PrimaryPageBySlug($slug: String) {
    primaryPage(filter: { slug: { eq: $slug } }) {
      title
      showBreadcrumbs
      textAlign
      blocks {
        __typename
        ... on BannerRecord {
          id
          title
          text
          backgroundImage {
            url
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
          imageAlign
          callToActionLabel
          links {
            __typename
            ... on PrimaryPageRecord {
              id
              slug
              title
              description
              previewImage {
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
            ... on BlogPostRecord {
              id
              slug
              title
              description
              previewImage {
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
            ... on ContentPageRecord {
              id
              slug
              title
              description
              previewImage {
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
        ... on FormulaRecord {
          id
          step1 {
            id
            responsiveImage(
              imgixParams: { fit: crop, ar: "1:1", w: 600, auto: format }
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
          step2 {
            id
            responsiveImage(
              imgixParams: { fit: crop, ar: "1:1", w: 600, auto: format }
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
          step3 {
            id
            responsiveImage(
              imgixParams: { fit: crop, ar: "1:1", w: 600, auto: format }
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
        ... on ServiceSetRecord {
          id
          services {
            id
            title
            text
            fontAwesomeIcon
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
          text
          url
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
