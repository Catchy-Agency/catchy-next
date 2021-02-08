import { FC } from 'react'

import { PrimaryPageBySlug_primaryPage_blocks_FormulaRecord } from '../../gql/types/PrimaryPageBySlug'

export const Formula: FC<{
  block: PrimaryPageBySlug_primaryPage_blocks_FormulaRecord
}> = ({ block }) => (
  <section className="section">
    <div className="container">{block.__typename}</div>
  </section>
)
