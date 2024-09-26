/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CaseStudiesByCategoryId
// ====================================================

export interface CaseStudiesByCategoryId_allCaseStudies_previewImage_responsiveImage {
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

export interface CaseStudiesByCategoryId_allCaseStudies_previewImage {
  readonly __typename: "FileField";
  readonly responsiveImage: CaseStudiesByCategoryId_allCaseStudies_previewImage_responsiveImage | null;
}

export interface CaseStudiesByCategoryId_allCaseStudies_previewImageLg_responsiveImage {
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

export interface CaseStudiesByCategoryId_allCaseStudies_previewImageLg {
  readonly __typename: "FileField";
  readonly responsiveImage: CaseStudiesByCategoryId_allCaseStudies_previewImageLg_responsiveImage | null;
}

export interface CaseStudiesByCategoryId_allCaseStudies_previewImageSm_responsiveImage {
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

export interface CaseStudiesByCategoryId_allCaseStudies_previewImageSm {
  readonly __typename: "FileField";
  readonly responsiveImage: CaseStudiesByCategoryId_allCaseStudies_previewImageSm_responsiveImage | null;
}

export interface CaseStudiesByCategoryId_allCaseStudies_previewImageCol_responsiveImage {
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

export interface CaseStudiesByCategoryId_allCaseStudies_previewImageCol {
  readonly __typename: "FileField";
  readonly responsiveImage: CaseStudiesByCategoryId_allCaseStudies_previewImageCol_responsiveImage | null;
}

export interface CaseStudiesByCategoryId_allCaseStudies {
  readonly __typename: "CaseStudyRecord";
  readonly id: any;
  readonly slug: string | null;
  readonly title: string | null;
  readonly description: string | null;
  readonly previewImage: CaseStudiesByCategoryId_allCaseStudies_previewImage | null;
  readonly previewImageLg: CaseStudiesByCategoryId_allCaseStudies_previewImageLg | null;
  readonly previewImageSm: CaseStudiesByCategoryId_allCaseStudies_previewImageSm | null;
  readonly previewImageCol: CaseStudiesByCategoryId_allCaseStudies_previewImageCol | null;
}

export interface CaseStudiesByCategoryId_allWorkCategories {
  readonly __typename: "WorkCategoryRecord";
  readonly id: any;
  readonly name: string | null;
  readonly slug: string | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_CarouselRecord {
  readonly __typename: "CarouselRecord" | "NewsletterRecord";
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_AgencyModelRecord_columns_image_responsiveImage {
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

export interface CaseStudiesByCategoryId_primaryPage_blocks_AgencyModelRecord_columns_image {
  readonly __typename: "FileField";
  readonly responsiveImage: CaseStudiesByCategoryId_primaryPage_blocks_AgencyModelRecord_columns_image_responsiveImage | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_AgencyModelRecord_columns_services {
  readonly __typename: "ServiceRecord";
  readonly id: any;
  readonly title: string | null;
  readonly text: string | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_AgencyModelRecord_columns {
  readonly __typename: "AgencyColumnRecord";
  readonly id: any;
  readonly image: CaseStudiesByCategoryId_primaryPage_blocks_AgencyModelRecord_columns_image | null;
  readonly title: string | null;
  readonly services: ReadonlyArray<CaseStudiesByCategoryId_primaryPage_blocks_AgencyModelRecord_columns_services>;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_AgencyModelRecord {
  readonly __typename: "AgencyModelRecord";
  readonly id: any;
  readonly text: string | null;
  readonly title: string | null;
  readonly columns: ReadonlyArray<CaseStudiesByCategoryId_primaryPage_blocks_AgencyModelRecord_columns>;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_BannerRecord_backgroundImage_responsiveImage {
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

export interface CaseStudiesByCategoryId_primaryPage_blocks_BannerRecord_backgroundImage {
  readonly __typename: "FileField";
  readonly responsiveImage: CaseStudiesByCategoryId_primaryPage_blocks_BannerRecord_backgroundImage_responsiveImage | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_BannerRecord_link {
  readonly __typename: "PrimaryPageRecord";
  readonly slug: string | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_BannerRecord {
  readonly __typename: "BannerRecord";
  readonly id: any;
  readonly title: string | null;
  readonly text: string | null;
  readonly backgroundImage: CaseStudiesByCategoryId_primaryPage_blocks_BannerRecord_backgroundImage | null;
  readonly showContactButton: any | null;
  readonly contactButtonLabel: string | null;
  readonly link: CaseStudiesByCategoryId_primaryPage_blocks_BannerRecord_link | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ButtonExternalRecord {
  readonly __typename: "ButtonExternalRecord";
  readonly id: any;
  readonly label: string | null;
  readonly url: string | null;
  readonly align: string | null;
  readonly openInNewTab: any | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ButtonInternalRecord_link_ContentPageRecord {
  readonly __typename: "ContentPageRecord";
  readonly slug: string | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ButtonInternalRecord_link_CaseStudyRecord {
  readonly __typename: "CaseStudyRecord";
  readonly slug: string | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ButtonInternalRecord_link_BlogPostRecord {
  readonly __typename: "BlogPostRecord";
  readonly slug: string | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ButtonInternalRecord_link_PrimaryPageRecord {
  readonly __typename: "PrimaryPageRecord";
  readonly slug: string | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ButtonInternalRecord_link_DownloadPageRecord {
  readonly __typename: "DownloadPageRecord";
  readonly slug: string | null;
}

export type CaseStudiesByCategoryId_primaryPage_blocks_ButtonInternalRecord_link = CaseStudiesByCategoryId_primaryPage_blocks_ButtonInternalRecord_link_ContentPageRecord | CaseStudiesByCategoryId_primaryPage_blocks_ButtonInternalRecord_link_CaseStudyRecord | CaseStudiesByCategoryId_primaryPage_blocks_ButtonInternalRecord_link_BlogPostRecord | CaseStudiesByCategoryId_primaryPage_blocks_ButtonInternalRecord_link_PrimaryPageRecord | CaseStudiesByCategoryId_primaryPage_blocks_ButtonInternalRecord_link_DownloadPageRecord;

export interface CaseStudiesByCategoryId_primaryPage_blocks_ButtonInternalRecord {
  readonly __typename: "ButtonInternalRecord";
  readonly id: any;
  readonly label: string | null;
  readonly link: CaseStudiesByCategoryId_primaryPage_blocks_ButtonInternalRecord_link | null;
  readonly align: string | null;
  readonly openInNewTab: any | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ClientSetRecord_clientSet_logo_responsiveImage {
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

export interface CaseStudiesByCategoryId_primaryPage_blocks_ClientSetRecord_clientSet_logo {
  readonly __typename: "FileField";
  readonly responsiveImage: CaseStudiesByCategoryId_primaryPage_blocks_ClientSetRecord_clientSet_logo_responsiveImage | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ClientSetRecord_clientSet {
  readonly __typename: "ClientRecord";
  readonly id: any;
  readonly name: string | null;
  readonly logo: CaseStudiesByCategoryId_primaryPage_blocks_ClientSetRecord_clientSet_logo | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ClientSetRecord {
  readonly __typename: "ClientSetRecord";
  readonly id: any;
  readonly clientSet: ReadonlyArray<CaseStudiesByCategoryId_primaryPage_blocks_ClientSetRecord_clientSet>;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImage_responsiveImage {
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

export interface CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImage {
  readonly __typename: "FileField";
  readonly responsiveImage: CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImage_responsiveImage | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImageLg_responsiveImage {
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

export interface CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImageLg {
  readonly __typename: "FileField";
  readonly responsiveImage: CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImageLg_responsiveImage | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImageSm_responsiveImage {
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

export interface CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImageSm {
  readonly __typename: "FileField";
  readonly responsiveImage: CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImageSm_responsiveImage | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImageCol_responsiveImage {
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

export interface CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImageCol {
  readonly __typename: "FileField";
  readonly responsiveImage: CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImageCol_responsiveImage | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord {
  readonly __typename: "PrimaryPageRecord";
  readonly id: any;
  readonly slug: string | null;
  readonly title: string | null;
  readonly description: string | null;
  readonly previewImage: CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImage | null;
  readonly previewImageLg: CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImageLg | null;
  readonly previewImageSm: CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImageSm | null;
  readonly previewImageCol: CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImageCol | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImage_responsiveImage {
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

export interface CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImage {
  readonly __typename: "FileField";
  readonly responsiveImage: CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImage_responsiveImage | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImageLg_responsiveImage {
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

export interface CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImageLg {
  readonly __typename: "FileField";
  readonly responsiveImage: CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImageLg_responsiveImage | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImageSm_responsiveImage {
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

export interface CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImageSm {
  readonly __typename: "FileField";
  readonly responsiveImage: CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImageSm_responsiveImage | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImageCol_responsiveImage {
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

export interface CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImageCol {
  readonly __typename: "FileField";
  readonly responsiveImage: CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImageCol_responsiveImage | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_BlogPostRecord {
  readonly __typename: "BlogPostRecord";
  readonly id: any;
  readonly slug: string | null;
  readonly title: string | null;
  readonly description: string | null;
  readonly previewImage: CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImage | null;
  readonly previewImageLg: CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImageLg | null;
  readonly previewImageSm: CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImageSm | null;
  readonly previewImageCol: CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImageCol | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_CaseStudyRecord_previewImage_responsiveImage {
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

export interface CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_CaseStudyRecord_previewImage {
  readonly __typename: "FileField";
  readonly responsiveImage: CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_CaseStudyRecord_previewImage_responsiveImage | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_CaseStudyRecord_previewImageLg_responsiveImage {
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

export interface CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_CaseStudyRecord_previewImageLg {
  readonly __typename: "FileField";
  readonly responsiveImage: CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_CaseStudyRecord_previewImageLg_responsiveImage | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_CaseStudyRecord_previewImageSm_responsiveImage {
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

export interface CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_CaseStudyRecord_previewImageSm {
  readonly __typename: "FileField";
  readonly responsiveImage: CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_CaseStudyRecord_previewImageSm_responsiveImage | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_CaseStudyRecord_previewImageCol_responsiveImage {
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

export interface CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_CaseStudyRecord_previewImageCol {
  readonly __typename: "FileField";
  readonly responsiveImage: CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_CaseStudyRecord_previewImageCol_responsiveImage | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_CaseStudyRecord {
  readonly __typename: "CaseStudyRecord";
  readonly id: any;
  readonly slug: string | null;
  readonly title: string | null;
  readonly description: string | null;
  readonly previewImage: CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_CaseStudyRecord_previewImage | null;
  readonly previewImageLg: CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_CaseStudyRecord_previewImageLg | null;
  readonly previewImageSm: CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_CaseStudyRecord_previewImageSm | null;
  readonly previewImageCol: CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_CaseStudyRecord_previewImageCol | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImage_responsiveImage {
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

export interface CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImage {
  readonly __typename: "FileField";
  readonly responsiveImage: CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImage_responsiveImage | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImageLg_responsiveImage {
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

export interface CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImageLg {
  readonly __typename: "FileField";
  readonly responsiveImage: CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImageLg_responsiveImage | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImageSm_responsiveImage {
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

export interface CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImageSm {
  readonly __typename: "FileField";
  readonly responsiveImage: CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImageSm_responsiveImage | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImageCol_responsiveImage {
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

export interface CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImageCol {
  readonly __typename: "FileField";
  readonly responsiveImage: CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImageCol_responsiveImage | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_ContentPageRecord {
  readonly __typename: "ContentPageRecord";
  readonly id: any;
  readonly slug: string | null;
  readonly title: string | null;
  readonly description: string | null;
  readonly previewImage: CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImage | null;
  readonly previewImageLg: CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImageLg | null;
  readonly previewImageSm: CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImageSm | null;
  readonly previewImageCol: CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImageCol | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImage_responsiveImage {
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

export interface CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImage {
  readonly __typename: "FileField";
  readonly responsiveImage: CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImage_responsiveImage | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImageLg_responsiveImage {
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

export interface CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImageLg {
  readonly __typename: "FileField";
  readonly responsiveImage: CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImageLg_responsiveImage | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImageSm_responsiveImage {
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

export interface CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImageSm {
  readonly __typename: "FileField";
  readonly responsiveImage: CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImageSm_responsiveImage | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImageCol_responsiveImage {
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

export interface CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImageCol {
  readonly __typename: "FileField";
  readonly responsiveImage: CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImageCol_responsiveImage | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_DownloadPageRecord {
  readonly __typename: "DownloadPageRecord";
  readonly id: any;
  readonly slug: string | null;
  readonly title: string | null;
  readonly description: string | null;
  readonly previewImage: CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImage | null;
  readonly previewImageLg: CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImageLg | null;
  readonly previewImageSm: CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImageSm | null;
  readonly previewImageCol: CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImageCol | null;
}

export type CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links = CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord | CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_BlogPostRecord | CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_CaseStudyRecord | CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_ContentPageRecord | CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links_DownloadPageRecord;

export interface CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord {
  readonly __typename: "ContentLinkSetRecord";
  readonly id: any;
  readonly displaySize: string | null;
  readonly imageAlign: string | null;
  readonly isSlider: any | null;
  readonly callToActionLabel: string | null;
  readonly links: ReadonlyArray<CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord_links>;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ColumnRowRecord_columns_image_responsiveImage {
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

export interface CaseStudiesByCategoryId_primaryPage_blocks_ColumnRowRecord_columns_image {
  readonly __typename: "FileField";
  readonly responsiveImage: CaseStudiesByCategoryId_primaryPage_blocks_ColumnRowRecord_columns_image_responsiveImage | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ColumnRowRecord_columns_blocks_AgencyModelRecord {
  readonly __typename: "AgencyModelRecord" | "ImageSetRecord";
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ColumnRowRecord_columns_blocks_ButtonExternalRecord {
  readonly __typename: "ButtonExternalRecord";
  readonly id: any;
  readonly label: string | null;
  readonly url: string | null;
  readonly align: string | null;
  readonly openInNewTab: any | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link_ContentPageRecord {
  readonly __typename: "ContentPageRecord";
  readonly slug: string | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link_CaseStudyRecord {
  readonly __typename: "CaseStudyRecord";
  readonly slug: string | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link_BlogPostRecord {
  readonly __typename: "BlogPostRecord";
  readonly slug: string | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link_PrimaryPageRecord {
  readonly __typename: "PrimaryPageRecord";
  readonly slug: string | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link_DownloadPageRecord {
  readonly __typename: "DownloadPageRecord";
  readonly slug: string | null;
}

export type CaseStudiesByCategoryId_primaryPage_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link = CaseStudiesByCategoryId_primaryPage_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link_ContentPageRecord | CaseStudiesByCategoryId_primaryPage_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link_CaseStudyRecord | CaseStudiesByCategoryId_primaryPage_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link_BlogPostRecord | CaseStudiesByCategoryId_primaryPage_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link_PrimaryPageRecord | CaseStudiesByCategoryId_primaryPage_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link_DownloadPageRecord;

export interface CaseStudiesByCategoryId_primaryPage_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord {
  readonly __typename: "ButtonInternalRecord";
  readonly id: any;
  readonly label: string | null;
  readonly link: CaseStudiesByCategoryId_primaryPage_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link | null;
  readonly align: string | null;
  readonly openInNewTab: any | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ColumnRowRecord_columns_blocks_FormBlockRecord_form_formFields {
  readonly __typename: "FormFieldRecord";
  readonly id: any;
  readonly label: string | null;
  readonly fieldName: string | null;
  readonly fieldType: string | null;
  readonly required: any | null;
  readonly invisible: any | null;
  readonly grouped: any | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ColumnRowRecord_columns_blocks_FormBlockRecord_form {
  readonly __typename: "FormRecord";
  readonly title: string | null;
  readonly name: string | null;
  readonly action: string | null;
  readonly method: string | null;
  readonly formFields: ReadonlyArray<CaseStudiesByCategoryId_primaryPage_blocks_ColumnRowRecord_columns_blocks_FormBlockRecord_form_formFields>;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ColumnRowRecord_columns_blocks_FormBlockRecord {
  readonly __typename: "FormBlockRecord";
  readonly id: any;
  readonly form: CaseStudiesByCategoryId_primaryPage_blocks_ColumnRowRecord_columns_blocks_FormBlockRecord_form | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ColumnRowRecord_columns_blocks_RichTextRecord {
  readonly __typename: "RichTextRecord";
  readonly id: any;
  readonly richText: string | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ColumnRowRecord_columns_blocks_VideoRecord_video {
  readonly __typename: "VideoField";
  readonly height: any;
  readonly provider: string;
  readonly providerUid: string;
  readonly thumbnailUrl: string;
  readonly title: string;
  readonly url: string;
  readonly width: any;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ColumnRowRecord_columns_blocks_VideoRecord {
  readonly __typename: "VideoRecord";
  readonly id: any;
  readonly video: CaseStudiesByCategoryId_primaryPage_blocks_ColumnRowRecord_columns_blocks_VideoRecord_video | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ColumnRowRecord_columns_blocks_VideoInternalRecord_thumbnail_responsiveImage {
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

export interface CaseStudiesByCategoryId_primaryPage_blocks_ColumnRowRecord_columns_blocks_VideoInternalRecord_thumbnail {
  readonly __typename: "FileField";
  readonly id: any;
  readonly title: string | null;
  readonly responsiveImage: CaseStudiesByCategoryId_primaryPage_blocks_ColumnRowRecord_columns_blocks_VideoInternalRecord_thumbnail_responsiveImage | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ColumnRowRecord_columns_blocks_VideoInternalRecord_video_video {
  readonly __typename: "UploadVideoField";
  readonly mp4Url: string | null;
  readonly streamingUrl: string;
  readonly thumbnailUrl: string;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ColumnRowRecord_columns_blocks_VideoInternalRecord_video {
  readonly __typename: "FileField";
  readonly height: any | null;
  readonly mimeType: string;
  readonly title: string | null;
  readonly video: CaseStudiesByCategoryId_primaryPage_blocks_ColumnRowRecord_columns_blocks_VideoInternalRecord_video_video | null;
  readonly width: any | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ColumnRowRecord_columns_blocks_VideoInternalRecord {
  readonly __typename: "VideoInternalRecord";
  readonly id: any;
  readonly thumbnail: CaseStudiesByCategoryId_primaryPage_blocks_ColumnRowRecord_columns_blocks_VideoInternalRecord_thumbnail | null;
  readonly video: CaseStudiesByCategoryId_primaryPage_blocks_ColumnRowRecord_columns_blocks_VideoInternalRecord_video | null;
}

export type CaseStudiesByCategoryId_primaryPage_blocks_ColumnRowRecord_columns_blocks = CaseStudiesByCategoryId_primaryPage_blocks_ColumnRowRecord_columns_blocks_AgencyModelRecord | CaseStudiesByCategoryId_primaryPage_blocks_ColumnRowRecord_columns_blocks_ButtonExternalRecord | CaseStudiesByCategoryId_primaryPage_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord | CaseStudiesByCategoryId_primaryPage_blocks_ColumnRowRecord_columns_blocks_FormBlockRecord | CaseStudiesByCategoryId_primaryPage_blocks_ColumnRowRecord_columns_blocks_RichTextRecord | CaseStudiesByCategoryId_primaryPage_blocks_ColumnRowRecord_columns_blocks_VideoRecord | CaseStudiesByCategoryId_primaryPage_blocks_ColumnRowRecord_columns_blocks_VideoInternalRecord;

export interface CaseStudiesByCategoryId_primaryPage_blocks_ColumnRowRecord_columns {
  readonly __typename: "ColumnRecord";
  readonly id: any;
  readonly title: string | null;
  readonly image: CaseStudiesByCategoryId_primaryPage_blocks_ColumnRowRecord_columns_image | null;
  readonly text: string | null;
  readonly blocks: ReadonlyArray<CaseStudiesByCategoryId_primaryPage_blocks_ColumnRowRecord_columns_blocks>;
  readonly textAlign: string | null;
  readonly width: string | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ColumnRowRecord {
  readonly __typename: "ColumnRowRecord";
  readonly id: any;
  readonly verticallyCenterAcrossColumns: any | null;
  readonly addLightBackground: any | null;
  readonly columns: ReadonlyArray<CaseStudiesByCategoryId_primaryPage_blocks_ColumnRowRecord_columns>;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_FormBlockRecord_form_formFields {
  readonly __typename: "FormFieldRecord";
  readonly id: any;
  readonly label: string | null;
  readonly fieldName: string | null;
  readonly fieldType: string | null;
  readonly required: any | null;
  readonly invisible: any | null;
  readonly grouped: any | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_FormBlockRecord_form {
  readonly __typename: "FormRecord";
  readonly title: string | null;
  readonly name: string | null;
  readonly action: string | null;
  readonly method: string | null;
  readonly formFields: ReadonlyArray<CaseStudiesByCategoryId_primaryPage_blocks_FormBlockRecord_form_formFields>;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_FormBlockRecord {
  readonly __typename: "FormBlockRecord";
  readonly id: any;
  readonly form: CaseStudiesByCategoryId_primaryPage_blocks_FormBlockRecord_form | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_FormulaRecord_step1_responsiveImage {
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

export interface CaseStudiesByCategoryId_primaryPage_blocks_FormulaRecord_step1 {
  readonly __typename: "FileField";
  readonly id: any;
  readonly responsiveImage: CaseStudiesByCategoryId_primaryPage_blocks_FormulaRecord_step1_responsiveImage | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_FormulaRecord_step2_responsiveImage {
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

export interface CaseStudiesByCategoryId_primaryPage_blocks_FormulaRecord_step2 {
  readonly __typename: "FileField";
  readonly id: any;
  readonly responsiveImage: CaseStudiesByCategoryId_primaryPage_blocks_FormulaRecord_step2_responsiveImage | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_FormulaRecord_step3_responsiveImage {
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

export interface CaseStudiesByCategoryId_primaryPage_blocks_FormulaRecord_step3 {
  readonly __typename: "FileField";
  readonly id: any;
  readonly responsiveImage: CaseStudiesByCategoryId_primaryPage_blocks_FormulaRecord_step3_responsiveImage | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_FormulaRecord {
  readonly __typename: "FormulaRecord";
  readonly id: any;
  readonly step1: CaseStudiesByCategoryId_primaryPage_blocks_FormulaRecord_step1 | null;
  readonly step2: CaseStudiesByCategoryId_primaryPage_blocks_FormulaRecord_step2 | null;
  readonly step3: CaseStudiesByCategoryId_primaryPage_blocks_FormulaRecord_step3 | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ItemsPanelRecord_panelItems_listImage_responsiveImage {
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

export interface CaseStudiesByCategoryId_primaryPage_blocks_ItemsPanelRecord_panelItems_listImage {
  readonly __typename: "FileField";
  readonly responsiveImage: CaseStudiesByCategoryId_primaryPage_blocks_ItemsPanelRecord_panelItems_listImage_responsiveImage | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ItemsPanelRecord_panelItems_detailImage_responsiveImage {
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

export interface CaseStudiesByCategoryId_primaryPage_blocks_ItemsPanelRecord_panelItems_detailImage {
  readonly __typename: "FileField";
  readonly responsiveImage: CaseStudiesByCategoryId_primaryPage_blocks_ItemsPanelRecord_panelItems_detailImage_responsiveImage | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ItemsPanelRecord_panelItems_detailLink_ContentPageRecord {
  readonly __typename: "ContentPageRecord";
  readonly slug: string | null;
  readonly title: string | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ItemsPanelRecord_panelItems_detailLink_CaseStudyRecord {
  readonly __typename: "CaseStudyRecord";
  readonly slug: string | null;
  readonly title: string | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ItemsPanelRecord_panelItems_detailLink_BlogPostRecord {
  readonly __typename: "BlogPostRecord";
  readonly slug: string | null;
  readonly title: string | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ItemsPanelRecord_panelItems_detailLink_PrimaryPageRecord {
  readonly __typename: "PrimaryPageRecord";
  readonly slug: string | null;
  readonly title: string | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ItemsPanelRecord_panelItems_detailLink_DownloadPageRecord {
  readonly __typename: "DownloadPageRecord";
  readonly slug: string | null;
  readonly title: string | null;
}

export type CaseStudiesByCategoryId_primaryPage_blocks_ItemsPanelRecord_panelItems_detailLink = CaseStudiesByCategoryId_primaryPage_blocks_ItemsPanelRecord_panelItems_detailLink_ContentPageRecord | CaseStudiesByCategoryId_primaryPage_blocks_ItemsPanelRecord_panelItems_detailLink_CaseStudyRecord | CaseStudiesByCategoryId_primaryPage_blocks_ItemsPanelRecord_panelItems_detailLink_BlogPostRecord | CaseStudiesByCategoryId_primaryPage_blocks_ItemsPanelRecord_panelItems_detailLink_PrimaryPageRecord | CaseStudiesByCategoryId_primaryPage_blocks_ItemsPanelRecord_panelItems_detailLink_DownloadPageRecord;

export interface CaseStudiesByCategoryId_primaryPage_blocks_ItemsPanelRecord_panelItems {
  readonly __typename: "PanelItemRecord";
  readonly id: any;
  readonly listTitle: string | null;
  readonly listImage: CaseStudiesByCategoryId_primaryPage_blocks_ItemsPanelRecord_panelItems_listImage | null;
  readonly detailImage: CaseStudiesByCategoryId_primaryPage_blocks_ItemsPanelRecord_panelItems_detailImage | null;
  readonly detailTitle: string | null;
  readonly detailText: string | null;
  readonly detailLink: CaseStudiesByCategoryId_primaryPage_blocks_ItemsPanelRecord_panelItems_detailLink | null;
  readonly detailLinkLabel: string | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ItemsPanelRecord {
  readonly __typename: "ItemsPanelRecord";
  readonly id: any;
  readonly panelItems: ReadonlyArray<CaseStudiesByCategoryId_primaryPage_blocks_ItemsPanelRecord_panelItems>;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ImageSetRecord_imageSet_responsiveImage {
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

export interface CaseStudiesByCategoryId_primaryPage_blocks_ImageSetRecord_imageSet {
  readonly __typename: "FileField";
  readonly id: any;
  readonly responsiveImage: CaseStudiesByCategoryId_primaryPage_blocks_ImageSetRecord_imageSet_responsiveImage | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ImageSetRecord {
  readonly __typename: "ImageSetRecord";
  readonly id: any;
  readonly imageSet: ReadonlyArray<CaseStudiesByCategoryId_primaryPage_blocks_ImageSetRecord_imageSet>;
  readonly verticallyCenterAcrossImages: any | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_RichTextRecord {
  readonly __typename: "RichTextRecord";
  readonly id: any;
  readonly richText: string | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ServiceSetRecord_services_serviceImage_responsiveImage {
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

export interface CaseStudiesByCategoryId_primaryPage_blocks_ServiceSetRecord_services_serviceImage {
  readonly __typename: "FileField";
  readonly responsiveImage: CaseStudiesByCategoryId_primaryPage_blocks_ServiceSetRecord_services_serviceImage_responsiveImage | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ServiceSetRecord_services {
  readonly __typename: "ServiceRecord";
  readonly id: any;
  readonly title: string | null;
  readonly text: string | null;
  readonly fontAwesomeIcon: string | null;
  readonly serviceImage: CaseStudiesByCategoryId_primaryPage_blocks_ServiceSetRecord_services_serviceImage | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ServiceSetRecord {
  readonly __typename: "ServiceSetRecord";
  readonly id: any;
  readonly hideTextContent: any | null;
  readonly textAlignment: string | null;
  readonly services: ReadonlyArray<CaseStudiesByCategoryId_primaryPage_blocks_ServiceSetRecord_services>;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_TeamRecord_members_image_responsiveImage {
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

export interface CaseStudiesByCategoryId_primaryPage_blocks_TeamRecord_members_image {
  readonly __typename: "FileField";
  readonly responsiveImage: CaseStudiesByCategoryId_primaryPage_blocks_TeamRecord_members_image_responsiveImage | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_TeamRecord_members {
  readonly __typename: "MemberRecord";
  readonly id: any;
  readonly name: string | null;
  readonly title: string | null;
  readonly image: CaseStudiesByCategoryId_primaryPage_blocks_TeamRecord_members_image | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_TeamRecord {
  readonly __typename: "TeamRecord";
  readonly id: any;
  readonly teamTitle: string | null;
  readonly members: ReadonlyArray<CaseStudiesByCategoryId_primaryPage_blocks_TeamRecord_members>;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_TitleTextRecord {
  readonly __typename: "TitleTextRecord";
  readonly id: any;
  readonly title: string | null;
  readonly text: string | null;
  readonly maxWidth: any | null;
  readonly addLightBackground: any | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_VideoRecord_video {
  readonly __typename: "VideoField";
  readonly height: any;
  readonly provider: string;
  readonly providerUid: string;
  readonly thumbnailUrl: string;
  readonly title: string;
  readonly url: string;
  readonly width: any;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_VideoRecord {
  readonly __typename: "VideoRecord";
  readonly id: any;
  readonly video: CaseStudiesByCategoryId_primaryPage_blocks_VideoRecord_video | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_VideoInternalRecord_thumbnail_responsiveImage {
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

export interface CaseStudiesByCategoryId_primaryPage_blocks_VideoInternalRecord_thumbnail {
  readonly __typename: "FileField";
  readonly id: any;
  readonly title: string | null;
  readonly responsiveImage: CaseStudiesByCategoryId_primaryPage_blocks_VideoInternalRecord_thumbnail_responsiveImage | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_VideoInternalRecord_video_video {
  readonly __typename: "UploadVideoField";
  readonly mp4Url: string | null;
  readonly streamingUrl: string;
  readonly thumbnailUrl: string;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_VideoInternalRecord_video {
  readonly __typename: "FileField";
  readonly height: any | null;
  readonly mimeType: string;
  readonly title: string | null;
  readonly video: CaseStudiesByCategoryId_primaryPage_blocks_VideoInternalRecord_video_video | null;
  readonly width: any | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_VideoInternalRecord {
  readonly __typename: "VideoInternalRecord";
  readonly id: any;
  readonly thumbnail: CaseStudiesByCategoryId_primaryPage_blocks_VideoInternalRecord_thumbnail | null;
  readonly video: CaseStudiesByCategoryId_primaryPage_blocks_VideoInternalRecord_video | null;
}

export interface CaseStudiesByCategoryId_primaryPage_blocks_ViewMoreLinkRecord {
  readonly __typename: "ViewMoreLinkRecord";
  readonly id: any;
  readonly text: string | null;
  readonly url: string | null;
}

export type CaseStudiesByCategoryId_primaryPage_blocks = CaseStudiesByCategoryId_primaryPage_blocks_CarouselRecord | CaseStudiesByCategoryId_primaryPage_blocks_AgencyModelRecord | CaseStudiesByCategoryId_primaryPage_blocks_BannerRecord | CaseStudiesByCategoryId_primaryPage_blocks_ButtonExternalRecord | CaseStudiesByCategoryId_primaryPage_blocks_ButtonInternalRecord | CaseStudiesByCategoryId_primaryPage_blocks_ClientSetRecord | CaseStudiesByCategoryId_primaryPage_blocks_ContentLinkSetRecord | CaseStudiesByCategoryId_primaryPage_blocks_ColumnRowRecord | CaseStudiesByCategoryId_primaryPage_blocks_FormBlockRecord | CaseStudiesByCategoryId_primaryPage_blocks_FormulaRecord | CaseStudiesByCategoryId_primaryPage_blocks_ItemsPanelRecord | CaseStudiesByCategoryId_primaryPage_blocks_ImageSetRecord | CaseStudiesByCategoryId_primaryPage_blocks_RichTextRecord | CaseStudiesByCategoryId_primaryPage_blocks_ServiceSetRecord | CaseStudiesByCategoryId_primaryPage_blocks_TeamRecord | CaseStudiesByCategoryId_primaryPage_blocks_TitleTextRecord | CaseStudiesByCategoryId_primaryPage_blocks_VideoRecord | CaseStudiesByCategoryId_primaryPage_blocks_VideoInternalRecord | CaseStudiesByCategoryId_primaryPage_blocks_ViewMoreLinkRecord;

export interface CaseStudiesByCategoryId_primaryPage__seoMetaTags {
  readonly __typename: "Tag";
  readonly attributes: any | null;
  readonly content: string | null;
  readonly tag: string;
}

export interface CaseStudiesByCategoryId_primaryPage {
  readonly __typename: "PrimaryPageRecord";
  readonly id: any;
  readonly title: string | null;
  readonly showBreadcrumbs: any | null;
  readonly textAlign: string | null;
  readonly blocks: ReadonlyArray<CaseStudiesByCategoryId_primaryPage_blocks>;
  /**
   * Generates SEO and Social card meta tags to be used in your frontend
   */
  readonly _seoMetaTags: ReadonlyArray<CaseStudiesByCategoryId_primaryPage__seoMetaTags>;
}

export interface CaseStudiesByCategoryId_site_faviconMetaTags {
  readonly __typename: "Tag";
  readonly attributes: any | null;
  readonly content: string | null;
  readonly tag: string;
}

export interface CaseStudiesByCategoryId_site {
  readonly __typename: "Site";
  readonly faviconMetaTags: ReadonlyArray<CaseStudiesByCategoryId_site_faviconMetaTags>;
}

export interface CaseStudiesByCategoryId_header_logo {
  readonly __typename: "FileField";
  readonly url: string;
  readonly title: string | null;
  readonly alt: string | null;
}

export interface CaseStudiesByCategoryId_header_links {
  readonly __typename: "PrimaryPageRecord";
  readonly id: any;
  readonly title: string | null;
  readonly slug: string | null;
}

export interface CaseStudiesByCategoryId_header_serviceLinks {
  readonly __typename: "PrimaryPageRecord";
  readonly id: any;
  readonly title: string | null;
  readonly slug: string | null;
}

export interface CaseStudiesByCategoryId_header_resourceLinks {
  readonly __typename: "PrimaryPageRecord";
  readonly id: any;
  readonly title: string | null;
  readonly slug: string | null;
}

export interface CaseStudiesByCategoryId_header {
  readonly __typename: "HeaderRecord";
  readonly logo: CaseStudiesByCategoryId_header_logo | null;
  readonly links: ReadonlyArray<CaseStudiesByCategoryId_header_links>;
  readonly serviceLinks: ReadonlyArray<CaseStudiesByCategoryId_header_serviceLinks>;
  readonly resourceLinks: ReadonlyArray<CaseStudiesByCategoryId_header_resourceLinks>;
  readonly contactLinkLabel: string | null;
}

export interface CaseStudiesByCategoryId_footer_footerLogo {
  readonly __typename: "FileField";
  readonly url: string;
  readonly title: string | null;
  readonly alt: string | null;
}

export interface CaseStudiesByCategoryId_footer_socialLinks {
  readonly __typename: "SocialLinkRecord";
  readonly id: any;
  readonly fontAwesomeIcon: string | null;
  readonly url: string | null;
}

export interface CaseStudiesByCategoryId_footer {
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
  readonly footerLogo: CaseStudiesByCategoryId_footer_footerLogo | null;
  readonly socialLinks: ReadonlyArray<CaseStudiesByCategoryId_footer_socialLinks>;
  readonly richText: string | null;
}

export interface CaseStudiesByCategoryId {
  /**
   * Returns a collection of records
   */
  readonly allCaseStudies: ReadonlyArray<CaseStudiesByCategoryId_allCaseStudies>;
  /**
   * Returns a collection of records
   */
  readonly allWorkCategories: ReadonlyArray<CaseStudiesByCategoryId_allWorkCategories>;
  /**
   * Returns a specific record
   */
  readonly primaryPage: CaseStudiesByCategoryId_primaryPage | null;
  /**
   * Returns the single instance record
   */
  readonly site: CaseStudiesByCategoryId_site;
  /**
   * Returns the single instance record
   */
  readonly header: CaseStudiesByCategoryId_header | null;
  /**
   * Returns the single instance record
   */
  readonly footer: CaseStudiesByCategoryId_footer | null;
}

export interface CaseStudiesByCategoryIdVariables {
  readonly id?: any | null;
}
