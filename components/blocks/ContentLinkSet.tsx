import { FC } from 'react'

import { PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord } from '../../gql/types/PrimaryPageBySlug'

// Todo: display size

const urlPrefixes = {
  ContentPageRecord: '/pages/',
  ContentPostRecord: '/posts/',
  PrimaryPageRecord: '/',
} as const

export const ContentLinkSet: FC<{
  block: PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord
}> = ({ block }) => {
  console.log(block)
  const backgroundColor = block.backgroundColor?.hex || undefined
  const color = block.textColor?.hex || undefined
  // const alternating = block.alternatingAlignments
  // const display = block.displaySize
  const cta = block.callToActionLabel
  return (
    <section
      className="section"
      key={block.id}
      style={{ backgroundColor, color }}
    >
      <div className="container">
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
                <figure className="image">
                  <img src={image} title={title} alt={title} />
                </figure>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
