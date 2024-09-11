import classNames from 'classnames'
import { FC } from 'react'
import { Image, ResponsiveImageType } from 'react-datocms'

import { PrimaryPageBySlug_primaryPage_blocks_BannerRecord } from '../../gql/types/PrimaryPageBySlug'
import { scrollToContact } from '../../util/scrollToContact'

export const Banner: FC<{
  block: PrimaryPageBySlug_primaryPage_blocks_BannerRecord
}> = ({ block }) => (
  <div className="columns is-vcentered">
    <div className="column">
      {block.titleOverline && (
        <p className="overline mb-2">{block.titleOverline}</p>
      )}
      {block.title && (
        <h1
          className={classNames('title is-1', {
            'has-green-line': block.addGreenLine,
          })}
        >
          {block.title}
        </h1>
      )}
      {block.subTitle && (
        <h2 className="title is-3 has-text-primary">{block.subTitle}</h2>
      )}
      {block.text && (
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: block.text }}
        />
      )}
      {block.showContactButton === true && (
        <button className="button is-ghost mt-4" onClick={scrollToContact}>
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
