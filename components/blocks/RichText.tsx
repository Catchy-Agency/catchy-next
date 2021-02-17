import { FC } from 'react'

import { BlogPostBySlug_blogPost_blocks_RichTextRecord } from '../../gql/types/BlogPostBySlug'

export const RichText: FC<{
  block: BlogPostBySlug_blogPost_blocks_RichTextRecord
}> = ({ block }) =>
  block.richText ? (
    <div
      className="content"
      dangerouslySetInnerHTML={{ __html: block.richText }}
    />
  ) : null
