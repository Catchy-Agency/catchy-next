import { FC } from 'react'

import { ContentPostBySlug_contentPost_blocks_ButtonExternalRecord } from '../../gql/types/ContentPostBySlug'

export const ButtonExternal: FC<{
  block: ContentPostBySlug_contentPost_blocks_ButtonExternalRecord
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
