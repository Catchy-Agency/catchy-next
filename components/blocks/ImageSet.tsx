import { FC } from 'react'
import { Image } from 'react-datocms'

import { ContentPostBySlug_contentPost_blocks_ImageSetRecord } from '../../gql/types/ContentPostBySlug'

export const ImageSet: FC<{
  block: ContentPostBySlug_contentPost_blocks_ImageSetRecord
}> = ({ block }) => (
  <section className="section">
    <div className="container">
      <div className="columns is-vcentered">
        {block.imageSet.map((image) => (
          <div className="column">
            <Image data={image.responsiveImage as any} />
          </div>
        ))}
      </div>
    </div>
  </section>
)
