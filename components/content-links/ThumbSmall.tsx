import Link from 'next/link'
import { FC } from 'react'
import { Image } from 'react-datocms'

import { LinkData } from './LinkData'

export const ThumbSmall: FC<{
  links: LinkData[]
}> = ({ links }) => (
  <div className="thumb-small">
    <div
      className="columns"
      style={{
        flexWrap: 'wrap',
        alignItems: 'stretch',
      }}
    >
      {links.map((link) => (
        <div key={link.id} className="column">
          <div className="card">
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
              <Link href={link.url || ''}>
                <a title={link.title || undefined}>{link.callToAction}</a>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)
