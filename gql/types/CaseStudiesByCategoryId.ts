/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CaseStudiesByCategoryId
// ====================================================

export interface CaseStudiesByCategoryId_allCaseStudies_previewImage_responsiveImage {
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

export interface CaseStudiesByCategoryId_allCaseStudies_previewImage {
  readonly __typename: "FileField";
  readonly responsiveImage: CaseStudiesByCategoryId_allCaseStudies_previewImage_responsiveImage | null;
}

export interface CaseStudiesByCategoryId_allCaseStudies_previewImageLg_responsiveImage {
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

export interface CaseStudiesByCategoryId_allCaseStudies_previewImageLg {
  readonly __typename: "FileField";
  readonly responsiveImage: CaseStudiesByCategoryId_allCaseStudies_previewImageLg_responsiveImage | null;
}

export interface CaseStudiesByCategoryId_allCaseStudies_previewImageSm_responsiveImage {
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

export interface CaseStudiesByCategoryId_allCaseStudies_previewImageSm {
  readonly __typename: "FileField";
  readonly responsiveImage: CaseStudiesByCategoryId_allCaseStudies_previewImageSm_responsiveImage | null;
}

export interface CaseStudiesByCategoryId_allCaseStudies_previewImageCol_responsiveImage {
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

export interface CaseStudiesByCategoryId_allCaseStudies_previewImageCol {
  readonly __typename: "FileField";
  readonly responsiveImage: CaseStudiesByCategoryId_allCaseStudies_previewImageCol_responsiveImage | null;
}

export interface CaseStudiesByCategoryId_allCaseStudies {
  readonly __typename: "CaseStudyRecord";
  readonly id: any;
  readonly slug: string | null;
  readonly title: string | null;
  readonly description: string | null;
  readonly previewImage: CaseStudiesByCategoryId_allCaseStudies_previewImage | null;
  readonly previewImageLg: CaseStudiesByCategoryId_allCaseStudies_previewImageLg | null;
  readonly previewImageSm: CaseStudiesByCategoryId_allCaseStudies_previewImageSm | null;
  readonly previewImageCol: CaseStudiesByCategoryId_allCaseStudies_previewImageCol | null;
}

export interface CaseStudiesByCategoryId_allWorkCategories {
  readonly __typename: "WorkCategoryRecord";
  readonly id: any;
  readonly name: string | null;
  readonly slug: string | null;
}

export interface CaseStudiesByCategoryId_primaryPage__seoMetaTags {
  readonly __typename: "Tag";
  readonly attributes: any | null;
  readonly content: string | null;
  readonly tag: string;
}

export interface CaseStudiesByCategoryId_primaryPage {
  readonly __typename: "PrimaryPageRecord";
  readonly id: any;
  readonly title: string | null;
  /**
   * SEO meta tags
   */
  readonly _seoMetaTags: ReadonlyArray<CaseStudiesByCategoryId_primaryPage__seoMetaTags>;
}

export interface CaseStudiesByCategoryId_site_faviconMetaTags {
  readonly __typename: "Tag";
  readonly attributes: any | null;
  readonly content: string | null;
  readonly tag: string;
}

export interface CaseStudiesByCategoryId_site {
  readonly __typename: "Site";
  readonly faviconMetaTags: ReadonlyArray<CaseStudiesByCategoryId_site_faviconMetaTags>;
}

export interface CaseStudiesByCategoryId_header_logo {
  readonly __typename: "FileField";
  readonly url: string;
  readonly title: string | null;
  readonly alt: string | null;
}

export interface CaseStudiesByCategoryId_header_links {
  readonly __typename: "PrimaryPageRecord";
  readonly id: any;
  readonly title: string | null;
  readonly slug: string | null;
}

export interface CaseStudiesByCategoryId_header {
  readonly __typename: "HeaderRecord";
  readonly logo: CaseStudiesByCategoryId_header_logo | null;
  readonly links: ReadonlyArray<CaseStudiesByCategoryId_header_links>;
  readonly contactLinkLabel: string | null;
}

export interface CaseStudiesByCategoryId_footer_footerLogo {
  readonly __typename: "FileField";
  readonly url: string;
  readonly title: string | null;
  readonly alt: string | null;
}

export interface CaseStudiesByCategoryId_footer_socialLinks {
  readonly __typename: "SocialLinkRecord";
  readonly id: any;
  readonly fontAwesomeIcon: string | null;
  readonly url: string | null;
}

export interface CaseStudiesByCategoryId_footer {
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
  readonly footerLogo: CaseStudiesByCategoryId_footer_footerLogo | null;
  readonly socialLinks: ReadonlyArray<CaseStudiesByCategoryId_footer_socialLinks>;
  readonly richText: string | null;
}

export interface CaseStudiesByCategoryId {
  /**
   * Returns a collection of records
   */
  readonly allCaseStudies: ReadonlyArray<CaseStudiesByCategoryId_allCaseStudies>;
  /**
   * Returns a collection of records
   */
  readonly allWorkCategories: ReadonlyArray<CaseStudiesByCategoryId_allWorkCategories>;
  /**
   * Returns a specific record
   */
  readonly primaryPage: CaseStudiesByCategoryId_primaryPage | null;
  /**
   * Returns the single instance record
   */
  readonly site: CaseStudiesByCategoryId_site;
  /**
   * Returns the single instance record
   */
  readonly header: CaseStudiesByCategoryId_header | null;
  /**
   * Returns the single instance record
   */
  readonly footer: CaseStudiesByCategoryId_footer | null;
}

export interface CaseStudiesByCategoryIdVariables {
  readonly id?: any | null;
}
