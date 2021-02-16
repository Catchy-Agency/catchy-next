import { FC } from 'react'

import { BlogPostBySlug_blogPost_blocks_ButtonExternalRecord } from '../../gql/types/BlogPostBySlug'

export const ButtonExternal: FC<{
  block: BlogPostBySlug_blogPost_blocks_ButtonExternalRecord
}> = ({ block }) => (
  <a
    className="button is-medium is-primary"
    href={block.url || undefined}
    target={block.openInNewTab ? '_blank' : undefined}
    rel="noreferrer"
  >
    {block.label}
  </a>
)
