import { FC } from 'react';

import { Image, ResponsiveImageType } from 'react-datocms';
import { IPanelCard, PanelCards } from '../content-links/cards/PanelCards';

export const StaticCardsStack: FC<{
  items: IPanelCard[];
  maxColumns: number;
}> = ({ items, maxColumns }) => {
  return (
    <div className="static-cards">
      <ul
        className={`static-cards-list ${
          maxColumns === 3 ? 'three-columns' : ''
        }`}
      >
        {items?.map((item, i) => {
          return (
            <div className="static-card-item-wrapper " key={i}>
              <div className="static-card-item">
                <div className="card-item-image">
                  <Image
                    data={item.image?.responsiveImage as ResponsiveImageType}
                    lazyLoad={false}
                  />{' '}
                </div>
                <div className="card-item-content">
                  <PanelCards key={i} item={item} />
                </div>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
