import { FC } from 'react'
import ReactMarkdown from 'react-markdown'

import { PrimaryPageBySlug_primaryPage_blocks_ServiceSetRecord } from '../../gql/types/PrimaryPageBySlug'

export const ServiceSet: FC<{
  block: PrimaryPageBySlug_primaryPage_blocks_ServiceSetRecord
}> = ({ block }) => (
  <div className="columns">
    {block.services.map((service) => (
      <div key={service.id} className="column has-text-centered">
        <div className="title is-4">
          <span className="fa-stack fa-3x">
            <i
              className="fas fa-circle fa-stack-2x has-text-grey-dark"
              style={{
                color: service.iconBackgroundColor?.hex || undefined,
              }}
            ></i>
            <i
              className={`fas fa-${service.fontAwesomeIcon || ''} fa-stack-1x`}
              style={{
                color: service.iconColor?.hex || undefined,
              }}
            ></i>
          </span>
        </div>
        {service.title && <div className="title is-5">{service.title}</div>}
        {service.text && (
          <div className="content">
            <ReactMarkdown linkTarget="_blank">{service.text}</ReactMarkdown>
          </div>
        )}
      </div>
    ))}
  </div>
)
