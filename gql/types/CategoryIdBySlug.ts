/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CategoryIdBySlug
// ====================================================

export interface CategoryIdBySlug_category {
  readonly __typename: "CategoryRecord";
  readonly id: any;
}

export interface CategoryIdBySlug {
  /**
   * Returns a specific record
   */
  readonly category: CategoryIdBySlug_category | null;
}

export interface CategoryIdBySlugVariables {
  readonly slug?: string | null;
}
