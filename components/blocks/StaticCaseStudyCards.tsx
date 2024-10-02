import Link from 'next/link';
import { FC } from 'react';
import { Image } from 'react-datocms';
import { LinkData } from '../content-links/LinkData';
import { CaseStudySvg } from '../icons';

export const StaticCaseStudyCards: FC<{
  link: LinkData[];
}> = ({ link }) => {
  return (
    <div className="case-study-wrapper">
      <ul className="case-study-wrapper__list">
        {link.map((item, i) => {
          return (
            <li className="link-item-wrapper" key={i}>
              <div className="link-item-content">
                <div className="link-item-image">
                  {item.imageCol && (
                    <Image
                      data={item.imageCol}
                      lazyLoad={false}
                      layout="responsive"
                      objectFit="cover"
                      className="image-case-study"
                    />
                  )}
                  <div className="svg-case-study">{CaseStudySvg}</div>
                </div>

                <div className="text-item">
                  <div className="text-header">
                    <span className="text-item-pretitle">{item.pretitle}</span>
                    <h3 className="text-item-title"> {item.title}</h3>
                  </div>
                  {item.description && (
                    <div
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  )}
                  {item.url && (
                    <div className="card-button">
                      <Link href={item.url}>
                        <a className="button is-primary mt-4">
                          {item.callToAction || 'Read as More'}
                        </a>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
