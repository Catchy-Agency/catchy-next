import classNames from 'classnames'
import Link from 'next/link'
import { FC } from 'react'
import { Image } from 'react-datocms'

import { LinkData } from './LinkData'

export const ThumbLarge: FC<{
  links: LinkData[]
  imageAlign?: string | null
}> = ({ links, imageAlign }) => (
  <div
    className={classNames('thumb-large', {
      'link-alternating': imageAlign === 'Alternating',
      'link-left': imageAlign === 'Left',
    })}
  >
    {links.map((link) => (
      <div key={link.id} className="columns">
        <div className="column is-7">
          {link.title && <div className="title is-2">{link.title}</div>}
          {link.description && (
            <div className="content">{link.description}</div>
          )}
          <Link href={link.url || ''}>
            <a className="button is-primary" title={link.title || undefined}>
              {link.callToAction}
            </a>
          </Link>
        </div>
        <div className="column is-5">
          <Link href={link.url || ''}>
            <a>{link.image && <Image data={link.image} />}</a>
          </Link>
        </div>
      </div>
    ))}
  </div>
)
