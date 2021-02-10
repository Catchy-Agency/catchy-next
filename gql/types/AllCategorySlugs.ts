/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllCategorySlugs
// ====================================================

export interface AllCategorySlugs_allCategories {
  readonly __typename: "CategoryRecord";
  readonly slug: string | null;
}

export interface AllCategorySlugs {
  /**
   * Returns a collection of records
   */
  readonly allCategories: ReadonlyArray<AllCategorySlugs_allCategories>;
}
