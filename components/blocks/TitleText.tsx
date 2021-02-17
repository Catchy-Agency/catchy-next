import { FC } from 'react'

import { PrimaryPageBySlug_primaryPage_blocks_TitleTextRecord } from '../../gql/types/PrimaryPageBySlug'

export const TitleText: FC<{
  block: PrimaryPageBySlug_primaryPage_blocks_TitleTextRecord
}> = ({ block }) => (
  <>
    {block.title && <h2 className="title is-2">{block.title}</h2>}
    {block.text && (
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: block.text }}
      />
    )}
  </>
)
