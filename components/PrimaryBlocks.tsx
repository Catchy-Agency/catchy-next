import { FC } from 'react'
import ReactMarkdown from 'react-markdown'

import { PrimaryPageBySlug_primaryPage } from '../gql/types/PrimaryPageBySlug'

export const PrimaryBlocks: FC<{
  blocks: PrimaryPageBySlug_primaryPage['blocks']
}> = ({ blocks }) => (
  <>
    {blocks?.map((block) => {
      switch (block?.__typename) {
        case 'BannerRecord':
          return (
            <section
              className="section"
              key={block.id}
              style={{
                position: 'relative',
                backgroundColor: block.backgroundColor?.hex || '#0D202C',
                color: block.textColor?.hex || '#F6F6F6',
              }}
            >
              {block.backgroundImage?.url && (
                <div
                  style={{
                    background: `url(${block.backgroundImage.url}) no-repeat center bottom`,
                    backgroundSize: 'cover',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                  }}
                ></div>
              )}
              <div className="container">
                {block.title && (
                  <div
                    className="title is-2"
                    style={{ color: block.textColor?.hex || '#F6F6F6' }}
                  >
                    {block.title}
                  </div>
                )}
                {block.text && (
                  <div className="content">
                    <ReactMarkdown>{block.text}</ReactMarkdown>
                  </div>
                )}
              </div>
            </section>
          )

        case 'ClientSetRecord':
          return (
            <section className="section" key={block.id}>
              <div className="container">
                <div className="columns is-mobile is-multiline is-centered">
                  {block.clientSet.map((client) => (
                    <div
                      key={client.id}
                      className="column is-4-mobile is-3-tablet"
                    >
                      <figure className="image">
                        <img
                          src={client.logo?.url || ''}
                          title={client.name || ''}
                          alt={client.name || ''}
                        />
                      </figure>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )

        case 'ContentLinkSetRecord':
          console.log(block)
          // Todo: display size
          // Todo: call to action button
          // Todo: generate URL based on type + slug
          return (
            <section
              className="section"
              key={block.id}
              style={{
                backgroundColor: block.backgroundColor?.hex || undefined,
                color: block.textColor?.hex || undefined,
              }}
            >
              <div className="container">
                {block.links.map((link) => (
                  <div key={link.id} className="columns">
                    <div className="column is-7">
                      {link.seo?.title && (
                        <div
                          className="title is-2"
                          style={{ color: block.textColor?.hex || undefined }}
                        >
                          {link.seo.title}
                        </div>
                      )}
                      {link.seo?.description && (
                        <div className="content">{link.seo.description}</div>
                      )}
                    </div>
                    <div className="column is-5">
                      <figure className="image">
                        <img
                          src={link.seo?.image?.url || ''}
                          title={link.seo?.title || ''}
                          alt={link.seo?.title || ''}
                        />
                      </figure>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )

        case 'FormulaRecord':
          return (
            <section className="section" key={block.id}>
              <div className="container">{'FormulaRecord'}</div>
            </section>
          )

        case 'ServiceSetRecord':
          return (
            <section className="section" key={block.id}>
              <div className="container">
                <div className="columns">
                  {block.services.map((service) => (
                    <div key={service.id} className="column has-text-centered">
                      <div className="title is-4">
                        <span className="fa-stack fa-3x">
                          <i
                            className="fas fa-circle fa-stack-2x"
                            style={{
                              color:
                                service.iconBackgroundColor?.hex || '#0D202C',
                            }}
                          ></i>
                          <i
                            className={`fas fa-${service.iconName} fa-stack-1x`}
                            style={{
                              color: service.iconColor?.hex || '#F6F6F6',
                            }}
                          ></i>
                        </span>
                      </div>
                      {service.title && (
                        <div className="title is-5">{service.title}</div>
                      )}
                      {service.text && (
                        <div className="content">
                          <ReactMarkdown>{service.text}</ReactMarkdown>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )

        case 'TeamRecord':
          return (
            <section className="section" key={block.id}>
              <div className="container">{'TeamRecord'}</div>
            </section>
          )

        case 'TitleTextRecord':
          return (
            <section className="section" key={block.id}>
              <div className="container">
                {block.title && <div className="title is-3">{block.title}</div>}
                {block.text && (
                  <div className="content">
                    <ReactMarkdown>{block.text}</ReactMarkdown>
                  </div>
                )}
              </div>
            </section>
          )

        case 'ViewMoreLinkRecord':
          return (
            <section className="section" key={block.id}>
              <div className="container">{'ViewMoreLinkRecord'}</div>
            </section>
          )

        default:
          return null
      }
    })}
  </>
)
