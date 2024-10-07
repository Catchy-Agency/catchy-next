import gql from 'graphql-tag';

export const allContentPageSlugs = gql`
  query AllContentPageSlugs {
    allContentPages(first: 100) {
      slug
    }
  }
`;

export const contentPageBySlug = gql`
  query ContentPageBySlug($slug: String) {
    contentPage(filter: { slug: { eq: $slug } }) {
      title
      parent {
        id
        title
        slug
        parent {
          id
          title
          slug
          parent {
            id
            title
            slug
            parent {
              id
              title
              slug
              parent {
                id
                title
                slug
              }
            }
          }
        }
      }
      children {
        id
        title
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
        previewImageLg {
          responsiveImage(imgixParams: { fit: crop, ar: "3:1", auto: format }) {
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
        previewImageSm {
          responsiveImage(
            imgixParams: { fit: crop, ar: "1:1", w: 450, auto: format }
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
        previewImageCol {
          responsiveImage(
            imgixParams: { fit: crop, ar: "8:9", w: 720, auto: format }
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
      blocks {
        __typename
        ... on BannerRecord {
          id
          title
          text
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
          link {
            __typename
            ... on PrimaryPageRecord {
              slug
            }
          }
        }
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
            ... on CaseStudyRecord {
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
        ... on ColumnRowRecord {
          id
          verticallyCenterAcrossColumns
          addLightBackground
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
                  ... on CaseStudyRecord {
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
              ... on VideoInternalRecord {
                id
                thumbnail {
                  id
                  title
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
                video {
                  height
                  mimeType
                  title
                  video {
                    mp4Url
                    streamingUrl
                    thumbnailUrl
                  }
                  width
                }
              }
            }
            textAlign
            width
          }
        }
        ... on ContentLinkSetRecord {
          id
          displaySize
          imageAlign
          isSlider
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
              previewImageLg {
                responsiveImage(
                  imgixParams: { fit: crop, ar: "3:1", auto: format }
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
              previewImageSm {
                responsiveImage(
                  imgixParams: { fit: crop, ar: "1:1", w: 450, auto: format }
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
              previewImageCol {
                responsiveImage(
                  imgixParams: { fit: crop, ar: "8:9", w: 720, auto: format }
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
              subtitle
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
              previewImageLg {
                responsiveImage(
                  imgixParams: { fit: crop, ar: "3:1", auto: format }
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
              previewImageSm {
                responsiveImage(
                  imgixParams: { fit: crop, ar: "1:1", w: 450, auto: format }
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
              previewImageCol {
                responsiveImage(
                  imgixParams: { fit: crop, ar: "8:9", w: 720, auto: format }
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
            ... on CaseStudyRecord {
              id
              slug
              title
              pretitle
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
              previewImageLg {
                responsiveImage(
                  imgixParams: { fit: crop, ar: "3:1", auto: format }
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
              previewImageSm {
                responsiveImage(
                  imgixParams: { fit: crop, ar: "1:1", w: 450, auto: format }
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
              previewImageCol {
                responsiveImage(
                  imgixParams: { fit: crop, ar: "8:9", w: 720, auto: format }
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
              previewImageLg {
                responsiveImage(
                  imgixParams: { fit: crop, ar: "3:1", auto: format }
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
              previewImageSm {
                responsiveImage(
                  imgixParams: { fit: crop, ar: "1:1", w: 450, auto: format }
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
              previewImageCol {
                responsiveImage(
                  imgixParams: { fit: crop, ar: "8:9", w: 720, auto: format }
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
              previewImageLg {
                responsiveImage(
                  imgixParams: { fit: crop, ar: "3:1", auto: format }
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
              previewImageSm {
                responsiveImage(
                  imgixParams: { fit: crop, ar: "1:1", w: 450, auto: format }
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
              previewImageCol {
                responsiveImage(
                  imgixParams: { fit: crop, ar: "8:9", w: 720, auto: format }
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
        ... on TextImageSmallRecord {
          id
          title
          text
          buttonLabel
          externalLink
          inverted
          internalLink {
            __typename
            ... on PrimaryPageRecord {
              slug
              title
            }
          }
          image {
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
        }
        ... on TitleTextRecord {
          id
          title
          text
          maxWidth
          addLightBackground
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
        ... on VideoInternalRecord {
          id
          thumbnail {
            id
            title
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
          video {
            height
            mimeType
            title
            video {
              mp4Url
              streamingUrl
              thumbnailUrl
            }
            width
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
      whatWeDoPageLink {
        id
        title
        slug
      }
      whatWeDoLinks {
        id
        title
        slug
      }
      aboutCatchyPageLink {
        id
        title
        slug
      }
      aboutCatchyLinks {
        __typename
        ... on PrimaryPageRecord {
          id
          title
          slug
        }
        ... on ContentPageRecord {
          id
          title
          slug
        }
      }
      contactLinkLabel
    }
    footer {
      title
      formTitle
      firstNameLabel
      lastNameLabel
      emailAddressLabel
      messageLabel
      destinationEmail
      contactText
      contactEmail
      directionsUrl
      footerLogo {
        url
        title
        alt
      }
      socialLinks {
        id
        fontAwesomeIcon
        url
      }
      richText
    }
  }
`;
