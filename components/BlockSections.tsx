import { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import classNames from 'classnames'

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
import { ColumnSet } from './blocks/ColumnSet'
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
            <section className="section">
              <div className="container has-text-centered">
                <ButtonExternal key={block.id} block={block} />
              </div>
            </section>
          )

        case 'ButtonInternalRecord':
          return (
            <section className="section">
              <div className="container has-text-centered">
                <ButtonInternal key={block.id} block={block} />
              </div>
            </section>
          )

        case 'ClientSetRecord':
          return (
            <section className="section">
              <div className="container">
                <ClientSet key={block.id} block={block} />
              </div>
            </section>
          )

        case 'ColumnSetRecord':
          return (
            <section className="section">
              <div className="container">
                <ColumnSet key={block.id} block={block} />
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
            url: prefixByTypename[link.__typename] + link.slug,
            title: link.seo?.title || null,
            description: link.seo?.description || null,
            image: (link.seo?.image?.responsiveImage as any) || null,
            callToAction,
            backgroundColor,
            textColor,
          }))
          switch (block.displaySize) {
            case 'Card':
              return (
                <section className="section" key={block.id}>
                  <div className="container">
                    <CardLinks links={links} />
                  </div>
                </section>
              )
            case 'Medium':
              return (
                <section className="section" key={block.id}>
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
                  className="section"
                  key={block.id}
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
            <section className="section">
              <div className="container">
                <Formula key={block.id} block={block} />
              </div>
            </section>
          )

        case 'ImageSetRecord':
          return (
            <section className="section">
              <div className="container">
                <ImageSet key={block.id} block={block} />
              </div>
            </section>
          )

        case 'RichTextRecord':
          return (
            <section className="section">
              <div className="container">
                <RichText key={block.id} block={block} />
              </div>
            </section>
          )

        case 'ServiceSetRecord':
          return (
            <section className="section">
              <div className="container">
                <ServiceSet key={block.id} block={block} />
              </div>
            </section>
          )

        case 'TeamRecord':
          return (
            <section className="section">
              <div className="container">
                <Team key={block.id} block={block} />
              </div>
            </section>
          )

        case 'TitleRecord':
          return (
            <section className="section">
              <div className="container">
                <Title key={block.id} block={block} />
              </div>
            </section>
          )

        case 'TitleTextRecord':
          return (
            <section className="section">
              <div className="container">
                <TitleText key={block.id} block={block} />
              </div>
            </section>
          )

        case 'VideoRecord':
          return (
            <section className="section">
              <div className="container">
                <Video key={block.id} block={block} />
              </div>
            </section>
          )

        case 'ViewMoreLinkRecord':
          return (
            <section className="section">
              <div className="container has-text-right">
                <ViewMoreLink key={block.id} block={block} />
              </div>
            </section>
          )

        default:
          return null
      }
    })}
  </>
)
