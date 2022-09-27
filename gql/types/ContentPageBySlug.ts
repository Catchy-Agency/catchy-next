/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ContentPageBySlug
// ====================================================

export interface ContentPageBySlug_contentPage_parent_parent_parent_parent_parent {
  readonly __typename: "ContentPageRecord";
  readonly id: any;
  readonly title: string | null;
  readonly slug: string | null;
}

export interface ContentPageBySlug_contentPage_parent_parent_parent_parent {
  readonly __typename: "ContentPageRecord";
  readonly id: any;
  readonly title: string | null;
  readonly slug: string | null;
  readonly parent: ContentPageBySlug_contentPage_parent_parent_parent_parent_parent | null;
}

export interface ContentPageBySlug_contentPage_parent_parent_parent {
  readonly __typename: "ContentPageRecord";
  readonly id: any;
  readonly title: string | null;
  readonly slug: string | null;
  readonly parent: ContentPageBySlug_contentPage_parent_parent_parent_parent | null;
}

export interface ContentPageBySlug_contentPage_parent_parent {
  readonly __typename: "ContentPageRecord";
  readonly id: any;
  readonly title: string | null;
  readonly slug: string | null;
  readonly parent: ContentPageBySlug_contentPage_parent_parent_parent | null;
}

export interface ContentPageBySlug_contentPage_parent {
  readonly __typename: "ContentPageRecord";
  readonly id: any;
  readonly title: string | null;
  readonly slug: string | null;
  readonly parent: ContentPageBySlug_contentPage_parent_parent | null;
}

