import { FC } from 'react'
import classNames from 'classnames'
import { ResponsiveImageType } from 'react-datocms'

import { prefixByTypename } from '../util/url'
import { PrimaryPageBySlug_primaryPage_blocks } from '../gql/types/PrimaryPageBySlug'
import { BlogPostBySlug_blogPost_blocks } from '../gql/types/BlogPostBySlug'
import { ClientSet } from './blocks/ClientSet'
import { Formula } from './blocks/Formula'
import { ServiceSet } from './blocks/ServiceSet'
import { Team } from './blocks/Team'
import { TitleText } from './blocks/TitleText'
import { ViewMoreLink } from './blocks/ViewMoreLink'
import { ImageSet } from './blocks/ImageSet'
import { RichText } from './blocks/RichText'
import { Title } from './blocks/Title'
import { Video } from './blocks/Video'
import { ButtonExternal } from './blocks/ButtonExternal'
import { ButtonInternal } from './blocks/ButtonInternal'
import { ColumnRow } from './blocks/ColumnRow'
import { CardLinks } from './content-links/CardLinks'
import { LargeLinks } from './content-links/LargeLinks'
import { MediumLinks } from './content-links/MediumLinks'

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
          case 'BannerRecord':
            return (
              <section
                key={block.id}
                className="section BannerRecord hero is-dark is-relative"
              >
                {block.backgroundImage?.url && (
                  <div
                    style={{
                      background: `url(${block.backgroundImage.url}) no-repeat center bottom`,
                      backgroundSize: 'cover',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                    }}
                  />
                )}
                <div className={classNames('container', maxClass)}>
                  {block.title && (
                    <div className="title is-2">{block.title}</div>
                  )}
                  {block.text && (
                    <div
                      className="content"
                      dangerouslySetInnerHTML={{ __html: block.text }}
                    />
                  )}
                </div>
              </section>
            )

          case 'ButtonExternalRecord':
            return (
              <section key={block.id} className="section ButtonExternalRecord">
                <div
                  className={classNames(
                    'container',
                    'has-text-centered',
                    maxClass,
                  )}
                >
                  <ButtonExternal block={block} />
                </div>
              </section>
            )

          case 'ButtonInternalRecord':
            return (
              <section key={block.id} className="section ButtonInternalRecord">
                <div
                  className={classNames(
                    'container',
                    'has-text-centered',
                    maxClass,
                  )}
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
              <section key={block.id} className="section ColumnRowRecord">
                <div className={classNames('container', maxClass)}>
                  <ColumnRow block={block} />
                </div>
              </section>
            )

          case 'ContentLinkSetRecord': {
            const alternating = block.alternatingAlignments
            const hasBackgroundColor = block.hasBackgroundColor
            const callToAction = block.callToActionLabel
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
              case 'Card':
                return (
                  <section
                    key={block.id}
                    className="section ContentLinkSetRecord Card"
                  >
                    <div className={classNames('container', maxClass)}>
                      <CardLinks
                        links={links}
                        hasBackgroundColor={hasBackgroundColor}
                      />
                    </div>
                  </section>
                )
              case 'Medium':
                return (
                  <section
                    key={block.id}
                    className="section ContentLinkSetRecord Medium"
                  >
                    <div
                      className={classNames('container', maxClass, {
                        alternating,
                      })}
                    >
                      <MediumLinks
                        links={links}
                        hasBackgroundColor={hasBackgroundColor}
                      />
                    </div>
                  </section>
                )
              case 'Large':
                return (
                  <section
                    key={block.id}
                    className={classNames(
                      'section',
                      'ContentLinkSetRecord',
                      'Large',
                      { 'has-background-grey-darker': hasBackgroundColor },
                    )}
                  >
                    <div
                      className={classNames('container', maxClass, {
                        alternating,
                      })}
                    >
                      <LargeLinks links={links} />
                    </div>
                  </section>
                )
              default:
                return null
            }
          }

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
                <div className={classNames('container', maxClass)}>
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

          case 'TitleRecord':
            return (
              <section key={block.id} className="section TitleRecord">
                <div className={classNames('container', maxClass)}>
                  <Title block={block} />
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
            )

          default:
            return null
        }
      })}
    </>
  )
}
