import { FC } from 'react';
import { PrimaryPageBySlug_primaryPage_blocks_ItemsPanelRecord } from '../../gql/types/PrimaryPageBySlug';
import { PanelCards } from '../content-links/cards/PanelCards';

export const StaticCardsStack: FC<{
  block: PrimaryPageBySlug_primaryPage_blocks_ItemsPanelRecord;
}> = ({ block }) => {
  return (
    <div className="static-cards">
      <ul className="static-cards-list">
        {block.panelItems.map((item, i) => {
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
