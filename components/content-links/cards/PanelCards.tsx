import Link from 'next/link';
import { FC, useState } from 'react';
import { ResponsiveImageType } from 'react-datocms';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { AngleDown } from '../../icons';

export interface IPanelCard {
  id: string;
  title: string;
  description: string;
  buttonLabel?: string;
  slug?: string;
  image?: ResponsiveImageType;
  openInNewTab?: boolean;
  themeColor?: string;
}

export const PanelCards: FC<{
  width?: number;
  item: IPanelCard;
}> = ({ width, item }) => {
  const device = useMediaQuery();
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const renderLink = (item: IPanelCard) =>
    item.openInNewTab ? (
      <a
        className="button is-primary mt-4"
        href={item.slug || undefined}
        target="_blank"
        rel="noreferrer"
      >
        <span>{item.buttonLabel || 'Learn More'}</span>
      </a>
    ) : (
      <>
        {item.slug && (
          <Link href={`/${item.slug}`}>
            <a className="button is-primary">
              <span>
                {(item.buttonLabel || 'Learn More')
                  .split(' ')
                  .map((word, index) =>
                    word.includes('-') ? (
                      <span key={index}>{word}</span>
                    ) : (
                      word + ' '
                    ),
                  )}
              </span>
            </a>
          </Link>
        )}
      </>
    );

  return (
    <li
      className="panel-item-wrapper"
      key={`carousel-item-${item.id}`}
      style={
        {
          '--items-width': `${width ? width : '500'}px`,
          '--theme-color': item.themeColor,
        } as React.CSSProperties
      }
    >
      {device === 'mobile' && item.image ? (
        <div className={`panel-item`}>
          <div
            className={`panel-dropdown ${isOpen ? 'rotate-svg' : ''}`}
            onClick={toggleDropdown}
          >
            <h3 className="panel-item-title">{item.title}</h3>
            {AngleDown}
          </div>
          <div
            className={`panel-content-wrapper ${isOpen ? 'open-dropdown' : ''}`}
          >
            <div className={`panel-content`}>
              {item.description && (
                <div
                  className="panel-description"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              )}
              {renderLink(item)}
            </div>
          </div>
        </div>
      ) : (
        <div className="panel-item">
          <h3 className="panel-item-title">{item.title}</h3>
          {item.description && (
            <div
              className="panel-description"
              dangerouslySetInnerHTML={{ __html: item.description }}
            />
          )}

          {item.buttonLabel && (
            <div className="card-button">{renderLink(item)}</div>
          )}
        </div>
      )}
    </li>
  );
};
