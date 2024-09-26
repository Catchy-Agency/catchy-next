import { FC } from 'react';
import { Image, ResponsiveImageType } from 'react-datocms';
import { PrimaryPageBySlug_primaryPage_blocks_NewsletterRecord } from '../../gql/types/PrimaryPageBySlug';
import { IconTopLeadCaseStudy } from '../icons';
import { FormBlock } from './FormBlock';

export const Newsletter: FC<{
  block: PrimaryPageBySlug_primaryPage_blocks_NewsletterRecord;
}> = ({ block }) => {
  console.log(block);
  return (
    <div className="newsletter-wrapper">
      <div className="newsletter-content">
        {block.title && <h2>{block.title}</h2>}
        <FormBlock block={block} />
      </div>
      <div className="newsletter-image">
        {IconTopLeadCaseStudy}

        {block.image && (
          <Image
            data={block.image.responsiveImage as ResponsiveImageType}
            lazyLoad={false}
            className="newsletterImage"
          />
        )}
      </div>
    </div>
  );
};
