/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CaseStudyBySlug
// ====================================================

export interface CaseStudyBySlug_caseStudy_blocks_ButtonExternalRecord {
  readonly __typename: "ButtonExternalRecord";
  readonly id: any;
  readonly label: string | null;
  readonly url: string | null;
  readonly align: string | null;
  readonly openInNewTab: any | null;
}

export interface CaseStudyBySlug_caseStudy_blocks_ButtonInternalRecord_link_ContentPageRecord {
  readonly __typename: "ContentPageRecord";
  readonly slug: string | null;
}

export interface CaseStudyBySlug_caseStudy_blocks_ButtonInternalRecord_link_CaseStudyRecord {
  readonly __typename: "CaseStudyRecord";
  readonly slug: string | null;
}

export interface CaseStudyBySlug_caseStudy_blocks_ButtonInternalRecord_link_BlogPostRecord {
  readonly __typename: "BlogPostRecord";
  readonly slug: string | null;
}

export interface CaseStudyBySlug_caseStudy_blocks_ButtonInternalRecord_link_PrimaryPageRecord {
  readonly __typename: "PrimaryPageRecord";
  readonly slug: string | null;
}

export interface CaseStudyBySlug_caseStudy_blocks_ButtonInternalRecord_link_DownloadPageRecord {
  readonly __typename: "DownloadPageRecord";
  readonly slug: string | null;
}

export type CaseStudyBySlug_caseStudy_blocks_ButtonInternalRecord_link = CaseStudyBySlug_caseStudy_blocks_ButtonInternalRecord_link_ContentPageRecord | CaseStudyBySlug_caseStudy_blocks_ButtonInternalRecord_link_CaseStudyRecord | CaseStudyBySlug_caseStudy_blocks_ButtonInternalRecord_link_BlogPostRecord | CaseStudyBySlug_caseStudy_blocks_ButtonInternalRecord_link_PrimaryPageRecord | CaseStudyBySlug_caseStudy_blocks_ButtonInternalRecord_link_DownloadPageRecord;

export interface CaseStudyBySlug_caseStudy_blocks_ButtonInternalRecord {
  readonly __typename: "ButtonInternalRecord";
  readonly id: any;
  readonly label: string | null;
  readonly link: CaseStudyBySlug_caseStudy_blocks_ButtonInternalRecord_link | null;
  readonly align: string | null;
  readonly openInNewTab: any | null;
}

