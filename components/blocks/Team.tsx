import { FC } from 'react'
import { Image } from 'react-datocms'

import { PrimaryPageBySlug_primaryPage_blocks_TeamRecord } from '../../gql/types/PrimaryPageBySlug'

export const Team: FC<{
  block: PrimaryPageBySlug_primaryPage_blocks_TeamRecord
}> = ({ block }) => (
  <section className="section">
    <div className="container">
      <div className="columns is-mobile is-multiline is-centered">
        {block.members.map((member) => (
          <div
            key={member.id}
            className="column is-4-mobile is-3-tablet has-text-centered pb-5"
          >
            {member.image?.responsiveImage && (
              <figure className="circle-crop mb-3">
                <Image data={member.image.responsiveImage as any} />
              </figure>
            )}
            {member.name && <h4 className="title is-4">{member.name}</h4>}
            {member.title && <h6 className="subtitle is-6">{member.title}</h6>}
          </div>
        ))}
      </div>
    </div>
  </section>
)
