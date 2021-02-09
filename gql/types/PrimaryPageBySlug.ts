/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PrimaryPageBySlug
// ====================================================

export interface PrimaryPageBySlug_primaryPage_blocks_BannerRecord_backgroundImage {
  readonly __typename: "FileField";
  readonly url: string;
}

export interface PrimaryPageBySlug_primaryPage_blocks_BannerRecord_backgroundColor {
  readonly __typename: "ColorField";
  readonly hex: string | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_BannerRecord_textColor {
  readonly __typename: "ColorField";
  readonly hex: string | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_BannerRecord {
  readonly __typename: "BannerRecord";
  readonly id: any;
  readonly title: string | null;
  readonly text: string | null;
  readonly backgroundImage: PrimaryPageBySlug_primaryPage_blocks_BannerRecord_backgroundImage | null;
  readonly backgroundColor: PrimaryPageBySlug_primaryPage_blocks_BannerRecord_backgroundColor | null;
  readonly textColor: PrimaryPageBySlug_primaryPage_blocks_BannerRecord_textColor | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ClientSetRecord_clientSet_logo_responsiveImage {
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

export interface PrimaryPageBySlug_primaryPage_blocks_ClientSetRecord_clientSet_logo {
  readonly __typename: "FileField";
  readonly responsiveImage: PrimaryPageBySlug_primaryPage_blocks_ClientSetRecord_clientSet_logo_responsiveImage | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ClientSetRecord_clientSet {
  readonly __typename: "ClientRecord";
  readonly id: any;
  readonly name: string | null;
  readonly logo: PrimaryPageBySlug_primaryPage_blocks_ClientSetRecord_clientSet_logo | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ClientSetRecord {
  readonly __typename: "ClientSetRecord";
  readonly id: any;
  readonly clientSet: ReadonlyArray<PrimaryPageBySlug_primaryPage_blocks_ClientSetRecord_clientSet>;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_backgroundColor {
  readonly __typename: "ColorField";
  readonly hex: string | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_textColor {
  readonly __typename: "ColorField";
  readonly hex: string | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_seo_image_responsiveImage {
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

export interface PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_seo_image {
  readonly __typename: "FileField";
  readonly responsiveImage: PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_seo_image_responsiveImage | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_seo {
  readonly __typename: "SeoField";
  readonly title: string | null;
  readonly description: string | null;
  readonly image: PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_seo_image | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord {
  readonly __typename: "PrimaryPageRecord";
  readonly id: any;
  readonly slug: string | null;
  readonly seo: PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord_seo | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_ContentPostRecord_seo_image_responsiveImage {
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

export interface PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_ContentPostRecord_seo_image {
  readonly __typename: "FileField";
  readonly responsiveImage: PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_ContentPostRecord_seo_image_responsiveImage | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_ContentPostRecord_seo {
  readonly __typename: "SeoField";
  readonly title: string | null;
  readonly description: string | null;
  readonly image: PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_ContentPostRecord_seo_image | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_ContentPostRecord {
  readonly __typename: "ContentPostRecord";
  readonly id: any;
  readonly slug: string | null;
  readonly seo: PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_ContentPostRecord_seo | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_ContentPageRecord_seo_image_responsiveImage {
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

export interface PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_ContentPageRecord_seo_image {
  readonly __typename: "FileField";
  readonly responsiveImage: PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_ContentPageRecord_seo_image_responsiveImage | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_ContentPageRecord_seo {
  readonly __typename: "SeoField";
  readonly title: string | null;
  readonly description: string | null;
  readonly image: PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_ContentPageRecord_seo_image | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_ContentPageRecord {
  readonly __typename: "ContentPageRecord";
  readonly id: any;
  readonly slug: string | null;
  readonly seo: PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_ContentPageRecord_seo | null;
}

export type PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links = PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_PrimaryPageRecord | PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_ContentPostRecord | PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links_ContentPageRecord;

export interface PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord {
  readonly __typename: "ContentLinkSetRecord";
  readonly id: any;
  readonly displaySize: string | null;
  readonly callToActionLabel: string | null;
  readonly alternatingAlignments: any | null;
  readonly backgroundColor: PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_backgroundColor | null;
  readonly textColor: PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_textColor | null;
  readonly links: ReadonlyArray<PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord_links>;
}

export interface PrimaryPageBySlug_primaryPage_blocks_FormulaRecord_step1_responsiveImage {
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

export interface PrimaryPageBySlug_primaryPage_blocks_FormulaRecord_step1 {
  readonly __typename: "FileField";
  readonly id: any;
  readonly responsiveImage: PrimaryPageBySlug_primaryPage_blocks_FormulaRecord_step1_responsiveImage | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_FormulaRecord_step2_responsiveImage {
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

export interface PrimaryPageBySlug_primaryPage_blocks_FormulaRecord_step2 {
  readonly __typename: "FileField";
  readonly id: any;
  readonly responsiveImage: PrimaryPageBySlug_primaryPage_blocks_FormulaRecord_step2_responsiveImage | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_FormulaRecord_step3_responsiveImage {
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

export interface PrimaryPageBySlug_primaryPage_blocks_FormulaRecord_step3 {
  readonly __typename: "FileField";
  readonly id: any;
  readonly responsiveImage: PrimaryPageBySlug_primaryPage_blocks_FormulaRecord_step3_responsiveImage | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_FormulaRecord {
  readonly __typename: "FormulaRecord";
  readonly id: any;
  readonly step1: PrimaryPageBySlug_primaryPage_blocks_FormulaRecord_step1 | null;
  readonly step2: PrimaryPageBySlug_primaryPage_blocks_FormulaRecord_step2 | null;
  readonly step3: PrimaryPageBySlug_primaryPage_blocks_FormulaRecord_step3 | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ServiceSetRecord_services_iconColor {
  readonly __typename: "ColorField";
  readonly hex: string | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ServiceSetRecord_services_iconBackgroundColor {
  readonly __typename: "ColorField";
  readonly hex: string | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ServiceSetRecord_services {
  readonly __typename: "ServiceRecord";
  readonly id: any;
  readonly title: string | null;
  readonly text: string | null;
  readonly fontAwesomeIcon: string | null;
  readonly iconColor: PrimaryPageBySlug_primaryPage_blocks_ServiceSetRecord_services_iconColor | null;
  readonly iconBackgroundColor: PrimaryPageBySlug_primaryPage_blocks_ServiceSetRecord_services_iconBackgroundColor | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ServiceSetRecord {
  readonly __typename: "ServiceSetRecord";
  readonly id: any;
  readonly services: ReadonlyArray<PrimaryPageBySlug_primaryPage_blocks_ServiceSetRecord_services>;
}

export interface PrimaryPageBySlug_primaryPage_blocks_TeamRecord_members_image_responsiveImage {
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

export interface PrimaryPageBySlug_primaryPage_blocks_TeamRecord_members_image {
  readonly __typename: "FileField";
  readonly responsiveImage: PrimaryPageBySlug_primaryPage_blocks_TeamRecord_members_image_responsiveImage | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_TeamRecord_members {
  readonly __typename: "MemberRecord";
  readonly id: any;
  readonly name: string | null;
  readonly title: string | null;
  readonly image: PrimaryPageBySlug_primaryPage_blocks_TeamRecord_members_image | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_TeamRecord {
  readonly __typename: "TeamRecord";
  readonly id: any;
  readonly members: ReadonlyArray<PrimaryPageBySlug_primaryPage_blocks_TeamRecord_members>;
}

export interface PrimaryPageBySlug_primaryPage_blocks_TitleTextRecord {
  readonly __typename: "TitleTextRecord";
  readonly id: any;
  readonly title: string | null;
  readonly text: string | null;
}

export interface PrimaryPageBySlug_primaryPage_blocks_ViewMoreLinkRecord {
  readonly __typename: "ViewMoreLinkRecord";
  readonly id: any;
  readonly text: string | null;
  readonly url: string | null;
}

export type PrimaryPageBySlug_primaryPage_blocks = PrimaryPageBySlug_primaryPage_blocks_BannerRecord | PrimaryPageBySlug_primaryPage_blocks_ClientSetRecord | PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord | PrimaryPageBySlug_primaryPage_blocks_FormulaRecord | PrimaryPageBySlug_primaryPage_blocks_ServiceSetRecord | PrimaryPageBySlug_primaryPage_blocks_TeamRecord | PrimaryPageBySlug_primaryPage_blocks_TitleTextRecord | PrimaryPageBySlug_primaryPage_blocks_ViewMoreLinkRecord;

export interface PrimaryPageBySlug_primaryPage__seoMetaTags {
  readonly __typename: "Tag";
  readonly attributes: any | null;
  readonly content: string | null;
  readonly tag: string;
}

export interface PrimaryPageBySlug_primaryPage {
  readonly __typename: "PrimaryPageRecord";
  readonly title: string | null;
  readonly blocks: ReadonlyArray<(PrimaryPageBySlug_primaryPage_blocks | null)> | null;
  readonly slug: string | null;
  /**
   * SEO meta tags
   */
  readonly _seoMetaTags: ReadonlyArray<PrimaryPageBySlug_primaryPage__seoMetaTags>;
}

export interface PrimaryPageBySlug_site_faviconMetaTags {
  readonly __typename: "Tag";
  readonly attributes: any | null;
  readonly content: string | null;
  readonly tag: string;
}

export interface PrimaryPageBySlug_site {
  readonly __typename: "Site";
  readonly faviconMetaTags: ReadonlyArray<PrimaryPageBySlug_site_faviconMetaTags>;
}

export interface PrimaryPageBySlug_header_logo {
  readonly __typename: "FileField";
  readonly url: string;
  readonly title: string | null;
  readonly alt: string | null;
}

export interface PrimaryPageBySlug_header_links {
  readonly __typename: "PrimaryPageRecord";
  readonly id: any;
  readonly title: string | null;
  readonly slug: string | null;
}

export interface PrimaryPageBySlug_header {
  readonly __typename: "HeaderRecord";
  readonly logo: PrimaryPageBySlug_header_logo | null;
  readonly links: ReadonlyArray<PrimaryPageBySlug_header_links>;
  readonly contactLinkLabel: string | null;
}

export interface PrimaryPageBySlug_footer_socialLinks {
  readonly __typename: "SocialLinkRecord";
  readonly id: any;
  readonly fontAwesomeIcon: string | null;
  readonly url: string | null;
}

export interface PrimaryPageBySlug_footer {
  readonly __typename: "FooterRecord";
  readonly title: string | null;
  readonly nameLabel: string | null;
  readonly emailAddressLabel: string | null;
  readonly messageLabel: string | null;
  readonly contactText: string | null;
  readonly socialLinks: ReadonlyArray<(PrimaryPageBySlug_footer_socialLinks | null)> | null;
}

export interface PrimaryPageBySlug {
  /**
   * Returns a specific record
   */
  readonly primaryPage: PrimaryPageBySlug_primaryPage | null;
  /**
   * Returns the single instance record
   */
  readonly site: PrimaryPageBySlug_site;
  /**
   * Returns the single instance record
   */
  readonly header: PrimaryPageBySlug_header | null;
  /**
   * Returns the single instance record
   */
  readonly footer: PrimaryPageBySlug_footer | null;
}

export interface PrimaryPageBySlugVariables {
  readonly slug?: string | null;
}
