import classNames from 'classnames'
import { FC } from 'react'
import { Image } from 'react-datocms'

import { PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord } from '../../gql/types/PrimaryPageBySlug'
import { COLOR_DARK, COLOR_LIGHT } from '../../styles/colors'
import { CardLinks } from '../content-links/CardLinks'

const urlPrefixes = {
  ContentPageRecord: '/pages/',
  ContentPostRecord: '/posts/',
  PrimaryPageRecord: '/',
} as const

export const ContentLinkSet: FC<{
  block: PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord
}> = ({ block }) => {
  switch (block.displaySize) {
    case 'Card':
      return <CardContentLinkSet block={block} />
    case 'Medium':
      return <MediumContentLinkSet block={block} />
    case 'Large':
      return <LargeContentLinkSet block={block} />
    default:
      return null
  }
}

const CardContentLinkSet: FC<{
  block: PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord
}> = ({ block }) => {
  const backgroundColor = block.backgroundColor?.hex || COLOR_DARK
  const textColor = block.textColor?.hex || COLOR_LIGHT
  const callToAction = block.callToActionLabel
  const links = block.links.map((link) => {
    const id = link.id
    const title = link.seo?.title || null
    const description = link.seo?.description || null
    const image: any = link.seo?.image?.responsiveImage || null
    const url = urlPrefixes[link.__typename] + link.slug
    return {
      id,
      url,
      title,
      description,
      callToAction,
      image,
      backgroundColor,
      textColor,
    }
  })
  return (
    <section className="section" key={block.id}>
      <div className="container">
        <CardLinks links={links} />
      </div>
    </section>
  )
}

const MediumContentLinkSet: FC<{
  block: PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord
}> = ({ block }) => {
  const backgroundColor = block.backgroundColor?.hex || COLOR_DARK
  const color = block.textColor?.hex || COLOR_LIGHT
  const cta = block.callToActionLabel
  const alternating = block.alternatingAlignments
  return (
    <section className="section" key={block.id}>
      <div
        className={classNames('container', { alternating })}
        style={{ backgroundColor, color }}
      >
        {block.links.map((link) => {
          const title = link.seo?.title || undefined
          const description = link.seo?.description || undefined
          const image = link.seo?.image?.responsiveImage || undefined
          const url = urlPrefixes[link.__typename] + link.slug
          return (
            <div key={link.id} className="columns block-p">
              <div className="column is-7">
                <div className="p-6">
                  {title && (
                    <div className="title is-2" style={{ color }}>
                      {title}
                    </div>
                  )}
                  {description && <div className="content">{description}</div>}
                  <a className="button" href={url} title={title}>
                    {cta}
                  </a>
                </div>
              </div>
              <div className="column is-5 p-0">
                {image && <Image data={image as any} />}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

const LargeContentLinkSet: FC<{
  block: PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord
}> = ({ block }) => {
  const backgroundColor = block.backgroundColor?.hex || undefined
  const color = block.textColor?.hex || undefined
  const cta = block.callToActionLabel
  const alternating = block.alternatingAlignments
  return (
    <section
      className="section"
      key={block.id}
      style={{ backgroundColor, color }}
    >
      <div className={classNames('container', { alternating })}>
        {block.links.map((link) => {
          const title = link.seo?.title || undefined
          const description = link.seo?.description || undefined
          const image = link.seo?.image?.responsiveImage || undefined
          const url = urlPrefixes[link.__typename] + link.slug
          return (
            <div key={link.id} className="columns block-p">
              <div className="column is-7">
                {title && (
                  <div className="title is-2" style={{ color }}>
                    {title}
                  </div>
                )}
                {description && <div className="content">{description}</div>}
                <a className="button" href={url} title={title}>
                  {cta}
                </a>
              </div>
              <div className="column is-5 p-0">
                {image && <Image data={image as any} />}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
