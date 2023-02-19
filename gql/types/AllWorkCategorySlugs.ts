/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllWorkCategorySlugs
// ====================================================

export interface AllWorkCategorySlugs_allWorkCategories {
  readonly __typename: "WorkCategoryRecord";
  readonly slug: string | null;
}

export interface AllWorkCategorySlugs {
  /**
   * Returns a collection of records
   */
  readonly allWorkCategories: ReadonlyArray<AllWorkCategorySlugs_allWorkCategories>;
}
