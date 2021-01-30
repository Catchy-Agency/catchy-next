/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PageBySlug
// ====================================================

export interface PageBySlug_page_content_HeroRecord_imageSet_responsiveImage {
  readonly __typename: "ResponsiveImage";
  readonly alt: string | null;
  readonly src: string;
  readonly srcSet: string;
  readonly title: string | null;
}

export interface PageBySlug_page_content_HeroRecord_imageSet {
  readonly __typename: "FileField";
  readonly responsiveImage: PageBySlug_page_content_HeroRecord_imageSet_responsiveImage | null;
}

export interface PageBySlug_page_content_HeroRecord_textColor {
  readonly __typename: "ColorField";
  readonly hex: string | null;
}

export interface PageBySlug_page_content_HeroRecord_backgroundColor {
  readonly __typename: "ColorField";
  readonly hex: string | null;
}

export interface PageBySlug_page_content_HeroRecord {
  readonly __typename: "HeroRecord";
  readonly headline: string | null;
  readonly text: string | null;
  readonly imageSet: ReadonlyArray<PageBySlug_page_content_HeroRecord_imageSet>;
  readonly textColor: PageBySlug_page_content_HeroRecord_textColor | null;
  readonly backgroundColor: PageBySlug_page_content_HeroRecord_backgroundColor | null;
}

export interface PageBySlug_page_content_ImageSetRecord_imageSet_responsiveImage {
  readonly __typename: "ResponsiveImage";
  readonly alt: string | null;
  readonly src: string;
  readonly srcSet: string;
  readonly title: string | null;
}

export interface PageBySlug_page_content_ImageSetRecord_imageSet {
  readonly __typename: "FileField";
  readonly responsiveImage: PageBySlug_page_content_ImageSetRecord_imageSet_responsiveImage | null;
}

export interface PageBySlug_page_content_ImageSetRecord {
  readonly __typename: "ImageSetRecord";
  readonly imageSet: ReadonlyArray<PageBySlug_page_content_ImageSetRecord_imageSet>;
}

export interface PageBySlug_page_content_TextRecord {
  readonly __typename: "TextRecord";
  readonly text: string | null;
}

export interface PageBySlug_page_content_VideoRecord_video {
  readonly __typename: "VideoField";
  readonly title: string | null;
  readonly url: string | null;
}

export interface PageBySlug_page_content_VideoRecord {
  readonly __typename: "VideoRecord";
  readonly video: PageBySlug_page_content_VideoRecord_video | null;
}

export type PageBySlug_page_content = PageBySlug_page_content_HeroRecord | PageBySlug_page_content_ImageSetRecord | PageBySlug_page_content_TextRecord | PageBySlug_page_content_VideoRecord;

export interface PageBySlug_page__seoMetaTags {
  readonly __typename: "Tag";
  readonly attributes: any | null;
  readonly content: string | null;
  readonly tag: string;
}

export interface PageBySlug_page {
  readonly __typename: "PageRecord";
  readonly title: string | null;
  readonly content: ReadonlyArray<(PageBySlug_page_content | null)> | null;
  readonly slug: string | null;
  /**
   * SEO meta tags
   */
  readonly _seoMetaTags: ReadonlyArray<PageBySlug_page__seoMetaTags>;
}

export interface PageBySlug_site_faviconMetaTags {
  readonly __typename: "Tag";
  readonly attributes: any | null;
  readonly content: string | null;
  readonly tag: string;
}

export interface PageBySlug_site {
  readonly __typename: "Site";
  readonly faviconMetaTags: ReadonlyArray<PageBySlug_site_faviconMetaTags>;
}

export interface PageBySlug {
  /**
   * Returns a specific record
   */
  readonly page: PageBySlug_page | null;
  /**
   * Returns the single instance record
   */
  readonly site: PageBySlug_site;
}

export interface PageBySlugVariables {
  readonly slug?: string | null;
}