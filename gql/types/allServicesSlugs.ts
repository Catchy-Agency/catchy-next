/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: allServicesSlugs
// ====================================================

export interface allServicesSlugs_allServices {
  readonly __typename: "ServiceRecord";
  readonly slug: string | null;
}

export interface allServicesSlugs {
  /**
   * Returns a collection of records
   */
  readonly allServices: ReadonlyArray<allServicesSlugs_allServices>;
}
