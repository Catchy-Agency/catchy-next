import { FC } from 'react'

import { BlogPostBySlug_blogPost_blocks_VideoRecord } from '../../gql/types/BlogPostBySlug'

export const Video: FC<{
  block: BlogPostBySlug_blogPost_blocks_VideoRecord
}> = ({ block }) => {
  switch (block?.video?.provider) {
    case 'youtube':
      return (
        <div
          className="video"
          style={{
            position: 'relative',
            paddingBottom: 'calc(9/16 * 100%)',
            paddingTop: 25,
            height: 0,
          }}
        >
          <iframe
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
            src={`https://www.youtube.com/embed/${
              block.video.providerUid || ''
            }`}
            frameBorder="0"
          />
        </div>
      )
    default:
      return null
  }
}
