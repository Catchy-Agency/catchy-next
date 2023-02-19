/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllCaseStudySlugs
// ====================================================

export interface AllCaseStudySlugs_allCaseStudies {
  readonly __typename: "CaseStudyRecord";
  readonly slug: string | null;
}

export interface AllCaseStudySlugs {
  /**
   * Returns a collection of records
   */
  readonly allCaseStudies: ReadonlyArray<AllCaseStudySlugs_allCaseStudies>;
}
