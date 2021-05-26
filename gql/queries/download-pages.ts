import gql from 'graphql-tag'

export const allDownloadPageSlugs = gql`
  query AllDownloadPageSlugs {
    allDownloadPages(first: 100) {
      slug
    }
  }
`

export const downloadPageBySlug = gql`
  query DownloadPageBySlug($slug: String) {
    downloadPage(filter: { slug: { eq: $slug } }) {
      title
      fileUrl
      fileName
      messageText
      linkText
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
