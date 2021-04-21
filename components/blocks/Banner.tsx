import { FC } from 'react'
import { Image, ResponsiveImageType } from 'react-datocms'

import { PrimaryPageBySlug_primaryPage_blocks_BannerRecord } from '../../gql/types/PrimaryPageBySlug'
import { scrollToContact } from '../../util/scrollToContact'

export const Banner: FC<{
  block: PrimaryPageBySlug_primaryPage_blocks_BannerRecord
}> = ({ block }) => (
  <div className="columns">
    <div className="column">
      {block.title && <h1 className="title is-1">{block.title}</h1>}
      {block.text && (
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: block.text }}
        />
      )}
      {block.showContactButton === true && (
        <button
          className="button is-primary is-medium mt-4"
          onClick={scrollToContact}
        >
          {block.contactButtonLabel}
        </button>
      )}
    </div>
    {block.foregroundImage && (
      <div className="column is-hidden-mobile">
        <Image
          data={block.foregroundImage.responsiveImage as ResponsiveImageType}
          lazyLoad={false}
        />
      </div>
    )}
  </div>
)
