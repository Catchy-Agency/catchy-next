import { FC } from 'react'
import { Image, ResponsiveImageType } from 'react-datocms'

import { PrimaryPageBySlug_primaryPage_blocks_TeamRecord } from '../../gql/types/PrimaryPageBySlug'

export const Team: FC<{
  block: PrimaryPageBySlug_primaryPage_blocks_TeamRecord
}> = ({ block }) => (
  <>
    <h3 className="title has-text-primary team-title">{block.teamTitle}</h3>
    <div className="columns is-mobile is-multiline">
      {block.members.map((member) => (
        <div
          key={member.id}
          className="column is-6-mobile is-4-tablet is-3-desktop has-text-centered pb-5"
        >
          {member.image?.responsiveImage && (
            <figure className="circle-crop mb-3">
              <Image
                data={member.image.responsiveImage as ResponsiveImageType}
                lazyLoad={false}
              />
            </figure>
          )}
          {member.name && (
            <h4 className="title is-4 has-text-primary has-text-weight-bold">
              {member.name}
            </h4>
          )}
          {member.title && (
            <h5 className="subtitle is-5 has-text-weight-bold has-text-white">
              {member.title}
            </h5>
          )}
        </div>
      ))}
    </div>
  </>
)
