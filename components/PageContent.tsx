import { FC, ReactElement } from 'react'
import ReactMarkdown from 'react-markdown'

import { PageBySlug_page } from '../gql/types/PageBySlug'

export const PageContent: FC<{ content: PageBySlug_page['content'] }> = ({
  content,
}) => (
  <div className="p-5">
    {content?.map((item) => {
      if (!item) return null
      let inners: ReactElement | null = null
      switch (item.__typename) {
        case 'HeroRecord':
          const colorStyle = {
            color: item.textColor?.hex || undefined,
            backgroundColor: item.backgroundColor?.hex || undefined,
          }
          inners = (
            <div className="p-10" style={colorStyle}>
              {item.headline && <h3>{item.headline}</h3>}
              {item.text && (
                <div style={colorStyle} className="prose">
                  {item.text}
                </div>
              )}
              {item.imageSet &&
                item.imageSet.map(({ responsiveImage }) =>
                  responsiveImage ? (
                    <img
                      key={responsiveImage.src}
                      src={responsiveImage.src}
                      srcSet={responsiveImage.srcSet || ''}
                      title={responsiveImage.title || ''}
                      alt={responsiveImage.alt || ''}
                    />
                  ) : null,
                )}
            </div>
          )
          break
        case 'ImageSetRecord':
          inners = <p>'ImageSetRecord'</p>
          break
        case 'TextRecord':
          inners = (
            <div className="prose">
              <ReactMarkdown>{item.text || ''}</ReactMarkdown>
            </div>
          )
          break
        case 'VideoRecord':
          inners = <p>'VideoRecord'</p>
          break
      }
      return (
        <div key={item.id} className="my-5">
          {inners}
        </div>
      )
    })}
  </div>
)
