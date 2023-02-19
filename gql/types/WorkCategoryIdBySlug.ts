/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: WorkCategoryIdBySlug
// ====================================================

export interface WorkCategoryIdBySlug_workCategory {
  readonly __typename: "WorkCategoryRecord";
  readonly id: any;
}

export interface WorkCategoryIdBySlug {
  /**
   * Returns a specific record
   */
  readonly workCategory: WorkCategoryIdBySlug_workCategory | null;
}

export interface WorkCategoryIdBySlugVariables {
  readonly slug?: string | null;
}
