import Link from 'next/link';
import { FC } from 'react';
import { Image, ResponsiveImageType } from 'react-datocms';
import { ServicePagesBySlug_service_blocks_CaseStudyTileRecord } from '../../gql/types/ServicePagesBySlug';
import { IconTopLeadCaseStudy } from '../icons';

export const LeadCaseStudy: FC<{
  block: ServicePagesBySlug_service_blocks_CaseStudyTileRecord;
}> = ({ block }) => {
  return (
    <div className="textStudy-content">
      <div className="study-content">
        <div className="texts-study">
          {block.overline && <h3 className="title is-3">{block.overline}</h3>}

          {block.title && <h1 className="title is-1">{block.title}</h1>}

          {block.caseStudy?.description && (
            <div
              className="textStudy-description"
              dangerouslySetInnerHTML={{ __html: block.caseStudy?.description }}
            />
          )}
        </div>

        {block.caseStudy && (
          <Link href={block.caseStudy?.slug || ''}>
            <a className="button is-primary">{block.buttonLabel}</a>
          </Link>
        )}
      </div>

      <div className="imgStudy-container">
        {block.caseStudy?.previewImage && (
          <Image
            data={
              block.caseStudy.previewImage
                .responsiveImage as ResponsiveImageType
            }
            lazyLoad={false}
            className="imageStudy"
          />
        )}

        <div className="svg-leadCaseStudy">{IconTopLeadCaseStudy}</div>
      </div>
    </div>
  );
};
