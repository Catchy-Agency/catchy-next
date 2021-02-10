/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllContentPosts
// ====================================================

export interface AllContentPosts_allContentPosts_seo_image_responsiveImage {
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

export interface AllContentPosts_allContentPosts_seo_image {
  readonly __typename: "FileField";
  readonly responsiveImage: AllContentPosts_allContentPosts_seo_image_responsiveImage | null;
}

export interface AllContentPosts_allContentPosts_seo {
  readonly __typename: "SeoField";
  readonly title: string | null;
  readonly description: string | null;
  readonly image: AllContentPosts_allContentPosts_seo_image | null;
}

export interface AllContentPosts_allContentPosts {
  readonly __typename: "ContentPostRecord";
  readonly id: any;
  readonly slug: string | null;
  readonly seo: AllContentPosts_allContentPosts_seo | null;
}

export interface AllContentPosts_allCategories {
  readonly __typename: "CategoryRecord";
  readonly id: any;
  readonly name: string | null;
  readonly slug: string | null;
}

export interface AllContentPosts_primaryPage__seoMetaTags {
  readonly __typename: "Tag";
  readonly attributes: any | null;
  readonly content: string | null;
  readonly tag: string;
}

export interface AllContentPosts_primaryPage {
  readonly __typename: "PrimaryPageRecord";
  readonly id: any;
  readonly title: string | null;
  /**
   * SEO meta tags
   */
  readonly _seoMetaTags: ReadonlyArray<AllContentPosts_primaryPage__seoMetaTags>;
}

export interface AllContentPosts_site_faviconMetaTags {
  readonly __typename: "Tag";
  readonly attributes: any | null;
  readonly content: string | null;
  readonly tag: string;
}

export interface AllContentPosts_site {
  readonly __typename: "Site";
  readonly faviconMetaTags: ReadonlyArray<AllContentPosts_site_faviconMetaTags>;
}

export interface AllContentPosts_header_logo {
  readonly __typename: "FileField";
  readonly url: string;
  readonly title: string | null;
  readonly alt: string | null;
}

export interface AllContentPosts_header_links {
  readonly __typename: "PrimaryPageRecord";
  readonly id: any;
  readonly title: string | null;
  readonly slug: string | null;
}

export interface AllContentPosts_header {
  readonly __typename: "HeaderRecord";
  readonly logo: AllContentPosts_header_logo | null;
  readonly links: ReadonlyArray<AllContentPosts_header_links>;
  readonly contactLinkLabel: string | null;
}

export interface AllContentPosts_footer_socialLinks {
  readonly __typename: "SocialLinkRecord";
  readonly id: any;
  readonly fontAwesomeIcon: string | null;
  readonly url: string | null;
}

export interface AllContentPosts_footer {
  readonly __typename: "FooterRecord";
  readonly title: string | null;
  readonly nameLabel: string | null;
  readonly emailAddressLabel: string | null;
  readonly messageLabel: string | null;
  readonly contactText: string | null;
  readonly socialLinks: ReadonlyArray<(AllContentPosts_footer_socialLinks | null)> | null;
}

export interface AllContentPosts {
  /**
   * Returns a collection of records
   */
  readonly allContentPosts: ReadonlyArray<AllContentPosts_allContentPosts>;
  /**
   * Returns a collection of records
   */
  readonly allCategories: ReadonlyArray<AllContentPosts_allCategories>;
  /**
   * Returns a specific record
   */
  readonly primaryPage: AllContentPosts_primaryPage | null;
  /**
   * Returns the single instance record
   */
  readonly site: AllContentPosts_site;
  /**
   * Returns the single instance record
   */
  readonly header: AllContentPosts_header | null;
  /**
   * Returns the single instance record
   */
  readonly footer: AllContentPosts_footer | null;
}
