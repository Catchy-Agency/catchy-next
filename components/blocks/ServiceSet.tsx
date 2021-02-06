import { FC } from 'react'
import ReactMarkdown from 'react-markdown'

import { PrimaryPageBySlug_primaryPage_blocks_ServiceSetRecord } from '../../gql/types/PrimaryPageBySlug'

export const ServiceSet: FC<{
  block: PrimaryPageBySlug_primaryPage_blocks_ServiceSetRecord
}> = ({ block }) => (
  <section className="section" key={block.id}>
    <div className="container">
      <div className="columns">
        {block.services.map((service) => (
          <div key={service.id} className="column has-text-centered">
            <div className="title is-4">
              <span className="fa-stack fa-3x">
                <i
                  className="fas fa-circle fa-stack-2x"
                  style={{
                    color: service.iconBackgroundColor?.hex || '#0D202C',
                  }}
                ></i>
                <i
                  className={`fas fa-${service.iconName} fa-stack-1x`}
                  style={{
                    color: service.iconColor?.hex || '#F6F6F6',
                  }}
                ></i>
              </span>
            </div>
            {service.title && <div className="title is-5">{service.title}</div>}
            {service.text && (
              <div className="content">
                <ReactMarkdown>{service.text}</ReactMarkdown>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
)
