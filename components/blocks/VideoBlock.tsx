import { FC } from 'react'

import { ContentPostBySlug_contentPost_blocks_VideoRecord } from '../../gql/types/ContentPostBySlug'
import { Video } from '../Video'

export const VideoBlock: FC<{
  block: ContentPostBySlug_contentPost_blocks_VideoRecord
}> = ({ block }) => (
  <section className="section">
    <div className="container">
      {block.video && <Video video={block.video} />}
    </div>
  </section>
)
