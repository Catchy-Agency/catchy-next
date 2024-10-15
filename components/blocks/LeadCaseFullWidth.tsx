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
          objectFit="cover"
        />
      )}

      <div className="info">
        {block.title && (
          <h2 className="lead-case-title title is-2">{block.title}</h2>
        )}

        {block.text && (
          <div
            className="content description-info"
            dangerouslySetInnerHTML={{ __html: block.text }}
          />
        )}
      </div>
    </div>
  );
};
