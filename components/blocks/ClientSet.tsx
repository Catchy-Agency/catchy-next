import { FC } from 'react'

import { PrimaryPageBySlug_primaryPage_blocks_ClientSetRecord } from '../../gql/types/PrimaryPageBySlug'

export const ClientSet: FC<{
  block: PrimaryPageBySlug_primaryPage_blocks_ClientSetRecord
}> = ({ block }) => (
  <section className="section" key={block.id}>
    <div className="container">
      <div className="columns is-mobile is-multiline is-centered">
        {block.clientSet.map((client) => (
          <div key={client.id} className="column is-4-mobile is-3-tablet">
            <figure className="image">
              <img
                src={client.logo?.url || ''}
                title={client.name || ''}
                alt={client.name || ''}
              />
            </figure>
          </div>
        ))}
      </div>
    </div>
  </section>
)
