import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { PanelCards } from '../content-links/cards/PanelCards';
import { RightCarouselArrow } from '../icons';

interface IServiceCarousel {
  id: string;
  title: string;
  description: string;
}

const calculateMovement = ({
  containerWidth,
  numberOfIndicators,
  activeIndicator,
  itemMargin,
}: {
  containerWidth: number;
  numberOfIndicators: number;
  activeIndicator: number;
  itemMargin: number;
}) => {
  const margin =
    numberOfIndicators - 1 === activeIndicator
      ? itemMargin * activeIndicator - 1
      : itemMargin * activeIndicator;
  return containerWidth * activeIndicator + margin;
};

export const ServiceCarousel: FC<{
  items: IServiceCarousel[];
}> = ({ items }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLUListElement>(null);
  const [activeIndicator, setActiveIndicator] = useState<number>(0);
  const [itemsOnScreen, setItemsOnScreen] = useState<number>(3);
  const numberOfIndicators = Math.ceil(items.length / itemsOnScreen);
  const pointerStart = useRef<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const scrollLeftRef = useRef<number>(0);
  const [itemWidth, setItemWidth] = useState<number>(0);
  const activeIndicatorRef = useRef(activeIndicator); // added to avoid putting dependency on useCallback as it affects the scroll behavior.
  const [itemMargin, setItemMargin] = useState<number>(0);

  const handleResize = useCallback(() => {
    if (!containerRef.current || !carouselRef.current) return;
    const windowsWidth = window.innerWidth;
    const itemsAmt = getItemsAmount(windowsWidth);
    setItemsOnScreen(itemsAmt);
    // get the first panel-item-wrapper margin-right
    const element =
      containerRef.current.children[0]?.getElementsByClassName(
        'panel-item-wrapper',
      )[0];
    const margin = element
      ? window
          .getComputedStyle(element)
          .getPropertyValue('margin-right')
          .replace('px', '')
      : '0';
    setItemMargin(Number(margin));

    const containerWidth = containerRef.current.offsetWidth;
    const itemWidth =
      (containerWidth - Number(margin) * (itemsAmt - 1)) / itemsAmt;
    setItemWidth(itemWidth);
    const left = calculateMovement({
      containerWidth: containerRef.current.offsetWidth,
      activeIndicator: activeIndicatorRef.current,
      numberOfIndicators,
      itemMargin: Number(margin),
    });

    carouselRef.current.scrollTo({
      left,
      behavior: 'auto',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

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
    activeIndicatorRef.current = newActiveIndicator;

    const left = calculateMovement({
      containerWidth: containerRef.current.offsetWidth,
      activeIndicator: newActiveIndicator,
      numberOfIndicators,
      itemMargin,
    });

    carouselRef.current.scrollTo({
      left,
      behavior: 'smooth',
    });
  }

  function handleIndicatorClickLeft() {
    if (!carouselRef.current || !containerRef.current) return;
    const newActiveIndicator = Math.max(activeIndicator - 1, 0);
    if (newActiveIndicator === activeIndicator) return;
    setActiveIndicator(newActiveIndicator);
    activeIndicatorRef.current = newActiveIndicator;
    const left = calculateMovement({
      containerWidth: containerRef.current.offsetWidth,
      activeIndicator: newActiveIndicator,
      numberOfIndicators,
      itemMargin,
    });

    carouselRef.current.scrollTo({
      left,
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
    if (!isDragging || !carouselRef.current || !containerRef.current) return;
    if (pointerStart.current - 20 > e.clientX) {
      handleIndicatorClickRight();
    } else if (pointerStart.current + 20 < e.clientX) {
      handleIndicatorClickLeft();
    } else {
      const left = calculateMovement({
        containerWidth: containerRef.current.offsetWidth,
        activeIndicator,
        numberOfIndicators,
        itemMargin,
      });
      carouselRef.current.scrollTo({
        left,
        behavior: 'smooth',
      });
    }

    setIsDragging(false);
  }

  function handleTouchStart(e: React.TouchEvent) {
    if (isDragging || !carouselRef.current || !e.touches[0]) return;

    pointerStart.current = e.touches[0].clientX;
    scrollLeftRef.current = carouselRef.current.scrollLeft;

    setIsDragging(true);
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (
      !isDragging ||
      !carouselRef.current ||
      !e.changedTouches[0] ||
      !containerRef.current
    )
      return;

    if (pointerStart.current + 20 > e.changedTouches[0].clientX) {
      handleIndicatorClickRight();
    } else if (pointerStart.current - 20 < e.changedTouches[0].clientX) {
      handleIndicatorClickLeft();
    } else {
      const left = calculateMovement({
        containerWidth: containerRef.current.offsetWidth,
        activeIndicator,
        numberOfIndicators,
        itemMargin,
      });
      carouselRef.current.scrollTo({
        left,
        behavior: 'smooth',
      });
    }

    setIsDragging(false);
  }

  function handleIndicatorClick(position: number) {
    if (
      !carouselRef.current ||
      position === activeIndicator ||
      !containerRef.current
    )
      return;
    setActiveIndicator(position);
    activeIndicatorRef.current = position;
    const left = calculateMovement({
      containerWidth: containerRef.current.offsetWidth,
      activeIndicator: position,
      numberOfIndicators,
      itemMargin,
    });
    carouselRef.current.scrollTo({
      left,
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
        {items.map((item, i) => {
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
          aria-label="Scroll left"
        >
          {RightCarouselArrow}
        </button>
        <div className="SC-indicator-items-wrapper">
          {items.map((_, i) => {
            return i % itemsOnScreen === 0 ? (
              <button
                data-index={i}
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
          aria-label="Scroll right"
        >
          {RightCarouselArrow}
        </button>
      </div>
    </div>
  );
};
