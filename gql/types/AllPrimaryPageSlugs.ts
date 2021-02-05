/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllPrimaryPageSlugs
// ====================================================

export interface AllPrimaryPageSlugs_allPrimaryPages {
  readonly __typename: "PrimaryPageRecord";
  readonly slug: string | null;
}

export interface AllPrimaryPageSlugs {
  /**
   * Returns a collection of records
   */
  readonly allPrimaryPages: ReadonlyArray<AllPrimaryPageSlugs_allPrimaryPages>;
}
