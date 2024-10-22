import classNames from 'classnames';
import Link from 'next/link';
import { FC, HTMLAttributes } from 'react';
import { Image } from 'react-datocms';

import { LinkData } from './LinkData';

export const CardRows: FC<
  {
    links: LinkData[];
    imageAlign?: string | null;
  } & HTMLAttributes<HTMLDivElement>
> = ({ links, imageAlign, ...props }) => {
  const isCareers = props.className?.includes('is-careers');

  return (
    <div
      className={classNames('card-rows', props.className as string, {
        'link-alternating': imageAlign === 'Alternating',
        'link-left': imageAlign === 'Left',
      })}
    >
      {links.map((link) => (
        <div
          key={link.id}
          className={`columns is-gapless has-background-grey-darker ${classNames(
            {
              'is-careers-item': isCareers,
            },
          )}`}
        >
          <div className="column is-7">
            <div className="p-6 card-rows-content">
              {link.title && <h3 className="title">{link.title}</h3>}
              {link.description && (
                <h4 className="subtitle is-5 has-text-light">
                  {link.description}
                </h4>
              )}

              <Link href={link.url || ''}>
                <button className="button is-primary">
                  {link.callToAction}
                </button>
              </Link>
            </div>
          </div>
          <div
            className={`column is-5 has-cover-image ${
              isCareers ? 'is-careers' : ''
            }`}
          >
            {link.image && (
              <Image
                data={link.image}
                lazyLoad={false}
                objectFit={isCareers ? 'scale-down' : 'cover'}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
