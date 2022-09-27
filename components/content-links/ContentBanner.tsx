import classNames from 'classnames'
import { FC } from 'react'
import { Image } from 'react-datocms'

import { LinkData } from './LinkData'

import { EffectFade, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'

import { useMediaQuery } from '../hooks/useMediaQuery'

export const ContentBanner: FC<{
  heroBannerImageSize?: string | null
  imageAlign?: string | null
  links: LinkData[]
}> = ({ links, imageAlign, heroBannerImageSize }) => {
  const deviceSize = useMediaQuery()

  return (
    <div
      className={classNames('hero-banner', {
        'link-alternating': imageAlign === 'Alternating',
        'link-left': imageAlign === 'Left',
        'is-large': heroBannerImageSize === 'Large',
      })}
    >
      <Swiper
        modules={[Pagination, EffectFade]}
        spaceBetween={0} //0.75rem * 2
        slidesPerView={1}
        pagination={{
          clickable: true,
          el: '.swiper-pagination-container',
          type: 'bullets',
        }}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        loop
        centeredSlides={false}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {links.map((link) => (
          <SwiperSlide key={link.id}>
            <div
              className={classNames(
                'columns is-vcentered position-relative is-justify-content-space-between',
                {
                  'mx-0': heroBannerImageSize === 'Large',
                },
              )}
            >
              <div
                className={classNames('column hero-banner-content', {
                  'content-lg is-12': heroBannerImageSize === 'Large',
                  'content-md is-5': heroBannerImageSize === 'Medium',
                  'content-sm is-7': heroBannerImageSize === 'Small',
                })}
              >
                <div
                  className={classNames('columns is-flex', {
                    'is-flex-direction-row': heroBannerImageSize === 'Large',
                    'is-flex-direction-column':
                      heroBannerImageSize !== 'Large' ||
                      deviceSize === 'mobile',
                  })}
                >
                  <div
                    className={classNames('columns column is-flex', {
                      'is-9': heroBannerImageSize === 'Large',
                      'is-flex-direction-row':
                        heroBannerImageSize == 'Large' &&
                        deviceSize == 'desktop',
                      'is-flex-direction-column':
                        heroBannerImageSize !== 'Large' ||
                        deviceSize !== 'fullhd',
                    })}
                  >
                    {link.title && (
                      <div
                        className={classNames('column', {
                          'is-6':
                            heroBannerImageSize === 'Large' &&
                            deviceSize == 'fullhd',
                        })}
                      >
                        <div className="title is-3">{link.title}</div>
                      </div>
                    )}
                    {link.description && (
                      <div
                        className={classNames('column content has-text-light', {
                          'is-6':
                            heroBannerImageSize === 'Large' &&
                            deviceSize == 'fullhd',
                        })}
                      >
                        {link.description}
                      </div>
                    )}
                  </div>
                  <div
                    className={classNames('column', {
                      'is-flex is-justify-content-end':
                        heroBannerImageSize === 'Large' &&
                        deviceSize !== 'mobile',
                    })}
                  >
                    <button className="button is-primary">
                      {link.callToAction}
                    </button>
                  </div>
                </div>
              </div>
              <div
                className={classNames('column', {
                  'image-lg is-12': heroBannerImageSize === 'Large',
                  'image-md is-6': heroBannerImageSize === 'Medium',
                  'image-sm is-4': heroBannerImageSize === 'Small',
                })}
              >
                {link.image && (
                  <Image
                    data={link.image}
                    lazyLoad={false}
                    layout="responsive"
                    objectFit="cover"
                    objectPosition="50% 50%"
                  />
                )}
              </div>
            </div>

            {/* <Link href={link.url || ''}>
              <a className="fillall">
                <span className="is-sr-only">View</span>
              </a>
            </Link> */}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination-container"> </div>
    </div>
  )
}
