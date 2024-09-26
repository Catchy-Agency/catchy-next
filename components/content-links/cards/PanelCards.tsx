import Link from 'next/link';
import { FC, useState } from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { AngleDown } from '../../icons';

export const PanelCards: FC<{
  width?: number;
  item: any;
}> = ({ width, item }) => {
  const device = useMediaQuery();
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li
      className="panel-item-wrapper"
      key={`carousel-item-${item.id}`}
      style={
        {
          '--items-width': `${width ? width : '500'}px`,
        } as React.CSSProperties
      }
    >
      {device === 'mobile' && item.detailImage ? (
        <div
          className={`panel-item`}
          onClick={toggleDropdown}
          style={{ cursor: 'pointer' }}
        >
          <div className={`panel-dropdown ${isOpen ? 'rotate-svg' : ''}`}>
            <h3 className="panel-item-title">{item.title}</h3>
            {AngleDown}
          </div>
          <div className={`panel-content ${isOpen ? 'open-dropdown' : ''}`}>
            {item.description && (
              <div dangerouslySetInnerHTML={{ __html: item.description }} />
            )}
            {item.detailLink?.slug && (
              <div className="card-button">
                <Link href={`/${item.detailLink.slug}`}>
                  <a className="button is-primary mt-4">
                    {item.detailLinkLabel || 'Learn More'}
                  </a>
                </Link>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="panel-item">
          <h3 className="panel-item-title">{item.title}</h3>
          {item.description && (
            <div dangerouslySetInnerHTML={{ __html: item.description }} />
          )}
          {item.detailLink?.slug && (
            <div className="card-button">
              <Link href={`/${item.detailLink.slug}`}>
                <a className="button is-primary mt-4">
                  {item.detailLinkLabel || 'Learn More'}
                </a>
              </Link>
            </div>
          )}
        </div>
      )}
    </li>
  );
};
