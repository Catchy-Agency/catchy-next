/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: allServices
// ====================================================

export interface allServices_allServices_previewImage_responsiveImage {
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

export interface allServices_allServices_previewImage {
  readonly __typename: "FileField";
  readonly responsiveImage: allServices_allServices_previewImage_responsiveImage | null;
}

export interface allServices_allServices {
  readonly __typename: "ServiceRecord";
  readonly id: any;
  readonly slug: string | null;
  readonly title: string | null;
  readonly text: string | null;
  readonly previewImage: allServices_allServices_previewImage | null;
}

export interface allServices_site_faviconMetaTags {
  readonly __typename: "Tag";
  readonly attributes: any | null;
  readonly content: string | null;
  readonly tag: string;
}

export interface allServices_site {
  readonly __typename: "Site";
  readonly faviconMetaTags: ReadonlyArray<allServices_site_faviconMetaTags>;
}

export interface allServices_header_logo {
  readonly __typename: "FileField";
  readonly url: string;
  readonly title: string | null;
  readonly alt: string | null;
}

export interface allServices_header_links {
  readonly __typename: "PrimaryPageRecord";
  readonly id: any;
  readonly title: string | null;
  readonly slug: string | null;
}

export interface allServices_header_serviceLinks {
  readonly __typename: "PrimaryPageRecord";
  readonly id: any;
  readonly title: string | null;
  readonly slug: string | null;
}

export interface allServices_header_resourceLinks {
  readonly __typename: "PrimaryPageRecord";
  readonly id: any;
  readonly title: string | null;
  readonly slug: string | null;
}

export interface allServices_header {
  readonly __typename: "HeaderRecord";
  readonly logo: allServices_header_logo | null;
  readonly links: ReadonlyArray<allServices_header_links>;
  readonly serviceLinks: ReadonlyArray<allServices_header_serviceLinks>;
  readonly resourceLinks: ReadonlyArray<allServices_header_resourceLinks>;
  readonly contactLinkLabel: string | null;
}

export interface allServices_footer_footerLogo {
  readonly __typename: "FileField";
  readonly url: string;
  readonly title: string | null;
  readonly alt: string | null;
}

export interface allServices_footer_socialLinks {
  readonly __typename: "SocialLinkRecord";
  readonly id: any;
  readonly fontAwesomeIcon: string | null;
  readonly url: string | null;
}

export interface allServices_footer {
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
  readonly footerLogo: allServices_footer_footerLogo | null;
  readonly socialLinks: ReadonlyArray<allServices_footer_socialLinks>;
  readonly richText: string | null;
}

export interface allServices {
  /**
   * Returns a collection of records
   */
  readonly allServices: ReadonlyArray<allServices_allServices>;
  /**
   * Returns the single instance record
   */
  readonly site: allServices_site;
  /**
   * Returns the single instance record
   */
  readonly header: allServices_header | null;
  /**
   * Returns the single instance record
   */
  readonly footer: allServices_footer | null;
}
