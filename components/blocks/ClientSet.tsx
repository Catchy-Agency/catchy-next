import { FC, useEffect, useState } from 'react';
import { Image, ResponsiveImageType } from 'react-datocms';

import Link from 'next/link';
import { PrimaryPageBySlug_primaryPage_blocks_ClientSetRecord } from '../../gql/types/PrimaryPageBySlug';

export const ClientSet: FC<{
  block: PrimaryPageBySlug_primaryPage_blocks_ClientSetRecord;
}> = ({ block }) => {
  const [columnSize, setColumnSize] = useState('14.28%');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setColumnSize('25%');
      } else {
        setColumnSize('14.28%');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className="soupWrapper">
      <div className="soupTitle">
        <div className="textContent">
          <h2 className="title is-2 mb-5">{block.title}</h2>
          <p className="content">{block.subtitle}</p>
        </div>
      </div>
      <div className="soupContent">
        <div className="columns is-mobile is-multiline is-variable is-5 imageContent">
          {block.clientSet.map((client) => (
            <div
              key={client.id}
              className="column is-narrow clip"
              style={{
                flexBasis: columnSize,
                maxWidth: columnSize,
              }}
            >
              {client.logo?.responsiveImage && (
                <Image
                  data={client.logo.responsiveImage as ResponsiveImageType}
                  lazyLoad={false}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="soupBottom">
        {block.link?.slug && (
          <div className="buttonContent">
            <Link href={block.link?.slug}>
              <a className="button is-primary is-dark">{block.buttonLabel}</a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
