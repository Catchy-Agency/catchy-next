/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllPageSlugs
// ====================================================

export interface AllPageSlugs_allPages {
  readonly __typename: "PageRecord";
  readonly slug: string | null;
}

export interface AllPageSlugs {
  /**
   * Returns a collection of records
   */
  readonly allPages: ReadonlyArray<AllPageSlugs_allPages>;
}
