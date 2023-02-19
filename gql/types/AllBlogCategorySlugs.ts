/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllBlogCategorySlugs
// ====================================================

export interface AllBlogCategorySlugs_allCategories {
  readonly __typename: "CategoryRecord";
  readonly slug: string | null;
}

export interface AllBlogCategorySlugs {
  /**
   * Returns a collection of records
   */
  readonly allCategories: ReadonlyArray<AllBlogCategorySlugs_allCategories>;
}
