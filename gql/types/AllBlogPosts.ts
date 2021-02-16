/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllBlogPosts
// ====================================================

export interface AllBlogPosts_allBlogPosts_previewImage_responsiveImage {
  readonly __typename: 'ResponsiveImage'
  readonly aspectRatio: any
  readonly height: any
  readonly width: any
  readonly sizes: string
  readonly src: string
  readonly srcSet: string
  readonly alt: string | null
  readonly title: string | null
  readonly base64: string | null
}

export interface AllBlogPosts_allBlogPosts_previewImage {
  readonly __typename: 'FileField'
  readonly responsiveImage: AllBlogPosts_allBlogPosts_previewImage_responsiveImage | null
}

export interface AllBlogPosts_allBlogPosts {
  readonly __typename: 'BlogPostRecord'
  readonly id: any
  readonly slug: string | null
  readonly title: string | null
  readonly description: string | null
  readonly previewImage: AllBlogPosts_allBlogPosts_previewImage | null
}

export interface AllBlogPosts_allCategories {
  readonly __typename: 'CategoryRecord'
  readonly id: any
  readonly name: string | null
  readonly slug: string | null
}

export interface AllBlogPosts_primaryPage__seoMetaTags {
  readonly __typename: 'Tag'
  readonly attributes: any | null
  readonly content: string | null
  readonly tag: string
}

export interface AllBlogPosts_primaryPage {
  readonly __typename: 'PrimaryPageRecord'
  readonly id: any
  readonly title: string | null
  /**
   * SEO meta tags
   */
  readonly _seoMetaTags: ReadonlyArray<AllBlogPosts_primaryPage__seoMetaTags>
}

export interface AllBlogPosts_site_faviconMetaTags {
  readonly __typename: 'Tag'
  readonly attributes: any | null
  readonly content: string | null
  readonly tag: string
}

export interface AllBlogPosts_site {
  readonly __typename: 'Site'
  readonly faviconMetaTags: ReadonlyArray<AllBlogPosts_site_faviconMetaTags>
}

export interface AllBlogPosts_header_logo {
  readonly __typename: 'FileField'
  readonly url: string
  readonly title: string | null
  readonly alt: string | null
}

export interface AllBlogPosts_header_links {
  readonly __typename: 'PrimaryPageRecord'
  readonly id: any
  readonly title: string | null
  readonly slug: string | null
}

export interface AllBlogPosts_header {
  readonly __typename: 'HeaderRecord'
  readonly logo: AllBlogPosts_header_logo | null
  readonly links: ReadonlyArray<AllBlogPosts_header_links>
  readonly contactLinkLabel: string | null
}

export interface AllBlogPosts_footer_socialLinks {
  readonly __typename: 'SocialLinkRecord'
  readonly id: any
  readonly fontAwesomeIcon: string | null
  readonly url: string | null
}

export interface AllBlogPosts_footer {
  readonly __typename: 'FooterRecord'
  readonly title: string | null
  readonly nameLabel: string | null
  readonly emailAddressLabel: string | null
  readonly messageLabel: string | null
  readonly contactText: string | null
  readonly socialLinks: ReadonlyArray<AllBlogPosts_footer_socialLinks | null> | null
}

export interface AllBlogPosts {
  /**
   * Returns a collection of records
   */
  readonly allBlogPosts: ReadonlyArray<AllBlogPosts_allBlogPosts>
  /**
   * Returns a collection of records
   */
  readonly allCategories: ReadonlyArray<AllBlogPosts_allCategories>
  /**
   * Returns a specific record
   */
  readonly primaryPage: AllBlogPosts_primaryPage | null
  /**
   * Returns the single instance record
   */
  readonly site: AllBlogPosts_site
  /**
   * Returns the single instance record
   */
  readonly header: AllBlogPosts_header | null
  /**
   * Returns the single instance record
   */
  readonly footer: AllBlogPosts_footer | null
}
