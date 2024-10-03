import Link from 'next/link';
import { FC } from 'react';
import { Image } from 'react-datocms';

import {
  IconTextImageLeft,
  InsightsImageBottomEven,
  InsightsImageBottomOdd,
  InsightsImageTop,
} from '../icons';
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
          <div className="single-post-left-side is-relative">
            <InsightsImageTop className="insightsImageSvg" />
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
            {i % 2 === 0 ? (
              <InsightsImageBottomEven className="insightsImageSvg insightsImageSvg-bottom" />
            ) : (
              <InsightsImageBottomOdd className="insightsImageSvg insightsImageSvg-bottom" />
            )}
          </div>
          <div className="single-blog-body-svg">{IconTextImageLeft}</div>
          <div className="single-post-body img-container">
            {link.title && <h3 className="is-2">{link.title}</h3>}
            {link.description && (
              <div className="content">{link.description}</div>
            )}
            <Link href={link.url ?? '/blog'}>
              <a className="button is-ghost revert-color content">
                {link.callToAction}
              </a>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
