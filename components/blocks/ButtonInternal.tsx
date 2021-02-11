import Link from 'next/link'
import { FC } from 'react'

import { ContentPostBySlug_contentPost_blocks_ButtonInternalRecord } from '../../gql/types/ContentPostBySlug'
import { prefixByTypename } from '../../util/url'

export const ButtonInternal: FC<{
  block: ContentPostBySlug_contentPost_blocks_ButtonInternalRecord
}> = ({ block }) => (
  <section className="section">
    <div className="container has-text-centered">
      {block.link && (
        <Link href={prefixByTypename[block.link.__typename] + block.link.slug}>
          <a className="button is-medium is-primary">{block.label}</a>
        </Link>
      )}
    </div>
  </section>
)
