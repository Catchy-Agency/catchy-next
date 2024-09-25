import classNames from 'classnames';
import Link from 'next/link';
import { FC } from 'react';
import { Image, ResponsiveImageType } from 'react-datocms';
import { PrimaryPageBySlug_primaryPage_blocks_BannerRecord } from '../../gql/types/PrimaryPageBySlug';
import { LeftUpSoup, RightHero } from '../icons';
export const Banner: FC<{
  block: PrimaryPageBySlug_primaryPage_blocks_BannerRecord;
  maxClass: { [key: string]: boolean };
}> = ({ block, maxClass }) => (
  <div className="custom-flex-columns">
    {block.backgroundImage && (
      <Image
        data={block.backgroundImage.responsiveImage as ResponsiveImageType}
        lazyLoad={false}
        className="imageHero"
      />
    )}

    <div className={classNames('container data-container', maxClass)}>
      {block.title && <h1 className="title is-1 titleHero">{block.title}</h1>}
      {block.text && (
        <div
          className="content text-description"
          dangerouslySetInnerHTML={{ __html: block.text }}
        />
      )}
      {block.showContactButton === true && (
        <Link href={block.link?.slug || ''}>
          <a className="button is-ghost">{`${
            block.contactButtonLabel || 'Contact Us'
          }`}</a>
        </Link>
      )}
    </div>

    <div className="svg-right">{RightHero}</div>

    <div className="svg-left">{LeftUpSoup}</div>
  </div>
);
