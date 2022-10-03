import classNames from 'classnames'
import { FC } from 'react'
import { Image } from 'react-datocms'

import { LinkData } from '../LinkData'

import { EffectFade, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'

import { useMediaQuery } from '../../hooks/useMediaQuery'

export const ContentBannerMS: FC<{
  imageAlign?: string | null
  links: LinkData[]
  displaySize: string | null
  contentSize: string | null
}> = ({ links, imageAlign, contentSize, displaySize }) => {
  const deviceSize = useMediaQuery()
  const paginationID = Math.floor(Math.random() * 100)
  return (
    <div
      className={classNames('hero-banner', {
        //TODO 'link-alternating': imageAlign === 'Alternating',
        'link-left': imageAlign === 'Left',
        'is-medium': displaySize === 'Banner (Medium)',
        'is-small': displaySize !== 'Banner (Medium)',
      })}
    >
      <Swiper
        modules={[Pagination, EffectFade]}
        spaceBetween={0} //0.75rem * 2
        slidesPerView={1}
        pagination={{
          clickable: true,
          el: `.swiper-pagination-container-${paginationID}`,
          type: 'bullets',
        }}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        loop
        centeredSlides={false}
      >
        {links.map((link) => (
          <SwiperSlide key={link.id} style={{ height: 'unset' }}>
            <div
              className={classNames(
                'columns is-vcentered position-relative is-justify-content-space-between',
                {
                  'is-flex-direction-row-reverse':
                    imageAlign !== 'Right' &&
                    (deviceSize == 'desktop' || deviceSize == 'fullhd'),
                },
              )}
            >
              <div
                className={classNames(
                  'column hero-banner-content is-flex-grow-0',
                  {
                    'content-md is-5':
                      contentSize === 'Medium' ||
                      displaySize === 'Banner (Medium)',
                    'content-sm is-7':
                      contentSize === 'Small' ||
                      displaySize !== 'Banner (Medium)',
                  },
                )}
              >
                <div className="columns is-flex is-flex-direction-column">
                  <div className="columns column is-flex is-flex-direction-column">
                    {link.title && (
                      <div className="column">
                        <div className="title is-3">{link.title}</div>
                      </div>
                    )}
                    {link.description && (
                      <div className="column content has-text-light">
                        {link.description}
                      </div>
                    )}
                  </div>
                  <div className="column">
                    <button className="button is-primary">
                      {link.callToAction}
                    </button>
                  </div>
                </div>
              </div>
              <div
                className={classNames(
                  'column is-flex-grow-0 content-tile-img',
                  {
                    'image-md is-6':
                      contentSize === 'Medium' ||
                      displaySize === 'Banner (Medium)',
                    'image-sm is-4':
                      contentSize === 'Small' ||
                      displaySize !== 'Banner (Medium)',
                  },
                )}
              >
                {displaySize === 'Banner (Medium)' && link.image && (
                  <Image
                    data={link.image}
                    lazyLoad={false}
                    layout="responsive"
                    objectFit="cover"
                    objectPosition="50% 50%"
                  />
                )}
                {displaySize !== 'Banner (Medium)' && link.imageSm && (
                  <Image
                    data={link.imageSm}
                    lazyLoad={false}
                    layout="responsive"
                    objectFit="cover"
                    objectPosition="50% 50%"
                  />
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={`swiper-pagination-container-${paginationID}`} />
    </div>
  )
}
