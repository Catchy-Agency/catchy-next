import classNames from 'classnames'
import { FC, ReactElement } from 'react'
import ReactMarkdown from 'react-markdown'

import { PageBySlug_page } from '../gql/types/PageBySlug'
import { Container } from './basics/Container'

export const PageContent: FC<{ content: PageBySlug_page['content'] }> = ({
  content,
}) => (
  <>
    {content?.map((item) => {
      if (!item) return null
      let inners: ReactElement | null = null

      switch (item.__typename) {
        case 'HeroRecord':
          inners = (
            <div
              className="py-5"
              style={{
                color: item.textColor?.hex || undefined,
                backgroundColor: item.backgroundColor?.hex || undefined,
              }}
            >
              <Container
                className={classNames({
                  'grid grid-cols-1 md:grid-cols-2 gap-5':
                    item.imageSet?.length,
                })}
              >
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
                <div>
                  {item.headline && <h1>{item.headline}</h1>}
                  {item.text && (
                    <div
                      className="prose my-5"
                      style={{
                        color: item.textColor?.hex || undefined,
                      }}
                    >
                      {item.text}
                    </div>
                  )}
                </div>
              </Container>
            </div>
          )
          break

        case 'ImageSetRecord':
          inners = <Container>'ImageSetRecord'</Container>
          break

        case 'TextRecord':
          inners = (
            <Container>
              <div className="prose">
                <ReactMarkdown>{item.text || ''}</ReactMarkdown>
              </div>
            </Container>
          )
          break

        case 'VideoRecord':
          inners = <Container>'VideoRecord'</Container>
          break
      }

      return (
        <section key={item.id} className="my-5">
          {inners}
        </section>
      )
    })}
  </>
)
