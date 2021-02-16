/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BlogPostBySlug
// ====================================================

export interface BlogPostBySlug_blogPost_blocks_ButtonExternalRecord {
  readonly __typename: "ButtonExternalRecord";
  readonly id: any;
  readonly label: string | null;
  readonly url: string | null;
  readonly openInNewTab: any | null;
}

export interface BlogPostBySlug_blogPost_blocks_ButtonInternalRecord_link_ContentPageRecord {
  readonly __typename: "ContentPageRecord";
  readonly slug: string | null;
}

export interface BlogPostBySlug_blogPost_blocks_ButtonInternalRecord_link_BlogPostRecord {
  readonly __typename: "BlogPostRecord";
  readonly slug: string | null;
}

export interface BlogPostBySlug_blogPost_blocks_ButtonInternalRecord_link_PrimaryPageRecord {
  readonly __typename: "PrimaryPageRecord";
  readonly slug: string | null;
}

export type BlogPostBySlug_blogPost_blocks_ButtonInternalRecord_link = BlogPostBySlug_blogPost_blocks_ButtonInternalRecord_link_ContentPageRecord | BlogPostBySlug_blogPost_blocks_ButtonInternalRecord_link_BlogPostRecord | BlogPostBySlug_blogPost_blocks_ButtonInternalRecord_link_PrimaryPageRecord;

export interface BlogPostBySlug_blogPost_blocks_ButtonInternalRecord {
  readonly __typename: "ButtonInternalRecord";
  readonly id: any;
  readonly label: string | null;
  readonly link: BlogPostBySlug_blogPost_blocks_ButtonInternalRecord_link | null;
}

