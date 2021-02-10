import Link from 'next/link'
import { FC } from 'react'

import { PrimaryPageBySlug_primaryPage_blocks_ViewMoreLinkRecord } from '../../gql/types/PrimaryPageBySlug'

export const ViewMoreLink: FC<{
  block: PrimaryPageBySlug_primaryPage_blocks_ViewMoreLinkRecord
}> = ({ block }) => (
  <section className="section">
    <div className="container has-text-right">
      <Link href={block.url || ''}>
        <a>{block.text}</a>
      </Link>
    </div>
  </section>
)
