import Link from 'next/link'
import { FC } from 'react'
import { Image } from 'react-datocms'

import { LinkData } from './LinkData'

export const CardColumns: FC<{
  links: LinkData[]
}> = ({ links }) => (
  <div className="card-columns">
    <div
      className="columns"
      style={{
        flexWrap: 'wrap',
        alignItems: 'stretch',
      }}
    >
      {links.map((link) => (
        <div key={link.id} className="column">
          <Link href={link.url || ''}>
            <a>
              <div
                className="card has-background-grey-darker"
                style={{ height: '100%' }}
              >
                {link.image && (
                  <div className="card-image">
                    {link.image && <Image data={link.image} lazyLoad={false} />}
                  </div>
                )}
                <div className="card-content">
                  {link.title && <h5 className="title is-5">{link.title}</h5>}
                  {link.description && (
                    <div className="content">{link.description}</div>
                  )}
                  {/* Shadow link to take up space */}
                  <button
                    className="button is-ghost"
                    style={{ visibility: 'hidden', padding: 0 }}
                  >
                    {link.callToAction}
                  </button>
                  {/* Real link, pinned to bottom */}
                  <button
                    className="button is-ghost"
                    style={{
                      position: 'absolute',
                      bottom: '1.5rem',
                      left: '1.5rem',
                      padding: 0,
                    }}
                  >
                    {link.callToAction}
                  </button>
                </div>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  </div>
)
