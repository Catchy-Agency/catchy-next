import Link from 'next/link';
import { FC } from 'react';
import { Image, ResponsiveImageType } from 'react-datocms';
import { PrimaryPageBySlug_primaryPage_blocks_BannerRecord } from '../../gql/types/PrimaryPageBySlug';
import { IconTextImageLeft, IconTextImageRight } from '../icons';

export const TextImage: FC<{
  block: PrimaryPageBySlug_primaryPage_blocks_BannerRecord;
}> = ({ block }) => {
  const isImageLeft = false;

  return (
    <div className={`textImage-content ${isImageLeft ? 'image-left' : ''}`}>
      <div className="info-texts">
        <div className="texts">
          {block.title && <h2 className="title is-2">{block.title}</h2>}

          {block.text && (
            <div
              className="text-description"
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

      <div className="img-container">
        {block.foregroundImage && (
          <div className="imageText">
            <Image
              data={
                block.foregroundImage.responsiveImage as ResponsiveImageType
              }
              lazyLoad={false}
            />
          </div>
        )}

        <div className="svg-textImageRight">{IconTextImageRight}</div>
        <div className="svg-textImageLeft">{IconTextImageLeft}</div>
      </div>
    </div>
  );
};
