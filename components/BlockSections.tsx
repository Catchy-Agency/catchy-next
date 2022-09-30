import classNames from 'classnames'
import { FC } from 'react'
import { Image, ResponsiveImageType } from 'react-datocms'

import { BlogPostBySlug_blogPost_blocks } from '../gql/types/BlogPostBySlug'
import { PrimaryPageBySlug_primaryPage_blocks } from '../gql/types/PrimaryPageBySlug'
import { prefixByTypename } from '../util/url'
import { AgencyModel } from './blocks/AgencyModel'
import { Banner } from './blocks/Banner'
import { ButtonExternal } from './blocks/ButtonExternal'
import { ButtonInternal } from './blocks/ButtonInternal'
import { ClientSet } from './blocks/ClientSet'
import { ColumnRow } from './blocks/ColumnRow'
import { FormBlock } from './blocks/FormBlock'
import { Formula } from './blocks/Formula'
import { ImageSet } from './blocks/ImageSet'
import { RichText } from './blocks/RichText'
import { ServiceSet } from './blocks/ServiceSet'
import { Team } from './blocks/Team'
import { TitleText } from './blocks/TitleText'
import { Video } from './blocks/Video'
import { VideoInternal } from './blocks/VideoInternal'
import { ViewMoreLink } from './blocks/ViewMoreLink'
import { CardColumns } from './content-links/CardColumns'
import { CardRows } from './content-links/CardRows'
import { ContentBanner } from './content-links/ContentBanners'
import { ContentTile } from './content-links/ContentTiles' //ContentTileM,
import { ThumbColumns } from './content-links/ThumbColumns'

