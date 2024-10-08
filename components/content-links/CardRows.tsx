import classNames from 'classnames';
import Link from 'next/link';
import { FC } from 'react';
import { Image } from 'react-datocms';

import { LinkData } from './LinkData';

export const CardRows: FC<{
  links: LinkData[];
  imageAlign?: string | null;
}> = ({ links, imageAlign }) => (
  <div
    className={classNames('card-rows', {
      'link-alternating': imageAlign === 'Alternating',
      'link-left': imageAlign === 'Left',
    })}
  >
    {links.map((link) => (
      <div
        key={link.id}
        className="columns is-gapless has-background-grey-darker"
        style={{
          flexWrap: 'wrap',
          alignItems: 'stretch',
          userSelect: 'none',
        }}
      >
        <div className="column is-7">
          <div className="p-6">
            {link.title && <div className="title is-4">{link.title}</div>}
            {link.description && (
              <div className="content has-text-light">{link.description}</div>
            )}

            <Link href={link.url || ''}>
              <button className="button is-primary">{link.callToAction}</button>
            </Link>
          </div>
        </div>
        <div className="column is-5 has-cover-image">
          {link.image && <Image data={link.image} lazyLoad={false} />}
        </div>
      </div>
    ))}
  </div>
);
