import { FC } from 'react'

import { PrimaryPageBySlug_primaryPage_blocks_ViewMoreLinkRecord } from '../../gql/types/PrimaryPageBySlug'

export const ViewMoreLink: FC<{
  block: PrimaryPageBySlug_primaryPage_blocks_ViewMoreLinkRecord
}> = ({ block }) => (
  <section className="section" key={block.id}>
    <div className="container">{'ViewMoreLinkRecord'}</div>
  </section>
)
