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
        {items?.map((item, i) => (
          <li className="static-card-item-wrapper" key={item.id || i}>
            <div className="static-card-item">
              <div className="card-item-image">
                {item.image && (
                  <div className="card-item-image">
                    <Image data={item.image} lazyLoad={false} />
                  </div>
                )}
              </div>

              <ul className="card-item-content">
                <PanelCards key={`item-${item.id || i}`} item={item} />
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
