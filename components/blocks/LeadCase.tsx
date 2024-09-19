import { FC } from 'react';
import { Image, ResponsiveImageType } from 'react-datocms';
import { PrimaryPageBySlug_primaryPage_blocks_BannerRecord } from '../../gql/types/PrimaryPageBySlug';

export const LeadCase: FC<{
  block: PrimaryPageBySlug_primaryPage_blocks_BannerRecord;
}> = ({ block }) => {
  return (
    <div className="is-flex-direction-column">
      {block.foregroundImage && (
        <div className="imageLead">
          <Image
            data={block.foregroundImage.responsiveImage as ResponsiveImageType}
            lazyLoad={false}
          />
        </div>
      )}

      <div className="info">
        {block.title && (
          <h2 className="title is-2 title-info">{block.title}</h2>
        )}

        {block.text && (
          <div
            className="description-info"
            dangerouslySetInnerHTML={{ __html: block.text }}
          />
        )}
      </div>
    </div>
  );
};
