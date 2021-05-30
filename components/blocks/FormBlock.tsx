import { FC } from 'react'

import { PrimaryPageBySlug_primaryPage_blocks_FormBlockRecord } from '../../gql/types/PrimaryPageBySlug'

export const FormBlock: FC<{
  block: PrimaryPageBySlug_primaryPage_blocks_FormBlockRecord
}> = ({ block }) => (
  <div className="columns">
    <pre>{JSON.stringify(block, null, 2)}</pre>
  </div>
)
