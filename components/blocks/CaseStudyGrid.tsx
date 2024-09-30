import { FC } from 'react';
import { Image, ResponsiveImageType } from 'react-datocms';
import { PrimaryPageBySlug_primaryPage_blocks_ItemsPanelRecord } from '../../gql/types/PrimaryPageBySlug';

export const CaseStudyGrid: FC<{
  block: PrimaryPageBySlug_primaryPage_blocks_ItemsPanelRecord;
}> = ({ block }) => {
  return (
    <div className="case-study-grid">
      <ul className="case-study-grid__list">
        {block.panelItems.map((item, i) => {
          return (
            <div className="card-item-wrapper" key={i}>
              <div className="card-item-content">
                <div className="card-item-image">
                  <Image
                    data={
                      item.detailImage?.responsiveImage as ResponsiveImageType
                    }
                    lazyLoad={false}
                  />{' '}
                </div>
                {/*<PanelCards key={i} item={item} />*/}
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
