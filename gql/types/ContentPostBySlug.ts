/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ContentPostBySlug
// ====================================================

export interface ContentPostBySlug_contentPost_blocks_ButtonExternalRecord {
  readonly __typename: "ButtonExternalRecord";
  readonly id: any;
  readonly label: string | null;
  readonly url: string | null;
  readonly openInNewTab: any | null;
}

export interface ContentPostBySlug_contentPost_blocks_ButtonInternalRecord_link_ContentPageRecord {
  readonly __typename: "ContentPageRecord";
  readonly slug: string | null;
}

export interface ContentPostBySlug_contentPost_blocks_ButtonInternalRecord_link_ContentPostRecord {
  readonly __typename: "ContentPostRecord";
  readonly slug: string | null;
}

export interface ContentPostBySlug_contentPost_blocks_ButtonInternalRecord_link_PrimaryPageRecord {
  readonly __typename: "PrimaryPageRecord";
  readonly slug: string | null;
}

export type ContentPostBySlug_contentPost_blocks_ButtonInternalRecord_link = ContentPostBySlug_contentPost_blocks_ButtonInternalRecord_link_ContentPageRecord | ContentPostBySlug_contentPost_blocks_ButtonInternalRecord_link_ContentPostRecord | ContentPostBySlug_contentPost_blocks_ButtonInternalRecord_link_PrimaryPageRecord;

export interface ContentPostBySlug_contentPost_blocks_ButtonInternalRecord {
  readonly __typename: "ButtonInternalRecord";
  readonly id: any;
  readonly label: string | null;
  readonly link: ContentPostBySlug_contentPost_blocks_ButtonInternalRecord_link | null;
}

