/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllBlogPosts
// ====================================================

export interface AllBlogPosts_allBlogPosts_categories {
  readonly __typename: "CategoryRecord";
  readonly name: string | null;
  readonly slug: string | null;
}

export interface AllBlogPosts_allBlogPosts_previewImage_responsiveImage {
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

export interface AllBlogPosts_allBlogPosts_previewImage {
  readonly __typename: "FileField";
  readonly responsiveImage: AllBlogPosts_allBlogPosts_previewImage_responsiveImage | null;
}

export interface AllBlogPosts_allBlogPosts_previewImageLg_responsiveImage {
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

export interface AllBlogPosts_allBlogPosts_previewImageLg {
  readonly __typename: "FileField";
  readonly responsiveImage: AllBlogPosts_allBlogPosts_previewImageLg_responsiveImage | null;
}

export interface AllBlogPosts_allBlogPosts_previewImageSm_responsiveImage {
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

export interface AllBlogPosts_allBlogPosts_previewImageSm {
  readonly __typename: "FileField";
  readonly responsiveImage: AllBlogPosts_allBlogPosts_previewImageSm_responsiveImage | null;
}

export interface AllBlogPosts_allBlogPosts_previewImageCol_responsiveImage {
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

export interface AllBlogPosts_allBlogPosts_previewImageCol {
  readonly __typename: "FileField";
  readonly responsiveImage: AllBlogPosts_allBlogPosts_previewImageCol_responsiveImage | null;
}

export interface AllBlogPosts_allBlogPosts {
  readonly __typename: "BlogPostRecord";
  readonly id: any;
  readonly slug: string | null;
  readonly title: string | null;
  readonly subtitle: string | null;
  readonly description: string | null;
  readonly categories: ReadonlyArray<AllBlogPosts_allBlogPosts_categories>;
  readonly previewImage: AllBlogPosts_allBlogPosts_previewImage | null;
  readonly previewImageLg: AllBlogPosts_allBlogPosts_previewImageLg | null;
  readonly previewImageSm: AllBlogPosts_allBlogPosts_previewImageSm | null;
  readonly previewImageCol: AllBlogPosts_allBlogPosts_previewImageCol | null;
}

export interface AllBlogPosts_allCategories {
  readonly __typename: "CategoryRecord";
  readonly id: any;
  readonly name: string | null;
  readonly slug: string | null;
}

export interface AllBlogPosts_primaryPage_blocks_AgencyModelRecord_columns_image_responsiveImage {
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

export interface AllBlogPosts_primaryPage_blocks_AgencyModelRecord_columns_image {
  readonly __typename: "FileField";
  readonly responsiveImage: AllBlogPosts_primaryPage_blocks_AgencyModelRecord_columns_image_responsiveImage | null;
}

export interface AllBlogPosts_primaryPage_blocks_AgencyModelRecord_columns_services {
  readonly __typename: "ServiceRecord";
  readonly id: any;
  readonly title: string | null;
  readonly text: string | null;
}

export interface AllBlogPosts_primaryPage_blocks_AgencyModelRecord_columns {
  readonly __typename: "AgencyColumnRecord";
  readonly id: any;
  readonly image: AllBlogPosts_primaryPage_blocks_AgencyModelRecord_columns_image | null;
  readonly title: string | null;
  readonly services: ReadonlyArray<AllBlogPosts_primaryPage_blocks_AgencyModelRecord_columns_services>;
}

export interface AllBlogPosts_primaryPage_blocks_AgencyModelRecord {
  readonly __typename: "AgencyModelRecord";
  readonly id: any;
  readonly text: string | null;
  readonly title: string | null;
  readonly columns: ReadonlyArray<AllBlogPosts_primaryPage_blocks_AgencyModelRecord_columns>;
}

export interface AllBlogPosts_primaryPage_blocks_ArticleRecord_image_responsiveImage {
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

export interface AllBlogPosts_primaryPage_blocks_ArticleRecord_image {
  readonly __typename: "FileField";
  readonly responsiveImage: AllBlogPosts_primaryPage_blocks_ArticleRecord_image_responsiveImage | null;
}

export interface AllBlogPosts_primaryPage_blocks_ArticleRecord {
  readonly __typename: "ArticleRecord";
  readonly id: any;
  readonly title: string | null;
  readonly text: string | null;
  readonly image: AllBlogPosts_primaryPage_blocks_ArticleRecord_image | null;
}

export interface AllBlogPosts_primaryPage_blocks_BannerRecord_backgroundImage_responsiveImage {
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

export interface AllBlogPosts_primaryPage_blocks_BannerRecord_backgroundImage {
  readonly __typename: "FileField";
  readonly responsiveImage: AllBlogPosts_primaryPage_blocks_BannerRecord_backgroundImage_responsiveImage | null;
}

export interface AllBlogPosts_primaryPage_blocks_BannerRecord_link {
  readonly __typename: "PrimaryPageRecord";
  readonly slug: string | null;
}

export interface AllBlogPosts_primaryPage_blocks_BannerRecord {
  readonly __typename: "BannerRecord";
  readonly id: any;
  readonly title: string | null;
  readonly text: string | null;
  readonly backgroundImage: AllBlogPosts_primaryPage_blocks_BannerRecord_backgroundImage | null;
  readonly showContactButton: any | null;
  readonly contactButtonLabel: string | null;
  readonly link: AllBlogPosts_primaryPage_blocks_BannerRecord_link | null;
}

export interface AllBlogPosts_primaryPage_blocks_ButtonExternalRecord {
  readonly __typename: "ButtonExternalRecord";
  readonly id: any;
  readonly label: string | null;
  readonly url: string | null;
  readonly align: string | null;
  readonly openInNewTab: any | null;
}

export interface AllBlogPosts_primaryPage_blocks_ButtonInternalRecord_link_ContentPageRecord {
  readonly __typename: "ContentPageRecord";
  readonly slug: string | null;
}

export interface AllBlogPosts_primaryPage_blocks_ButtonInternalRecord_link_CaseStudyRecord {
  readonly __typename: "CaseStudyRecord";
  readonly slug: string | null;
}

export interface AllBlogPosts_primaryPage_blocks_ButtonInternalRecord_link_BlogPostRecord {
  readonly __typename: "BlogPostRecord";
  readonly slug: string | null;
}

export interface AllBlogPosts_primaryPage_blocks_ButtonInternalRecord_link_PrimaryPageRecord {
  readonly __typename: "PrimaryPageRecord";
  readonly slug: string | null;
}

export interface AllBlogPosts_primaryPage_blocks_ButtonInternalRecord_link_DownloadPageRecord {
  readonly __typename: "DownloadPageRecord";
  readonly slug: string | null;
}

export type AllBlogPosts_primaryPage_blocks_ButtonInternalRecord_link = AllBlogPosts_primaryPage_blocks_ButtonInternalRecord_link_ContentPageRecord | AllBlogPosts_primaryPage_blocks_ButtonInternalRecord_link_CaseStudyRecord | AllBlogPosts_primaryPage_blocks_ButtonInternalRecord_link_BlogPostRecord | AllBlogPosts_primaryPage_blocks_ButtonInternalRecord_link_PrimaryPageRecord | AllBlogPosts_primaryPage_blocks_ButtonInternalRecord_link_DownloadPageRecord;

export interface AllBlogPosts_primaryPage_blocks_ButtonInternalRecord {
  readonly __typename: "ButtonInternalRecord";
  readonly id: any;
  readonly label: string | null;
  readonly link: AllBlogPosts_primaryPage_blocks_ButtonInternalRecord_link | null;
  readonly align: string | null;
  readonly openInNewTab: any | null;
}

export interface AllBlogPosts_primaryPage_blocks_CardStackRecord_cards_ExternalCardItemRecord_image_responsiveImage {
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

export interface AllBlogPosts_primaryPage_blocks_CardStackRecord_cards_ExternalCardItemRecord_image {
  readonly __typename: "FileField";
  readonly responsiveImage: AllBlogPosts_primaryPage_blocks_CardStackRecord_cards_ExternalCardItemRecord_image_responsiveImage | null;
}

export interface AllBlogPosts_primaryPage_blocks_CardStackRecord_cards_ExternalCardItemRecord {
  readonly __typename: "ExternalCardItemRecord";
  readonly id: any;
  readonly title: string | null;
  readonly description: string | null;
  readonly image: AllBlogPosts_primaryPage_blocks_CardStackRecord_cards_ExternalCardItemRecord_image | null;
  readonly buttonLabel: string | null;
  readonly buttonLink: string | null;
  readonly openInNewTab: any | null;
}

export interface AllBlogPosts_primaryPage_blocks_CardStackRecord_cards_InternalCardItemRecord_link_previewImage_responsiveImage {
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

export interface AllBlogPosts_primaryPage_blocks_CardStackRecord_cards_InternalCardItemRecord_link_previewImage {
  readonly __typename: "FileField";
  readonly responsiveImage: AllBlogPosts_primaryPage_blocks_CardStackRecord_cards_InternalCardItemRecord_link_previewImage_responsiveImage | null;
}

export interface AllBlogPosts_primaryPage_blocks_CardStackRecord_cards_InternalCardItemRecord_link {
  readonly __typename: "ServiceRecord";
  readonly id: any;
  readonly title: string | null;
  readonly text: string | null;
  readonly slug: string | null;
  readonly themeColor: string | null;
  readonly previewImage: AllBlogPosts_primaryPage_blocks_CardStackRecord_cards_InternalCardItemRecord_link_previewImage | null;
}

export interface AllBlogPosts_primaryPage_blocks_CardStackRecord_cards_InternalCardItemRecord {
  readonly __typename: "InternalCardItemRecord";
  readonly link: AllBlogPosts_primaryPage_blocks_CardStackRecord_cards_InternalCardItemRecord_link | null;
}

export type AllBlogPosts_primaryPage_blocks_CardStackRecord_cards = AllBlogPosts_primaryPage_blocks_CardStackRecord_cards_ExternalCardItemRecord | AllBlogPosts_primaryPage_blocks_CardStackRecord_cards_InternalCardItemRecord;

export interface AllBlogPosts_primaryPage_blocks_CardStackRecord {
  readonly __typename: "CardStackRecord";
  readonly id: any;
  readonly maxColumns: any | null;
  readonly cards: ReadonlyArray<AllBlogPosts_primaryPage_blocks_CardStackRecord_cards>;
}

export interface AllBlogPosts_primaryPage_blocks_CarouselRecord_items_ExternalCardItemRecord {
  readonly __typename: "ExternalCardItemRecord";
  readonly id: any;
  readonly title: string | null;
  readonly description: string | null;
}

export interface AllBlogPosts_primaryPage_blocks_CarouselRecord_items_InternalCardItemRecord_link {
  readonly __typename: "ServiceRecord";
  readonly id: any;
  readonly themeColor: string | null;
  readonly title: string | null;
  readonly text: string | null;
}

export interface AllBlogPosts_primaryPage_blocks_CarouselRecord_items_InternalCardItemRecord {
  readonly __typename: "InternalCardItemRecord";
  readonly link: AllBlogPosts_primaryPage_blocks_CarouselRecord_items_InternalCardItemRecord_link | null;
}

export type AllBlogPosts_primaryPage_blocks_CarouselRecord_items = AllBlogPosts_primaryPage_blocks_CarouselRecord_items_ExternalCardItemRecord | AllBlogPosts_primaryPage_blocks_CarouselRecord_items_InternalCardItemRecord;

export interface AllBlogPosts_primaryPage_blocks_CarouselRecord_link {
  readonly __typename: "PrimaryPageRecord";
  readonly slug: string | null;
}

export interface AllBlogPosts_primaryPage_blocks_CarouselRecord {
  readonly __typename: "CarouselRecord";
  readonly id: any;
  readonly buttonLabel: string | null;
  readonly items: ReadonlyArray<AllBlogPosts_primaryPage_blocks_CarouselRecord_items>;
  readonly link: AllBlogPosts_primaryPage_blocks_CarouselRecord_link | null;
}

export interface AllBlogPosts_primaryPage_blocks_CaseStudyTileRecord_caseStudy_previewImage_responsiveImage {
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

export interface AllBlogPosts_primaryPage_blocks_CaseStudyTileRecord_caseStudy_previewImage {
  readonly __typename: "FileField";
  readonly responsiveImage: AllBlogPosts_primaryPage_blocks_CaseStudyTileRecord_caseStudy_previewImage_responsiveImage | null;
}

export interface AllBlogPosts_primaryPage_blocks_CaseStudyTileRecord_caseStudy_previewImageSm_responsiveImage {
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

export interface AllBlogPosts_primaryPage_blocks_CaseStudyTileRecord_caseStudy_previewImageSm {
  readonly __typename: "FileField";
  readonly responsiveImage: AllBlogPosts_primaryPage_blocks_CaseStudyTileRecord_caseStudy_previewImageSm_responsiveImage | null;
}

export interface AllBlogPosts_primaryPage_blocks_CaseStudyTileRecord_caseStudy_previewImageCol_responsiveImage {
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

export interface AllBlogPosts_primaryPage_blocks_CaseStudyTileRecord_caseStudy_previewImageCol {
  readonly __typename: "FileField";
  readonly responsiveImage: AllBlogPosts_primaryPage_blocks_CaseStudyTileRecord_caseStudy_previewImageCol_responsiveImage | null;
}

export interface AllBlogPosts_primaryPage_blocks_CaseStudyTileRecord_caseStudy {
  readonly __typename: "CaseStudyRecord";
  readonly slug: string | null;
  readonly description: string | null;
  readonly previewImage: AllBlogPosts_primaryPage_blocks_CaseStudyTileRecord_caseStudy_previewImage | null;
  readonly previewImageSm: AllBlogPosts_primaryPage_blocks_CaseStudyTileRecord_caseStudy_previewImageSm | null;
  readonly previewImageCol: AllBlogPosts_primaryPage_blocks_CaseStudyTileRecord_caseStudy_previewImageCol | null;
}

export interface AllBlogPosts_primaryPage_blocks_CaseStudyTileRecord {
  readonly __typename: "CaseStudyTileRecord";
  readonly id: any;
  readonly title: string | null;
  readonly overline: string | null;
  readonly buttonLabel: string | null;
  readonly caseStudy: AllBlogPosts_primaryPage_blocks_CaseStudyTileRecord_caseStudy | null;
}

export interface AllBlogPosts_primaryPage_blocks_ClientSetRecord_link {
  readonly __typename: "PrimaryPageRecord";
  readonly slug: string | null;
}

export interface AllBlogPosts_primaryPage_blocks_ClientSetRecord_clientSet_logo_responsiveImage {
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

export interface AllBlogPosts_primaryPage_blocks_ClientSetRecord_clientSet_logo {
  readonly __typename: "FileField";
  readonly responsiveImage: AllBlogPosts_primaryPage_blocks_ClientSetRecord_clientSet_logo_responsiveImage | null;
}

export interface AllBlogPosts_primaryPage_blocks_ClientSetRecord_clientSet {
  readonly __typename: "ClientRecord";
  readonly id: any;
  readonly name: string | null;
  readonly logo: AllBlogPosts_primaryPage_blocks_ClientSetRecord_clientSet_logo | null;
}

export interface AllBlogPosts_primaryPage_blocks_ClientSetRecord {
  readonly __typename: "ClientSetRecord";
  readonly id: any;
  readonly title: string | null;
  readonly subtitle: string | null;
  readonly buttonLabel: string | null;
  readonly link: AllBlogPosts_primaryPage_blocks_ClientSetRecord_link | null;
  readonly clientSet: ReadonlyArray<AllBlogPosts_primaryPage_blocks_ClientSetRecord_clientSet>;
}

export interface AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImage_responsiveImage {
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

export interface AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImage {
  readonly __typename: "FileField";
  readonly responsiveImage: AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImage_responsiveImage | null;
}

export interface AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImageLg_responsiveImage {
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

export interface AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImageLg {
  readonly __typename: "FileField";
  readonly responsiveImage: AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImageLg_responsiveImage | null;
}

export interface AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImageSm_responsiveImage {
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

export interface AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImageSm {
  readonly __typename: "FileField";
  readonly responsiveImage: AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImageSm_responsiveImage | null;
}

export interface AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImageCol_responsiveImage {
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

export interface AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImageCol {
  readonly __typename: "FileField";
  readonly responsiveImage: AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImageCol_responsiveImage | null;
}

export interface AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord {
  readonly __typename: "PrimaryPageRecord";
  readonly id: any;
  readonly slug: string | null;
  readonly title: string | null;
  readonly description: string | null;
  readonly previewImage: AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImage | null;
  readonly previewImageLg: AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImageLg | null;
  readonly previewImageSm: AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImageSm | null;
  readonly previewImageCol: AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_previewImageCol | null;
}

export interface AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImage_responsiveImage {
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

export interface AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImage {
  readonly __typename: "FileField";
  readonly responsiveImage: AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImage_responsiveImage | null;
}

export interface AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImageLg_responsiveImage {
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

export interface AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImageLg {
  readonly __typename: "FileField";
  readonly responsiveImage: AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImageLg_responsiveImage | null;
}

export interface AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImageSm_responsiveImage {
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

export interface AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImageSm {
  readonly __typename: "FileField";
  readonly responsiveImage: AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImageSm_responsiveImage | null;
}

export interface AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImageCol_responsiveImage {
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

export interface AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImageCol {
  readonly __typename: "FileField";
  readonly responsiveImage: AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImageCol_responsiveImage | null;
}

export interface AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_BlogPostRecord {
  readonly __typename: "BlogPostRecord";
  readonly id: any;
  readonly slug: string | null;
  readonly title: string | null;
  readonly subtitle: string | null;
  readonly description: string | null;
  readonly previewImage: AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImage | null;
  readonly previewImageLg: AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImageLg | null;
  readonly previewImageSm: AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImageSm | null;
  readonly previewImageCol: AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_BlogPostRecord_previewImageCol | null;
}

export interface AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_CaseStudyRecord_previewImage_responsiveImage {
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

export interface AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_CaseStudyRecord_previewImage {
  readonly __typename: "FileField";
  readonly responsiveImage: AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_CaseStudyRecord_previewImage_responsiveImage | null;
}

export interface AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_CaseStudyRecord_previewImageLg_responsiveImage {
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

export interface AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_CaseStudyRecord_previewImageLg {
  readonly __typename: "FileField";
  readonly responsiveImage: AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_CaseStudyRecord_previewImageLg_responsiveImage | null;
}

export interface AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_CaseStudyRecord_previewImageSm_responsiveImage {
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

export interface AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_CaseStudyRecord_previewImageSm {
  readonly __typename: "FileField";
  readonly responsiveImage: AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_CaseStudyRecord_previewImageSm_responsiveImage | null;
}

export interface AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_CaseStudyRecord_previewImageCol_responsiveImage {
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

export interface AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_CaseStudyRecord_previewImageCol {
  readonly __typename: "FileField";
  readonly responsiveImage: AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_CaseStudyRecord_previewImageCol_responsiveImage | null;
}

export interface AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_CaseStudyRecord {
  readonly __typename: "CaseStudyRecord";
  readonly id: any;
  readonly slug: string | null;
  readonly title: string | null;
  readonly pretitle: string | null;
  readonly description: string | null;
  readonly previewImage: AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_CaseStudyRecord_previewImage | null;
  readonly previewImageLg: AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_CaseStudyRecord_previewImageLg | null;
  readonly previewImageSm: AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_CaseStudyRecord_previewImageSm | null;
  readonly previewImageCol: AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_CaseStudyRecord_previewImageCol | null;
}

export interface AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImage_responsiveImage {
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

export interface AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImage {
  readonly __typename: "FileField";
  readonly responsiveImage: AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImage_responsiveImage | null;
}

export interface AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImageLg_responsiveImage {
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

export interface AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImageLg {
  readonly __typename: "FileField";
  readonly responsiveImage: AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImageLg_responsiveImage | null;
}

export interface AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImageSm_responsiveImage {
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

export interface AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImageSm {
  readonly __typename: "FileField";
  readonly responsiveImage: AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImageSm_responsiveImage | null;
}

export interface AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImageCol_responsiveImage {
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

export interface AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImageCol {
  readonly __typename: "FileField";
  readonly responsiveImage: AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImageCol_responsiveImage | null;
}

export interface AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_ContentPageRecord {
  readonly __typename: "ContentPageRecord";
  readonly id: any;
  readonly slug: string | null;
  readonly title: string | null;
  readonly description: string | null;
  readonly previewImage: AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImage | null;
  readonly previewImageLg: AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImageLg | null;
  readonly previewImageSm: AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImageSm | null;
  readonly previewImageCol: AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_ContentPageRecord_previewImageCol | null;
}

export interface AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImage_responsiveImage {
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

export interface AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImage {
  readonly __typename: "FileField";
  readonly responsiveImage: AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImage_responsiveImage | null;
}

export interface AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImageLg_responsiveImage {
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

export interface AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImageLg {
  readonly __typename: "FileField";
  readonly responsiveImage: AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImageLg_responsiveImage | null;
}

export interface AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImageSm_responsiveImage {
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

export interface AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImageSm {
  readonly __typename: "FileField";
  readonly responsiveImage: AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImageSm_responsiveImage | null;
}

export interface AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImageCol_responsiveImage {
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

export interface AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImageCol {
  readonly __typename: "FileField";
  readonly responsiveImage: AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImageCol_responsiveImage | null;
}

export interface AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_DownloadPageRecord {
  readonly __typename: "DownloadPageRecord";
  readonly id: any;
  readonly slug: string | null;
  readonly title: string | null;
  readonly description: string | null;
  readonly previewImage: AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImage | null;
  readonly previewImageLg: AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImageLg | null;
  readonly previewImageSm: AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImageSm | null;
  readonly previewImageCol: AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_DownloadPageRecord_previewImageCol | null;
}

export type AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links = AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord | AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_BlogPostRecord | AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_CaseStudyRecord | AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_ContentPageRecord | AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links_DownloadPageRecord;

export interface AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord {
  readonly __typename: "ContentLinkSetRecord";
  readonly id: any;
  readonly displaySize: string | null;
  readonly imageAlign: string | null;
  readonly isSlider: any | null;
  readonly callToActionLabel: string | null;
  readonly links: ReadonlyArray<AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord_links>;
}

export interface AllBlogPosts_primaryPage_blocks_ColumnRowRecord_columns_image_responsiveImage {
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

export interface AllBlogPosts_primaryPage_blocks_ColumnRowRecord_columns_image {
  readonly __typename: "FileField";
  readonly responsiveImage: AllBlogPosts_primaryPage_blocks_ColumnRowRecord_columns_image_responsiveImage | null;
}

export interface AllBlogPosts_primaryPage_blocks_ColumnRowRecord_columns_blocks_AgencyModelRecord {
  readonly __typename: "AgencyModelRecord" | "ImageSetRecord";
}

export interface AllBlogPosts_primaryPage_blocks_ColumnRowRecord_columns_blocks_ButtonExternalRecord {
  readonly __typename: "ButtonExternalRecord";
  readonly id: any;
  readonly label: string | null;
  readonly url: string | null;
  readonly align: string | null;
  readonly openInNewTab: any | null;
}

export interface AllBlogPosts_primaryPage_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link_ContentPageRecord {
  readonly __typename: "ContentPageRecord";
  readonly slug: string | null;
}

export interface AllBlogPosts_primaryPage_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link_CaseStudyRecord {
  readonly __typename: "CaseStudyRecord";
  readonly slug: string | null;
}

export interface AllBlogPosts_primaryPage_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link_BlogPostRecord {
  readonly __typename: "BlogPostRecord";
  readonly slug: string | null;
}

export interface AllBlogPosts_primaryPage_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link_PrimaryPageRecord {
  readonly __typename: "PrimaryPageRecord";
  readonly slug: string | null;
}

export interface AllBlogPosts_primaryPage_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link_DownloadPageRecord {
  readonly __typename: "DownloadPageRecord";
  readonly slug: string | null;
}

export type AllBlogPosts_primaryPage_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link = AllBlogPosts_primaryPage_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link_ContentPageRecord | AllBlogPosts_primaryPage_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link_CaseStudyRecord | AllBlogPosts_primaryPage_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link_BlogPostRecord | AllBlogPosts_primaryPage_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link_PrimaryPageRecord | AllBlogPosts_primaryPage_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link_DownloadPageRecord;

export interface AllBlogPosts_primaryPage_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord {
  readonly __typename: "ButtonInternalRecord";
  readonly id: any;
  readonly label: string | null;
  readonly link: AllBlogPosts_primaryPage_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord_link | null;
  readonly align: string | null;
  readonly openInNewTab: any | null;
}

export interface AllBlogPosts_primaryPage_blocks_ColumnRowRecord_columns_blocks_FormBlockRecord_form_formFields {
  readonly __typename: "FormFieldRecord";
  readonly id: any;
  readonly label: string | null;
  readonly fieldName: string | null;
  readonly fieldType: string | null;
  readonly required: any | null;
  readonly invisible: any | null;
  readonly grouped: any | null;
}

export interface AllBlogPosts_primaryPage_blocks_ColumnRowRecord_columns_blocks_FormBlockRecord_form {
  readonly __typename: "FormRecord";
  readonly title: string | null;
  readonly name: string | null;
  readonly action: string | null;
  readonly method: string | null;
  readonly formFields: ReadonlyArray<AllBlogPosts_primaryPage_blocks_ColumnRowRecord_columns_blocks_FormBlockRecord_form_formFields>;
}

export interface AllBlogPosts_primaryPage_blocks_ColumnRowRecord_columns_blocks_FormBlockRecord {
  readonly __typename: "FormBlockRecord";
  readonly id: any;
  readonly form: AllBlogPosts_primaryPage_blocks_ColumnRowRecord_columns_blocks_FormBlockRecord_form | null;
}

export interface AllBlogPosts_primaryPage_blocks_ColumnRowRecord_columns_blocks_RichTextRecord {
  readonly __typename: "RichTextRecord";
  readonly id: any;
  readonly richText: string | null;
}

export interface AllBlogPosts_primaryPage_blocks_ColumnRowRecord_columns_blocks_VideoRecord_video {
  readonly __typename: "VideoField";
  readonly height: any;
  readonly provider: string;
  readonly providerUid: string;
  readonly thumbnailUrl: string;
  readonly title: string;
  readonly url: string;
  readonly width: any;
}

export interface AllBlogPosts_primaryPage_blocks_ColumnRowRecord_columns_blocks_VideoRecord {
  readonly __typename: "VideoRecord";
  readonly id: any;
  readonly video: AllBlogPosts_primaryPage_blocks_ColumnRowRecord_columns_blocks_VideoRecord_video | null;
}

export interface AllBlogPosts_primaryPage_blocks_ColumnRowRecord_columns_blocks_VideoInternalRecord_thumbnail_responsiveImage {
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

export interface AllBlogPosts_primaryPage_blocks_ColumnRowRecord_columns_blocks_VideoInternalRecord_thumbnail {
  readonly __typename: "FileField";
  readonly id: any;
  readonly title: string | null;
  readonly responsiveImage: AllBlogPosts_primaryPage_blocks_ColumnRowRecord_columns_blocks_VideoInternalRecord_thumbnail_responsiveImage | null;
}

export interface AllBlogPosts_primaryPage_blocks_ColumnRowRecord_columns_blocks_VideoInternalRecord_video_video {
  readonly __typename: "UploadVideoField";
  readonly mp4Url: string | null;
  readonly streamingUrl: string;
  readonly thumbnailUrl: string;
}

export interface AllBlogPosts_primaryPage_blocks_ColumnRowRecord_columns_blocks_VideoInternalRecord_video {
  readonly __typename: "FileField";
  readonly height: any | null;
  readonly mimeType: string;
  readonly title: string | null;
  readonly video: AllBlogPosts_primaryPage_blocks_ColumnRowRecord_columns_blocks_VideoInternalRecord_video_video | null;
  readonly width: any | null;
}

export interface AllBlogPosts_primaryPage_blocks_ColumnRowRecord_columns_blocks_VideoInternalRecord {
  readonly __typename: "VideoInternalRecord";
  readonly id: any;
  readonly thumbnail: AllBlogPosts_primaryPage_blocks_ColumnRowRecord_columns_blocks_VideoInternalRecord_thumbnail | null;
  readonly video: AllBlogPosts_primaryPage_blocks_ColumnRowRecord_columns_blocks_VideoInternalRecord_video | null;
}

export type AllBlogPosts_primaryPage_blocks_ColumnRowRecord_columns_blocks = AllBlogPosts_primaryPage_blocks_ColumnRowRecord_columns_blocks_AgencyModelRecord | AllBlogPosts_primaryPage_blocks_ColumnRowRecord_columns_blocks_ButtonExternalRecord | AllBlogPosts_primaryPage_blocks_ColumnRowRecord_columns_blocks_ButtonInternalRecord | AllBlogPosts_primaryPage_blocks_ColumnRowRecord_columns_blocks_FormBlockRecord | AllBlogPosts_primaryPage_blocks_ColumnRowRecord_columns_blocks_RichTextRecord | AllBlogPosts_primaryPage_blocks_ColumnRowRecord_columns_blocks_VideoRecord | AllBlogPosts_primaryPage_blocks_ColumnRowRecord_columns_blocks_VideoInternalRecord;

export interface AllBlogPosts_primaryPage_blocks_ColumnRowRecord_columns {
  readonly __typename: "ColumnRecord";
  readonly id: any;
  readonly title: string | null;
  readonly image: AllBlogPosts_primaryPage_blocks_ColumnRowRecord_columns_image | null;
  readonly text: string | null;
  readonly blocks: ReadonlyArray<AllBlogPosts_primaryPage_blocks_ColumnRowRecord_columns_blocks>;
  readonly textAlign: string | null;
  readonly width: string | null;
}

export interface AllBlogPosts_primaryPage_blocks_ColumnRowRecord {
  readonly __typename: "ColumnRowRecord";
  readonly id: any;
  readonly verticallyCenterAcrossColumns: any | null;
  readonly addLightBackground: any | null;
  readonly columns: ReadonlyArray<AllBlogPosts_primaryPage_blocks_ColumnRowRecord_columns>;
}

export interface AllBlogPosts_primaryPage_blocks_FormBlockRecord_form_formFields {
  readonly __typename: "FormFieldRecord";
  readonly id: any;
  readonly label: string | null;
  readonly fieldName: string | null;
  readonly fieldType: string | null;
  readonly required: any | null;
  readonly invisible: any | null;
  readonly grouped: any | null;
}

export interface AllBlogPosts_primaryPage_blocks_FormBlockRecord_form {
  readonly __typename: "FormRecord";
  readonly title: string | null;
  readonly name: string | null;
  readonly action: string | null;
  readonly method: string | null;
  readonly formFields: ReadonlyArray<AllBlogPosts_primaryPage_blocks_FormBlockRecord_form_formFields>;
}

export interface AllBlogPosts_primaryPage_blocks_FormBlockRecord {
  readonly __typename: "FormBlockRecord";
  readonly id: any;
  readonly form: AllBlogPosts_primaryPage_blocks_FormBlockRecord_form | null;
}

export interface AllBlogPosts_primaryPage_blocks_FormulaRecord_step1_responsiveImage {
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

export interface AllBlogPosts_primaryPage_blocks_FormulaRecord_step1 {
  readonly __typename: "FileField";
  readonly id: any;
  readonly responsiveImage: AllBlogPosts_primaryPage_blocks_FormulaRecord_step1_responsiveImage | null;
}

export interface AllBlogPosts_primaryPage_blocks_FormulaRecord_step2_responsiveImage {
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

export interface AllBlogPosts_primaryPage_blocks_FormulaRecord_step2 {
  readonly __typename: "FileField";
  readonly id: any;
  readonly responsiveImage: AllBlogPosts_primaryPage_blocks_FormulaRecord_step2_responsiveImage | null;
}

export interface AllBlogPosts_primaryPage_blocks_FormulaRecord_step3_responsiveImage {
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

export interface AllBlogPosts_primaryPage_blocks_FormulaRecord_step3 {
  readonly __typename: "FileField";
  readonly id: any;
  readonly responsiveImage: AllBlogPosts_primaryPage_blocks_FormulaRecord_step3_responsiveImage | null;
}

export interface AllBlogPosts_primaryPage_blocks_FormulaRecord {
  readonly __typename: "FormulaRecord";
  readonly id: any;
  readonly step1: AllBlogPosts_primaryPage_blocks_FormulaRecord_step1 | null;
  readonly step2: AllBlogPosts_primaryPage_blocks_FormulaRecord_step2 | null;
  readonly step3: AllBlogPosts_primaryPage_blocks_FormulaRecord_step3 | null;
}

export interface AllBlogPosts_primaryPage_blocks_ImageSetRecord_imageSet_responsiveImage {
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

export interface AllBlogPosts_primaryPage_blocks_ImageSetRecord_imageSet {
  readonly __typename: "FileField";
  readonly id: any;
  readonly responsiveImage: AllBlogPosts_primaryPage_blocks_ImageSetRecord_imageSet_responsiveImage | null;
}

export interface AllBlogPosts_primaryPage_blocks_ImageSetRecord {
  readonly __typename: "ImageSetRecord";
  readonly id: any;
  readonly imageSet: ReadonlyArray<AllBlogPosts_primaryPage_blocks_ImageSetRecord_imageSet>;
  readonly verticallyCenterAcrossImages: any | null;
}

export interface AllBlogPosts_primaryPage_blocks_ItemsPanelRecord_panelItems_listImage_responsiveImage {
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

export interface AllBlogPosts_primaryPage_blocks_ItemsPanelRecord_panelItems_listImage {
  readonly __typename: "FileField";
  readonly responsiveImage: AllBlogPosts_primaryPage_blocks_ItemsPanelRecord_panelItems_listImage_responsiveImage | null;
}

export interface AllBlogPosts_primaryPage_blocks_ItemsPanelRecord_panelItems_detailImage_responsiveImage {
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

export interface AllBlogPosts_primaryPage_blocks_ItemsPanelRecord_panelItems_detailImage {
  readonly __typename: "FileField";
  readonly responsiveImage: AllBlogPosts_primaryPage_blocks_ItemsPanelRecord_panelItems_detailImage_responsiveImage | null;
}

export interface AllBlogPosts_primaryPage_blocks_ItemsPanelRecord_panelItems_detailLink_ContentPageRecord {
  readonly __typename: "ContentPageRecord";
  readonly slug: string | null;
  readonly title: string | null;
}

export interface AllBlogPosts_primaryPage_blocks_ItemsPanelRecord_panelItems_detailLink_CaseStudyRecord {
  readonly __typename: "CaseStudyRecord";
  readonly slug: string | null;
  readonly title: string | null;
}

export interface AllBlogPosts_primaryPage_blocks_ItemsPanelRecord_panelItems_detailLink_BlogPostRecord {
  readonly __typename: "BlogPostRecord";
  readonly slug: string | null;
  readonly title: string | null;
}

export interface AllBlogPosts_primaryPage_blocks_ItemsPanelRecord_panelItems_detailLink_PrimaryPageRecord {
  readonly __typename: "PrimaryPageRecord";
  readonly slug: string | null;
  readonly title: string | null;
}

export interface AllBlogPosts_primaryPage_blocks_ItemsPanelRecord_panelItems_detailLink_DownloadPageRecord {
  readonly __typename: "DownloadPageRecord";
  readonly slug: string | null;
  readonly title: string | null;
}

export type AllBlogPosts_primaryPage_blocks_ItemsPanelRecord_panelItems_detailLink = AllBlogPosts_primaryPage_blocks_ItemsPanelRecord_panelItems_detailLink_ContentPageRecord | AllBlogPosts_primaryPage_blocks_ItemsPanelRecord_panelItems_detailLink_CaseStudyRecord | AllBlogPosts_primaryPage_blocks_ItemsPanelRecord_panelItems_detailLink_BlogPostRecord | AllBlogPosts_primaryPage_blocks_ItemsPanelRecord_panelItems_detailLink_PrimaryPageRecord | AllBlogPosts_primaryPage_blocks_ItemsPanelRecord_panelItems_detailLink_DownloadPageRecord;

export interface AllBlogPosts_primaryPage_blocks_ItemsPanelRecord_panelItems {
  readonly __typename: "PanelItemRecord";
  readonly id: any;
  readonly listTitle: string | null;
  readonly listImage: AllBlogPosts_primaryPage_blocks_ItemsPanelRecord_panelItems_listImage | null;
  readonly detailImage: AllBlogPosts_primaryPage_blocks_ItemsPanelRecord_panelItems_detailImage | null;
  readonly detailTitle: string | null;
  readonly detailText: string | null;
  readonly detailLink: AllBlogPosts_primaryPage_blocks_ItemsPanelRecord_panelItems_detailLink | null;
  readonly detailLinkLabel: string | null;
}

export interface AllBlogPosts_primaryPage_blocks_ItemsPanelRecord {
  readonly __typename: "ItemsPanelRecord";
  readonly id: any;
  readonly panelItems: ReadonlyArray<AllBlogPosts_primaryPage_blocks_ItemsPanelRecord_panelItems>;
}

export interface AllBlogPosts_primaryPage_blocks_NewsletterRecord_image_responsiveImage {
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

export interface AllBlogPosts_primaryPage_blocks_NewsletterRecord_image {
  readonly __typename: "FileField";
  readonly responsiveImage: AllBlogPosts_primaryPage_blocks_NewsletterRecord_image_responsiveImage | null;
}

export interface AllBlogPosts_primaryPage_blocks_NewsletterRecord_form_formFields {
  readonly __typename: "FormFieldRecord";
  readonly id: any;
  readonly label: string | null;
  readonly fieldName: string | null;
  readonly fieldType: string | null;
  readonly required: any | null;
  readonly invisible: any | null;
  readonly grouped: any | null;
}

export interface AllBlogPosts_primaryPage_blocks_NewsletterRecord_form {
  readonly __typename: "FormRecord";
  readonly title: string | null;
  readonly name: string | null;
  readonly action: string | null;
  readonly method: string | null;
  readonly formFields: ReadonlyArray<AllBlogPosts_primaryPage_blocks_NewsletterRecord_form_formFields>;
}

export interface AllBlogPosts_primaryPage_blocks_NewsletterRecord {
  readonly __typename: "NewsletterRecord";
  readonly id: any;
  readonly title: string | null;
  readonly image: AllBlogPosts_primaryPage_blocks_NewsletterRecord_image | null;
  readonly form: AllBlogPosts_primaryPage_blocks_NewsletterRecord_form | null;
}

export interface AllBlogPosts_primaryPage_blocks_RichTextRecord {
  readonly __typename: "RichTextRecord";
  readonly id: any;
  readonly richText: string | null;
}

export interface AllBlogPosts_primaryPage_blocks_ServiceSetRecord_services_previewImage_responsiveImage {
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

export interface AllBlogPosts_primaryPage_blocks_ServiceSetRecord_services_previewImage {
  readonly __typename: "FileField";
  readonly responsiveImage: AllBlogPosts_primaryPage_blocks_ServiceSetRecord_services_previewImage_responsiveImage | null;
}

export interface AllBlogPosts_primaryPage_blocks_ServiceSetRecord_services {
  readonly __typename: "ServiceRecord";
  readonly id: any;
  readonly title: string | null;
  readonly text: string | null;
  readonly fontAwesomeIcon: string | null;
  readonly previewImage: AllBlogPosts_primaryPage_blocks_ServiceSetRecord_services_previewImage | null;
}

export interface AllBlogPosts_primaryPage_blocks_ServiceSetRecord {
  readonly __typename: "ServiceSetRecord";
  readonly id: any;
  readonly hideTextContent: any | null;
  readonly textAlignment: string | null;
  readonly services: ReadonlyArray<AllBlogPosts_primaryPage_blocks_ServiceSetRecord_services>;
}

export interface AllBlogPosts_primaryPage_blocks_TeamRecord_members_image_responsiveImage {
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

export interface AllBlogPosts_primaryPage_blocks_TeamRecord_members_image {
  readonly __typename: "FileField";
  readonly responsiveImage: AllBlogPosts_primaryPage_blocks_TeamRecord_members_image_responsiveImage | null;
}

export interface AllBlogPosts_primaryPage_blocks_TeamRecord_members {
  readonly __typename: "MemberRecord";
  readonly id: any;
  readonly name: string | null;
  readonly title: string | null;
  readonly image: AllBlogPosts_primaryPage_blocks_TeamRecord_members_image | null;
}

export interface AllBlogPosts_primaryPage_blocks_TeamRecord {
  readonly __typename: "TeamRecord";
  readonly id: any;
  readonly teamTitle: string | null;
  readonly members: ReadonlyArray<AllBlogPosts_primaryPage_blocks_TeamRecord_members>;
}

export interface AllBlogPosts_primaryPage_blocks_TextImageSmallRecord_internalLink {
  readonly __typename: "PrimaryPageRecord";
  readonly slug: string | null;
  readonly title: string | null;
}

export interface AllBlogPosts_primaryPage_blocks_TextImageSmallRecord_image_responsiveImage {
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

export interface AllBlogPosts_primaryPage_blocks_TextImageSmallRecord_image {
  readonly __typename: "FileField";
  readonly responsiveImage: AllBlogPosts_primaryPage_blocks_TextImageSmallRecord_image_responsiveImage | null;
}

export interface AllBlogPosts_primaryPage_blocks_TextImageSmallRecord {
  readonly __typename: "TextImageSmallRecord";
  readonly id: any;
  readonly title: string | null;
  readonly text: string | null;
  readonly buttonLabel: string | null;
  readonly externalLink: string | null;
  readonly inverted: any | null;
  readonly internalLink: AllBlogPosts_primaryPage_blocks_TextImageSmallRecord_internalLink | null;
  readonly image: AllBlogPosts_primaryPage_blocks_TextImageSmallRecord_image | null;
}

export interface AllBlogPosts_primaryPage_blocks_TitleTextRecord {
  readonly __typename: "TitleTextRecord";
  readonly id: any;
  readonly title: string | null;
  readonly text: string | null;
  readonly maxWidth: any | null;
  readonly addLightBackground: any | null;
}

export interface AllBlogPosts_primaryPage_blocks_VideoRecord_video {
  readonly __typename: "VideoField";
  readonly height: any;
  readonly provider: string;
  readonly providerUid: string;
  readonly thumbnailUrl: string;
  readonly title: string;
  readonly url: string;
  readonly width: any;
}

export interface AllBlogPosts_primaryPage_blocks_VideoRecord {
  readonly __typename: "VideoRecord";
  readonly id: any;
  readonly video: AllBlogPosts_primaryPage_blocks_VideoRecord_video | null;
}

export interface AllBlogPosts_primaryPage_blocks_VideoInternalRecord_thumbnail_responsiveImage {
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

export interface AllBlogPosts_primaryPage_blocks_VideoInternalRecord_thumbnail {
  readonly __typename: "FileField";
  readonly id: any;
  readonly title: string | null;
  readonly responsiveImage: AllBlogPosts_primaryPage_blocks_VideoInternalRecord_thumbnail_responsiveImage | null;
}

export interface AllBlogPosts_primaryPage_blocks_VideoInternalRecord_video_video {
  readonly __typename: "UploadVideoField";
  readonly mp4Url: string | null;
  readonly streamingUrl: string;
  readonly thumbnailUrl: string;
}

export interface AllBlogPosts_primaryPage_blocks_VideoInternalRecord_video {
  readonly __typename: "FileField";
  readonly height: any | null;
  readonly mimeType: string;
  readonly title: string | null;
  readonly video: AllBlogPosts_primaryPage_blocks_VideoInternalRecord_video_video | null;
  readonly width: any | null;
}

export interface AllBlogPosts_primaryPage_blocks_VideoInternalRecord {
  readonly __typename: "VideoInternalRecord";
  readonly id: any;
  readonly thumbnail: AllBlogPosts_primaryPage_blocks_VideoInternalRecord_thumbnail | null;
  readonly video: AllBlogPosts_primaryPage_blocks_VideoInternalRecord_video | null;
}

export interface AllBlogPosts_primaryPage_blocks_ViewMoreLinkRecord {
  readonly __typename: "ViewMoreLinkRecord";
  readonly id: any;
  readonly text: string | null;
  readonly url: string | null;
}

export type AllBlogPosts_primaryPage_blocks = AllBlogPosts_primaryPage_blocks_AgencyModelRecord | AllBlogPosts_primaryPage_blocks_ArticleRecord | AllBlogPosts_primaryPage_blocks_BannerRecord | AllBlogPosts_primaryPage_blocks_ButtonExternalRecord | AllBlogPosts_primaryPage_blocks_ButtonInternalRecord | AllBlogPosts_primaryPage_blocks_CardStackRecord | AllBlogPosts_primaryPage_blocks_CarouselRecord | AllBlogPosts_primaryPage_blocks_CaseStudyTileRecord | AllBlogPosts_primaryPage_blocks_ClientSetRecord | AllBlogPosts_primaryPage_blocks_ContentLinkSetRecord | AllBlogPosts_primaryPage_blocks_ColumnRowRecord | AllBlogPosts_primaryPage_blocks_FormBlockRecord | AllBlogPosts_primaryPage_blocks_FormulaRecord | AllBlogPosts_primaryPage_blocks_ImageSetRecord | AllBlogPosts_primaryPage_blocks_ItemsPanelRecord | AllBlogPosts_primaryPage_blocks_NewsletterRecord | AllBlogPosts_primaryPage_blocks_RichTextRecord | AllBlogPosts_primaryPage_blocks_ServiceSetRecord | AllBlogPosts_primaryPage_blocks_TeamRecord | AllBlogPosts_primaryPage_blocks_TextImageSmallRecord | AllBlogPosts_primaryPage_blocks_TitleTextRecord | AllBlogPosts_primaryPage_blocks_VideoRecord | AllBlogPosts_primaryPage_blocks_VideoInternalRecord | AllBlogPosts_primaryPage_blocks_ViewMoreLinkRecord;

export interface AllBlogPosts_primaryPage__seoMetaTags {
  readonly __typename: "Tag";
  readonly attributes: any | null;
  readonly content: string | null;
  readonly tag: string;
}

export interface AllBlogPosts_primaryPage {
  readonly __typename: "PrimaryPageRecord";
  readonly id: any;
  readonly title: string | null;
  readonly blocks: ReadonlyArray<AllBlogPosts_primaryPage_blocks>;
  /**
   * Generates SEO and Social card meta tags to be used in your frontend
   */
  readonly _seoMetaTags: ReadonlyArray<AllBlogPosts_primaryPage__seoMetaTags>;
}

export interface AllBlogPosts_site_faviconMetaTags {
  readonly __typename: "Tag";
  readonly attributes: any | null;
  readonly content: string | null;
  readonly tag: string;
}

export interface AllBlogPosts_site {
  readonly __typename: "Site";
  readonly faviconMetaTags: ReadonlyArray<AllBlogPosts_site_faviconMetaTags>;
}

export interface AllBlogPosts_header_logo {
  readonly __typename: "FileField";
  readonly url: string;
  readonly title: string | null;
  readonly alt: string | null;
}

export interface AllBlogPosts_header_links {
  readonly __typename: "PrimaryPageRecord";
  readonly id: any;
  readonly title: string | null;
  readonly slug: string | null;
}

export interface AllBlogPosts_header_whatWeDoPageLink {
  readonly __typename: "PrimaryPageRecord";
  readonly id: any;
  readonly title: string | null;
  readonly slug: string | null;
}

export interface AllBlogPosts_header_whatWeDoLinks {
  readonly __typename: "ServiceRecord";
  readonly id: any;
  readonly title: string | null;
  readonly slug: string | null;
}

export interface AllBlogPosts_header_aboutCatchyPageLink {
  readonly __typename: "PrimaryPageRecord";
  readonly id: any;
  readonly title: string | null;
  readonly slug: string | null;
}

export interface AllBlogPosts_header_aboutCatchyLinks_PrimaryPageRecord {
  readonly __typename: "PrimaryPageRecord";
  readonly id: any;
  readonly title: string | null;
  readonly slug: string | null;
}

export interface AllBlogPosts_header_aboutCatchyLinks_ContentPageRecord {
  readonly __typename: "ContentPageRecord";
  readonly id: any;
  readonly title: string | null;
  readonly slug: string | null;
}

export type AllBlogPosts_header_aboutCatchyLinks = AllBlogPosts_header_aboutCatchyLinks_PrimaryPageRecord | AllBlogPosts_header_aboutCatchyLinks_ContentPageRecord;

export interface AllBlogPosts_header {
  readonly __typename: "HeaderRecord";
  readonly logo: AllBlogPosts_header_logo | null;
  readonly links: ReadonlyArray<AllBlogPosts_header_links>;
  readonly whatWeDoPageLink: AllBlogPosts_header_whatWeDoPageLink | null;
  readonly whatWeDoLinks: ReadonlyArray<AllBlogPosts_header_whatWeDoLinks>;
  readonly aboutCatchyPageLink: AllBlogPosts_header_aboutCatchyPageLink | null;
  readonly aboutCatchyLinks: ReadonlyArray<AllBlogPosts_header_aboutCatchyLinks>;
  readonly contactLinkLabel: string | null;
}

export interface AllBlogPosts_footer_footerLogo {
  readonly __typename: "FileField";
  readonly url: string;
  readonly title: string | null;
  readonly alt: string | null;
}

export interface AllBlogPosts_footer_socialLinks {
  readonly __typename: "SocialLinkRecord";
  readonly id: any;
  readonly fontAwesomeIcon: string | null;
  readonly url: string | null;
  readonly email: string | null;
}

export interface AllBlogPosts_footer {
  readonly __typename: "FooterRecord";
  readonly title: string | null;
  readonly formTitle: string | null;
  readonly firstNameLabel: string | null;
  readonly lastNameLabel: string | null;
  readonly emailAddressLabel: string | null;
  readonly messageLabel: string | null;
  readonly destinationEmail: string | null;
  readonly contactText: string | null;
  readonly contactEmail: string | null;
  readonly directionsUrl: string | null;
  readonly footerLogo: AllBlogPosts_footer_footerLogo | null;
  readonly socialLinks: ReadonlyArray<AllBlogPosts_footer_socialLinks>;
  readonly richText: string | null;
}

export interface AllBlogPosts {
  /**
   * Returns a collection of records
   */
  readonly allBlogPosts: ReadonlyArray<AllBlogPosts_allBlogPosts>;
  /**
   * Returns a collection of records
   */
  readonly allCategories: ReadonlyArray<AllBlogPosts_allCategories>;
  /**
   * Returns a specific record
   */
  readonly primaryPage: AllBlogPosts_primaryPage | null;
  /**
   * Returns the single instance record
   */
  readonly site: AllBlogPosts_site;
  /**
   * Returns the single instance record
   */
  readonly header: AllBlogPosts_header | null;
  /**
   * Returns the single instance record
   */
  readonly footer: AllBlogPosts_footer | null;
}
