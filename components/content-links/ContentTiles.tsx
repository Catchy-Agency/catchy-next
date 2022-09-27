import classNames from 'classnames'
import Link from 'next/link'
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import { Image } from 'react-datocms'

import { IconDash, IconPlus, LeftSliderArrow, RightSliderArrow } from '../icons'
import { LinkData } from './LinkData'

import { Navigation } from 'swiper' //Pagination
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'

import { useMediaQuery } from '../hooks/useMediaQuery'

interface CardProps {
  link: LinkData
  contentKey: string
  setActiveCard: Dispatch<SetStateAction<string>>
  activeCard: string | null
}

const CardContent: FC<CardProps> = ({
  link,
  contentKey,
  activeCard,
  setActiveCard,
}) => {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    setIsActive(activeCard == contentKey)
  }, [activeCard, contentKey])

  return (
    <div
      className={classNames('card has-background-grey-darker', {
        isActive,
      })}
      style={{ height: '100%' }}
      tabIndex={1}
      onClick={() => {
        setActiveCard(contentKey)
        if (!isActive) {
          setIsActive(true)
        }
      }}
    >
      {link.image && (
        <div className="card-image">
          <Link href={link.url || ''}>
            <a className="fillall">
              <span className="is-sr-only">View</span>
            </a>
          </Link>
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
        <Link href={link.url || ''}>
          <a className="fillall">
            <span className="is-sr-only">View</span>
          </a>
        </Link>
        <div
          className="icon-dash-wrap"
          onClick={() => {
            setIsActive(false)
          }}
        >
          <IconDash />
        </div>
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
}

export const ContentTile: FC<{
  links: LinkData[]
  isSlider: boolean
  displaySize: string | null
}> = ({ links, isSlider, displaySize }) => {
  const [activeCard, setActiveCard] = useState('')
  const deviceSize = useMediaQuery()

  return (
    <div className={classNames('card-columns', deviceSize.toLowerCase())}>
      {isSlider ? (
        <>
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            // allowTouchMove={false}
            // preventClicks={true}
            threshold={50}
            slidesPerView={
              deviceSize == 'mobile'
                ? 1
                : deviceSize == 'tablet' ||
                  (displaySize &&
                    ['Two-Column', 'Thumb: Row', 'Card: Row'].includes(
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
              <SwiperSlide key={link.id} style={{ height: 'unset' }}>
                <CardContent
                  link={link}
                  contentKey={link.id}
                  setActiveCard={setActiveCard}
                  activeCard={activeCard}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            className="swiper-button-prev-btn"
            onClick={() => setActiveCard('')}
          >
            <span className="is-sr-only">Previous</span>
            <LeftSliderArrow />
          </div>
          <div
            className="swiper-button-next-btn"
            onClick={() => setActiveCard('')}
          >
            <span className="is-sr-only">Next</span>
            <RightSliderArrow />
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
                  displaySize === 'Three-Column' ||
                  displaySize === 'Card: Columns' ||
                  displaySize == 'Thumb: Columns',
              })}
            >
              <CardContent
                link={link}
                contentKey={link.id}
                setActiveCard={setActiveCard}
                activeCard={activeCard}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
