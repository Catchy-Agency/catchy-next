import { FC } from 'react'

import { ContentPostBySlug_contentPost_blocks_ButtonInternalRecord } from '../../gql/types/ContentPostBySlug'

export const ButtonInternal: FC<{
  block: ContentPostBySlug_contentPost_blocks_ButtonInternalRecord
}> = ({ block }) => (
  <section className="section">
    <div className="container has-text-centered">{block.label}</div>
  </section>
)