export interface ContentPageBySlug_contentPage_children_previewImage_responsiveImage {
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

export interface ContentPageBySlug_contentPage_children_previewImage {
  readonly __typename: "FileField";
  readonly responsiveImage: ContentPageBySlug_contentPage_children_previewImage_responsiveImage | null;
}

export interface ContentPageBySlug_contentPage_children {
  readonly __typename: "ContentPageRecord";
  readonly id: any;
  readonly title: string | null;
  readonly slug: string | null;
  readonly description: string | null;
  readonly previewImage: ContentPageBySlug_contentPage_children_previewImage | null;
}

export interface ContentPageBySlug_contentPage_blocks_ButtonExternalRecord {
  readonly __typename: "ButtonExternalRecord";
  readonly id: any;
  readonly label: string | null;
  readonly url: string | null;
  readonly align: string | null;
  readonly openInNewTab: any | null;
}

export interface ContentPageBySlug_contentPage_blocks_ButtonInternalRecord_link_ContentPageRecord {
  readonly __typename: "ContentPageRecord";
  readonly slug: string | null;
}

export interface ContentPageBySlug_contentPage_blocks_ButtonInternalRecord_link_BlogPostRecord {
  readonly __typename: "BlogPostRecord";
  readonly slug: string | null;
}

export interface ContentPageBySlug_contentPage_blocks_ButtonInternalRecord_link_PrimaryPageRecord {
  readonly __typename: "PrimaryPageRecord";
  readonly slug: string | null;
}

export interface ContentPageBySlug_contentPage_blocks_ButtonInternalRecord_link_DownloadPageRecord {
  readonly __typename: "DownloadPageRecord";
  readonly slug: string | null;
}

export type ContentPageBySlug_contentPage_blocks_ButtonInternalRecord_link = ContentPageBySlug_contentPage_blocks_ButtonInternalRecord_link_ContentPageRecord | ContentPageBySlug_contentPage_blocks_ButtonInternalRecord_link_BlogPostRecord | ContentPageBySlug_contentPage_blocks_ButtonInternalRecord_link_PrimaryPageRecord | ContentPageBySlug_contentPage_blocks_ButtonInternalRecord_link_DownloadPageRecord;

export interface ContentPageBySlug_contentPage_blocks_ButtonInternalRecord {
  readonly __typename: "ButtonInternalRecord";
  readonly id: any;
  readonly label: string | null;
  readonly link: ContentPageBySlug_contentPage_blocks_ButtonInternalRecord_link | null;
  readonly align: string | null;
  readonly openInNewTab: any | null;
}

export interface ContentPageBySlug_contentPage_blocks_ColumnRowRecord_columns_image_responsiveImage {
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

export interface ContentPageBySlug_contentPage_blocks_ColumnRowRecord_columns_image {
  readonly __typename: "FileField";
  readonly responsiveImage: ContentPageBySlug_contentPage_blocks_ColumnRowRecord_columns_image_responsiveImage | null;
}

export interface ContentPageBySlug_contentPage_blocks_ColumnRowRecord_columns_blocks_AgencyModelRecord {
  readonly __typename: "AgencyModelRecord" | "ImageSetRecord";
}

export interface ContentPageBySlug_contentPage_blocks_ColumnRowRecord_columns_blocks_ButtonExternalRecord {
  readonly __typename: "ButtonExternalRecord";
  readonly id: any;
  readonly label: string | null;
  readonly url: string | null;
  readonly align: string | null;
  readonly openInNewTab: any | null;
}

export interface ContentPageBySlug_contentPage_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link_ContentPageRecord {
  readonly __typename: "ContentPageRecord";
  readonly slug: string | null;
}

export interface ContentPageBySlug_contentPage_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link_BlogPostRecord {
  readonly __typename: "BlogPostRecord";
  readonly slug: string | null;
}

export interface ContentPageBySlug_contentPage_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link_PrimaryPageRecord {
  readonly __typename: "PrimaryPageRecord";
  readonly slug: string | null;
}

export interface ContentPageBySlug_contentPage_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link_DownloadPageRecord {
  readonly __typename: "DownloadPageRecord";
  readonly slug: string | null;
}

export type ContentPageBySlug_contentPage_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link = ContentPageBySlug_contentPage_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link_ContentPageRecord | ContentPageBySlug_contentPage_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link_BlogPostRecord | ContentPageBySlug_contentPage_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link_PrimaryPageRecord | ContentPageBySlug_contentPage_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link_DownloadPageRecord;

export interface ContentPageBySlug_contentPage_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord {
  readonly __typename: "ButtonInternalRecord";
  readonly id: any;
  readonly label: string | null;
  readonly link: ContentPageBySlug_contentPage_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link | null;
  readonly align: string | null;
  readonly openInNewTab: any | null;
}

export interface ContentPageBySlug_contentPage_blocks_ColumnRowRecord_columns_blocks_FormBlockRecord_form_formFields {
  readonly __typename: "FormFieldRecord";
  readonly id: any;
  readonly label: string | null;
  readonly fieldName: string | null;
  readonly fieldType: string | null;
  readonly required: any | null;
  readonly invisible: any | null;
  readonly grouped: any | null;
}

export interface ContentPageBySlug_contentPage_blocks_ColumnRowRecord_columns_blocks_FormBlockRecord_form {
  readonly __typename: "FormRecord";
  readonly title: string | null;
  readonly name: string | null;
  readonly action: string | null;
  readonly method: string | null;
  readonly formFields: ReadonlyArray<ContentPageBySlug_contentPage_blocks_ColumnRowRecord_columns_blocks_FormBlockRecord_form_formFields>;
}

export interface ContentPageBySlug_contentPage_blocks_ColumnRowRecord_columns_blocks_FormBlockRecord {
  readonly __typename: "FormBlockRecord";
  readonly id: any;
  readonly form: ContentPageBySlug_contentPage_blocks_ColumnRowRecord_columns_blocks_FormBlockRecord_form | null;
}

export interface ContentPageBySlug_contentPage_blocks_ColumnRowRecord_columns_blocks_RichTextRecord {
  readonly __typename: "RichTextRecord";
  readonly id: any;
  readonly richText: string | null;
}

export interface ContentPageBySlug_contentPage_blocks_ColumnRowRecord_columns_blocks_VideoRecord_video {
  readonly __typename: "VideoField";
  readonly height: any;
  readonly provider: string;
  readonly providerUid: string;
  readonly thumbnailUrl: string;
  readonly title: string;
  readonly url: string;
  readonly width: any;
}

export interface ContentPageBySlug_contentPage_blocks_ColumnRowRecord_columns_blocks_VideoRecord {
  readonly __typename: "VideoRecord";
  readonly id: any;
  readonly video: ContentPageBySlug_contentPage_blocks_ColumnRowRecord_columns_blocks_VideoRecord_video | null;
}

export interface ContentPageBySlug_contentPage_blocks_ColumnRowRecord_columns_blocks_VideoInternalRecord_thumbnail_responsiveImage {
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

export interface ContentPageBySlug_contentPage_blocks_ColumnRowRecord_columns_blocks_VideoInternalRecord_thumbnail {
  readonly __typename: "FileField";
  readonly id: any;
  readonly title: string | null;
  readonly responsiveImage: ContentPageBySlug_contentPage_blocks_ColumnRowRecord_columns_blocks_VideoInternalRecord_thumbnail_responsiveImage | null;
}

export interface ContentPageBySlug_contentPage_blocks_ColumnRowRecord_columns_blocks_VideoInternalRecord_video_video {
  readonly __typename: "UploadVideoField";
  readonly mp4Url: string | null;
  readonly streamingUrl: string;
  readonly thumbnailUrl: string;
}

export interface ContentPageBySlug_contentPage_blocks_ColumnRowRecord_columns_blocks_VideoInternalRecord_video {
  readonly __typename: "FileField";
  readonly height: any | null;
  readonly mimeType: string;
  readonly title: string | null;
  readonly video: ContentPageBySlug_contentPage_blocks_ColumnRowRecord_columns_blocks_VideoInternalRecord_video_video | null;
  readonly width: any | null;
}

export interface ContentPageBySlug_contentPage_blocks_ColumnRowRecord_columns_blocks_VideoInternalRecord {
  readonly __typename: "VideoInternalRecord";
  readonly id: any;
  readonly thumbnail: ContentPageBySlug_contentPage_blocks_ColumnRowRecord_columns_blocks_VideoInternalRecord_thumbnail | null;
  readonly video: ContentPageBySlug_contentPage_blocks_ColumnRowRecord_columns_blocks_VideoInternalRecord_video | null;
}

export type ContentPageBySlug_contentPage_blocks_ColumnRowRecord_columns_blocks = ContentPageBySlug_contentPage_blocks_ColumnRowRecord_columns_blocks_AgencyModelRecord | ContentPageBySlug_contentPage_blocks_ColumnRowRecord_columns_blocks_ButtonExternalRecord | ContentPageBySlug_contentPage_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord | ContentPageBySlug_contentPage_blocks_ColumnRowRecord_columns_blocks_FormBlockRecord | ContentPageBySlug_contentPage_blocks_ColumnRowRecord_columns_blocks_RichTextRecord | ContentPageBySlug_contentPage_blocks_ColumnRowRecord_columns_blocks_VideoRecord | ContentPageBySlug_contentPage_blocks_ColumnRowRecord_columns_blocks_VideoInternalRecord;

export interface ContentPageBySlug_contentPage_blocks_ColumnRowRecord_columns {
  readonly __typename: "ColumnRecord";
  readonly id: any;
  readonly title: string | null;
  readonly image: ContentPageBySlug_contentPage_blocks_ColumnRowRecord_columns_image | null;
  readonly text: string | null;
  readonly blocks: ReadonlyArray<ContentPageBySlug_contentPage_blocks_ColumnRowRecord_columns_blocks>;
  readonly textAlign: string | null;
  readonly width: string | null;
}

export interface ContentPageBySlug_contentPage_blocks_ColumnRowRecord {
  readonly __typename: "ColumnRowRecord";
  readonly id: any;
  readonly columns: ReadonlyArray<ContentPageBySlug_contentPage_blocks_ColumnRowRecord_columns>;
  readonly verticallyCenterAcrossColumns: any | null;
}

export interface ContentPageBySlug_contentPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImage_responsiveImage {
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

export interface ContentPageBySlug_contentPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImage {
  readonly __typename: "FileField";
  readonly responsiveImage: ContentPageBySlug_contentPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImage_responsiveImage | null;
}

export interface ContentPageBySlug_contentPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord {
  readonly __typename: "PrimaryPageRecord";
  readonly id: any;
  readonly slug: string | null;
  readonly title: string | null;
  readonly description: string | null;
  readonly previewImage: ContentPageBySlug_contentPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImage | null;
}

export interface ContentPageBySlug_contentPage_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImage_responsiveImage {
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

export interface ContentPageBySlug_contentPage_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImage {
  readonly __typename: "FileField";
  readonly responsiveImage: ContentPageBySlug_contentPage_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImage_responsiveImage | null;
}

export interface ContentPageBySlug_contentPage_blocks_ContentLinkSetRecord_links_BlogPostRecord {
  readonly __typename: "BlogPostRecord";
  readonly id: any;
  readonly slug: string | null;
  readonly title: string | null;
  readonly description: string | null;
  readonly previewImage: ContentPageBySlug_contentPage_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImage | null;
}

export interface ContentPageBySlug_contentPage_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImage_responsiveImage {
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

export interface ContentPageBySlug_contentPage_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImage {
  readonly __typename: "FileField";
  readonly responsiveImage: ContentPageBySlug_contentPage_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImage_responsiveImage | null;
}

export interface ContentPageBySlug_contentPage_blocks_ContentLinkSetRecord_links_ContentPageRecord {
  readonly __typename: "ContentPageRecord";
  readonly id: any;
  readonly slug: string | null;
  readonly title: string | null;
  readonly description: string | null;
  readonly previewImage: ContentPageBySlug_contentPage_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImage | null;
}

export interface ContentPageBySlug_contentPage_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImage_responsiveImage {
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

export interface ContentPageBySlug_contentPage_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImage {
  readonly __typename: "FileField";
  readonly responsiveImage: ContentPageBySlug_contentPage_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImage_responsiveImage | null;
}

export interface ContentPageBySlug_contentPage_blocks_ContentLinkSetRecord_links_DownloadPageRecord {
  readonly __typename: "DownloadPageRecord";
  readonly id: any;
  readonly slug: string | null;
  readonly title: string | null;
  readonly description: string | null;
  readonly previewImage: ContentPageBySlug_contentPage_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImage | null;
}

export type ContentPageBySlug_contentPage_blocks_ContentLinkSetRecord_links = ContentPageBySlug_contentPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord | ContentPageBySlug_contentPage_blocks_ContentLinkSetRecord_links_BlogPostRecord | ContentPageBySlug_contentPage_blocks_ContentLinkSetRecord_links_ContentPageRecord | ContentPageBySlug_contentPage_blocks_ContentLinkSetRecord_links_DownloadPageRecord;

export interface ContentPageBySlug_contentPage_blocks_ContentLinkSetRecord {
  readonly __typename: "ContentLinkSetRecord";
  readonly id: any;
  readonly displaySize: string | null;
  readonly imageAlign: string | null;
  readonly isSlider: any | null;
  readonly heroBannerImageSize: string | null;
  readonly callToActionLabel: string | null;
  readonly links: ReadonlyArray<ContentPageBySlug_contentPage_blocks_ContentLinkSetRecord_links>;
}

export interface ContentPageBySlug_contentPage_blocks_FormBlockRecord_form_formFields {
  readonly __typename: "FormFieldRecord";
  readonly id: any;
  readonly label: string | null;
  readonly fieldName: string | null;
  readonly fieldType: string | null;
  readonly required: any | null;
  readonly invisible: any | null;
  readonly grouped: any | null;
}

export interface ContentPageBySlug_contentPage_blocks_FormBlockRecord_form {
  readonly __typename: "FormRecord";
  readonly title: string | null;
  readonly name: string | null;
  readonly action: string | null;
  readonly method: string | null;
  readonly formFields: ReadonlyArray<ContentPageBySlug_contentPage_blocks_FormBlockRecord_form_formFields>;
}

export interface ContentPageBySlug_contentPage_blocks_FormBlockRecord {
  readonly __typename: "FormBlockRecord";
  readonly id: any;
  readonly form: ContentPageBySlug_contentPage_blocks_FormBlockRecord_form | null;
}

export interface ContentPageBySlug_contentPage_blocks_ImageSetRecord_imageSet_responsiveImage {
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

export interface ContentPageBySlug_contentPage_blocks_ImageSetRecord_imageSet {
  readonly __typename: "FileField";
  readonly id: any;
  readonly responsiveImage: ContentPageBySlug_contentPage_blocks_ImageSetRecord_imageSet_responsiveImage | null;
}

export interface ContentPageBySlug_contentPage_blocks_ImageSetRecord {
  readonly __typename: "ImageSetRecord";
  readonly id: any;
  readonly imageSet: ReadonlyArray<ContentPageBySlug_contentPage_blocks_ImageSetRecord_imageSet>;
  readonly verticallyCenterAcrossImages: any | null;
}

export interface ContentPageBySlug_contentPage_blocks_RichTextRecord {
  readonly __typename: "RichTextRecord";
  readonly id: any;
  readonly richText: string | null;
}

export interface ContentPageBySlug_contentPage_blocks_VideoRecord_video {
  readonly __typename: "VideoField";
  readonly height: any;
  readonly provider: string;
  readonly providerUid: string;
  readonly thumbnailUrl: string;
  readonly title: string;
  readonly url: string;
  readonly width: any;
}

export interface ContentPageBySlug_contentPage_blocks_VideoRecord {
  readonly __typename: "VideoRecord";
  readonly id: any;
  readonly video: ContentPageBySlug_contentPage_blocks_VideoRecord_video | null;
}

export interface ContentPageBySlug_contentPage_blocks_VideoInternalRecord_thumbnail_responsiveImage {
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

export interface ContentPageBySlug_contentPage_blocks_VideoInternalRecord_thumbnail {
  readonly __typename: "FileField";
  readonly id: any;
  readonly title: string | null;
  readonly responsiveImage: ContentPageBySlug_contentPage_blocks_VideoInternalRecord_thumbnail_responsiveImage | null;
}

export interface ContentPageBySlug_contentPage_blocks_VideoInternalRecord_video_video {
  readonly __typename: "UploadVideoField";
  readonly mp4Url: string | null;
  readonly streamingUrl: string;
  readonly thumbnailUrl: string;
}

export interface ContentPageBySlug_contentPage_blocks_VideoInternalRecord_video {
  readonly __typename: "FileField";
  readonly height: any | null;
  readonly mimeType: string;
  readonly title: string | null;
  readonly video: ContentPageBySlug_contentPage_blocks_VideoInternalRecord_video_video | null;
  readonly width: any | null;
}

export interface ContentPageBySlug_contentPage_blocks_VideoInternalRecord {
  readonly __typename: "VideoInternalRecord";
  readonly id: any;
  readonly thumbnail: ContentPageBySlug_contentPage_blocks_VideoInternalRecord_thumbnail | null;
  readonly video: ContentPageBySlug_contentPage_blocks_VideoInternalRecord_video | null;
}

export type ContentPageBySlug_contentPage_blocks = ContentPageBySlug_contentPage_blocks_ButtonExternalRecord | ContentPageBySlug_contentPage_blocks_ButtonInternalRecord | ContentPageBySlug_contentPage_blocks_ColumnRowRecord | ContentPageBySlug_contentPage_blocks_ContentLinkSetRecord | ContentPageBySlug_contentPage_blocks_FormBlockRecord | ContentPageBySlug_contentPage_blocks_ImageSetRecord | ContentPageBySlug_contentPage_blocks_RichTextRecord | ContentPageBySlug_contentPage_blocks_VideoRecord | ContentPageBySlug_contentPage_blocks_VideoInternalRecord;

export interface ContentPageBySlug_contentPage__seoMetaTags {
  readonly __typename: "Tag";
  readonly attributes: any | null;
  readonly content: string | null;
  readonly tag: string;
}

export interface ContentPageBySlug_contentPage {
  readonly __typename: "ContentPageRecord";
  readonly title: string | null;
  readonly parent: ContentPageBySlug_contentPage_parent | null;
  readonly children: ReadonlyArray<(ContentPageBySlug_contentPage_children | null)> | null;
  readonly blocks: ReadonlyArray<ContentPageBySlug_contentPage_blocks>;
  readonly slug: string | null;
  /**
   * SEO meta tags
   */
  readonly _seoMetaTags: ReadonlyArray<ContentPageBySlug_contentPage__seoMetaTags>;
}

export interface ContentPageBySlug_site_faviconMetaTags {
  readonly __typename: "Tag";
  readonly attributes: any | null;
  readonly content: string | null;
  readonly tag: string;
}

export interface ContentPageBySlug_site {
  readonly __typename: "Site";
  readonly faviconMetaTags: ReadonlyArray<ContentPageBySlug_site_faviconMetaTags>;
}

export interface ContentPageBySlug_header_logo {
  readonly __typename: "FileField";
  readonly url: string;
  readonly title: string | null;
  readonly alt: string | null;
}

export interface ContentPageBySlug_header_links {
  readonly __typename: "PrimaryPageRecord";
  readonly id: any;
  readonly title: string | null;
  readonly slug: string | null;
}

export interface ContentPageBySlug_header {
  readonly __typename: "HeaderRecord";
  readonly logo: ContentPageBySlug_header_logo | null;
  readonly links: ReadonlyArray<ContentPageBySlug_header_links>;
  readonly contactLinkLabel: string | null;
}

export interface ContentPageBySlug_footer_footerLogo {
  readonly __typename: "FileField";
  readonly url: string;
  readonly title: string | null;
  readonly alt: string | null;
}

export interface ContentPageBySlug_footer_socialLinks {
  readonly __typename: "SocialLinkRecord";
  readonly id: any;
  readonly fontAwesomeIcon: string | null;
  readonly url: string | null;
}

export interface ContentPageBySlug_footer {
  readonly __typename: "FooterRecord";
  readonly title: string | null;
  readonly formTitle: string | null;
  readonly formNotice: string | null;
  readonly firstNameLabel: string | null;
  readonly lastNameLabel: string | null;
  readonly emailAddressLabel: string | null;
  readonly messageLabel: string | null;
  readonly destinationEmail: string | null;
  readonly contactText: string | null;
  readonly contactEmail: string | null;
  readonly directionsUrl: string | null;
  readonly footerLogo: ContentPageBySlug_footer_footerLogo | null;
  readonly socialLinks: ReadonlyArray<ContentPageBySlug_footer_socialLinks>;
  readonly richText: string | null;
}

export interface ContentPageBySlug {
  /**
   * Returns a specific record
   */
  readonly contentPage: ContentPageBySlug_contentPage | null;
  /**
   * Returns the single instance record
   */
  readonly site: ContentPageBySlug_site;
  /**
   * Returns the single instance record
   */
  readonly header: ContentPageBySlug_header | null;
  /**
   * Returns the single instance record
   */
  readonly footer: ContentPageBySlug_footer | null;
}

export interface ContentPageBySlugVariables {
  readonly slug?: string | null;
}
