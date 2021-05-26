/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllDownloadPageSlugs
// ====================================================

export interface AllDownloadPageSlugs_allDownloadPages {
  readonly __typename: "DownloadPageRecord";
  readonly slug: string | null;
}

export interface AllDownloadPageSlugs {
  /**
   * Returns a collection of records
   */
  readonly allDownloadPages: ReadonlyArray<AllDownloadPageSlugs_allDownloadPages>;
}
