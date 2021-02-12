import { FC } from 'react'
import ReactMarkdown from 'react-markdown'

import { PrimaryPageBySlug_primaryPage_blocks_TitleTextRecord } from '../../gql/types/PrimaryPageBySlug'

export const TitleText: FC<{
  block: PrimaryPageBySlug_primaryPage_blocks_TitleTextRecord
}> = ({ block }) => (
  <>
    {block.title && <div className="title is-3">{block.title}</div>}
    {block.text && (
      <div className="content">
        <ReactMarkdown linkTarget="_blank">{block.text}</ReactMarkdown>
      </div>
    )}
  </>
)
