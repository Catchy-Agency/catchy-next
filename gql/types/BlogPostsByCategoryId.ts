/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BlogPostsByCategoryId
// ====================================================

export interface BlogPostsByCategoryId_allBlogPosts_previewImage_responsiveImage {
  readonly __typename: "ResponsiveImage";
  readonly aspectRatio: any;
  readonly height: any;
  readonly width: any;
  readonly sizes: string;
  readonly src: string;
  readonly srcSet: string;
  readonly alt: string | null;
  readonly title: string | null;
  readonly base64: string | null;
}

export interface BlogPostsByCategoryId_allBlogPosts_previewImage {
  readonly __typename: "FileField";
  readonly responsiveImage: BlogPostsByCategoryId_allBlogPosts_previewImage_responsiveImage | null;
}

export interface BlogPostsByCategoryId_allBlogPosts {
  readonly __typename: "BlogPostRecord";
  readonly id: any;
  readonly slug: string | null;
  readonly title: string | null;
  readonly description: string | null;
  readonly previewImage: BlogPostsByCategoryId_allBlogPosts_previewImage | null;
}

export interface BlogPostsByCategoryId_allCategories {
  readonly __typename: "CategoryRecord";
  readonly id: any;
  readonly name: string | null;
  readonly slug: string | null;
}

export interface BlogPostsByCategoryId_primaryPage__seoMetaTags {
  readonly __typename: "Tag";
  readonly attributes: any | null;
  readonly content: string | null;
  readonly tag: string;
}

export interface BlogPostsByCategoryId_primaryPage {
  readonly __typename: "PrimaryPageRecord";
  readonly id: any;
  readonly title: string | null;
  /**
   * SEO meta tags
   */
  readonly _seoMetaTags: ReadonlyArray<BlogPostsByCategoryId_primaryPage__seoMetaTags>;
}

export interface BlogPostsByCategoryId_site_faviconMetaTags {
  readonly __typename: "Tag";
  readonly attributes: any | null;
  readonly content: string | null;
  readonly tag: string;
}

export interface BlogPostsByCategoryId_site {
  readonly __typename: "Site";
  readonly faviconMetaTags: ReadonlyArray<BlogPostsByCategoryId_site_faviconMetaTags>;
}

export interface BlogPostsByCategoryId_header_logo {
  readonly __typename: "FileField";
  readonly url: string;
  readonly title: string | null;
  readonly alt: string | null;
}

export interface BlogPostsByCategoryId_header_links {
  readonly __typename: "PrimaryPageRecord";
  readonly id: any;
  readonly title: string | null;
  readonly slug: string | null;
}

export interface BlogPostsByCategoryId_header {
  readonly __typename: "HeaderRecord";
  readonly logo: BlogPostsByCategoryId_header_logo | null;
  readonly links: ReadonlyArray<BlogPostsByCategoryId_header_links>;
  readonly contactLinkLabel: string | null;
}

export interface BlogPostsByCategoryId_footer_socialLinks {
  readonly __typename: "SocialLinkRecord";
  readonly id: any;
  readonly fontAwesomeIcon: string | null;
  readonly url: string | null;
}

export interface BlogPostsByCategoryId_footer {
  readonly __typename: "FooterRecord";
  readonly title: string | null;
  readonly nameLabel: string | null;
  readonly emailAddressLabel: string | null;
  readonly messageLabel: string | null;
  readonly destinationEmail: string | null;
  readonly contactText: string | null;
  readonly socialLinks: ReadonlyArray<(BlogPostsByCategoryId_footer_socialLinks | null)> | null;
  readonly richText: string | null;
}

export interface BlogPostsByCategoryId {
  /**
   * Returns a collection of records
   */
  readonly allBlogPosts: ReadonlyArray<BlogPostsByCategoryId_allBlogPosts>;
  /**
   * Returns a collection of records
   */
  readonly allCategories: ReadonlyArray<BlogPostsByCategoryId_allCategories>;
  /**
   * Returns a specific record
   */
  readonly primaryPage: BlogPostsByCategoryId_primaryPage | null;
  /**
   * Returns the single instance record
   */
  readonly site: BlogPostsByCategoryId_site;
  /**
   * Returns the single instance record
   */
  readonly header: BlogPostsByCategoryId_header | null;
  /**
   * Returns the single instance record
   */
  readonly footer: BlogPostsByCategoryId_footer | null;
}

export interface BlogPostsByCategoryIdVariables {
  readonly id?: any | null;
}
