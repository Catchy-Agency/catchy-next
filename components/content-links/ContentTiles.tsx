import classNames from 'classnames'
import Link from 'next/link'
import { FC } from 'react'
import { Image } from 'react-datocms'

import { IconPlus } from '../icons'
import { LinkData } from './LinkData'

import { Navigation } from 'swiper' //Pagination
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'

import { useMediaQuery } from '../hooks/useMediaQuery'

const CardContent: FC<{
  link: LinkData
}> = ({ link }) => (
  // <Link href={link.url || ''}>
  <div
    className="card has-background-grey-darker"
    style={{ height: '100%' }}
    tabIndex={1}
  >
    {link.image && (
      <div className="card-image">
        {link.image && <Image data={link.image} lazyLoad={false} />}
      </div>
    )}
    <div className="card-title">
      {link.title && (
        <h5 className="title is-5">
          {link.title}
          <IconPlus />
        </h5>
      )}
    </div>
    <div className="card-content">
      {link.title && <h5 className="title is-5">{link.title}</h5>}
      {link.description && <div className="content">{link.description}</div>}
      <Link href={link.url || ''}>
        <a>
          <button
            className="button is-ghost mt-3"
            style={{
              padding: 0,
            }}
          >
            {link.callToAction}
          </button>
        </a>
      </Link>
    </div>
  </div>
  // </Link>
)

export const ContentTile: FC<{
  links: LinkData[]
  isSlider: boolean
  displaySize: string | null
}> = ({ links, isSlider, displaySize }) => {
  const deviceSize = useMediaQuery()

  return (
    <div className="card-columns">
      {isSlider ? (
        <>
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            allowTouchMove={false}
            preventClicks={true}
            slidesPerView={
              deviceSize == 'mobile'
                ? 1
                : deviceSize == 'tablet' ||
                  (displaySize &&
                    ['2-Column', 'Thumb: Row', 'Card: Row'].includes(
                      displaySize,
                    ))
                ? 2
                : 3
            }
            navigation={{
              nextEl: '.swiper-button-next-btn',
              prevEl: '.swiper-button-prev-btn',
            }}
            loop
          >
            {links.map((link) => (
              <SwiperSlide
                key={link.id}
                className="_column _is-half _is-one-third-desktop"
                style={{ height: 'unset' }}
                // eslint-disable-next-line @typescript-eslint/no-unsafe-return
                // onClick={(e) => e.target.focus()}
              >
                <CardContent link={link} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-prev-btn">
            <span className="is-sr-only">Previous</span>
            <svg
              width="87"
              height="87"
              viewBox="0 0 87 87"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="43.5"
                cy="43.5"
                r="43"
                transform="rotate(180 43.5 43.5)"
                fill="#0D202C"
                fillOpacity="0.9"
                stroke="#1DBC83"
              />
              <path
                d="M18.9393 40.9393C18.3536 41.5251 18.3536 42.4749 18.9393 43.0607L28.4853 52.6066C29.0711 53.1924 30.0208 53.1924 30.6066 52.6066C31.1924 52.0208 31.1924 51.0711 30.6066 50.4853L22.1213 42L30.6066 33.5147C31.1924 32.9289 31.1924 31.9792 30.6066 31.3934C30.0208 30.8076 29.0711 30.8076 28.4853 31.3934L18.9393 40.9393ZM71 40.5L20 40.5L20 43.5L71 43.5L71 40.5Z"
                fill="#1DBC83"
              />
            </svg>
          </div>
          <div className="swiper-button-next-btn">
            <span className="is-sr-only">Next</span>
            <svg
              width="87"
              height="87"
              viewBox="0 0 87 87"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="43.5"
                cy="43.5"
                r="43"
                fill="#0D202C"
                fillOpacity="0.6"
                stroke="#1DBC83"
              />
              <path
                d="M68.0607 46.0607C68.6464 45.4749 68.6464 44.5251 68.0607 43.9393L58.5147 34.3934C57.9289 33.8076 56.9792 33.8076 56.3934 34.3934C55.8076 34.9792 55.8076 35.9289 56.3934 36.5147L64.8787 45L56.3934 53.4853C55.8076 54.0711 55.8076 55.0208 56.3934 55.6066C56.9792 56.1924 57.9289 56.1924 58.5147 55.6066L68.0607 46.0607ZM16 46.5H67V43.5H16V46.5Z"
                fill="#1DBC83"
              />
            </svg>
          </div>
        </>
      ) : (
        <div
          className="columns"
          style={{
            flexWrap: 'wrap',
            alignItems: 'stretch',
          }}
        >
          {links.map((link) => (
            <div
              key={link.id}
              className={classNames('column is-half', {
                'is-one-third-desktop':
                  displaySize === '3-Column' ||
                  displaySize === 'Card: Columns' ||
                  displaySize == 'Thumb: Columns',
              })}
            >
              <CardContent link={link} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
