import { FC } from 'react';
import { Image, ResponsiveImageType } from 'react-datocms';
import { PrimaryPageBySlug_primaryPage_blocks_BannerRecord } from '../../gql/types/PrimaryPageBySlug';

export const LeadCaseFullWidth: FC<{
  block: PrimaryPageBySlug_primaryPage_blocks_BannerRecord;
}> = ({ block }) => {
  return (
    <div className="is-flex-direction-column container-fullWidth">
      {block.foregroundImage && (
        <div className="imageLead">
          <Image
            data={block.foregroundImage.responsiveImage as ResponsiveImageType}
            lazyLoad={false}
          />
        </div>
      )}

      <div className="info">
        {block.title && <h2 className="title is-2">{block.title}</h2>}

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
