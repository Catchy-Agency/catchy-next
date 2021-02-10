import classNames from 'classnames'
import { FC } from 'react'

import { PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord } from '../../gql/types/PrimaryPageBySlug'
import { COLOR_DARK, COLOR_LIGHT } from '../../styles/colors'
import { CardLinks } from '../content-links/CardLinks'
import { LargeLinks } from '../content-links/LargeLinks'
import { MediumLinks } from '../content-links/MediumLinks'

const urlPrefixes = {
  ContentPageRecord: '/pages/',
  ContentPostRecord: '/posts/',
  PrimaryPageRecord: '/',
} as const

export const ContentLinkSet: FC<{
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
  const alternating = block.alternatingAlignments
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
