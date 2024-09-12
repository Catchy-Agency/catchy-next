import { FC } from 'react'
import { Image, ResponsiveImageType } from 'react-datocms'

import { PrimaryPageBySlug_primaryPage_blocks_ClientSetRecord } from '../../gql/types/PrimaryPageBySlug'

export const ClientSet: FC<{
  block: PrimaryPageBySlug_primaryPage_blocks_ClientSetRecord
}> = ({ block }) => (
  <div className="clipSoup">
    <div className="columns is-mobile is-multiline ">
      {block.clientSet.map((client) => (
        <div
          key={client.id}
          className="column is-4-mobile is-3-tablet is-2-desktop clip"
        >
          {client.logo?.responsiveImage && (
            <Image
              data={client.logo.responsiveImage as ResponsiveImageType}
              lazyLoad={false}
            />
          )}
        </div>
      ))}
    </div>

    <button className="button is-primary is-dark">See Our Work</button>
  </div>
)
