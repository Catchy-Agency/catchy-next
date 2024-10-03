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

export interface BlogPostsByCategoryId_allBlogPosts_previewImageLg_responsiveImage {
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

export interface BlogPostsByCategoryId_allBlogPosts_previewImageLg {
  readonly __typename: "FileField";
  readonly responsiveImage: BlogPostsByCategoryId_allBlogPosts_previewImageLg_responsiveImage | null;
}

export interface BlogPostsByCategoryId_allBlogPosts_previewImageSm_responsiveImage {
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

export interface BlogPostsByCategoryId_allBlogPosts_previewImageSm {
  readonly __typename: "FileField";
  readonly responsiveImage: BlogPostsByCategoryId_allBlogPosts_previewImageSm_responsiveImage | null;
}

export interface BlogPostsByCategoryId_allBlogPosts_previewImageCol_responsiveImage {
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

export interface BlogPostsByCategoryId_allBlogPosts_previewImageCol {
  readonly __typename: "FileField";
  readonly responsiveImage: BlogPostsByCategoryId_allBlogPosts_previewImageCol_responsiveImage | null;
}

export interface BlogPostsByCategoryId_allBlogPosts {
  readonly __typename: "BlogPostRecord";
  readonly id: any;
  readonly slug: string | null;
  readonly title: string | null;
  readonly subtitle: string | null;
  readonly description: string | null;
  readonly previewImage: BlogPostsByCategoryId_allBlogPosts_previewImage | null;
  readonly previewImageLg: BlogPostsByCategoryId_allBlogPosts_previewImageLg | null;
  readonly previewImageSm: BlogPostsByCategoryId_allBlogPosts_previewImageSm | null;
  readonly previewImageCol: BlogPostsByCategoryId_allBlogPosts_previewImageCol | null;
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
   * Generates SEO and Social card meta tags to be used in your frontend
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

export interface BlogPostsByCategoryId_header_whatWeDoPageLink {
  readonly __typename: "PrimaryPageRecord";
  readonly id: any;
  readonly title: string | null;
  readonly slug: string | null;
}

export interface BlogPostsByCategoryId_header_whatWeDoLinks {
  readonly __typename: "ServiceRecord";
  readonly id: any;
  readonly title: string | null;
  readonly slug: string | null;
}

export interface BlogPostsByCategoryId_header_aboutCatchyPageLink {
  readonly __typename: "PrimaryPageRecord";
  readonly id: any;
  readonly title: string | null;
  readonly slug: string | null;
}

export interface BlogPostsByCategoryId_header_aboutCatchyLinks {
  readonly __typename: "PrimaryPageRecord";
  readonly id: any;
  readonly title: string | null;
  readonly slug: string | null;
}

export interface BlogPostsByCategoryId_header {
  readonly __typename: "HeaderRecord";
  readonly logo: BlogPostsByCategoryId_header_logo | null;
  readonly links: ReadonlyArray<BlogPostsByCategoryId_header_links>;
  readonly whatWeDoPageLink: BlogPostsByCategoryId_header_whatWeDoPageLink | null;
  readonly whatWeDoLinks: ReadonlyArray<BlogPostsByCategoryId_header_whatWeDoLinks>;
  readonly aboutCatchyPageLink: BlogPostsByCategoryId_header_aboutCatchyPageLink | null;
  readonly aboutCatchyLinks: ReadonlyArray<BlogPostsByCategoryId_header_aboutCatchyLinks>;
  readonly contactLinkLabel: string | null;
}

export interface BlogPostsByCategoryId_footer_footerLogo {
  readonly __typename: "FileField";
  readonly url: string;
  readonly title: string | null;
  readonly alt: string | null;
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
  readonly formTitle: string | null;
  readonly nameLabel: string | null;
  readonly firstNameLabel: string | null;
  readonly lastNameLabel: string | null;
  readonly emailAddressLabel: string | null;
  readonly messageLabel: string | null;
  readonly destinationEmail: string | null;
  readonly contactText: string | null;
  readonly contactEmail: string | null;
  readonly directionsUrl: string | null;
  readonly footerLogo: BlogPostsByCategoryId_footer_footerLogo | null;
  readonly socialLinks: ReadonlyArray<BlogPostsByCategoryId_footer_socialLinks>;
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
