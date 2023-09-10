import classNames from 'classnames'
import { FC, useState } from 'react'
import { Image, ResponsiveImageType } from 'react-datocms'

import { PrimaryPageBySlug_primaryPage_blocks_ServicePaneRecord } from '../../gql/types/PrimaryPageBySlug'

const ICON_SIZE = '60px'

export const ServicePane: FC<{
  block: PrimaryPageBySlug_primaryPage_blocks_ServicePaneRecord
}> = ({ block }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeService = block.services[activeIndex]
  if (!activeService) return null
  return (
    <div className="columns has-text-left">
      {/* List */}
      <div className="column is-two-fifths">
        <div
          className="is-flex is-flex-direction-column"
          style={{ position: 'relative', gap: '1.5rem' }}
        >
          {/* bg line */}
          <div
            style={{
              width: '3px',
              position: 'absolute',
              top: `calc(${ICON_SIZE} / 2)`,
              bottom: `calc(${ICON_SIZE} / 2)`,
              left: `calc(${ICON_SIZE} / 2)`,
              zIndex: -1,
              transform: 'translateX(-50%)',
              backgroundColor: '#fff',
            }}
          />
          {/* services */}
          {block.services.map((service, i) => {
            const isActiveService = activeIndex === i
            return (
              <div
                key={service.id}
                className="is-flex is-align-items-center is-clickable"
                onClick={() => setActiveIndex(i)}
              >
                <div
                  style={{
                    background:
                      'radial-gradient(101.36% 145.94% at 0% 0%, rgba(29, 188, 131, 0.43) 4.96%, rgba(0, 0, 0, 0) 100%) #0d202c',
                    minWidth: ICON_SIZE,
                    width: ICON_SIZE,
                    height: ICON_SIZE,
                    borderRadius: 1000,
                    position: 'relative',
                    zIndex: 10,
                  }}
                >
                  {service.serviceImage?.responsiveImage && (
                    <img
                      src={service.serviceImage.responsiveImage.src}
                      style={{
                        width: ICON_SIZE,
                        height: ICON_SIZE,
                        objectFit: 'cover',
                      }}
                    />
                  )}
                </div>
                <div
                  className="is-flex-grow-1 is-flex is-align-items-center"
                  style={{
                    background: isActiveService
                      ? 'radial-gradient(101.36% 145.94% at 0% 0%, rgba(29, 188, 131, 0.43) 4.96%, rgba(0, 0, 0, 0) 100%)'
                      : undefined,
                    height: ICON_SIZE,
                    marginLeft: `calc(-${ICON_SIZE} / 2)`,
                    paddingLeft: `${ICON_SIZE}`,
                  }}
                >
                  <div
                    style={{
                      color: isActiveService ? '#1ebc83' : '#aab1b5',
                      fontWeight: 'bold',
                    }}
                  >
                    {service.title}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      {/* Detail */}
      <div className="column" style={{ backgroundColor: '#143144' }}>
        {activeService.detailImage?.responsiveImage && (
          <figure className="image">
            <Image
              data={
                activeService.detailImage.responsiveImage as ResponsiveImageType
              }
              lazyLoad={false}
            />
          </figure>
        )}
        {activeService.text}
      </div>
    </div>
  )

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
              {/* {service.serviceImage?.responsiveImage ? (
                <figure className="image">
                  <Image
                    data={
                      service.serviceImage
                        .responsiveImage as ResponsiveImageType
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
              )} */}
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
