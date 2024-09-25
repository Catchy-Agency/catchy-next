/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllPaginatedBlogPosts
// ====================================================

export interface AllPaginatedBlogPosts_allBlogPosts_categories {
  readonly __typename: "CategoryRecord";
  readonly name: string | null;
  readonly slug: string | null;
}

export interface AllPaginatedBlogPosts_allBlogPosts_previewImage_responsiveImage {
  readonly __typename: "ResponsiveImage";
  readonly aspectRatio: any;
  readonly height: any;
  readonly width: any;
  readonly sizes: string;
  readonly src: string;
  readonly srcSet: string;
  readonly alt: string | null;
  readonly title: string | null;
  readonly base64: string | null;
}

export interface AllPaginatedBlogPosts_allBlogPosts_previewImage {
  readonly __typename: "FileField";
  readonly responsiveImage: AllPaginatedBlogPosts_allBlogPosts_previewImage_responsiveImage | null;
}

export interface AllPaginatedBlogPosts_allBlogPosts_previewImageLg_responsiveImage {
  readonly __typename: "ResponsiveImage";
  readonly aspectRatio: any;
  readonly height: any;
  readonly width: any;
  readonly sizes: string;
  readonly src: string;
  readonly srcSet: string;
  readonly alt: string | null;
  readonly title: string | null;
  readonly base64: string | null;
}

export interface AllPaginatedBlogPosts_allBlogPosts_previewImageLg {
  readonly __typename: "FileField";
  readonly responsiveImage: AllPaginatedBlogPosts_allBlogPosts_previewImageLg_responsiveImage | null;
}

export interface AllPaginatedBlogPosts_allBlogPosts_previewImageSm_responsiveImage {
  readonly __typename: "ResponsiveImage";
  readonly aspectRatio: any;
  readonly height: any;
  readonly width: any;
  readonly sizes: string;
  readonly src: string;
  readonly srcSet: string;
  readonly alt: string | null;
  readonly title: string | null;
  readonly base64: string | null;
}

export interface AllPaginatedBlogPosts_allBlogPosts_previewImageSm {
  readonly __typename: "FileField";
  readonly responsiveImage: AllPaginatedBlogPosts_allBlogPosts_previewImageSm_responsiveImage | null;
}

export interface AllPaginatedBlogPosts_allBlogPosts_previewImageCol_responsiveImage {
  readonly __typename: "ResponsiveImage";
  readonly aspectRatio: any;
  readonly height: any;
  readonly width: any;
  readonly sizes: string;
  readonly src: string;
  readonly srcSet: string;
  readonly alt: string | null;
  readonly title: string | null;
  readonly base64: string | null;
}

export interface AllPaginatedBlogPosts_allBlogPosts_previewImageCol {
  readonly __typename: "FileField";
  readonly responsiveImage: AllPaginatedBlogPosts_allBlogPosts_previewImageCol_responsiveImage | null;
}

export interface AllPaginatedBlogPosts_allBlogPosts {
  readonly __typename: "BlogPostRecord";
  readonly id: any;
  readonly slug: string | null;
  readonly title: string | null;
  readonly description: string | null;
  readonly categories: ReadonlyArray<AllPaginatedBlogPosts_allBlogPosts_categories>;
  readonly previewImage: AllPaginatedBlogPosts_allBlogPosts_previewImage | null;
  readonly previewImageLg: AllPaginatedBlogPosts_allBlogPosts_previewImageLg | null;
  readonly previewImageSm: AllPaginatedBlogPosts_allBlogPosts_previewImageSm | null;
  readonly previewImageCol: AllPaginatedBlogPosts_allBlogPosts_previewImageCol | null;
}

export interface AllPaginatedBlogPosts {
  /**
   * Returns a collection of records
   */
  readonly allBlogPosts: ReadonlyArray<AllPaginatedBlogPosts_allBlogPosts>;
}

export interface AllPaginatedBlogPostsVariables {
  readonly first?: any | null;
  readonly skip?: any | null;
}
