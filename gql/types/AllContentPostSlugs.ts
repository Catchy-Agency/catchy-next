/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllContentPostSlugs
// ====================================================

export interface AllContentPostSlugs_allContentPosts {
  readonly __typename: "ContentPostRecord";
  readonly slug: string | null;
}

export interface AllContentPostSlugs {
  /**
   * Returns a collection of records
   */
  readonly allContentPosts: ReadonlyArray<AllContentPostSlugs_allContentPosts>;
}