export const BlockSections: FC<{
  containerMax?: 'desktop' | 'widescreen'
  textAlign?: string | null
  blocks: ReadonlyArray<
    PrimaryPageBySlug_primaryPage_blocks | BlogPostBySlug_blogPost_blocks | null
  >
}> = ({ blocks, containerMax, textAlign }) => {
  const alignClass = {
    'has-text-centered': textAlign === 'Center',
    'has-text-right': textAlign === 'Right',
    'has-text-left': textAlign !== 'Center' && textAlign !== 'Right', // Default
  }
  const maxClass = {
    'is-max-desktop': containerMax === 'desktop',
    'is-max-widescreen': containerMax === 'widescreen',
  }
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
            )
          case 'BannerRecord':
            return (
              <section
                key={block.id}
                className="section BannerRecord hero has-background-grey-darkest is-relative"
              >
                {block.backgroundImage?.responsiveImage && (
                  <div
                    className="has-cover-image"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                    }}
                  >
                    <Image
                      data={
                        block.backgroundImage
                          .responsiveImage as ResponsiveImageType
                      }
                    />
                  </div>
                )}
                <div className={classNames('container', maxClass)}>
                  <Banner block={block} />
                </div>
              </section>
            )

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
            )

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
            )

          case 'ClientSetRecord':
            return (
              <section key={block.id} className="section ClientSetRecord">
                <div className={classNames('container', maxClass)}>
                  <ClientSet block={block} />
                </div>
              </section>
            )

          case 'ColumnRowRecord':
            return (
              <section
                key={block.id}
                className="section has-background-grey-darker ColumnRowRecord"
              >
                <div className={classNames('container', maxClass)}>
                  <ColumnRow block={block} />
                </div>
              </section>
            )

          case 'ContentLinkSetRecord': {
            const callToAction = block.callToActionLabel
            const imageAlign = block.imageAlign
            const links = block.links.map((link) => ({
              id: link.id,
              url: `${prefixByTypename[link.__typename]}${link.slug || ''}`,
              title: link.title,
              description: link.description,
              image:
                (link.previewImage?.responsiveImage as ResponsiveImageType) ||
                null,
              callToAction,
            }))
            switch (block.displaySize) {
              case '_Card: Columns':
                return (
                  <section
                    key={block.id}
                    className="section ContentLinkSetRecord"
                  >
                    <div className={classNames('container', maxClass)}>
                      <CardColumns links={links} />
                    </div>
                  </section>
                )
              case '_Card: Rows':
                return (
                  <section
                    key={block.id}
                    className="section ContentLinkSetRecord"
                  >
                    <div className={classNames('container', maxClass)}>
                      <CardRows links={links} imageAlign={imageAlign} />
                    </div>
                  </section>
                )
              case '_Thumb: Columns':
                return (
                  <section
                    key={block.id}
                    className="section ContentLinkSetRecord"
                  >
                    <div className={classNames('container', maxClass)}>
                      <ThumbColumns links={links} />
                    </div>
                  </section>
                )
              case '_Thumb: Rows':
                return (
                  <section
                    key={block.id}
                    className="section ContentLinkSetRecord"
                  >
                    <div className={classNames('container', maxClass)}>
                      {/* <ThumbRows links={links} imageAlign={imageAlign} /> */}
                      <CardRows links={links} imageAlign={imageAlign} />
                    </div>
                  </section>
                )

              case 'Hero Banner':
                return (
                  <section
                    key={block.id}
                    className={classNames(
                      'section ContentLinkSetRecord has-background-grey-darker',
                    )}
                  >
                    <div className={classNames('container', maxClass)}>
                      <ContentBanner
                        links={links}
                        imageAlign={imageAlign}
                        heroBannerImageSize={block.heroBannerImageSize}
                      />
                    </div>
                  </section>
                )

              case 'Two-Column':
              case 'Three-Column':
              case 'Thumb: Columns':
              case 'Card: Columns':
              case 'Thumb: Rows':
              case 'Card: Rows':
                return (
                  <section
                    key={block.id}
                    className={classNames(
                      'section ContentLinkSetRecord',
                      block.displaySize.replace(/(\s+)/g, '-').toLowerCase(),
                    )}
                  >
                    <div className={classNames('container', maxClass)}>
                      <ContentTile
                        displaySize={block.displaySize}
                        links={links}
                        isSlider={block.isSlider}
                      />
                    </div>
                  </section>
                )
              // case '_Hero Banner':
              //   return (
              //     <section
              //       key={block.id}
              //       className="section ContentLinkSetRecord ContentTileL has-background-grey-darker"
              //     >
              //       <div className={classNames('container', maxClass)}>
              //         {/* <ContentTileM //ContentFeatured
              //           links={links}
              //           imageAlign={imageAlign}
              //           isSlider={block.isSlider}
              //           heroBannerImageSize={ block.heroBannerImageSize }
              //         /> */}
              //       </div>
              //     </section>
              //   )

              case '__Banner:Large':
              case '__Banner:Medium':
              case '__Banner:Small':
                return null

              case '__Cards: Medium':
                return (
                  <section
                    key={block.id}
                    className={classNames(
                      'section ContentLinkSetRecord',
                      block.displaySize.replace(/(\s+)/g, '-').toLowerCase(),
                    )}
                  >
                    <div className={classNames('container', maxClass)}>
                      <ContentTile
                        displaySize={block.displaySize}
                        links={links}
                        isSlider={block.isSlider}
                      />
                    </div>
                  </section>
                )
              case '__Cards: Small':
                return (
                  <section
                    key={block.id}
                    className={classNames(
                      'section ContentLinkSetRecord',
                      block.displaySize.replace(/(\s+)/g, '-').toLowerCase(),
                    )}
                  >
                    <div className={classNames('container', maxClass)}>
                      <ContentTile
                        displaySize={block.displaySize}
                        links={links}
                        isSlider={block.isSlider}
                      />
                    </div>
                  </section>
                )

              default:
                return null
            }
          }

          case 'FormBlockRecord':
            return (
              <section key={block.id} className="section FormBlockRecord">
                <div className={classNames('container', maxClass)}>
                  <FormBlock block={block} />
                </div>
              </section>
            )

          case 'FormulaRecord':
            return (
              <section key={block.id} className="section FormulaRecord">
                <div className={classNames('container', maxClass)}>
                  <Formula block={block} />
                </div>
              </section>
            )

          case 'ImageSetRecord':
            return (
              <section key={block.id} className="section ImageSetRecord">
                <div className={classNames('container', maxClass)}>
                  <ImageSet block={block} />
                </div>
              </section>
            )

          case 'RichTextRecord':
            return (
              <section key={block.id} className="section RichTextRecord">
                <div className={classNames('container', maxClass)}>
                  <RichText block={block} />
                </div>
              </section>
            )

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
            )

          case 'TeamRecord':
            return (
              <section key={block.id} className="section TeamRecord">
                <div className={classNames('container', maxClass)}>
                  <Team block={block} />
                </div>
              </section>
            )

          case 'TitleTextRecord':
            return (
              <section key={block.id} className="section TitleTextRecord">
                <div className={classNames('container', maxClass, alignClass)}>
                  <TitleText block={block} />
                </div>
              </section>
            )

          case 'VideoRecord':
            return (
              <section key={block.id} className="section VideoRecord">
                <div className={classNames('container', maxClass)}>
                  <Video block={block} />
                </div>
              </section>
            )

          case 'VideoInternalRecord':
            return (
              <section key={block.id} className="section VideoInternalRecord">
                <div className={classNames('container', maxClass)}>
                  <VideoInternal block={block} />
                </div>
              </section>
            )

          case 'ViewMoreLinkRecord':
            return (
              <section key={block.id} className="section ViewMoreLinkRecord">
                <div
                  className={classNames(
                    'container',
                    'has-text-centered',
                    maxClass,
                  )}
                >
                  <ViewMoreLink block={block} />
                </div>
              </section>
            )

          default:
            return null
        }
      })}
    </>
  )
}
