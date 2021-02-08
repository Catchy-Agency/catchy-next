import { FC } from 'react'
import ReactMarkdown from 'react-markdown'

import { PrimaryPageBySlug_primaryPage_blocks_TitleTextRecord } from '../../gql/types/PrimaryPageBySlug'

export const TitleText: FC<{
  block: PrimaryPageBySlug_primaryPage_blocks_TitleTextRecord
}> = ({ block }) => (
  <section className="section">
    <div className="container">
      {block.title && <div className="title is-3">{block.title}</div>}
      {block.text && (
        <div className="content">
          <ReactMarkdown>{block.text}</ReactMarkdown>
        </div>
      )}
    </div>
  </section>
)
