import Link from 'next/link'
import { FC } from 'react'
import { Image } from 'react-datocms'

import { LinkData } from './LinkData'

export const ThumbColumns: FC<{
  links: LinkData[]
}> = ({ links }) => (
  <div className="thumb-columns">
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
            <a className="has-text-light">
              {link.image && (
                <div className="mb-4">
                  {link.image && <Image data={link.image} />}
                </div>
              )}
              {link.title && <h5 className="title is-5 mb-2">{link.title}</h5>}
              {link.description && (
                <div className="content mb-2">{link.description}</div>
              )}
            </a>
          </Link>
        </div>
      ))}
    </div>
  </div>
)
