import { FC } from 'react'

import { PrimaryPageBySlug_primaryPage_blocks_TeamRecord } from '../../gql/types/PrimaryPageBySlug'

export const Team: FC<{
  block: PrimaryPageBySlug_primaryPage_blocks_TeamRecord
}> = ({ block }) => (
  <section className="section" key={block.id}>
    <div className="container">{'TeamRecord'}</div>
  </section>
)
