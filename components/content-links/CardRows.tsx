import classNames from 'classnames'
import Link from 'next/link'
import { FC } from 'react'
import { Image } from 'react-datocms'

import { LinkData } from './LinkData'

export const CardRows: FC<{
  links: LinkData[]
  imageAlign?: string | null
}> = ({ links, imageAlign }) => (
  <div
    className={classNames('card-rows', {
      'link-alternating': imageAlign === 'Alternating',
      'link-left': imageAlign === 'Left',
    })}
  >
    {links.map((link) => (
      <div
        key={link.id}
        className="columns is-gapless has-background-grey-darker"
        style={{
          flexWrap: 'wrap',
          alignItems: 'stretch',
        }}
      >
        <div className="column is-7">
          <Link href={link.url || ''}>
            <a>
              <div className="p-6">
                {link.title && <div className="title is-2">{link.title}</div>}
                {link.description && (
                  <div className="content has-text-light">
                    {link.description}
                  </div>
                )}

                <a className="button is-primary">{link.callToAction}</a>
              </div>
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
