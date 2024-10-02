import gql from 'graphql-tag';

export const allServicesBySlug = gql`
  query allServicesSlugs {
    allServices(first: 100) {
      slug
    }
  }
`;

export const servicePagesBySlug = gql`
  query ServicePagesBySlug($slug: String) {
    service(filter: { slug: { eq: $slug } }) {
      title
      themeColor

      blocks {
        __typename
        ... on AgencyModelRecord {
          id
          text
          title
          columns {
            id
            image {
              responsiveImage(
                imgixParams: { fit: clip, maxW: 200, auto: format }
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
            title
            services {
              id
              title
              text
            }
          }
        }
        ... on ArticleRecord {
          id
          title
          text
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
        ... on CarouselRecord {
          id
          buttonLabel
          items {
            __typename
            ... on ExternalCardItemRecord {
              id
              title
              description
            }
            ... on InternalCardItemRecord {
              link {
                id
                title
                text
              }
            }
          }
          link {
            __typename
            ... on PrimaryPageRecord {
              slug
            }
          }
        }
        ... on CardStackRecord {
          id
          maxColumns
          cards {
            __typename
            ... on ExternalCardItemRecord {
              __typename
              id
              title
              description
              image {
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
              buttonLabel
              buttonLink
              openInNewTab
            }
            ... on InternalCardItemRecord {
              __typename
              link {
                id
                title
                text
                slug
                themeColor
                previewImage {
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
          }
        }
        ... on CaseStudyTileRecord {
          id
          title
          overline
          buttonLabel
          caseStudy {
            slug
            description
            previewImage {
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

        ... on ClientSetRecord {
          id
          title
          subtitle
          buttonLabel
          link {
            __typename
            ... on PrimaryPageRecord {
              slug
            }
          }
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
        ... on ItemsPanelRecord {
          id
          panelItems {
            id
            listTitle
            listImage {
              responsiveImage(
                imgixParams: { fit: clip, maxW: 200, auto: format }
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
            detailImage {
              responsiveImage(
                imgixParams: { fit: clip, maxW: 1600, auto: format }
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
            detailTitle
            detailText
            detailLink {
              __typename
              ... on ContentPageRecord {
                slug
                title
              }
              ... on CaseStudyRecord {
                slug
                title
              }
              ... on BlogPostRecord {
                slug
                title
              }
              ... on PrimaryPageRecord {
                slug
                title
              }
              ... on DownloadPageRecord {
                slug
                title
              }
            }
            detailLinkLabel
          }
        }
        ... on NewsletterRecord {
          id
          title
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
        ... on ServiceSetRecord {
          id
          hideTextContent
          textAlignment
          services {
            id
            title
            text
            fontAwesomeIcon
            previewImage {
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
          }
        }
        ... on TeamRecord {
          id
          teamTitle
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
        id
        title
        slug
      }
      contactLinkLabel
    }
    footer {
      title
      formTitle
      nameLabel
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
