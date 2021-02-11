import { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import classNames from 'classnames'
import { ResponsiveImageType } from 'react-datocms'

import { prefixByTypename } from '../util/url'
import { COLOR_DARK, COLOR_LIGHT } from '../styles/colors'
import { PrimaryPageBySlug_primaryPage_blocks } from '../gql/types/PrimaryPageBySlug'
import { ContentPostBySlug_contentPost_blocks } from '../gql/types/ContentPostBySlug'
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
  blocks: ReadonlyArray<
    | PrimaryPageBySlug_primaryPage_blocks
    | ContentPostBySlug_contentPost_blocks
    | null
  >
}> = ({ blocks }) => (
  <>
    {blocks?.map((block) => {
      switch (block?.__typename) {
        case 'BannerRecord':
          return (
            <section
              key={block.id}
              className="section"
              style={{
                position: 'relative',
                backgroundColor: block.backgroundColor?.hex || COLOR_DARK,
                color: block.textColor?.hex || COLOR_LIGHT,
              }}
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
                ></div>
              )}
              <div className="container">
                {block.title && (
                  <div
                    className="title is-2"
                    style={{ color: block.textColor?.hex || COLOR_LIGHT }}
                  >
                    {block.title}
                  </div>
                )}
                {block.text && (
                  <div className="content">
                    <ReactMarkdown>{block.text}</ReactMarkdown>
                  </div>
                )}
              </div>
            </section>
          )

        case 'ButtonExternalRecord':
          return (
            <section key={block.id} className="section">
              <div className="container has-text-centered">
                <ButtonExternal block={block} />
              </div>
            </section>
          )

        case 'ButtonInternalRecord':
          return (
            <section key={block.id} className="section">
              <div className="container has-text-centered">
                <ButtonInternal block={block} />
              </div>
            </section>
          )

        case 'ClientSetRecord':
          return (
            <section key={block.id} className="section">
              <div className="container">
                <ClientSet block={block} />
              </div>
            </section>
          )

        case 'ColumnRowRecord':
          return (
            <section key={block.id} className="section">
              <div className="container">
                <ColumnRow block={block} />
              </div>
            </section>
          )

        case 'ContentLinkSetRecord': {
          const alternating = block.alternatingAlignments
          const backgroundColor = block.backgroundColor?.hex || COLOR_DARK
          const textColor = block.textColor?.hex || COLOR_LIGHT
          const callToAction = block.callToActionLabel
          const links = block.links.map((link) => ({
            id: link.id,
            url: `${prefixByTypename[link.__typename]}${link.slug || ''}`,
            title: link.seo?.title || null,
            description: link.seo?.description || null,
            image:
              (link.seo?.image?.responsiveImage as ResponsiveImageType) || null,
            callToAction,
            backgroundColor,
            textColor,
          }))
          switch (block.displaySize) {
            case 'Card':
              return (
                <section key={block.id} className="section">
                  <div className="container">
                    <CardLinks links={links} />
                  </div>
                </section>
              )
            case 'Medium':
              return (
                <section key={block.id} className="section">
                  <div
                    className={classNames('container', { alternating })}
                    style={{ backgroundColor, color: textColor }}
                  >
                    <MediumLinks links={links} />
                  </div>
                </section>
              )
            case 'Large':
              return (
                <section
                  key={block.id}
                  className="section"
                  style={{ backgroundColor, color: textColor }}
                >
                  <div className={classNames('container', { alternating })}>
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
            <section key={block.id} className="section">
              <div className="container">
                <Formula block={block} />
              </div>
            </section>
          )

        case 'ImageSetRecord':
          return (
            <section key={block.id} className="section">
              <div className="container">
                <ImageSet block={block} />
              </div>
            </section>
          )

        case 'RichTextRecord':
          return (
            <section key={block.id} className="section">
              <div className="container">
                <RichText block={block} />
              </div>
            </section>
          )

        case 'ServiceSetRecord':
          return (
            <section key={block.id} className="section">
              <div className="container">
                <ServiceSet block={block} />
              </div>
            </section>
          )

        case 'TeamRecord':
          return (
            <section key={block.id} className="section">
              <div className="container">
                <Team block={block} />
              </div>
            </section>
          )

        case 'TitleRecord':
          return (
            <section key={block.id} className="section">
              <div className="container">
                <Title block={block} />
              </div>
            </section>
          )

        case 'TitleTextRecord':
          return (
            <section key={block.id} className="section">
              <div className="container">
                <TitleText block={block} />
              </div>
            </section>
          )

        case 'VideoRecord':
          return (
            <section key={block.id} className="section">
              <div className="container">
                <Video block={block} />
              </div>
            </section>
          )

        case 'ViewMoreLinkRecord':
          return (
            <section key={block.id} className="section">
              <div className="container has-text-right">
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
