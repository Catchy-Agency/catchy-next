import { FC } from 'react'
import ReactMarkdown from 'react-markdown'

import { ContentPostBySlug_contentPost_blocks_RichTextRecord } from '../../gql/types/ContentPostBySlug'

export const RichText: FC<{
  block: ContentPostBySlug_contentPost_blocks_RichTextRecord
}> = ({ block }) => (
  <section className="section">
    <div className="container">
      {block.richText && (
        <div className="content">
          <ReactMarkdown>{block.richText}</ReactMarkdown>
        </div>
      )}
    </div>
  </section>
)
