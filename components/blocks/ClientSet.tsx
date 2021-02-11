import { FC } from 'react'
import { Image, ResponsiveImageType } from 'react-datocms'

import { PrimaryPageBySlug_primaryPage_blocks_ClientSetRecord } from '../../gql/types/PrimaryPageBySlug'

export const ClientSet: FC<{
  block: PrimaryPageBySlug_primaryPage_blocks_ClientSetRecord
}> = ({ block }) => (
  <div className="columns is-mobile is-multiline is-centered">
    {block.clientSet.map((client) => (
      <div key={client.id} className="column is-4-mobile is-3-tablet">
        {client.logo?.responsiveImage && (
          <Image data={client.logo.responsiveImage as ResponsiveImageType} />
        )}
      </div>
    ))}
  </div>
)
