import { FC, useState } from 'react';
import { Image, ResponsiveImageType } from 'react-datocms';
import { PrimaryPageBySlug_primaryPage_blocks_TeamRecord } from '../../gql/types/PrimaryPageBySlug';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { AngleDown, IconImageTeam } from '../icons';

export const Team: FC<{
  block: PrimaryPageBySlug_primaryPage_blocks_TeamRecord;
  width?: number;
}> = ({ block, width }) => {
  const device = useMediaQuery();
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="team-wrapper"
      style={
        {
          '--items-width': `${width ? width : '500'}px`,
        } as React.CSSProperties
      }
    >
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
            className={`columns is-mobile is-multiline team-content ${
              isOpen ? 'open-dropdown' : ''
            }`}
          >
            {block.members.map((member) => (
              <div
                key={member.id}
                className="column is-6-mobile is-4-tablet is-2-desktop pb-5"
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
                    </figure>
                  )}
                  <div className="svg-iconTeam">{IconImageTeam}</div>
                </div>
                <div className="team-line">
                  {member.name && (
                    <h4
                      className="title is-size-6 has-text-weight-bold hover-underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {member.name}
                    </h4>
                  )}
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
      ) : (
        <div className="team-container">
          <h4 className="title">{block.teamTitle}</h4>
          <div className="columns is-mobile is-multiline">
            {block.members.map((member) => (
              <div
                key={member.id}
                className="column is-6-mobile is-4-tablet is-2-desktop pb-5"
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
                    </figure>
                  )}
                  <div className="svg-iconTeam">{IconImageTeam}</div>
                </div>
                <div className="team-line">
                  {member.name && (
                    <h4 className="title is-size-6 has-text-weight-bold hover-underline">
                      {member.name}
                    </h4>
                  )}
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
