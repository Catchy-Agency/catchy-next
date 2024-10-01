import { FC } from 'react';
import { Image } from 'react-datocms';

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
              {item.image && (
                <div className="card-item-image">
                  <Image data={item.image} lazyLoad={false} />{' '}
                </div>
              )}
              <div className="static-card-item-content">
                <PanelCards key={i} item={item} />
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
