/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ContentPostsByCategoryId
// ====================================================

export interface ContentPostsByCategoryId_allContentPosts_previewImage_responsiveImage {
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

export interface ContentPostsByCategoryId_allContentPosts_previewImage {
  readonly __typename: "FileField";
  readonly responsiveImage: ContentPostsByCategoryId_allContentPosts_previewImage_responsiveImage | null;
}

export interface ContentPostsByCategoryId_allContentPosts {
  readonly __typename: "ContentPostRecord";
  readonly id: any;
  readonly slug: string | null;
  readonly title: string | null;
  readonly description: string | null;
  readonly previewImage: ContentPostsByCategoryId_allContentPosts_previewImage | null;
}

export interface ContentPostsByCategoryId_allCategories {
  readonly __typename: "CategoryRecord";
  readonly id: any;
  readonly name: string | null;
  readonly slug: string | null;
}

export interface ContentPostsByCategoryId_primaryPage__seoMetaTags {
  readonly __typename: "Tag";
  readonly attributes: any | null;
  readonly content: string | null;
  readonly tag: string;
}

export interface ContentPostsByCategoryId_primaryPage {
  readonly __typename: "PrimaryPageRecord";
  readonly id: any;
  readonly title: string | null;
  /**
   * SEO meta tags
   */
  readonly _seoMetaTags: ReadonlyArray<ContentPostsByCategoryId_primaryPage__seoMetaTags>;
}

export interface ContentPostsByCategoryId_site_faviconMetaTags {
  readonly __typename: "Tag";
  readonly attributes: any | null;
  readonly content: string | null;
  readonly tag: string;
}

export interface ContentPostsByCategoryId_site {
  readonly __typename: "Site";
  readonly faviconMetaTags: ReadonlyArray<ContentPostsByCategoryId_site_faviconMetaTags>;
}

export interface ContentPostsByCategoryId_header_logo {
  readonly __typename: "FileField";
  readonly url: string;
  readonly title: string | null;
  readonly alt: string | null;
}

export interface ContentPostsByCategoryId_header_links {
  readonly __typename: "PrimaryPageRecord";
  readonly id: any;
  readonly title: string | null;
  readonly slug: string | null;
}

export interface ContentPostsByCategoryId_header {
  readonly __typename: "HeaderRecord";
  readonly logo: ContentPostsByCategoryId_header_logo | null;
  readonly links: ReadonlyArray<ContentPostsByCategoryId_header_links>;
  readonly contactLinkLabel: string | null;
}

export interface ContentPostsByCategoryId_footer_socialLinks {
  readonly __typename: "SocialLinkRecord";
  readonly id: any;
  readonly fontAwesomeIcon: string | null;
  readonly url: string | null;
}

export interface ContentPostsByCategoryId_footer {
  readonly __typename: "FooterRecord";
  readonly title: string | null;
  readonly nameLabel: string | null;
  readonly emailAddressLabel: string | null;
  readonly messageLabel: string | null;
  readonly contactText: string | null;
  readonly socialLinks: ReadonlyArray<(ContentPostsByCategoryId_footer_socialLinks | null)> | null;
}

export interface ContentPostsByCategoryId {
  /**
   * Returns a collection of records
   */
  readonly allContentPosts: ReadonlyArray<ContentPostsByCategoryId_allContentPosts>;
  /**
   * Returns a collection of records
   */
  readonly allCategories: ReadonlyArray<ContentPostsByCategoryId_allCategories>;
  /**
   * Returns a specific record
   */
  readonly primaryPage: ContentPostsByCategoryId_primaryPage | null;
  /**
   * Returns the single instance record
   */
  readonly site: ContentPostsByCategoryId_site;
  /**
   * Returns the single instance record
   */
  readonly header: ContentPostsByCategoryId_header | null;
  /**
   * Returns the single instance record
   */
  readonly footer: ContentPostsByCategoryId_footer | null;
}

export interface ContentPostsByCategoryIdVariables {
  readonly id?: any | null;
}
