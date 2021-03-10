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
          <div
            className="card has-background-grey-darker"
            style={{ height: '100%' }}
          >
            {link.image && (
              <div className="card-image">
                <Link href={link.url || ''}>
                  <a>{link.image && <Image data={link.image} />}</a>
                </Link>
              </div>
            )}
            <div className="card-content">
              {link.title && <h5 className="title is-5">{link.title}</h5>}
              {link.description && (
                <div className="content">{link.description}</div>
              )}
              {/* Shadow link to take up space */}
              <a style={{ visibility: 'hidden' }}>{link.callToAction}</a>
              {/* Real link, pinned to bottom */}
              <Link href={link.url || ''}>
                <a
                  style={{
                    position: 'absolute',
                    bottom: '1.5rem',
                    left: '1.5rem',
                  }}
                  title={link.title || undefined}
                >
                  {link.callToAction}
                </a>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)
