/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllBlogPostSlugs
// ====================================================

export interface AllBlogPostSlugs_allBlogPosts {
  readonly __typename: "BlogPostRecord";
  readonly slug: string | null;
}

export interface AllBlogPostSlugs {
  /**
   * Returns a collection of records
   */
  readonly allBlogPosts: ReadonlyArray<AllBlogPostSlugs_allBlogPosts>;
}
