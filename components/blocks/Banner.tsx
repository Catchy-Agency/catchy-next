import { FC } from 'react';
import { Image, ResponsiveImageType } from 'react-datocms';
import { PrimaryPageBySlug_primaryPage_blocks_BannerRecord } from '../../gql/types/PrimaryPageBySlug';
import { scrollToContact } from '../../util/scrollToContact';
export const Banner: FC<{
  block: PrimaryPageBySlug_primaryPage_blocks_BannerRecord;
}> = ({ block }) => (
  <div className="custom-flex-columns ">
    <Image
      data={
        {
          src: '/assets/imageHero.jpg',
          alt: 'Image-Hero',
        } as ResponsiveImageType
      }
      className="imageHero"
    />

    <div className="data-container">
      {block.titleOverline && (
        <p className="overline mb-2">{block.titleOverline}</p>
      )}
      {block.title && <h1 className="title is-1 titleHero">{block.title}</h1>}
      {block.text && (
        <div
          className="content text-description"
          dangerouslySetInnerHTML={{ __html: block.text }}
        />
      )}
      {block.showContactButton === true && (
        <button className="button is-ghost" onClick={scrollToContact}>
          {block.contactButtonLabel}
        </button>
      )}
    </div>

    {/* {block.foregroundImage && (
      <div className="column is-hidden-mobile">
        <Image
          data={block.foregroundImage.responsiveImage as ResponsiveImageType}
          lazyLoad={false}
        />
      </div>
    )} */}
  </div>
);
