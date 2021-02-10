import { FC } from 'react'

import { ContentPostBySlug_contentPost_blocks_ButtonExternalRecord } from '../../gql/types/ContentPostBySlug'

export const ButtonExternal: FC<{
  block: ContentPostBySlug_contentPost_blocks_ButtonExternalRecord
}> = ({ block }) => (
  <section className="section">
    <div className="container has-text-centered">
      <a
        className="button is-medium is-primary"
        href={block.url || undefined}
        target="_blank"
      >
        {block.label}
      </a>
    </div>
  </section>
)
