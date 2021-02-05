/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllContentPageSlugs
// ====================================================

export interface AllContentPageSlugs_allContentPages {
  readonly __typename: "ContentPageRecord";
  readonly slug: string | null;
}

export interface AllContentPageSlugs {
  /**
   * Returns a collection of records
   */
  readonly allContentPages: ReadonlyArray<AllContentPageSlugs_allContentPages>;
}
