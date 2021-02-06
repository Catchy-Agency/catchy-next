import { FC } from 'react'

import { PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord } from '../../gql/types/PrimaryPageBySlug'

// Todo: display size
// Todo: call to action button
// Todo: generate URL based on type + slug

export const ContentLinkSet: FC<{
  block: PrimaryPageBySlug_primaryPage_blocks_ContentLinkSetRecord
}> = ({ block }) => (
  <section
    className="section"
    key={block.id}
    style={{
      backgroundColor: block.backgroundColor?.hex || undefined,
      color: block.textColor?.hex || undefined,
    }}
  >
    <div className="container">
      {block.links.map((link) => (
        <div key={link.id} className="columns">
          <div className="column is-7">
            {link.seo?.title && (
              <div
                className="title is-2"
                style={{ color: block.textColor?.hex || undefined }}
              >
                {link.seo.title}
              </div>
            )}
            {link.seo?.description && (
              <div className="content">{link.seo.description}</div>
            )}
          </div>
          <div className="column is-5">
            <figure className="image">
              <img
                src={link.seo?.image?.url || ''}
                title={link.seo?.title || ''}
                alt={link.seo?.title || ''}
              />
            </figure>
          </div>
        </div>
      ))}
    </div>
  </section>
)
