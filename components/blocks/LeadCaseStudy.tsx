import Link from 'next/link';
import { FC } from 'react';
import { Image, ResponsiveImageType } from 'react-datocms';
import { ServicePagesBySlug_service_blocks_CaseStudyTileRecord } from '../../gql/types/ServicePagesBySlug';
import { IconTopLeadCaseStudy } from '../icons';

export const LeadCaseStudy: FC<{
  block: ServicePagesBySlug_service_blocks_CaseStudyTileRecord;
}> = ({ block }) => {
  function getImage() {
    if (block.caseStudy?.previewImageCol?.responsiveImage)
      return block.caseStudy?.previewImageCol?.responsiveImage;
    if (block.caseStudy?.previewImageSm?.responsiveImage)
      return block.caseStudy?.previewImageSm?.responsiveImage;
    if (block.caseStudy?.previewImage?.responsiveImage)
      return block.caseStudy?.previewImage?.responsiveImage;

    return undefined;
  }

  const image = getImage();
  return (
    <div className="textStudy-content">
      <div className="study-content">
        {block.overline && <h3 className="title is-3">{block.overline}</h3>}

        {block.title && <h1 className="title is-1">{block.title}</h1>}

        {block.caseStudy?.description && (
          <div
            className="textStudy-description"
            dangerouslySetInnerHTML={{ __html: block.caseStudy?.description }}
          />
        )}

        {block.caseStudy && (
          <Link href={`/work/${block.caseStudy?.slug ?? ''}` || ''}>
            <a className="button is-primary">{block.buttonLabel}</a>
          </Link>
        )}
      </div>

      <div className="imgStudy-container">
        {image && (
          <Image
            data={image as ResponsiveImageType}
            lazyLoad={false}
            className="imageStudy"
            objectFit="cover"
          />
        )}

        <div className="svg-leadCaseStudy">{IconTopLeadCaseStudy}</div>
      </div>
    </div>
  );
};
