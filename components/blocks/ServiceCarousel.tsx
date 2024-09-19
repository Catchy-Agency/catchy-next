import React, { FC, useEffect, useRef, useState } from 'react';
import { PrimaryPageBySlug_primaryPage_blocks_ItemsPanelRecord } from '../../gql/types/PrimaryPageBySlug';
import { PanelCards } from '../content-links/cards/PanelCards';
import { RightCarouselArrow } from '../icons';
export const ServiceCarousel: FC<{
  block: PrimaryPageBySlug_primaryPage_blocks_ItemsPanelRecord;
}> = ({ block }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLUListElement>(null);
  const [activeIndicator, setActiveIndicator] = useState<number>(0);
  const [itemsOnScreen, setItemsOnScreen] = useState<number>(3);
  const numberOfIndicators = Math.ceil(block.panelItems.length / itemsOnScreen);
  const pointerStart = useRef<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const scrollLeftRef = useRef<number>(0);
  const [itemWidth, setItemWidth] = useState<number>(0);
  useEffect(() => {
    if (!containerRef.current) return;
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function handleResize() {
    if (!containerRef.current || !carouselRef.current) return;
    const windowsWidth = window.innerWidth;
    const itemsAmt = getItemsAmount(windowsWidth);
    setItemsOnScreen(itemsAmt);
    setItemWidth(Math.floor(containerRef.current.offsetWidth / itemsAmt));
    carouselRef.current.scrollTo({
      left: containerRef.current.offsetWidth * activeIndicator,
      behavior: 'auto',
    });
  }

  function getItemsAmount(width: number) {
    if (width < 1150 && width > 850) return 2;
    if (width <= 850) return 1;
    return 3;
  }

  function handleIndicatorClickRight() {
    if (!carouselRef.current || !containerRef.current) return;
    const newActiveIndicator = Math.min(
      activeIndicator + 1,
      numberOfIndicators - 1,
    );
    if (newActiveIndicator === activeIndicator) return;
    setActiveIndicator(newActiveIndicator);

    carouselRef.current.scrollTo({
      left: containerRef.current.offsetWidth * newActiveIndicator,
      behavior: 'smooth',
    });
  }

  function handleIndicatorClickLeft() {
    if (!carouselRef.current || !containerRef.current) return;
    const newActiveIndicator = Math.max(activeIndicator - 1, 0);
    if (newActiveIndicator === activeIndicator) return;
    setActiveIndicator(newActiveIndicator);
    carouselRef.current.scrollTo({
      left: containerRef.current.offsetWidth * newActiveIndicator,
      behavior: 'smooth',
    });
  }

  function handlePointerDown(e: React.MouseEvent) {
    if (isDragging || !carouselRef.current) return;

    pointerStart.current = e.clientX;
    scrollLeftRef.current = carouselRef.current.scrollLeft;

    setIsDragging(true);
  }

  function handlePointerMove(e: React.MouseEvent) {
    if (!isDragging || !carouselRef.current) return;
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - pointerStart.current) * 0.7;
    carouselRef.current.scrollLeft = scrollLeftRef.current - walk;
  }

  function handlePointerUp(e: React.MouseEvent) {
    if (!isDragging || !carouselRef.current) return;
    if (pointerStart.current - 20 > e.clientX) {
      handleIndicatorClickRight();
    } else if (pointerStart.current + 20 < e.clientX) {
      handleIndicatorClickLeft();
    } else {
      carouselRef.current.scrollTo({
        left: containerRef.current!.offsetWidth * activeIndicator,
        behavior: 'smooth',
      });
    }

    setIsDragging(false);
  }

  function handleTouchStart(e: React.TouchEvent) {
    if (isDragging || !carouselRef.current) return;

    pointerStart.current = e.touches[0]!.clientX;
    scrollLeftRef.current = carouselRef.current.scrollLeft;

    setIsDragging(true);
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (!isDragging || !carouselRef.current) return;

    if (pointerStart.current + 20 > e.changedTouches[0]!.clientX) {
      handleIndicatorClickRight();
    } else if (pointerStart.current - 20 < e.changedTouches[0]!.clientX) {
      handleIndicatorClickLeft();
    } else {
      carouselRef.current.scrollTo({
        left: containerRef.current!.offsetWidth * activeIndicator,
        behavior: 'smooth',
      });
    }

    setIsDragging(false);
  }

  function handleIndicatorClick(position: number) {
    if (!carouselRef.current || position === activeIndicator) return;
    setActiveIndicator(position);
    carouselRef.current.scrollTo({
      left: containerRef.current!.offsetWidth * position,
      behavior: 'smooth',
    });
  }

  return (
    <div className="SC-container-outer" ref={containerRef}>
      <ul
        className={`SC-container-inner ${isDragging ? 'SC-dragging' : ''}`}
        ref={carouselRef}
        onMouseDown={handlePointerDown}
        onMouseUp={handlePointerUp}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handlePointerMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {block.panelItems.map((item, i) => {
          return <PanelCards key={i} width={itemWidth} item={item} />;
        })}
      </ul>
      <div className="SC-indicator-container">
        <button
          className={`SC-indicator-button SC-left  ${
            activeIndicator === 0 ? 'SC-hidden' : ''
          }`}
          tabIndex={activeIndicator === 0 ? -1 : 0}
          onClick={handleIndicatorClickLeft}
          data-button="left"
        >
          {RightCarouselArrow}
        </button>
        <div className="SC-indicator-items-wrapper">
          {block.panelItems.map((_, i) => {
            return i % itemsOnScreen === 0 ||
              i === block.panelItems.length - 1 ? (
              <button
                tabIndex={-1}
                title={`Indicator Position ${Math.ceil(i / itemsOnScreen)}`}
                key={`indicator-item-${i}`}
                className={`SC-indicator-item ${
                  Math.ceil(i / itemsOnScreen) === activeIndicator
                    ? 'SC-active'
                    : 'SC-inactive'
                }`}
                onClick={() =>
                  handleIndicatorClick(Math.ceil(i / itemsOnScreen))
                }
              />
            ) : (
              <React.Fragment key={`indicator-item-${i}`} />
            );
          })}
        </div>
        <button
          className={`SC-indicator-button ${
            activeIndicator === numberOfIndicators - 1 ? 'SC-hidden' : ''
          }`}
          tabIndex={activeIndicator === numberOfIndicators - 1 ? -1 : 0}
          onClick={handleIndicatorClickRight}
          data-button="right"
        >
          {RightCarouselArrow}
        </button>
      </div>
    </div>
  );
};
