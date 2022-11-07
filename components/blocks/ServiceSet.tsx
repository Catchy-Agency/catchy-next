import classNames from 'classnames'
import { FC } from 'react'
import { Image, ResponsiveImageType } from 'react-datocms'

import { PrimaryPageBySlug_primaryPage_blocks_ServiceSetRecord } from '../../gql/types/PrimaryPageBySlug'

export const ServiceSet: FC<{
  block: PrimaryPageBySlug_primaryPage_blocks_ServiceSetRecord
}> = ({ block }) => (
  <div className="columns is-multiline is-mobile">
    {block.services.map((service) => (
      <div
        key={service.id}
        className="column is-half-mobile is-one-third-tablet is-one-quarter-desktop"
      >
        <div className="service-item">
          <div className="title is-4 py-6">
            {service.serviceImage?.responsiveImage ? (
              <figure className="image">
                <Image
                  data={
                    service.serviceImage?.responsiveImage as ResponsiveImageType
                  }
                  lazyLoad={false}
                />
              </figure>
            ) : (
              <span className="fa-stack fa-3x">
                <i className="fas fa-circle fa-stack-2x has-text-grey-dark" />
                <i
                  className={classNames(service.fontAwesomeIcon, 'fa-stack-1x')}
                />
              </span>
            )}
          </div>
          <div
            className={classNames('content-wrap', {
              'has-text-right': block.textAlignment === 'Right',
              'has-text-centered': block.textAlignment === 'Center',
              'has-text-left':
                block.textAlignment !== 'Right' &&
                block.textAlignment !== 'Center',
            })}
          >
            {service.title && <div className="title is-5">{service.title}</div>}
            {!block.hideTextContent && service.text && (
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: service.text }}
              />
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
)
