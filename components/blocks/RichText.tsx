import { FC } from 'react'
import ReactMarkdown from 'react-markdown'

import { BlogPostBySlug_blogPost_blocks_RichTextRecord } from '../../gql/types/BlogPostBySlug'

export const RichText: FC<{
  block: BlogPostBySlug_blogPost_blocks_RichTextRecord
}> = ({ block }) =>
  block.richText ? (
    <div className="content">
      <ReactMarkdown linkTarget="_blank">{block.richText}</ReactMarkdown>
    </div>
  ) : null
