import Link from 'next/link';
import { FC, useState } from 'react';
import { Image, ResponsiveImageType } from 'react-datocms';
import { PrimaryPageBySlug_primaryPage_blocks_TeamRecord } from '../../gql/types/PrimaryPageBySlug';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { AngleDown, IconImageTeam } from '../icons';

export const Team: FC<{
  block: PrimaryPageBySlug_primaryPage_blocks_TeamRecord;
}> = ({ block }) => {
  const device = useMediaQuery();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="team-wrapper">
      {device === 'mobile' ? (
        <div className={`team-container`}>
          <div
            className={`team-dropdown ${isOpen ? 'rotate-svg' : ''}`}
            onClick={toggleDropdown}
            style={{ cursor: 'pointer' }}
          >
            <h4 className="title">{block.teamTitle}</h4>
            {AngleDown}
          </div>
          <div
            className={`team-dropdown-wrapper ${isOpen ? 'open-dropdown' : ''}`}
          >
            <div className={`columns is-mobile is-multiline team-content`}>
              {block.members.map((member) => (
                <div
                  key={member.id}
                  className="column is-6-mobile pb-5"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="img-container">
                    {member.image?.responsiveImage && (
                      <figure className="mb-3">
                        <Image
                          data={
                            member.image.responsiveImage as ResponsiveImageType
                          }
                          lazyLoad={false}
                          className="image-team"
                        />
                        <div className="clip-me" />
                      </figure>
                    )}
                    <div className="svg-iconTeam">{IconImageTeam}</div>
                  </div>
                  <div className="team-line">
                    {member.name &&
                      (member.link !== null ? (
                        <Link href={member.link?.slug || ''}>
                          <a className="title is-size-6 has-text-weight-bold hover-underline">
                            {member.name}
                          </a>
                        </Link>
                      ) : (
                        <h4 className="title is-size-6 has-text-weight-bold ">
                          {member.name}
                        </h4>
                      ))}
                    {member.title && (
                      <h4 className="subtitle is-size-6 has-text-weight-normal has-text-white">
                        {member.title}
                      </h4>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="team-container">
          <h4 className="title">{block.teamTitle}</h4>
          <div className="columns is-mobile is-multiline">
            {block.members.map((member) => (
              <div key={member.id} className="column is-narrow pb-5">
                <div className="img-container">
                  {member.image?.responsiveImage && (
                    <figure className="mb-3">
                      <Image
                        data={
                          member.image.responsiveImage as ResponsiveImageType
                        }
                        lazyLoad={false}
                        className="image-team"
                      />
                      <div className="clip-me" />
                    </figure>
                  )}
                  <div className="svg-iconTeam">{IconImageTeam}</div>
                </div>
                <div className="team-line">
                  {member.name &&
                    (member.link !== null ? (
                      <Link href={member.link?.slug || ''}>
                        <a className="title is-size-6 has-text-weight-bold hover-underline">
                          {member.name}
                        </a>
                      </Link>
                    ) : (
                      <h4 className="title is-size-6 has-text-weight-bold ">
                        {member.name}
                      </h4>
                    ))}
                  {member.title && (
                    <h4 className="subtitle is-size-6 has-text-weight-normal has-text-white">
                      {member.title}
                    </h4>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
