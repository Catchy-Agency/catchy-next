import gql from 'graphql-tag'

export const allContentPostSlugs = gql`
  query AllContentPostSlugs {
    allContentPosts {
      slug
    }
  }
`

export const allContentPosts = gql`
  query AllContentPosts {
    allContentPosts(orderBy: date_DESC) {
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
      contactText
      socialLinks {
        id
        fontAwesomeIcon
        url
      }
    }
  }
`

export const contentPostsByCategoryId = gql`
  query ContentPostsByCategoryId($id: ItemId) {
    allContentPosts(filter: { categories: { anyIn: [$id] } }) {
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
      contactText
      socialLinks {
        id
        fontAwesomeIcon
        url
      }
    }
  }
`

export const contentPostBySlug = gql`
  query ContentPostBySlug($slug: String) {
    contentPost(filter: { slug: { eq: $slug } }) {
      title
      date
      blocks {
        __typename
        ... on ButtonRecord {
          id
        }
        ... on ColumnSetRecord {
          id
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
        ... on ImageSetRecord {
          id
        }
        ... on RichTextRecord {
          id
        }
        ... on VideoRecord {
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
