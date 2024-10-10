import classNames from 'classnames';
import Link from 'next/link';
import {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Image } from 'react-datocms';

import { LeftSliderArrow, RightSliderArrow } from '../../icons';
import { LinkData } from '../LinkData';

import { Navigation } from 'swiper'; //Pagination
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useMediaQuery } from '../../hooks/useMediaQuery';

interface CardProps {
  link: LinkData;
  contentKey: string;
  setActiveCard: Dispatch<SetStateAction<string>>;
  activeCard: string | null;
  contentSize: string | null;
  deviceSize: string | null;
}

const CardContent: FC<CardProps> = ({
  link,
  contentKey,
  activeCard,
  setActiveCard,
  contentSize,
}) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(activeCard == contentKey);
  }, [activeCard, contentKey]);

  return (
    <div
      className={classNames('card has-background-transparent', {
        isActive,
      })}
      style={{ height: '100%' }}
      tabIndex={1}
      onClick={() => {
        setActiveCard(contentKey);
        if (!isActive) {
          setIsActive(true);
        }
      }}
    >
      {link.image && (
        <div className="card-image">
          <Link href={link.url || ''}>
            <a aria-label={`View ${link.title || 'more'}`}>
              {link.image && contentSize == 'Medium' && (
                <Image
                  data={link.image}
                  lazyLoad={false}
                  layout="responsive"
                  objectFit="cover"
                />
              )}
            </a>
          </Link>
        </div>
      )}
      <div className="card-content">
        {link.title && <h3 className="title is-3">{link.title}</h3>}
        {link.description && <div className="content">{link.description}</div>}
        <Link href={link.url || ''}>
          <a
            className="button is-ghost mt-3"
            aria-label={`${
              link.callToAction || `View ${link?.title || 'more'}`
            }`}
          >
            {link.callToAction}
          </a>
        </Link>
      </div>
    </div>
  );
};

let count = 0;

export const ContentTileM: FC<{
  links: LinkData[];
  isSlider: boolean;
  contentSize: string | null;
  displaySize: string | null;
}> = ({ links, isSlider, contentSize = 'Small' }) => {
  const [activeCard, setActiveCard] = useState('');
  const deviceSize = useMediaQuery();

  // Update pagination ID if props change
  const paginationID = useMemo(() => {
    // Force props as dependencies
    links;
    isSlider;
    contentSize;
    return `ContentTileM${count++}`;
  }, [links, isSlider, contentSize]);

  const paginationNextClass = `swiper-button-next-btn-${paginationID}`;
  const paginationPrevClass = `swiper-button-prev-btn-${paginationID}`;

  return (
    <div className={classNames('card-columns', deviceSize.toLowerCase())}>
      {isSlider ? (
        <>
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            threshold={50}
            slidesPerView={
              deviceSize == 'mobile'
                ? 1
                : deviceSize == 'tablet' || contentSize == 'Medium'
                ? 2
                : 3
            }
            navigation={{
              nextEl: '.' + paginationNextClass,
              prevEl: '.' + paginationPrevClass,
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
                  contentSize={contentSize}
                  deviceSize={deviceSize}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            className={`swiper-button-prev-btn ${paginationPrevClass}`}
            onClick={() => setActiveCard('')}
          >
            <span className="is-sr-only">Previous</span>
            <LeftSliderArrow />
          </div>
          <div
            className={`swiper-button-next-btn ${paginationNextClass}`}
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
                'is-one-third-desktop': contentSize === 'Small',
              })}
            >
              <CardContent
                link={link}
                contentKey={link.id}
                setActiveCard={setActiveCard}
                activeCard={activeCard}
                contentSize={contentSize}
                deviceSize={deviceSize}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
