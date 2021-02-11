import { FC } from 'react'

import { ContentPostBySlug_contentPost_blocks_TitleRecord } from '../../gql/types/ContentPostBySlug'

export const Title: FC<{
  block: ContentPostBySlug_contentPost_blocks_TitleRecord
}> = ({ block }) =>
  block.title ? <div className="title is-3">{block.title}</div> : null
