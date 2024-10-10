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
   * Generates SEO and Social card meta tags to be used in your frontend
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

export interface DownloadPageBySlug_header_whatWeDoPageLink {
  readonly __typename: "PrimaryPageRecord";
  readonly id: any;
  readonly title: string | null;
  readonly slug: string | null;
}

export interface DownloadPageBySlug_header_whatWeDoLinks {
  readonly __typename: "ServiceRecord";
  readonly id: any;
  readonly title: string | null;
  readonly slug: string | null;
}

export interface DownloadPageBySlug_header_aboutCatchyPageLink {
  readonly __typename: "PrimaryPageRecord";
  readonly id: any;
  readonly title: string | null;
  readonly slug: string | null;
}

export interface DownloadPageBySlug_header_aboutCatchyLinks_PrimaryPageRecord {
  readonly __typename: "PrimaryPageRecord";
  readonly id: any;
  readonly title: string | null;
  readonly slug: string | null;
}

export interface DownloadPageBySlug_header_aboutCatchyLinks_ContentPageRecord {
  readonly __typename: "ContentPageRecord";
  readonly id: any;
  readonly title: string | null;
  readonly slug: string | null;
}

export type DownloadPageBySlug_header_aboutCatchyLinks = DownloadPageBySlug_header_aboutCatchyLinks_PrimaryPageRecord | DownloadPageBySlug_header_aboutCatchyLinks_ContentPageRecord;

export interface DownloadPageBySlug_header {
  readonly __typename: "HeaderRecord";
  readonly logo: DownloadPageBySlug_header_logo | null;
  readonly links: ReadonlyArray<DownloadPageBySlug_header_links>;
  readonly whatWeDoPageLink: DownloadPageBySlug_header_whatWeDoPageLink | null;
  readonly whatWeDoLinks: ReadonlyArray<DownloadPageBySlug_header_whatWeDoLinks>;
  readonly aboutCatchyPageLink: DownloadPageBySlug_header_aboutCatchyPageLink | null;
  readonly aboutCatchyLinks: ReadonlyArray<DownloadPageBySlug_header_aboutCatchyLinks>;
  readonly contactLinkLabel: string | null;
}

export interface DownloadPageBySlug_footer_footerLogo {
  readonly __typename: "FileField";
  readonly url: string;
  readonly title: string | null;
  readonly alt: string | null;
}

export interface DownloadPageBySlug_footer_socialLinks {
  readonly __typename: "SocialLinkRecord";
  readonly id: any;
  readonly fontAwesomeIcon: string | null;
  readonly url: string | null;
  readonly email: string | null;
}

export interface DownloadPageBySlug_footer {
  readonly __typename: "FooterRecord";
  readonly title: string | null;
  readonly formTitle: string | null;
  readonly firstNameLabel: string | null;
  readonly lastNameLabel: string | null;
  readonly emailAddressLabel: string | null;
  readonly messageLabel: string | null;
  readonly destinationEmail: string | null;
  readonly contactText: string | null;
  readonly contactEmail: string | null;
  readonly directionsUrl: string | null;
  readonly footerLogo: DownloadPageBySlug_footer_footerLogo | null;
  readonly socialLinks: ReadonlyArray<DownloadPageBySlug_footer_socialLinks>;
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
