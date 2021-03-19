import { FC } from 'react'
import { Image, ResponsiveImageType } from 'react-datocms'

import { PrimaryPageBySlug_primaryPage_blocks_TeamRecord } from '../../gql/types/PrimaryPageBySlug'

export const Team: FC<{
  block: PrimaryPageBySlug_primaryPage_blocks_TeamRecord
}> = ({ block }) => (
  <div className="columns is-mobile is-multiline is-centered">
    {block.members.map((member) => (
      <div
        key={member.id}
        className="column is-4-mobile is-3-tablet has-text-centered pb-5"
      >
        {member.image?.responsiveImage && (
          <figure className="circle-crop mb-3">
            <Image
              data={member.image.responsiveImage as ResponsiveImageType}
              lazyLoad={false}
            />
          </figure>
        )}
        {member.name && <h4 className="title is-4">{member.name}</h4>}
        {member.title && <h5 className="subtitle is-5">{member.title}</h5>}
      </div>
    ))}
  </div>
)
