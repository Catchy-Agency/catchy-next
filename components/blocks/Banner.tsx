import { useRouter } from 'next/router';
import { FC } from 'react';
import { Image, ResponsiveImageType } from 'react-datocms';
import { PrimaryPageBySlug_primaryPage_blocks_BannerRecord } from '../../gql/types/PrimaryPageBySlug';
import { heroSvgObject } from '../../util/heroSvgObject';
import { scrollToContact } from '../../util/scrollToContact';
import { LeftUpSoup } from '../icons';
export const Banner: FC<{
  block: PrimaryPageBySlug_primaryPage_blocks_BannerRecord;
}> = ({ block }) => {
  const router = useRouter();

  const slug = router.asPath;

  function getHeroSvg(slug: string | undefined) {
    if (!slug) return;
    let slugName = '';

    switch (slug) {
      case '/':
        slugName = 'home';
        break;
      case '/work':
        slugName = 'work';
        break;
      default:
        slugName = slug.replace('/', '');
        break;
    }

    return heroSvgObject[slugName] || heroSvgObject['what-we-do'];
  }

  console.log(getHeroSvg(slug));

  return (
    <div className="custom-flex-columns">
      <div className="bg-image">
        {block.backgroundImage && (
          <Image
            data={block.backgroundImage.responsiveImage as ResponsiveImageType}
            lazyLoad={false}
            className="imageHero"
            objectFit="cover"
          />
        )}
      </div>

      <div className="text-container">
        {block.title && <h1 className="title is-1 titleHero">{block.title}</h1>}
        {block.text && (
          <div
            className="content text-description"
            dangerouslySetInnerHTML={{ __html: block.text }}
          />
        )}
        {block.showContactButton === true && (
          <a className="button is-ghost" onClick={scrollToContact}>{`${
            block.contactButtonLabel || 'Contact Us'
          }`}</a>
        )}
      </div>

      <div className="svg-right">{getHeroSvg(slug)}</div>
      <div className="svg-left">{LeftUpSoup}</div>
    </div>
  );
};
