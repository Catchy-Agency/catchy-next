import classNames from 'classnames';
import { FC } from 'react';
import { ResponsiveImageType } from 'react-datocms';

import Link from 'next/link';
import { BlogPostBySlug_blogPost_blocks } from '../gql/types/BlogPostBySlug';
import { CaseStudyBySlug_caseStudy_blocks } from '../gql/types/CaseStudyBySlug';
import { PrimaryPageBySlug_primaryPage_blocks } from '../gql/types/PrimaryPageBySlug';
import { ServicePagesBySlug_service_blocks } from '../gql/types/ServicePagesBySlug';
import { prefixByTypename } from '../util/url';
import { AgencyModel } from './blocks/AgencyModel';
import { Banner } from './blocks/Banner';
import { ButtonExternal } from './blocks/ButtonExternal';
import { ButtonInternal } from './blocks/ButtonInternal';
import { ClientSet } from './blocks/ClientSet';
import { ColumnRow } from './blocks/ColumnRow';
import { FormBlock } from './blocks/FormBlock';
import { Formula } from './blocks/Formula';
import { ImageSet } from './blocks/ImageSet';
import { LeadCaseFullWidth } from './blocks/LeadCaseFullWidth';
import { LeadCaseStudy } from './blocks/LeadCaseStudy';
import { Newsletter } from './blocks/Newsletter';
import { RichText } from './blocks/RichText';
import { ServiceCarousel } from './blocks/ServiceCarousel';
import { ServiceSet } from './blocks/ServiceSet';
import { StaticCardsStack } from './blocks/StaticCardsStack';
import { StaticCaseStudyCards } from './blocks/StaticCaseStudyCards';
import { Team } from './blocks/Team';
import { TextImage } from './blocks/TextImage';
import { TitleText } from './blocks/TitleText';
import { Video } from './blocks/Video';
import { VideoInternal } from './blocks/VideoInternal';
import { ViewMoreLink } from './blocks/ViewMoreLink';
import { ContentBannerL } from './content-links/banners/ContentBannerL';
import { ContentBannerMS } from './content-links/banners/ContentBannerMS';
import { ContentTileM } from './content-links/cards/ContentTileM';
import {
  DownSoup,
  IconBottomLeadFullWidth,
  IconRightLeadFullWidth,
  LeftHero,
  LeftUpSoup,
  UpSoup,
} from './icons';

