import Link from 'next/link'
import { FC } from 'react'
import { Image } from 'react-datocms'

import { LinkData } from './LinkData'

export const CardLinks: FC<{ links: LinkData[] }> = ({ links }) => (
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
          className="card"
          style={{
            height: '100%',
            backgroundColor: link.backgroundColor || undefined,
            color: link.textColor || undefined,
          }}
        >
          {link.image && (
            <div className="card-image">
              <Image data={link.image} />
            </div>
          )}
          <div className="card-content">
            {link.title && (
              <div
                className="title is-6"
                style={{ color: link.textColor || undefined }}
              >
                {link.title}
              </div>
            )}
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
)
