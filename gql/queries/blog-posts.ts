import gql from 'graphql-tag'

export const allBlogPostSlugs = gql`
  query AllBlogPostSlugs {
    allBlogPosts(first: 100) {
      slug
    }
  }
`

export const allBlogPosts = gql`
  query AllBlogPosts {
    allBlogPosts(first: 100, orderBy: date_DESC) {
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
    allCategories {
      id
      name
      slug
    }
    primaryPage(filter: { slug: { eq: "blog" } }) {
      id
      title
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

export const blogPostsByCategoryId = gql`
  query BlogPostsByCategoryId($id: ItemId) {
    allBlogPosts(
      first: 100
      orderBy: date_DESC
      filter: { categories: { anyIn: [$id] } }
    ) {
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
    allCategories {
      id
      name
      slug
    }
    primaryPage(filter: { slug: { eq: "blog" } }) {
      id
      title
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

export const blogPostBySlug = gql`
  query BlogPostBySlug($slug: String) {
    blogPost(filter: { slug: { eq: $slug } }) {
      title
      date
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
          }
          align
          openInNewTab
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
                }
                align
                openInNewTab
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
      categories {
        id
        name
        slug
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
