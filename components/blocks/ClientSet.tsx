import { FC } from 'react';
import { Image, ResponsiveImageType } from 'react-datocms';

import { PrimaryPageBySlug_primaryPage_blocks_ClientSetRecord } from '../../gql/types/PrimaryPageBySlug';

export const ClientSet: FC<{
  block: PrimaryPageBySlug_primaryPage_blocks_ClientSetRecord;
}> = ({ block }) => (
  <div className="soupWrapper">
    <div className="soupTitle">
      <div className="textContent">
        <h2>Who We Work With</h2>
        <p>
          We help the biggest brands in technology, scale-ups in emerging
          technology, and traditional Fortune 500 companies reinvent the way
          they do business.
        </p>
      </div>
    </div>
    <div className="soupContent">
      <div className="columns is-mobile is-multiline is-variable is-1 imageContent">
        {block.clientSet.map((client) => (
          <div
            key={client.id}
            className="column is-narrow clip"
            style={{
              flexBasis: '14.28%',
              maxWidth: '14.28%',
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
      <div className="buttonContent">
        <button className="button is-primary is-dark">See Our Work</button>
      </div>
    </div>
  </div>
);
