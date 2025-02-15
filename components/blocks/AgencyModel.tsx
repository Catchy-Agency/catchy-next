import { FC } from 'react';
import { Image, ResponsiveImageType } from 'react-datocms';

import { PrimaryPageBySlug_primaryPage_blocks_AgencyModelRecord } from '../../gql/types/PrimaryPageBySlug';
import { TitleText } from './TitleText';

export const AgencyModel: FC<{
  block: PrimaryPageBySlug_primaryPage_blocks_AgencyModelRecord;
}> = ({ block }) => (
  <div className="agencyContainer">
    <section key={block.id} className="section TitleTextRecord">
      <div>
        <TitleText
          block={{
            __typename: 'TitleTextRecord',
            id: block.id,
            title: block.title,
            text: block.text,
            maxWidth: 40,
            addLightBackground: false,
          }}
        />
      </div>
    </section>

    <div className="agencyWrapper">
      {block.columns.map((column) => (
        <div key={column.id} className="mt-6">
          {column.image?.responsiveImage && (
            <figure className="image mb-2">
              <Image
                data={column.image?.responsiveImage as ResponsiveImageType}
                lazyLoad={false}
                style={{ maxHeight: 90, objectFit: 'contain' }}
              />
            </figure>
          )}
          {column.title && <div className="title is-3">{column.title}</div>}
          {column.services.map((section) => (
            <div key={section.id} className="_column">
              {section.title && <h5>{section.title}</h5>}
              {section.text && (
                <div
                  className="content"
                  dangerouslySetInnerHTML={{ __html: section.text }}
                />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
    {/* {process.env.NODE_ENV != 'production' && console.info(block)} */}
  </div>
);
