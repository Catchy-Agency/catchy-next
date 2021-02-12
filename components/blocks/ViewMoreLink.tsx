import Link from 'next/link'
import { FC } from 'react'

import { PrimaryPageBySlug_primaryPage_blocks_ViewMoreLinkRecord } from '../../gql/types/PrimaryPageBySlug'

export const ViewMoreLink: FC<{
  block: PrimaryPageBySlug_primaryPage_blocks_ViewMoreLinkRecord
}> = ({ block }) => (
  <Link href={block.url || ''}>
    <a className="is-size-5">{block.text}</a>
  </Link>
)
