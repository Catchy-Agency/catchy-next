/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: DownloadPageBySlug
// ====================================================

export interface DownloadPageBySlug_downloadPage__seoMetaTags {
  readonly __typename: "Tag";
  readonly attributes: any | null;
  readonly content: string | null;
  readonly tag: string;
}

export interface DownloadPageBySlug_downloadPage {
  readonly __typename: "DownloadPageRecord";
  readonly title: string | null;
  readonly fileUrl: string | null;
  readonly fileName: string | null;
  readonly messageText: string | null;
  readonly linkText: string | null;
  readonly slug: string | null;
  /**
   * SEO meta tags
   */
  readonly _seoMetaTags: ReadonlyArray<DownloadPageBySlug_downloadPage__seoMetaTags>;
}

export interface DownloadPageBySlug_site_faviconMetaTags {
  readonly __typename: "Tag";
  readonly attributes: any | null;
  readonly content: string | null;
  readonly tag: string;
}

export interface DownloadPageBySlug_site {
  readonly __typename: "Site";
  readonly faviconMetaTags: ReadonlyArray<DownloadPageBySlug_site_faviconMetaTags>;
}

export interface DownloadPageBySlug_header_logo {
  readonly __typename: "FileField";
  readonly url: string;
  readonly title: string | null;
  readonly alt: string | null;
}

export interface DownloadPageBySlug_header_links {
  readonly __typename: "PrimaryPageRecord";
  readonly id: any;
  readonly title: string | null;
  readonly slug: string | null;
}

export interface DownloadPageBySlug_header {
  readonly __typename: "HeaderRecord";
  readonly logo: DownloadPageBySlug_header_logo | null;
  readonly links: ReadonlyArray<DownloadPageBySlug_header_links>;
  readonly contactLinkLabel: string | null;
}

export interface DownloadPageBySlug_footer_socialLinks {
  readonly __typename: "SocialLinkRecord";
  readonly id: any;
  readonly fontAwesomeIcon: string | null;
  readonly url: string | null;
}

export interface DownloadPageBySlug_footer {
  readonly __typename: "FooterRecord";
  readonly title: string | null;
  readonly nameLabel: string | null;
  readonly emailAddressLabel: string | null;
  readonly messageLabel: string | null;
  readonly destinationEmail: string | null;
  readonly contactText: string | null;
  readonly socialLinks: ReadonlyArray<(DownloadPageBySlug_footer_socialLinks | null)> | null;
  readonly richText: string | null;
}

export interface DownloadPageBySlug {
  /**
   * Returns a specific record
   */
  readonly downloadPage: DownloadPageBySlug_downloadPage | null;
  /**
   * Returns the single instance record
   */
  readonly site: DownloadPageBySlug_site;
  /**
   * Returns the single instance record
   */
  readonly header: DownloadPageBySlug_header | null;
  /**
   * Returns the single instance record
   */
  readonly footer: DownloadPageBySlug_footer | null;
}

export interface DownloadPageBySlugVariables {
  readonly slug?: string | null;
}
