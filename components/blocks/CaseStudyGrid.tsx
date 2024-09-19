import Link from 'next/link';
import { FC } from 'react';
import { Image, ResponsiveImageType } from 'react-datocms';
import { PrimaryPageBySlug_primaryPage_blocks_ItemsPanelRecord } from '../../gql/types/PrimaryPageBySlug';
import { PanelCards } from '../content-links/cards/PanelCards';

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
                <PanelCards key={i} item={item} />
              </div>
              {item.detailLink?.slug && (
                <div className="card-button">
                  <Link href={`/${item.detailLink.slug}`}>
                    <a className="button is-primary mt-4">
                      {item.detailLinkLabel || 'Learn More'}
                    </a>
                  </Link>
                </div>
              )}
            </div>
          );
        })}
      </ul>
    </div>
  );
};
