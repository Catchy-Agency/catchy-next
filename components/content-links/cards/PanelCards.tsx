import { FC } from 'react';

export const PanelCards: FC<{
  width?: number;
  panelItems: any[];
}> = ({ width, panelItems }) => (
  <>
    {panelItems.map((item) => {
      return (
        <li
          className="panel-item-wrapper"
          key={`carousel-item-${item.id}`}
          style={
            {
              '--items-width': `${width}px`,
            } as React.CSSProperties
          }
        >
          <div className="panel-item">
            <h3 className="panel-item-title">{item.listTitle}</h3>
            {item.detailText && (
              <div dangerouslySetInnerHTML={{ __html: item.detailText }} />
            )}
          </div>
        </li>
      );
    })}
  </>
);
