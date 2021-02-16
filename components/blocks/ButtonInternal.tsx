import Link from 'next/link'
import { FC } from 'react'

import { BlogPostBySlug_blogPost_blocks_ButtonInternalRecord } from '../../gql/types/BlogPostBySlug'
import { prefixByTypename } from '../../util/url'

export const ButtonInternal: FC<{
  block: BlogPostBySlug_blogPost_blocks_ButtonInternalRecord
}> = ({ block }) =>
  block.link && (
    <Link
      href={`${prefixByTypename[block.link.__typename]}${
        block.link.slug || ''
      }`}
    >
      <a className="button is-medium is-primary">{block.label}</a>
    </Link>
  )
