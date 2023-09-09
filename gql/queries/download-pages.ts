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
      serviceLinks {
        id
        title
        slug
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
`