export interface BlogPostBySlug_blogPost_blocks_ColumnRowRecord_columns_image_responsiveImage {
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

export interface BlogPostBySlug_blogPost_blocks_ColumnRowRecord_columns_image {
  readonly __typename: "FileField";
  readonly responsiveImage: BlogPostBySlug_blogPost_blocks_ColumnRowRecord_columns_image_responsiveImage | null;
}

export interface BlogPostBySlug_blogPost_blocks_ColumnRowRecord_columns_blocks_ImageSetRecord {
  readonly __typename: "ImageSetRecord" | "TitleRecord";
}

export interface BlogPostBySlug_blogPost_blocks_ColumnRowRecord_columns_blocks_ButtonExternalRecord {
  readonly __typename: "ButtonExternalRecord";
  readonly id: any;
  readonly label: string | null;
  readonly url: string | null;
  readonly openInNewTab: any | null;
}

export interface BlogPostBySlug_blogPost_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link_ContentPageRecord {
  readonly __typename: "ContentPageRecord";
  readonly slug: string | null;
}

export interface BlogPostBySlug_blogPost_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link_BlogPostRecord {
  readonly __typename: "BlogPostRecord";
  readonly slug: string | null;
}

export interface BlogPostBySlug_blogPost_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link_PrimaryPageRecord {
  readonly __typename: "PrimaryPageRecord";
  readonly slug: string | null;
}

export type BlogPostBySlug_blogPost_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link = BlogPostBySlug_blogPost_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link_ContentPageRecord | BlogPostBySlug_blogPost_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link_BlogPostRecord | BlogPostBySlug_blogPost_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link_PrimaryPageRecord;

export interface BlogPostBySlug_blogPost_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord {
  readonly __typename: "ButtonInternalRecord";
  readonly id: any;
  readonly label: string | null;
  readonly link: BlogPostBySlug_blogPost_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link | null;
}

export interface BlogPostBySlug_blogPost_blocks_ColumnRowRecord_columns_blocks_RichTextRecord {
  readonly __typename: "RichTextRecord";
  readonly id: any;
  readonly richText: string | null;
}

export interface BlogPostBySlug_blogPost_blocks_ColumnRowRecord_columns_blocks_VideoRecord_video {
  readonly __typename: "VideoField";
  readonly height: any | null;
  readonly provider: string | null;
  readonly providerUid: string | null;
  readonly thumbnailUrl: string | null;
  readonly title: string | null;
  readonly url: string | null;
  readonly width: any | null;
}

export interface BlogPostBySlug_blogPost_blocks_ColumnRowRecord_columns_blocks_VideoRecord {
  readonly __typename: "VideoRecord";
  readonly id: any;
  readonly video: BlogPostBySlug_blogPost_blocks_ColumnRowRecord_columns_blocks_VideoRecord_video | null;
}

export type BlogPostBySlug_blogPost_blocks_ColumnRowRecord_columns_blocks = BlogPostBySlug_blogPost_blocks_ColumnRowRecord_columns_blocks_ImageSetRecord | BlogPostBySlug_blogPost_blocks_ColumnRowRecord_columns_blocks_ButtonExternalRecord | BlogPostBySlug_blogPost_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord | BlogPostBySlug_blogPost_blocks_ColumnRowRecord_columns_blocks_RichTextRecord | BlogPostBySlug_blogPost_blocks_ColumnRowRecord_columns_blocks_VideoRecord;

export interface BlogPostBySlug_blogPost_blocks_ColumnRowRecord_columns {
  readonly __typename: "ColumnRecord";
  readonly id: any;
  readonly title: string | null;
  readonly image: BlogPostBySlug_blogPost_blocks_ColumnRowRecord_columns_image | null;
  readonly text: string | null;
  readonly blocks: ReadonlyArray<(BlogPostBySlug_blogPost_blocks_ColumnRowRecord_columns_blocks | null)> | null;
  readonly textAlign: string | null;
  readonly width: string | null;
}

export interface BlogPostBySlug_blogPost_blocks_ColumnRowRecord {
  readonly __typename: "ColumnRowRecord";
  readonly id: any;
  readonly columns: ReadonlyArray<BlogPostBySlug_blogPost_blocks_ColumnRowRecord_columns>;
  readonly verticallyCenterAcrossColumns: any | null;
}

export interface BlogPostBySlug_blogPost_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImage_responsiveImage {
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

export interface BlogPostBySlug_blogPost_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImage {
  readonly __typename: "FileField";
  readonly responsiveImage: BlogPostBySlug_blogPost_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImage_responsiveImage | null;
}

export interface BlogPostBySlug_blogPost_blocks_ContentLinkSetRecord_links_PrimaryPageRecord {
  readonly __typename: "PrimaryPageRecord";
  readonly id: any;
  readonly slug: string | null;
  readonly title: string | null;
  readonly description: string | null;
  readonly previewImage: BlogPostBySlug_blogPost_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImage | null;
}

export interface BlogPostBySlug_blogPost_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImage_responsiveImage {
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

export interface BlogPostBySlug_blogPost_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImage {
  readonly __typename: "FileField";
  readonly responsiveImage: BlogPostBySlug_blogPost_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImage_responsiveImage | null;
}

export interface BlogPostBySlug_blogPost_blocks_ContentLinkSetRecord_links_BlogPostRecord {
  readonly __typename: "BlogPostRecord";
  readonly id: any;
  readonly slug: string | null;
  readonly title: string | null;
  readonly description: string | null;
  readonly previewImage: BlogPostBySlug_blogPost_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImage | null;
}

export interface BlogPostBySlug_blogPost_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImage_responsiveImage {
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

export interface BlogPostBySlug_blogPost_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImage {
  readonly __typename: "FileField";
  readonly responsiveImage: BlogPostBySlug_blogPost_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImage_responsiveImage | null;
}

export interface BlogPostBySlug_blogPost_blocks_ContentLinkSetRecord_links_ContentPageRecord {
  readonly __typename: "ContentPageRecord";
  readonly id: any;
  readonly slug: string | null;
  readonly title: string | null;
  readonly description: string | null;
  readonly previewImage: BlogPostBySlug_blogPost_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImage | null;
}

export type BlogPostBySlug_blogPost_blocks_ContentLinkSetRecord_links = BlogPostBySlug_blogPost_blocks_ContentLinkSetRecord_links_PrimaryPageRecord | BlogPostBySlug_blogPost_blocks_ContentLinkSetRecord_links_BlogPostRecord | BlogPostBySlug_blogPost_blocks_ContentLinkSetRecord_links_ContentPageRecord;

export interface BlogPostBySlug_blogPost_blocks_ContentLinkSetRecord {
  readonly __typename: "ContentLinkSetRecord";
  readonly id: any;
  readonly displaySize: string | null;
  readonly callToActionLabel: string | null;
  readonly alternatingAlignments: any | null;
  readonly links: ReadonlyArray<BlogPostBySlug_blogPost_blocks_ContentLinkSetRecord_links>;
}

export interface BlogPostBySlug_blogPost_blocks_ImageSetRecord_imageSet_responsiveImage {
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

export interface BlogPostBySlug_blogPost_blocks_ImageSetRecord_imageSet {
  readonly __typename: "FileField";
  readonly id: any;
  readonly responsiveImage: BlogPostBySlug_blogPost_blocks_ImageSetRecord_imageSet_responsiveImage | null;
}

export interface BlogPostBySlug_blogPost_blocks_ImageSetRecord {
  readonly __typename: "ImageSetRecord";
  readonly id: any;
  readonly imageSet: ReadonlyArray<BlogPostBySlug_blogPost_blocks_ImageSetRecord_imageSet>;
  readonly verticallyCenterAcrossImages: any | null;
}

export interface BlogPostBySlug_blogPost_blocks_RichTextRecord {
  readonly __typename: "RichTextRecord";
  readonly id: any;
  readonly richText: string | null;
}

export interface BlogPostBySlug_blogPost_blocks_TitleRecord {
  readonly __typename: "TitleRecord";
  readonly id: any;
  readonly title: string | null;
}

export interface BlogPostBySlug_blogPost_blocks_VideoRecord_video {
  readonly __typename: "VideoField";
  readonly height: any | null;
  readonly provider: string | null;
  readonly providerUid: string | null;
  readonly thumbnailUrl: string | null;
  readonly title: string | null;
  readonly url: string | null;
  readonly width: any | null;
}

export interface BlogPostBySlug_blogPost_blocks_VideoRecord {
  readonly __typename: "VideoRecord";
  readonly id: any;
  readonly video: BlogPostBySlug_blogPost_blocks_VideoRecord_video | null;
}

export type BlogPostBySlug_blogPost_blocks = BlogPostBySlug_blogPost_blocks_ButtonExternalRecord | BlogPostBySlug_blogPost_blocks_ButtonInternalRecord | BlogPostBySlug_blogPost_blocks_ColumnRowRecord | BlogPostBySlug_blogPost_blocks_ContentLinkSetRecord | BlogPostBySlug_blogPost_blocks_ImageSetRecord | BlogPostBySlug_blogPost_blocks_RichTextRecord | BlogPostBySlug_blogPost_blocks_TitleRecord | BlogPostBySlug_blogPost_blocks_VideoRecord;

export interface BlogPostBySlug_blogPost_categories {
  readonly __typename: "CategoryRecord";
  readonly id: any;
  readonly name: string | null;
  readonly slug: string | null;
}

export interface BlogPostBySlug_blogPost__seoMetaTags {
  readonly __typename: "Tag";
  readonly attributes: any | null;
  readonly content: string | null;
  readonly tag: string;
}

export interface BlogPostBySlug_blogPost {
  readonly __typename: "BlogPostRecord";
  readonly title: string | null;
  readonly date: any | null;
  readonly blocks: ReadonlyArray<(BlogPostBySlug_blogPost_blocks | null)> | null;
  readonly categories: ReadonlyArray<BlogPostBySlug_blogPost_categories>;
  readonly slug: string | null;
  /**
   * SEO meta tags
   */
  readonly _seoMetaTags: ReadonlyArray<BlogPostBySlug_blogPost__seoMetaTags>;
}

export interface BlogPostBySlug_site_faviconMetaTags {
  readonly __typename: "Tag";
  readonly attributes: any | null;
  readonly content: string | null;
  readonly tag: string;
}

export interface BlogPostBySlug_site {
  readonly __typename: "Site";
  readonly faviconMetaTags: ReadonlyArray<BlogPostBySlug_site_faviconMetaTags>;
}

export interface BlogPostBySlug_header_logo {
  readonly __typename: "FileField";
  readonly url: string;
  readonly title: string | null;
  readonly alt: string | null;
}

export interface BlogPostBySlug_header_links {
  readonly __typename: "PrimaryPageRecord";
  readonly id: any;
  readonly title: string | null;
  readonly slug: string | null;
}

export interface BlogPostBySlug_header {
  readonly __typename: "HeaderRecord";
  readonly logo: BlogPostBySlug_header_logo | null;
  readonly links: ReadonlyArray<BlogPostBySlug_header_links>;
  readonly contactLinkLabel: string | null;
}

export interface BlogPostBySlug_footer_socialLinks {
  readonly __typename: "SocialLinkRecord";
  readonly id: any;
  readonly fontAwesomeIcon: string | null;
  readonly url: string | null;
}

export interface BlogPostBySlug_footer {
  readonly __typename: "FooterRecord";
  readonly title: string | null;
  readonly nameLabel: string | null;
  readonly emailAddressLabel: string | null;
  readonly messageLabel: string | null;
  readonly contactText: string | null;
  readonly socialLinks: ReadonlyArray<(BlogPostBySlug_footer_socialLinks | null)> | null;
}

export interface BlogPostBySlug {
  /**
   * Returns a specific record
   */
  readonly blogPost: BlogPostBySlug_blogPost | null;
  /**
   * Returns the single instance record
   */
  readonly site: BlogPostBySlug_site;
  /**
   * Returns the single instance record
   */
  readonly header: BlogPostBySlug_header | null;
  /**
   * Returns the single instance record
   */
  readonly footer: BlogPostBySlug_footer | null;
}

export interface BlogPostBySlugVariables {
  readonly slug?: string | null;
}
