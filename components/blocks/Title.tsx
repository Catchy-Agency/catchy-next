import { FC } from 'react'

import { BlogPostBySlug_blogPost_blocks_TitleRecord } from '../../gql/types/BlogPostBySlug'

export const Title: FC<{
  block: BlogPostBySlug_blogPost_blocks_TitleRecord
}> = ({ block }) =>
  block.title ? <div className="title is-3">{block.title}</div> : null