export const BlockSections: FC<{
  containerMax?: 'desktop' | 'widescreen';
  textAlign?: string | null;
  pageTheme?: string;
  blocks: ReadonlyArray<
    | PrimaryPageBySlug_primaryPage_blocks
    | BlogPostBySlug_blogPost_blocks
    | ServicePagesBySlug_service_blocks
    | CaseStudyBySlug_caseStudy_blocks
    | null
  >;
}> = ({ blocks, containerMax, textAlign, pageTheme }) => {
  const alignClass = {
    'has-text-centered': textAlign === 'Center',
    'has-text-right': textAlign === 'Right',
    'has-text-left': textAlign !== 'Center' && textAlign !== 'Right', // Default
  };
  const maxClass = {
    'is-max-desktop': containerMax === 'desktop',
    'is-max-widescreen': containerMax === 'widescreen',
  };
  return (
    <>
      {blocks?.map((block) => {
        switch (block?.__typename) {
          case 'AgencyModelRecord':
            return (
              <section
                key={block.id}
                className="section has-background-grey-darker AgencyModelRecord"
              >
                <div className={classNames('container', maxClass)}>
                  <AgencyModel block={block} />
                </div>
              </section>
            );

          case 'ArticleRecord':
            return (
              <section key={block.id} className="section LeadCaseFullWidth">
                <div className={classNames('container', maxClass)}>
                  <LeadCaseFullWidth block={block} />
                </div>
                <div className="svg-bottomlead">{IconBottomLeadFullWidth}</div>
                <div className="svg-rightlead">{IconRightLeadFullWidth}</div>
              </section>
            );

          case 'BannerRecord':
            return (
              <section
                key={block.id}
                className="section BannerRecord hero has-background-grey-darkest is-relative"
              >
                <Banner block={block} />
              </section>
            );

          case 'ButtonExternalRecord':
            return (
              <section key={block.id} className="section ButtonExternalRecord">
                <div
                  className={classNames('container', maxClass, {
                    'has-text-left': block.align === 'Left',
                    'has-text-centered': block.align === 'Center',
                    'has-text-right': block.align === 'Right',
                  })}
                >
                  <ButtonExternal block={block} />
                </div>
              </section>
            );

          case 'ButtonInternalRecord':
            return (
              <section key={block.id} className="section ButtonInternalRecord">
                <div
                  className={classNames('container', maxClass, {
                    'has-text-left': block.align === 'Left',
                    'has-text-centered': block.align === 'Center',
                    'has-text-right': block.align === 'Right',
                  })}
                >
                  <ButtonInternal block={block} />
                </div>
              </section>
            );

          case 'CarouselRecord': {
            const items = block.items.map((item) => ({
              id:
                item.__typename === 'ExternalCardItemRecord'
                  ? item.id
                  : item.link?.id,
              title:
                item.__typename === 'ExternalCardItemRecord'
                  ? item.title ?? ''
                  : item.link?.title ?? '',
              description:
                item.__typename === 'ExternalCardItemRecord'
                  ? item.description ?? ''
                  : item.link?.text ?? '',
              themeColor:
                item.__typename === 'ExternalCardItemRecord'
                  ? pageTheme ?? '#ffffff'
                  : (item.link?.themeColor || pageTheme) ?? undefined,
            }));
            return (
              <section key={block.id} className="section">
                <div
                  className={classNames(
                    'container SC-carousel-wrapper',
                    maxClass,
                    {
                      'has-text-centered': textAlign === 'Center',
                    },
                  )}
                >
                  <ServiceCarousel items={items} />
                  <Link href={block.link?.slug || ''}>
                    <a className="button is-primary SC-button">
                      {block.buttonLabel}
                    </a>
                  </Link>
                </div>
              </section>
            );
          }
          case 'CardStackRecord': {
            const items = block.cards?.map((item) => ({
              id:
                item.__typename === 'ExternalCardItemRecord'
                  ? item.id
                  : item.link?.id,
              title:
                item.__typename === 'ExternalCardItemRecord'
                  ? item.title ?? ''
                  : item.link?.title ?? '',
              description:
                item.__typename === 'ExternalCardItemRecord'
                  ? item.description ?? ''
                  : item.link?.text ?? '',
              image:
                item.__typename === 'ExternalCardItemRecord'
                  ? (item.image?.responsiveImage as ResponsiveImageType) || null
                  : (item.link?.previewImage
                      ?.responsiveImage as ResponsiveImageType) || null,
              buttonLabel:
                item.__typename === 'ExternalCardItemRecord'
                  ? item.buttonLabel ?? undefined
                  : item.link?.title
                  ? `Explore ${item.link?.title}`
                  : undefined,
              slug:
                item.__typename === 'ExternalCardItemRecord'
                  ? item.buttonLink ?? undefined
                  : item.link?.slug ?? undefined,
              openInNewTab:
                item.__typename === 'ExternalCardItemRecord'
                  ? item.openInNewTab
                  : false,
              themeColor:
                item.__typename === 'ExternalCardItemRecord'
                  ? pageTheme ?? '#ffffff'
                  : (item.link?.themeColor || pageTheme) ?? undefined,
            }));

            return (
              <section key={block.id} className="section">
                <div className={classNames('container', maxClass)}>
                  <StaticCardsStack
                    items={items}
                    maxColumns={block.maxColumns}
                  />
                </div>
              </section>
            );
          }
          case 'CaseStudyTileRecord':
            return (
              <section key={block.id} className="section LeadCaseStudy">
                <div className={classNames('container', maxClass)}>
                  <LeadCaseStudy block={block} />
                </div>
              </section>
            );

          case 'ClientSetRecord':
            return (
              <section key={block.id} className="section ClientSetRecord">
                <div className="container">
                  <ClientSet block={block} />
                </div>
                <div className="absoluteSvg LeftUp">{LeftUpSoup}</div>
                <div className="absoluteSvg RightUp">{UpSoup}</div>
                <div className="absoluteSvg leftDown">{LeftHero}</div>
                <div className="absoluteSvg RightDown">{DownSoup}</div>
              </section>
            );

          case 'ColumnRowRecord':
            return (
              <section
                key={block.id}
                className={classNames('section', 'ColumnRowRecord', {
                  'has-background-grey-darker': block.addLightBackground,
                })}
              >
                <div className={classNames('container', maxClass)}>
                  <ColumnRow block={block} />
                </div>
              </section>
            );

          case 'ContentLinkSetRecord': {
            const callToAction = block.callToActionLabel;
            const imageAlign = block.imageAlign;
            const links = block.links.map((link) => ({
              id: link.id,
              url: `${prefixByTypename[link.__typename]}${link.slug || ''}`,
              title: link.title,
              pretitle:
                link.__typename === 'CaseStudyRecord' ? link.pretitle : null,
              description: link.description,
              image:
                (link.previewImage?.responsiveImage as ResponsiveImageType) ||
                null,
              imageLg:
                (link.previewImageLg?.responsiveImage as ResponsiveImageType) ||
                null,
              imageSm:
                (link.previewImageSm?.responsiveImage as ResponsiveImageType) ||
                null,
              imageCol:
                (link.previewImageCol
                  ?.responsiveImage as ResponsiveImageType) || null,
              callToAction,
            }));
            switch (block.displaySize) {
              /** Integrations/Re-Design - NEW
               *  card: column → Content Tile S
               *  card: row → Content Tile M
               *  thumb: column → Content Tile S
               *  thumb: row → Content Tile M
               *  hero banner → Content Tile L
               */
              case 'Hero Banner':
              case 'Banner (Large)':
                return (
                  <section
                    key={block.id}
                    className={classNames(
                      'section ContentLinkSetRecord has-background-grey-darker',
                    )}
                  >
                    <div className={classNames('container', maxClass)}>
                      <ContentBannerL links={links} isSlider={block.isSlider} />
                    </div>
                  </section>
                );
              case 'Banner (Medium)':
              case 'Banner (Small)':
                return (
                  <section
                    key={block.id}
                    className={classNames(
                      'section ContentLinkSetRecord has-background-grey-darker',
                    )}
                  >
                    <div className={classNames('container', maxClass)}>
                      <ContentBannerMS
                        links={links}
                        isSlider={block.isSlider}
                        imageAlign={imageAlign}
                        contentSize={
                          block.displaySize == 'Banner (Medium)'
                            ? 'Medium'
                            : 'Small'
                        }
                        displaySize={block.displaySize}
                      />
                    </div>
                  </section>
                );

              case 'Card: Rows':
              case 'Cards (Two-Col)':
              case 'Thumb: Rows':
                return (
                  <section
                    key={block.id}
                    className={classNames(
                      'section ContentLinkSetRecord',
                      block.displaySize
                        .replace(':', '-')
                        .replace(/(\s+\(*)/g, '-')
                        .replace(/\)/g, '')
                        .toLowerCase(),
                      {
                        'is-slider': block.isSlider,
                      },
                    )}
                  >
                    <div className={classNames('container', maxClass)}>
                      <ContentTileM
                        contentSize={'Medium'}
                        displaySize={block.displaySize}
                        links={links}
                        isSlider={block.isSlider}
                      />
                    </div>
                  </section>
                );
              case 'Card: Columns':
              case 'Cards (Three-Col)':
              case 'Thumb: Columns':
                return (
                  <section
                    key={block.id}
                    className={classNames(
                      'section ContentLinkSetRecord',
                      block.displaySize
                        .replace(':', '-')
                        .replace(/(\s+\(*)/g, '-')
                        .replace(/\)/g, '')
                        .toLowerCase(),
                      {
                        'is-slider': block.isSlider,
                      },
                    )}
                  >
                    <div className={classNames('container', maxClass)}>
                      {/*  <ContentTileS
                        contentSize={'Small'}
                        displaySize={block.displaySize}
                        links={links}
                        isSlider={block.isSlider}
                      /> */}
                      <StaticCaseStudyCards link={links} />
                    </div>
                  </section>
                );

              default:
                return null;
            }
          }

          case 'FormBlockRecord':
            return (
              <section key={block.id} className="section FormBlockRecord">
                <div className={classNames('container', maxClass)}>
                  <FormBlock block={block} />
                </div>
              </section>
            );

          case 'FormulaRecord':
            return (
              <section key={block.id} className="section FormulaRecord">
                <div className={classNames('container', maxClass)}>
                  <Formula block={block} />
                </div>
              </section>
            );

          case 'ImageSetRecord':
            return (
              <section key={block.id} className="section ImageSetRecord">
                <div className={classNames('container', maxClass)}>
                  <ImageSet block={block} />
                </div>
              </section>
            );

          case 'ItemsPanelRecord':
            return (
              <section
                key={block.id}
                className="section ServicePaneRecord"
                style={{ paddingRight: 0 }}
              >
                <div
                  className={classNames(
                    'container SC-carousel-wrapper',
                    maxClass,
                    {
                      'has-text-centered': textAlign === 'Center',
                    },
                  )}
                >
                  {/*<ItemsPanel block={block} />*/}
                  <Link href={'/work' || ''}>
                    <a className="button is-primary SC-button">
                      Explore our services
                    </a>
                  </Link>
                </div>
              </section>
            );
          case 'NewsletterRecord':
            return (
              <section key={block.id} className="section Newsletter">
                <div className={classNames('container', maxClass)}>
                  <Newsletter block={block} />
                </div>
              </section>
            );

          case 'RichTextRecord':
            return (
              <section key={block.id} className="section RichTextRecord">
                <div className={classNames('container', maxClass)}>
                  <RichText block={block} />
                </div>
              </section>
            );

          case 'ServiceSetRecord':
            return (
              <section key={block.id} className="section ServiceSetRecord">
                <div
                  className={classNames('container', maxClass, {
                    'has-text-centered': textAlign === 'Center',
                  })}
                >
                  <ServiceSet block={block} />
                </div>
              </section>
            );

          case 'TeamRecord':
            return (
              <section key={block.id} className="section TeamRecord">
                <div className={classNames('container', maxClass)}>
                  <Team block={block} />
                </div>
              </section>
            );

          case 'TextImageSmallRecord':
            return (
              <section key={block.id} className="section TextImage">
                <div className={classNames('container', maxClass)}>
                  <TextImage block={block} />
                </div>
              </section>
            );

          case 'TitleTextRecord':
            return (
              <section
                key={block.id}
                className={classNames('section', 'TitleTextRecord', {
                  'has-background-grey-darker': block.addLightBackground,
                })}
              >
                <div className={classNames('container', maxClass, alignClass)}>
                  <TitleText block={block} />
                </div>
              </section>
            );

          case 'VideoRecord':
            return (
              <section key={block.id} className="section VideoRecord">
                <div className={classNames('container', maxClass)}>
                  <Video block={block} />
                </div>
              </section>
            );

          case 'VideoInternalRecord':
            return (
              <section key={block.id} className="section VideoInternalRecord">
                <div className={classNames('container', maxClass)}>
                  <VideoInternal block={block} />
                </div>
              </section>
            );

          case 'ViewMoreLinkRecord':
            return (
              <section key={block.id} className="section ViewMoreLinkRecord">
                <div
                  className={classNames(
                    'container',
                    'has-text-right',
                    maxClass,
                  )}
                >
                  <ViewMoreLink block={block} />
                </div>
              </section>
            );

          default:
            return null;
        }
      })}
    </>
  );
};
