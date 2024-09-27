import Link from 'next/link';
import { FC } from 'react';
import { Image, ResponsiveImageType } from 'react-datocms';
import { PrimaryPageBySlug_primaryPage_blocks_BannerRecord } from '../../gql/types/PrimaryPageBySlug';
import { IconTopLeadCaseStudy } from '../icons';

export const LeadCaseStudy: FC<{
  block: PrimaryPageBySlug_primaryPage_blocks_BannerRecord;
}> = ({ block }) => {
  return (
    <div className="textStudy-content">
      <div className="study-content">
        <div className="texts-study">
          {block.titleOverline && (
            <h3 className="title is-3">{block.titleOverline}</h3>
          )}

          {block.title && <h2 className="title is-2">{block.title}</h2>}

          {block.text && (
            <div
              className="textStudy-description"
              dangerouslySetInnerHTML={{ __html: block.text }}
            />
          )}
        </div>

        {block.showContactButton === true && (
          <Link href={'#'}>
            <a className="button is-primary">{block.contactButtonLabel}</a>
          </Link>
        )}
      </div>

      <div className="imgStudy-container">
        {block.backgroundImage && (
          <Image
            data={block.backgroundImage.responsiveImage as ResponsiveImageType}
            lazyLoad={false}
            className="imageStudy"
          />
        )}

        <div className="svg-leadCaseStudy">{IconTopLeadCaseStudy}</div>
      </div>
    </div>
  );
};
