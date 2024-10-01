import { FC } from 'react';
import { IPanelCard, PanelCards } from '../content-links/cards/PanelCards';

export const StaticCardsStack: FC<{
  items: IPanelCard[];
  maxColumns: number;
}> = ({ items }) => {
  return (
    <div className="static-cards">
      <ul className="static-cards-list">
        {items.map((item, i) => {
          return (
            <div className="static-card-item-wrapper " key={i}>
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
