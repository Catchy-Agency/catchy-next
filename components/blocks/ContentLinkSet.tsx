import classNames from 'classnames'
import { FC } from 'react'

import { PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord } from '../../gql/types/PrimaryPageBySlug'
import { COLOR_DARK, COLOR_LIGHT } from '../../styles/colors'
import { RatioImage } from '../RatioImage'

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
  const color = block.textColor?.hex || COLOR_LIGHT
  const cta = block.callToActionLabel
  return (
    <section className="section" key={block.id}>
      <div className="container">
        <div className="columns">
          {block.links.map((link) => {
            const title = link.seo?.title || undefined
            const description = link.seo?.description || undefined
            const image = link.seo?.image?.url || undefined
            const url = urlPrefixes[link.__typename] + link.slug
            return (
              <div key={link.id} className="column">
                <div className="card" style={{ backgroundColor, color }}>
                  <div className="card-image">
                    <RatioImage src={image} title={title} />
                  </div>
                  <div className="card-content">
                    {title && (
                      <div className="title is-6" style={{ color }}>
                        {title}
                      </div>
                    )}
                    {description && (
                      <div className="content">{description}</div>
                    )}
                    <a href={url} title={title}>
                      {cta}
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
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
          const image = link.seo?.image?.url || undefined
          const url = urlPrefixes[link.__typename] + link.slug
          return (
            <div key={link.id} className="columns">
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
              <div className="column is-5">
                <RatioImage src={image} title={title} />
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
          const image = link.seo?.image?.url || undefined
          const url = urlPrefixes[link.__typename] + link.slug
          return (
            <div key={link.id} className="columns">
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
              <div className="column is-5">
                <RatioImage src={image} title={title} />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
