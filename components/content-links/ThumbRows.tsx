import Link from 'next/link';
import { FC } from 'react';
import { Image } from 'react-datocms';

import { IconTextImageLeft } from '../icons';
import { LinkData } from './LinkData';

export const ThumbRows: FC<{
  links: LinkData[];
  imageAlign?: string | null;
  isBreakpoint: (index: number) => boolean;
}> = ({ links, imageAlign, isBreakpoint }) => {
  return (
    <div className={'post-list-wrapper'}>
      {links.map((link, i) => (
        <div
          key={link.id}
          className="single-post-wrapper"
          data-is-breakpoint={isBreakpoint(i)}
        >
          <div className="single-post-left-side">
            <div className="single-post-image">
              <Link href={link.url || ''} className="image-link">
                <a>
                  {link.image && (
                    <Image
                      className="image"
                      objectFit="cover"
                      data={link.image}
                      lazyLoad={false}
                    />
                  )}
                </a>
              </Link>
            </div>
          </div>
          <div className="single-blog-body-svg">{IconTextImageLeft}</div>
          <div className="single-post-body img-container">
            {link.title && <h3 className="is-2">{link.title}</h3>}
            {link.description && <div className="">{link.description}</div>}
            <Link href={link.url ?? '/blog'}>
              <a className="button is-ghost revert-color">
                {link.callToAction}
              </a>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
