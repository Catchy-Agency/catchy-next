import classNames from 'classnames'
import { FC } from 'react'
import { Image, ResponsiveImageType } from 'react-datocms'

import { BlogPostBySlug_blogPost_blocks_ImageSetRecord } from '../../gql/types/BlogPostBySlug'

export const ImageSet: FC<{
  block: BlogPostBySlug_blogPost_blocks_ImageSetRecord
}> = ({ block }) => (
  <div
    className={classNames('columns', {
      'is-vcentered': block.verticallyCenterAcrossImages,
    })}
  >
    {block.imageSet.map((image) => (
      <div key={image.id} className="column">
        <Image
          data={image.responsiveImage as ResponsiveImageType}
          lazyLoad={false}
        />
      </div>
    ))}
  </div>
)
