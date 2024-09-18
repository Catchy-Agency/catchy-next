import { FC } from 'react';

import { PrimaryPageBySlug_primaryPage_blocks_ItemsPanelRecord } from '../../gql/types/PrimaryPageBySlug';

export const CaseStudyGrid: FC<{
  block: PrimaryPageBySlug_primaryPage_blocks_ItemsPanelRecord;
}> = ({ block }) => {
  console.log(block);
  return (
    <div>
      <div className="columns is-multiline wrap">
        {block.panelItems.map((item, index) => (
          <div key={index} className="column is-one-third">
            <li className="SC-item-wrapper" key={`carousel-item-${item.id}`}>
              <div className="SC-item">
                <h3 className="SC-item-title">{item.listTitle}</h3>
                {item.detailText && (
                  <div dangerouslySetInnerHTML={{ __html: item.detailText }} />
                )}
              </div>
            </li>
          </div>
        ))}
      </div>
    </div>
  );
};
