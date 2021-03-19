import classNames from 'classnames'
import Link from 'next/link'
import { FC } from 'react'
import { Image } from 'react-datocms'

import { LinkData } from './LinkData'

export const HeroBanner: FC<{
  links: LinkData[]
  imageAlign?: string | null
}> = ({ links, imageAlign }) => (
  <div
    className={classNames('hero-banner', {
      'link-alternating': imageAlign === 'Alternating',
      'link-left': imageAlign === 'Left',
    })}
  >
    {links.map((link) => (
      <div key={link.id} className="columns is-vcentered">
        <div className="column is-7">
          <Link href={link.url || ''}>
            <a>
              {link.title && <div className="title is-2">{link.title}</div>}
              {link.description && (
                <div className="content has-text-light">{link.description}</div>
              )}

              <button className="button is-primary">{link.callToAction}</button>
            </a>
          </Link>
        </div>
        <div className="column is-5">
          <Link href={link.url || ''}>
            <a>{link.image && <Image data={link.image} lazyLoad={false} />}</a>
          </Link>
        </div>
      </div>
    ))}
  </div>
)
