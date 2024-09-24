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
      {device === 'mobile' && (
        <div
          className="panel-item"
          onClick={device === 'mobile' ? toggleDropdown : undefined}
          style={{ cursor: device === 'mobile' ? 'pointer' : 'default' }}
        >
          <div className="panel-dropdown">
            <h3 className="panel-item-title">{item.listTitle}</h3>
            {AngleDown}
          </div>
          {isOpen && (
            <>
              {' '}
              {item.detailText && (
                <div dangerouslySetInnerHTML={{ __html: item.detailText }} />
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
            </>
          )}
        </div>
      )}

      {device !== 'mobile' && (
        <div className="panel-item">
          <h3 className="panel-item-title">{item.listTitle}</h3>
          {item.detailText && (
            <div dangerouslySetInnerHTML={{ __html: item.detailText }} />
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
