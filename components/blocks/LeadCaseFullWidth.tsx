import { FC } from 'react';
import { Image, ResponsiveImageType } from 'react-datocms';
import { PrimaryPageBySlug_primaryPage_blocks_ArticleRecord } from '../../gql/types/PrimaryPageBySlug';

export const LeadCaseFullWidth: FC<{
  block: PrimaryPageBySlug_primaryPage_blocks_ArticleRecord;
}> = ({ block }) => {
  return (
    <div className="is-flex-direction-column container-fullWidth">
      {block.image && (
        <Image
          data={block.image.responsiveImage as ResponsiveImageType}
          lazyLoad={false}
          className="imageLead"
        />
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
