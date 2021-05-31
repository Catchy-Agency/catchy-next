import gql from 'graphql-tag'

export const allPrimaryPageSlugs = gql`
  query AllPrimaryPageSlugs {
    allPrimaryPages(first: 100) {
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
          foregroundImage {
            responsiveImage(
              imgixParams: { fit: clip, maxW: 750, auto: format }
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
          backgroundImage {
            responsiveImage(
              imgixParams: { fit: clip, maxW: 1920, auto: format }
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
          showContactButton
          contactButtonLabel
        }
        __typename
        ... on ButtonExternalRecord {
          id
          label
          url
          align
          openInNewTab
        }
        ... on ButtonInternalRecord {
          id
          label
          link {
            __typename
            ... on ContentPageRecord {
              slug
            }
            ... on BlogPostRecord {
              slug
            }
            ... on PrimaryPageRecord {
              slug
            }
            ... on DownloadPageRecord {
              slug
            }
          }
          align
          openInNewTab
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
            ... on DownloadPageRecord {
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
        ... on ColumnRowRecord {
          id
          columns {
            id
            title
            image {
              responsiveImage(
                imgixParams: { fit: clip, maxW: 1344, auto: format }
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
            text
            blocks {
              __typename
              ... on ButtonExternalRecord {
                id
                label
                url
                align
                openInNewTab
              }
              ... on ButtonInternalRecord {
                id
                label
                link {
                  __typename
                  ... on ContentPageRecord {
                    slug
                  }
                  ... on BlogPostRecord {
                    slug
                  }
                  ... on PrimaryPageRecord {
                    slug
                  }
                  ... on DownloadPageRecord {
                    slug
                  }
                }
                align
                openInNewTab
              }
              ... on FormBlockRecord {
                id
                form {
                  title
                  name
                  action
                  method
                  formFields {
                    __typename
                    id
                    label
                    fieldName
                    fieldType
                    required
                    invisible
                    grouped
                  }
                }
              }
              ... on RichTextRecord {
                id
                richText
              }
              ... on VideoRecord {
                id
                video {
                  height
                  provider
                  providerUid
                  thumbnailUrl
                  title
                  url
                  width
                }
              }
            }
            textAlign
            width
          }
          verticallyCenterAcrossColumns
        }
        ... on FormBlockRecord {
          id
          form {
            title
            name
            action
            method
            formFields {
              __typename
              id
              label
              fieldName
              fieldType
              required
              invisible
              grouped
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
        ... on ImageSetRecord {
          id
          imageSet {
            id
            responsiveImage(
              imgixParams: { fit: clip, maxW: 1344, auto: format }
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
          verticallyCenterAcrossImages
        }
        ... on RichTextRecord {
          id
          richText
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
        ... on VideoRecord {
          id
          video {
            height
            provider
            providerUid
            thumbnailUrl
            title
            url
            width
          }
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
      destinationEmail
      contactText
      socialLinks {
        id
        fontAwesomeIcon
        url
      }
      richText
    }
  }
`
