/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllCaseStudies
// ====================================================

export interface AllCaseStudies_allCaseStudies_previewImage_responsiveImage {
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

export interface AllCaseStudies_allCaseStudies_previewImage {
  readonly __typename: "FileField";
  readonly responsiveImage: AllCaseStudies_allCaseStudies_previewImage_responsiveImage | null;
}

export interface AllCaseStudies_allCaseStudies_previewImageLg_responsiveImage {
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

export interface AllCaseStudies_allCaseStudies_previewImageLg {
  readonly __typename: "FileField";
  readonly responsiveImage: AllCaseStudies_allCaseStudies_previewImageLg_responsiveImage | null;
}

export interface AllCaseStudies_allCaseStudies_previewImageSm_responsiveImage {
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

export interface AllCaseStudies_allCaseStudies_previewImageSm {
  readonly __typename: "FileField";
  readonly responsiveImage: AllCaseStudies_allCaseStudies_previewImageSm_responsiveImage | null;
}

export interface AllCaseStudies_allCaseStudies_previewImageCol_responsiveImage {
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

export interface AllCaseStudies_allCaseStudies_previewImageCol {
  readonly __typename: "FileField";
  readonly responsiveImage: AllCaseStudies_allCaseStudies_previewImageCol_responsiveImage | null;
}

export interface AllCaseStudies_allCaseStudies {
  readonly __typename: "CaseStudyRecord";
  readonly id: any;
  readonly slug: string | null;
  readonly title: string | null;
  readonly description: string | null;
  readonly previewImage: AllCaseStudies_allCaseStudies_previewImage | null;
  readonly previewImageLg: AllCaseStudies_allCaseStudies_previewImageLg | null;
  readonly previewImageSm: AllCaseStudies_allCaseStudies_previewImageSm | null;
  readonly previewImageCol: AllCaseStudies_allCaseStudies_previewImageCol | null;
}

export interface AllCaseStudies_allWorkCategories {
  readonly __typename: "WorkCategoryRecord";
  readonly id: any;
  readonly name: string | null;
  readonly slug: string | null;
}

export interface AllCaseStudies_primaryPage__seoMetaTags {
  readonly __typename: "Tag";
  readonly attributes: any | null;
  readonly content: string | null;
  readonly tag: string;
}

export interface AllCaseStudies_primaryPage {
  readonly __typename: "PrimaryPageRecord";
  readonly id: any;
  readonly title: string | null;
  /**
   * SEO meta tags
   */
  readonly _seoMetaTags: ReadonlyArray<AllCaseStudies_primaryPage__seoMetaTags>;
}

export interface AllCaseStudies_site_faviconMetaTags {
  readonly __typename: "Tag";
  readonly attributes: any | null;
  readonly content: string | null;
  readonly tag: string;
}

export interface AllCaseStudies_site {
  readonly __typename: "Site";
  readonly faviconMetaTags: ReadonlyArray<AllCaseStudies_site_faviconMetaTags>;
}

export interface AllCaseStudies_header_logo {
  readonly __typename: "FileField";
  readonly url: string;
  readonly title: string | null;
  readonly alt: string | null;
}

export interface AllCaseStudies_header_links {
  readonly __typename: "PrimaryPageRecord";
  readonly id: any;
  readonly title: string | null;
  readonly slug: string | null;
}

export interface AllCaseStudies_header {
  readonly __typename: "HeaderRecord";
  readonly logo: AllCaseStudies_header_logo | null;
  readonly links: ReadonlyArray<AllCaseStudies_header_links>;
  readonly contactLinkLabel: string | null;
}

export interface AllCaseStudies_footer_footerLogo {
  readonly __typename: "FileField";
  readonly url: string;
  readonly title: string | null;
  readonly alt: string | null;
}

export interface AllCaseStudies_footer_socialLinks {
  readonly __typename: "SocialLinkRecord";
  readonly id: any;
  readonly fontAwesomeIcon: string | null;
  readonly url: string | null;
}

export interface AllCaseStudies_footer {
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
  readonly footerLogo: AllCaseStudies_footer_footerLogo | null;
  readonly socialLinks: ReadonlyArray<AllCaseStudies_footer_socialLinks>;
  readonly richText: string | null;
}

export interface AllCaseStudies {
  /**
   * Returns a collection of records
   */
  readonly allCaseStudies: ReadonlyArray<AllCaseStudies_allCaseStudies>;
  /**
   * Returns a collection of records
   */
  readonly allWorkCategories: ReadonlyArray<AllCaseStudies_allWorkCategories>;
  /**
   * Returns a specific record
   */
  readonly primaryPage: AllCaseStudies_primaryPage | null;
  /**
   * Returns the single instance record
   */
  readonly site: AllCaseStudies_site;
  /**
   * Returns the single instance record
   */
  readonly header: AllCaseStudies_header | null;
  /**
   * Returns the single instance record
   */
  readonly footer: AllCaseStudies_footer | null;
}
