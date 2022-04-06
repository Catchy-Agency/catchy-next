import { FC } from 'react'

import { BlogPostBySlug_blogPost_blocks_VideoInternalRecord } from '../../gql/types/BlogPostBySlug'

export const VideoInternal: FC<{
  block: BlogPostBySlug_blogPost_blocks_VideoInternalRecord
}> = ({ block }) => (
  <video
    width="100%"
    controls
    src={block.video?.video?.mp4Url ?? undefined}
    poster={
      block.thumbnail?.responsiveImage?.src ??
      block.video?.video?.thumbnailUrl ??
      undefined
    }
  />
)
