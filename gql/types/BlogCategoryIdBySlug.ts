/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BlogCategoryIdBySlug
// ====================================================

export interface BlogCategoryIdBySlug_category {
  readonly __typename: "CategoryRecord";
  readonly id: any;
}

export interface BlogCategoryIdBySlug {
  /**
   * Returns a specific record
   */
  readonly category: BlogCategoryIdBySlug_category | null;
}

export interface BlogCategoryIdBySlugVariables {
  readonly slug?: string | null;
}
