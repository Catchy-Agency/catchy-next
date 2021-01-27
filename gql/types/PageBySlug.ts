/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PageBySlug
// ====================================================

export interface PageBySlug_page__seoMetaTags {
  readonly __typename: "Tag";
  readonly attributes: any | null;
  readonly content: string | null;
  readonly tag: string;
}

export interface PageBySlug_page {
  readonly __typename: "PageRecord";
  readonly title: string | null;
  readonly slug: string | null;
  /**
   * SEO meta tags
   */
  readonly _seoMetaTags: ReadonlyArray<PageBySlug_page__seoMetaTags>;
}

export interface PageBySlug_site_faviconMetaTags {
  readonly __typename: "Tag";
  readonly attributes: any | null;
  readonly content: string | null;
  readonly tag: string;
}

export interface PageBySlug_site {
  readonly __typename: "Site";
  readonly faviconMetaTags: ReadonlyArray<PageBySlug_site_faviconMetaTags>;
}

export interface PageBySlug {
  /**
   * Returns a specific record
   */
  readonly page: PageBySlug_page | null;
  /**
   * Returns the single instance record
   */
  readonly site: PageBySlug_site;
}

export interface PageBySlugVariables {
  readonly slug?: string | null;
}