export interface CaseStudyBySlug_caseStudy_blocks_ColumnRowRecord_columns_image_responsiveImage {
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

export interface CaseStudyBySlug_caseStudy_blocks_ColumnRowRecord_columns_image {
  readonly __typename: "FileField";
  readonly responsiveImage: CaseStudyBySlug_caseStudy_blocks_ColumnRowRecord_columns_image_responsiveImage | null;
}

export interface CaseStudyBySlug_caseStudy_blocks_ColumnRowRecord_columns_blocks_AgencyModelRecord {
  readonly __typename: "AgencyModelRecord" | "ImageSetRecord";
}

export interface CaseStudyBySlug_caseStudy_blocks_ColumnRowRecord_columns_blocks_ButtonExternalRecord {
  readonly __typename: "ButtonExternalRecord";
  readonly id: any;
  readonly label: string | null;
  readonly url: string | null;
  readonly align: string | null;
  readonly openInNewTab: any | null;
}

export interface CaseStudyBySlug_caseStudy_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link_ContentPageRecord {
  readonly __typename: "ContentPageRecord";
  readonly slug: string | null;
}

export interface CaseStudyBySlug_caseStudy_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link_CaseStudyRecord {
  readonly __typename: "CaseStudyRecord";
  readonly slug: string | null;
}

export interface CaseStudyBySlug_caseStudy_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link_BlogPostRecord {
  readonly __typename: "BlogPostRecord";
  readonly slug: string | null;
}

export interface CaseStudyBySlug_caseStudy_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link_PrimaryPageRecord {
  readonly __typename: "PrimaryPageRecord";
  readonly slug: string | null;
}

export interface CaseStudyBySlug_caseStudy_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link_DownloadPageRecord {
  readonly __typename: "DownloadPageRecord";
  readonly slug: string | null;
}

export type CaseStudyBySlug_caseStudy_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link = CaseStudyBySlug_caseStudy_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link_ContentPageRecord | CaseStudyBySlug_caseStudy_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link_CaseStudyRecord | CaseStudyBySlug_caseStudy_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link_BlogPostRecord | CaseStudyBySlug_caseStudy_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link_PrimaryPageRecord | CaseStudyBySlug_caseStudy_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link_DownloadPageRecord;

export interface CaseStudyBySlug_caseStudy_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord {
  readonly __typename: "ButtonInternalRecord";
  readonly id: any;
  readonly label: string | null;
  readonly link: CaseStudyBySlug_caseStudy_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link | null;
  readonly align: string | null;
  readonly openInNewTab: any | null;
}

export interface CaseStudyBySlug_caseStudy_blocks_ColumnRowRecord_columns_blocks_FormBlockRecord_form_formFields {
  readonly __typename: "FormFieldRecord";
  readonly id: any;
  readonly label: string | null;
  readonly fieldName: string | null;
  readonly fieldType: string | null;
  readonly required: any | null;
  readonly invisible: any | null;
  readonly grouped: any | null;
}

export interface CaseStudyBySlug_caseStudy_blocks_ColumnRowRecord_columns_blocks_FormBlockRecord_form {
  readonly __typename: "FormRecord";
  readonly title: string | null;
  readonly name: string | null;
  readonly action: string | null;
  readonly method: string | null;
  readonly formFields: ReadonlyArray<CaseStudyBySlug_caseStudy_blocks_ColumnRowRecord_columns_blocks_FormBlockRecord_form_formFields>;
}

export interface CaseStudyBySlug_caseStudy_blocks_ColumnRowRecord_columns_blocks_FormBlockRecord {
  readonly __typename: "FormBlockRecord";
  readonly id: any;
  readonly form: CaseStudyBySlug_caseStudy_blocks_ColumnRowRecord_columns_blocks_FormBlockRecord_form | null;
}

export interface CaseStudyBySlug_caseStudy_blocks_ColumnRowRecord_columns_blocks_RichTextRecord {
  readonly __typename: "RichTextRecord";
  readonly id: any;
  readonly richText: string | null;
}

export interface CaseStudyBySlug_caseStudy_blocks_ColumnRowRecord_columns_blocks_VideoRecord_video {
  readonly __typename: "VideoField";
  readonly height: any;
  readonly provider: string;
  readonly providerUid: string;
  readonly thumbnailUrl: string;
  readonly title: string;
  readonly url: string;
  readonly width: any;
}

export interface CaseStudyBySlug_caseStudy_blocks_ColumnRowRecord_columns_blocks_VideoRecord {
  readonly __typename: "VideoRecord";
  readonly id: any;
  readonly video: CaseStudyBySlug_caseStudy_blocks_ColumnRowRecord_columns_blocks_VideoRecord_video | null;
}

export interface CaseStudyBySlug_caseStudy_blocks_ColumnRowRecord_columns_blocks_VideoInternalRecord_thumbnail_responsiveImage {
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

export interface CaseStudyBySlug_caseStudy_blocks_ColumnRowRecord_columns_blocks_VideoInternalRecord_thumbnail {
  readonly __typename: "FileField";
  readonly id: any;
  readonly title: string | null;
  readonly responsiveImage: CaseStudyBySlug_caseStudy_blocks_ColumnRowRecord_columns_blocks_VideoInternalRecord_thumbnail_responsiveImage | null;
}

export interface CaseStudyBySlug_caseStudy_blocks_ColumnRowRecord_columns_blocks_VideoInternalRecord_video_video {
  readonly __typename: "UploadVideoField";
  readonly mp4Url: string | null;
  readonly streamingUrl: string;
  readonly thumbnailUrl: string;
}

export interface CaseStudyBySlug_caseStudy_blocks_ColumnRowRecord_columns_blocks_VideoInternalRecord_video {
  readonly __typename: "FileField";
  readonly height: any | null;
  readonly mimeType: string;
  readonly title: string | null;
  readonly video: CaseStudyBySlug_caseStudy_blocks_ColumnRowRecord_columns_blocks_VideoInternalRecord_video_video | null;
  readonly width: any | null;
}

export interface CaseStudyBySlug_caseStudy_blocks_ColumnRowRecord_columns_blocks_VideoInternalRecord {
  readonly __typename: "VideoInternalRecord";
  readonly id: any;
  readonly thumbnail: CaseStudyBySlug_caseStudy_blocks_ColumnRowRecord_columns_blocks_VideoInternalRecord_thumbnail | null;
  readonly video: CaseStudyBySlug_caseStudy_blocks_ColumnRowRecord_columns_blocks_VideoInternalRecord_video | null;
}

export type CaseStudyBySlug_caseStudy_blocks_ColumnRowRecord_columns_blocks = CaseStudyBySlug_caseStudy_blocks_ColumnRowRecord_columns_blocks_AgencyModelRecord | CaseStudyBySlug_caseStudy_blocks_ColumnRowRecord_columns_blocks_ButtonExternalRecord | CaseStudyBySlug_caseStudy_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord | CaseStudyBySlug_caseStudy_blocks_ColumnRowRecord_columns_blocks_FormBlockRecord | CaseStudyBySlug_caseStudy_blocks_ColumnRowRecord_columns_blocks_RichTextRecord | CaseStudyBySlug_caseStudy_blocks_ColumnRowRecord_columns_blocks_VideoRecord | CaseStudyBySlug_caseStudy_blocks_ColumnRowRecord_columns_blocks_VideoInternalRecord;

export interface CaseStudyBySlug_caseStudy_blocks_ColumnRowRecord_columns {
  readonly __typename: "ColumnRecord";
  readonly id: any;
  readonly title: string | null;
  readonly image: CaseStudyBySlug_caseStudy_blocks_ColumnRowRecord_columns_image | null;
  readonly text: string | null;
  readonly blocks: ReadonlyArray<CaseStudyBySlug_caseStudy_blocks_ColumnRowRecord_columns_blocks>;
  readonly textAlign: string | null;
  readonly width: string | null;
}

export interface CaseStudyBySlug_caseStudy_blocks_ColumnRowRecord {
  readonly __typename: "ColumnRowRecord";
  readonly id: any;
  readonly verticallyCenterAcrossColumns: any | null;
  readonly addLightBackground: any | null;
  readonly columns: ReadonlyArray<CaseStudyBySlug_caseStudy_blocks_ColumnRowRecord_columns>;
}

export interface CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImage_responsiveImage {
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

export interface CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImage {
  readonly __typename: "FileField";
  readonly responsiveImage: CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImage_responsiveImage | null;
}

export interface CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImageLg_responsiveImage {
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

export interface CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImageLg {
  readonly __typename: "FileField";
  readonly responsiveImage: CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImageLg_responsiveImage | null;
}

export interface CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImageSm_responsiveImage {
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

export interface CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImageSm {
  readonly __typename: "FileField";
  readonly responsiveImage: CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImageSm_responsiveImage | null;
}

export interface CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImageCol_responsiveImage {
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

export interface CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImageCol {
  readonly __typename: "FileField";
  readonly responsiveImage: CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImageCol_responsiveImage | null;
}

export interface CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_PrimaryPageRecord {
  readonly __typename: "PrimaryPageRecord";
  readonly id: any;
  readonly slug: string | null;
  readonly title: string | null;
  readonly description: string | null;
  readonly previewImage: CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImage | null;
  readonly previewImageLg: CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImageLg | null;
  readonly previewImageSm: CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImageSm | null;
  readonly previewImageCol: CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImageCol | null;
}

export interface CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImage_responsiveImage {
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

export interface CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImage {
  readonly __typename: "FileField";
  readonly responsiveImage: CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImage_responsiveImage | null;
}

export interface CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImageLg_responsiveImage {
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

export interface CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImageLg {
  readonly __typename: "FileField";
  readonly responsiveImage: CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImageLg_responsiveImage | null;
}

export interface CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImageSm_responsiveImage {
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

export interface CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImageSm {
  readonly __typename: "FileField";
  readonly responsiveImage: CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImageSm_responsiveImage | null;
}

export interface CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImageCol_responsiveImage {
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

export interface CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImageCol {
  readonly __typename: "FileField";
  readonly responsiveImage: CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImageCol_responsiveImage | null;
}

export interface CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_BlogPostRecord {
  readonly __typename: "BlogPostRecord";
  readonly id: any;
  readonly slug: string | null;
  readonly title: string | null;
  readonly subtitle: string | null;
  readonly description: string | null;
  readonly previewImage: CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImage | null;
  readonly previewImageLg: CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImageLg | null;
  readonly previewImageSm: CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImageSm | null;
  readonly previewImageCol: CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImageCol | null;
}

export interface CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_CaseStudyRecord_previewImage_responsiveImage {
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

export interface CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_CaseStudyRecord_previewImage {
  readonly __typename: "FileField";
  readonly responsiveImage: CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_CaseStudyRecord_previewImage_responsiveImage | null;
}

export interface CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_CaseStudyRecord_previewImageLg_responsiveImage {
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

export interface CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_CaseStudyRecord_previewImageLg {
  readonly __typename: "FileField";
  readonly responsiveImage: CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_CaseStudyRecord_previewImageLg_responsiveImage | null;
}

export interface CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_CaseStudyRecord_previewImageSm_responsiveImage {
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

export interface CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_CaseStudyRecord_previewImageSm {
  readonly __typename: "FileField";
  readonly responsiveImage: CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_CaseStudyRecord_previewImageSm_responsiveImage | null;
}

export interface CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_CaseStudyRecord_previewImageCol_responsiveImage {
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

export interface CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_CaseStudyRecord_previewImageCol {
  readonly __typename: "FileField";
  readonly responsiveImage: CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_CaseStudyRecord_previewImageCol_responsiveImage | null;
}

export interface CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_CaseStudyRecord {
  readonly __typename: "CaseStudyRecord";
  readonly id: any;
  readonly slug: string | null;
  readonly title: string | null;
  readonly description: string | null;
  readonly pretitle: string | null;
  readonly previewImage: CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_CaseStudyRecord_previewImage | null;
  readonly previewImageLg: CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_CaseStudyRecord_previewImageLg | null;
  readonly previewImageSm: CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_CaseStudyRecord_previewImageSm | null;
  readonly previewImageCol: CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_CaseStudyRecord_previewImageCol | null;
}

export interface CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImage_responsiveImage {
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

export interface CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImage {
  readonly __typename: "FileField";
  readonly responsiveImage: CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImage_responsiveImage | null;
}

export interface CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImageLg_responsiveImage {
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

export interface CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImageLg {
  readonly __typename: "FileField";
  readonly responsiveImage: CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImageLg_responsiveImage | null;
}

export interface CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImageSm_responsiveImage {
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

export interface CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImageSm {
  readonly __typename: "FileField";
  readonly responsiveImage: CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImageSm_responsiveImage | null;
}

export interface CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImageCol_responsiveImage {
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

export interface CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImageCol {
  readonly __typename: "FileField";
  readonly responsiveImage: CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImageCol_responsiveImage | null;
}

export interface CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_ContentPageRecord {
  readonly __typename: "ContentPageRecord";
  readonly id: any;
  readonly slug: string | null;
  readonly title: string | null;
  readonly description: string | null;
  readonly previewImage: CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImage | null;
  readonly previewImageLg: CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImageLg | null;
  readonly previewImageSm: CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImageSm | null;
  readonly previewImageCol: CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImageCol | null;
}

export interface CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImage_responsiveImage {
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

export interface CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImage {
  readonly __typename: "FileField";
  readonly responsiveImage: CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImage_responsiveImage | null;
}

export interface CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImageLg_responsiveImage {
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

export interface CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImageLg {
  readonly __typename: "FileField";
  readonly responsiveImage: CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImageLg_responsiveImage | null;
}

export interface CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImageSm_responsiveImage {
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

export interface CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImageSm {
  readonly __typename: "FileField";
  readonly responsiveImage: CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImageSm_responsiveImage | null;
}

export interface CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImageCol_responsiveImage {
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

export interface CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImageCol {
  readonly __typename: "FileField";
  readonly responsiveImage: CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImageCol_responsiveImage | null;
}

export interface CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_DownloadPageRecord {
  readonly __typename: "DownloadPageRecord";
  readonly id: any;
  readonly slug: string | null;
  readonly title: string | null;
  readonly description: string | null;
  readonly previewImage: CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImage | null;
  readonly previewImageLg: CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImageLg | null;
  readonly previewImageSm: CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImageSm | null;
  readonly previewImageCol: CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImageCol | null;
}

export type CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links = CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_PrimaryPageRecord | CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_BlogPostRecord | CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_CaseStudyRecord | CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_ContentPageRecord | CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links_DownloadPageRecord;

export interface CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord {
  readonly __typename: "ContentLinkSetRecord";
  readonly id: any;
  readonly displaySize: string | null;
  readonly imageAlign: string | null;
  readonly isSlider: any | null;
  readonly callToActionLabel: string | null;
  readonly links: ReadonlyArray<CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord_links>;
}

export interface CaseStudyBySlug_caseStudy_blocks_FormBlockRecord_form_formFields {
  readonly __typename: "FormFieldRecord";
  readonly id: any;
  readonly label: string | null;
  readonly fieldName: string | null;
  readonly fieldType: string | null;
  readonly required: any | null;
  readonly invisible: any | null;
  readonly grouped: any | null;
}

export interface CaseStudyBySlug_caseStudy_blocks_FormBlockRecord_form {
  readonly __typename: "FormRecord";
  readonly title: string | null;
  readonly name: string | null;
  readonly action: string | null;
  readonly method: string | null;
  readonly formFields: ReadonlyArray<CaseStudyBySlug_caseStudy_blocks_FormBlockRecord_form_formFields>;
}

export interface CaseStudyBySlug_caseStudy_blocks_FormBlockRecord {
  readonly __typename: "FormBlockRecord";
  readonly id: any;
  readonly form: CaseStudyBySlug_caseStudy_blocks_FormBlockRecord_form | null;
}

export interface CaseStudyBySlug_caseStudy_blocks_ItemsPanelRecord_panelItems_listImage_responsiveImage {
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

export interface CaseStudyBySlug_caseStudy_blocks_ItemsPanelRecord_panelItems_listImage {
  readonly __typename: "FileField";
  readonly responsiveImage: CaseStudyBySlug_caseStudy_blocks_ItemsPanelRecord_panelItems_listImage_responsiveImage | null;
}

export interface CaseStudyBySlug_caseStudy_blocks_ItemsPanelRecord_panelItems_detailImage_responsiveImage {
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

export interface CaseStudyBySlug_caseStudy_blocks_ItemsPanelRecord_panelItems_detailImage {
  readonly __typename: "FileField";
  readonly responsiveImage: CaseStudyBySlug_caseStudy_blocks_ItemsPanelRecord_panelItems_detailImage_responsiveImage | null;
}

export interface CaseStudyBySlug_caseStudy_blocks_ItemsPanelRecord_panelItems_detailLink_ContentPageRecord {
  readonly __typename: "ContentPageRecord";
  readonly slug: string | null;
  readonly title: string | null;
}

export interface CaseStudyBySlug_caseStudy_blocks_ItemsPanelRecord_panelItems_detailLink_CaseStudyRecord {
  readonly __typename: "CaseStudyRecord";
  readonly slug: string | null;
  readonly title: string | null;
}

export interface CaseStudyBySlug_caseStudy_blocks_ItemsPanelRecord_panelItems_detailLink_BlogPostRecord {
  readonly __typename: "BlogPostRecord";
  readonly slug: string | null;
  readonly title: string | null;
}

export interface CaseStudyBySlug_caseStudy_blocks_ItemsPanelRecord_panelItems_detailLink_PrimaryPageRecord {
  readonly __typename: "PrimaryPageRecord";
  readonly slug: string | null;
  readonly title: string | null;
}

export interface CaseStudyBySlug_caseStudy_blocks_ItemsPanelRecord_panelItems_detailLink_DownloadPageRecord {
  readonly __typename: "DownloadPageRecord";
  readonly slug: string | null;
  readonly title: string | null;
}

export type CaseStudyBySlug_caseStudy_blocks_ItemsPanelRecord_panelItems_detailLink = CaseStudyBySlug_caseStudy_blocks_ItemsPanelRecord_panelItems_detailLink_ContentPageRecord | CaseStudyBySlug_caseStudy_blocks_ItemsPanelRecord_panelItems_detailLink_CaseStudyRecord | CaseStudyBySlug_caseStudy_blocks_ItemsPanelRecord_panelItems_detailLink_BlogPostRecord | CaseStudyBySlug_caseStudy_blocks_ItemsPanelRecord_panelItems_detailLink_PrimaryPageRecord | CaseStudyBySlug_caseStudy_blocks_ItemsPanelRecord_panelItems_detailLink_DownloadPageRecord;

export interface CaseStudyBySlug_caseStudy_blocks_ItemsPanelRecord_panelItems {
  readonly __typename: "PanelItemRecord";
  readonly id: any;
  readonly listTitle: string | null;
  readonly listImage: CaseStudyBySlug_caseStudy_blocks_ItemsPanelRecord_panelItems_listImage | null;
  readonly detailImage: CaseStudyBySlug_caseStudy_blocks_ItemsPanelRecord_panelItems_detailImage | null;
  readonly detailTitle: string | null;
  readonly detailText: string | null;
  readonly detailLink: CaseStudyBySlug_caseStudy_blocks_ItemsPanelRecord_panelItems_detailLink | null;
  readonly detailLinkLabel: string | null;
}

export interface CaseStudyBySlug_caseStudy_blocks_ItemsPanelRecord {
  readonly __typename: "ItemsPanelRecord";
  readonly id: any;
  readonly panelItems: ReadonlyArray<CaseStudyBySlug_caseStudy_blocks_ItemsPanelRecord_panelItems>;
}

export interface CaseStudyBySlug_caseStudy_blocks_ImageSetRecord_imageSet_responsiveImage {
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

export interface CaseStudyBySlug_caseStudy_blocks_ImageSetRecord_imageSet {
  readonly __typename: "FileField";
  readonly id: any;
  readonly responsiveImage: CaseStudyBySlug_caseStudy_blocks_ImageSetRecord_imageSet_responsiveImage | null;
}

export interface CaseStudyBySlug_caseStudy_blocks_ImageSetRecord {
  readonly __typename: "ImageSetRecord";
  readonly id: any;
  readonly imageSet: ReadonlyArray<CaseStudyBySlug_caseStudy_blocks_ImageSetRecord_imageSet>;
  readonly verticallyCenterAcrossImages: any | null;
}

export interface CaseStudyBySlug_caseStudy_blocks_RichTextRecord {
  readonly __typename: "RichTextRecord";
  readonly id: any;
  readonly richText: string | null;
}

export interface CaseStudyBySlug_caseStudy_blocks_TeamRecord_members_image_responsiveImage {
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

export interface CaseStudyBySlug_caseStudy_blocks_TeamRecord_members_image {
  readonly __typename: "FileField";
  readonly responsiveImage: CaseStudyBySlug_caseStudy_blocks_TeamRecord_members_image_responsiveImage | null;
}

export interface CaseStudyBySlug_caseStudy_blocks_TeamRecord_members {
  readonly __typename: "MemberRecord";
  readonly id: any;
  readonly name: string | null;
  readonly title: string | null;
  readonly image: CaseStudyBySlug_caseStudy_blocks_TeamRecord_members_image | null;
}

export interface CaseStudyBySlug_caseStudy_blocks_TeamRecord {
  readonly __typename: "TeamRecord";
  readonly id: any;
  readonly teamTitle: string | null;
  readonly members: ReadonlyArray<CaseStudyBySlug_caseStudy_blocks_TeamRecord_members>;
}

export interface CaseStudyBySlug_caseStudy_blocks_VideoRecord_video {
  readonly __typename: "VideoField";
  readonly height: any;
  readonly provider: string;
  readonly providerUid: string;
  readonly thumbnailUrl: string;
  readonly title: string;
  readonly url: string;
  readonly width: any;
}

export interface CaseStudyBySlug_caseStudy_blocks_VideoRecord {
  readonly __typename: "VideoRecord";
  readonly id: any;
  readonly video: CaseStudyBySlug_caseStudy_blocks_VideoRecord_video | null;
}

export interface CaseStudyBySlug_caseStudy_blocks_VideoInternalRecord_thumbnail_responsiveImage {
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

export interface CaseStudyBySlug_caseStudy_blocks_VideoInternalRecord_thumbnail {
  readonly __typename: "FileField";
  readonly id: any;
  readonly title: string | null;
  readonly responsiveImage: CaseStudyBySlug_caseStudy_blocks_VideoInternalRecord_thumbnail_responsiveImage | null;
}

export interface CaseStudyBySlug_caseStudy_blocks_VideoInternalRecord_video_video {
  readonly __typename: "UploadVideoField";
  readonly mp4Url: string | null;
  readonly streamingUrl: string;
  readonly thumbnailUrl: string;
}

export interface CaseStudyBySlug_caseStudy_blocks_VideoInternalRecord_video {
  readonly __typename: "FileField";
  readonly height: any | null;
  readonly mimeType: string;
  readonly title: string | null;
  readonly video: CaseStudyBySlug_caseStudy_blocks_VideoInternalRecord_video_video | null;
  readonly width: any | null;
}

export interface CaseStudyBySlug_caseStudy_blocks_VideoInternalRecord {
  readonly __typename: "VideoInternalRecord";
  readonly id: any;
  readonly thumbnail: CaseStudyBySlug_caseStudy_blocks_VideoInternalRecord_thumbnail | null;
  readonly video: CaseStudyBySlug_caseStudy_blocks_VideoInternalRecord_video | null;
}

export type CaseStudyBySlug_caseStudy_blocks = CaseStudyBySlug_caseStudy_blocks_ButtonExternalRecord | CaseStudyBySlug_caseStudy_blocks_ButtonInternalRecord | CaseStudyBySlug_caseStudy_blocks_ColumnRowRecord | CaseStudyBySlug_caseStudy_blocks_ContentLinkSetRecord | CaseStudyBySlug_caseStudy_blocks_FormBlockRecord | CaseStudyBySlug_caseStudy_blocks_ItemsPanelRecord | CaseStudyBySlug_caseStudy_blocks_ImageSetRecord | CaseStudyBySlug_caseStudy_blocks_RichTextRecord | CaseStudyBySlug_caseStudy_blocks_TeamRecord | CaseStudyBySlug_caseStudy_blocks_VideoRecord | CaseStudyBySlug_caseStudy_blocks_VideoInternalRecord;

export interface CaseStudyBySlug_caseStudy_categories {
  readonly __typename: "WorkCategoryRecord";
  readonly id: any;
  readonly name: string | null;
  readonly slug: string | null;
}

export interface CaseStudyBySlug_caseStudy__seoMetaTags {
  readonly __typename: "Tag";
  readonly attributes: any | null;
  readonly content: string | null;
  readonly tag: string;
}

export interface CaseStudyBySlug_caseStudy {
  readonly __typename: "CaseStudyRecord";
  readonly title: string | null;
  readonly date: any | null;
  readonly pretitle: string | null;
  readonly description: string | null;
  readonly blocks: ReadonlyArray<CaseStudyBySlug_caseStudy_blocks>;
  readonly categories: ReadonlyArray<CaseStudyBySlug_caseStudy_categories>;
  readonly slug: string | null;
  /**
   * Generates SEO and Social card meta tags to be used in your frontend
   */
  readonly _seoMetaTags: ReadonlyArray<CaseStudyBySlug_caseStudy__seoMetaTags>;
}

export interface CaseStudyBySlug_site_faviconMetaTags {
  readonly __typename: "Tag";
  readonly attributes: any | null;
  readonly content: string | null;
  readonly tag: string;
}

export interface CaseStudyBySlug_site {
  readonly __typename: "Site";
  readonly faviconMetaTags: ReadonlyArray<CaseStudyBySlug_site_faviconMetaTags>;
}

export interface CaseStudyBySlug_header_logo {
  readonly __typename: "FileField";
  readonly url: string;
  readonly title: string | null;
  readonly alt: string | null;
}

export interface CaseStudyBySlug_header_links {
  readonly __typename: "PrimaryPageRecord";
  readonly id: any;
  readonly title: string | null;
  readonly slug: string | null;
}

export interface CaseStudyBySlug_header_whatWeDoPageLink {
  readonly __typename: "PrimaryPageRecord";
  readonly id: any;
  readonly title: string | null;
  readonly slug: string | null;
}

export interface CaseStudyBySlug_header_whatWeDoLinks {
  readonly __typename: "ServiceRecord";
  readonly id: any;
  readonly title: string | null;
  readonly slug: string | null;
}

export interface CaseStudyBySlug_header_aboutCatchyPageLink {
  readonly __typename: "PrimaryPageRecord";
  readonly id: any;
  readonly title: string | null;
  readonly slug: string | null;
}

export interface CaseStudyBySlug_header_aboutCatchyLinks_PrimaryPageRecord {
  readonly __typename: "PrimaryPageRecord";
  readonly id: any;
  readonly title: string | null;
  readonly slug: string | null;
}

export interface CaseStudyBySlug_header_aboutCatchyLinks_ContentPageRecord {
  readonly __typename: "ContentPageRecord";
  readonly id: any;
  readonly title: string | null;
  readonly slug: string | null;
}

export type CaseStudyBySlug_header_aboutCatchyLinks = CaseStudyBySlug_header_aboutCatchyLinks_PrimaryPageRecord | CaseStudyBySlug_header_aboutCatchyLinks_ContentPageRecord;

export interface CaseStudyBySlug_header {
  readonly __typename: "HeaderRecord";
  readonly logo: CaseStudyBySlug_header_logo | null;
  readonly links: ReadonlyArray<CaseStudyBySlug_header_links>;
  readonly whatWeDoPageLink: CaseStudyBySlug_header_whatWeDoPageLink | null;
  readonly whatWeDoLinks: ReadonlyArray<CaseStudyBySlug_header_whatWeDoLinks>;
  readonly aboutCatchyPageLink: CaseStudyBySlug_header_aboutCatchyPageLink | null;
  readonly aboutCatchyLinks: ReadonlyArray<CaseStudyBySlug_header_aboutCatchyLinks>;
  readonly contactLinkLabel: string | null;
}

export interface CaseStudyBySlug_footer_footerLogo {
  readonly __typename: "FileField";
  readonly url: string;
  readonly title: string | null;
  readonly alt: string | null;
}

export interface CaseStudyBySlug_footer_socialLinks {
  readonly __typename: "SocialLinkRecord";
  readonly id: any;
  readonly fontAwesomeIcon: string | null;
  readonly url: string | null;
}

export interface CaseStudyBySlug_footer {
  readonly __typename: "FooterRecord";
  readonly title: string | null;
  readonly formTitle: string | null;
  readonly nameLabel: string | null;
  readonly firstNameLabel: string | null;
  readonly lastNameLabel: string | null;
  readonly emailAddressLabel: string | null;
  readonly messageLabel: string | null;
  readonly destinationEmail: string | null;
  readonly contactText: string | null;
  readonly contactEmail: string | null;
  readonly directionsUrl: string | null;
  readonly footerLogo: CaseStudyBySlug_footer_footerLogo | null;
  readonly socialLinks: ReadonlyArray<CaseStudyBySlug_footer_socialLinks>;
  readonly richText: string | null;
}

export interface CaseStudyBySlug {
  /**
   * Returns a specific record
   */
  readonly caseStudy: CaseStudyBySlug_caseStudy | null;
  /**
   * Returns the single instance record
   */
  readonly site: CaseStudyBySlug_site;
  /**
   * Returns the single instance record
   */
  readonly header: CaseStudyBySlug_header | null;
  /**
   * Returns the single instance record
   */
  readonly footer: CaseStudyBySlug_footer | null;
}

export interface CaseStudyBySlugVariables {
  readonly slug?: string | null;
}
