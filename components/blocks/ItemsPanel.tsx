import { FC, useState } from 'react'
import { Image, ResponsiveImageType } from 'react-datocms'

import { PrimaryPageBySlug_primaryPage_blocks_ItemsPanelRecord } from '../../gql/types/PrimaryPageBySlug'

const ICON_SIZE = '60px'

export const ItemsPanel: FC<{
  block: PrimaryPageBySlug_primaryPage_blocks_ItemsPanelRecord
}> = ({ block }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeItem = block.panelItems[activeIndex]
  if (!activeItem) return null
  return (
    <div className="columns has-text-left">
      {/* List */}
      <div className="column is-two-fifths">
        <div
          className="is-flex is-flex-direction-column"
          style={{ position: 'relative', gap: '1.5rem' }}
        >
          {/* bg line */}
          <div
            style={{
              width: '3px',
              position: 'absolute',
              top: `calc(${ICON_SIZE} / 2)`,
              bottom: `calc(${ICON_SIZE} / 2)`,
              left: `calc(${ICON_SIZE} / 2)`,
              zIndex: -1,
              transform: 'translateX(-50%)',
              backgroundColor: '#fff',
            }}
          />
          {/* services */}
          {block.panelItems.map((item, i) => {
            const isActiveService = activeIndex === i
            return (
              <div
                key={item.id}
                className="is-flex is-align-items-center is-clickable"
                onClick={() => setActiveIndex(i)}
              >
                <div
                  style={{
                    background:
                      'radial-gradient(101.36% 145.94% at 0% 0%, rgba(29, 188, 131, 0.43) 4.96%, rgba(0, 0, 0, 0) 100%) #0d202c',
                    minWidth: ICON_SIZE,
                    width: ICON_SIZE,
                    height: ICON_SIZE,
                    borderRadius: 1000,
                    position: 'relative',
                    zIndex: 10,
                  }}
                >
                  {item.listImage?.responsiveImage && (
                    <img
                      src={item.listImage.responsiveImage.src}
                      style={{
                        width: ICON_SIZE,
                        height: ICON_SIZE,
                        objectFit: 'cover',
                      }}
                    />
                  )}
                </div>
                <div
                  className="is-flex-grow-1 is-flex is-align-items-center"
                  style={{
                    background: isActiveService
                      ? 'radial-gradient(101.36% 145.94% at 0% 0%, rgba(29, 188, 131, 0.43) 4.96%, rgba(0, 0, 0, 0) 100%)'
                      : undefined,
                    height: ICON_SIZE,
                    marginLeft: `calc(-${ICON_SIZE} / 2)`,
                    paddingLeft: `${ICON_SIZE}`,
                  }}
                >
                  <div
                    style={{
                      color: isActiveService ? '#1ebc83' : '#aab1b5',
                      fontWeight: 'bold',
                    }}
                  >
                    {item.listTitle}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      {/* Detail */}
      <div
        className="column"
        style={{ backgroundColor: '#143144' }}
        key={activeItem.id}
      >
        {activeItem.detailImage?.responsiveImage && (
          <figure className="image">
            <Image
              data={
                activeItem.detailImage.responsiveImage as ResponsiveImageType
              }
              lazyLoad={false}
            />
          </figure>
        )}
        <div
          dangerouslySetInnerHTML={{ __html: activeItem.detailText ?? '' }}
        />
      </div>
    </div>
  )
}