export interface ContentPostBySlug_contentPost_blocks_ColumnRowRecord_columns_image_responsiveImage {
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

export interface ContentPostBySlug_contentPost_blocks_ColumnRowRecord_columns_image {
  readonly __typename: "FileField";
  readonly responsiveImage: ContentPostBySlug_contentPost_blocks_ColumnRowRecord_columns_image_responsiveImage | null;
}

export interface ContentPostBySlug_contentPost_blocks_ColumnRowRecord_columns_blocks_ImageSetRecord {
  readonly __typename: "ImageSetRecord" | "TitleRecord";
}

export interface ContentPostBySlug_contentPost_blocks_ColumnRowRecord_columns_blocks_ButtonExternalRecord {
  readonly __typename: "ButtonExternalRecord";
  readonly id: any;
  readonly label: string | null;
  readonly url: string | null;
  readonly openInNewTab: any | null;
}

export interface ContentPostBySlug_contentPost_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link_ContentPageRecord {
  readonly __typename: "ContentPageRecord";
  readonly slug: string | null;
}

export interface ContentPostBySlug_contentPost_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link_ContentPostRecord {
  readonly __typename: "ContentPostRecord";
  readonly slug: string | null;
}

export interface ContentPostBySlug_contentPost_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link_PrimaryPageRecord {
  readonly __typename: "PrimaryPageRecord";
  readonly slug: string | null;
}

export type ContentPostBySlug_contentPost_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link = ContentPostBySlug_contentPost_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link_ContentPageRecord | ContentPostBySlug_contentPost_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link_ContentPostRecord | ContentPostBySlug_contentPost_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link_PrimaryPageRecord;

export interface ContentPostBySlug_contentPost_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord {
  readonly __typename: "ButtonInternalRecord";
  readonly id: any;
  readonly label: string | null;
  readonly link: ContentPostBySlug_contentPost_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link | null;
}

export interface ContentPostBySlug_contentPost_blocks_ColumnRowRecord_columns_blocks_RichTextRecord {
  readonly __typename: "RichTextRecord";
  readonly id: any;
  readonly richText: string | null;
}

export interface ContentPostBySlug_contentPost_blocks_ColumnRowRecord_columns_blocks_VideoRecord_video {
  readonly __typename: "VideoField";
  readonly height: any | null;
  readonly provider: string | null;
  readonly providerUid: string | null;
  readonly thumbnailUrl: string | null;
  readonly title: string | null;
  readonly url: string | null;
  readonly width: any | null;
}

export interface ContentPostBySlug_contentPost_blocks_ColumnRowRecord_columns_blocks_VideoRecord {
  readonly __typename: "VideoRecord";
  readonly id: any;
  readonly video: ContentPostBySlug_contentPost_blocks_ColumnRowRecord_columns_blocks_VideoRecord_video | null;
}

export type ContentPostBySlug_contentPost_blocks_ColumnRowRecord_columns_blocks = ContentPostBySlug_contentPost_blocks_ColumnRowRecord_columns_blocks_ImageSetRecord | ContentPostBySlug_contentPost_blocks_ColumnRowRecord_columns_blocks_ButtonExternalRecord | ContentPostBySlug_contentPost_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord | ContentPostBySlug_contentPost_blocks_ColumnRowRecord_columns_blocks_RichTextRecord | ContentPostBySlug_contentPost_blocks_ColumnRowRecord_columns_blocks_VideoRecord;

export interface ContentPostBySlug_contentPost_blocks_ColumnRowRecord_columns {
  readonly __typename: "ColumnRecord";
  readonly id: any;
  readonly title: string | null;
  readonly image: ContentPostBySlug_contentPost_blocks_ColumnRowRecord_columns_image | null;
  readonly text: string | null;
  readonly blocks: ReadonlyArray<(ContentPostBySlug_contentPost_blocks_ColumnRowRecord_columns_blocks | null)> | null;
  readonly textAlign: string | null;
  readonly width: string | null;
}

export interface ContentPostBySlug_contentPost_blocks_ColumnRowRecord {
  readonly __typename: "ColumnRowRecord";
  readonly id: any;
  readonly columns: ReadonlyArray<ContentPostBySlug_contentPost_blocks_ColumnRowRecord_columns>;
  readonly verticallyCenterAcrossColumns: any | null;
}

export interface ContentPostBySlug_contentPost_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImage_responsiveImage {
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

export interface ContentPostBySlug_contentPost_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImage {
  readonly __typename: "FileField";
  readonly responsiveImage: ContentPostBySlug_contentPost_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImage_responsiveImage | null;
}

export interface ContentPostBySlug_contentPost_blocks_ContentLinkSetRecord_links_PrimaryPageRecord {
  readonly __typename: "PrimaryPageRecord";
  readonly id: any;
  readonly slug: string | null;
  readonly title: string | null;
  readonly description: string | null;
  readonly previewImage: ContentPostBySlug_contentPost_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImage | null;
}

export interface ContentPostBySlug_contentPost_blocks_ContentLinkSetRecord_links_ContentPostRecord_previewImage_responsiveImage {
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

export interface ContentPostBySlug_contentPost_blocks_ContentLinkSetRecord_links_ContentPostRecord_previewImage {
  readonly __typename: "FileField";
  readonly responsiveImage: ContentPostBySlug_contentPost_blocks_ContentLinkSetRecord_links_ContentPostRecord_previewImage_responsiveImage | null;
}

export interface ContentPostBySlug_contentPost_blocks_ContentLinkSetRecord_links_ContentPostRecord {
  readonly __typename: "ContentPostRecord";
  readonly id: any;
  readonly slug: string | null;
  readonly title: string | null;
  readonly description: string | null;
  readonly previewImage: ContentPostBySlug_contentPost_blocks_ContentLinkSetRecord_links_ContentPostRecord_previewImage | null;
}

export interface ContentPostBySlug_contentPost_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImage_responsiveImage {
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

export interface ContentPostBySlug_contentPost_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImage {
  readonly __typename: "FileField";
  readonly responsiveImage: ContentPostBySlug_contentPost_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImage_responsiveImage | null;
}

export interface ContentPostBySlug_contentPost_blocks_ContentLinkSetRecord_links_ContentPageRecord {
  readonly __typename: "ContentPageRecord";
  readonly id: any;
  readonly slug: string | null;
  readonly title: string | null;
  readonly description: string | null;
  readonly previewImage: ContentPostBySlug_contentPost_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImage | null;
}

export type ContentPostBySlug_contentPost_blocks_ContentLinkSetRecord_links = ContentPostBySlug_contentPost_blocks_ContentLinkSetRecord_links_PrimaryPageRecord | ContentPostBySlug_contentPost_blocks_ContentLinkSetRecord_links_ContentPostRecord | ContentPostBySlug_contentPost_blocks_ContentLinkSetRecord_links_ContentPageRecord;

export interface ContentPostBySlug_contentPost_blocks_ContentLinkSetRecord {
  readonly __typename: "ContentLinkSetRecord";
  readonly id: any;
  readonly displaySize: string | null;
  readonly callToActionLabel: string | null;
  readonly alternatingAlignments: any | null;
  readonly links: ReadonlyArray<ContentPostBySlug_contentPost_blocks_ContentLinkSetRecord_links>;
}

export interface ContentPostBySlug_contentPost_blocks_ImageSetRecord_imageSet_responsiveImage {
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

export interface ContentPostBySlug_contentPost_blocks_ImageSetRecord_imageSet {
  readonly __typename: "FileField";
  readonly id: any;
  readonly responsiveImage: ContentPostBySlug_contentPost_blocks_ImageSetRecord_imageSet_responsiveImage | null;
}

export interface ContentPostBySlug_contentPost_blocks_ImageSetRecord {
  readonly __typename: "ImageSetRecord";
  readonly id: any;
  readonly imageSet: ReadonlyArray<ContentPostBySlug_contentPost_blocks_ImageSetRecord_imageSet>;
  readonly verticallyCenterAcrossImages: any | null;
}

export interface ContentPostBySlug_contentPost_blocks_RichTextRecord {
  readonly __typename: "RichTextRecord";
  readonly id: any;
  readonly richText: string | null;
}

export interface ContentPostBySlug_contentPost_blocks_TitleRecord {
  readonly __typename: "TitleRecord";
  readonly id: any;
  readonly title: string | null;
}

export interface ContentPostBySlug_contentPost_blocks_VideoRecord_video {
  readonly __typename: "VideoField";
  readonly height: any | null;
  readonly provider: string | null;
  readonly providerUid: string | null;
  readonly thumbnailUrl: string | null;
  readonly title: string | null;
  readonly url: string | null;
  readonly width: any | null;
}

export interface ContentPostBySlug_contentPost_blocks_VideoRecord {
  readonly __typename: "VideoRecord";
  readonly id: any;
  readonly video: ContentPostBySlug_contentPost_blocks_VideoRecord_video | null;
}

export type ContentPostBySlug_contentPost_blocks = ContentPostBySlug_contentPost_blocks_ButtonExternalRecord | ContentPostBySlug_contentPost_blocks_ButtonInternalRecord | ContentPostBySlug_contentPost_blocks_ColumnRowRecord | ContentPostBySlug_contentPost_blocks_ContentLinkSetRecord | ContentPostBySlug_contentPost_blocks_ImageSetRecord | ContentPostBySlug_contentPost_blocks_RichTextRecord | ContentPostBySlug_contentPost_blocks_TitleRecord | ContentPostBySlug_contentPost_blocks_VideoRecord;

export interface ContentPostBySlug_contentPost_categories {
  readonly __typename: "CategoryRecord";
  readonly id: any;
  readonly name: string | null;
  readonly slug: string | null;
}

export interface ContentPostBySlug_contentPost__seoMetaTags {
  readonly __typename: "Tag";
  readonly attributes: any | null;
  readonly content: string | null;
  readonly tag: string;
}

export interface ContentPostBySlug_contentPost {
  readonly __typename: "ContentPostRecord";
  readonly title: string | null;
  readonly date: any | null;
  readonly blocks: ReadonlyArray<(ContentPostBySlug_contentPost_blocks | null)> | null;
  readonly categories: ReadonlyArray<ContentPostBySlug_contentPost_categories>;
  readonly slug: string | null;
  /**
   * SEO meta tags
   */
  readonly _seoMetaTags: ReadonlyArray<ContentPostBySlug_contentPost__seoMetaTags>;
}

export interface ContentPostBySlug_site_faviconMetaTags {
  readonly __typename: "Tag";
  readonly attributes: any | null;
  readonly content: string | null;
  readonly tag: string;
}

export interface ContentPostBySlug_site {
  readonly __typename: "Site";
  readonly faviconMetaTags: ReadonlyArray<ContentPostBySlug_site_faviconMetaTags>;
}

export interface ContentPostBySlug_header_logo {
  readonly __typename: "FileField";
  readonly url: string;
  readonly title: string | null;
  readonly alt: string | null;
}

export interface ContentPostBySlug_header_links {
  readonly __typename: "PrimaryPageRecord";
  readonly id: any;
  readonly title: string | null;
  readonly slug: string | null;
}

export interface ContentPostBySlug_header {
  readonly __typename: "HeaderRecord";
  readonly logo: ContentPostBySlug_header_logo | null;
  readonly links: ReadonlyArray<ContentPostBySlug_header_links>;
  readonly contactLinkLabel: string | null;
}

export interface ContentPostBySlug_footer_socialLinks {
  readonly __typename: "SocialLinkRecord";
  readonly id: any;
  readonly fontAwesomeIcon: string | null;
  readonly url: string | null;
}

export interface ContentPostBySlug_footer {
  readonly __typename: "FooterRecord";
  readonly title: string | null;
  readonly nameLabel: string | null;
  readonly emailAddressLabel: string | null;
  readonly messageLabel: string | null;
  readonly contactText: string | null;
  readonly socialLinks: ReadonlyArray<(ContentPostBySlug_footer_socialLinks | null)> | null;
}

export interface ContentPostBySlug {
  /**
   * Returns a specific record
   */
  readonly contentPost: ContentPostBySlug_contentPost | null;
  /**
   * Returns the single instance record
   */
  readonly site: ContentPostBySlug_site;
  /**
   * Returns the single instance record
   */
  readonly header: ContentPostBySlug_header | null;
  /**
   * Returns the single instance record
   */
  readonly footer: ContentPostBySlug_footer | null;
}

export interface ContentPostBySlugVariables {
  readonly slug?: string | null;
}
