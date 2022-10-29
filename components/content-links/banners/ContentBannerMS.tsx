import classNames from 'classnames'
import Link from 'next/link'
import { FC, useMemo } from 'react'
import { Image } from 'react-datocms'

import { LinkData } from '../LinkData'

import { EffectFade, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'

import { useMediaQuery } from '../../hooks/useMediaQuery'

let count = 0

export const ContentBannerMS: FC<{
  imageAlign?: string | null
  links: LinkData[]
  isSlider: boolean
  displaySize: string | null
  contentSize: string | null
}> = ({ links, isSlider, imageAlign, contentSize, displaySize }) => {
  const deviceSize = useMediaQuery()

  // Update pagination ID if props change
  const paginationID = useMemo(() => {
    // Force props as dependencies
    links
    isSlider
    imageAlign
    contentSize
    displaySize
    return `ContentBannerMS${count++}`
  }, [links, isSlider, imageAlign, contentSize, displaySize])

  const paginationClass = `swiper-pagination-container-${paginationID}`

  return (
    <div
      className={classNames('hero-banner', {
        //TODO 'link-alternating': imageAlign === 'Alternating',
        'link-left': imageAlign === 'Left',
        'is-medium': displaySize === 'Banner (Medium)',
        'is-small': displaySize !== 'Banner (Medium)',
      })}
    >
      {isSlider ? (
        <>
          <Swiper
            modules={[Pagination, EffectFade]}
            spaceBetween={0} //0.75rem * 2
            slidesPerView={1}
            pagination={{
              clickable: true,
              el: '.' + paginationClass,
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
                <ContentLink
                  link={link}
                  deviceSize={deviceSize}
                  imageAlign={imageAlign}
                  displaySize={displaySize}
                  contentSize={contentSize}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={paginationClass} />
        </>
      ) : (
        links.map((link) => (
          <ContentLink
            key={link.id}
            link={link}
            deviceSize={deviceSize}
            imageAlign={imageAlign}
            displaySize={displaySize}
            contentSize={contentSize}
          />
        ))
      )}
    </div>
  )
}

const ContentLink: FC<{
  link: LinkData
  deviceSize: string
  imageAlign?: string | null
  displaySize: string | null
  contentSize: string | null
}> = ({ link, deviceSize, imageAlign, displaySize, contentSize }) => (
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
      className={classNames('column hero-banner-content is-flex-grow-0', {
        'content-md is-5':
          contentSize === 'Medium' || displaySize === 'Banner (Medium)',
        'content-sm is-7':
          contentSize === 'Small' || displaySize !== 'Banner (Medium)',
      })}
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
          <Link href={link.url || ''}>
            <a>
              <button className="button is-primary">{link.callToAction}</button>
            </a>
          </Link>
        </div>
      </div>
    </div>
    <div
      className={classNames('column is-flex-grow-0 content-tile-img', {
        'image-md is-6':
          contentSize === 'Medium' || displaySize === 'Banner (Medium)',
        'image-sm is-4':
          contentSize === 'Small' || displaySize !== 'Banner (Medium)',
      })}
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
)
