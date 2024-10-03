import Link from 'next/link';
import { FC } from 'react';
import { Image, ResponsiveImageType } from 'react-datocms';
import { PrimaryPageBySlug_primaryPage_blocks_TextImageSmallRecord } from '../../gql/types/PrimaryPageBySlug';
import { IconTextImageLeft, IconTextImageRight } from '../icons';

export const TextImage: FC<{
  block: PrimaryPageBySlug_primaryPage_blocks_TextImageSmallRecord;
}> = ({ block }) => {
  return (
    <div className={`textImage-content ${block.inverted ? 'image-left' : ''}`}>
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

        {(block.internalLink || block.externalLink) &&
          block.buttonLabel &&
          (block.internalLink ? (
            <Link href={block.internalLink.slug || ''}>
              <a className="button is-primary">{block.buttonLabel}</a>
            </Link>
          ) : (
            <a href={block.externalLink || ''} className="button is-primary">
              {block.buttonLabel}
            </a>
          ))}
      </div>

      <div className="img-container">
        {block.image && (
          <Image
            data={block.image.responsiveImage as ResponsiveImageType}
            lazyLoad={false}
            className="imageText"
            objectFit="cover"
          />
        )}

        <div className="svg-textImageRight">{IconTextImageRight}</div>
        <div className="svg-textImageLeft">{IconTextImageLeft}</div>
      </div>
    </div>
  );
};
