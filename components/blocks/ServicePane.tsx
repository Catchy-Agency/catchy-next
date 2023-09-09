import classNames from 'classnames'
import { FC } from 'react'
import { Image, ResponsiveImageType } from 'react-datocms'

import { PrimaryPageBySlug_primaryPage_blocks_ServicePaneRecord } from '../../gql/types/PrimaryPageBySlug'

export const ServicePane: FC<{
  block: PrimaryPageBySlug_primaryPage_blocks_ServicePaneRecord
}> = ({ block }) => {
  console.log(block)
  return (
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
                      service.serviceImage
                        ?.responsiveImage as ResponsiveImageType
                    }
                    lazyLoad={false}
                  />
                </figure>
              ) : (
                <span className="fa-stack fa-3x">
                  <i className="fas fa-circle fa-stack-2x has-text-grey-dark" />
                  <i
                    className={classNames(
                      service.fontAwesomeIcon,
                      'fa-stack-1x',
                    )}
                  />
                </span>
              )}
            </div>
            <div className={classNames('content-wrap')}>
              {service.title && (
                <div className="title is-5">{service.title}</div>
              )}
              {service.text && (
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
}
