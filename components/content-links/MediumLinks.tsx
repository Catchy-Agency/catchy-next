import Link from 'next/link'
import { FC } from 'react'
import { Image } from 'react-datocms'

import { LinkData } from './LinkData'

export const MediumLinks: FC<{ links: LinkData[] }> = ({ links }) => (
  <>
    {links.map((link) => (
      <div key={link.id} className="columns is-gapless is-vcentered block-p">
        <div className="column is-7">
          <div className="p-6">
            {link.title && (
              <div
                className="title is-2"
                style={{ color: link.textColor || undefined }}
              >
                {link.title}
              </div>
            )}
            {link.description && (
              <div className="content">{link.description}</div>
            )}
            <Link href={link.url || ''}>
              <a className="button" title={link.title || undefined}>
                {link.callToAction}
              </a>
            </Link>
          </div>
        </div>
        <div className="column is-5">
          {link.image && <Image data={link.image} />}
        </div>
      </div>
    ))}
  </>
)
